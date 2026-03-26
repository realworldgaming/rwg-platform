import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ProofOfPlay from "@/components/ProofOfPlay";
import Ecosystem from "@/components/Ecosystem";
import TokenStats from "@/components/TokenStats";
import Roadmap from "@/components/Roadmap";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <ProofOfPlay />
      <Ecosystem />
      <TokenStats />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  );
}
