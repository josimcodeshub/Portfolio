export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-lg font-medium text-gray-600">
          Hi, I'm Josim 👋
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Junior MERN Stack Developer
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          I build modern, responsive and user-friendly web applications
          using JavaScript, React, Node.js, Express and MongoDB.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}