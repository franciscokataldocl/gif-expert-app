import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Digimon"]);

  //funciones
  // const handleAdd = ()=>{
  // setCategories((cats) =>[...cats, 'Samurai X']);

  // }

  return (
    <>
      <AddCategory setCategories={setCategories} />

      <div className="gifContainer">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};

export default GifExpertApp;
