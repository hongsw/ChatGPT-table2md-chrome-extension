import React from 'react';
import { StButton } from './MyButton.style';

const MyButton = (props) => {
  return (
    <StButton className="custom-button" onClick={props.onClick}>
      {props.text}
    </StButton>
  );
};

export default MyButton;
