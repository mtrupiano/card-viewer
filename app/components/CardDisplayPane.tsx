import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { CardContext } from "../page";
import getCardFaceImageURIs from "../utilities/getCardFaces";
import Card from "./3DCard";

export default function CardDisplayPane() {
  const card = useContext(CardContext); 
  
  const [
    frontFaceURI,
    backFaceURI,
  ] = getCardFaceImageURIs(card);

  return (
    <Canvas>
      <Card
        frontFaceURI={frontFaceURI}
        backFaceURI={backFaceURI}
      />
      <OrbitControls />
    </Canvas>
  );
};