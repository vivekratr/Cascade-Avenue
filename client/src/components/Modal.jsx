import React from "react";

const Modal = ({isVisible}) => {
    if (isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] h-[400px] bg-white">
        <div className="relative bg-peachpuff w-[630px] h-[4.25rem] overflow-hidden text-justify text-[1.75rem] text-yellow-700 font-dm-serif-display">
          <div className="absolute top-[0.94rem] left-[16.38rem]">
            Enquire Here
          </div>
          <img
            className="absolute h-[52.94%] w-[5.24%] top-[23.53%] right-[2.91%] bottom-[23.53%] left-[91.85%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="https://cdn.discordapp.com/attachments/1096324843877703713/1172647855064891412/image.png?ex=6561146b&is=654e9f6b&hm=1c4fe06c279649c348b25e08c06e811c425ebe93388a4ffee09fdfafdc22bacb&"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">Modal</div>
      </div>
    </div>
  );
};

export default Modal;
