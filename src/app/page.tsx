import { Steps } from "@/components/steps";
import { ModeToggle } from "@/components/toggle-theme";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <header className="flex items-end justify-between py-3 border-b border-border">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_5939_33899)">
            <path d="M60 0H0V60H60V0Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M22.1035 27.0474C25.1898 23.5529 27.9963 19.2821 27.9963 13.8467H31.99C31.99 20.7379 28.4064 25.9323 25.1027 29.6731C22.6592 32.4401 21.0579 34.4692 20.0454 36.4228C19.0695 38.3055 18.6109 40.1801 18.6109 42.6751V46.1543H14.6172V42.6751C14.6172 39.6033 15.2028 37.0948 16.4963 34.5993C17.7532 32.1743 19.6465 29.8296 22.1035 27.0474Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M35.6817 27.0474C38.7678 23.5529 41.5743 19.2821 41.5743 13.8467H45.5682C45.5682 20.7379 41.9846 25.9323 38.681 29.6731C36.2374 32.4401 34.6362 34.4692 33.6235 36.4228C32.6476 38.3055 32.189 40.1801 32.189 42.6751V46.1543H28.1953V42.6751C28.1953 39.6033 28.781 37.0948 30.0746 34.5993C31.3315 32.1743 33.2246 29.8296 35.6817 27.0474Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_5939_33899">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>


        <ModeToggle />
      </header>
      <div>
        <div className="flex items-center justify-center py-96 min-h-screen">
          <h4 className="text-7xl font-black tracking-tighter">STEP ANIMATION</h4>
        </div>

        <Steps />
        <div className="flex items-center justify-center py-96 h-[300px] ">
          <h4 className="text-7xl font-black tracking-tighter hidden">END OF ANIMATION</h4>
        </div>
        <div className="flex items-center justify-center py-96 h-[300px] ">
          <h4 className="text-7xl font-black tracking-tighter hidden">END OF ANIMATION</h4>
        </div>
      </div>

      <div className="flex items-center justify-center py-96 min-h-screen">
        <h4 className="text-7xl font-black tracking-tighter">END OF ANIMATION</h4>
      </div>
    </main>
  );
}
