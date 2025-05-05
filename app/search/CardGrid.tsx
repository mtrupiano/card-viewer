import Image from "next/image";
import { Grid } from "@mui/material";
import { ScryfallCard, ScryfallList } from "@scryfall/api-types";
import getCardFaceImageURIs from "../utilities/getCardFaces";

import styles from "./styles.module.css";

const CARD_HEIGHT = 200;
const CARD_WIDTH = 200 / 1.4;

export default function CardGrid({
  cardList,
}: {
  cardList: ScryfallList.Cards;
}) {
  return (
    <Grid container>
      {cardList.data.map((cardObject: ScryfallCard.Any) => (
        <Grid item key={cardObject.id}>
          <Image
            src={getCardFaceImageURIs(cardObject)[0]}
            height={CARD_HEIGHT}
            width={CARD_WIDTH}
            className={styles.card}
            alt=""
          />
        </Grid>
      ))}
    </Grid>
  );
}
