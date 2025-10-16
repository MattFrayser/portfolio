export default function ProjectsPreview() {

    const projects = [
    {
        title: "• Codr",
        description: "Online code execution platform for multiple languages.",
        img: "/codr.png",
        link: "https://codr-sandbox.vercel.app/"
    },
    {
        title: "• Collaborative Whiteboard",
        description: "Anonymous room room based whiteboard.",
        img: "/whiteboard.png",
        link: "https://mattfrayser.github.io/math-visualizer/"
    },
    {
        title: "• Spotify Go API",
        description: "Go package for using spotify api.",
        img: "/spotifyGo.png",
        link: "https://github.com/MattFrayser/spotifyAPI"
    },
    {
        title: "• YouTube History Statistics",
        description: "Statics from youtube history through Google Takeout.",
        img: "/ytStats.png",
        link: "https://youtube-history-statistics.vercel.app/"
    },
    {
        title: "• Local Cloud",
        description: "Learning tool for visualization and management of docker containers.",
        img: "/localCloud.png",
        link: "https://github.com/MattFrayser/localcloud"
    },
    {
        title: "• Math Visualizer",
        description: "Visualize complex math problems with custom inputs.",
        img: "/math.png",
        link: "https://mattfrayser.github.io/math-visualizer/"
    },
    {
        title: "• Calling Card",
        description: "Interactive business cards. Discover more about me by solving puzzles.",
        img: "/callingCards.png",
        link: "https://editor.p5js.org/MattFrayser/full/rS4tq2JQu"
    },
    {
        title: "• AGIE",
        description: "VCU Captstone project. Database to increate diversity in STEMM fields.",
        img: "/AGIE.png",
        link: "https://github.com/VCU-CS-Capstone/CS-24-333-Developing-a-central-hub-for-gender-outcome-programs-in-STEMM"
    },
    ];

  

    return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 style={{ color: '#fdfdfd', fontWeight: '700' }}>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <a
                href={project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  onError={(e) => e.target.src = 'images/placeholder.jpg'}
                />
                <div className="project-card-circle">
                  <svg className="project-card-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
              <div className="project-desc">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}       


