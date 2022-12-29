import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

//Components
import Text from "./components/Text";
import { FireWork } from "./components/Fireworks";
import { CountdownButton } from "./components/CountdownButton";
import Surface from "./components/Surface";
import SkyBox from "./components/SkyBox";
import { Loading } from "./components/Loading";

//Planets
import { Earth, Neptune, Venus, Uranus, Mars } from "./components/Planets";

//Styles
import styles from "./styles/App.module.css";

//Fonts
import bubbles from "./assets/Fonts/Bubbles_font.json";

//Audio
import femaleCountown from "./assets/Audio/Female Countdown.wav";
import happyNewYear from "./assets/Audio/Happy New Year.mp3";

const App = () => {
  const [countdown, setCountdown] = useState(10);
  const [hidden, setHidden] = useState(false);
  const [rotating, setRotating] = useState(false);
  const controls = useRef(null);
  const audio = new Audio(femaleCountown);

  useEffect(() => {
    if (!!controls.current) {
      controls.current.maxPolarAngle = controls.current.minPolarAngle = 1.5;
    }
  }, [controls.current]);

  useEffect(() => {
    let interval;
    countdown >= -1 && hidden
      ? (interval = setInterval(() => {
          setCountdown((prev) => prev - 1);
        }, 1100))
      : null;

    if (countdown === -1) {
      audio.src = happyNewYear;
      audio.play();
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown, hidden]);

  useEffect(() => {
    let timeout;
    if (countdown < 0) {
      setRotating(true);
      controls.current.enableRotate = false;
      timeout = setTimeout(() => {
        setRotating(false);
        controls.current.enableRotate = true;
      }, 15000);
    }
  }, [countdown]);

  const startCountdown = () => {
    audio.play();
    setHidden(!hidden);
  };

  return (
    <Canvas className={styles.canvas}>
      {!hidden && <CountdownButton onClick={startCountdown} />}
      {countdown < 0 ? <FireWork /> : null}

      <Surface />
      <Earth />
      <Neptune />
      <Venus />
      <Uranus />
      <Mars />
      <SkyBox />

      <Text
        text={countdown >= 0 ? countdown : "Happy New Year 2023"}
        font={bubbles}
        size={countdown >= 0 ? 10 : 3.5}
      />
      <ambientLight intensity={1} />

      <Suspense fallback={<Loading />}>
        <OrbitControls
          ref={controls}
          rotateSpeed={0.2}
          enableZoom={false}
          enablePan={false}
          autoRotate={rotating}
          autoRotateSpeed={4}
        />
      </Suspense>
    </Canvas>
  );
};

export default App;
