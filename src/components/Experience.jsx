import trimble from "../assets/trimble.png";
import emerson from "../assets/emerson.png"

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
];

export default function Experience() {
  return (
    <div className="" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-2 text-gray-500">
            I have been a part of some amazing teams, and look forward to the
            next opportunity!
          </p>
        </div>
        <div className="mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t-2 border-gray-300 pt-6 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {experience.map((role) => (
            <article
              key={role.id}
              className="flex max-w-80 flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <span className="text-gray-500">{role.date}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <p>
                    <span className="absolute inset-0" />
                    {role.title}
                  </p>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {role.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={role.company.imageSrc} className="h-10 w-10" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={role.company.href}>
                      <span className="absolute inset-0" />
                      {role.company.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{role.company.division}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
