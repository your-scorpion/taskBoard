import Logo from "./Logo";
import Projects from "./Projects";
import Persons from "./Persons";
import TaskButton from "./Tasks";
import Search from "./Search";
import Notifications from "./Notifications";
import Profile from "./Profile";
import style from "./style.module.scss";

interface IProps {
  openPopup: () => void;
}

const Header: React.FC<IProps> = ({ openPopup }) => {
  return (
    <div className={style.wrapper} id={"header"}>
      {/*<Logo></Logo>*/}
      {/*<Projects></Projects>*/}
      {/*<Persons></Persons>*/}
      <TaskButton openPopup={openPopup}></TaskButton>
      {/*<Search></Search>*/}
      {/*<Notifications></Notifications>*/}
      {/*<Profile></Profile>*/}
    </div>
  );
};

export default Header;
