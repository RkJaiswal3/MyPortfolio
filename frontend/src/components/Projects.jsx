function Projects() {
  const projectList = [
    {
      webLink: "https://rkjaiswal3.github.io/textFormatingTool/",
      title: "Text-Formating Tool",
      description:
        "An online platform of formating Text.TextFormating Tool from which you can formatting the text or manipulate the text as per your demand.",
      image: "/text.png",
      repo: "https://github.com/RkJaiswal3/textFormatingTool?tab=readme-ov-file",
    },
    {
      webLink: "https://newstadka.vercel.app",
      title: "NewsTadka.COM",
      description:
        "This is an online platform to get news of real world at real Time. In it I used the news API in it.",
      image: "/news.png",
      repo: "https://github.com/RkJaiswal3/NewsTadka",
    },
    {
      webLink: "https://recordtext.vercel.app/login",
      title: "IBOOK",
      description:
        "This is the mern base project. In it we can add note and we can modify it by adding and updating our notes.  ",
      image: "/ibook.png",
      repo: "https://github.com/RkJaiswal3/IBOOK",
    },
  ];

  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row g-4">
        {projectList.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.webLink}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
              <div className="card-footer text-center">
                <a
                  href={project.repo}
                  className="btn btn-outline-secondary btn-sm mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
