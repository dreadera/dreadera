import type { InstancedMesh } from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

import { Vector3, Matrix4 } from 'three';

import { roundSquareWave } from '@client/utils';

interface DotsInterface {
  count: number;
  size: number;
}

const Dots: React.FC<DotsInterface> = ({ count = 30, size = 0.01 }) => {
  const ref = useRef<InstancedMesh>();

  const { vec, transform, positions } = useMemo(() => {
    const vec = new Vector3();
    const transform = new Matrix4();

    const positions = [...Array(count)].map((_, i) => {
      const position = new Vector3();

      position.x = (i % 100) - 50;
      position.y = Math.floor(i / 100) - 50;

      position.y += (i % 2) * 0.5;

      position.x += Math.random() * 0.3;
      position.y += Math.random() * 0.3;

      return position;
    });

    return { vec, transform, positions };
  }, []);

  useFrame(({ clock }) => {
    const wave = roundSquareWave(clock.elapsedTime, 0.1, 1, 1 / 3);

    const scale = 1 + wave * 0.3;

    for (let i = 0; i < count; ++i) {
      vec.copy(positions[i]).multiplyScalar(scale);

      transform.setPosition(vec);

      if (ref.current) {
        ref.current.setMatrixAt(i, transform);
      }
    }

    if (ref.current) {
      ref.current.instanceMatrix.needsUpdate = true;
    }
  });

  const args = [null, null, count] as any;

  return (
    <instancedMesh ref={ref} args={args}>
      <circleBufferGeometry args={[size]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
};

export default Dots;
