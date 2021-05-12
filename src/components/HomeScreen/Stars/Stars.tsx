import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GroupProps, MeshProps, useFrame, useLoader } from '@react-three/fiber';
import { Math as ThreeMath, MeshBasicMaterial, Color, BoxGeometry, TextureLoader } from 'three';
import { useDrag, useGesture } from 'react-use-gesture';
import { useSpring, animated, config } from '@react-spring/three';

const Stars: React.FC = () => {
  const mesh = useRef<MeshProps>();

  const texture_1 = useLoader(TextureLoader, '/cube/cube1.jpg');
  const texture_2 = useLoader(TextureLoader, '/cube/cube2.jpg');
  const texture_3 = useLoader(TextureLoader, '/cube/cube3.svg');

  let theta = 0;

  const [active, setActive] = useState(false);
  const lastMemoRef = useRef();
  const isTouchedRef = useRef(false);

  useFrame(() => {
    if (!isTouchedRef.current) {
      const r = 5 * Math.sin(ThreeMath.degToRad((theta += 0.1)));
      mesh.current.rotation.set(r, r, r);
      lastMemoRef.current = { x: r, y: r };
    }
  });

  const { scale } = useSpring({ scale: active ? 1.2 : 1, config: config.wobbly });

  const bind = useDrag(
    ({ movement, last, tap, memo = lastMemoRef.current || mesh.current.rotation }) => {
      if (tap) {
        if (!last) {
          isTouchedRef.current = true;
        } else {
          isTouchedRef.current = false;
        }
        setActive((prevState) => !prevState);
        return memo;
      }

      const { x, y } = memo;
      if (!last) {
        isTouchedRef.current = true;
      } else {
        isTouchedRef.current = false;
      }

      const [mx, my] = movement;

      const rx = x + Math.sin(mx * 0.0001);
      const ry = y + Math.sin(my * 0.0001);
      mesh.current.rotation.set(ry, rx, 0);
      lastMemoRef.current = { x: rx, y: ry };
      return { x: rx, y: ry };
    }
  );

  return (
    <>
      <animated.mesh ref={mesh} scale={scale} position={[0, 0, 0]} {...bind()} castShadow>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshStandardMaterial map={texture_3} attachArray="material" />
        <meshStandardMaterial map={texture_2} attachArray="material" />
        <meshStandardMaterial map={texture_1} attachArray="material" />
        <meshStandardMaterial map={texture_2} attachArray="material" />
        <meshStandardMaterial map={texture_3} attachArray="material" />
        <meshStandardMaterial map={texture_3} attachArray="material" />
      </animated.mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.4} transparent />
      </mesh>
    </>
  );
};

export { Stars };
