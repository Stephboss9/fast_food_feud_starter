
import * as React from "react"
import "../NutritionalLabel/NutritionalLabel"
import  "../Chip/Chip"
import Chip from "../Chip/Chip"
import NutritionalLabel from "../NutritionalLabel/NutritionalLabel"



export function MenuDisplay({currentMenuItems,menuItem, setMenuItem, menuItemUnselected}) {
  
  return (
    <div className="MenuDisplay display">
    <div className="MenuItemButtons menu-items">
      <h2 className="title">Menu Items</h2>
      {currentMenuItems.map(item => {
        return <Chip key = {item.item_name} label = {item.item_name} isActive = {item == menuItem} onClick = {() => {
          if(menuItemUnselected === false){ setMenuItem(item)} 
        }} 
          xClicked = {() => {
            menuItemUnselected = true
            setMenuItem(null)}}/>
      })}
    </div>

    {/* NUTRITION FACTS */}
    <div className="NutritionFacts nutrition-facts">
      {menuItem != null && <NutritionalLabel key = {menuItem.item_name + " label"} item = {menuItem}/> }
     </div>
  </div>
  )
}

export default MenuDisplay

