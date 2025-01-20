import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import faqData from "../data/faq.json";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const Faq: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>(faqData);

  const toggleFaq = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="container mx-auto my-[5rem] md:my-0">
      <h1
        className="text-[2rem] md:text-[4rem] text-center mb-4"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        FREQUENTLY ASKED QUESTIONS
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className={`mb-4 ${inter.className}`}>
          <button
            className={`w-full p-3 text-left text-lg font-medium flex justify-between items-center ${
              faq.isOpen
                ? "bg-[#232c3b] rounded-t-lg"
                : "bg-gray-800 rounded-lg"
            } text-gray-100 focus:outline-none transition-all duration-300`}
            onClick={() => toggleFaq(index)}
          >
            <span>{faq.question}</span>
            <FontAwesomeIcon
              icon={faAngleDown}
              className={`transform ${faq.isOpen ? "-rotate-180" : ""} transition-transform duration-300`}
            />
          </button>
          {faq.isOpen && (
            <p className="text-gray-400 p-3 rounded-b-lg bg-[#232c3b] mb-2">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
