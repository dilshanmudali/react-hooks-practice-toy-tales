import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({showToys, handleDel, handleUpdate}) {

  const displayToys = showToys.map(toy => <ToyCard key={toy.id} toy={toy} handleDel={handleDel} handleUpdate={handleUpdate}/>)

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
