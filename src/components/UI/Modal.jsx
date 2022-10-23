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

const ModalCheck = (props) => {
  return (
    <Fragment>
      <Backdrop cartVisibility={props.cartVisibility} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

const Modal = (props) => {
  return createPortal(
    <ModalCheck cartVisibility={props.cartVisibility}>
      {props.children}
    </ModalCheck>,
    overlayElement
  );
};

export default Modal;
