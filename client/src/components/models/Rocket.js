import { useRef } from 'react';
import { useLoader, useFrame, useThree, extend } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export const CameraControls = () => {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    const controls = useRef();
    useFrame((state) => {
        controls.current.update()
    });
    return (
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
            enableZoom={false}
        />
    );
};

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./falcon9/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={.0006} />
        </>
    );
};

export function RocketModel() {

    const myModel = useRef()
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        myModel.current.rotation.y = t / 15
        myModel.current.position.y = (-1.5 + ((1 + Math.sin(t / 1.5)) / 100))
        // myModel.current.position.y = (-3.5 + (window.pageYOffset / 1000))
        if (window.innerWidth < 1100) {
            myModel.current.position.x = 0;
        } else {
            myModel.current.position.x = -.3;
        }
    })

    

    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[2, 0, 5]} />
            <mesh ref={myModel} style={{ height: '100%' }} position={[-.3, -3.5, 1.3]}>
                <Model/>
            </mesh>
        </>
    )
}