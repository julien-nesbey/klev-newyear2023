import { Html } from "@react-three/drei";
import { Fireworks } from "@fireworks-js/react";

//Audio
import sfx from "../assets/Audio/fireworks-sfx.mp3";

export const FireWork = () => {
  return (
    <Html
      center={true}
      as="div"
      style={{
        background: "none",
        outline: "none",
        border: "none",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Fireworks
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          zIndex: "-10",
          height: "100vh",
        }}
        options={{
          sound: {
            enabled: true,
            volume: { min: 10, max: 10 },
            files: [sfx],
          },
          autoresize: true,
          lineStyle: "round",
          particles: 200,
          opacity: 0.1,
        }}
      />
    </Html>
  );
};
