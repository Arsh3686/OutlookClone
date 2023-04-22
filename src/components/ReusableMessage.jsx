import React from "react";
import MsgElement from "./MsgElement";
import MessageAction from "./MessageAction";
import { useSelector } from "react-redux";
import "./styles/ReusableMessage.css";
import { Link } from "react-router-dom";

const ReusableMessage = () => {
	const { displayData } = useSelector((state) => state.reducer);
	console.log("display allData", displayData);
	return (
		<div className="reusableMessage">
			<MessageAction />
			<div className="beforesmall">
				{displayData.length > 0 &&
					displayData.map((e) => (
						<MsgElement msgData={e} active="" key={e.mId} />
					))}
			</div>
			<Link to={"/msg"} className="aftersmall">
				{displayData.map((e) => (
					<MsgElement msgData={e} active="" key={e.mId} />
				))}
			</Link>
		</div>
	);
};

export default ReusableMessage;
