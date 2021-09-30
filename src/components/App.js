import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showToys, setShowtoys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setShowtoys(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleAdd = (addToy) => {
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addToy)
    })
    .then(res => res.json())
    .then(addToy => {
      setShowtoys([
        ...showToys, addToy
      ])
    })
  }

  // const handleUpdate = (addLikes) => {

  // }

  const handleDel = (id) => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => {
      const itemsToRender = showToys.filter(toys => toys.id !== id)
      setShowtoys(itemsToRender)
    })
    
  }

  function handleUpdate(updateLikes){
    const updateArr = showToys.map(toyObj => {
      if(toyObj.id === updateLikes.id){
        return {...updateLikes}
      }
      else{
        return toyObj
      }
    })
    setShowtoys(updateArr)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAdd={handleAdd}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer showToys={showToys} handleDel={handleDel} handleUpdate={handleUpdate}/>
    </>
  );
}

export default App;
