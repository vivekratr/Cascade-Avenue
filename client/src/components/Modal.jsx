import React from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed z-[999] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="max-w-[600px] h-[400px] bg-white flex flex-col">
      <div className={`bg-white p-5 rounded-lg ${isOpen ? "block" : "hidden"}`}>
          <h3 className="text-center font-bold text-xl">{title}</h3>
          <button
            type="button"
            className="absolute top-0 right-0 p-2"
            onClick={handleClose}
          >
            &times;
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              name="emailAddress"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
