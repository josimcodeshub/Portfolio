export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        {/* Logo / Name */}
        <div>
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-gray-900 transition hover:text-gray-600"
          >
            Josim<span className="text-gray-500"> Uddin</span>
          </a>

          <p className="mt-1 text-sm text-gray-500">
            Junior MERN Stack Developer
          </p>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-600"
        >
          <a href="#home" className="transition hover:text-black">
            Home
          </a>

          <a href="#about" className="transition hover:text-black">
            About
          </a>

          <a href="#skills" className="transition hover:text-black">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-black">
            Projects
          </a>

          <a href="#education" className="transition hover:text-black">
            Education
          </a>

          <a href="#contact" className="transition hover:text-black">
            Contact
          </a>
        </nav>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-200 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Josim Uddin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}