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
    <div className="relative  h-full object-cover max-w-full w-full   min-h-screen md:min-h-[500px] lg:min-h-[600px]" style={backgroundStyles}>
      
      <Header />
      {/* <Button>Button</Button>; */}
      {/* <h1 className="color-white">Mainpage</h1> */}
    <div className="relative">

      <div className="flex flex-row flex-wrap gap-14 justify-evenly w-[69rem] ">

        <div style={{borderRadius:"32px"}} className="relative  p-4 bg-white w-[60%] lg:max-w-[40%] h-[31.19rem]  text-left text-[1.75rem] text-yellow-700 font-dm-serif-displays">
        <div className="h-fit text-[1.7rem] font-dm-serif-display text-yellow-400 text-left">CASCADE AVENUE</div>
        <div className="h-fit text-[0.8rem] font-dm-serif-display text-yellow-600 text-left">KASARVADAVALI, GB ROAD, THANE[W] - 400615</div>
        <div className="h-fit  text-[2rem] font-dm-serif-display text-red-600 text-left">Largest 1 BHK Of THANE</div>
        <div className="h-fit text-[0.71em] font-dm-serif-display text-yellow-700 text-left">
<p className="h-fit m-0">Luxury Amenities : 25+</p>
<p className=" h-fit m-0">Carpet Area : 426 to 900 Sqf</p>
</div>

<div className="relative rounded-[23px] bg-gray-200 md:w-[50%] w-[90%] lg:w-[50%]  h-[2.69rem] overflow-hidden text-left text-[1.25rem] text-darkolivegreen font-dm-serif-display">
      <div
        className={`relative top-[0rem] left-[0rem] rounded-[32px] w-[50%] h-[2.69rem]  overflow-hidden cursor-pointer ${
          is1BHKSelected ? "bg-yellow-600 text-white" : "bg-gray-200 text-black"
        }`}
        onClick={handleToggle}
      >
        <div className="xs:text-[0.9rem] xs:pt-2 xs:pl-5 xs:text-left text-center pt-1">1 BHK</div>
      </div>
      <div
        className={`absolute top-[0rem]  xs:left-[50%] w-[50%]  left-[8.5rem] rounded-[32px]  h-[2.69rem] overflow-hidden cursor-pointer ${
          is1BHKSelected ? "bg-gray-200 text-black" : "bg-yellow-600 text-white"
        }`}
        onClick={handleToggle}
      >
        <div className=" xs:text-[0.9rem]  sm:text-[0.9rem] xs:pt-2 xs:pl-5 xs:text-left text-center pt-1">1+1 Jodi</div>
      </div>
    </div>
      <div className="absolute text-[1.75rem] font-dm-serif-display text-yellow-700 text-left mt-2">
        {is1BHKSelected ? <div className="relative text-[0.8em] font-dm-serif-display text-yellow-700 text-left">52.47* Lakhs Starting Price</div> :<div className="relative text-[0.8em] font-dm-serif-display text-yellow-700 text-left">XX* Lakhs Starting Price</div>}
      </div>
      <div className="relative top-[5rem] rounded-[46px] bg-yellow-600 max-w-[40%] h-[3.25rem] overflow-hidden  text-[1.4rem] text-white font-dm-serif-display">
<div className="flex justify-center  text-center my-auto">Enquire Now</div>
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
