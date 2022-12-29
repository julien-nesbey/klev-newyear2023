import { Center, Text3D, PerspectiveCamera } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const Text = ({ text, font, map, size }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -1.5, 20]} fov={100} />
      <Center top>
        <Text3D
          font={font}
          {...TextGeometry}
          size={text == "Happy New Year 2023" ? size * 1.3 : size * 1.5}
          letterSpacing={-0.09}
          height={0.6}
          curveSegments={12}
          bevelEnabled={true}
        >
          {text}
          <meshNormalMaterial attach={"material"} normalMap={map} />
        </Text3D>
      </Center>
    </>
  );
};

export default Text;
