import React from 'react';
import './User.css';

const user = props => {
  return (
    <div className="User">
      <div className="User__name">
        {props.name} {props.lastname}
      </div>
      <div className="User__actions">
        <div className="User__actions__edit">
          EDIT
        </div>
        <div className="User__actions__remove">
          REMOVE
        </div>
      </div>
    </div>
  );
};

export default user;