import "./ProductScreen.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartAction } from "../redux/actions/cartAction";
import { getProductDetails as getProductDetailsAction } from "../redux/actions/productAction";

function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  // We load the product by it's ID
  // But we only make a request if the product inside the store different from the ID we get from url
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetailsAction(match.params.id));
    }
  }, [dispatch, product, match.params.id]);

  const addToCartHandler = () => {
    dispatch(addToCartAction(product._id, qty));
    history.push("/cart");
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loadng...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p> Description: {product.description} </p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>$500</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0
                    ? `${product.countInStock} In stock`
                    : "Ou of stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((el) => {
                    return (
                      <option key={el + 1} value={el + 1}>
                        {el + 1}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
