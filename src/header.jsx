import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-zinc-950 fixed w-screen top-0 left-0 text-white p-5 z-50">
      <nav className="flex justify-between max-w-[70rem] mx-auto text-lg px-5">
        <span>LOGO</span>
        <button
          className="sm:hidden space-y-1.5 hover:bg-slate-600 p-1 transition-all duration-300"
          onClick={toggleMenu}
        >
          <span className="w-7 h-1 bg-white block"></span>
          <span className="w-7 h-1 bg-white block"></span>
          <span className="w-7 h-1 bg-white block"></span>
        </button>
        <ul
          className={`gap-6 ${
            isOpen
              ? "opacity-100 translate-x-0 visible"
              : "opacity-0 translate-x-full invisible"
          } sm:flex absolute top-0 bg-zinc-950 left-0 w-screen h-screen z-50 flex-col justify-center items-center text-3xl gap-10 transition-all duration-500 flex sm:visible sm:opacity-100 sm:w-auto sm:h-auto sm:translate-x-0 sm:static sm:flex-row sm:text-lg`}
        >
          <li className=" absolute top-6 right-10 text-lg sm:hidden">
            <button onClick={toggleMenu}>❌</button>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-all">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-all">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-all">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
