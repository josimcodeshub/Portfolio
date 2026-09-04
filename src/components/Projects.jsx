import Image from "next/image";

const projects = [
  {
    title: "RecipeHub",
    description:
      "A full-stack recipe-sharing and marketplace platform where users can create, discover, like, save and purchase recipes. It includes authentication, premium features, payments and an admin dashboard.",
    image: "/projects/logo.png",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    features: [
      "Recipe creation and management",
      "Favorites and likes",
      "Premium subscription",
      "Recipe purchasing",
      "Admin dashboard",
    ],
    liveUrl: "https://recipehub-self.vercel.app",
    githubUrl: "https://github.com/josimcodeshub",
  },

  {
    title: "Doctor Appointment Manager",
    description:
      "A web application for managing doctor appointments and organizing appointment-related information through a clean, responsive and easy-to-use interface.",
    image: "/projects/doc logo.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Appointment management",
      "Doctor information",
      "Responsive interface",
      "REST API integration",
    ],
    liveUrl: "https://doctor-appointment-chi-nine.vercel.app/",
    githubUrl: "https://github.com/josimcodeshub/doctor_appointment",
  },

  {
    title: "QurbaniHat",
    description:
      "A modern Qurbani marketplace application designed for browsing and managing Qurbani-related products with a responsive and user-friendly interface.",
    image: "/projects/qurbani-logo.png",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
    ],
    features: [
      "Product browsing",
      "Responsive design",
      "MongoDB integration",
      "Modern user interface",
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
            Things I&apos;ve Built
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            A selection of projects I&apos;ve built while developing my
            full-stack web development skills.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-5">
                  <p className="mb-2 text-sm font-semibold text-gray-900">
                    Key Features
                  </p>

                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span
                          className="mt-0.5 font-semibold text-gray-900"
                          aria-hidden="true"
                        >
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-5">
                  <p className="mb-2 text-sm font-semibold text-gray-900">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition duration-200 hover:bg-gray-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-gray-800"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-900 transition duration-200 hover:bg-gray-100"
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