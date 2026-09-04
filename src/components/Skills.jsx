const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    icon: "⚛",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Developing APIs and server-side applications.",
    icon: "⚙",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Better Auth",
    ],
  },
  {
    title: "Database",
    description: "Working with databases and application data.",
    icon: "🗄",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
    ],
  },
  {
    title: "Tools & Others",
    description: "Tools I use for development and project deployment.",
    icon: "🛠",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "npm",
      "Vercel",
      "Stripe",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Technologies and tools I use to build modern, responsive and
            full-stack web applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-xl text-white transition duration-300 group-hover:scale-105">
                {group.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {group.description}
              </p>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition duration-200 hover:bg-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}