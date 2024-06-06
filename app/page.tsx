"use client"
import { useRouter } from "next/navigation";
import SearchField from "./components/SearchField";
import { Canvas } from "@react-three/fiber";

export default function Home() {

  const router = useRouter();
  const handleSearch = (s: string) => {
    const params = new URLSearchParams();
    params.set("q", s.trim());
    router.push("search?" + params.toString());
  };

  return (
    <>
      <Canvas
      
      >

      </Canvas>

      <div 
        style={{ 
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <SearchField 
          handleSearch={handleSearch}
        />
      </div>
    </>
  );
};