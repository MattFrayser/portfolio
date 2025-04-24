"use client";
import React from 'react';
import { useState } from 'react';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Experience from './components/experience';
import Banner from "@/app/components/banner";
import Projects from "@/app/components/projects";
import Skills from "@/app/components/skills";


export default function Home() {

  const [openFolder, setOpenFolder] = useState(false);

  const handleToggle = (folderName) => {
    setOpenFolder(openFolder === folderName ? null : folderName);
  };

  return (
      <div className="main">
        <Header />
        <main>
            <section id="top">
              <Banner />
            </section>

            <Skills />

            <section id="projects">
              <Projects />
            </section>

            <section id="experience">
              <Experience />
            </section>
                

        </main>
        <Footer />
      </div>
  );
}