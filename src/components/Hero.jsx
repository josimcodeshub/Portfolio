import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-36"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gray-100 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gray-50 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gray-50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* ================= LEFT CONTENT ================= */}
        <div className="text-center lg:text-left">
          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gray-500">Josim Uddin</span>
            <span className="ml-2">👋</span>
          </h1>

          {/* Role */}
          <h2 className="mt-5 text-2xl font-semibold text-gray-700 sm:text-3xl">
            Junior MERN Stack Developer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            I build modern, responsive and user-friendly web applications
            using JavaScript, React, Next.js, Node.js, Express.js and MongoDB.
            I&apos;m passionate about learning, solving problems and turning
            ideas into real-world applications.
          </p>

          {/* Main Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=19R2KqNoWh8zYpPm35flxZVsM2dKp1Mni"
              className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white shadow-sm transition duration-200 hover:bg-gray-800 hover:shadow-md"
            >
              Download Resume
            </a>

            <Link
              href="#contact"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-center font-medium text-gray-900 transition duration-200 hover:bg-gray-100"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium lg:justify-start">
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
              href="https://www.linkedin.com/in/josimcodeshub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition hover:text-black"
            >
              LinkedIn
            </a>

            <span className="text-gray-300">•</span>

            <a
              href="mailto:josimmss2021@gmail.com"
              className="text-gray-600 transition hover:text-black"
            >
              Email
            </a>

            <span className="text-gray-300">•</span>

            <Link
              href="#about"
              className="text-gray-600 transition hover:text-black"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* ================= RIGHT PHOTO ================= */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Decorative Circle */}
          <div className="absolute h-72 w-72 rounded-full bg-gray-100 blur-2xl sm:h-96 sm:w-96" />

          <div className="relative">
            {/* Photo */}
            <div className="relative h-[380px] w-[290px] overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-2xl sm:h-[450px] sm:w-[360px]">
              <Image
                src="/projects/profile.png"
                alt="Josim Uddin - Junior MERN Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 290px, 360px"
                className="object-cover object-top"
              />
            </div>

            {/* MERN Card */}
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-xl sm:-left-10 sm:px-5 sm:py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
                  &lt;/&gt;
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    MERN Stack
                  </p>

                  <p className="text-xs text-gray-500">
                    Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Currently Card */}
            <div className="absolute -right-3 top-6 rounded-2xl border border-gray-200 bg-white px-3 py-2.5 shadow-lg sm:-right-8 sm:px-4 sm:py-3">
              <p className="text-xs font-medium text-gray-500">
                Currently
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-900 sm:text-sm">
                Building &amp; Learning 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}