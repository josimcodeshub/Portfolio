const education = [
  {
    title: "Learning & Development",
    organization: "Self-Learning / Online Courses",
    period: "Present",
    description:
      "Currently developing my skills in full-stack web development with a focus on JavaScript, React, Next.js, Node.js, Express.js and MongoDB.",
  },
];

const experience = [
  {
    title: "Junior Web Developer",
    organization: "Personal Projects",
    period: "Present",
    description:
      "Building real-world web applications to strengthen frontend, backend, database, authentication and API development skills.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Experience & Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            My learning journey and experience as I continue growing as a
            developer.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-gray-900">
            Experience
          </h3>

          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 font-medium text-gray-600">
                      {item.organization}
                    </p>
                  </div>

                  <span className="text-sm font-medium text-gray-500">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-gray-900">
            Education
          </h3>

          <div className="space-y-6">
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 font-medium text-gray-600">
                      {item.organization}
                    </p>
                  </div>

                  <span className="text-sm font-medium text-gray-500">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}