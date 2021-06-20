import React,{ useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

//estados
const [inputValue, setinputValue] = useState('');


//functions

const handleInputChange = (e)=>{
    //console.log(e.target.value);
    
    setinputValue(e.target.value);
    //console.log(inputValue)
}

const handleSubmit = (e)=>{
    e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [...cats, inputValue]);
            setinputValue('')

        }


   

}




    return (
        <>
        
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
        </>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
                   
}

export default AddCategory
