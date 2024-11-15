import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import About from "@/components/about";
import { MySkills } from "@/components/myskills";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative z-10">
          <Hero />
          <About />
          <MySkills />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </>
  );
}