import React from 'react';

const Boogle = ({ style }) => {
  return (
  <div>
      <div className="row"> 
      <div className="col-md-4"/>
      <div className="col-md-4 d-flex justify-content-center" >
            <div style={style}>
              <span style={{color:'#FF0000'}}>B</span>
              <span style={{color:'#66CC66'}}>o</span>
              <span style={{color:'#FF9966'}}>o</span>
              <span style={{color:'#FFCCCC'}}>g</span>
              <span style={{color:'#FF0066'}}>l</span>
              <span style={{color:'#4F87E1'}}>e</span>
            </div>
          </div>
         <div className="col-md-4" />
      </div>
  </div>
  );
};

export default Boogle;