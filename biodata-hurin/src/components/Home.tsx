import { useState, useEffect } from "react";

type Props = {
  darkMode: boolean;
  lang: string;
};

export default function Home({ darkMode, lang }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;

  const text = {
    id: {
      desc: "Saya adalah siswa yang aktif dalam olahraga dan memiliki semangat tinggi untuk mencapai cita-cita.",
      skill: "Keahlian",
      project: "Kegiatan Olahraga",
      contact: "Kontak",
    },
    en: {
      desc: "I am a student active in sports with strong motivation to achieve my dreams.",
      skill: "Skills",
      project: "Sports Activities",
      contact: "Contact",
    },
  };

  const current = text[lang as "id" | "en"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-6">
      <div
        className={`max-w-xl mx-auto rounded-xl p-6 shadow-lg transition hover:scale-105 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <img src="/foto.jpg" className="w-32 h-32 rounded-full mx-auto" />

        <h1 className="text-2xl font-bold text-center mt-4">
          Hurin Adhana Shakira
        </h1>

        <p className="text-center mt-2">{current.desc}</p>

        <section className="mt-4">
          <h2 className="font-semibold">{current.skill}</h2>
          <ul className="list-disc ml-5">
            <li>Basket</li>
            <li>Tenis Meja</li>
            <li>Bulu Tangkis</li>
          </ul>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold">{current.project}</h2>
          <ul className="list-disc ml-5">
            <li>Latihan Basket</li>
            <li>Turnamen Sekolah</li>
          </ul>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold">{current.contact}</h2>
          <a href="mailto:email@gmail.com" className="block text-blue-600">
            Email
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="block text-blue-600"
          >
            Instagram
          </a>
        </section>
      </div>
    </div>
  );
}