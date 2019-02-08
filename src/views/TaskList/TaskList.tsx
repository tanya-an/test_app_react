import * as React from "react";
import { Task } from "./Task";
import { connect } from 'react-redux';
import { selectTask } from "../../store/Actions";

const mapStateToProps = (state: any) => ({
  users: state
});

const dispatchToProps = (dispatch) => ({
  selectTask: (user_index, task) => dispatch(selectTask(user_index, task))
});

function averageShow(tasks) {
	const selected_count = tasks.filter(task => task.selected).length
	const score = tasks.reduce((total, task) => task.selected == true ? total + task.score : total, 0);
	if (score != 0) {
		return (
			<div>
				<hr />
				<div className="card-body">
					<h4>Average of Selected Tasks: {(score / selected_count).toFixed(2)}</h4>
				</div>
			</div>
		);
	}
}

const Component: React.SFC<any> = props => {
  const average = averageShow(props.tasks);
  const ItemTask = props.tasks.map((task, index) => {
		return <Task task={ task } user_index={props.user_index} selectTask={props.selectTask} task_index={index} key={"task" + index} />;
	});
	return (
		<div>
			{ItemTask}
			{average}
		</div>
	);
};

export const TaskList = connect(mapStateToProps, dispatchToProps)(Component);