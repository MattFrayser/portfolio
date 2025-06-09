"use client"
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function ProjectsPreview() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Fetch and parse the CSV file
    fetch('/projects.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setProjects(results.data);
          }
        });
      });
  }, []);
  

  return (

    <div className="flex justify-center mb-6">
      <div className="max-auto w-full px-20">

      <div className="header py-10">
                My Projects
        <div className="text-3xl">
        I love to create and build things. Here are some of my projects that I have worked on. I am always looking to learn and grow, so if you have any suggestions or feedback, feel free to reach out!
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-2xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
              <div className="justify-center items-center flex flex-col">
                <img src={project.img} alt={project.title} className="rounded-md mt-2 mb-1 h-15 w-24" />
                <div className="mt-2">
                  <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                    {project.title}
                  </span>
                  <div className="mt-1 text-gray-600 font-extrabold text-xl lg:text-2xl">{project.description}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>

  );
}
