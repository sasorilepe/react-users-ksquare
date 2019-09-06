import React from 'react';
import './Input.css';

const input = props => {
  return (
    <div className="Input">
      <div className="Input__label">
        <label>{props.label}</label>
      </div>
      <input name={props.name} className="Input__input" placeholder={props.placeholder} type="text" />
    </div>
  );
};

export default input;