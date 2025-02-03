import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({ onChange, value }) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type="text"
        value={value}
        placeholder="search"
        onChange={onChange}
      />

      <FontAwesomeIcon
        icon={faSearch}
        style={{
          padding: "10px",
          borderRadius: "0px 5px 5px 0px",
          backgroundColor: "#aaa",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "black",
        }}
        size="sm"
      />
    </div>
  );
}

export default Search;
