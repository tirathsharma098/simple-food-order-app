import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        props.cartVisibility(false);
      }}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlayElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop cartVisibility={props.cartVisibility} />,
        overlayElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </Fragment>
  );
};

export default Modal;
