import * as React from "react";
import { Form } from "react-bootstrap";
import { select } from "../redux/action";
import { bindActionCreators, Dispatch } from 'redux';

interface ItemTask {
	title: string,
	description: string,
	score: number
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => 
  bindActionCreators({ select: select }, dispatch);

const mapStateToProps = (state: any) => ({
  task: state.selected
});

export class OneTask extends React.Component<any, any> {
	render(){
		var task:ItemTask = this.props.task
		return (
			<div className="card-body">
		    <h4 className="card-title">
		    	<input type="checkbox" onClick={() => this.props.selectTask(this.props.user_index, this.props.task_index)}/> {task.title} </h4>
		    <p className="card-text">Score: {task.score}</p>
		    <p className="card-text">{task.description}</p>
			</div>
		);
	}
};

export const Task = OneTask;