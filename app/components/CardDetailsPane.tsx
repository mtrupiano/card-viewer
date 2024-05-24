import { useContext } from "react";
import { CardContext } from "../page";
import { Typography } from "@mui/material";

export default function CardDetailsPane() {
  const card = useContext(CardContext);

  return (
    <>
      <Typography>
        {card.name} ({card.set.toUpperCase()})
      </Typography>
    </>
  );
};