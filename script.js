const projects = [
  {
    title: "Task Manager Dashboard",
    description: "A responsive dashboard for tracking tasks, deadlines, and project progress using JavaScript and CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Responsive Portfolio Site",
    description: "A modern portfolio layout built with responsive design principles and accessible navigation.",
    tags: ["HTML", "CSS", "Responsive"],
  },
  {
    title: "Community Volunteer Project",
    description: "A collaborative community app project where I built the admin dashboard for monitoring real-time app data.",
    tags: ["Collaboration", "Admin Dashboard", "Real-Time Data"],
  },
];

const projectList = document.getElementById("project-list");

if (projectList) {
  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}
