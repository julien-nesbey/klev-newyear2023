import { useTexture } from "@react-three/drei";

import moon from "../assets/Textures/8k_moon.jpg";

const Surface = () => {
  const texture = useTexture(moon);

  return (
    <mesh rotation={[-1.5, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry
        args={[window.innerWidth, window.innerHeight, 100, 100]}
        attach="geometry"
      />
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  );
};

export default Surface;
