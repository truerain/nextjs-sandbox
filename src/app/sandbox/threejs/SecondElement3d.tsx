
import React, { useEffect, useRef } from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

import styles from './threejs.module.css'
import { Box, OrbitControls } from '@react-three/drei';

function MyBox( props ) {
  const geom = new THREE.BoxGeometry()
  return <mesh { ...props } geometry={geom}></mesh>
}

export default function SecondElement3d() {
  const refMesh = useRef(null);
  const refWireMesh = useRef(null)

  const { xSize, ySize, zSize, xSegments, ySegments, zSegments } = useControls({
    xSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    ySize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    zSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    xSegments: { value: 1, min: 1, max: 10, step: 1 },
    ySegments: { value: 1, min: 1, max: 10, step: 1 },
    zSegments: { value: 1, min: 1, max: 10, step: 1 },
  })


  useEffect( () => {
    refWireMesh.current.geometry = refMesh.current.geometry
  }, [xSize, ySize, zSize, xSegments, ySegments, zSegments])
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />
      <axesHelper scale={10} />
     
      <mesh ref={refMesh}>
        <boxGeometry args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]}/>
        <meshStandardMaterial color="#1abc9c" />
      </mesh>
      <mesh ref={refWireMesh}>
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
{/* 
      <Box position={[1.2, 0, 0]}>
        <meshStandardMaterial color="#8e44ad" />
      </Box>

      <MyBox position={[-1.2, 0, 0]}>
      <meshStandardMaterial color="#e74c3c" />
      </MyBox>
 */}    
    </>
  )
}
