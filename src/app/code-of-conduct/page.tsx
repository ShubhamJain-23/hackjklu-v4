import React from "react";
import { Share_Tech_Mono, Inter } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const Conduct: React.FC = () => {
  return (
    <div>
      <div
        className={`mx-[1rem] md:mx-[5rem] lg:mx-[10rem] mt-8 md:mt-16 ${tech_mono.className}`}
      >
        <h1 className={"mx-[0.5rem] md:mx-0 text-[2rem] md:text-[4rem]"}>
          Code Of Conduct
        </h1>
        <section className="mb-1 md:mb-16">
          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                Applicability
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem]`}>
              <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              This policy shall be applicable on all spaces related to Devfolio,
              including the following, as well as their online counterparts (if
              any):
            </p>
            <ul
              className={`list-disc ml-[2rem] text-[1rem] text-white p-3 md:ml-[5rem] md:text-[1.3rem] ${inter.className}`}
            >
              <li>hackathons</li>
              <li>talks, presentations, or demos</li>
              <li>workshops</li>
              <li>parties and social events</li>
              <li>social media channels, etc.</li>
            </ul>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              This Code of Conduct also applies equally to all sponsors and
              partners of hackathons, and to all projects that are made at the
              hackathon.
            </p>
          </section>
          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                No discrimination
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem]`}>
            <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              Hackathons hosted on Devfolio are dedicated to providing a safe
              and comfortable environment and harassment-free experience for
              everyone. No discrimination, on the basis of the following, shall
              be tolerated:
            </p>
            <ul
              className={`list-disc ml-[2rem] text-[1rem] text-white p-3 md:ml-[5rem] md:text-[1.3rem] ${inter.className}`}
            >
              <li>gender</li>
              <li>gender identity and expression</li>
              <li>age</li>
              <li>sexual orientation</li>
              <li>disability</li>
              <li>physical appearance</li>
              <li>body size</li>
              <li>race</li>
              <li>ethnicity</li>
              <li>nationality</li>
              <li>religion</li>
              <li>political views</li>
              <li>previous hackathon attendance or lack of</li>
              <li>computing experience or lack of</li>
              <li>chosen programming language or tech stack</li>
            </ul>
          </section>
          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                No plagiarism or re-using of past work
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem] `}>
              <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              We encourage you to submit projects only prepared in the duration
              of the hackathon. However, if you decide to submit projects
              consisting of re-used code, or re-submit a project that you have
              already submitted previously to any other hackathon, you are to
              disclose such previous use and its extent with the submission.
            </p>

            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              If upon inspection, it is found that the project has re-used code
              that was not disclosed with the submission, the organizer may ask
              the participant to point out similarities and differences between
              the old and new work, and/or disqualify the submission from
              winning awards automatically.
            </p>
          </section>

          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                No harassment
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem]`}>
              <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              We do not tolerate harassment of hackathon participants in any
              form, including offensive discriminatory verbal comments, public
              display of sexual material, in public spaces, deliberate
              intimidation, stalking, wilful disruption, inappropriate physical
              contact, unwelcome sexual advances, and the taking of photographs
              and audio/video recordings without the subjects consent.
            </p>
          </section>

          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                No recording without consent
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem]`}>
              <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              While photography and videography is encouraged, other
              participants must be given a reasonable chance to opt out from
              being photographed. If they object to the taking of their
              photograph, comply with their request.
            </p>

            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              If they express their disapproval after the photo or video has
              been captured, please delete it from your records, and in case it
              has been shared online, take reasonable steps to retract it from
              social media as well.
            </p>

            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              It is inappropriate to take photographs in contexts where people
              have a reasonable expectation of privacy (in bathrooms or where
              participants are sleeping).
            </p>
          </section>

          {/*
           */}

          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                Creation of a safe space
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem]`}>
              <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              No sponsors, partners, or participants shall use sexualised
              images, activities, or other material at the hackathons for any
              non-permitted purpose. The use of sexualised
              clothing/uniforms/costumes, and anything that creates a sexualised
              environment is prohibited.
            </p>
          </section>

          {/*
           */}
          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                Intellectual Property
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem]`}>
              <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              You will own any developments made by you, and all rights, titles
              and interests in those developments, including the intellectual
              property rights therein, shall belong to you. By posting your
              submission on Devfolio, you are granting Devfolio a non-exclusive,
              worldwide, royalty-free license to use, distribute, display and
              reproduce your submission only to the extent required by us to
              provide services on the Devfolio platform. We will never try to
              steal your creations or use them exploitatively.
            </p>
          </section>
          {/*
           */}
          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                Always report
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem]`}>
              <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              If you notice any violation of this Code of Conduct or find
              otherwise suspicious behavior or have any concerns, please contact
              a member of the hackathon organizing committee immediately.
            </p>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              We will be happy to help participants contact local security or
              local law enforcement, or otherwise assist those experiencing
              harassment to feel safe for the duration of the hackathon. We
              value your attendance.
            </p>
          </section>

          <section>
            <h2>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`text-[1.2rem] text-white block mb-[0.5rem] mt-[0.5rem] p-3  md:p-3 md:text-[2.5rem] md:mb-[1rem]`}
              >
                Consequences of violations
              </span>
            </h2>
            <div className={`mb-[1.5rem] md:mb-[3rem]`}>
              <div className="absolute opacity-30 w-[85%] md:w-[77%] h-0.5 bg-gradient-to-r from-white via-white to-white shadow-xl left-1/2 transform -translate-x-1/2"></div>
            </div>
            <p className={`text-white p-3 text-[1rem] md:p-1 md:text-[1.3rem] ${inter.className}`}>
              In case any participant violates this Code of Conduct, the
              organizer may, at their own discretion:
            </p>
            <ul
              className={`list-disc ml-[2rem] text-[1rem] text-white p-3 md:ml-[5rem] md:text-[1.3rem] ${inter.className}`}
            >
              <li>
                expel them from the hackathon with no refund (if applicable),
              </li>
              <li>
                block their access to Devfolio resources including the website,
              </li>
              <li>report their behaviour to local law enforcement.</li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Conduct;
