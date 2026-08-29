
const skills = [
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Database",
    technologies: ["MongoDB"],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Technologies and tools I'm currently using to build modern web
            applications.
          </p>
        </div>

        {/* Skills */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}