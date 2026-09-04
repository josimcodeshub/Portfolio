export default function About() {
  return (
    <section id="about" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A little about me
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            A passionate developer focused on building modern, responsive and
            meaningful web applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Introduction */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Building with curiosity and purpose.
            </h3>

            <div className="mt-6 space-y-5">
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                I&apos;m Josim, a Junior MERN Stack Developer passionate about
                building modern, responsive and user-friendly web applications.
              </p>

              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                I work with JavaScript, React, Next.js, Node.js, Express.js and
                MongoDB. I enjoy turning ideas into real-world applications and
                improving my development skills through practical projects.
              </p>

              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                My goal is to become a professional full-stack developer and
                contribute to meaningful projects while continuously learning
                new technologies and strengthening my problem-solving skills.
              </p>
            </div>
          </div>

          {/* Right - Quick Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Role */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-lg text-white">
                💻
              </div>

              <p className="mt-5 text-sm font-medium text-gray-500">Role</p>

              <h4 className="mt-2 text-lg font-bold text-gray-900">
                Junior MERN Developer
              </h4>
            </div>

            {/* Education */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-lg text-white">
                🎓
              </div>

              <p className="mt-5 text-sm font-medium text-gray-500">
                Education
              </p>

              <h4 className="mt-2 text-lg font-bold leading-7 text-gray-900">
                M.Sc. in Geography &amp; Environment
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                National University · 2021
              </p>
            </div>

            {/* Focus */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-lg text-white">
                🚀
              </div>

              <p className="mt-5 text-sm font-medium text-gray-500">Focus</p>

              <h4 className="mt-2 text-lg font-bold text-gray-900">
                Full-Stack Web Development
              </h4>
            </div>

            {/* Currently */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-lg text-white">
                ⚡
              </div>

              <p className="mt-5 text-sm font-medium text-gray-500">
                Currently
              </p>

              <h4 className="mt-2 text-lg font-bold text-gray-900">
                Learning &amp; Building
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}