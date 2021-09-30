import React,{useState} from "react";

function ToyCard({toy, handleDel, handleUpdate}) {

  const {id, name, image, likes} = toy
  const [addLikes, setAddLikes] = useState(likes+1)

  const handleLikes = () => {

    setAddLikes(prevLikes => ++prevLikes)

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes:addLikes})
    })
    .then(res => res.json())
    .then(newLikes => handleUpdate(newLikes))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{addLikes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDel(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
