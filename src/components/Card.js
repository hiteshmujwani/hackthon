import React from "react";

export const Card = (props) => {
  return (
    <div>
      <img src={props.url} alt={props.url} />
    </div>
  );
};
