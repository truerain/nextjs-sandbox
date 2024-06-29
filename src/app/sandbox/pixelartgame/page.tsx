'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { GAME_WIDTH, GAME_HEIGHT } from './constants'
import { Game } from './game'

export default function PixelArgGame() {
  const refCanvas = useRef<HTMLCanvasElement | null>(null);
  const refRequest = useRef<number>()
  
  const contextRef = useRef<CanvasRenderingContext2D | null> (null);
  const gameRef = useRef<Game> ();
  const timeRef = useRef<number> (0)


  const animate = useCallback((timeStamp: number) => {
    refRequest.current = requestAnimationFrame(animate)

    if(contextRef.current && gameRef.current ) {
      const deltaTime = timeStamp - timeRef.current;
      timeRef.current = timeStamp;
      //console.log(deltaTime)

      contextRef.current.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
      gameRef.current.render(contextRef.current, deltaTime)
    }

    
  }, [])

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = refCanvas.current;
    
    if(canvas) {
      canvas.width = GAME_WIDTH
      canvas.height = GAME_HEIGHT

      contextRef.current = canvas.getContext('2d')!;
      gameRef.current = new Game();
    }

    refRequest.current = requestAnimationFrame(animate)
  }, [])


  return (
    <div className="relative h-full bg-zinc-200">
      <canvas ref={refCanvas} className="absolute border-2 border-red-700 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></canvas>
    </div>
  )
}
