import { signInWithPopup } from "firebase/auth";
import "./styles/LoginPage.css";
import { auth, provider } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Google } from "@mui/icons-material";

const LoginPage = () => {
	const navigateTo = useNavigate();
	const handleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
				localStorage.setItem("email", res.user.email);
				localStorage.setItem("photoURL", res.user.photoURL);
				localStorage.setItem("isLoggedIn", true);
				console.log(res.user);
				navigateTo("/");
				// setSiggnedEmail(localStorage.getItem("email"));

				// setObj((res) => {
				// 	return {
				// 		...obj,
				// 		logginEmail: localStorage.getItem("email"),
				// 	};
				// });
				console.log("usercredential", res);
			})
			.catch((error) => console.log(error));
	};
	console.log("inside login");
	return (
		<div className="login">
			<div className="loginPage">
				<Button variant="contained" onClick={handleSignIn}>
					Login with Google <Google color="action" />
				</Button>
			</div>
			{/* Login using Google */}
		</div>
	);
};

export default LoginPage;
