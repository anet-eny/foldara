import { Navbar } from "@/components/layout/navbar";
import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Platform } from "@/components/sections/platform";
import { Trusted } from "@/components/sections/trusted";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Platform />
      <HowItWorks />
      <CTA />
    </>
  );
}