import React from 'react';
import { Canvas } from '@react-three/fiber';

import { Dots, Crop, Title } from '@client/components';

export default function App() {
  return (
    <>
      <Crop>
        <Title title="dreAderA" size={30} />

        <Canvas orthographic camera={{ zoom: 50 }}>
          <color attach="background" args={['#06070a']} />
          <Dots count={10000} size={0.001} />
          <Dots count={10000} size={0.001} />
        </Canvas>
      </Crop>
    </>
  );
}
