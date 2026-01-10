import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props: any) => {
    const ref = useRef<any>(null);

    // Memory-memoized star positions to prevent recalculation on re-renders
    const sphere = useMemo(() => {
        return random.inSphere(new Float32Array(3000), { radius: 1.2 });
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 20;
            ref.current.rotation.y -= delta / 25;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#64ffda"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Background3D: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a192f]">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 1.5]} // Limit pixel ratio to 1.5 for performance
                gl={{
                    antialias: false, // Disable for performance boost
                    powerPreference: "high-performance",
                    alpha: false // Ocular optimization
                }}
            >
                <Stars />
            </Canvas>
        </div>
    );
};

export default Background3D;
