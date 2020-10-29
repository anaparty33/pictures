import React from "react";
import "./ItemsList.css";
import ImageCard from "./ImageCard.js";

function ItemsList(props) {
  console.log(props.listitems);

  const itemsArray = props.listitems.map((ele) => {
    return <ImageCard key={ele.id} image={ele} />;
  });
  return <div className="items-container"> {itemsArray}</div>;
}

export default ItemsList;
