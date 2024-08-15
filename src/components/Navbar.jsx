import headshot from "../assets/headshot.jpg";
import "flowbite";

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center mx-auto gap-4 px-4 pb-4">
        <img
          src={headshot}
          className="h-20 rounded-full md:h-32"
          alt="Tyson Pederson headshot"
        />
        <div className="flex flex-col gap-4 md:gap-8 text-center md:text-left">
          <span className="text-3xl font-bold">Tyson Pederson</span>
          <ul className="font-medium flex flex-row gap-8">
            <li className="hover:text-sky-500 hover:scale-105 transition-all duration-200">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-sky-500 hover:scale-105 transition-all duration-200">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-sky-500 hover:scale-105 transition-all duration-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
