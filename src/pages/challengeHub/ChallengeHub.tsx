import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Badge } from "@/components/ui/badge"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import notification from '../../assets/notification.svg';
import coin from '../../assets/coin.svg';
import profile from '../../assets/profile.png';
import stroke from '../../assets/stroke.svg';
import data from '../../../data.json'
import { useEffect, useRef, useState } from "react";
import leaderboard from '../../assets/leaderboard.svg';
import { it } from "node:test";

interface Challenge {
  id: number;
  name: string;
  startTime: string; // ISO date string
}

// Example data (this could come from a JSON file or API)
const challengeData: Challenge = {
  id: 1,
  name: 'Thunder Math',
  startTime: '2024-12-20T15:30:00Z', // Example start time
};


const leaderboardData = [
  {
    id: 1,
    name: 'Ayon Molla',
    score: 437,
    avatar: 'https://avatars.githubusercontent.com/u/10183678?v=4',
  },
  {
    id: 2,
    name: 'John Doe',
    score: 123,
    avatar: 'https://avatars.githubusercontent.com/u/10183678?v=4',
  },
  {
    id: 3,
    name: 'Jane Smith',
    score: 789,
    avatar: 'https://avatars.githubusercontent.com/u/10183678?v=4',
  }
]








export default function ChallengeHub() {
  console.log("ChallengeHub.tsx")



  const [timeLeft, setTimeLeft] = useState<string>(''); // State to store the remaining time

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Function to calculate time remaining
    const calculateTimeLeft = () => {
      const startTime = new Date(challengeData.startTime).getTime();
      const now = new Date().getTime();
      const difference = startTime - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);

        setTimeLeft(`${hours} hours ${minutes} minutes`);
      } else {
        setTimeLeft('Challenge Started');
      }
    };

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval
    return () => clearInterval(timer);
  }, []);



  return (
    <>
      <div className='h-screen max-w-[80rem] mx-auto'>
        

        <nav className='flex justify-between mt-4 items-center px-3 py-[11px] bg-[#FCEAEA] rounded-[10px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]'>
            <img src={logo} alt="logo" width={'180px'} />

            <ul className='flex gap-6 justify-between items-center'>
                <li className='text-[#FF5757] font-semibold text-lg'><Link to="/blog">Blog</Link></li>
                <li className='cursor-pointer'><img src={notification} alt="arrow" width={'25px'} /></li>
                <li>
                    <div className='flex items-center gap-[2px] justify-between border-[1px] bg-white border-[#FF5757] rounded-[40px]  font-semibold px-2 py-1'>
                        <img src={coin} alt="arrow" width={'20px'} />
                        <p className='text-lg'>10</p>
                    </div>
                </li>
                <li className='flex items-center justify-between gap-1 cursor-pointer'>
                  <div className="relative inline-block text-left" ref={dropdownRef}>
                    <button onClick={() => setIsOpen(!isOpen)} className="rounded-full focus:ring-[#FF5757] focus:ring-2 focus:ring-offset-1">
                        <img src={profile} className='h-12 w-12 rounded-full'/>
                    </button>
                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div
                        className="absolute right-0 mt-3 mr-[-13px] w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none"
                        role="menu"
                      >
                        <div className="py-1">
                          <a
                            href="#profile"
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                          >
                            Profile
                          </a>
                          <a
                            href="#settings"
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                          >
                            Settings
                          </a>
                          <a
                            href="#logout"
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                          >
                            Logout
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
            </ul>
        </nav>





        <div className='flex justify-between mt-10'>


          <div >
          <div className="grid grid-cols-3 gap-5 ">
                {data.map((item)=>
                  <div className='flex flex-col gap-2 p-4 w-[19rem] rounded-[10px_10px_0px_0px] shadow-[0_0_2px_1px_rgba(0,0,0,0.1)]' key={item.id}>

                    <div className='bg-[#DA8383] bg-opacity-[12%] mx-auto px-4 py-1 rounded-[14rem]'>
                      {/* <p className="font-semibold text-sm text-center">Starts in : 2 hours 30 minuts</p> */}
                      <p className="font-semibold text-sm text-center">Starts in : {timeLeft}</p>

                    </div>

                    <h1 className="text-2xl font-bold text-left">
                      {item.title}
                    </h1>

                    <p>
                      {item.description}
                    </p>

                    <div className="flex justify-start gap-2 items-center">
                      <span className="px-2 text-sm font-semibold text-red-500 border bg-red-100 rounded-full">Entry fee : {item.entry_fee}</span>
                      <span className="px-2 text-sm font-semibold text-green-500 border bg-green-100 rounded-full">Reward : {item.reward}</span>
                    </div>

                    <div className="flex gap-0 justify-between">
                      <div className="flex gap-1.5 mt-[-4px] flex-col">
                        <span>Duration : {item.starts_in}</span>
                        <span>Participants : {item.participants}</span>
                      </div>
                      <div>
                        <button className="text-[#FF5757] text-lg px-3 py-2 border-2 border-[#FF5757] font-bold ">
                          {item.register.cta_text}
                        </button>
                      </div>
                    </div>
                  
                  </div>                
                )}
              </div>

          </div>


          {/* --------------------leaderboard --------------------- */}
          <div>
            <div className="flex flex-col gap-3 shadow-[0_0_2px_0.8px_rgba(0,0,0,0.1)] rounded-[10px] p-4">
              <div className="flex items-center gap-1 ml-[-6px]">
                <img src={leaderboard} alt="leaderboard" className="w-8 h-8" />
                <h1 className="text-xl font-semibold mt-[-6px]">Leaderboard</h1>
              </div>
              <div className="flex flex-col gap-2">
                {
                 leaderboardData.map((item)=>
                  <div key={item.id} className="flex justify-between gap-10 p-2 px-3 items-center shadow-[0_0_2px_0.8px_rgba(0,0,0,.09)] rounded-[10px]">
                    <div className="flex items-center gap-2">
                      <span>{item.id}.</span>
                      <img src={item.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                      <span>{item.name}</span>
                    </div>
                    <span>{item.score}<span className="text-sm "> pt</span></span>
                  </div>
                )}
              </div>
            </div>
          </div>





        </div>



        

      </div>





    </>
  );
}




{/* <AlertDialog>
                        <AlertDialogTrigger>Register Now</AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your account
                              and remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog> */}