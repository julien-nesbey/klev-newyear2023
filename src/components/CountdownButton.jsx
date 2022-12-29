import { Html, Center } from "@react-three/drei";

import styles from "../styles/CountdownButton.module.css";

export const CountdownButton = ({ onClick }) => {
  return (
    <Center top left>
      <Html as="div" fullscreen className={styles.container}>
        <button onClick={onClick} className={styles.button}>
          Start Countdown
        </button>
      </Html>
    </Center>
  );
};
