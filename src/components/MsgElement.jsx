import { useDispatch } from "react-redux";
import "./styles/MsgElement.css";
import { deletFromDisplayData, setDisplayMsg } from "../Redux/Actions";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import { useEffect, useState } from "react";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
	hide: {
		fontSize: "20px",
		display: "none",
	},
});

const MsgElement = ({ msgData, active }) => {
	const classes = useStyles();
	const [points, setPoints] = useState({
		x: "",
		y: "",
	});
	const [show, setShow] = useState(false);
	// console.log("msgData", msgData);
	const dispatch = useDispatch();
	const handleRightClick = (e) => {
		e.preventDefault();
		setShow(true);
		setPoints({ x: e.pageY, y: e.pageX });
		console.log(e.pageX, e.pageY);
	};

	// useEffect(() => {
	// 	// return () => {
	// 	// 	document.removeEventListener("contextmenu", () => {
	// 	// 		console.log("removed");
	// 	// 	});
	// 	// console.log("unmounted");
	// 	// setShow(false);
	// 	// setPoints({
	// 	// 	x: "",
	// 	// 	y: "",
	// 	// });
	// 	// };

	// }, []);
	return (
		// <></>
		// <div
		// 	className={`msgElement ${active}`}
		// 	onClick={() => dispatch(setDisplayMsg(msgData.mId))}>
		// 	<div className="msgImg">
		// 		<img width={35} src="images/img1.jpg" alt="" />
		// 	</div>
		// 	<div className="msgDetails">
		// 		<h5>{msgData.senderName}</h5>
		// 		{/* <br /> */}
		// 		<h6>{msgData.subject}</h6>
		// 		<small>{msgData.content}...</small>
		// 	</div>
		// 	<div className="msgAttachment">
		// 		<img width={15} src="images/attachment.png" alt="" />
		// 		{/* <small>3:10pm</small> */}
		// 	</div>
		// </div>
		<>
			{
				msgData.mId !== undefined ? (
					<Card
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",

							justifyContent: "space-between",
							cursor: "pointer",
							padding: "10px 10px",
							position: "relative",
							boxShadow: 0,
							borderWidth: "0px 0 1px 0",
							borderStyle: "solid",
							borderColor: "#f0f0f0",
							borderLeft: "4px solid #0078D4",
							":hover": {
								backgroundColor: "#f0f0f0",
							},

							// backgroundColor: "goldenrod",
						}}
						// onContextMenuCapture={handleRightClick}
						onClick={() => dispatch(setDisplayMsg(msgData.mId))}
						className="msgElement">
						<Box
							display={"flex"}
							alignItems={"center"}
							margin="0 10px">
							<Box
								maxWidth={40}
								minWidth={40}
								height={40}
								margin="0 7px"
								borderRadius={"50%"}
								bgcolor={"burlywood"}
								display={"flex"}
								alignItems={"center"}
								justifyContent={"center"}>
								<Typography fontWeight={600}>
									{msgData.senderName
										.slice(0, 2)
										.toUpperCase()}
								</Typography>
							</Box>
							<Box margin="0 7px">
								{/* <CardContent> */}
								<Typography sx={{ fontWeight: 600 }}>
									{msgData.senderName}
								</Typography>
								<Typography variant="subtitle1">
									{msgData.subject}
								</Typography>
								<Typography variant="caption">
									{msgData.content.slice(0, 35)}...
								</Typography>
								{/* </CardContent> */}
							</Box>
						</Box>

						<Box
							display={"flex"}
							flexDirection={"column"}
							height={"100%"}
							// width={30}
							justifyContent={"space-between"}
							alignItems={"center"}
							// backgroundColor="green"
							gap="5px"
							className="hideand">
							{/* <img width={15} src="images/attachment.png" alt="" /> */}
							<EmojiFlagsIcon />
							<AttachFileIcon />
							<DeleteOutlineIcon
								onClick={() =>
									dispatch(
										deletFromDisplayData(
											msgData.types,
											msgData.mId
										)
									)
								}
							/>
						</Box>
					</Card>
				) : (
					<h1>No msg </h1>
				)
				// {show && (
				// 	<div
				// 		style={{
				// 			position: "absolute",
				// 			top: points.x,
				// 			left: points.y,
				// 		}}>
				// 		<ul>
				// 			<li>A</li>
				// 			<li>B</li>
				// 			<li>C</li>
				// 		</ul>
				// 	</div>
				// )}
			}
		</>
	);
};

export default MsgElement;
