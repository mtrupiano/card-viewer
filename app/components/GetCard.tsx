"use client"

import { useState } from "react";
import { Button, Grid, Stack, TextField } from "@mui/material";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Card from "./3DCard";
import getCardFaceImageURIs from "../utilities/getCardFaces";
import { ScryfallCard } from "@scryfall/api-types";

export default function GetCard() {

  const [searchText, setSearchText] = useState("");
  const [cardData, setCardData] = useState<ScryfallCard.Any[]>(null);

  const handleClick = (event: HTMLFormElement) => {
    event.preventDefault();
    axios.get(
      "/api/get-card",
      {
        params: {
          q: searchText.trim(),
        },
      },
    ).then((response) => {
      console.log(response.data)
      setCardData(response.data)
    }).catch((error) => {
      console.log(error);
    });
  };

  const [
    frontFaceURI,
    backFaceURI,
  ] = cardData ? getCardFaceImageURIs(cardData[0]) : [null, null];

  return (
    <Grid container spacing={2}>
      <Grid item>
        <form>
          <Stack direction="row">
            <TextField 
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <Button 
              onClick={handleClick}
              type="submit"
            >
              GET
            </Button>
          </Stack>
        </form>
      </Grid>

      {cardData?.[0] && (
        <Grid item>
          <Canvas>
            <Card
              frontFaceURI={frontFaceURI}
              backFaceURI={backFaceURI}
            />
            <OrbitControls />
          </Canvas>
        </Grid>
      )}
      
    </Grid>
  );
}