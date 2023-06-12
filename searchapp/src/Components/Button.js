import React from "react";

const Button = ({ caption, onClick }) => {
  return (
    <button
      class="btn btn-primary"
      style={{ marginLeft: "336px" }}
      onClick={onClick}
    >
      {caption}
    </button>
  );
};

export default Button;
