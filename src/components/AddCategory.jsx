import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory })=> {

  const [inputValue, setInputValue] = useState('')
  const onInputOnchange = (event) =>{

    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {

    if ( inputValue.trim().length <= 1){ 
        return; 
    }
        event.preventDefault();
        //setCategories( categories =>  [inputValue, ...categories]);
        
        
        onNewCategory(inputValue.trim());
        
        setInputValue('');
  }

  return (
    <form onSubmit={ (event) => onSubmit (event)}>
        <input 
            type="text"
            placeholder='Buscar Gifs'
            value={ inputValue }
            onChange= { (event) => onInputOnchange(event) }
        />

       
    </form>
  )
}
