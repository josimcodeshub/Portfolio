
import Image from "next/image";

const projects = [
  {
    title: "RecipeHub",
    description:
      "A full-stack recipe-sharing platform where users can create, discover, like, save and purchase recipes. The platform also includes authentication, premium features and an admin dashboard.",
    image: "/projects/logo.png",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    liveUrl: "https://recipehub-self.vercel.app",
    githubUrl: "https://github.com/josimcodeshub",
  },

  {
    title: "Doctor Appointment Manager",
    description:
      "A web application designed to manage doctor appointments and organize appointment-related information through a clean and responsive interface.",
    image: "/projects/doc logo.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://doctor-appointment-chi-nine.vercel.app/",
    githubUrl: "https://github.com/josimcodeshub/doctor_appointment",
  },

  {
    title: "QurbaniHat",
    description:
      "A modern web application for browsing and managing Qurbani-related products and information with a responsive user interface.",
    image: "/projects/qurbani-logo.png",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
    ],
    liveUrl: "https://qurbani-hat-2026-three.vercel.app/",
    githubUrl: "https://github.com/josimcodeshub/QurbaniHat-2026",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Things I've Built
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            A selection of projects I've built while developing my
            full-stack web development skills.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-100"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

