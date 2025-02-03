import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Search from "./Search";
import { apiCall } from "../services/apiCall";

function Products() {
  const [loading, setLoading] = useState("false");
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    apiCall("", setLoading, setData);
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    apiCall(e.target.value, setLoading, setData);
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : data.length > 0 ? (
    <div>
      <h1 style={{ fontSize: "40px", fontWeight: " bold", paddingTop: "20px" }}>
        Products
      </h1>
      <div className="search-container">
        <Search onChange={handleSearch} value={searchText} />
      </div>
      <div>
        <ProductCard data={data} />
      </div>
    </div>
  ) : (
    <h1 style={{ color: "red" }}>Something Went Wrong!!!</h1>
  );
}

export default Products;
