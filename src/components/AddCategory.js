import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  //estados
  const [inputValue, setinputValue] = useState("");

  //functions

  const handleInputChange = (e) => {
    //console.log(e.target.value);

    setinputValue(e.target.value);
    //console.log(inputValue)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      //cats es un callback, el nombres puede ser cualquiera
      //donde le pasamos dos valores, el valor anterior y el nuevo
      setCategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="buscar gif"
      />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
