import React from 'react';
import '../style.css';

const Alert = ({ message }) => {
  return (
  <div>
      <div className="row"> 
      <div className="col-md-4"/>
      <div className="col-md-4 " >
            <div  class="customAlert alert-danger width700 d-flex justify-content-center" role="alert">{message}</div>
      </div>
      <div className="col-md-4" />
      </div>
  </div>
  );
};

export default Alert;