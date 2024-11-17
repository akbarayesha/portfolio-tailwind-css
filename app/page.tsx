"use client";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Projects";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect (() => {
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, []);
  
 return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <Hero />
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </main>
        
  );
}
