import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div className="modal-container">{props.children}</div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
