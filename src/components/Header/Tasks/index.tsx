import style from "./style.module.scss";

interface IProps {
	openPopup: ()=> void;
}

const TaskButton: React.FC<IProps> = ({openPopup}) => {

	const handleClick= () => {
		openPopup();
	}

	return(
		<div className={style.wrapper}>
			<button onClick={handleClick} className={style.button}>Создать</button>
		</div>
	)
}

export default TaskButton;
