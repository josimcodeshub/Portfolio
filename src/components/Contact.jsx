export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
          Contact
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let's work together
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          I'm always interested in learning, building new projects and
          connecting with other developers and teams.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:your-email@example.com"
            className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Send Me an Email
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}