import Header from "./Header";
import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import Corousel from "./Corousel";

import Corousell from "./Corousell";

export default function Mainpage() {
  const backgroundImageUrl =
    "https://cdn.discordapp.com/attachments/1096324843877703713/1169889030075326545/image_12.png?ex=65570b10&is=65449610&hm=15386f2762e0011dbe26eae3f532949505320da5aab46cec39e877b613a1acd4&";

  const [backgroundImage, setBackgroundImage] = useState(backgroundImageUrl);
  const [screenSize, setScreenSize] = useState("");

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    height: "100vh",
  };

  function getScreenSize() {
    const innerWidth = window.innerWidth;
    console.log("innerWidth", innerWidth);

    if (innerWidth >= 1200) {
      setScreenSize("large");
      return "large";
    } else if (innerWidth >= 768) {
      setScreenSize("medium");

      return "medium";
    } else {
      setScreenSize("small");

      console.log("small");
      return "small";
    }
  }

  const slides = [
    "https://cdn.discordapp.com/attachments/1096324843877703713/1170449806326509629/image.png?ex=65591553&is=6546a053&hm=39a63eb208dc06999a7b2deb3b330813fbe72caa16364ab341a2e7ff40b6f350&",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  const [is1BHKSelected, setIs1BHKSelected] = useState(true);

  const handleToggle = () => {
    setIs1BHKSelected(!is1BHKSelected);
  };

  useEffect(() => {
    const screenSize = getScreenSize();

    if (screenSize === "small") {
      setBackgroundImage(
        "https://cdn.discordapp.com/attachments/1096324843877703713/1170667695902048377/image.png?ex=6559e040&is=65476b40&hm=8225cf55ec24c1e09c4cfeb4d01662a123e19310152a8598f5578cbad0be4999&"
      );
    } else {
      setBackgroundImage(backgroundImageUrl);
    }
  }, [getScreenSize, window.innerWidth, screenSize]);

  return (
    <div>
    <div
      className="relative  lg:h-full
    lg:bg-large-image xl:bg-extra-large-image bg-center object-cover max-w-full min-h-[200vh]  md:min-h-[500px] lg:min-h-[600px]"
      style={backgroundStyles}
    >
      <Header />
      {/* <Button>Button</Button>; */}
      {/* <h1 className="color-white">Mainpage</h1> */}
      <div className="  w-full flex  flex-wrap  justify-between">
        <div className=" ml-0  w-[100%] lg:w-[40%] flex justify-around ">
          {/* right side content */}
          <div
            style={{ borderRadius: "32px" }}
            className="  relative  p-7 bg-white w-[60%] lg:w-[65%] lg:ml-14 h-[31.19rem]  text-left text-[1.75rem] text-yellow-700 font-dm-serif-displays"
          >
            <div className="h-fit text-[1.7rem] font-dm-serif-display text-yellow-400 text-left">
              CASCADE AVENUE
            </div>
            <div className="h-fit text-[0.8rem] font-dm-serif-display text-yellow-600 text-left">
              KASARVADAVALI, GB ROAD, THANE[W] - 400615
            </div>
            <div className="h-fit mt-7  text-[2rem] font-dm-serif-display text-red-600 text-left">
              Largest 1 BHK Of THANE
            </div>
            <div className="h-fit text-[0.71em] font-dm-serif-display text-yellow-700 text-left">
              <p className="h-fit m-0">Luxury Amenities : 25+</p>
              <p className=" h-fit m-0">Carpet Area : 426 to 900 Sqf</p>
            </div>

            <div className="relative rounded-[23px] mt-8 bg-gray-200 md:w-[100%] w-[100%] lg:w-[100%]  h-[2.69rem] overflow-hidden text-left text-[1.25rem] text-darkolivegreen font-dm-serif-display">
              <div
                className={`relative top-[0rem] left-[0rem] rounded-[32px] w-[50%] h-[2.69rem]  overflow-hidden cursor-pointer ${
                  is1BHKSelected
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={handleToggle}
              >
                <div className="xs:text-[0.9rem] xs:pt-2 xs:pl-5 xs:text-left text-center pt-1">
                  1 BHK
                </div>
              </div>
              <div
                className={`absolute top-[0rem]  xs:left-[50%] w-[50%]  left-[8.5rem] rounded-[32px]  h-[2.69rem] overflow-hidden cursor-pointer ${
                  is1BHKSelected
                    ? "bg-gray-200 text-black"
                    : "bg-yellow-600 text-white"
                }`}
                onClick={handleToggle}
              >
                <div className=" xs:text-[0.9rem]  sm:text-[0.9rem] xs:pt-2 xs:pl-5 xs:text-left text-center pt-1">
                  1+1 Jodi
                </div>
              </div>
            </div>
            <div className="absolute text-[1.75rem] font-dm-serif-display text-yellow-700 text-left mt-6">
              {is1BHKSelected ? (
                <div className="relative w-[80%]  text-[0.8em] font-dm-serif-display text-yellow-700 text-center">
                  52.47* Lakhs Starting Price
                </div>
              ) : (
                <div className="relative w-[80%] text-[0.8em] font-dm-serif-display text-yellow-700 text-center">
                  XX* Lakhs Starting Price
                </div>
              )}
            </div>
            <div className="relative xs:left-[9%] left-[30%] top-[5rem] rounded-[46px] bg-yellow-600 xs:min-w-[80%]  min-w-[39%] max-w-[35%] h-[3.25rem] overflow-hidden text-justify text-[0.9rem] text-white font-dm-serif-display">
              <div className="relative top-[0.8rem] lg:left-[10rem] left-[4.8rem]">
                Enquire Now
              </div>
            </div>
          </div>
        </div>
        {/*left side corousel */}
        <div className=" h-[78%] w-[90%]  flex mx-auto my-auto mb-8 lg:mb:0 lg:mx-0 lg:my-0  lg:h-[36rem] lg:w-[56.731242rem]">
          {/* <Corousell >
        {slides.map((slide) => (
            <img
              src={slide}
              alt="image 1"
            />
          ))
        }
          </Corousell> */}
          <Corousel />
        </div>
      </div>


    </div>

      {/* 2nd page */}
      <div className="flex  w-full ">
        <div className="relative w-[20%] bg-white ">
        <div className="absolute top-[30rem] lg:top-[49rem] h-full   font-dm-serif-display text-darkkhaki text-left [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.32]">
          <p className="w-[29rem] lg:w-[48rem] lg:text-[6rem] h-fit text-[2rem]">

          CASCADE AVENUE
          </p>
          <p className=" w-[30rem] h-fit lg:text-[1.4rem] text-[1rem]">Kasarvadavali, GB Road, Thane - 400615</p>
          </div>
        </div>
        <div className="w-[80%] h-full bg-white">
        <div className="relative h-12 lg:h-max text-[1.2rem] top-7 lg:text-[3rem] font-dm-serif-display text-teal-600 text-left">Happiness Is Beautiful</div>
        <div className="relative h-12 lg:h-max text-[1.2rem] top-0 lg:text-[3rem] font-dm-serif-display text-darkkhaki text-left">Moment spent with your loved ones</div>
        <div className="flex flex-wrap mt-3 h-[550px]">
          <img className=" h-[25rem] w-[17rem] rounded-[2rem]  " src="https://cdn.discordapp.com/attachments/1096324843877703713/1170748291554746519/cascade_pic1.jpg?ex=655a2b50&is=6547b650&hm=5b37b6bc6af8adf9d43f8f46144529fc27a1cd2c53bce4322357a0afe8f36e9b&" alt="" />
          <p className="my-2 h-fit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad minima, temporibus reiciendis ut mollitia quidem molestiae inventore. Aliquid deleniti nesciunt vero! Deserunt eius accusamus ex libero quas debitis dignissimos!
          </p>
        </div>

        <div className="flex flex-wrap h-[10rem] ">
        <div className="relative w-[19rem] h-fit text-[1.3rem] font-dm-serif-display text-darkkhaki text-left">CELEBRATE A COMPLETE LIFE</div>

        <div className="relative rounded-[46px] mx-auto right-3  bg-yellow-600 w-[12rem] h-[4rem] overflow-hidden text-justify text-[1rem] text-white font-dm-serif-display">
<div className="absolute top-[1.19rem] left-[1.25rem]">Download Brochure</div>
<img className="absolute top-[0.77rem] left-[17.46rem] w-[3.15rem] h-[3.15rem] overflow-hidden" alt="" src="arrow-up-right.svg" />
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
