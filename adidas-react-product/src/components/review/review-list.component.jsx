import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { GET_PRODUCT_REVIEWS , POST_PRODUCT_REVIEW} from "../../actions";
import ReviewComponent from "./review.component";
import AddReviewComponent from "./add-review.component";
const ReviewListComponent = (props) => {
  let reviewList = [
    {
      productId: `${props.reviewId}`,
      locale: "en-US,en;q=0.9",
      rating: 4,
      text: `This is first review for ${props.reviewId}`,
    },
    {
      productId: `${props.reviewId}`,
      locale: "en-US,en;q=0.9",
      rating: 4,
      text: `This is second review for ${props.reviewId}`,
    },
  ];
  const [reviews, setReviews] = useState(reviewList);
  /* Below line will be used if backend is not running on localhost*/
  // useEffect(() => {
  // props.getProductReviews(props.reviewId);
  // });
  const handleAddUser = (review) => {
    reviewList.push(review);
    setReviews(reviewList);
    //Below line will be used if backend is not running on localhost
    // props.addReview(review);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AddReviewComponent id={props.reviewId} handleAddUser={handleAddUser} />
      <ReviewComponent id={props.reviewId} reviews={reviews} />

      {/* Below line will be used if backend is not running on localhost
      <ReviewComponent id={props.reviewId} reviews={props.reviews} />
       */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProductReviews: (id) => {
      dispatch({ type: GET_PRODUCT_REVIEWS, value: id });
    },
    addReview:(review)=>{
      dispatch({type:POST_PRODUCT_REVIEW, value: review})
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewListComponent);
