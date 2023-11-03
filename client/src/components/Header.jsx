import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";
import React from "react";

export default function Header() {
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
      <div className=" my-5 ml-4 gap-16 max-w-full flex flex-row max-h-24  items-center  font-dm-serif-display ">
        <p className="h-auto w-fit  cursor-pointer">About</p>
        <p className="h-auto  w-fit cursor-pointer">Gallery</p>
        <p className="h-auto  w-fit cursor-pointer">Amenities</p>
        <p className="h-auto  w-fit cursor-pointer">Floor Plans</p>
        <p className="h-auto  w-fit cursor-pointer">Virtual Tours</p>
        <p className="h-auto  w-fit cursor-pointer">Our Partners</p>

        <div className=" cursor-pointer h-16 max-w-[9rem] mx-4 w-[2.25] my-4 rounded-[46px] bg-yellow-600  overflow-hidden flex flex-row items-center justify-center py-[0.56rem] px-[0.94rem] box-border">
          <p className="w-[7rem] h-[1.16rem] text-center">Enquire Now</p>
        </div>
      </div>
    </div>
  );
}
