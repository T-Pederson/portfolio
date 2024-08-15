import Project from "./Project";
import ProjectReversed from "./ProjectReversed";
import runestock from "../assets/runestock.png";
import lcdp from "../assets/lakes_country_detailing_plus.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Projects
        </h2>
        <Project
          image={runestock}
          alt="Runestock home page"
          title="RuneStock"
          overview="A WebApp that provide real time pricing information on items in the online RPG Old School Runescape."
          description="Get real time data such as current buy/sell prices, calculated margins, ROI, total potential profit, and more! Gain an edge over other players when trading items on the Grand Exchange and start building your empire today!"
          codeLink="https://github.com/T-Pederson/RuneStock"
          previewLink="https://runestock.netlify.app/"
        />
        <ProjectReversed
          image={lcdp}
          alt="Lakes Country Detailing Plus home page"
          title="Lakes Country Detailing Plus"
          overview="An information website for a local auto detailing business in Fergus Falls, MN."
          description="If you're located in or around Fergus Falls, MN and need detailing, paint correction, or other cosmetic automotive services, Lakes Country Detailing Plus has you covered! Check out the services they offer along with pricing and contact information on their website."
          codeLink="https://github.com/T-Pederson/lakes_country_detailing_plus"
          previewLink="http://lakescountrydetailing.com/"
        />
      </div>
    </section>
  );
}
