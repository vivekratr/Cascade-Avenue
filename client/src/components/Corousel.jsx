import { Carousel } from "@material-tailwind/react";

export default function CarouselCustomNavigation() {
  const ImgStyle = { objectFit: "cover",maxWidth:`100%`,height:`auto`};
  return (
    <Carousel
      className="rounded-3xl  overflow-hidden  h-auto w-[100%]  lg:w-[86%] relative z-20"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="relative bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1171499178099224727/WhatsApp_Image_2023-11-03_at_22.39.58_dd28d378.jpg?ex=655ce6a1&is=654a71a1&hm=232dd53a349c84487a44d25ac21fa0630c749a9d7c2ac53c24c1f12b8d043bc8&"
        alt="image 1"
        className="object-cover  "
        style={ImgStyle} 
        height={`1580px`}
        width={`1600px`}
    
      />
       <img
        src="https://media.discordapp.net/attachments/1096324843877703713/1170620628412403772/image.png?ex=6559b46a&is=65473f6a&hm=c260b6f0c4a6f0bb15e99afa9920d232a8403bf9f17536d1d78174ef6bdfcdf6&=&width=971&height=662"
        alt="image 1"
        className="object-cover "
        style={ImgStyle} 
        height={`563px`}
        width={`825px`}
      />
       <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1170748291554746519/cascade_pic1.jpg?ex=655a2b50&is=6547b650&hm=5b37b6bc6af8adf9d43f8f46144529fc27a1cd2c53bce4322357a0afe8f36e9b&"
        alt="image 1"
        className="object-cover "
        style={ImgStyle} 
        height={`537px`}
        width={`715px`}

      />
       <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1171538501376954469/image_Custom.png?ex=655d0b40&is=654a9640&hm=520e2a8078bdc4eccdb085a5ac0feb87970b6a690ee3763dbde66f6bc2889c93&"
        alt="image 1"
        className="object-cover "
        style={ImgStyle} 
        height={`537px`}
        width={`715px`}

      />
      
    </Carousel>
  );
}
