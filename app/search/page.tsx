import SearchPageClient from "./SearchPageClient";

async function getCard(searchQuery: string) {
  const res = await fetch(
    `https://api.scryfall.com/cards/search?q=${searchQuery}&unique=prints&order=set`,
  );

  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined,
  },
}) {
  const cardData = await getCard(searchParams.q);

  return (
    <SearchPageClient 
      initialSearchText={searchParams.q}
    />
  );
}