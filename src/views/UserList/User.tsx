import * as React from "react";
import { TaskList } from "../TaskList/TaskList";
import { IconGreat } from "../IconGreat"
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

function showIcon(age, average_score) {
	if ((age < 30 && average_score >= 4) || (age >= 30 && average_score >= 4.33)) {
		return true 
	} else {
		return false
	}
}

const Component: React.SFC<any> = props => {
 	const user:AllUsers = props.user;
	const score = user.tasks.reduce((total, task) => total + task.score, 0);
	const average_score = score / user.tasks.length ;
	const icon = showIcon(user.age, average_score);
  return (  	 
  	<Card className='border-secondary mb-3'>
      <div className='card-header'>
      	<h3>{user.first_name} {user.last_name} (Age - {user.age}) <IconGreat showButton={icon} /></h3>
      </div>
      <TaskList tasks={user.tasks} user_index = {props.user_index}/>
    </Card>
  );
};

export const User = Component;