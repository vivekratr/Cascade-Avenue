import Header from "./Header";
import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import Corousel from "./Corousel";


export default function Mainpage() {
  const backgroundImageUrl =
    "https://cdn.discordapp.com/attachments/1096324843877703713/1169889030075326545/image_12.png?ex=65570b10&is=65449610&hm=15386f2762e0011dbe26eae3f532949505320da5aab46cec39e877b613a1acd4&";

  const [backgroundImage, setBackgroundImage] = useState(backgroundImageUrl);
  const [screenSize, setScreenSize] = useState("");

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

  };

  const [images, setImages] = useState([
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733523263131678/image.png?ex=655dc0e1&is=654b4be1&hm=be1350cdf701589eaa7a0b7575597a4a47469f5eb7ab84f2e43a383417beeca1&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733129459924992/image.png?ex=655dc083&is=654b4b83&hm=04f08b0d09b3a77b590ddf0fe85ce08230da9fbbd68ad15b4ac45a8a475d25f8&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733523946815488/image.png?ex=655dc0e1&is=654b4be1&hm=e9f3dd804054d34dc814b4b45e580a6fa49c839640d795698d5bc0b20d8432b7&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733523636428800/image.png?ex=655dc0e1&is=654b4be1&hm=27ea3b023858cf17d001a3a7884d8d8d1d57427e7deb4fb0d19b341b57b6529e&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733384817549343/image.png?ex=655dc0c0&is=654b4bc0&hm=14d04e5124e4000bec69dc4880acf49decc4d84ec3c7d4cbdfa528f41f32ef49&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733384368762890/image.png?ex=655dc0c0&is=654b4bc0&hm=0444844903e52246f2f793c48676c2b82a0b88df71ebcd131ff3faa5b7225389&",
  ]);
  const imageTitle = [
    "Gazebo",
    "Landscape",
    "Office Space",
    "Senior Citizens Area",
    "Yoga Area",
    "Turf Area",
  ];

  const [visibleImages, setVisibleImages] = useState(0);
  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
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
      bg-center object-cover max-w-full  h-auto  md:min-h-[220vh] min-h-[170vh]  lg:min-h-[120vh]"
        style={backgroundStyles}
      >
        <Header />
        {/* <Button>Button</Button>; */}
        {/* <h1 className="color-white">Mainpage</h1> */}
        <div className="  w-full h-auto flex  flex-wrap  justify-between">
          <div className=" ml-0  w-[100%] h-max lg:max-w-[40%] flex justify-around ">
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
                  <div className="xs:text-[0.9rem] h-fit xs:pt-2 xs:pl-5 xs:text-left text-center pt-1">
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
                  <div className=" xs:text-[0.9rem] h-fit  sm:text-[0.9rem] xs:pt-2 xs:pl-5 xs:text-left  text-center pt-1">
                    1+1 Jodi
                  </div>
                </div>
              </div>
              <div className="absolute text-[1.75rem] h-max font-dm-serif-display text-yellow-700 text-left mt-6">
                {is1BHKSelected ? (
                  <div className="relative w-[80%]  text-[0.8em] h-fit font-dm-serif-display text-yellow-700 text-center">
                    52.47* Lakhs Starting Price
                  </div>
                ) : (
                  <div className="relative w-[80%] text-[0.8em] h-fit font-dm-serif-display text-yellow-700 text-center">
                    XX* Lakhs Starting Price
                  </div>
                )}
              </div>
              <div className="relative xs:left-[9%] left-[30%] top-[5rem] rounded-[46px] bg-yellow-600 xs:min-w-[80%]  min-w-[39%] max-w-[35%] h-[3.25rem] overflow-hidden text-justify text-[0.9rem] text-white font-dm-serif-display">
                <div className="relative top-[0.8rem] h-fit lg:left-[7rem] left-[4.8rem]">
                  Enquire Now
                </div>
              </div>
            </div>
          </div>
          {/*left side corousel */}
          <div className=" h-[60%] w-[90%]  md:h-[100%] lg:min-h[36rem] my-[5rem]  flex mx-auto  mb-8 lg:mb:0 lg:mx-0 lg:my-0  lg:h-[36rem]  lg:max-w-[60%]">
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
      <div className="flex  w-full h-[130vh] lg:h-[122vh] ">
        <div className="relative w-[20%] bg-white ">
          <div className="absolute top-[30rem] lg:top-[49rem] w-[2rem] h-[12rem]   font-dm-serif-display text-darkkhaki text-left [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.32]">
            <p className="w-[29rem]  lg:w-[48rem] lg:text-[6rem] h-fit text-[2rem] ">
              CASCADE AVENUE
            </p>
            <p className=" w-[30rem] h-fit lg:text-[1.4rem] text-[1rem]">
              Kasarvadavali, GB Road, Thane - 400615
            </p>
          </div>
        </div>
        <div className="w-[80%] h-full bg-white">
          <div className="relative h-12 lg:h-max text-[1.2rem] top-7 lg:text-[3rem] font-dm-serif-display text-teal-600 text-left">
            Happiness Is Beautiful
          </div>
          <div className="relative h-12 lg:mt-3 lg:mb-11 lg:h-max text-[1.2rem] top-0 lg:text-[3rem] font-dm-serif-display text-darkkhaki text-left">
            Moment spent with your loved ones
          </div>
          <div className="flex flex-wrap lg:gap-10 mb-7  mt-3 h-[550px] lg:h-auto">
            <img
              className=" h-[25rem] w-full lg:w-[29rem] rounded-[2rem]  "
              src="https://cdn.discordapp.com/attachments/1096324843877703713/1170748291554746519/cascade_pic1.jpg?ex=655a2b50&is=6547b650&hm=5b37b6bc6af8adf9d43f8f46144529fc27a1cd2c53bce4322357a0afe8f36e9b&"
              alt=""
            />
            <p className="my-2 h-fit  lg:max-w-[500px]">
              Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veniam dolorem, unde asperiores itaque quae pariatur perspiciatis
              libero! Harum, non cumque. Voluptatum autem maxime nostrum porro
              expedita dolore suscipit cupiditate officiis? ipsum dolor sit amet
              consectetur adipisicing elit. Laborum ad minima, temporibus
              reiciendis ut mollitia quidem molestiae inventore. Aliquid
              deleniti nesciunt vero! Deserunt eius accusamus ex libero quas
              debitis dignissimos!
            </p>
          </div>

          <div className="flex flex-wrap h-[10rem] mt-16 lg:mt-6 items-center justify-center">
            <div className="relative w-[19rem] lg:text-[3rem] lg:w-[45rem] h-fit text-[1.3rem] font-dm-serif-display text-darkkhaki text-left">
              CELEBRATE A COMPLETE LIFE
            </div>

            <div className="relative rounded-[46px] mx-auto right-3  bg-yellow-600 w-[14rem] h-[4rem] overflow-hidden text-justify text-[1rem] text-white font-dm-serif-display lg:text-[1.1rem]">
              <div className="absolute w-fit top-[1.19rem] left-[1.25rem]">
                Download Brochure
              </div>
              <img
                className="absolute top-[1rem] left-[11.46rem] w-[2.15rem] h-[2.15rem] my-auto "
                style={{ maxWidth: `100%`, height: `auto` }}
                height={`49px`}
                width={`49px`}
                alt=""
                src="https://cdn.discordapp.com/attachments/1096324843877703713/1171505265909170306/arrow-up-right.png?ex=655cec4c&is=654a774c&hm=bda8e08005c943b38ff915dd7bedad9a632d181216c14751e59208538cacbc15&"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3rd page */}

      <div className=" mt-[2rem] bg-lightgray h-auto">
        <div className="flex h-auto">
          <div className="w-[80%]   h-auto">
            <div className="grid p-6 h-auto  auto-rows-max grid-cols-1 lg:grid-cols-3  gap-5">
              {/* image 1 */}
              <div className="bg-tan w-[23rem] h-[23rem]">
                <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                <div class="relative w-[23rem] h-[23rem]  transition-transform duration-[600ms] transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                  <img
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1171732951025860628/image.png?ex=655dc059&is=654b4b59&hm=cb754f3eed7092c313e90217eb496c8b6c5395cbfe2c663ea0612a6d3555ce0d&
  "
                    alt="Your Image"
                    class="w-full h-full object-cover "
                  />
                  <p className="relative h-fit w-max bottom-[23rem] left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-yellow-900 text-left  opacity-[0.7]">
                    Children Area
                  </p>
                </div>
              </div>

              {/* image 2 */}
              <div className="bg-tan w-[23rem] h-[23rem]">
                <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                <div class="relative w-[23rem] h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                  <img
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1171733074195795998/image.png?ex=655dc076&is=654b4b76&hm=6309b2cea31146bada03f48494c5a5612ea94612d47d494114dd3e75fdb77edc&
  "
                    alt="Your Image"
                    class="w-full h-full object-cover "
                  />

                  <p className="relative h-fit w-max bottom-[23rem] left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                    Gym Area
                  </p>
                </div>
              </div>

              {/* image 3 */}
              <div className="bg-tan w-[23rem] h-[23rem]">
                <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                <div class="relative w-[23rem] h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                  <img
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1171805065376436284/image.png?ex=655e0382&is=654b8e82&hm=f06eea204b556f1cba540f152c30f1a32124c0c90a1326514c60eacd7b6173ab&"
                    alt="Your Image"
                    class="w-full h-full object-cover "
                  />
                  <p className="relative h-fit w-max bottom-[23rem] left-[12rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                    Ganesh Temple
                  </p>
                </div>
              </div>

              {/* image 4 */}
              <div className="bg-tan w-[23rem] h-[23rem]">
                <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                <div class="relative w-[23rem] h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                  <img
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1171733609011499080/image.png?ex=655dc0f6&is=654b4bf6&hm=ecbdb35513df518708190814a7d606aacebd50c4a8f6d09a165fd31ce81c4fd5&
  "
                    alt="Your Image"
                    class="w-full h-full object-cover "
                  />
                  <p className="relative h-fit w-max bottom-[23rem] left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                    Deck Lounge
                  </p>
                </div>
              </div>

              {/* image 5 */}
              <div className="bg-tan w-[23rem] h-[23rem]">
                <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                <div class="relative w-[23rem] h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                  <img
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1171792821137707129/image.png?ex=655df81b&is=654b831b&hm=2ee0032eaf47e12868fc781318527578e2f891d37473f9b1fa08a1e4b08a2730&"
                    alt="Your Image"
                    class="w-full h-full object-cover "
                  />
                  <p className="relative h-fit w-max bottom-[23rem] left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                    BBQ Area
                  </p>
                </div>
              </div>

              {/* image 6 */}
              <div className="bg-tan w-[23rem] h-[23rem]">
                <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                <div class="relative w-[23rem] h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                  <img
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1171786378556755968/image.png?ex=655df21b&is=654b7d1b&hm=4fdcbbc60c82954a17bcc7e1736499c26ad377f3de74259d7974fe09760e34f6&
  "
                    alt="Your Image"
                    class="w-full h-full object-cover "
                  />
                  <p className="relative h-fit w-max bottom-[23rem] left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                    Jogging Track
                  </p>
                </div>
              </div>

              {/* load more image*/}
              {images.slice(0, visibleImages).map((image, index) => (
                <div key={index} className="bg-tan  w-[23rem] h-[23rem]">
                  <div className="  absolute top-0 left-0 w-[23rem] h-[23rem] bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                  <div class="relative  w-[23rem] h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                    <img
                      src={image}
                      alt="Your Image"
                      class="w-full h-full object-cover "
                    />
                    <p
                      className={`relative  w-[20rem] h-fit  bottom-[23rem]  text-[1.5rem] z-10 font-dm-serif-display  text-left  opacity-[0.9] ${
                        imageTitle[index] === "Landscape"
                          ? "text-black"
                          : "text-white"
                      } ${imageTitle[index]==="Senior Citizens Area"? "left-[8rem]" : "left-[13rem]" }`}
                    >
                      {imageTitle[index]}
                    </p>
                  </div>
                </div>
              ))}
              {visibleImages < images.length && (
                <div
                  onClick={loadMoreImages}
                  className="relative rounded-[176px] w-full h-[4.69rem]  bg-white overflow-hidden text-justify text-[1.75rem] text-yellow-700 font-dm-serif-display"
                >
                  <div className="absolute h-fit w-fit top-[1.19rem] left-[4rem]">
                    Load More
                  </div>
                  <img
                    className="absolute top-[1rem]  left-[13rem]  w-[2.81rem] h-[2.81rem] overflow-hidden"
                    alt=""
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1171809513389707344/image.png?ex=655e07a7&is=654b92a7&hm=f4963477d1be9275ed98848c87e5c151e1485efb7715a155047418f10256b11b&"
                  />
                </div>
              )}
            </div>
          </div>

          <div className=" sticky top-0 w-[20%] h-full ">
            <div className="relative top-[10rem]  left-[6rem] lg:top-[49rem] h-full   font-dm-serif-display text-white text-right [transform:_rotate(90deg)] [transform-origin:0_0] opacity-[0.35]">
              <p className="  lg:w-[48rem]    lg:text-[6rem] h-fit text-[5rem]">
                Amenities
              </p>
            </div>
          </div>
        </div>

        {/* load more */}
      </div>

      {/* 4th page */}

      {/* 5th page */}
      <div className="flex mt-9 bg-lightgray">

        <div className="w-[80%] "></div>
        <div className="w-[20%] bg-black ">
        <div className="relative left-[3rem] text-[1.13rem] font-dm-serif-display text-white text-right [transform:_rotate(90deg)] h-fit [transform-origin:0_0] opacity-[0.35]">Unit Plans</div>


        </div>
      </div>
    </div>
  );
}
