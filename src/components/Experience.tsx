import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Simple animated wave mesh
const WaveMesh = () => {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            const positions = mesh.current.geometry.attributes.position;
            const time = state.clock.elapsedTime;

            for (let i = 0; i < positions.count; i++) {
                const x = positions.getX(i);
                const y = positions.getY(i);
                const wave = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time * 0.5) * 0.3;
                positions.setZ(i, wave);
            }
            positions.needsUpdate = true;

            mesh.current.rotation.z = time * 0.05;
        }
    });

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, -5]}>
            <planeGeometry args={[20, 20, 32, 32]} />
            <meshStandardMaterial
                color="#32CD32"
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    );
};

export const Experience = () => {
    return (
        <>
            {/* Background gradient effect */}
            <color attach="background" args={['#0a0a0a']} />

            {/* Subtle stars */}
            <Stars
                radius={100}
                depth={50}
                count={2000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
            />

            {/* Animated wave grid */}
            <WaveMesh />

            {/* Soft ambient lighting */}
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 0, 5]} intensity={0.3} color="#32CD32" />
            <pointLight position={[5, 5, 0]} intensity={0.2} color="#3b82f6" />
        </>
    );
};
