import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import sky from "../assets/Textures/2k_stars_milky_way.png";

const SkyBox = () => {
  const { scene } = useThree();
  const texture = useTexture(sky);
  scene.background = texture;
  return null;
};

export default SkyBox;
