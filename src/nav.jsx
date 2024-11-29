import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faSun,faMoon } from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
  const [mode,setmode]=useState(false);
  const [modetxt,setmodetxt]=useState("Darkmode");

  const togglemode=()=>{
    console.log('togglerfunc');
    if(mode===false){
        document.documentElement.classList.add('dark');
        setmode(true);
        setmodetxt('Lightmode')
    }
    else{
        document.documentElement.classList.remove('dark');
        setmode(false);  
        setmodetxt('Darkmode')
    }
  }


  return (
    <>
      <div className="flex justify-between px-6 py-3 navcontainer w-[100vw] h-[60px] border-b-2 border-slate-500 dark:bg-slate-600 dark:text-white">
        <h2>HOME</h2>
        <ul className="flex gap-6 navul ">
            
          <li className="border-b-4 border-transparent cursor-pointer hover:border-blue-500">About us</li>
          <li className="border-b-4 border-transparent cursor-pointer hover:border-blue-500">Contact us</li>
          <li className="border-b-4 border-transparent cursor-pointer hover:border-blue-500">
            <button onClick={togglemode}>
            
            <FontAwesomeIcon icon={mode?faSun:faMoon}/>

            </button></li>
          
        </ul>
      </div>
    </>
  );
};
