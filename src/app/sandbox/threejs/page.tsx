'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import FirstElement3d from './FirstElement3d'
import SecondElement3d from './SecondElement3d'
import FirstMaterial from './FirstMaterial'

export default function Threejs() {
  return (
    <div className="h-full">
      <Canvas>
        {/* <FirstElement3d /> */}
        {/* <SecondElement3d /> */}
        <FirstMaterial />
      </Canvas>
    </div>
  )
}
