import React from "react";
import ReactDom from "react-dom";

const Modal = () => {
  return ReactDom.createPortal(
    <div>
      <h1 style={{ margin: "20px" }} className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>,
    document.body
  );
};

export default Modal;
