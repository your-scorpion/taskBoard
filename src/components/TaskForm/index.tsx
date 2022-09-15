import style from "./style.module.scss";
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";

interface IProps {
  closePopup: () => void;
}

const TaskForm: React.FC<IProps> = ({ closePopup }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.modal}>
        <DialogHeader />
        <div className={style.separate}></div>
        <DialogBody></DialogBody>
        <DialogFooter closePopup={closePopup}></DialogFooter>
      </div>
    </div>
  );
};

export default TaskForm;
