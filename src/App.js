import { Provider } from "react-redux";
import "./App.css";
import Todo from "./Todo";
import TodoItemShow from "./TodoItemShow";
import Home from "./components/Home";
import { store } from "./Redux/Store";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MsgDetails from "./components/MsgDetails";
import Header from "./components/Header";
import { useState } from "react";
import Protected from "./components/Protected";
import LoginPage from "./components/LoginPage";

function App() {
	// const [isLoggedIn, setIsLoggedIn] = useState(
	// 	localStorage.getItem("isLoggedIn" || false)
	// );
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Header />
				<Routes>
					<Route path="/" element={<Protected Component={Home} />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/msg" element={<MsgDetails />} />
				</Routes>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
