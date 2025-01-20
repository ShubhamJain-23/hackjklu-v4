import React from "react";
import NextLink from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RegisterBtn: React.FC = () => {
    return (
        <NextLink href="/closed" passHref target="_blank">
            <p className={`inline-flex px-8 py-3 text-black text-[1.1rem] md:text-[1.3rem] justify-center items-center gap-4 rounded-md bg-gradient-to-r from-red-600 to-yellow-500 ${inter.className}`}>
                Registrations Closed
            </p>
        </NextLink>

    );
};

export default RegisterBtn;