import "./projects.css";
import projects_data from "../../assets/projects_data";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projectstitle">
        <h1>My Projects</h1>
      </div>

      <div className="projects-container">
        {projects_data.map((project, index) => {
          return (
            <div className="projects-format" key={index}>
              <span className="project-sno">
                {project.sno < 10 ? `0${project.sno}` : project.sno}
              </span>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
                
              </a>
                 <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Live →
                 </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
