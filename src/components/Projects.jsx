import Project from "./Project";
import ProjectReversed from "./ProjectReversed";
import runestock from "../assets/runestock.png";
import lcdp from "../assets/lakes_country_detailing_plus.png";
import pokememory from "../assets/pokememory.png";

const projects = [
  {
    id: 1,
    title: "RuneStock",
    overview:
      "A WebApp that provides real time pricing info for items in the game Old School Runescape.",
    description:
      "Get real time data on buy/sell prices, calculated margins, ROI, total potential profit, and more! Gain an edge over other players when trading items on the Grand Exchange and start building your empire today!",
    image: runestock,
    alt: "RuneStock home page",
    codeLink: "https://github.com/T-Pederson/RuneStock",
    previewLink: "https://runestock.netlify.app/",
    reversed: false,
  },
  {
    id: 2,
    title: "Lakes Country Detailing Plus",
    overview:
      "An information website for a local auto detailing business in Fergus Falls, MN.",
    description:
      "If you're located in or around Fergus Falls, MN and need detailing, paint correction, or other cosmetic automotive services, Lakes Country Detailing Plus has you covered! Check out the services they offer along with pricing and contact information on their website.",
    image: lcdp,
    alt: "Lakes Country Detailing Plus home page",
    codeLink: "https://github.com/T-Pederson/lakes_country_detailing_plus",
    previewLink: "http://lakescountrydetailing.com/",
    reversed: true,
  },
  {
    id: 3,
    title: "PokeMemory",
    overview: "A memory game based on Pokemon.",
    description:
      "Do you have what it takes to become a PokeMemory master? Click every Pokemon once, but be careful not to click a Pokemon you've already clicked or the game is over!",
    image: pokememory,
    alt: "PokeMemory home page home page",
    codeLink: "https://github.com/T-Pederson/pokememory",
    previewLink: "https://pokememory-tp.netlify.app/",
    reversed: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="items-center max-w-screen-xl mx-auto text-gray-500">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Projects
        </h2>
        <p className="mb-4">
          View the code on GitHub, or see the actual project website for
          yourself below!
        </p>
        <hr className="my-6 md:my-8 border-gray-300 border" />
        <div className="mt-6 grid max-w-2xl gap-x-8 gap-y-16 md:gap-y-24 border-gray-300 lg:max-w-none">
          {projects.map((project) => {
            if (project.reversed) {
              return (
                <ProjectReversed
                  key={project.id}
                  image={project.image}
                  alt={project.alt}
                  title={project.title}
                  overview={project.overview}
                  description={project.description}
                  codeLink={project.codeLink}
                  previewLink={project.previewLink}
                />
              );
            } else {
              return (
                <Project
                  key={project.id}
                  image={project.image}
                  alt={project.alt}
                  title={project.title}
                  overview={project.overview}
                  description={project.description}
                  codeLink={project.codeLink}
                  previewLink={project.previewLink}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
