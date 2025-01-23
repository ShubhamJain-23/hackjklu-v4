import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Sponsor {
    name: string;
    photo: string;
    website: string;
    type?: string;
    large?: boolean; // Add this property
}

export const LogoAnimation = () => {
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);

    useEffect(() => {
        const fetchSponsors = async () => {
            const response = await import("../data/sponsors.json");
            setSponsors(response.default as Sponsor[]);
        };
        fetchSponsors();
    }, []);

    const duplicatedSponsors = [...sponsors, ...sponsors];

    return (
        <div className="relative w-full h-40 overflow-hidden bg-transparent-100 flex flex-col items-center"><div>
            <h2 className="text-3xl font-bold mb-4">Past Partners</h2>
            </div>
            <motion.div
                className="flex gap-4 py-10 absolute left-0"
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                whileHover={{ x: "0%" }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                {duplicatedSponsors.map((sponsor, idx) => (
                    <a
                        key={`${sponsor.name}-${idx}`}
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-shrink-0 ${sponsor.large ? 'w-[160px]' : 'w-[130px]'} flex items-center px-2`}
                    >
                        <Image
                            src={sponsor.photo}
                            alt={sponsor.name}
                            width={sponsor.large ? 200 : 150}
                            height={48}
                            className="w-35 h-auto object-contain p-0 rounded"
                        />
                    </a>
                ))}
            </motion.div>
        </div>
    );
};