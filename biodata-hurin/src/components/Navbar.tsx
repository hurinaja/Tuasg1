export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="w-8 h-8" />
        <span className="font-bold">Hurin</span>
      </div>
      <div className="flex gap-4">
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
