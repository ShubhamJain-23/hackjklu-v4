import NextLink from "next/link";
import { Share_Tech_Mono } from "next/font/google";
import Image from "next/image";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

const EmptyPage: React.FC = () => {
  return (
    <div>
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/bg.png"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-25"
        />
      </div>
      <div
        className={`min-h-screen flex flex-col mt-[10rem] items-center text-white p-4 ${tech_mono.className}`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-8 text-center" style={{ backgroundImage: 'linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Registrations are closed
        </h1>
        <NextLink href="https://hack-jklu.devfolio.co/" passHref>
          <p className="mb-4">Registrations Partner: <span className="text-blue-500">Devfolio</span></p>
        </NextLink>
      </div>
    </div>
  );
};

export default EmptyPage;
