import React from "react";
import Image from "next/image";
import dataOC from "../data/dataOC.json";
import dataTeam from "../data/dataTeam.json";
import { Share_Tech_Mono, Inter } from "next/font/google";
import CodersAtWork from "../components/coming-soon";
import '@/app/coming-soon/style.css'; 


const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const Team: React.FC = () => {
  const importedDataOC = dataOC;
  const importedDataTeam = dataTeam;

  return (
    // <div className="bg-black">
    //   <div
    //     className={`mx-[1rem] md:mx-[5rem] lg:mx-[10rem] mt-8 md:mt-16 mb-[5rem] md:mb-[10rem] ${tech_mono.className}`}
    //   >
    //     <section className="mb-1 md:mb-16">
    //       <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[2rem] md:my-[6rem] text-[#f58b40]">
    //         <span
    //           className="text-transparent bg-clip-text"
    //           style={{
    //             backgroundImage:
    //               "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
    //           }}
    //         >
    //           ORGANISING COMMITTEE
    //         </span>
    //       </h3>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[5rem] mx-[1rem] md:mx-[5rem]">
    //         {importedDataOC.map((member) => (
    //           <div key={member.name} className="relative">
    //             <div className="absolute inset-0.5 md:-inset-0.5 bg-gray-400 rounded-[1rem] blur opacity-75"></div>
    //             <div className="relative flex flex-row md:flex-col items-center bg-black justify-center rounded-[1rem] p-4 md:p-4">
    //               <div className="w-1/2 md:mb-4 relative h-[8rem]  md:h-[14rem] md:w-full overflow-hidden rounded-md shadow-lg md:mx-auto">
    //                 <div className="w-full h-full overflow-hidden rounded-md">
    //                   <Image
    //                     src={member.photo}
    //                     alt={member.name}
    //                     fill
    //                     style={{ objectFit: "cover" }}
    //                     className="rounded-md"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="flex-grow"></div>
    //               <div className="w-1/2 md:w-full m-2">
    //                 <div className="flex flex-col justify-center items-center">
    //                   <p className="font-bold text-sm md:text-lg mb-2">
    //                     {member.name}
    //                   </p>
    //                   <a
    //                     href={member.linkedin}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="flex justify-center text-cyan-200 hover:underline"
    //                   >
    //                     LinkedIn
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </section>

    //     <section className="md:mt-[12.5rem]">
    //       <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[4rem] md:my-[6rem] text-[#f58b40]">
    //         <span
    //           className="text-transparent bg-clip-text"
    //           style={{
    //             backgroundImage:
    //               "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
    //           }}
    //         >
    //           CORE COMMITTEE
    //         </span>
    //       </h3>
    //       <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-8 mx-[0.5rem] md:mx-[5rem]">
    //         {importedDataTeam.map((member) => (
    //           <div
    //             key={member.name}
    //             className="flex flex-col md:flex-row items-center text-center md:text-left justify-center md:justify-start mb-8"
    //           >
    //             <div className="md:mr-4 relative h-[9rem] w-[9rem] md:h-40 md:w-40 overflow-hidden rounded-md shadow-lg">
    //               <div className="w-full h-full overflow-hidden rounded-md">
    //                 <Image
    //                   src={member.photo}
    //                   alt={member.name}
    //                   fill
    //                   style={{ objectFit: "cover" }}
    //                   className="rounded-md"
    //                 />
    //               </div>
    //             </div>
    //             <div className="flex flex-col">
    //               <p className="font-bold text-base mt-[1rem] md:mt-0 md:text-[1.7rem] md:mb-[1rem]">
    //                 {member.name}
    //               </p>
    //               <p className="mb-2 text-base text-[1.2rem] md:my-[2rem] px-1 md:px-0">
    //                 <span
    //                   className="text-transparent bg-clip-text"
    //                   style={{
    //                     backgroundImage:
    //                       "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
    //                   }}
    //                 >
    //                   {member.role}
    //                 </span>
    //               </p>
    //               <a
    //                 href={member.linkedin}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="text-cyan-200 hover:underline text-[1.1rem]"
    //               >
    //                 LinkedIn
    //               </a>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <CodersAtWork />
  );
};

export default Team;
