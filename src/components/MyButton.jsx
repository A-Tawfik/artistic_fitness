import React from 'react';
import { Col, Button } from 'react-bootstrap';

export default class MyButton extends React.Component {
constructor(){
  super()
  this.state = {
    isLoading: true
  }
}
  clickHandler(){
    this.props.changeVideo(this.props.button.video)
  }

  render(){
    let isLoading = this.state.isLoading;
    return(
      <Button
        bsStyle="default"
        bsClass = "cols-sm-12 col-xs-12 demo-button"
        disabled={!isLoading}
        onClick={isLoading ? this.clickHandler.bind(this) : null}
        block>
        {!isLoading ? 'Loading...' :
        <span>
          <Col xsHidden md={4} bsClass="left-gif col"></Col>
          <Col xs={12} md={4} bsClass="button-title col">{this.props.button.title}</Col>
          <Col xsHidden md={4} bsClass="right-gif col"></Col>
        </span>}
      </Button>
    )
  }
}

const styles = {
  videos: {
    display: "none"
  }
}
