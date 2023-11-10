import React from "react";

const HoverImage = (props) => {
  const temp = props.text;
  return (
    <div className="relative group h-[25%] w-auto">
      <img
        className="h-auto max-w-[85%] rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-20 "
        src={props.img}
        alt=""
      />
      <div className="absolute  lg:max-w-[80%] inset-1 p-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <p className="text-black max-h-auto font-bold">
        {temp.map((t, i) => {
          if (i < temp.length - 1) {
            return <span key={i}>{t}<br /></span>;
          } else {
            return <span key={i}>{t}</span>;
          }
        })}
        </p>
      </div>
    </div>
  );
};

export default HoverImage;
