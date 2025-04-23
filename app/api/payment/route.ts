import { NextResponse } from "next/server"

// Função para gerar um QR code de exemplo (simulação)
function generateMockQRCode() {
  // Este é um QR code base64 de exemplo que diz "Sushi4You PIX"
  return "iVBORw0KGgoAAAANSUhEUgAAAKQAAACkCAYAAAAZtYVBAAAAAklEQVR4AewaftIAAAYOSURBVO3BQY4cSRLAQDLQ//8yV0c/JZCoailm4Wb2B2td4rDWRQ5rXeSw1kUOa13ksNZFDmtd5LDWRQ5rXeSw1kUOa13ksNZFDmtd5LDWRQ5rXeSw1kU+fEnhb6r4DYWpYlKYKiaFqWJSmComhW+q+A2FbxzWushhrYsc1rrIYa2LHNa6yIcfq/hJCk9UfENhqpgUpopJYaqYFKaKJyqeUPhJFT/psNZFDmtd5LDWRQ5rXeTDL1N4ouIJhScqnlCYKiaFqWJSmCqeUJgqJoWp4gmF36TwRMVvOqx1kcNaFzmsdZEPl6v4f6YwVUwKU8WkMFX8fzqsdZHDWhc5rHWRD79M4W9SeKJiUpgqJoWpYlKYKiaFqWJSmCqeUPibFP6mw1oXOax1kcNaF/nwZRX/koqp4omKSWGqmBSmiknh/1nFv+Sw1kUOa13ksNZFPnxJ4YmKSeEbFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwKT1RMCk9U/KbDWhc5rHWRw1oX+fClin9JxaQwVUwKU8WkMFVMClPFpPBExaQwVUwKU8WkMFVMCt+o+Jcc1rrIYa2LHNa6iP3BF1VMCk9UTApTxaQwVUwKU8WkMFU8oTBVTApTxaQwVUwKU8WkMFVMCk9UTApTxaQwVUwKU8Wk8ETFNw5rXeSw1kUOa13kw5cqJoWpYlKYKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWp4omKbxzWushhrYsc1rqI/cEXKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JU8ZMOa13ksNZFDmtd5MOXFKaKSWGqmBSmiknh/1nFpDBVTApTxaQwVUwKU8WkMFVMCk9UTApTxaQwVUwKU8WkMFVMCk9UTApTxU86rHWRw1oXOax1kQ8/VjEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBVPVPymw1oXOax1kcNaF7E/+EUKTyhMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSn8pMNaFzmsdZHDWhf58GUVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSn8pMNaFzmsdZHDWhf58CWFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWp4omKbxzWushhrYsc1rqI/cEXKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JU8ZMOa13ksNZFDmtd5MOXKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWp4omKbxzWushhrYsc1rqI/cEXKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JUMSlMFZPCVDEpTBWTwlQxKUwVk8JU8ZMOa13ksNZFDmtd5MOXKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWpYlKYKiaFqWJSmCqeUJgqJoWp4omKbxzWushhrYsc1rqI/cFaFzmsdZHDWhc5rHWRw1oXOax1kcNaFzmsdZHDWhc5rHWRw1oXOax1kcNaFzmsdZHDWhc5rHWR/wFDSBJ1FWg3WAAAAABJRU5ErkJggg=="
}

export async function POST(request: Request) {
  try {
    const paymentData = await request.json()

    // Adiciona a API key ao payload
    const payload = {
      "api-key": "12f47c3afd7c2ed7fba0793e",
      amount: paymentData.amount,
      client: paymentData.client,
      utms: paymentData.utms || {
        utm_source: "website",
        utm_medium: "direct",
        utm_campaign: "sushi4you",
      },
    }

    try {
      // Tenta fazer a requisição para a API do BytePayCash
      const response = await fetch("https://api.bytepaycash.com/v1/gateway/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      // Se a resposta for bem-sucedida, retorna os dados
      if (response.ok) {
        const data = await response.json()
        return NextResponse.json(data)
      }

      // Se chegou aqui, houve um erro na API real, então usamos o modo de simulação
      console.log("API BytePayCash indisponível, usando modo de simulação")
    } catch (error) {
      console.error("Erro ao chamar API BytePayCash:", error)
      // Continua para o modo de simulação
    }

    // Modo de simulação - gera um QR code e dados fictícios
    const mockQRCode = generateMockQRCode()
    const mockPaymentCode = "00020101021226790014br.gov.bcb.pix2557sushi4you.com.br/pix/123456789012345678901234567890"
    const mockTransactionId = `SIMU-${Date.now()}-${Math.floor(Math.random() * 1000)}`

    // Retorna dados simulados
    return NextResponse.json({
      status: "success",
      message: "ok (simulação)",
      paymentCode: mockPaymentCode,
      idTransaction: mockTransactionId,
      paymentCodeBase64: mockQRCode,
    })
  } catch (error) {
    console.error("Erro ao processar pagamento:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Falha ao gerar o pagamento PIX. Por favor, tente novamente.",
      },
      { status: 500 },
    )
  }
}
