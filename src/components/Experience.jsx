
const education = [
  {
    title: "M.Sc. in Geography and Environment",
    organization: "National University, Bangladesh",
    period: "2021",
    description:
      "Completed a Master of Science in Geography and Environment, developing analytical, research and problem-solving skills that complement my journey into software development.",
  },
];

const experience = [
  {
    title: "Junior Web Developer",
    organization: "Personal Projects",
    period: "present",
    description:
      "Building real-world web applications using JavaScript, React, Next.js, Node.js, Express.js and MongoDB while developing practical skills in frontend, backend, database, authentication and API development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Experience & Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            My academic background and journey toward becoming a professional
            full-stack web developer.
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
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
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
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
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


