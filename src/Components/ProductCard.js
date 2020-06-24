import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="shadow-md xl mb-4 p-5 rounded bg-white border-b-4 border-blue-500">
        <img src={product.images} />
        <h2 className="mt-2 font-bold font-hairline subpixel-antialiased">
          {product.name}
        </h2>
        <h4 className="mt-2 mb-1">${product.price}</h4>
        <p className="text-sm">{product.description}</p>
        <Link
          to={`products/${product.id}`}
          className="bg-blue-500 rounded mt-3 text-white p-2 flex justify-center"
        >
          View
        </Link>
      </div>
    </Link>
  );
}

export default ProductCard;
