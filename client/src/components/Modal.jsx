import React from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed z-[999] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="max-w-[60%] h-[60%] bg-white flex flex-col">
        <div className="bg-white  shadow-lg p-0">
        <div className="relative  bg-peachpuff my-auto w-full max-w-[632px] h-fit overflow-hidden text-justify text-[1.75rem] text-yellow-700 font-dm-serif-display">
          <div className="mx-auto py-3 text-center w-fit h-fit ">
            Enquire Here
          </div>
          <img
          onClick={onClose}
            className="absolute h-[43.94%] cursor-pointer transition-transform hover:translate-y-[-1px] w-[6.24%] my-auto top-[23.53%] right-[2.91%] bottom-[23.53%] left-[91.85%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="https://cdn.discordapp.com/attachments/1096324843877703713/1172647855064891412/image.png?ex=6561146b&is=654e9f6b&hm=1c4fe06c279649c348b25e08c06e811c425ebe93388a4ffee09fdfafdc22bacb&"
          />
        </div>Modal</div>
      </div>
    </div>
  );
};

export default Modal;
