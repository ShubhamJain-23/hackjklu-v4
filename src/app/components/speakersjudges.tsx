import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../data/speakersjudges.json";
import { Share_Tech_Mono } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

const Speakersjudges: React.FC = () => {
  const importedDataTeam = data;
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getShortenedRole = (role: string): string => {
    const words = role.split(" ");
    if (windowWidth <= 768 && words.length > 4) {
      return `${words.slice(0, 4).join(" ")}...`;
    }
    return role;
  };

  return (
    <div className="bg-black">
      <div
        className={`mt-8 md:mt-16 mb-[5rem] md:mb-[10rem] ${tech_mono.className}`}
      >
        <section className="md:mt-[12.5rem]">
          <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[4rem] md:my-[6rem] text-[#f58b40]">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
              }}
            >
              SPEAKERS & JUDGES
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-8 md:mx-[5rem]">
            {importedDataTeam.map((member) => (
              <div
                key={member.name}
                className="flex flex-col md:flex-row items-center text-center md:text-left justify-center md:justify-start mb-8"
              >
                <div className="md:mr-4 relative h-[9rem] w-[9rem] md:h-40 md:w-40 overflow-hidden rounded-md shadow-lg">
                  <div className="w-full h-full overflow-hidden rounded-md">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-base mt-[1rem] md:mt-0 md:text-[1.7rem] md:mb-[1rem]">
                    {member.name}
                  </p>
                  <p className="mb-2 text-base text-[1.2rem] md:my-[1rem] px-1 md:px-0 md:max-w-[15rem] overflow-hidden">
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
                      }}
                    >
                      {getShortenedRole(member.role)}
                    </span>
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-200 hover:underline text-[1.1rem]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Speakersjudges;
