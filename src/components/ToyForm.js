import React,{useState} from "react";

function ToyForm({handleAdd}) {

  const [toyForm, setToyForm] = useState({
    name: "",
    image: "",
    likes: 5
  })


const handleInputChange = (e) => {
  setToyForm({
    ...toyForm,
    [e.target.name]:e.target.value
  })
}


const handlesubmit = (e) => {
  e.preventDefault()
  handleAdd(toyForm)
}


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handlesubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {toyForm.name}
          onChange = {handleInputChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {toyForm.image}
          onChange = {handleInputChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
