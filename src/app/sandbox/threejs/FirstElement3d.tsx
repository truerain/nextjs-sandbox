
import React, { useRef } from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

import styles from './threejs.module.css'
import { OrbitControls } from '@react-three/drei';


export default function FirstElement3d() {
  const refMesh = useRef(null);
  
  useFrame( (state, delta) => {
    refMesh.current.rotation.y += delta;
  })
  

  return (
    <>
      <directionalLight position={[1,1,1]} />
      <axesHelper scale={10} />
      <OrbitControls />
      <mesh 
        ref={refMesh} 
        position={[0, 0, 2]}
        rotation-z={ THREE.MathUtils.degToRad(45) }
        scale={[ 2, 1, 1 ]}
        >
        <boxGeometry />
        <meshStandardMaterial 
          color="#e67e22" 
          opacity={0.5}
          transparent={true}
          />
        <axesHelper />
        <mesh
          scale={[.1,.1,.1]}
          position-y={1}
          >
          <sphereGeometry />
          <meshStandardMaterial color="red" />
          <axesHelper scale={5} />
        </mesh>
      </mesh>
    </>
  )
}
