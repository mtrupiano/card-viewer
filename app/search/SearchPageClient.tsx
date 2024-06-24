"use client"
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchField from "../components/SearchField";

export default function SearchPageClient({
  initialSearchText,
}: {
  initialSearchText: string,
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
    <SearchField 
      loading={loading}
      handleSearch={handleSearch}
      initialSearchText={initialSearchText}
    />
  );
};