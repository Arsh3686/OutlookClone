import { combineReducers } from "redux";
const prepopulatedData = {
	inbox: [
		{
			mId: "guid-1",
			types: "inbox",
			unread: true,
			senderName: "inbox: Aditya ||  1",
			profile: "",
			subject: "Pre Approved Loan",
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
		},
		{
			mId: "guid-2",
			types: "inbox",
			unread: true,
			senderName: "inbox: Aditya ||  2",
			profile: "",
			subject: "You won a lottery!",
			content:
				"You have just won the New York official lottery. Please send us your",
		},
	],
	sent: [
		{
			mId: "guid-3",
			types: "sent",
			unread: true,
			senderName: "sent:Aditya || ",
			profile: "",
			subject: "Pre Approved Loan",
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
		},
		{
			mId: "guid-4",
			types: "sent",
			unread: true,
			senderName: "sent:Aditya || ",
			profile: "",
			subject: "You won a lottery!",
			content:
				"You have just won the New York official lottery. Please send us your",
		},
	],
	trash: [
		{
			mId: "guid-5",
			types: "trash",
			unread: true,
			senderName: "trash:Aditya || ",
			profile: "",
			subject: "Pre Approved Loan",
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
		},
		{
			mId: "guid-6",
			types: "trash",
			unread: true,
			senderName: "trash:Aditya || ",
			profile: "",
			subject: "You won a lottery!",
			content:
				"You have just won the New York official lottery. Please send us your",
		},
	],
	spam: [
		{
			mId: "guid-7",
			types: "spam",
			unread: true,
			senderName: "spam:Aditya || ",
			profile: "",
			subject: "Pre Approved Loan",
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
		},
		{
			mId: "guid-8",
			types: "spam",
			unread: true,
			senderName: "spam:Aditya || ",
			profile: "",
			subject: "You won a lottery!",
			content:
				"You have just won the New York official lottery. Please send us your",
		},
	],
};
const displayData = [...prepopulatedData.inbox];

const displayMsg = displayData[0];
const initialData = {
	allData: prepopulatedData,
	displayData: displayData,
	displayMsg: displayMsg,
	selectData: "inbox",
};

const reducer = (state = initialData, action) => {
	switch (action.type) {
		case "GET_DATA": {
			return state;
		}
		case "DISPLAY_DATA": {
			return {
				...state,
				displayData: [...state.allData[action.payload]],
				selectData: action.payload,
			};
		}
		case "DISPLAY_MSG": {
			return {
				...state,
				displayMsg: state.displayData.find(
					(e) => e.mId === action.payload
				),
			};
		}
		case "SEND_EMAIL": {
			let emailData = {
				mId: new Date().getMilliseconds(),
				...action.payload,
			};

			return {
				...state,
				allData: {
					...state.allData,
					sent: [...state.allData.sent, emailData],
				},
				displayData: [...state.allData["sent"], emailData],
			};
		}
		case "DEL_FROM_DISPLAY_DATA": {
			const { types, id } = action.payload;
			const newInbox = [
				...state.allData[types].filter((e) => e.mId !== id),
			];
			const trashMsg = state.allData[types].find((e) => e.mId !== id);
			const newDisplayData = [...state.allData[types]];
			console.log("newInbox", action.payload, newInbox);
			// return state;
			return {
				...state,
				allData: {
					...state.allData,
					[types]: newInbox,
					// trash: types === "inbox" && [
					// 	...state.allData.trash,
					// 	trashMsg,
					// ],
					// : [...state.allData.trash],
				},
				displayData: newInbox,
				displayMsg: {
					mId: "",
					unread: true,
					senderName: "",
					profile: "",
					subject: "",
					content: "",
				},
			};
		}
		default:
			return state;
	}
};
export default reducer;
export const allReducers = combineReducers({ reducer });
