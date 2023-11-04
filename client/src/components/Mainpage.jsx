import Header from "./Header";
import { Button } from "@material-tailwind/react";

export default function Mainpage() {
  const backgroundImageUrl = "https://cdn.discordapp.com/attachments/1096324843877703713/1169889030075326545/image_12.png?ex=65570b10&is=65449610&hm=15386f2762e0011dbe26eae3f532949505320da5aab46cec39e877b613a1acd4&";

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh", 
  };
  return (
    <div className="relative  h-full object-cover max-w-full w-full   " style={backgroundStyles}>
      
      <Header />
      {/* <Button>Button</Button>; */}
      {/* <h1 className="color-white">Mainpage</h1> */}
    <div className="relative">

      <div className="flex flex-row flex-wrap gap-14 justify-evenly ">

        <div style={{borderRadius:"32px"}} className="relative  p-4 bg-white w-[60%] lg:max-w-[40%] h-[31.19rem] overflow-hidden text-left text-[1.75rem] text-yellow-700 font-dm-serif-display">
        <div className=" text-[1.75rem] font-dm-serif-display text-yellow-400 text-left">CASCADE AVENUE</div>
        <div className=" text-[1.38rem] font-dm-serif-display text-yellow-600 text-left">GB ROAD THANE</div>
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
