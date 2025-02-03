import React from "react";

function ProductCard(data) {
  let products = data.data;

  return (
    <div className="product-list">
      {products?.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            className="product-image"
            src={item.images[0]}
            alt={item.title}
          />
          <div className="product-info">
            <h3 className="product-title">{item.title}</h3>
            <div className="product-price">${item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
