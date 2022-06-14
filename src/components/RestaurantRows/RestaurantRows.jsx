
import * as React from "react"
import  "../Chip/Chip"
import Chip from "../Chip/Chip"



export function RestaurantRows({restaurants,setMenuItem, restaurantState, setRestaurant, restaurantUnselected}) {
  
  return (
    <div className="RestaurantsRow">
    <h2 className="title">Restaurants</h2>
    <div className="restaurants options">
     {restaurants.map(restaurant  => {
      return <Chip key = {restaurant} label = {restaurant} isActive = {restaurant === restaurantState} 
      onClick = {() => { if (restaurantUnselected == false) {setRestaurant(restaurant); setMenuItem(null)}}} 
      xClicked = {() => {restaurantUnselected = true; setRestaurant(""); setMenuItem(null)}}/>
    })}
    </div>
   </div>
  )
}

export default RestaurantRows

