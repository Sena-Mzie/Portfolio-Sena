// Array of Projects
const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio to showcase my skills and projects.",
      github: "https://github.com/username/portfolio",
    },
    {
      title: "E-Commerce Website",
      description: "A fully functional e-commerce website with user authentication, cart, and checkout features.",
      github: "https://github.com/username/ecommerce",
    },
    {
      title: "Weather App",
      description: "A web application to check the weather of any city using a weather API.",
      github: "https://github.com/username/weather-app",
    },
    {
      title: "Task Manager",
      description: "A task management app to create, update, and delete tasks efficiently.",
      github: "https://github.com/username/task-manager",
    },
  ];
  
  // Dynamically Add Projects
  const projectsContainer = document.getElementById("projects-container");
  
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
  
    projectCard.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.github}" target="_blank">View on GitHub</a>
    `;
  
    projectsContainer.appendChild(projectCard);
  });
  
  