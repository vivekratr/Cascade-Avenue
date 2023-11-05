import { Carousel } from "@material-tailwind/react";

export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-3xl aspect-square overflow-hidden h-[100%] w-[100%] lg:w-[90%] relative z-10"
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
        className="object-cover "
        style={{ objectFit: "cover" }} // Add this line
      />
       <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1170449806326509629/image.png?ex=65591553&is=6546a053&hm=39a63eb208dc06999a7b2deb3b330813fbe72caa16364ab341a2e7ff40b6f350&"
        alt="image 1"
        className="object-cover "
        style={{ objectFit: "cover" }} // Add this line
      />
       <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1170452120047210556/WhatsApp_Image_2023-11-02_at_22.53.00_c990782c.jpg?ex=6559177b&is=6546a27b&hm=3fe78ed4e0a0ef942b5f23fb759c76b19db71e00e0ae267f8ab9369b7445b2b4&"
        alt="image 1"
        className="object-cover "
        style={{ objectFit: "cover" }} // Add this line
      />
      {/* Add similar style for other images if necessary */}
    </Carousel>
  );
}
