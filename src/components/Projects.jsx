import Project from "./Project";
import ProjectReversed from "./ProjectReversed";
import runestock from "../assets/runestock.png";
import lcdp from "../assets/lakes_country_detailing_plus.png";

const projects = [
  {
    id: 1,
    title: "RuneStock",
    overview:
      "A WebApp that provide real time pricing information on items in the online RPG Old School Runescape.",
    description:
      "Get real time data such as current buy/sell prices, calculated margins, ROI, total potential profit, and more! Gain an edge over other players when trading items on the Grand Exchange and start building your empire today!",
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
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="items-center max-w-screen-xl mx-auto">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
          Projects
        </h2>
        <div className="grid gap-12 md:gap-24">
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
