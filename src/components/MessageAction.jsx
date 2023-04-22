import { useState } from "react";
import "./styles/MessageAction.css";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	msgactionfirst: {
		backgroundColor: "rgb(185, 187, 189)",
		/* justify-content: space-between; */
		display: "flex",
		marginTop: "5px",
		borderRadius: "10px",

		/* padding: 4px 7px; */
	},
});

const MessageAction = () => {
	const classes = useStyles();
	const [actionSelected, setActionSelected] = useState(false);
	// const [alignment, setAlignment] = useState("Focused");

	return (
		<div className="messageAction">
			{/* <ToggleButtonGroup

				color="primary"
				value={alignment}
				exclusive
				onChange={(e) => setAlignment(e.target.value)}>
				<ToggleButton value="Focused">
					<h4>Focused</h4>
				</ToggleButton>
				<ToggleButton value="Other">Other</ToggleButton>
			</ToggleButtonGroup> */}
			<div className="msgactionfirst">
				<p
					className={`${actionSelected === false && "active"}`}
					onClick={() => setActionSelected(false)}>
					Focused
				</p>
				<p
					className={`${actionSelected === true && "active"}`}
					onClick={() => setActionSelected(true)}>
					Other
				</p>
			</div>
			{/* <ToggleButtonGroup className={classes.msgactionfirst}>
				<ToggleButton
					className={`${actionSelected === false && "active"}`}
					onClick={() => setActionSelected(false)}>
					Focused
				</ToggleButton>
				<ToggleButton
					className={`${actionSelected === true && "active"}`}
					onClick={() => setActionSelected(true)}>
					Other
				</ToggleButton>
			</ToggleButtonGroup> */}
			<div className="msgactionfilter">
				<img width={18} src="images/sort (1).png" alt="" />
				<p>Filter</p>
			</div>
		</div>
	);
};

export default MessageAction;
