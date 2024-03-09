import Navbar from "./Navbar";
import products from "../data/products.json";
import { useState } from "react";

function Products() {
  const [product, setProduct] = useState();

  function edit_product(product) {
    setProduct(product);
    document.querySelector(".background-blur").style.visibility = "visible";
    document.querySelector(".edit-product").style.visibility = "visible";
  }

  function delete_product(product) {
    setProduct(product);
    document.querySelector(".background-blur").style.visibility = "visible";
    document.querySelector(".delete-product").style.visibility = "visible";
  }

  function cancel(){
    setProduct(null);
    document.querySelector(".background-blur").style.visibility="hidden";
    document.querySelector(".edit-product").style.visibility="hidden";
    document.querySelector(".delete-product").style.visibility="hidden";
}

  function edit() {
    setProduct(null);
    document.querySelector(".background-blur").style.visibility = "hidden";
    document.querySelector(".edit-product").style.visibility = "hidden";
  }

  function _delete(){
    setProduct(null);
    document.querySelector(".background-blur").style.visibility="hidden";
    document.querySelector(".delete-product").style.visibility="hidden";
}

  return (
    <>
      <Navbar />
      <h2>Products</h2>
      <div className="products">
        {products.map((product, i) => (
          <div key={product.name} className="product">
            <div className="product-details">
              <div>{product.name}</div>
              <div>{product.category}</div>
              <div>{product.price}$</div>
              <div>{product.stock_quantity} left in stock</div>
            </div>
            <div className="alter-product">
              <div className="alter" onClick={() => edit_product(product)}>
                Update
              </div>
              <div className="alter" onClick={() => delete_product(product)}>
                Delete
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="background-blur"></div>

      <div className="edit-product">
        <div>{product && product.name}</div>
        <div>{product && product.category}</div>
        <div>Price (in $)</div>
        <input className="input" name="product_price" placeholder={product && product.price} />
        <div>Stock left</div>
        <input className="input" name="product_stock" placeholder={product && product.stock_quantity} />
        <div className="confirm">
          <div onClick={() => edit()}>Edit</div>
          <div onClick={() => cancel()}>Cancel</div>
        </div>
      </div>

      <div className="delete-product">
        <div>{product && product.name}</div>
        <div>{product && product.category}</div>
        <div>{product && product.price}$</div>
        <div>{product && product.stock_quantity} left in stock</div>
        <h3>Do you really want to delete the product?</h3>
        <div className="confirm">
          <div onClick={() => _delete()}>Delete</div>
          <div onClick={() => cancel()}>Cancel</div>
        </div>
      </div>
    </>
  );
}

export default Products;
