import React from "react";
import Buttons from "./Buttons";
function Modal({ children, isOpen, showBtn }) {
  return (
    <div className="max-w-150 rounded-4xl p-10 shadow-2xl relative m-auto my-10">
      <div className="mt-10">
        <p
          className="absolute top-10 right-10 text-red-700 hover:cursor-pointer font-bold text-2xl"
          onClick={() => {
            (isOpen(false), showBtn(true));
          }}
        >
          x
        </p>
        {children}
        <div className="mt-7 flex justify-end gap-2">
          <Buttons text={"Accept"} variant={"primary"} />
          <Buttons
            text={"Cancel"}
            variant={"two"}
            onClick={() => {
              (isOpen(false), showBtn(true));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
