
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-32 sm:pb-24 sm:pt-40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gray-100 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-gray-500">
              Josim Uddin
            </span>
            <span className="ml-2">👋</span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-700 sm:text-3xl">
            Junior MERN Stack Developer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 lg:mx-0">
            I build modern, responsive and user-friendly web applications
            using JavaScript, React, Next.js, Node.js, Express.js and MongoDB.
            I'm passionate about learning, solving problems and turning ideas
            into real-world applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#projects"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              View My Projects
            </Link>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm font-medium lg:justify-start">
            <a
              href="https://github.com/josimcodeshub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition hover:text-black"
            >
              GitHub
            </a>

            <span className="text-gray-300">•</span>

            <a
              href="mailto:josimmss2021@gmail.com"
              className="text-gray-600 transition hover:text-black"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right Developer Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
            {/* Card Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-gray-400">
                developer.js
              </span>
            </div>

            {/* Code-style content */}
            <div className="mt-6 rounded-2xl bg-gray-950 p-6 font-mono text-sm leading-7 text-gray-300">
              <p>
                <span className="text-purple-400">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="pl-4">
                name:{" "}
                <span className="text-green-400">
                  "Josim Uddin"
                </span>
                ,
              </p>

              <p className="pl-4">
                role:{" "}
                <span className="text-green-400">
                  "MERN Developer"
                </span>
                ,
              </p>

              <p className="pl-4">
                frontend:{" "}
                <span className="text-green-400">
                  "React / Next.js"
                </span>
                ,
              </p>

              <p className="pl-4">
                backend:{" "}
                <span className="text-green-400">
                  "Node / Express"
                </span>
                ,
              </p>

              <p className="pl-4">
                database:{" "}
                <span className="text-green-400">
                  "MongoDB"
                </span>
                ,
              </p>

              <p className="pl-4">
                learning:{" "}
                <span className="text-green-400">
                  true
                </span>
              </p>

              <p>{"};"}</p>

              <p className="mt-4">
                <span className="text-purple-400">
                  console
                </span>
                .log(
                <span className="text-green-400">
                  "Let's build something!"
                </span>
                );
              </p>
            </div>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

