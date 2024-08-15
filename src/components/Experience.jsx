import trimble from "../assets/trimble.png";
import emerson from "../assets/emerson.png";
import cura from "../assets/cura.png";

const experience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    description:
      "Software Engineer Intern focused on UX regression testing and migrating tests from a legacy framework.",
    date: "Jun, 2024 - Current",
    company: {
      name: "Trimble Inc.",
      division: "e-Builder",
      href: "https://www.trimble.com/en",
      imageSrc: trimble,
    },
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    description:
      "Software Engineer Intern focused on creating device testing programs for hardware manufacturing QA.",
    date: "Jun, 2023 - Aug, 2023",
    company: {
      name: "Emerson Electric Co.",
      division: "Rosemount",
      href: "https://www.emerson.com/en-us/global",
      imageSrc: emerson,
    },
  },
  {
    id: 3,
    title: "Hackathon",
    description:
      "Our team created Cura, a Python CLI app where users cross-check their medications to confirm no negative interactions.",
    date: "Jan 2023",
    company: {
      name: "Beaverhacks",
      division: "Winter 2023 Hackathon",
      href: "https://devpost.com/software/cura-28vym7?ref_content=user-portfolio&ref_feature=in_progress",
      imageSrc: cura,
    },
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="items-center max-w-screen-xl mx-auto text-gray-500">
        <div>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Experience
          </h2>
          <p className="mb-4">
            I have been a part of some amazing teams, and look forward to the
            next opportunity!
          </p>
          <hr className="my-6 md:my-8 border-gray-300 border" />
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 border-gray-300 lg:grid-cols-3">
          {experience.map((role) => (
            <article
              key={role.id}
              className="flex max-w-80 flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <span>{role.date}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <p>
                    <span className="absolute inset-0" />
                    {role.title}
                  </p>
                </h3>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={role.company.imageSrc}
                    className="h-10 w-10"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={role.company.href}>
                        <span className="absolute inset-0" />
                        {role.company.name}
                      </a>
                    </p>
                    <p>{role.company.division}</p>
                  </div>
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6">
                  {role.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
