export const selectTask = (select_user, task) =>{
	return{
		type: "TASK_SELECTED",
		payload: [select_user, task]
	}
}

export const loadUsers = () =>{
	return{
		type: "LOAD_USERS"
	}
}

export const loadUsersSuccess = (users) =>{
	return{
		type: "LOAD_USERS_SUCCESS",
		payload: users
	}
}