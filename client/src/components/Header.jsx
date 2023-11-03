// import Logo from "../assets/logo.svg";
// import Logo2 from "../assets/logo2.svg";
// import React from "react";
// import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

// export default function Header() {
//   return (
//     <div className="flex  mb-8  flex-row max-h-24 max-w-full ">
//       <div className="my-5 mx-6 bg-none relative max-w-[10rem]  max-h-24 px-3  flex flex-row items-center justify-start gap-[0.5rem]">
//         <img
//           src={Logo}
//           alt="Logo"
//           className="relative w-[4.38rem] h-[4.63rem] object-cover"
//         />
//         <img
//           src={Logo2}
//           alt="Logo2"
//           className="relative w-[8.38rem] h-[2.81rem] object-cover"
//         />
//       </div>
//       <div  className="xs:hidden sm:hidden lg:flex md:hidden my-5 ml-4 gap-12 max-w-full  lg:flex-row max-h-24  lg:items-center  font-dm-serif-display ">
//         <p className="h-auto w-fit  cursor-pointer">About</p>
//         <p className="h-auto  w-fit cursor-pointer">Gallery</p>
//         <p className="h-auto  w-fit cursor-pointer">Amenities</p>
//         <p className="h-auto  w-fit cursor-pointer">Floor Plans</p>
//         <p className="h-auto  w-fit cursor-pointer">Virtual Tours</p>
//         <p className="h-auto  w-fit cursor-pointer">Our Partners</p>

//         <div className=" cursor-pointer h-16 max-w-[13rem] mx-4 w-[2.25] my-4 rounded-[46px] bg-yellow-600  overflow-hidden flex flex-row items-center justify-center py-[0.56rem] px-[0.94rem] box-border">
//           <p className="w-[7rem] h-[1.16rem] text-center text-white">Enquire Now</p>
//         </div>

//       </div>
//       <div className="lg:hidden w-full mx-9 my-[1rem] max-w-full flex  max-h-24  items-center justify-end   ">

//         <AiOutlineMenu className="w-10" size={39}/>
//       </div>
//     </div>
//   );
// }


import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="flex  mb-8  flex-row max-h-24 max-w-full ">
      <div className="my-5 mx-6 bg-none relative max-w-[16rem]  max-h-24 px-3  flex flex-row items-center justify-start gap-[0.5rem]">
        <img
          src={Logo}
          alt="Logo"
          className="relative w-[4.38rem] h-[4.63rem] object-cover"
        />
        <img
          src={Logo2}
          alt="Logo2"
          className="relative w-[8.38rem] h-[2.81rem] object-cover"
        />
      </div>

      {/* Responsive Nav Toggle Button */}
      <div className="lg:hidden w-full mx-9 my-[1rem] max-w-full flex items-center justify-end">
        {isNavOpen ? (
          <AiOutlineClose
            className="w-10 cursor-pointer"
            size={39}
            onClick={() => setNavOpen(false)}
          />
        ) : (
          <AiOutlineMenu
            className="w-10 cursor-pointer"
            size={39}
            onClick={() => setNavOpen(true)}
          />)
        }
      </div>

      {/* Responsive Navigation Menu */}
      {isNavOpen && (
        <div className="lg:hidden my-5 ml-4 max-w-full flex flex-col items-start">
          <p className="h-auto w-fit cursor-pointer my-1">About</p>
          <p className="h-auto w-fit cursor-pointer my-1">Gallery</p>
          <p className="h-auto w-fit cursor-pointer my-1">Amenities</p>
          <p className="h-auto w-fit cursor-pointer my-1">Floor Plans</p>
          <p className="h-auto w-fit cursor-pointer my-1">Virtual Tours</p>
          <p className="h-auto w-fit cursor-pointer my-1">Our Partners</p>
          <div className="cursor-pointer h-16 max-w-[13rem] w-[2.25] my-4 rounded-[46px] bg-yellow-600 overflow-hidden flex flex-row items-center justify-center py-[0.56rem] px-[0.94rem] box-border">
            <p className="w-[7rem] h-[1.16rem] text-center text-white">Enquire Now</p>
          </div>
        </div>
      )}

      {/* Original Navigation for Desktop */}
      <div className="hidden lg:flex lg:flex-row my-5 ml-4 gap-12 max-w-full lg:max-h-24 lg:items-center font-dm-serif-display">
        <p className="h-auto w-fit cursor-pointer">About</p>
        <p className="h-auto w-fit cursor-pointer">Gallery</p>
        <p className="h-auto w-fit cursor-pointer">Amenities</p>
        <p className="h-auto w-fit cursor-pointer">Floor Plans</p>
        <p className="h-auto w-fit cursor-pointer">Virtual Tours</p>
        <p className="h-auto w-fit cursor-pointer">Our Partners</p>
        <div className="cursor-pointer h-16 max-w-[13rem] mx-4 w-[2.25] my-4 rounded-[46px] bg-yellow-600 overflow-hidden flex flex-row items-center justify-center py-[0.56rem] px-[0.94rem] box-border">
          <p className="w-[7rem] h-[1.16rem] text-center text-white">Enquire Now</p>
        </div>
      </div>
    </div>
  );
}





