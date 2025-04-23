"use client"

import { useState, useEffect } from "react"

// Update the InstagramVideoProps interface
interface InstagramVideoProps {
  videoUrl: string
  isLocalVideo?: boolean
}

// Update the component to match the new requirements
export function InstagramVideo({ videoUrl, isLocalVideo = false }: InstagramVideoProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Extract Instagram post ID from URL
  const getInstagramPostId = (url: string) => {
    // Handle different Instagram URL formats
    const regex = /instagram.com\/p\/([^/?]+)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const postId = getInstagramPostId(videoUrl)

  useEffect(() => {
    // Reset loading state when URL changes
    setIsLoading(true)

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [videoUrl])

  return (
    <div className="overflow-hidden">
      {isLoading ? (
        <div className="aspect-[9/16] flex items-center justify-center bg-white">
          <div className="animate-spin h-8 w-8 border-4 border-pink-500 rounded-full border-t-transparent"></div>
        </div>
      ) : isLocalVideo ? (
        // Local video player with Instagram-like header
        <div className="flex flex-col aspect-[9/16] border-2 border-pink-500 rounded-md overflow-hidden">
          {/* Custom Instagram-like header */}
          <div className="p-3 border-b flex items-center">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center border border-gray-200 mr-2">
              <div className="text-pink-500 font-bold text-xs">S4Y</div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">sushi4you</p>
              <p className="text-xs text-gray-500">Sushi & Japanese Food</p>
            </div>
          </div>

          {/* Video container */}
          <div className="flex-1 relative">
            <video
              src={videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        </div>
      ) : postId ? (
        // Instagram embed with pink border
        <div className="aspect-[9/16] border-2 border-pink-500 rounded-md overflow-hidden">
          <iframe
            src={`https://www.instagram.com/p/${postId}/embed/captioned?autoplay=1&mute=1`}
            className="w-full h-full border-0"
            scrolling="no"
            allowFullScreen
            title="Instagram video"
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <div className="aspect-[9/16] flex items-center justify-center bg-white border-2 border-pink-500 rounded-md">
          <div className="text-center p-4">
            <p className="text-gray-500 mb-2">Vídeo não disponível</p>
          </div>
        </div>
      )}
    </div>
  )
}
