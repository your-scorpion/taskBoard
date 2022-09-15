import style from "./style.module.scss";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

interface IDialogHeaderProps {
  teamName?: string;
}

const DialogHeader: React.FC<IDialogHeaderProps> = ({}) => {
  const teams = [
    { label: "Team 2" },
    { label: "Team 3" },
    { label: "Team 4" },
    { label: "Team 5" },
    { label: "Team 6" },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.head}>Создание задачи</div>
      <div className={style.projectWrapper}>
        <div className={style.autocompleteWrapper}>
          <label className={style.label}>Проект</label>
          <Autocomplete
            className={style.autocomplete}
            disablePortal
            sx={{ width: 350 }}
            id="combo-box-demo"
            options={teams}
            size={"small"}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </div>
      <div className={style.autocompleteWrapper}>
        <label className={style.label}>Тип задачи</label>

        <Autocomplete
          className={style.autocomplete}
          disablePortal
          sx={{ width: 350 }}
          id="combo"
          options={teams}
          size={"small"}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </div>
  );
};

export default DialogHeader;
