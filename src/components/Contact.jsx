export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let&apos;s work together
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Have a project idea or an opportunity? Feel free to get in touch.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h3>

            <p className="mt-4 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              I&apos;m always interested in discussing new projects,
              opportunities and ideas. You can reach me through email, phone or
              social platforms.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href="mailto:josimmss2021@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white transition duration-300 group-hover:scale-105">
                  @
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Email</p>

                  <p className="mt-1 truncate font-medium text-gray-900">
                    josimmss2021@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:01883924080"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white transition duration-300 group-hover:scale-105">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>

                  <p className="mt-1 font-medium text-gray-900">
                    01883924080
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/josimcodeshub"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white transition duration-300 group-hover:scale-105">
                  Git
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">GitHub</p>

                  <p className="mt-1 truncate font-medium text-gray-900">
                    github.com/josimcodeshub
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/josimcodeshub"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white transition duration-300 group-hover:scale-105">
                  in
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">LinkedIn</p>

                  <p className="mt-1 truncate font-medium text-gray-900">
                    linkedin.com/in/josimcodeshub
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-gray-900">
              Send me a message
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>

            <form className="mt-6 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white shadow-sm transition duration-200 hover:bg-gray-800 hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}