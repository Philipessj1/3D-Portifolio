/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');
  const cellphone = useGLTF('./cell_phone/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={ isMobile ? [-10, 15, -16] : [-20, 50, 10]}
        angle={ isMobile ? 0.1 : 0.12}
        penumbra={1}
        intensity={0.2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={ isMobile ? cellphone.scene : computer.scene }
        scale={ isMobile ? 0.35 : 0.75 }
        position={ isMobile ? [0, -1.5, 0] : [0, -3.25, -1.5]}
        rotation={ isMobile ? [1.57, 0, -1.3] : [-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    
    setIsMobile(mediaQuery.matches);

    // controla a mudança do mediaQuery.
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }
    
    // adiciona um e.listener para mudanças no tamanho da tela.
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // remove o listener quando o componente é desmontado.
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={ false }
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={ isMobile } />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas