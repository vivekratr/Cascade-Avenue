import Header from "./Header";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
export default function Mainpage() {
  const backgroundImageUrl = "https://cdn.discordapp.com/attachments/1096324843877703713/1169889030075326545/image_12.png?ex=65570b10&is=65449610&hm=15386f2762e0011dbe26eae3f532949505320da5aab46cec39e877b613a1acd4&";

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh", 
  };

  const [is1BHKSelected, setIs1BHKSelected] = useState(true);

  const handleToggle = () => {
    setIs1BHKSelected(!is1BHKSelected);
  };
  return (
    <div className="relative  h-full object-cover max-w-full w-full   " style={backgroundStyles}>
      
      <Header />
      {/* <Button>Button</Button>; */}
      {/* <h1 className="color-white">Mainpage</h1> */}
    <div className="relative">

      <div className="flex flex-row flex-wrap gap-14 justify-evenly ">

        <div style={{borderRadius:"32px"}} className="relative  p-4 bg-white w-[60%] lg:max-w-[40%] h-[31.19rem]  text-left text-[1.75rem] text-yellow-700 font-dm-serif-displays">
        <div className="h-fit text-[1.75rem] font-dm-serif-display text-yellow-400 text-left">CASCADE AVENUE</div>
        <div className="h-fit text-[1.38rem] font-dm-serif-display text-yellow-600 text-left">GB ROAD THANE</div>
        <div className="h-fit  text-[2.25rem] font-dm-serif-display text-red-600 text-left">Largest 1 BHK Of THANE</div>
        <div className="h-fit text-[1.75rem] font-dm-serif-display text-yellow-700 text-left">
<p className="h-fit m-0">Apartment: FULLY FURNISHED</p>
<p className="h-fit m-0">Luxury Amenities : 100+</p>
<p className=" h-fit m-0">Carpet Area : 430-1260 Sqf</p>
</div>

<div className="relative rounded-[23px] bg-gray-200 max-w-[80%] h-[2.69rem] overflow-hidden text-left text-[1.25rem] text-darkolivegreen font-dm-serif-display">
      <div
        className={`relative top-[0rem] left-[0rem] rounded-[32px] w-[8.19rem] h-[2.69rem] overflow-hidden cursor-pointer ${
          is1BHKSelected ? "bg-yellow-600" : "bg-gray-200"
        }`}
        onClick={handleToggle}
      >
        <div className="text-black text-center ">1 BHK</div>
      </div>
      <div
        className={`absolute top-[0rem] left-[10rem] rounded-[32px] w-[8.19rem] h-[2.69rem] overflow-hidden cursor-pointer ${
          is1BHKSelected ? "bg-gray-200" : "bg-yellow-600"
        }`}
        onClick={handleToggle}
      >
        <div className="text-white">Jodi Flat</div>
      </div>
    </div>
      <div className="absolute text-[1.75rem] font-dm-serif-display text-yellow-700 text-left mt-2">
        {is1BHKSelected ? "1 BHK Flat content goes here" : "Jodi Flat content goes here"}
      </div>


        </div>

      </div>
    </div>
    </div>
  );
}







// // Mainpage.js
// import Header from "./Header";
// // import './styles.css'; // Import the responsive styles

// export default function Mainpage() {
//   const backgroundImageUrl = "https://cdn.discordapp.com/attachments/1096324843877703713/1169889030075326545/image_12.png?ex=65570b10&is=65449610&hm=15386f2762e0011dbe26eae3f532949505320da5aab46cec39e877b613a1acd4&";

//   const backgroundStyles = {
//     backgroundImage: `url(${backgroundImageUrl})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     height: "100vh",
//   };

//   return (
//     <div className="relative h-[867px] object-cover max-w-full w-full responsive-background">
//       <Header />
//       <h1 className="color-white">Mainpage</h1>
//     </div>
//   );
// }
