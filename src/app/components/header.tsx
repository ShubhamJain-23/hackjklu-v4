"use client";
import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeSidebar = (e: MouseEvent) => {
    if (
      sidebarRef.current &&
      !(sidebarRef.current as Node).contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", closeSidebar);
    }

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
    <div className={`relative ${inter.className}`} style={{ position: "sticky", top: 0, width: "100%", zIndex: 100 }}>
      <header
        className="relative text-white py-3 px-4 md:px-14 lg:px-24 flex mt-5 md:mt-10 justify-between items-center p-4 bg-black-rgba"
        style={{
          boxShadow:
            "0px 0px 500px 0px rgba(29, 43, 57, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28)",
        }}
      >
        <div className="flex items-center">
          {/* <NextLink href="https://in.msi.com/" passHref>
            <div className="hidden md:block relative h-[2.3rem] w-[7.33rem] md:h-[3rem] md:w-[9.2rem]">
              <Image
                src="/sponsors/msi.png"
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
                className="h-full w-full"
              />
            </div>
          </NextLink>

          <NextLink href="https://in.msi.com/" passHref>
            <div className="md:hidden block relative h-[2rem] w-[1.6rem] md:h-[3rem] md:w-[9.2rem]">
              <Image
                src="/sponsors/msi-nontext.png"
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
                className="h-full w-full"
              />
            </div>
          </NextLink> */}

          {/* <div className="h-[40px] mx-[0.5rem] md:mx-[2rem] md:h-[50px] w-[0.1rem] bg-gradient-to-b from-gray-300 to-gray-500"></div> */}

          <NextLink href="/" passHref>
            <div className="relative h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem]">
              <Image
                src="/hackjklu-logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
                className="h-full w-full"
              />
            </div>
          </NextLink>
          <NextLink href="/" passHref>
            <Image
              src="/hackjklu-text.png"
              alt="Text"
              width={265}
              height={65}
              className="ml-2 mt-2 h-[2rem] w-[10rem] md:h-[2.5rem] md:w-[12.5rem] flex items-center justify-center"
            />
          </NextLink>
        </div>

        {/* Hamburger menu */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="navbar-burger flex flex-col items-center py-1.5 px-2"
          >
            <span className="block w-8 h-[0.15rem] bg-white rounded"></span>
            <span className="block w-8 h-[0.15rem] bg-white mt-[0.35rem] rounded"></span>
            <span className="block w-8 h-[0.15rem] bg-white mt-[0.35rem] rounded"></span>
          </button>
        </div>

        <nav className="hidden lg:flex items-center space-x-[4rem] ${menuOpen ? 'hidden' : 'block'}">
          <NextLink href="/" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/" ? "underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-5 hover:text-gray-100 text-gray-400"}`}
            >
              Home
            </span>
          </NextLink>
          <NextLink href="/challenges" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/challenges" ? "underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 hover:text-gray-100 text-gray-400"}`}
            >
              Challenges
            </span>
          </NextLink>
          <NextLink href="/about" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/about" ? "underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 hover:text-gray-100 text-gray-400"}`}
            >
              About
            </span>
          </NextLink>
          <NextLink href="/gallery" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/gallery" ? "underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 hover:text-gray-100 text-gray-400"}`}
            >
              Gallery
            </span>
          </NextLink>
          <NextLink href="/team" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/team" ? "underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 hover:text-gray-100 text-gray-400"}`}
            >
              Team
            </span>
          </NextLink>
        </nav>
      </header>
      {/* Sidebar - Mobile View */}
      {menuOpen && (
        <div
          ref={sidebarRef}
          className="lg:hidden fixed top-0 right-0 h-full w-1/2 bg-black p-4 shadow-md z-50 overflow-y-auto"
        >
          <div className="mt-[1.5rem] ml-[0.3rem]">
            <NextLink href="/" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Home
              </span>
            </NextLink>
            <NextLink href="/challenges" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Challenges
              </span>
            </NextLink>
            <NextLink href="/about" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                About
              </span>
            </NextLink>
            <NextLink href="/gallery" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Gallery
              </span>
            </NextLink>
            <NextLink href="/team" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Team
              </span>
            </NextLink>
            <NextLink href="/itinerary" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Itinerary
              </span>
            </NextLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
