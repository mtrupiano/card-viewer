"use client"

import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";

export default function GetCard() {

  const [searchText, setSearchText] = useState("");
  const [cardData, setCardData] = useState(null);

  const handleClick = (event: HTMLFormElement) => {
    event.preventDefault();
    axios.get(
      "/api/get-card",
      {
        params: {
          query: searchText.trim(),
        },
      },
    ).then((response) => {
      setCardData(response.data?.cards)
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
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
      {cardData && (
        <img src={cardData[0].imageUrl} />
      )}
      <pre>
        {JSON.stringify(cardData, undefined, 2)}
      </pre>
    </>
  );
}