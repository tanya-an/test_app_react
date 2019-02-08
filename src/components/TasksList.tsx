import * as React from "react";
import { Task } from "./Task";
import { connect } from 'react-redux';
import { select } from "../redux/action";

const mapStateToProps = (state: any) => ({
  users: state
});

const dispatchToProps = (dispatch) => ({
  selectTask: (user_index, task) => dispatch(select(user_index, task))
});

function sum(arr) {
  return arr.reduce(function(prev, next) {
    return prev + next;
  });
}

function averageShow(tasks) {
	var score = tasks.map((task, index) =>
		task.selected == true ? sum([task.score]) : null
	)
	var sumSelectedTask = sum(score)
	if (sumSelectedTask != 0) {
		return (
			<div>
				<hr />
				<div className="card-body">
					<h4>Average of Selected Tasks: {sumSelectedTask}</h4>
				</div>
			</div>
		);
	}
}

const Component: React.SFC<any> = props => {
  var average = averageShow(props.tasks);
  var ItemTask = props.tasks.map((task, index) => {
		return <Task task={ task } user_index={props.user_index} selectTask={props.selectTask} task_index={index} key={"task" + index} />;
	});
	return (
		<div>
			{ItemTask}
			{average}
		</div>
	);
};

export const TasksList = connect(mapStateToProps, dispatchToProps)(Component);