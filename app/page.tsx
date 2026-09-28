import { City } from "@/components/City";
import { Digest } from "@/components/Digest";
import { Feed } from "@/components/Feed";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Plans } from "@/components/Plans";
import { Signup } from "@/components/Signup";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#feed">
        Skip to the feed
      </a>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Feed />
        <Digest />
        <City />
        <Plans />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
