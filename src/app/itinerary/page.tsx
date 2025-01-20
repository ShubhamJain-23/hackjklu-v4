"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Share_Tech_Mono, Inter } from "next/font/google";
import itineraryData from "../data/itinerary.json";
import Timeline from "../components/timeline";
import CodersAtWork from "../components/coming-soon";
import '@/app/coming-soon/style.css'; 

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

interface TimelineEvent {
  time: string;
  event: string;
}

interface ItineraryData {
  day1Events: TimelineEvent[];
  day2Events: TimelineEvent[];
  day3Events: TimelineEvent[];
}

const Itinerary: React.FC = () => {
  const pathname = usePathname();
  const { day1Events, day2Events, day3Events } = itineraryData as ItineraryData;

  const scrollToItinerary = () => {
    const itinerarySection = document.getElementById("itinerary-section");
    console.log("Itinerary section:", itinerarySection);
    if (itinerarySection) {
      itinerarySection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Itinerary section not found");
    }
  };

  return (
    // <div
    //   className={`${pathname === "/itinerary" ? "block" : "hidden lg:block"} mx-[1rem] my-[3rem] min-h-screen md:mx-0 md:mt-[20rem]`}
    //   id="itinerary-section"
    // >
    //   <div className="container mx-auto">
    //     <h1
    //       className={`${tech_mono.className} mb-4 text-center text-[2rem] md:text-[4rem]`}
    //       style={{
    //         backgroundImage:
    //           "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
    //         WebkitBackgroundClip: "text",
    //         color: "transparent",
    //       }}
    //     >
    //       ITINERARY
    //     </h1>
    //     <div className={`grid grid-cols-1 gap-8 md:grid-cols-3`}>
    //       <div>
    //         <div className="rounded-xl border-2 border-gray-500">
    //           <h2 className="rounded-t-xl border-b-2 border-gray-500 bg-gray-800 px-4 py-2 text-center text-lg font-semibold text-gray-300">
    //             Day 1
    //           </h2>
    //           <Timeline
    //             events={day1Events}
    //             highlightEvents={[
    //               "Opening Ceremony",
    //               "Workshop by JDW",
    //               "Hackathon Starts",
    //               "Improv Event",
    //             ]}
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <div className="rounded-xl border-2 border-gray-500">
    //           <h2 className="rounded-t-xl border-b-2 border-gray-500 bg-gray-800 px-4 py-2 text-center text-lg font-semibold text-gray-300">
    //             Day 2
    //           </h2>
    //           <Timeline
    //             events={day2Events}
    //             highlightEvents={[
    //               "Coding Ninjas Event",
    //               "Session by Pranav M.",
    //               "Qawwali Night",
    //               "Session by Prof. Iyenger",
    //               "Improv by Nakab",
    //               "Workshop by GFG",
    //               "Music Night by Anunaad",
    //             ]}
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <div className="rounded-xl border-2 border-gray-500">
    //           <h2 className="rounded-t-xl border-b-2 border-gray-500 bg-gray-800 px-4 py-2 text-center text-lg font-semibold text-gray-300">
    //             Day 3
    //           </h2>
    //           <Timeline
    //             events={day3Events}
    //             highlightEvents={["DJ night by JDW", "Closing Ceremony", "Software Engineering Session"]}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className={`fixed z-50 hidden rounded-full bg-gradient-to-r from-yellow-400 to-red-500 px-4 py-2 text-black md:bottom-20 md:right-10 md:block ${inter.className}`}
    //     onClick={scrollToItinerary}
    //   >
    //     Go to Itinerary
    //   </button>
    // </div>

    <CodersAtWork />
  );
};

export default Itinerary;
