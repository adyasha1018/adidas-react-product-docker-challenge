# adidas-react-product-docker-challenge/adidas-react-product

TechStack Used:

React,
React-router-dom,
Redux,
Redux-saga,
SASS,
HTML5,
enzyme

Architectural Flow:

Index contains store and routing and mount App component.
AppComponent contains HomepageComponet which has Adidas Logo and ProductList.
Products will be displayed along with name,description and price as provided by data.
Styles are used on hover and background,image.
On click  of each product ProductDetails and Reviews  will be shown.
On ProductDetails page AddReview option is there to add review to particular product.

Index-->App-->HomePage-->ProductDetail-->ReviewList-->(AddReview & Review);
Homepage--> ProductList-->Product

Reducers/Saga Used:

Product.js:
* Get all products
* Get Single product by id

Review.js:
* Get all reviews by product id
* Post review

Responsiveness and browser compatibility(Chrome and safari) has been taken care of.
Api failure has been checked in sagas.
Basic type test cases added.

IMPORTANT  NOTE:

Using both frontend and backend url from localhost gives CORS error. As the backend was dockerized and it is not a good practice
to set headers explicitly or use via Proxy server I have commented those lines where as same data is used for application.
