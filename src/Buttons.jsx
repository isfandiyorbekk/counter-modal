import React from "react";
function Buttons({ text, variant, onClick }) {
  let variants = {
    primary: "border border-yellow-300 text-yellow-300",
    two: "border border-red-600 text-red-600",
    dark: "border border-blue-600 text-blue-600",
    modal: "mx-215 my-40 m-auto",
  };
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} w-40 h-20 my-5 mx-30 bg-gray-100`}
    >
      {text}
    </button>
  );
}

export default Buttons;
