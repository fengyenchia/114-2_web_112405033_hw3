"use client"

import { RoundedBox } from '@react-three/drei';

export default function Tree({ position }: { position: [number, number, number] }) {
  // 3D 模型預覽


  return (
    <>
        <group position={position}>
            
            <RoundedBox 
            position={[0,0,0]} 
            radius={0.05}
            args={[0.5, 1, 0.5]} // Width, height, depth. Default is [1, 1, 1]
            >
            <meshStandardMaterial color="brown" />
            </RoundedBox>


            <RoundedBox 
            position={[0,0.5,0]} 
            radius={0.05}
            args={[1.5, 0.5, 1.5]}
            >
            <meshStandardMaterial color="green" />
            </RoundedBox>


            <RoundedBox 
            position={[0,1.0,0]} 
            radius={0.05}
            args={[1, 0.5, 1]}
            >
            <meshStandardMaterial color="green" />
            </RoundedBox>
            

            <RoundedBox 
            position={[0,1.5,0]} 
            radius={0.05}
            args={[0.5, 0.5, 0.5]}
            >
            <meshStandardMaterial color="green" />
            </RoundedBox>  


            <RoundedBox 
            position={[0,1.9,0]} 
            radius={0.05}
            args={[0.25, 0.25, 0.25]}
            >
            <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={1} />
            </RoundedBox>  
        </group>


    </>
  );
}


// createRoot(document.getElementById('root')).render(<Showroom />)

