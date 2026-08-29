export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
     <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <a
    href="mailto:josimmss2021@gmail.com"
    className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
  >
    Send Me an Email
  </a>

  <a
    href="https://github.com/josimcodeshub"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
  >
    GitHub
  </a>
</div>
    </section>
  );
}