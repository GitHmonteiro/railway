"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { MultiStepModal } from "@/components/multi-step-modal"
import { Logo } from "@/components/logo"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useCartStore } from "@/lib/cart"
import { CartDrawer } from "@/components/cart-drawer"
import Script from "next/script"
import { FacebookPixelService } from '../app/checkout/pixel.service';
FacebookPixelService.initialize();

FacebookPixelService.track('PageView', {
  content_type: 'product',
  contents: products,
  num_items: products.length
});
FacebookPixelService.track('ViewContent', {
  content_type: 'product',
  contents: products,
  num_items: products.length
});
// Define the user info type for better type safety
interface UserInfo {
  name: string
  address: string
  neighborhood: string
  city: string
  state: string
  complement: string
  reference: string
}

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [showStoreFound, setShowStoreFound] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showCart, setShowCart] = useState(false)

  const { getItemCount } = useCartStore()
  const itemCount = getItemCount()

  // Load user data from localStorage on component mount
  useEffect(() => {
    // Wrap in try/catch to handle potential localStorage errors
    try {
      const savedUserInfo = localStorage.getItem("sushi4you_user_info")

      if (savedUserInfo) {
        // If we have saved user info, parse and use it
        setUserInfo(JSON.parse(savedUserInfo))
        setShowModal(false)
      } else {
        // If no saved user info, show the modal
        setShowModal(true)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
      // If localStorage fails, default to showing the modal
      setShowModal(true)
    }

    // Set loading to false after checking localStorage
    setIsLoading(false)
  }, [])

  const handleModalComplete = (data: UserInfo) => {
    setUserInfo(data)
    setShowModal(false)

    // Save user info to localStorage
    try {
      localStorage.setItem("sushi4you_user_info", JSON.stringify(data))
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }

    setShowStoreFound(true)

    // Hide store found modal after 3 seconds
    setTimeout(() => {
      setShowStoreFound(false)
    }, 3000)
  }

  // Function to clear user data (useful for testing)
  const clearUserData = () => {
    try {
      localStorage.removeItem("sushi4you_user_info")
      setUserInfo(null)
      setShowModal(true)
    } catch (error) {
      console.error("Error clearing localStorage:", error)
    }
  }

  const promotionalProducts = products.slice(0, 4)
  const regularProducts = products.slice(4)

  // Don't render anything while checking localStorage to prevent flash of modal
  if (isLoading) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {showModal && <MultiStepModal onComplete={handleModalComplete} />}

      {showStoreFound && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-pink-500 mb-2">Loja encontrada!</h2>
            <p className="text-lg">Loja encontrada a 2,2 km de {userInfo?.neighborhood}</p>
            <Button className="mt-4 bg-pink-500 hover:bg-pink-600" onClick={() => setShowStoreFound(false)}>
              Continuar
            </Button>
          </div>
        </div>
      )}

<header 
  style={{ backgroundImage: 'url("/images/381043306_684701029912554_6472057376029863136_n.jpg")', backgroundSize: 'cover', backgroundPosition: 'center top' }} 
  className="text-white py-6"
>
      
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <Logo />
            {userInfo && (
              <div className="mt-2 text-center">
                {/* Removed customer name as requested */}
                <p className="text-sm">
                  {userInfo.address}, {userInfo.complement} - {userInfo.neighborhood}
                </p>
                {/* Updated store status indicator with oval white background */}
                <div className="flex justify-center mt-3 mb-2">
                  <div className="bg-white text-black px-4 py-1 rounded-full flex items-center shadow-sm">
                    <span className="text-sm font-medium">Loja mais próxima à 2,2km</span>
                    <div className="ml-2 h-3 w-3 rounded-full bg-pink-500 animate-pulse"></div>
                  </div>
                </div>

                <button onClick={clearUserData} className="text-xs underline mt-1 opacity-70 hover:opacity-100">
                  Alterar endereço
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-cyan-600">Promoções</h2>
            <div className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              Ofertas especiais
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promotionalProducts.map((product) => (
              <ProductCard key={product.id} product={product} isPromo={true} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-cyan-600 mb-6">Cardápio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProducts.map((product) => (
              <ProductCard key={product.id} product={product} isPromo={false} />
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-4 right-4">
        <Button
          className="bg-pink-500 hover:bg-pink-600 rounded-full h-16 w-16 shadow-lg relative"
          onClick={() => setShowCart(true)}
        >
          <ShoppingBag className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-800 rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
              {itemCount}
            </span>
          )}
        </Button>
      </div>

      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />
    </div>
  )
}
