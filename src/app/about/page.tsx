import Header from "../components/header";
import Footer from "../components/footer";
import CodersAtWork from "../components/coming-soon";
import '@/app/coming-soon/style.css'; 
import Image from "next/image";
import { Share_Tech_Mono, Inter } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
  //   <div>
  //     <div className="md:mx-[5rem] lg:mx-[10rem]">
  //       <div className={`mx-[1rem]   md:mt-[3rem] ${tech_mono.className}`}>
  //         <h1 className="text-[2.2rem] md:text-[4rem] font-bold text-center my-[1rem] md:my-[1.5rem] lg:my-[2rem]">
  //           <span
  //             className="text-transparent bg-clip-text"
  //             style={{
  //               backgroundImage:
  //                 "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
  //             }}
  //           >
  //             ABOUT
  //           </span>{" "}
  //           <span
  //             className="text-transparent bg-clip-text"
  //             style={{
  //               backgroundImage:
  //                 "linear-gradient(90deg, #E69235 7.95%, #C33C39 94.22%)",
  //             }}
  //           >
  //             US
  //           </span>
  //         </h1>
  //         <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>

  //         <div className={`mx-[1rem]  my-[5rem] ${inter.className}`}>
  //           <div className="text-sm lg:text-base flex flex-col md:flex-row items-center my-[1rem] lg:my-[2rem]">
  //             <div className="w-full lg:w-1/2 lg:p-8 leading-relaxed order-2 md:order-1">
  //               <p className="tracking-wide text-sm lg:text-base">
  //                 We gladly announce the return of Hack JKLU V-3.0 an annual
  //                 hackathon event aimed at instilling creativity in the
  //                 fundamental culture of JK Lakshmipat University an exciting
  //                 event that takes place within the span of 3 days bringing
  //                 together one of the sharpest minds from different disciplines
  //                 including Engineering, Management and design.
  //               </p>
  //               <br />
  //               <p className="tracking-wide text-sm lg:text-base">
  //                 Hack JKLU V-3.0, is a community of tech enthusiasts,
  //                 innovators and problem solvers where they get a chance to
  //                 compete under one roof by thinking outside the box and solving
  //                 real life problems with their innovative ideas with an
  //                 environment that encourages diversity and promotes
  //                 collaboration.
  //               </p>
  //             </div>
  //             <div className="w-full lg:w-1/2 flex items-center justify-center order-1 md:order-2">
  //               <Image
  //                 src="/hackjklu-logo-with-text.png"
  //                 alt=""
  //                 width={300}
  //                 height={300}
  //                 className="w-[180px] h-[180px] md:w-[360px] md:h-[325px] lg:w-[300px] lg:h-[300px] mb-[3rem]"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>

  //         <div
  //           className={`mx-[1rem]  my-[10rem] ${inter.className}`}
  //         >
  //           <div className="text-sm lg:text-base flex flex-col md:flex-row items-center my-[1rem] lg:my-[2rem]">
  //             <div className="w-full lg:w-1/2 flex items-center justify-center">
  //               <Image
  //                 src="/jklu-logo.png"
  //                 alt=""
  //                 width={300}
  //                 height={300}
  //                 className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] mb-[3rem]"
  //               />
  //             </div>
  //             <div className="w-full lg:w-1/2 lg:p-8 leading-relaxed">
  //               {/* <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[2rem] md:my-[6rem] text-[#f58b40]">
  //           <span
  //             className="text-transparent bg-clip-text"
  //             style={{
  //               backgroundImage: 'linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)',
  //             }}
  //           >
  //             ABOUT JKLU
  //           </span>
  //         </h3> */}
  //               <p className="tracking-wide text-sm lg:text-base">
  //                 Established in 2011, JK Lakshmipat University (JKLU) is
  //                 located in the historic city of Jaipur, Rajasthan. Supported
  //                 by the 125 years old legacy of contributions to
  //                 nation-building by the JK Organisation, at JKLU we are
  //                 passionate about building the country’s most innovative higher
  //                 education institution. The 30-acre campus is a modern,
  //                 environmentally conscious, and inviting space designed to help
  //                 students live, work and play in a setting that is safe,
  //                 productive, and student-centric.
  //                 <br />
  //                 <br />
  //                 As the world of business and jobs changes rapidly, we are
  //                 evolving to make our students not just job-ready but also
  //                 life-ready, to help them see learning as a continuous process,
  //                 and to become future-ready professionals with 21st-century
  //                 skills.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // 
  <CodersAtWork />
);
};

export default About;
