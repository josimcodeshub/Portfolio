const education = [
  {
    title: "M.Sc. in Geography and Environment",
    organization: "National University, Bangladesh",
    period: "2021",
    description:
      "Completed a Master of Science in Geography and Environment, developing analytical, research and problem-solving skills that continue to support my journey into software development.",
  },
];

const journey = [
  {
    title: "Junior MERN Stack Developer",
    organization: "Self-Learning & Personal Projects",
    period: "Present",
    description:
      "Building real-world web applications using JavaScript, React.js, Next.js, Node.js, Express.js and MongoDB while developing practical skills in frontend, backend, database, authentication and API development.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Education & Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Journey
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            My academic background and ongoing journey toward becoming a
            professional full-stack web developer.
          </p>
        </div>

        {/* Development Journey */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-lg text-white">
              💻
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Development Journey
            </h3>
          </div>

          <div className="space-y-6">
            {journey.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 font-medium text-gray-600">
                      {item.organization}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
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
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-lg text-white">
              🎓
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Education
            </h3>
          </div>

          <div className="space-y-6">
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 font-medium text-gray-600">
                      {item.organization}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
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