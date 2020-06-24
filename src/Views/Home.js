import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const url = `https://5ed4bbec8769250016e62dfc.mockapi.io/api/v1/products?page=1&limit=10`;

  let content = null;

  let products = useAxiosGet(url);

  if (products.error) {
    content = (
      <div className="text-red-900 bg-red-500 p-3 font-bold rounded mt-3">
        ERROR
        {navigator.onLine ? (
          <div className="">Connection Status : You are connected</div>
        ) : (
          <div className="">
            Connection Status : You are not connected to the Internet
          </div>
        )}
      </div>
    );
  }

  if (products.loading) {
    content = <Loading />;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }
  return (
    <div>
      <h1 className="font-extrabold text-xl">Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
