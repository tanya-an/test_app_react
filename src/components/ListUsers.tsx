import * as React from "react";
import { ItemUser } from "./ItemUser";
import { connect } from 'react-redux';

import { Container, Row, Col } from "react-bootstrap";

const mapStateToProps = (state: any) => ({
  users: state
});

export class ListUsers extends React.Component<any, any> {
  showList(){
    return this.props.users.map((user, index) => {
      return (
        <ItemUser user={ user } user_index= { index } key={"user" + index} /> 
       );
    });
  }
  
  render() {
    return (
    	<Container>
        {this.showList() }
      </Container>
    )
 	}
}

export const Users = connect(mapStateToProps)(ListUsers);