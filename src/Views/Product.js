import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Loading from "../Components/Loader";
import { RotateScale } from "styled-loaders-react";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product() {
  const { id } = useParams();
  const url = `https://5ed4bbec8769250016e62dfc.mockapi.io/api/v1/products/${id}`;

  const [imgLoading, setImgLoading] = useState(true);

  let product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = (
      <div className="text-4xl flex-col text-center flex justify-center items-center text-red-400 font-bold">
        ERROR
        {navigator.onLine ? (
          <div className="text-xl text-red-800">
            Connection Status : You are connected
          </div>
        ) : (
          <div className="text-xl text-red-900">
            Connection Status : You are not connected to the Internet
          </div>
        )}
      </div>
    );
  }

  if (product.loading) {
    content = <Loading />;
  }

  if (product.data) {
    console.log(product);
    return (content = (
      <div className="p-2 flex-row">
        <h1 className="font-bold text-2xl">{product.data.name}</h1>

        <img
          src={product.data.images}
          alt={product.data.name}
          className="w-full mt-2 mb-3"
          onLoad={() => setImgLoading(false)}
        />
        {imgLoading ? <RotateScale /> : ""}

        <h3 className="font-bold text-xl">${product.data.price}</h3>
        <p>{product.data.description}</p>
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Product;
