import "./styles/Main.css";
import ReusableSideBar from "./ReusableSideBar";
import ReusableMessage from "./ReusableMessage";
import MessagePlayGround from "./MessagePlayGround";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<div className="main">
			<div className="sideBar">
				<ReusableSideBar />
			</div>
			<div className="msgre">
				<ReusableMessage />
			</div>
			<div className="msgplayground">
				<MessagePlayGround />
			</div>
			<Link className="msgDetails" to="/msg" />
		</div>
	);
};

export default Main;
