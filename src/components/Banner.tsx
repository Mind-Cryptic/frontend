import React, { useEffect, useState } from "react";
import "../styles/Banner.css";
import Navbar from "../components/Navbar";
import brainone from '../assets/Banner/brain-one.png';
import plug from '../assets/Banner/circuit-plug.png';


const Banner: React.FC = () => {

  return (
    <div className={` min-h-[calc(100vh-50px)] md:min-h-[600px] xl:min-h-[612px]  max-w-screen- mx-auto text-center flex flex-col justify-between w-fit`}>
      {/* --Navbar-- */}
      <Navbar />

      {/* ---banner-- */}
      <div className="mx-auto text-center py-10 md:py-0">
        <div className="text-[2.5rem] leading-tight md:text-[5.2rem] md:leading-[5.5rem] lg:leading-[6.8rem] lg:text-[7rem] xl:text-[7.5rem] xl:leading-[8rem] 2xl:leading-[7rem] font-bold bebas-neue-regular">
          CHALLENGE YOUR MIND, <br /> DECODE THE WORLD
        </div>

        <button className="mt-4 relative lg:px-8 px-4 md:px-6 py-3 bg-[#FF5757] text-white font-semibold md:text-lg text-base rounded-lg">
          Start Now
        </button>
      </div>

      {/* -----three-line-button--- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-0 ">
        <button className="bg-white shadow-md px-2 lg:px-4 lg:py-4 py-2 rounded-lg  rounded-b-none  border-black border-[1px] ">
          <h3 className="text-sm lg:text-xl poppins-semibold ">
            Mind Cryptic
          </h3>
          <p className="text-black mt-1 text-xs lg:text-sm md:text-xs poppins-medium leading-4 ">
            Discover mind-bending puzzles and games designed to test and train
            your brain to the next level.
          </p>
        </button>
        <button className="bg-white shadow-md px-2 lg:px-4 lg:py-4 py-2 rounded-lg  rounded-b-none  border-black border-[1px]">
          <h3 className="text-sm lg:text-xl poppins-semibold ">
            Challenge Your Brain
          </h3>
          <p className="text-black mt-1 text-xs lg:text-sm md:text-xs poppins-medium leading-4">
            From Sudoku to decoding messages and others, find every brain
            challenge you need in one place!
          </p>
        </button>
        <button className="bg-white shadow-md px-2 lg:px-4 lg:py-4 py-2 rounded-lg rounded-b-none  border-black border-[1px]">
          <h3 className="text-sm lg:text-xl poppins-semibold ">
            Earn Rewards
          </h3>
          <p className="text-black mt-1 text-xs lg:text-sm md:text-xs poppins-medium leading-4">
            Conquer tough puzzles and earn rewards for your success!
          </p>
        </button>
      </div>
    </div>
  );
};

export default Banner;
