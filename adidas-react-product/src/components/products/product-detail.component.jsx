import React from "react";
import {connect} from 'react-redux';
import {GET_PRODUCT_DETAILS} from "../../actions/index";
import "./product.styles.scss";

class ProductDetailComponent extends React.Component {
  constructor() {
    super();

    this.state={
      products:[
        {
            currency: "$",
            price: 11,
            id: "HI333",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/c7099422ccc14e44b406abec00ba6c96_9366/NMD_R1_V2_Shoes_Black_FY6862_01_standard.jpg"
          },
          {
            currency: "$",
            price: 34,
            id: "HI334",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/c93fa315d2f64775ac1fab96016f09d1_9366/Dame_6_Shoes_Black_FV8624_01_standard.jpg"
          },
          {
            currency: "$",
            price: 42,
            id: "HI336",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/3eebc0498b1347e397f8ab94016140ba_9366/FS1496_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 43,
            id: "HI337",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/f7b3df22026b42b8b539a9d300adb52b_9366/DZ9416_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 38,
            id: "HI338",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/c089e9b31e01406bbee5abc9009a421e_9366/FV9996_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 80,
            id: "HI339",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/da278c9c5e244068b32cac4d0125fedd_9366/FY2002_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 76,
            id: "HI340",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/3e13d15c862749708801ac4d01257e1c_9366/FY0072_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 71,
            id: "HI341",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/dd6788b5e79742c3bfbaac4e00f57272_9366/FY9386_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 15,
            id: "HI342",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/807d251c686648de85f2abb10042fdf9_9366/GC7240_01_laydown.jpg"
          },
          {
            currency: "$",
            price: 86,
            id: "HI343",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/64a622f71145430cad1fabaa00590751_9366/GI7430_01_laydown.jpg"
          },
          {
            currency: "$",
            price: 96,
            id: "HI344",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/bae82f2b58e7466aba6daba30141b1d4_9366/GD8454_01_laydown.jpg"
          },
          {
            currency: "$",
            price: 43,
            id: "HI345",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/12b53067c3f44d3f90f3ac4d0139f637_9366/GZ2751_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 45,
            id: "HI346",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/c4ea90c85fce47db8e33ab8e00fcff20_9366/GD2372_01_laydown.jpg"
          },
          {
            currency: "$",
            price: 37,
            id: "HI347",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/0fcb1719675b4df0a160ab1a0104630b_9366/GD3509_01_laydown.jpg"
          },
          {
            currency: "$",
            price: 21,
            id: "HI348",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/22f397edbd074cb180f4ab5000c7aebf_9366/GD2328_01_laydown.jpg"
          },
          {
            currency: "$",
            price: 55,
            id: "HI349",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/81b52cbaa4b3426b88fbabc20094e778_9366/GD4557_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 22,
            id: "HI350",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/09011a8bf86941bfaaa5ac4d01258fef_9366/FY0075_00_plp_standard.jpg"
          },
          {
            currency: "$",
            price: 71,
            id: "HI351",
            name: "product",
            description: "description",
            imgUrl: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/b8c9ddc4ada74d9fb819ac450127c685_9366/FY0965_00_plp_standard.jpg"
          }
     ]
    }
  }
  getDetailedProduct(id) {
    return this.state.products.filter((item) => {
      return item.id === id ? item : null;
    })[0];
  }
  render() {
    const detailedProd = this.getDetailedProduct(this.props.match.params.id);
    // Below line will be used if backend is not running on localhost
    // const detailedProd = this.props.getDetailedProduct(this.props.match.params.id);
    return (
      <div className="product-detail">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${detailedProd.imgUrl})` }}
        ></div>

        <div className="detail-desc">
          <div style={{fontSize: "48px"}}>{detailedProd.name.toUpperCase()}</div>
          <div style={{fontSize: "28px"}}>
            <strong>
              {detailedProd.price} {detailedProd.currency}
            </strong>
          </div>
          <div style={{fontSize: "36px"}}>{detailedProd.description}</div>
        </div>
      </div>
    );
  }
}
const mapStateTopProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailedProduct: (id) => {
      dispatch({type: GET_PRODUCT_DETAILS, value: id})
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(ProductDetailComponent);
