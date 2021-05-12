/* eslint-disable no-magic-numbers */
import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from 'components/HomeScreen/Stars';
import { softShadows } from '@react-three/drei';

type Props = {
  disabledAnimation?: boolean;
}

const CanvasView: React.FC<Props> = ({ disabledAnimation }) => {
  if (disabledAnimation) return null;

  useEffect(() => {
    softShadows();
  }, []);

  return (
    <Canvas shadows camera={{ fov: 60, position: [-5, 2, 10] }}>
      <fog attach="fog" args={['white', 0, 40]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  )
}

export { CanvasView }