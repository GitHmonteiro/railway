<?php

$valor_pix = 9700;  // Valor do Pix sem a vírgula. Se o produto custar R$ 37,50 por exemplo, tem que colocar 3750
$secretKey = 'sk_qQmlQ876zqRZb1XrdGKnkI6N0sLmmXLfzC53EwjqGWrE2iiZ';  // Chave Privada. Lembre-se de colocar entre as chaves 

$nomes_aleatorios = [
    'Marcio',
    'Marcelo',
    'Juan',
    'Ryan',
    'Carlos',
    'Matheus',
    'Samuel',
    'Lucas',
    'Kauan',
    'Maycon',
    'Leonardo',
    'Igor',
    'Luis',
    'Juvenal',
    'Wagner',
    'Rodolfo',
    'Jucier',
    'Joana',
    'Maria',
    'Ana',
    'Isabel',
    'Eduarda',
    'Isabelle',
    'Ravena',
    'Mariana',
    'Raquel'
];

$sobrenomes_aleatorios = [
    'da Silva Santos',
    'Oliveira de Souza',
    'Rodrigues Alves',
    'Cardoso Batista',
    'Barbosa Lima',
    'Campos Carvalho',
    'da Silva Dias',
    'Fernandes Carvalho',
    'Ferreira Lima',
    'Lopes Machado',
    'Martins Medeiros',
    'Oliveira Soares',
    'Lopes Machado',
    'Moura',
    'Nascimento',
    'Pereira',
    'Rocha',
    'Santana',
    'Soares',
    'Martins',
    'Macedo',
    'Saraiva'
];

$emails_aleatorios = [
    'gmail',
    'hotmail',
    'outlook',
    'bool',
    'live',
    'yahoo',
    'uol',
    'icloud',
    'zoho',
    'terra',
    'r7',
    'yandex',
    'protonmail'
];

function gerarCPF()
{
    $cpf = [];
    for ($i = 0; $i < 9; $i++) {
        $cpf[$i] = rand(0, 9);
    }
    $soma = 0;
    for ($i = 0, $peso = 10; $i < 9; $i++, $peso--) {
        $soma += $cpf[$i] * $peso;
    }
    $resto = $soma % 11;
    $cpf[9] = ($resto < 2) ? 0 : 11 - $resto;
    $soma = 0;
    for ($i = 0, $peso = 11; $i < 10; $i++, $peso--) {
        $soma += $cpf[$i] * $peso;
    }
    $resto = $soma % 11;
    $cpf[10] = ($resto < 2) ? 0 : 11 - $resto;
    return implode('', $cpf);
}


define('CLIENTE_NOME', $nomes_aleatorios[array_rand($nomes_aleatorios)] . ' ' . $sobrenomes_aleatorios[array_rand($sobrenomes_aleatorios)]);
define('CLIENTE_EMAIL', str_replace(' ', '', strtolower(CLIENTE_NOME)) . '@' . $emails_aleatorios[array_rand($emails_aleatorios)] . '.com');
define('CLIENTE_DOCUMENTO', gerarCPF());
define('CLIENTE_PHONE', rand(11, 99) . '9' . rand(1000, 9999) . '' . rand(1000, 9999));

define('TOKEN_GATEWAY', base64_encode("$secretKey:x"));
define('GTW_VALOR_PIX', $valor_pix);
define('URL_API_CHECKOUT', 'https://api.axionpay.com.br/v1/transactions');

function request_GTW()
{
    $curl_GTW = curl_init();

    curl_setopt_array($curl_GTW, array(
        CURLOPT_URL => URL_API_CHECKOUT,
        CURLOPT_HTTPHEADER => array(
            "accept: application/json",
            'Content-Type: application/json',
            'Authorization: Basic ' . TOKEN_GATEWAY
        ),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode(
            [
                'amount' => GTW_VALOR_PIX,
                'customer' => [
                    'name' => CLIENTE_NOME,
                    'email' => CLIENTE_EMAIL,
                    'phone' => CLIENTE_PHONE,
                    'document' => [
                        'number' => CLIENTE_DOCUMENTO,
                        'type' => "cpf"
                    ]
                ],
                'items' => [
                    [
                        'title' => "Oportunidade única",
                        'unitPrice' => intval(GTW_VALOR_PIX),
                        'tangible' => false,
                        'quantity' => 1,
                    ]
                ],
                'paymentMethod' => "pix",
                'pix' => [
                    'expiresInDays' => 3
                ],
                'installments' => 1,
            ]
        ),
    ));

    $response = curl_exec($curl_GTW);
    curl_close($curl_GTW);

    if (isset(explode('"qrcode":"', $response)[1]) && explode('"qrcode":"', $response)[1] != '') {
        return $response;
    } else {
        return  false;
    }
}

function gerar_pix()
{
    $request_pix = request_GTW();

    if ($request_pix) {
        if (isset(explode('"qrcode":"', $request_pix)[1]) && explode('"qrcode":"', $request_pix)[1] != '') {
            $rsp_pix_copia = explode('"', explode('"qrcode":"', $request_pix)[1])[0];
            return $rsp_pix_copia;
        } else {
            return  'Erro ao gerar PIX!';
        }
    } else {
        return 'Erro ao gerar PIX!';
    }
}

$pix_copia = gerar_pix();  // A função gerar_pix() retorna uma String com o pix copia e cola. 

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AxionPay</title>

    <style>
    :root {
        --cor_principal_checkout: #e63888;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    #box_pix_checkout {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #box_pix_checkout .pix {
        width: 100%;
        max-width: 330px;
        padding: 5px;
    }

    #box_pix_checkout.erro .pix {
        display: none;
    }

    #box_pix_checkout .erro_pix {
        display: none;
    }

    #box_pix_checkout.erro .erro_pix {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #box_pix_checkout.erro .erro_pix h1 {
        font-size: 18px;
        font-weight: 600;
    }

    #box_pix_checkout .pix img {
        width: 100%;
        max-width: 395px;
        z-index: 2;
    }

    #box_pix_checkout .pix .bottom {
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-direction: column;
        width: 100%;
        padding: 0 30px 10px 30px;
        margin-top: -25px;
        z-index: 3;
    }

    #box_pix_checkout .pix input {
        font-size: 16px;
        padding: 3px 5px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        width: 100%;
    }

    #box_pix_checkout .pix .btn_copiar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        background-color: var(--cor_principal_checkout);
        padding: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
    }

    #box_pix_checkout .pix .btn_copiar svg {
        fill: #ffffff;
        margin-right: 5px;
    }

    #box_pix_checkout .pix .btn_copiar p {
        font-size: 20px;
        color: #ffffff;
        font-weight: 600;
    }
    </style>
</head>

<body>

    <div id="box_pix_checkout" class="<?php echo $pix_copia == 'Erro ao gerar PIX!' ? 'erro' : '' ?>">

        <div class="pix">

            <img src="<?php echo $pix_qr; ?>" alt="">

            <div class="bottom">
                <div class="box_copiar">
                    <input type="text" id="input_pix_copia" value="<?php echo $pix_copia ?>">
                    <div class="mascara"></div>
                </div>
                <div class="btn_copiar" id="btn_copiar_pix">
                    <svg class="classIcons" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                        width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                    </svg>
                    <p>COPIAR PIX</p>
                </div>
            </div>
        </div>

        <div class="erro_pix">
            <h1>Erro ao gerar PIX!</h1>
        </div>

    </div>

</body>

<script>
document.getElementById("btn_copiar_pix").addEventListener("click", () => {
    document.getElementById("input_pix_copia").select();
    document.execCommand("copy");
    document.getElementById("btn_copiar_pix").innerHTML = "<p>PIX COPIADO!</p>";
    document.getElementById("input_pix_copia").blur();
});
</script>

</html>
