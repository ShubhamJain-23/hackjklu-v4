import React from "react";
import Image from "next/image";
import RegisterBtn from "./registerbtn";
import NextLink from "next/link";
// import Itinerary from "../itinerary/page";
// import Faq from "./faq";
// import Prizes from "./prizes";
import { Share_Tech_Mono, Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import Speakersjudges from "./speakersjudges";
// import SponsorComponent from "@/app/components/sponsors";
// import sponsors from "../data/sponsors.json";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const HomeComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`mx-[1rem] md:mx-[10rem] ${tech_mono.className}`}>
      <div
        className={`flex flex-col md:flex-row items-center justify-center mt-[3rem] md:mt-[5.5rem]`}
      >
        {/* <div className="flex flex-col items-center md:items-start justify-center w-100% md:w-1/2">
          <h2 className="text-[1.3rem] md:text-[2.25rem] text-center md:text-left">
            7th - 9th March, 2024
          </h2>
          <h1
              className="text-[2.8rem] md:text-[4rem] font-bold text-left mb-4"
              style={{
                backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
          >
            HackJKLU 4.0
          </h1>
          <h3 className="hidden md:block text-[2rem] font-thin text-left mb-9 border-l-4 border-solid border-gray-300 pl-4">
            We Challenge You!
          </h3>
          <p className="hidden md:block text-gray-300 text-[1.1rem] mb-[2rem]">
            Come be a part of an event where amazing minds team up to solve
            problems and bring new ideas to life. The top three contestants will
            each win prizes. Don't miss out—register today and put your skills
            to the test in the mainframe!
          </p>
          <div className="hidden md:flex items-center justify-between">
            <RegisterBtn/>
            <NextLink href="https://hackjklu.com/discord" passHref>
              <div className={`ml-4 relative ${inter.className}`}>
                <div className="rounded-md bg-[#7289da] p-0.5">
                  <div className="rounded-[0.3rem] items-center justify-center bg-[#23272a] py-2 px-3">
                    <span className="text-white text-sm">Join us on Discord</span>
                  </div>
                </div>
              </div>
            </NextLink>

          </div>
        </div> */}
{/* 
        <div className="w-4/5  md:w-1/2 ml-[2rem] flex justfiy-center items-center">
          <Image
              className=""
              src="/hero-image.png"
              alt=""
              width={600}
              height={600}
          />
        </div>
        <h3 className="block md:hidden text-[1.5rem] font-thin text-left my-8 border-l-4 border-solid border-gray-300 pl-4">
          We Challenge You!
        </h3>
        <p className="block md:hidden text-center text-gray-300 text-[0.9rem] mb-[1.5rem]">
          Come be a part of an event where amazing minds team up to solve
          problems and bring new ideas to life. The top three contestants will
          each win prizes. Don't miss out—register today and put your skills to
          the test in the mainframe!
        </p> */}
        <div className="my-[1rem] flex items-center md:hidden">
          <RegisterBtn />
        </div>
        <div className="md:hidden flex items-center justify-between">
        <NextLink href="https://hackjklu.com/discord" passHref>
          <div className={`relative ${inter.className}`}>
            <div className="rounded-md bg-[#7289da] p-0.5">
              <div className="rounded-[0.3rem] items-center justify-center bg-[#23272a] px-3 py-2">
                <span className="text-white text-sm">Join us on Discord</span>
              </div>
            </div>
          </div>
        </NextLink>
        </div>
      </div>
      {/* <Prizes/>

      <Speakersjudges /> */}

      {/* <div>
        <h1
          className="text-[3rem] md:text-[4rem] text-center mb-4"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          TRACKS
        </h1>
        <NextLink href="challenges" passHref>
          <div className="cursor-pointer flex flex-wrap justify-center">
            <div className="rounded-[0.7rem] my-[0.5rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-1">
              <div className="rounded-[0.5rem] h-full w-full items-center justify-center bg-black back px-6 py-3">
                <div className="mx-1 my-3 md:mx-5 md:my-7">
                  <h1
                    className={`${inter.className} text-white my-3 text-center font-bold text-[1.5rem] md:text-[2rem]`}
                  >
                    IoT
                  </h1>
                  <p className={`text-center text-gray-400 ${inter.className}`}>
                    The Internet of Things (IoT) track focuses on connecting
                    physical devices to the internet and each other, enabling
                    them to collect and exchange data. It involves hardware and
                    software development for smart devices, sensors, actuators,
                    and communication protocols to create innovative solutions
                    for various industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[0.7rem] my-[0.5rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-1">
              <div className="rounded-[0.5rem] h-full w-full items-center justify-center bg-black back px-6 py-3">
                <div className="mx-1 my-3 md:mx-5 md:my-7">
                  <h1
                    className={`${inter.className} text-white my-3 text-center font-bold text-[1.5rem] md:text-[2rem]`}
                  >
                    AI/ML
                  </h1>
                  <p className={`text-center text-gray-400 ${inter.className}`}>
                    The AI/ML track delves into the realm of creating
                    intelligent systems that can learn from data. It covers
                    algorithms, models, and techniques for pattern recognition,
                    prediction, classification, and optimization. Applications
                    span across industries, including healthcare, finance,
                    marketing, robotics, and autonomous systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[0.7rem] my-[0.5rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-1">
              <div className="rounded-[0.5rem] h-full w-full items-center justify-center bg-black back px-6 py-3">
                <div className="mx-1 my-3 md:mx-5 md:my-7">
                  <h1
                    className={`${inter.className} text-white my-3 text-center font-bold text-[1.5rem] md:text-[2rem]`}
                  >
                    Web 2
                  </h1>
                  <p className={`text-center text-gray-400 ${inter.className}`}>
                    The Web 2 track revolves around modern web development
                    practices, focusing on client-side and server-side
                    technologies to build interactive and responsive web
                    applications. This includes proficiency in HTML, CSS,
                    JavaScript, frameworks like React or Angular, RESTful APIs,
                    and backend technologies like Node.js or Django.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[0.7rem] my-[0.5rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-1">
              <div className="rounded-[0.5rem] h-full w-full items-center justify-center bg-black back px-6 py-3">
                <div className="mx-1 my-3 md:mx-5 md:my-7">
                  <h1
                    className={`${inter.className} text-white my-3 text-center font-bold text-[1.5rem] md:text-[2rem]`}
                  >
                    Web 3
                  </h1>
                  <p className={`text-center text-gray-400 ${inter.className}`}>
                    Web 3 refers to the evolution of the internet towards
                    decentralized, peer-to-peer networks using blockchain
                    technology. This track explores concepts such as
                    decentralized finance (DeFi), non-fungible tokens (NFTs),
                    decentralized applications (DApps), smart contracts, and
                    protocols like Ethereum and IPFS.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[0.7rem] my-[0.5rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-1">
              <div className="rounded-[0.5rem] h-full w-full items-center justify-center bg-black back px-6 py-3">
                <div className="mx-1 my-3 md:mx-5 md:my-7">
                  <h1
                    className={`${inter.className} text-white my-3 text-center font-bold text-[1.5rem] md:text-[2rem]`}
                  >
                    Game Dev/AR/VR
                  </h1>
                  <p className={`text-center text-gray-400 ${inter.className}`}>
                    This track focuses on creating immersive experiences through
                    game development and extended reality technologies. It
                    covers game engines like Unity or Unreal Engine, 3D
                    modeling, animation, physics, interaction design, and the
                    integration of augmented reality (AR) and virtual reality
                    (VR) into applications and simulations.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[0.7rem] my-[0.5rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-1">
              <div className="rounded-[0.5rem] h-full w-full items-center justify-center bg-black back px-6 py-3">
                <div className="mx-1 my-3 md:mx-5 md:my-7">
                  <h1
                    className={`${inter.className} text-white my-3 text-center font-bold text-[1.5rem] md:text-[2rem]`}
                  >
                    Cyber Security
                  </h1>
                  <p className={`text-center text-gray-400 ${inter.className}`}>
                    The Cyber Security track deals with protecting digital
                    systems, networks, and data from malicious attacks,
                    unauthorized access, and breaches. Topics include
                    cryptography, network security, application security,
                    ethical hacking, incident response, risk management,
                    compliance, and security best practices across various
                    platforms and technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[0.7rem] my-[0.5rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-1">
              <div className="rounded-[0.5rem] h-full w-full items-center justify-center bg-black back px-6 py-3">
                <div className="mx-1 my-3 md:mx-5 md:my-7">
                  <h1
                    className={`${inter.className} text-white my-3 text-center font-bold text-[1.5rem] md:text-[2rem]`}
                  >
                    Open Innovation
                  </h1>
                  <p className={`text-center text-gray-400 ${inter.className}`}>
                    The Open Innovation track embraces a collaborative approach
                    where participants are encouraged to bring their own ideas
                    to the table. It serves as a platform for individuals to
                    explore, refine, and showcase their innovative concepts,
                    regardless of the domain. Whether it's a novel solution to a
                    pressing problem, a disruptive technology, or a creative
                    business model, this track provides the opportunity to
                    collaborate with peers, mentors, and experts to turn ideas
                    into reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NextLink>
      </div> */}
      {/* <div className="flex justify-center my-[5rem] md:my-[12rem]">
        <div className="hidden md:block">
          <Image src="/whoshouldapplyimg.png" alt="" width={500} height={500} />
        </div>
        <div className="m-4 md:ml-8">
          <h1
            className="text-[2rem] md:text-[3.5rem] mb-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            WHO SHOULD APPLY?
          </h1>
          <div className="flex justify-center items-center md:hidden">
            <Image
              src="/whoshouldapplyimg.png"
              alt=""
              width={250}
              height={250}
            />
          </div>
          <ul className="ml-[1rem] md:ml-[5rem] mt-[0.5rem] list-disc text-[2.5rem]">
            <li className="text-[1.5rem] md:text-[2.7rem] mb-4">STUDENTS</li>
            <div
              className="hidden md:block opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white"
              style={{
                boxShadow:
                  "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
              }}
            ></div>
            <li className="text-[1.5rem] md:text-[2.7rem] my-4">
              ENTREPRENEURS
            </li>
            <div
              className="hidden md:block opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white"
              style={{
                boxShadow:
                  "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
              }}
            ></div>
            <li className="text-[1.5rem] md:text-[2.7rem] my-4">ENTHUSIASTS</li>
            <div
              className="hidden md:block opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white"
              style={{
                boxShadow:
                  "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
              }}
            ></div>
          </ul>
        </div>
      </div> */}

      {/* <div className="relative">
        <div className="absolute -inset-0.5 bg-gray-400 rounded-[1rem] blur opacity-75"></div>
        <div className="flex flex-col bg-black rounded-[1rem] items-center justify-center relative">
          <div className="mt-[2rem] md:m-[3.5rem]">
            <h1
              className="text-[2rem] md:text-[4rem] text-center mb-4"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              HOW IT WORKS?
            </h1>
            <div className={`flex flex-col md:flex-row ${inter.className}`}>
              <div className="flex flex-col justify-center items-center m-[2rem]">
                <Image
                  src="/section-image-1.png"
                  alt=""
                  width={150}
                  height={150}
                />
                <p className="text-[1rem] text-center mt-[1rem]">
                  HackJKLU is a 36-hour hackathon where students from all over
                  the country come together to work in teams of 2 - 5 to build
                  an innovative solution to a problem.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center m-[2rem]">
                <Image
                  src="/section-image-2.png"
                  alt=""
                  width={160}
                  height={160}
                />
                <p className="text-[1rem] text-center mt-[1rem]">
                  Hackathons are a great way to meet new people, learn new
                  skills, and have fun! We encourage all students to
                  participate, regardless of their experience level.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center m-[2rem]">
                <Image
                  src="/section-image-3.png"
                  alt=""
                  width={150}
                  height={150}
                />
                <p className="text-[1rem] text-center mt-[1rem]">
                  Projects are evaluated by a panel of experts based on criteria
                  such as innovation & execution. Teams receive feedback,
                  fostering continuous improvement & learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Itinerary />
      <Faq />
      <div className="my-[5rem] md:my-[15rem]">
        <h1
            className="text-[2rem] md:text-[4rem] text-center mb-[1rem] md:mb-[5rem]"
            style={{
              backgroundImage:
                  "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
        >
          SPONSORS AND PARTNERS
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {sponsors.map((sponsor, index) => (
              <SponsorComponent key={index} sponsor={sponsor}/>
          ))}
        </div>
      </div> */}
      <div className="flex justify-center item-center">
        <button
            className="bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-800 focus:outline-none"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
