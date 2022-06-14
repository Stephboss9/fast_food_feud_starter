import * as React from "react"
import  "../Chip/Chip"
import Chip from "../Chip/Chip"


export function CategoriesColumn({categories, categoryState, setCategory, categoryUnselected}) {
  
  return (
    <div className="CategoriesColumn col">
    <div className="categories options">
      <h2 className="title">Categories</h2>
     {categories.map(category => {
        return (<Chip label = {category} key = {category}isActive = {category === categoryState} 
          onClick = {() => {
            if (categoryUnselected === false){setCategory(category)}
            }} xClicked = {
        () => {
          categoryUnselected = true
          setCategory("")}}/>)
      })}
    </div>
  </div>
  )
}

export default CategoriesColumn