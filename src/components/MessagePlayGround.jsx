import { useSelector } from "react-redux";
import "./styles/MessagePlayGround.css";
import {
	AppBar,
	Button,
	ButtonGroup,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CollectionsIcon from "@mui/icons-material/Collections";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MessagePlayGround = () => {
	const { displayMsg } = useSelector((state) => state.reducer);
	// const displayMsg = displayData[0];
	// console.log("displayMsg", displayMsg);
	return (
		<>
			{displayMsg && (
				<div className="msgplaygrnd">
					<div className="subject">
						{displayMsg.senderName} {displayMsg.mId}
					</div>
					<div className="actualmsg">
						<div className="msgplimg">
							<img src="images/img4.jpg" alt="" />
						</div>
						<div className="msgplmsg">
							<div className="msgUpperDetails">
								<div className="msgpldetailsfirsthalf">
									<p style={{ color: "#0078D4" }}>
										{displayMsg.senderName}
									</p>
									<p className="msgtime">
										FRI 7/28/2017 3:10PM
									</p>
								</div>
								<div className="msgpldetailsecondhalf"></div>
							</div>
							<div className="msgLowerDetails">
								<p>
									{displayMsg.content} <br /> Lorem ipsum
									dolor sit amet consectetur, adipisicing
									elit. Nobis itaque tempora magnam ipsa ut
									temporibus quaerat sequi perferendis qui
									architecto voluptatem sunt nisi modi iusto,
									tempore obcaecati. Quas error tempora
								</p>
							</div>
						</div>
					</div>
					<div className="sendMsg">
						<TextField
							autoFocus
							margin="dense"
							id="name"
							// label="Body"
							type="email"
							color="grey"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							// label="Body"
							type="email"
							fullWidth
							variant="standard"
						/>
						<ButtonGroup
							style={{
								marginTop: "10px",
								// justifyContent: "space-around",
								// backgroundColor: "#3",
							}}
							className="btngrp">
							<Button color="primary" variant="contained">
								Send
							</Button>
							<Button color="primary" variant="outlined">
								Discard
							</Button>
							<Button color="primary" variant="outlined">
								<AttachFileIcon />
							</Button>
							<Button color="primary" variant="outlined">
								<CollectionsIcon />
							</Button>
							<Button color="primary" variant="outlined">
								<MoreHorizIcon />
							</Button>
						</ButtonGroup>
					</div>
				</div>
			)}
		</>
	);
};

export default MessagePlayGround;
