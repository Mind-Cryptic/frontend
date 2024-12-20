import React from "react";
import pink from "../assets/puzzle/pink-puzzle.png";
import softpink from "../assets/puzzle/soft-pink-puzzle.png";
import purple from "../assets/puzzle/purple-puzzle.png";
import blank from "../assets/puzzle/blank-puzzle.png";
import "../styles/puzzle.css";

const Puzzle: React.FC = () => {
  return (
    <div className="pt-10 mx-auto relative">
  

      <div className="flex justify-between items-center w-[90%] mx-auto relative">
        <div>
          <div className="dot-border-purple"></div>
          <div className="text-[#FFFFFF] bg-[#621BC2] w-[250px] p-4 text-[20px]  text-center" style={{ borderRadius: "30px 30px 0px 30px" }}>Choose from the challanges and test your </div>
        </div>
        <div >
          <div className="text-[#D6158C] text-[22px] w-[280px] text-center poppins-semibold ">Solve the mind bending challenges within the time</div>
          <div className="bot-border-soft-pink"></div>
        </div>
      </div>
      <div className="puzzle-container">
        <div className="puzzle-box">
          <div className="puzzle-text text-start">START</div>
          <div className="puzzle-text text-win">WIN</div>
          <div className="puzzle-text text-slove">SLOVE</div>
          <div className="puzzle-piece pink-puzzle">
            <img src={pink} alt="Win Piece" />
          </div>
          <div className="puzzle-piece soft-pink-puzzle">
            <img src={softpink} alt="Solve Piece" />
          </div>
          <div className="puzzle-piece purple-puzzle">
            <img src={purple} alt="Start Piece" />
          </div>
          <div className="puzzle-piece blank-puzzle">
            <img src={blank} alt="Blank Piece" />
          </div>
        </div>

      </div>
      <div className="flex justify-between items-center w-[90%] mx-auto relative top-[40px]">
        <div>
          <div className="dot-border-orange"></div>
          <div className="text-[#F45E38] text-[24px] text-center poppins-semibold ">The missing Piece is you</div>
        </div>
        <div>
          <div className="dot-border-pink"></div>
          <div className="text-[#FFFFFF] bg-[#FF5757] w-[250px] p-2 text-[20px] text-center rounded-[20px] ">Choose from the challanges and test your </div>
        </div>
      </div>
      <br />
    </div>


  );
};

export default Puzzle;
