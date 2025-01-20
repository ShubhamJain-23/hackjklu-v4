import React from "react";
import Image from "next/image";
import { Share_Tech_Mono } from "next/font/google";
import CodersAtWork from "../components/coming-soon";
import '@/app/coming-soon/style.css'; 

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ['400'] });

const Gallery: React.FC = () => {
  const imageCount = 40;
  const imageList = Array.from(
    { length: imageCount },
    (_, index) => `/gallery/${index + 1}.jpg`
  );

  return (
    // <div className={`container mx-auto my-[2rem] md:my-[5rem] px-4 ${tech_mono.className}`}>
    //   <div className="text-center my-[3rem] md:my-[6rem]">
    //     <h1 className="text-[2.2rem] md:text-[4rem] font-bold text-center">
    //       <span
    //         className="text-transparent bg-clip-text"
    //         style={{
    //           backgroundImage:
    //             "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
    //         }}
    //       >
    //         HackJKLU
    //       </span>{" "}
    //       <span
    //         className="text-transparent bg-clip-text"
    //         style={{
    //           backgroundImage:
    //             "linear-gradient(90deg, #E69235 7.95%, #C33C39 94.22%)",
    //         }}
    //       >
    //         Gallery
    //       </span>
    //     </h1>
    //     <p className="text-md mt-4 md:text-lg italic text-gray-400">"It's not just about writing <span
    //         className="text-transparent bg-clip-text"
    //         style={{
    //           backgroundImage:
    //             "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
    //         }}
    //       >code</span>, it's about the <span
    //         className="text-transparent bg-clip-text"
    //         style={{
    //           backgroundImage:
    //             "linear-gradient(90deg, #E69235 7.95%, #C33C39 94.22%)",
    //         }}
    //       >experience</span>."</p>
    //   </div>
    //   <div className="flex flex-wrap md:mx-[5rem]">
    //     {imageList.map((image, index) => (
    //       <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 px-2 mb-4">
    //         <div className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl">
    //           <Image
    //             src={image}
    //             alt={`Gallery Image ${index + 1}`}
    //             width={500}
    //             height={300}
    //             priority={index < 10}
    //             placeholder="blur"
    //             blurDataURL="/placeholder.jpg"
    //             className="rounded-lg object-cover responsive"
    //           />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <CodersAtWork />
  );
};

export default Gallery;
