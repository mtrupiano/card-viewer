"use client"

import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";

export default function GetCard() {

  const [searchText, setSearchText] = useState("");
  const [cardData, setCardData] = useState("");

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
      setCardData(JSON.stringify(response.data?.cards, undefined, 2))
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
      <pre>
        {cardData}
      </pre>
    </>
  );
}