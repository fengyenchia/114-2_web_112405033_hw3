"use client"

import { Canvas } from '@react-three/fiber'
import { Box, Environment, OrbitControls, RoundedBox } from '@react-three/drei';
import Tree from '@/component/tree';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'



export default function Showroom() {
  // 3D 模型預覽


  return (
    <>
        <Canvas style={{ width: "100%", height: "100vh" }}>

          {/* 環境光 */}
          <Environment preset="forest" background={true} backgroundBlurriness={0.5} />
          {/* 自動旋轉 */}
          <OrbitControls autoRotate={true} autoRotateSpeed={5} />

          {/* <Box position={[-3,0,0]}>  
            <meshStandardMaterial color="red" />
          </Box> */}

          
          <Tree position={[-2, 0, 0]} />
          <Tree position={[0, 0, 0]} />
          <Tree position={[2, 0, 0]} />


          <EffectComposer>
           <Bloom intensity={2.0} />
          </EffectComposer>


          <RoundedBox 
            position={[0, -0.5, 0]} 
            args={[50, 0.5, 50]} 
            radius={0.05} 
          >
            <meshStandardMaterial color="darkgray" />
          </RoundedBox>


          {/* 光源 */}
          <directionalLight position={[4, 1, 1]} intensity={1} color="white" />
          <ambientLight intensity={0.1} />

        </Canvas>      
    
    </>
  );
}


// createRoot(document.getElementById('root')).render(<Showroom />)

