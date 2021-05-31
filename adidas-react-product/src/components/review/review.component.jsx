import React from "react";
const ReviewComponent = ({ id, reviews }) => {
  return (
    <div
      style={{
        margin: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {reviews.map((item, index) => (
        <div key={id + `_` + index} style={{ padding: "10px" }}>
          <h2>Review # {index + 1}</h2>
          <div> {item.text} </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewComponent;
