import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("id");

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
      />
      <Home darkMode={darkMode} lang={lang} />
      <Footer />
    </div>
  );
}

export default App;