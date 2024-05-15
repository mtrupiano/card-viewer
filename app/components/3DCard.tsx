import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { FrontSide, Mesh, BackSide, DoubleSide } from "three";

interface CardProps {
  frontFaceURI: string,
  backFaceURI: string,
}

export default function Card(props: CardProps) {
  const frontMeshRef = useRef<Mesh>();
  const backMeshRef = useRef<Mesh>();

  const [
    frontTexture,
    backTexture,
  ] = useTexture([
    props.frontFaceURI,
    props.backFaceURI,
  ]);

  return (
    <>
      <mesh
        {...props}
        ref={frontMeshRef}
      >
        <planeGeometry args={[ 1, 1.4 ]} />
        <meshBasicMaterial
          map={frontTexture}
          side={FrontSide}
        />
      </mesh>
      <mesh
        {...props}
        ref={backMeshRef}
        rotation-y={Math.PI}
      >
        <planeGeometry args={[ 1, 1.4 ]} />
        <meshBasicMaterial
          map={backTexture}
          side={FrontSide}
        />
      </mesh>
    </>
  );
};