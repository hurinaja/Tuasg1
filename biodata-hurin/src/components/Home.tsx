import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6">
      <div className="max-w-xl mx-auto bg-white text-black rounded-xl p-6 shadow-lg hover:scale-105 transition">
        <img src="/foto.jpg" className="w-32 h-32 rounded-full mx-auto" />
        <h1 className="text-2xl font-bold text-center mt-4">Hurin Adhana Shakira</h1>

        <p className="text-center mt-2">
          Saya adalah siswa disiplin yang memiliki cita-cita tinggi menjadi profesor dan CEO di bidang teknologi.
        </p>

        <section id="skill" className="mt-4">
          <h2 className="font-semibold">Keahlian</h2>
          <ul className="list-disc ml-5">
            <li>Leadership</li>
            <li>Public Speaking</li>
            <li>Problem Solving</li>
          </ul>
        </section>

        <section id="project" className="mt-4">
          <h2 className="font-semibold">Project</h2>
          <ul className="list-disc ml-5">
            <li>Website Biodata React</li>
          </ul>
        </section>

        <section className="mt-4">
          <button
            onClick={() => setOpen(!open)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Lihat Sertifikat
          </button>
          {open && <p className="mt-2">Sertifikat Seminar & Lomba</p>}
        </section>

        <section id="contact" className="mt-4">
          <h2 className="font-semibold">Kontak</h2>
          <a href="mailto:email@gmail.com" className="block text-blue-600">
            Kirim Email
          </a>
          <a href="https://instagram.com" target="_blank" className="block text-blue-600">
            Instagram
          </a>
        </section>
      </div>
    </div>
  );
}