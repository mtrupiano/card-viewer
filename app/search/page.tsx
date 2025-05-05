import { ScryfallList } from "@scryfall/api-types";
import SearchPageClient from "./SearchPageClient";

async function getCard(
  searchQuery: string | string[] | undefined,
): Promise<ScryfallList.Cards> {
  const res = await fetch(
    `https://api.scryfall.com/cards/search?q=${searchQuery}&unique=prints&order=set`,
  );

  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const cardList = await getCard(searchParams.q);

  return (
    <SearchPageClient cardList={cardList} initialSearchText={searchParams.q} />
  );
}
