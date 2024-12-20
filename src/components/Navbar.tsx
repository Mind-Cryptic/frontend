import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import "../styles/Banner.css";
import brainone from "../assets/Banner/brain-one.png";
import circuit from "../assets/Banner/circuit.svg"
import logicgate from "../assets/Banner/logic-gate.svg";
import numberbox from "../assets/Banner/number-box.svg"



const Navbar: React.FC = () => {
  
  const user = useAuthStore((state)=>state.accessToken)

  return (
    <div className='relative  mx-auto max-w-7xl w-screen mt-3'>
      <nav className=' z-[999] relative lg:w-[90%] md:w-[92%] w-full bg-white p-3 mx-auto flex justify-between items-center drop-shadow-[0_3px_1.5px_rgba(0,0,0,0.2)] rounded-3xl'>
        {/* Logo */}
        <img src={logo} alt="logo" className='lg:w-[180px] md:w-[130px] w-[80px]' width={'180px'} />

        {/* Nav Links */}
        <ul className="md:flex hidden lg:w-[415px] md:w-[335px] space-x-5 text-black text-sm md:text-base poppins-medium ">
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Challenges</li>
          <li className='cursor-pointer'>Blog</li>
          <li className='cursor-pointer'>About us</li>


        </ul>

        {/* Sign In Button */}
        <button className="p-2 text-base md:text-xl lalezar-regular bg-[#FF5757] text-white rounded-lg hover:opacity-90">
          {user ? <Link to='/challenge-hub'>Challenges</Link> : <Link to='/sign-in'>Sign In</Link>}
        </button>
      </nav>


      {/* --signal--lines--- */}
      <div className=" relative signal-lines ">
        {/* <!-- Moving Dot --> */}


        <div className="vertical-1 line"></div>
        <div className="vertical-2 line"></div>
        <div className="vertical-3 line"></div>

        <div className="vertical-6 line"></div>
        <div className="vertical-7 line"></div>
        <div className="vertical-8 line"></div>
        <div className="vertical-9 line"></div>
        <div className="vertical-10 line"></div>
        <div className="vertical-12 line"></div>





        <div className="decode-box "></div>



        <div className="horizontal-1 line rotate"></div>
        <div className="horizontal-2 line rotate"></div>
        <div className="horizontal-3 line rotate"></div>
        <div className="horizontal-4 line rotate"></div>
        <div className="horizontal-7 line rotate"></div>
        <div className="horizontal-8 line rotate"></div>
        <div className="horizontal-9 line rotate"></div>
        <div className="horizontal-11 line rotate"></div>





        <img src={circuit} alt="circuit" className='circuit' />

        <img src={brainone} alt="brain " className="brain-one" />

        <img src={logicgate} alt="logic-gate" className='logic-gate' />

        <img src={numberbox} alt="number box" className='number-box' />
        {/* <div className="dot"></div> */}

        {/* <div className='bebas-neue-regular space-x-2 flex number-bo'>
          <div >
            <div>0</div>
            <div>0</div>
            <div>1</div>
          </div>
          <div>
            <div>1</div>
            <div>1</div>
            <div>0</div>

          </div>
          <div>
            <div>0</div>
            <div>0</div>
            <div>1</div>
          </div>
        </div> */}









      </div>



    </div>   
  );
};

export default Navbar;
