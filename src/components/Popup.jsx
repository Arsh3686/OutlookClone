import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	FormGroup,
	FormLabel,
	Input,
	InputLabel,
	TextField,
	TextareaAutosize,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import "./styles/Popup.css";
import { Send } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendEmail } from "../Redux/Actions";

const Popup = () => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const [emailData, setEmailData] = useState({
		senderName: "",
		subject: "",
		content: "",
	});
	const handleClose = () => {
		if (
			emailData.content !== "" &&
			emailData.subject !== "" &&
			emailData.content !== ""
		) {
			setOpen(false);
			dispatch(sendEmail(emailData));
		}
	};
	return (
		<>
			<Button className="popup" onClick={() => setOpen(true)}>
				Add
			</Button>
			<Dialog open={open} onClose={() => setOpen(!open)}>
				<DialogTitle>New Message</DialogTitle>
				<DialogContent>
					{/* <DialogContentText>
						Send Message using Email address
					</DialogContentText> */}
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
						onChange={(e) =>
							setEmailData({
								...emailData,
								senderName: e.target.value,
							})
						}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Subject"
						type="email"
						fullWidth
						variant="standard"
						onChange={(e) =>
							setEmailData({
								...emailData,
								subject: e.target.value,
							})
						}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						multiline
						label="Body"
						type="text"
						fullWidth
						variant="outlined"
						onChange={(e) =>
							setEmailData({
								...emailData,
								content: e.target.value,
							})
						}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}>Cancel</Button>
					<Button
						variant="contained"
						endIcon={<SendIcon />}
						onClick={handleClose}>
						Send
					</Button>
				</DialogActions>
			</Dialog>
		</>
		// <form className="popup">
		// 	<FormGroup>
		// 		<FormLabel>New Message</FormLabel>
		// 		<FormControl>
		// 			{/* <InputLabel>Subject</InputLabel> */}
		// 			<Input placeholder="Enter Email" />
		// 		</FormControl>
		// 		<FormControl>
		// 			<Input placeholder="Enter subject" />
		// 		</FormControl>
		// 		<textarea className="txtArea" placeholder="Body"></textarea>
		// 	</FormGroup>
		// 	<footer>
		// 		Send <Send />
		// 	</footer>
		// </form>
	);
};

export default Popup;
