import React from "react";
import Header from "./Header";
import Main from "./Main";
import ActionButtons from "./ActionButtons";
import Popup from "./Popup";
import "./styles/Home.css";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<ActionButtons />
			<Main />
			<div className="modal">
				<Popup />
			</div>
		</div>
	);
};

export default Home;
