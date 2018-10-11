import { _getUsers } from "../_DATA";

// define actions
const GET_USERS = 'get_users';
const UPDATE_CHOSEN_USER = 'update_chosen_user';

// create actions
function getOptionalUsersAction(data) {
	return {
		type: GET_USERS,
		payload: data
	}
}

function updateChosenUserAction(data) {
	return {
		type: UPDATE_CHOSEN_USER,
		payload: data
	}
}

// do actions
export function doGetOptionalUsersAction() {
	return dispatch => {
		_getUsers().then(resp => {
			dispatch(getOptionalUsersAction({ optionalUsers: resp, chosenUser: Object.entries(resp)[0][1]}));
		}).catch(err => {
			console.log(err);
		});
	}
}

export function doUpdateChosenUser(data) {
	return dispatch => {
		dispatch(updateChosenUserAction(data));
	}
}

// reducer
const initState = {
	chosenUser: null,
	optionalUsers: null,
};
function user(state = initState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_USERS:
			return { ...state, optionalUsers: payload.optionalUsers};
		case UPDATE_CHOSEN_USER:
			return { ...state, chosenUser: payload };
		default:
			return state
	}
}

export default user;
