"use client"

import { createContext, useState } from "react";
import { Container, Grid } from "@mui/material";
import { ScryfallCard } from "@scryfall/api-types";

import CardSearchAndSelectionPane from "./components/CardSearchAndSelectionPane";
import CardDisplayPane from "./components/CardDisplayPane";
import CardDetailsPane from "./components/CardDetailsPane";

export const CardContext = createContext<ScryfallCard.Any>(null);

export default function Home() {
  
  const [selectedCard, setSelectedCard] = useState<ScryfallCard.Any>(null);

  return (
    <CardContext.Provider value={selectedCard}>
      <Container>
        <Grid container>

          <Grid item lg="auto">
            <CardSearchAndSelectionPane 
              setSelectedCard={setSelectedCard}
            />
          </Grid>

          <Grid item lg="auto">
            <CardDisplayPane />
          </Grid>

          {selectedCard && (
            <Grid item>
              <CardDetailsPane />
            </Grid>
          )}

        </Grid>
      </Container>
    </CardContext.Provider>
  );
};