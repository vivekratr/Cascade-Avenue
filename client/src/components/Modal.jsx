import React, { useState } from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit the form data here
  };

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed  z-[999] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="max-w-[60%] max-h-[70%] bg-white flex flex-col">
        <div className="bg-white h-[100%]  shadow-lg p-0">
          <div className="relative   bg-peachpuff my-auto w-full  h-fit overflow-hidden text-justify text-[1.75rem] text-yellow-700 font-dm-serif-display">
            <div className="mx-auto py-3 text-center w-fit h-fit ">
              Enquire Here
            </div>
            <img
              onClick={onClose}
              className="absolute h-[40.94%] object fill cursor-pointer transition-transform hover:translate-y-[-1px] w-[5.24%] my-auto top-[23.53%] right-[2.91%] bottom-[23.53%] left-[91.85%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="https://cdn.discordapp.com/attachments/1096324843877703713/1172647855064891412/image.png?ex=6561146b&is=654e9f6b&hm=1c4fe06c279649c348b25e08c06e811c425ebe93388a4ffee09fdfafdc22bacb&"
            />
          </div>
    <div className="w-[60%] pt-14 m-auto">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4  bg-white box-border w-60% h-[3.69rem] overflow-hidden text-justify text-[1.75rem] text-gray-300 font-dm-serif-display border-[1px] border-solid border-yellow-900">
              <img
                className="absolute top-[0.69rem] left-[0.56rem] w-[2.63rem] h-[2.63rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1096324843877703713/1172662933759721503/image.png?ex=65612276&is=654ead76&hm=e09d6b2b1141d3a4049755a9db2214aa4c21dc667b30aa098d470cdfb8eb8b9f&"
              />
            <input
              type="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="relative focus:border-none  left-14  w-[100%] border-none outline-none z-10 h-[2.6rem] p-2 border rounded-md"
            />
            </div>
            <div className="relative mb-4  bg-white box-border w-60% h-[3.69rem] overflow-hidden text-justify text-[1.75rem] text-gray-300 font-dm-serif-display border-[1px] border-solid border-yellow-900">
              <img
                className="absolute top-[0.69rem] left-[0.56rem] w-[2.63rem] h-[2.63rem] overflow-hidden"
                alt=""
                src="https://cdn.discordapp.com/attachments/1096324843877703713/1172670764462395393/image.png?ex=656129c1&is=654eb4c1&hm=efbedadda52a442ed68b79cbdb3f9676a65523f6dda152a7e78f3e768919ca8a&"
                />
            <input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className="relative focus:border-none  left-14  w-[100%] border-none outline-none z-10 h-[2.6rem] p-2 border rounded-md"
              />
            </div>
            <div className="relative mb-4  bg-white box-border w-60% h-[3.69rem] overflow-hidden text-justify text-[1.75rem] text-gray-300 font-dm-serif-display border-[1px] border-solid border-yellow-900">
              <img
                className="absolute top-[0.69rem] left-[0.56rem] w-[2.63rem] h-[2.63rem] overflow-hidden"
                src="https://cdn.discordapp.com/attachments/1096324843877703713/1172670798339788982/image.png?ex=656129c9&is=654eb4c9&hm=78a29802120a9ee5ed227316ea4cd3df06108d8b06da71bd46a63b878be08047&"
                alt=""
              />
            <input
              type="name"
              name="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
              className="relative focus:border-none  left-14  w-[100%] border-none outline-none z-10 h-[2.6rem] p-2 border rounded-md"
            />
            </div>
            
           
            <div className="relative bg-white box-border w-full h-[3.69rem] overflow-hidden text-justify text-[1.75rem] text-saddlebrown font-dm-serif-display border-[1px] border-solid border-yellow-900">
<div className="mx-auto w-fit h-fit my-auto">Submit</div>
</div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
