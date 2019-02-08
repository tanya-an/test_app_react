import * as React from "react";
import { Badge, Col } from 'react-bootstrap';

const Component: React.SFC<any> = props => {
    const icon = props.showButton ? <Badge pill variant="success">Great!</Badge> : null;
    return icon;
};

export const IconGreat = Component;