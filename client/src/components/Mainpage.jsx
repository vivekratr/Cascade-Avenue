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
      <h1 className="color-white">Mainpage</h1>

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
