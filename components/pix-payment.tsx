"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Copy, RefreshCw } from "lucide-react"
import { useCartStore } from "@/lib/cart"
import { useRouter } from "next/navigation"

interface PixPaymentProps {
  paymentCode: string
  paymentCodeBase64: string
  transactionId: string
  onClose?: () => void
  isSimulation?: boolean
}

export function PixPayment({ paymentCode, paymentCodeBase64, transactionId, onClose, isSimulation }: PixPaymentProps) {
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState(900) // 15 minutes in seconds
  const router = useRouter()
  const { clearCart } = useCartStore()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(paymentCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleFinish = () => {
    clearCart()
    router.push("/")
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-cyan-600 mb-2">Pagamento PIX</h2>
        <p className="text-gray-600">Escaneie o QR Code abaixo ou copie o código PIX para realizar o pagamento</p>
        <div className="mt-2 bg-yellow-50 text-yellow-800 p-2 rounded-md text-sm flex items-center justify-center">
          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          Expira em {formatTime(timeLeft)}
        </div>

        {isSimulation && (
          <div className="mt-2 bg-blue-50 text-blue-800 p-2 rounded-md text-sm">
            Modo de simulação ativo - Nenhum pagamento real será processado
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center mb-6">
        <div className="bg-white p-4 rounded-lg border-2 border-pink-500 mb-4">
          {paymentCodeBase64 && (
            <Image
              src={`data:image/png;base64,${paymentCodeBase64}`}
              alt="QR Code PIX"
              width={200}
              height={200}
              className="mx-auto"
            />
          )}
        </div>

        <div className="w-full bg-gray-50 p-3 rounded-md border border-gray-200 mb-4">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500 mb-1">Código PIX</div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-cyan-600 hover:text-cyan-700"
              onClick={handleCopyCode}
            >
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? "Copiado" : "Copiar"}
            </Button>
          </div>
          <div className="text-xs break-all bg-white p-2 rounded border border-gray-200 max-h-20 overflow-y-auto">
            {paymentCode}
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4 text-center">
          <p>ID da transação: {transactionId}</p>
          <p className="mt-2">Após o pagamento, você receberá a confirmação por e-mail.</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button className="w-full bg-pink-500 hover:bg-pink-600" onClick={handleFinish}>
          Concluir
        </Button>
        {onClose && (
          <Button variant="outline" className="w-full" onClick={onClose}>
            Voltar
          </Button>
        )}
      </div>
    </div>
  )
}
