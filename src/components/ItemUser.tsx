import * as React from "react";
import { TasksList } from "./TasksList";
import { IconGreat } from "./IconGreat"
import { connect } from 'react-redux';

import { Jumbotron, Card, NavItem, Nav, Row, Col } from "react-bootstrap";

interface AllUsers {
	first_name: string,
	last_name: string,
	age: number,
	tasks: ItemTask[]
}

interface ItemTask {
	title: string,
	description: string,
	score: number
}

function sum(arr) {
  return arr.reduce(function(prev, next) {
    return prev + next;
  });
}

function showIcon(age, average_score) {
	if ((age < 30 && average_score >= 4) || (age >= 30 && average_score >= 4.33)) {
		return true 
	} else {
		return false
	}
}

const mapStateToProps = (state: any) => ({
  task: state.selected
});

const Component: React.SFC<any> = props => {
 	var user:AllUsers = props.user;
	var score = user.tasks.map((task, index) =>
		task.score
	)
	var icon = showIcon(user.age, sum(score)/(score.length));
  return (  	 
  	<Card className='border-secondary mb-3'>
      <div className='card-header'>
      	<h3>{user.first_name} {user.last_name} (Age - {user.age}) <IconGreat showButton={icon} /></h3>
      </div>
      <TasksList tasks={user.tasks} user_index = {props.user_index}/>
    </Card>
  );
};

export const ItemUser = Component;