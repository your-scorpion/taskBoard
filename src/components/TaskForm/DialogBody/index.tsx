import { TextareaAutosize, TextField } from "@mui/material";
import style from "./style.module.scss";

const DialogBody: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <label className={style.label}>Заголовок</label>
        <TextField></TextField>
      </div>
      <div className={style.container}>
        <label className={style.label}>Описание</label>
        <TextareaAutosize minRows={10} />
      </div>
    </div>
  );
};

export default DialogBody;
