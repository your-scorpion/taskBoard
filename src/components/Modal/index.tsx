import React, { ReactHTMLElement } from "react";
import style from "./style.module.scss";
import ReactDOM from "react-dom";
import Portal from "../Portal/";

interface IProps {
  isVisible: boolean;
  classname?: string;
}

const Modal: React.FC<React.PropsWithChildren<IProps>> = ({
  isVisible,
  children,
  classname,
}) => {
  if (!isVisible) {
    return null;
  }
  return (
    <Portal
      id={"modal"}
      classname={`${style.wrapper} ${classname}`}
      children={children}
    />
  );
};

export default Modal;
