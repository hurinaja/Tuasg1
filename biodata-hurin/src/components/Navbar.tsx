type Props = {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: string;
  setLang: (val: string) => void;
};

export default function Navbar({ darkMode, setDarkMode, lang, setLang }: Props) {
  return (
    <nav className="flex justify-between items-center p-4 shadow">
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="w-8 h-8" />
        <span className="font-bold">Sport Bio</span>
      </div>

      <div className="flex gap-4">
        {/* DARK MODE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* TRANSLATE */}
        <button
          onClick={() => setLang(lang === "id" ? "en" : "id")}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700"
        >
          {lang === "id" ? "EN" : "ID"}
        </button>
      </div>
    </nav>
  );
}