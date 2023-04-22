import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem("isLoggedIn")
	);
	const { Component } = props;
	const navigateTo = useNavigate();
	// let loginCheck = localStorage.getItem("isLoggedIn");
	useEffect(() => {
		console.log("logic", isLoggedIn);
		if (!isLoggedIn) {
			navigateTo("/login");
		} else {
			navigateTo("/");
		}
	}, []);
	return (
		<div>
			{/* {!isLoggedIn ? (
				<Skeleton
					animation="wave"
					variant="circular"
					width={"100vh"}
					height={400}
				/>
			) : (
				<Component />
			)} */}
			<Component />
		</div>
	);
};

export default Protected;
