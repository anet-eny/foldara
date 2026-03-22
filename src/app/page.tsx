import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Trusted } from "@/components/sections/trusted";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
    </>
  );
}