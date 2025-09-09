import { useState } from "react";
import { ChevronDown } from "lucide-react"; // <-- import icon
import PPDC from "../assets/PPDC.png";
import Code from "../assets/Code.jpg";
import Jas from "../assets/Jas.jpg";
import Projects from "./Project";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const experiences = [
    {
      logo: PPDC,
      company: "PPDC",
      role: "CEO",
      description: `As Chief Executive and Board Director, I provide strategic leadership, represent the organization publicly, and strengthen its reputation. I build strong stakeholder relationships, foster an inclusive culture, and drive policy and strategic decisions that promote growth and effectiveness. I oversee operations, budgeting, and resource allocation, while developing high-performing teams and mitigating risks to ensure long-term sustainability.`,
      date: "Aug 2024 - Present",
    },
    {
      logo: Jas,
      company: "Exhale Grand resources Ltd",
      role: "Director, partnership & Business Development",
      description: `Successfully acquire sufficient and skilled support for investment initiatives, establishing a network of reliable and coherent relationships.
      Develop an investment opportunity pipeline through the effective utilization of contacts and networks.
      Implement strategic plans and methodologies to enhance revenue streams, foster diversification, and generate momentum within the organization.
      Orchestrate partnerships, imports, exports, and international trade collaborations.
      Design and manage the implementation of a comprehensive fundraising strategy and plan, incorporating diverse financial sources.`,
      date: "Jun 2015 - Aug 2017",
    },
    {
      logo: PPDC,
      company: "Public and Private Development Center",
      role: "Director",
      description:
        "As the Director of Innovation and Partnerships at PPDC, I serve as the entrepreneurial leader responsible for fostering strategic collaborations with public and private sector donors, including bilateral and multilateral agencies as well as foundations. In alignment with PPDC's strategy and programmatic vision, I spearhead the creation of new businesses and supervise the Business Development and Tech teams, providing guidance to ensure the achievement of strategic objectives.",
      date: "Nov 2023 - Aug 2024",
    },
    {
      logo: Code,
      company: "Connected Development [CODE]",
      role: "Programs Director",
      description:
        "I manage a portfolio of complex initiatives and donor-funded projects, providing on-site leadership to motivate teams and achieve project goals. I oversee the full project life cycle, from initiation to deployment, ensuring alignment with the strategic objectives of CODE. My role includes developing project plans, managing budgets, resources, risks, and vendor relationships, while ensuring deliverables meet scope, schedule, and quality standards. I also establish policies, tools, and partnerships that strengthen organizational capacity, and deliver progress reports and presentations to stakeholders and sponsors.",
      date: "Dec 2017 - Nov 2023",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-10 bg-white min-h-fit md:min-h-screen scroll-mt-[50px]" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4">
            

              <div className="flex items-center justify-between">
             

                <div className="flex items-center gap-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 rounded-full object-contain shadow-md"
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-gray-800 text-sm font-medium">{exp.role}</p>
                  </div>
                </div>


                <div
                  className="flex items-center gap-2 cursor-pointer select-none"
                  onClick={() => toggleDropdown(idx)}
                >
                  <span className="text-gray-700 text-sm font-medium">{exp.date}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-700 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

         
         
              {openIndex === idx && (
                <div className="mt-4 text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-md p-4 shadow-inner transition-all duration-300 font-medium">
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Projects/>
    </section>
  );
}
