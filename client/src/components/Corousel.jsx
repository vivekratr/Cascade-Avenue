import { Carousel } from "@material-tailwind/react";

export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-3xl aspect-video overflow-hidden  h-[100%] w-[100%]  lg:w-[86%] relative z-20"
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
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1170447206298435695/image.png?ex=655912e7&is=65469de7&hm=ee5587fc85aa92f10da1c39b6b8851635ce4f2e1b605eff6730d03ba4b05a528&"
        alt="image 1"
        className="object-cover  "
        style={{ objectFit: "cover" }} // Add this line
      />
       <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1170703634296754248/diwali_cascade_Custom_1.png?ex=655a01b9&is=65478cb9&hm=dda3fd6d8b6c4a541ce2d827ebdf9ff02d80e59d6a0a4ff0ec97c9449404964a&"
        alt="image 1"
        className="object-cover "
        style={{ objectFit: "cover" }} // Add this line
      />
       <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1170701960425525308/image.png?ex=655a0029&is=65478b29&hm=b3c7fb53217f543b083107f65310e9f2fa6908a04d6423e887e279c4a5cb7eb3&"
        alt="image 1"
        className="object-cover "
        style={{ objectFit: "cover" }} // Add this line
      />
      {/* Add similar style for other images if necessary */}
    </Carousel>
  );
}
