import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/homepage.component";
import ProductDetailComponent  from  "./components/products/product-detail.component";
import ReviewListComponent from "./components/review/review-list.component";
 
const ProductDetailsComponent = (props) => (
  <div>
    <ProductDetailComponent {...props}/>
    <ReviewListComponent reviewId={props.match.params.id}/>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/product/:id" component={ProductDetailsComponent}></Route>
      </Switch>
    </div>
  );
}

export default App;
