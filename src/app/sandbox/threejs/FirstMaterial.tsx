
import React, { useEffect, useRef } from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

import styles from './threejs.module.css'
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { metalness } from 'three/examples/jsm/nodes/Nodes.js';


export default function FirstMaterial() {
  const refBox = useRef(null);
  const refTorus = useRef(null);
  
  useFrame( (state, delta) => {
    //refMesh.current.rotation.y += delta;
  })
  
  useEffect(() => {
    refTorus.current.material = refBox.current.material;
  })

  const { roughness, matalness,clearcoat } = useControls({
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    matalness: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.01 },
  })

  return (
    <>
      <OrbitControls />

      <ambientLight itensity={0.2} />
      <directionalLight position={[0,1,0]} />
      <directionalLight position={[1,2,8]} intensity={0.7} />

      <mesh 
        ref={refBox} 
        position={[0.7, 0, 0]}
        >
        <torusKnotGeometry />
        <meshPhysicalMaterial
          visible={true}
          transparent={false}
          opacity={1}
          depthTest={true}
          depthWrite={true}
          side={THREE.FrontSide}

          color="#d25383"
          emissive={0x666600}
          roughness={roughness}
          metalness={matalness}
          />

{/*         <meshBasicMaterial 
          color="yellow"
          visible={true}
          wireframe={false}
          transparent={true}
          opacity={.5}
          depthTest={true}
          side={THREE.FrontSide}
          />
 */}      </mesh>

      <mesh 
        ref={refTorus} 
        position={[-2, 0, 0]}
        >
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  )
}
