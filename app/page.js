"use client";
import React from 'react';
import { useState } from 'react';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Banner from "@/app/components/banner";
import Projects from "@/app/components/projects";
import Certifications from "@/app/components/certifications";


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

            <section id="projects">
              <Projects />
            </section>

            <section id="Certifications">
                <Certifications />
            </section>

                

        </main>
        <Footer />
      </div>
  );
}
