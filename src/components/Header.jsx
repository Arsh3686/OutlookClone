import { Link, useNavigate } from "react-router-dom";
import "./styles/Header.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase";
import { useState } from "react";
import { Button } from "@mui/material";

const Header = () => {
	const navigate = useNavigate();
	const [image, setImage] = useState(
		localStorage.getItem("photoURL") || null
	);
	const handleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
				localStorage.setItem("email", res.user.email);
				localStorage.setItem("photoURL", res.user.photoURL);
				localStorage.setItem("isLoggedIn", true);
				console.log(res.user);
				// setSiggnedEmail(localStorage.getItem("email"));

				// setObj((res) => {
				// 	return {
				// 		...obj,
				// 		logginEmail: localStorage.getItem("email"),
				// 	};
				// });
				navigate("/");
				console.log("usercredential", res);
			})
			.catch((error) => console.log(error));
	};
	const handleDelete = () => {
		localStorage.clear();
		navigate("/login");
	};
	return (
		<div className="header">
			<Link to={"/"} className="logo">
				<img
					width={25}
					src="images/menu-dots.png"
					alt="outlook clone logo"
				/>
				<p>Outlook</p>
			</Link>
			<div className="search">
				<div className="searchElement">
					<img width={15} src="images/search.png" alt="" />
					<input type="text" placeholder=" Search " />
				</div>
			</div>
			<div className="avatar">
				{image !== null ? (
					<div className="logoutaftersignin">
						<LogoutIcon
							onClick={handleDelete}
							sx={{ cursor: "pointer" }}
						/>
						<img
							// onClick={handleSignIn}
							width={35}
							src={image}
							alt=""
						/>
					</div>
				) : (
					<Button onClick={handleSignIn}>Login</Button>
				)}
			</div>
		</div>
	);
};

export default Header;
