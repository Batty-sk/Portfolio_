import {React,useEffect,useRef} from 'react'
import { Canvas,useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'

export const Sphere = ({texture_name})=>{
    const texture = useLoader(TextureLoader,`./${texture_name}.png`)

    texture.repeat.set(2,1); 

    return(
        <mesh rotation={[3 , Math.PI, 3.2]} >
            <sphereGeometry args={[1.8,18,18]}/>
            
            <meshPhongMaterial map={texture} color={'white'} />
        </mesh>
    )
}

export const ThreeBalls = ({texture_name,aIntensity=1.5,dIntensity=4}) => {
    

  return (
    <Canvas  style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={aIntensity} />
        <directionalLight intensity={dIntensity}/>
        <Sphere texture_name={texture_name}/>
        <OrbitControls enableZoom={false}  />

    </Canvas>
  )
}

export default ThreeBalls
