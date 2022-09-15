import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import useWindowDimensions from "./hooks/useWindowDimensions";
import style from "./style.module.scss";
import TaskForm from "./components/TaskForm";
import Modal from "./components/Modal";

interface IProps {
  // isVisible?: boolean;
}

const App: React.FC<IProps> = ({}) => {
  const { height, width } = useWindowDimensions();
  const [isVisible, setVisible] = useState(false);
  const size = useMemo(
    () =>
      ({
        "--container-width-size": `${width}px`,
        "--container-height-size": `${height}px`,
      } as CSSProperties),
    [width, height]
  );
  return (
    <div className={style.wrapper} style={size}>
      <Header openPopup={() => setVisible(true)}></Header>
      <Modal isVisible={isVisible} classname={style.modalWrapper}>
        <TaskForm closePopup={() => setVisible(false)}></TaskForm>
      </Modal>
    </div>
  );
};

export default App;
