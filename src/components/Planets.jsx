import { useTexture } from "@react-three/drei";

//Textures
import earth from "../assets/Textures/earth2K.png";
import neptune from "../assets/Textures/neptune.png";
import venus from "../assets/Textures/venus.jpg";
import uranus from "../assets/Textures/uranus.jpg";
import mars from "../assets/Textures/mars.jpg";

const Earth = () => {
  const texture = useTexture(earth);
  return (
    <mesh position={[200, 250, -700]}>
      <sphereGeometry args={[100]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Neptune = () => {
  const texture = useTexture(neptune);
  return (
    <mesh position={[-700, 0, 1000]}>
      <sphereGeometry args={[200]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Venus = () => {
  const texture = useTexture(venus);
  return (
    <mesh position={[1400, 20, -200]}>
      <sphereGeometry args={[100]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Uranus = () => {
  const texture = useTexture(uranus);
  return (
    <mesh position={[-1000, 200, 0]}>
      <sphereGeometry args={[70]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Mars = () => {
  const texture = useTexture(mars);
  return (
    <mesh position={[800, 0, 1000]}>
      <sphereGeometry args={[100]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export { Earth, Neptune, Venus, Uranus, Mars };
