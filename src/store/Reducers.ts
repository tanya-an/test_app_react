const defaultState = [];

export const UsersReducer = (state=defaultState, action) => {
	switch (action.type){
		case "TASK_SELECTED":
		 	const newState = [...state];
		 	const user_index = action.payload[0];
		 	const task_index = action.payload[1];
		 	newState[user_index].tasks[task_index].selected = !newState[user_index].tasks[task_index].selected;
			return newState;
			break;
		case "USER_LOADED":
			return action.payload;
			break;
		case "LOAD_USERS_SUCCESS":
			return action.payload;
			break;			
		default:
			return state;
	}
}