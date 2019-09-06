import React from 'react';
import './Alert.css';

const alert = props => {
  return (
    <div className="Alert">
      <div className="Alert__message">
        {props.children}
      </div>
      <div className="Alert__dismiss">
        DISMISS
      </div>
    </div>
  );
};

export default alert;