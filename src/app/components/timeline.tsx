import React from "react";
import { Share_Tech_Mono, Inter } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

interface TimelineEvent {
  time: string;
  event: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  highlightEvents?: string[];
}

const Timeline: React.FC<TimelineProps> = ({ events, highlightEvents }) => {
  return (
    <div className="relative ml-[3.5rem]">
      <div
        className="absolute left-0 h-full w-px bg-gray-500"
        style={{
          boxShadow:
            "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
        }}
      ></div>
      <div className="flex flex-col items-start">
        {events.map((event, index) => (
          <div key={index} className="my-2.5 flex items-start">
            <div
              className={`${tech_mono.className} absolute left-0 -translate-x-1/2 transform rounded-full bg-gray-700
            px-3 py-2 text-sm font-semibold text-white ${
              highlightEvents && highlightEvents.includes(event.event)
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-black"
                : ""
            }`}
            >
              {event.time}
            </div>
            <div
              className={`ml-[3rem] px-3 py-3 text-[0.9rem] text-gray-200 ${inter.className}`}
            >
              {event.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
