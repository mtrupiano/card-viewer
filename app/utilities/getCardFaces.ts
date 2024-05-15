import { ScryfallCard } from "@scryfall/api-types";

const defaultRearImageURI = "https://i.imgur.com/LdOBU1I.jpeg";

export default function getCardFaceImageURIs(card: ScryfallCard.Any): [string, string] {
  if (card["layout"] === "meld") {
    // complicated use case; Scryfall API does not make it easy to get the rear face of meld cards
  }

  if (card["card_faces"]) {
    return [
      card["card_faces"][0]["image_uris"]["large"],
      card["card_faces"][1]["image_uris"]["large"],
    ];
  }

  return [
    card["image_uris"]["large"],
    defaultRearImageURI,
  ];
}