"use client";

import { FC } from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NotFound: FC = () => {
  const [glitchText, setGlitchText] = useState('404');

  // Simulate glitch effect by randomly changing text
  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    let interval: NodeJS.Timeout;

    const startGlitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setGlitchText(
          '404'.split('')
            .map((char, index) => {
              if (iterations >= 3 && index === Math.floor(Math.random() * 3)) {
                iterations = 0;
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
              }
              return char;
            })
            .join('')
        );
        iterations++;
      }, 100);
    };

    startGlitch();

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center p-4">
      <style jsx global>{`
        @keyframes flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            opacity: 0.99;
            filter: drop-shadow(0 0 1px #10dc3c) drop-shadow(0 0 3px #10dc3c) drop-shadow(0 0 10px #10dc3c);
          }
          21%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            opacity: 0.4;
            filter: none;
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .neon-text {
          animation: flicker 3s linear infinite;
        }

        .glitch {
          animation: glitch 0.3s linear infinite;
          animation-play-state: running;
        }
      `}</style>

      <div className='glitch'>
        <h1 className="text-[150px] font-bold neon-text text-[#10dc3c] mb-4">
          {glitchText}
        </h1>

        <h2 className="text-3xl font-bold neon-text text-[#10dc3c] mb-8">
          Page Not Found
        </h2>

        <p className="text-gray-450 mb-8 max-w-md text-lg">
          The page you&apos;re looking for has vanished into the digital void.
          Let&apos;s get you back to familiar territory.
        </p>

        <Link href="/">
          <button
            className="px-8 py-3 bg-transparent border-2 border-[#10dc3c] text-[#10dc3c] 
                     font-semibold rounded hover:bg-[#10dc3c] hover:text-black 
                     transition-all duration-300 neon-text"
          >
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;