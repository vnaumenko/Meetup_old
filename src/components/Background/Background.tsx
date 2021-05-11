import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Math: ThreeMap, SphereBufferGeometry, MeshBasicMaterial, Color } from 'three';

export default function Stars() {
  const group = useRef();
  let theta = 0;

  useFrame(() => {
    // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
    const r = 5 * Math.sin(ThreeMap.degToRad((theta += 0.1)));
    const s = Math.cos(ThreeMap.degToRad(theta * 2));
    group.current.rotation.set(r, r, r);
    group.current.scale.set(s, s, s);
  });

  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new SphereBufferGeometry(3, 64, 64);
    const mat = new MeshBasicMaterial({ color: new Color(0x457b9d) });
    const coords = new Array(2000)
      .fill(undefined)
      .map((i) => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, vertices, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}
