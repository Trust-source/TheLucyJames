import { Globe } from 'lucide-react';
import Docket from '../assets/Docket.jpg';
import Judic from '../assets/Judic.jpg';
import Bud from '../assets/Bud.png';

function Projects() {
  const projects = [
    {
      title: "Docket Master",
      date: "Oct 2024 - Jan 2025",
      description:
        `An evidence-based reporting and decision-making platform that enables legal practitioners and courts to seamlessly file, pay, schedule, and manage legal cases. Designed for both High Courts and Magistrate Courts, it integrates smoothly with JudicAI to enhance efficiency and accessibility.`,
        tags: ["Magistrate", "Case filing", "Legal Document Prepartion", "Legal Compliance","Scheduling management"],
      image: Docket,
      link: "https://www.devontech.io/solutions?fbclid=PAVERDUAMo92ZleHRuA2FlbQIxMAABpzvFfQv3LdQLHqXBhn4SUPHHI_Z2SWBoK1bfKrzKdPo6knVWhOT-gq2D1WYH_aem_S6cEn1FI1DLj1E-R_c-nxw",
    },
    {
      title: "JUDIC AI",
      date: "Jan 2024 - Feb 2024",
      description:
        `An independent court proceeding recorder, transcriber, and case management system that streamlines workflows for judges, clerks, lawyers, and legal aides. It provides instant transcription for both physical and virtual cases and is currently deployed in 16 courts across 4 states, with over 700 proceedings transcribed.`,
      tags: ["Court Proceedings", "Court Cases", "Court Reporting", "Audio Transcription", "Transcription Services","Transcript","Virtual Court"],
      image: Judic,
      link: "https://www.judicai.io/?fbclid=PAVERDUAMo9yJleHRuA2FlbQIxMAABpzYj9w9I3vsx_Jcq7B-HYtf1UFvbcPbZMN1UqoUysixDwECVWT44F5VuDlZj_aem_iuHdl27DNyLRVX5b3h5h7w",
    },
        {
      title: "BUDESHI",
      date: "Jan 2024 - Feb 2024",
      description:
        `Budeshi, an initiative of PPDC, applies the Open Contracting Data Standards (OCDS) to improve transparency in public procurement. It converts hard copy procurement data into open, machine-readable formats and provides interactive visuals that enhance accessibility, collaboration, and monitoring by civil society and individuals.`,
      tags: ["Analytical Skills", "Digital Strategy", "Community outreach", "Data Analysis", "Audio Transcription","Policy Analysis","Project Management"],
      image: Bud,
      link: "https://budeshi.ng/",
    },
  ];

  return (
    <section
      className="w-full px-2 sm:px-8 lg:px-16 py-16 bg-gradient-to-b from-white to-teal-50"
      id="Projects"
    >
      <div className="max-w-6xl mx-auto text-center">
       
       
        <p className="bg-green-700 text-white w-fit mx-auto px-3 py-1 rounded-md text-sm font-semibold shadow-sm">
          My Projects
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
          Check out some of my contributions
        </h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-base md:text-lg">
         A showcase of initiatives and projects that reflect my expertise in leadership, innovation, and technology-driven solutions for transparency, justice, and sustainable development.
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
    
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-700 text-[12px] md:text-base mt-3 flex-1">
                {project.description}
              </p>

         
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-100 text-teal-900 text-xs md:text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm md:text-base font-semibold hover:bg-green-600 transition-colors duration-300 w-fit"
              >
                <Globe size={18} /> Explore Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
