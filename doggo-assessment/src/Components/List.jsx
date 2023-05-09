import React from 'react'
import { useState, useEffect } from "react";
const List = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => setBreeds(Object.keys(response.data.message)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>List</div>
  )
}

export default List