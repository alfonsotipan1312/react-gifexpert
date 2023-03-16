//rfce

import { useState } from "react"
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState (['One Punch']);

  const onAddCategory =(newCategory)=>{

    if( categories.includes(newCategory)) return;

    setCategories([ newCategory, ... categories]);
  }

  return(
    <>
      {/*Titulo*/}
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory onNewCategory={ (event) => onAddCategory(event)}
      />
      
      {/*setCategories={ setCategories }></AddCategory>
      */}
     
      {/* Listado de Gifs */}

      <ol>
        {
          categories.map ( (category) => {
            return (
              <GifGrid key={category} category ={category}></GifGrid>
            )
          })  
          
        }
      </ol>
         {/*Gif Item*/}

    </>
  )
  
}

