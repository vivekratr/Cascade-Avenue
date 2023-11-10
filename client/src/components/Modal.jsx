import React from "react";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] bg-white">
        <div className="relative bg-peachpuff w-full h-[4.25rem] overflow-hidden text-justify text-[1.75rem] text-yellow-700 font-dm-serif-display">
<div className="absolute top-[0.94rem] left-[16.38rem]">Enquire Here</div>
<img className="absolute h-[52.94%] w-[5.24%] top-[23.53%] right-[2.91%] bottom-[23.53%] left-[91.85%] max-w-full overflow-hidden max-h-full" alt="" src="Vector.svg" />
</div>
        <div className="bg-white rounded-lg shadow-lg p-4">
      Modal
      </div>
        </div>
    </div>
  );
};

export default Modal;
