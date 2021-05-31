import React from "react";
import "./product.styles.scss";
import { withRouter } from "react-router-dom";

const ProductComponent = ({
  name,
  description,
  currency,
  price,
  imgUrl,
  history,
  match,
  id
}) => (
  <div className="product-container">
    <div className="product" onClick={() => history.push(`${match.url}product/${id}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{name.toUpperCase()}</h1>
      </div>
    </div>
    <div className="productDesc">
      <div className="desc">{description.toUpperCase()}</div>
      <div className="price">
        <strong>{price} {currency} </strong>
      </div>
    </div>
  </div>
);

export default withRouter(ProductComponent);
