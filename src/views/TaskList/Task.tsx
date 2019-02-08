import * as React from "react";
import { Form } from "react-bootstrap";
import { selectTask } from "../../store/Actions";
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

interface ItemTask {
	title: string,
	description: string,
	score: number,
	selected?: boolean
}

const SelectedPanel = styled.div`
	background: rgba(40, 182, 44, 0.08);
`

const NotSelectedPanel: React.SFC<any> = props => <div className={props.className}>{props.children}</div>

const mapDispatchToProps = (dispatch: Dispatch<any>) => 
  bindActionCreators({ selectTask: selectTask }, dispatch);

const mapStateToProps = (state: any) => ({
  task: state.selected
});

export class OneTask extends React.Component<any, any> {
	render(){
		const task:ItemTask = this.props.task
		const Panel = task.selected ? SelectedPanel : NotSelectedPanel;
		return (
			<Panel className="card-body">
		    <h4 className="card-title">
		    	<input type="checkbox" defaultChecked={task.selected} onChange={() => this.props.selectTask(this.props.user_index, this.props.task_index)}/> {task.title} </h4>
		    <p className="card-text">Score: {task.score}</p>
		    <p className="card-text">{task.description}</p>
			</Panel>
		);
	}
};

export const Task = OneTask;