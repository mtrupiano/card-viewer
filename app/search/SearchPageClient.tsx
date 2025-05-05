"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchField from "../components/SearchField";
import { ScryfallList } from "@scryfall/api-types";
import CardGrid from "./CardGrid";

export default function SearchPageClient({
  initialSearchText,
  cardList,
}: {
  initialSearchText: string | string[] | undefined;
  cardList: ScryfallList.Cards;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = (event: HTMLFormElement) => {
    event.preventDefault();
    handleSearch(searchText);
  };

  const handleSearch = (s: string) => {
    if (loading) return;
    setLoading(true);

    const params = new URLSearchParams();
    params.set("q", s.trim());
    router.push("search?" + params.toString());

    setLoading(false);
    console.log(s);
  };

  return (
    <>
      <SearchField
        loading={loading}
        handleSearch={handleSearch}
        initialSearchText={initialSearchText}
      />

      <CardGrid cardList={cardList} />
    </>
  );
}
