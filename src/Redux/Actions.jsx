export const getData = () => {
	return {
		type: "GET_DATA",
	};
};
export const deleteData = (id) => {
	return {
		type: "DEL_DATA",
		payload: id,
	};
};
export const deletFromDisplayData = (types, id) => {
	return {
		type: "DEL_FROM_DISPLAY_DATA",
		payload: {
			id,
			types,
		},
	};
};
export const setDisplayData = (type) => {
	return {
		type: "DISPLAY_DATA",
		payload: type,
	};
};
export const setDisplayMsg = (id) => {
	return {
		type: "DISPLAY_MSG",
		payload: id,
	};
};
export const sendEmail = (emailData) => {
	console.log("Action in sendEmail");
	return {
		type: "SEND_EMAIL",
		payload: emailData,
	};
};
