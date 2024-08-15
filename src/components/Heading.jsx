import lcdp from "../assets/lakes_country_detailing_plus.png";
import runestock from "../assets/runestock.png";

export default function Heading() {
  return (
    <section id="about">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Software Engineer & Web Developer
          </h2>
          <p className="mb-4">
            I love to build fun and great looking websites!
          </p>
          <p>
            I&apos;m from Las Vegas, NV, currently studying Computer Science
            remotely at Oregon State University. Anticipated Graduation Dec.
            2024.
          </p>
          <p>
            Find me on{" "}
            <a
              className="hover:opacity-60 text-sky-500 transition-all duration-200"
              href="https://www.linkedin.com/in/tys1/"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              className="hover:opacity-60 text-sky-500 transition-all duration-200"
              href="https://github.com/T-Pederson"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <a
            href="http://lakescountrydetailing.com/"
            className="hover:opacity-60 hover:cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <img
              className="w-full rounded-lg"
              src={lcdp}
              alt="Lakes Country Detailing Plus home page"
            />
          </a>
          <a
            href="https://runestock.netlify.app/"
            className="hover:opacity-60 hover:cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={runestock}
              alt="RuneStock home page"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
