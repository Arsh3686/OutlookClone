// import React, { useEffect, useState } from "react";
// import { db } from "./firebase";
// import {
// 	collection,
// 	addDoc,
// 	updateDoc,
// 	doc,
// 	onSnapshot,
// 	query,
// 	deleteDoc,
// } from "firebase/firestore";
// import { makeStyles } from "@mui/styles";
// import {
// 	Button,
// 	ButtonGroup,
// 	FormControl,
// 	FormGroup,
// 	Input,
// 	InputLabel,
// 	Typography,
// } from "@mui/material";
// const useStyle = makeStyles({
// 	formStyle: {
// 		width: "50%",
// 		margin: "auto",
// 		border: "1px solid grey",
// 		padding: 30,
// 		marginBottom: 20,
// 		borderRadius: 10,
// 	},
// 	TodoStyle: {
// 		width: "50%",
// 		margin: "auto",
// 		border: "1px solid grey",
// 		display: "flex",
// 		justifyContent: "space-evenly",
// 		alignItems: "center",

// 		padding: "20px 30px",
// 	},
// 	btn: {
// 		width: 30,
// 		marginTop: 60,
// 	},
// });
// const Todo = () => {
// 	const classes = useStyle();
// 	const [todos, setTodos] = useState([]);
// 	const [todoItems, setTodoItems] = useState({
// 		todoItemss: "",
// 		completed: false,
// 	});
// 	const [isEdit, setIsEdit] = useState(false);
// 	const handleUpdate = async (e) => {
// 		e.preventDefault();

// 		console.log("todoItems", todoItems);
// 		const docRef = doc(db, "todos", todoItems.id);
// 		await updateDoc(docRef, {
// 			todoItems: todoItems.todoItemss,
// 		});
// 		setTodoItems({
// 			todoItemss: "",
// 			completed: false,
// 		});
// 		console.log(todoItems);
// 		console.log(docRef);
// 	};
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (todoItems !== "") {
// 			addDoc(collection(db, "todos"), {
// 				todoItems: todoItems.todoItemss,
// 				completed: todoItems.completed,
// 			})
// 				.then(() => {
// 					setTodoItems({
// 						todoItemss: "",
// 						completed: false,
// 					});
// 				})
// 				.catch((err) => {
// 					console.error(err);
// 				});
// 		}
// 	};
// 	const handleDelete = async (e) => {
// 		// e.preventDefault();
// 		console.log(e);
// 		const docRef = await doc(db, "todos", e);
// 		try {
// 			await deleteDoc(docRef);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};
// 	useEffect(() => {
// 		const q = query(collection(db, "todos"));
// 		// console.log("q", q);
// 		const data = onSnapshot(q, (itemSnapshot) => {
// 			let todosArray = [];
// 			itemSnapshot.forEach((doc) => {
// 				todosArray.push({ ...doc.data(), id: doc.id });
// 			});
// 			setTodos(todosArray);
// 		});
// 		return () => data();
// 	}, []);
// 	return (
// 		<div
// 			style={{
// 				marginTop: 50,
// 			}}>
// 			<form onSubmit={isEdit === true ? handleUpdate : handleSubmit}>
// 				<FormGroup className={classes.formStyle}>
// 					<FormControl className={classes.input}>
// 						<InputLabel>Enter your Todo</InputLabel>
// 						<Input
// 							type="text"
// 							value={todoItems.todoItemss}
// 							placeholder="what do you want to do?"
// 							onChange={(e) =>
// 								setTodoItems({
// 									...todoItems,
// 									todoItemss: e.target.value,
// 								})
// 							}
// 						/>
// 					</FormControl>
// 					{isEdit === false ? (
// 						<Button
// 							className={classes.btn}
// 							variant="contained"
// 							type="submit">
// 							Add-Todo
// 						</Button>
// 					) : (
// 						<Button
// 							className={classes.btn}
// 							variant="contained"
// 							type="submit">
// 							Edit
// 						</Button>
// 					)}
// 				</FormGroup>
// 			</form>
// 			{/* <hr /> */}
// 			<div
// 				style={{
// 					display: "flex",
// 					flexDirection: "column",
// 				}}>
// 				{todos.map((e) => {
// 					return (
// 						<ButtonGroup key={e.id} className={classes.TodoStyle}>
// 							<Typography width="200px">{e.todoItems}</Typography>
// 							<Button
// 								variant="contained"
// 								size="sm"
// 								onClick={() => {
// 									setTodoItems({
// 										...todoItems,
// 										id: e.id,
// 										todoItemss: e.todoItems,
// 									});
// 									setIsEdit(true);
// 								}}>
// 								Edit
// 							</Button>
// 							<Button
// 								variant="outlined"
// 								size="sm"
// 								onClick={() => handleDelete(e.id)}>
// 								Delete
// 							</Button>
// 						</ButtonGroup>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default Todo;
