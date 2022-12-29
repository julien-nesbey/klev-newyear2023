import { Html } from "@react-three/drei";

export const Loading = () => {
  return (
    <Html
      as="div"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          textTransform: "uppercase",
          color: "white",
        }}
      >
        Loading...
      </h1>
    </Html>
  );
};
