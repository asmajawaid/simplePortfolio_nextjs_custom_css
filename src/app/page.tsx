
import About from "./about/page";
import Contact from "./contact/page";
import Services from "./services/page";
import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <>
    <h1>HOME PAGE</h1>
    <Hero/>
    <About/>
    <Contact/>
    <Services/>
    </>
  );
}
