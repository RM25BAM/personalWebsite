import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2}
      groundColor="black" />
        <pointLight intensity={15} />
        <spotLight
          position={[-20, 3, 10]}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize={1024}
        
        />
        <primitive 
          object={computer.scene}
          scale={isMobile ? 0.75 : 1}
          position={isMobile ? [0, -2.5, -1.2] : [3, -2.5, -1.5]}
          rotation={[0, 0, 0]}
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() =>{
    // add listeners for screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
  // set value to isMobile 
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  }
  //callback function to change changes to the media query size
  mediaQuery.addEventListener('change',handleMediaQueryChange);
  //remove lsitebner when componenet unmounted
  return () => {
    mediaQuery.removeEventListener('change',handleMediaQueryChange);
  }
}, [])
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [10, -1, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls 
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2} 
              rotation={[0,0,0]}
            />
            <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas