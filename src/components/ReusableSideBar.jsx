import "./styles/ReusableSideBar.css";

import { useState } from "react";
import SideBarElement from "./SideBarElement";
import { useSelector } from "react-redux";

const ReusableSideBar = () => {
	const [drop, setDrop] = useState(true);
	const { allData } = useSelector((state) => state.reducer);
	// console.log(allData);
	return (
		<>
			<div className="hideandshow" onClick={() => setDrop(!drop)}>
				<img
					width={20}
					src={`images/${
						drop === false
							? "down-arrow-blue.png"
							: "upload (1).png"
					}`}
					alt=""
				/>
				<p style={{ userSelect: "none" }}>Folders</p>
			</div>
			<div className="ReusablesideBarElement">
				{drop === true &&
					Object.keys(allData).map((e) => (
						<SideBarElement sideBarEle={e} active="" key={e} />
					))}
			</div>
		</>
	);
};

export default ReusableSideBar;
