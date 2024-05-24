import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Stack,
  TextField,
  Button,
  List,
  ListItemButton,
} from "@mui/material";
import axios from "axios";
import { ScryfallCard } from "@scryfall/api-types";

export default function CardSearchAndSelectionPane({
  setSelectedCard,
}: {
  setSelectedCard: (card: ScryfallCard.Any) => void,
}) {
  const [searchText, setSearchText] = useState("");
  const [cardList, setCardList] = useState<ScryfallCard.Any[]>();

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchTextFromParams = searchParams.get("q");
    if (searchTextFromParams) {
      setSearchText(searchTextFromParams);
      handleSearch(searchTextFromParams);
    }
  }, []);

  const handleSearch = (s: string) => {
    axios.get(
      "/api/get-card",
      {
        params: {
          q: s.trim(),
        },
      },
    ).then((response) => {
      const params = new URLSearchParams();
      params.set("q", s.trim())
      router.push("?" + params.toString());
      setCardList(response.data?.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleClick = (event: HTMLFormElement) => {
    event.preventDefault();
    handleSearch(searchText);
  };

  const handleSelectCard = (index: number) => {
    setSelectedCard(cardList[index]);
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

      {cardList && cardList.length > 0 && (
        <List>
          {cardList.map((card, index) => (
            <ListItemButton
              key={index}
              onClick={() => handleSelectCard(index)}
            >
              {card.name} ({card.set.toUpperCase()})
            </ListItemButton>
          ))}
        </List>
      )}
    </>
  );
};