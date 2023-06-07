import React from 'react';
import ClockLoader from "react-spinners/ClockLoader";

const Spinner = ({ loading }) => {
  const override = `
   display: block;
   margin: 0 auto;
   margin-top: 20vh;
   `;
  return (
   <div data-testid="spinner" className="spinner-div">
    <ClockLoader
     css={override}
     size={80}
     color={"#123abc"}
     loading={loading}
    />
   </div>
  );
 }

export default Spinner;
