import React, { useState, useCallback } from "react";
import "./review.styles.scss";

const AddReviewComponent = (props) => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [review, setReview] = useState("");
  const addReview = useCallback(
    () =>
      props.handleAddUser({
        productId: `${props.id}`,
        locale: "en-US,en;q=0.9",
        rating: 4,
        text: `${review}`,
      }),
    [review]
  );

  return (
    <div className="review-container">
      {showTextArea ? (
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <input
            className="enter-review"
            placeholder="Enter Review Here"
            onChange={(e) => setReview(e.target.value)}
          ></input>
          <button
            className="add-review-btn"
            style={{ margin: "10px" }}
            onClick={addReview}
            disabled
          >
            Add
          </button>
          <button
            className="cancel-review-btn"
            onClick={() => {
              setShowTextArea(false);
              setReview("");
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="add-review-btn"
          onClick={() => setShowTextArea(true)}
        >
          Add Review
        </button>
      )}
    </div>
  );
};

export default AddReviewComponent;
