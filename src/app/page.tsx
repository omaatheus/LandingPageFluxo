import Image from "next/image";

import { HeroSection } from "./components/hero-section";
import { Content } from "./components/content";
import { Team } from "./components/team";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Content/>
      <Team/>
      <Footer/>

    </main>
  );
}
