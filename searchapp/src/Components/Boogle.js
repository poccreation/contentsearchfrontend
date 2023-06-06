import React from 'react';

const Boogle = ({ text, style }) => {
  return (
  <div>
      <div className="row"> 
      <div className="col-md-4"/>
      <div className="col-md-4 d-flex justify-content-center" >
        <span style={style}>{text}</span>
      </div>
      <div className="col-md-4" />
      </div>
  </div>
  );
};

export default Boogle;