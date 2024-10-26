import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import About from "@/components/about";
import { MySkills } from "@/components/myskills";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <About/>
    <MySkills/>
    <Contact/>
    </>
  );
}
