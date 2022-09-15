import { Button } from "@mui/material";
import style from "./style.module.scss";
import React, { useCallback, useState } from "react";

interface IProps {
  closePopup: () => void;
  initData: Record<string, any>;
}

const DialogFooter: React.FC<IProps> = ({ closePopup, initData }) => {
  const [formData, setFormData] = useState(initData);

  const handleClose = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    closePopup();
  }, []);

  const handleSave = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setFormData((oldFormData) => ({
      ...oldFormData,
    }));
  }, []);

  return (
    <div className={style.wrapper}>
      <Button
        variant="text"
        size={"medium"}
        className={style.button}
        onClick={handleClose}
      >
        Отмена
      </Button>
      <Button
        variant="contained"
        size={"medium"}
        className={style.button}
        onClick={handleSave}
      >
        Сохранить
      </Button>
    </div>
  );
};

export default DialogFooter;
