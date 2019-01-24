import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  border-radius: 20px;
  align-self: center;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  color: black;
  background-image: linear-gradient(to top, #ff5500, #ff0);
  box-shadow: yellow;
  border: 1px solid transparent;
  :hover {
    cursor: pointer;
    border: 1px solid yellow;
  }
`;

export default class Result extends Component {
  handleClick = e => {
    const { addOne, applyMessage, clearInput } = this.props;
    applyMessage();
    addOne();
    clearInput();
  };

  render() {
    return <Button onClick={this.handleClick}>Go</Button>;
  }
}
