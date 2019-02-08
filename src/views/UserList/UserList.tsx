import * as React from "react";
import { User } from "./User";
import { connect } from 'react-redux';

import { Container, Row, Col } from "react-bootstrap";

const mapStateToProps = (state: any) => ({
  users: state
});

class Users extends React.Component<any, any> {
  showList(){
    return this.props.users.map((user, index) => {
      return (
        <User user={ user } user_index= { index } key={"user" + index} /> 
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

export const UserList = connect(mapStateToProps)(Users);