"use client"

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { TextField, Stack, Button, Container, Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";

import styles from "./styles.module.css";
import SearchField from "../components/SearchField";

export default function SearchPage() {

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
      <Canvas>

      </Canvas>
      <Box
        display="flex" 
        justifyContent="center"
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
          paddingTop: 2,
        }}
      >
        <SearchField 
          handleSearch={handleSearch}
          loading={loading}
          initialSearchText={searchParams.get("q")}
        />
      </Box>
    </>
  );
}