import React from 'react';
import './product.css';

const Product = () => {
  return (
    <section className="product-section">
      <div className="product">
        <div className="product-image">
          <img src="https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/productImages%2Fthousandsunny%2FtheLonelyCactus.jpg?alt=media&token=468d49cc-2d09-4ff8-9110-831791fae5fc" alt=""/>
        </div>
        <div className="product-content">
          <p className="product-title">
            name: The Lonely Cactus
          </p>
          <p className="product-price">
            price: $15
          </p>
          <p className="product-desc">
            description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error minus quasi sed sunt voluptates quo?
          </p>
          <p className="product-stock">
            stock: 4
          </p>

          <div className="button-container">
            <button className="product-fav">
              Add to fav
            </button>
            <button className="product-add">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
