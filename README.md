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

Below are screenshots of working application(including device specific).

<img width="1680" alt="Screenshot 2021-05-31 at 17 17 06" src="https://user-images.githubusercontent.com/17451634/120228892-5556ff80-c24c-11eb-8af7-69cee39cd8c2.png">
<img width="591" alt="Screenshot 2021-05-31 at 17 17 25" src="https://user-images.githubusercontent.com/17451634/120228899-5a1bb380-c24c-11eb-9234-229940ae9626.png">
<img width="690" alt="Screenshot 2021-05-31 at 17 18 04" src="https://user-images.githubusercontent.com/17451634/120228901-5ab44a00-c24c-11eb-9f2e-61c9dd254075.png">
<img width="547" alt="Screenshot 2021-05-31 at 17 18 42" src="https://user-images.githubusercontent.com/17451634/120228903-5ab44a00-c24c-11eb-8eb4-39d71a59c1f3.png">
<img width="1183" alt="Screenshot 2021-05-31 at 17 19 19" src="https://user-images.githubusercontent.com/17451634/120228904-5b4ce080-c24c-11eb-92ed-744b0c4bb0e3.png">
<img width="806" alt="Screenshot 2021-05-31 at 17 23 05" src="https://user-images.githubusercontent.com/17451634/120228907-5c7e0d80-c24c-11eb-8402-6291af517660.png">
<img width="1672" alt="Screenshot 2021-05-31 at 20 13 53" src="https://user-images.githubusercontent.com/17451634/120229135-cbf3fd00-c24c-11eb-8761-c697ec8ef62a.png">
<img width="751" alt="Screenshot 2021-05-31 at 17 50 16" src="https://user-images.githubusercontent.com/17451634/120228910-5d16a400-c24c-11eb-9e0a-6b6fd767a2f8.png">
<img width="776" alt="Screenshot 2021-05-31 at 17 51 51" src="https://user-images.githubusercontent.com/17451634/120228912-5d16a400-c24c-11eb-8faf-b6b94b7ff69a.png">

