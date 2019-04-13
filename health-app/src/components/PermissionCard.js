import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class PermissionCard extends React.Component {
  render() {
    return (
      <div>
        <Card>{this.props.hello}</Card>
        <Card>{this.props.hello}</Card>
        <Card>{this.props.hello}</Card>
      </div>
    );
  }
}
export default PermissionCard;
