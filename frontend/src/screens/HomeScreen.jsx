import "./HomeScreen.css";
import React, { useEffect } from "react";
import Product from "../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";

// Import actions
import { getProducts as getProducAction } from "../redux/actions/productAction";

function HomeScreen() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  // This effect will be triggered at the first time render of the component and every time the dispatch method will be trigger
  useEffect(() => {
    dispatch(getProducAction());
  }, [dispatch]);

  const renderProduct = products.map((product) => (
    <Product
      key={product._id}
      name={product.name}
      description={product.description}
      price={product.price}
      imageUrl={product.imageUrl}
      productId={product._id}
    />
  ));

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          renderProduct
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
