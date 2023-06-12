import React, { useEffect, useRef } from "react";

const SearchBox = ({ value, onInputChange }) => {
  console.log(value);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    onInputChange(event.target.value);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-4" />
        <div className="col-md-4 mt-1">
          <input
            style={{ height: "40px" }}
            className="form-control me-2"
            type="text"
            value={value}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div className="col-md-4" />
      </div>
    </div>
  );
};

export default SearchBox;
