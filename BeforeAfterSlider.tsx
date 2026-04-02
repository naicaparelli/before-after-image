import React, { useState, useRef } from 'react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  aspectRatio?: string
  beforeLabel?: string
  afterLabel?: string
  showLabels?: boolean
  sliderColor?: string
  handleSize?: number
  maxWidth?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  aspectRatio = '16 / 9',
  beforeLabel = 'ANTES',
  afterLabel = 'DEPOIS',
  showLabels = true,
  sliderColor = 'white',
  handleSize = 48,
  maxWidth = '1200px'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleMouseDown = () => setIsDragging(true)
  
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX)
    }
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        touchAction: 'none',
        maxWidth,
        margin: '0 auto'
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Imagem "Depois" (fundo) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(https://raw.githubusercontent.com/naicaparelli/before-after-image/refs/heads/main/newimage.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Imagem "Antes" (overlay com clip) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(https://raw.githubusercontent.com/naicaparelli/before-after-image/refs/heads/main/oldimage.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      />

      {/* Linha divisória */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPosition}%`,
          width: '4px',
          backgroundColor: sliderColor,
          transform: 'translateX(-50%)',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          cursor: 'ew-resize'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Handle circular */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${handleSize}px`,
            height: `${handleSize}px`,
            backgroundColor: sliderColor,
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'ew-resize'
          }}
        >
          {/* Setas */}
          <div style={{ 
            display: 'flex', 
            gap: '2px', 
            color: sliderColor === 'white' ? '#666' : '#fff',
            fontSize: `${handleSize * 0.375}px`,
            fontWeight: 'bold'
          }}>
            <span>←</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Labels */}
      {showLabels && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 'clamp(12px, 3vw, 20px)',
              left: 'clamp(12px, 3vw, 20px)',
              padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: 'white',
              borderRadius: '4px',
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              fontWeight: '600'
            }}
          >
            {beforeLabel}
          </div>
          <div
            style={{
              position: 'absolute',
              top: 'clamp(12px, 3vw, 20px)',
              right: 'clamp(12px, 3vw, 20px)',
              padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: 'white',
              borderRadius: '4px',
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              fontWeight: '600'
            }}
          >
            {afterLabel}
          </div>
        </>
      )}
    </div>
  )
}
