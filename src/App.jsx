import * as React from "react"
import "./components/Header/Header"
import "./components/Instructions/Instructions"
import "./components/NutritionalLabel/NutritionalLabel"
import "./components/MenuDisplay/MenuDisplay"
import "./components/RestaurantRows/RestaurantRows"
import { createDataSet } from "./data/dataset"
import "./App.css"
import "./components/Chip/Chip"
import "./components/CategoriesColumn/CategoriesColumn"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import { useState } from "react"
import { CategoriesColumn } from "./components/CategoriesColumn/CategoriesColumn"
import MenuDisplay from "./components/MenuDisplay/MenuDisplay"
import RestaurantRows from "./components/RestaurantRows/RestaurantRows"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [categoryState, setCategory] = useState("")
  const [restaurantState, setRestaurant] = useState("")
  const [menuItem, setMenuItem] = useState(null)
  let restaurantUnselected = false
  let categoryUnselected = false
  let menuItemUnselected = false

  //const [currentInstruction, setInstruction] = useState("")
   
  let currentInstruction = () => {
    let instruction = appInfo.instructions.start
    if(categoryState != "" && restaurantState == ""){
      instruction = appInfo.instructions.onlyCategory
    }
    else if (restaurantState != "" && categoryState == ""){
      instruction = appInfo.instructions.onlyRestaurant
    }
    else if (restaurantState != "" && categoryState != "" && menuItem == null){
      instruction = appInfo.instructions.noSelectedItem
    }
    else if(restaurantState != "" && categoryState != "" && menuItem != null){
      instruction = appInfo.instructions.allSelected
    }
    return instruction
  }

  let currentMenuItems = data.filter(data => {
   return (data.restaurant === restaurantState && data.food_category === categoryState)
  })
  


  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <CategoriesColumn categories = {categories} categoryState = {categoryState} setCategory = {setCategory} categoryUnselected = {categoryUnselected} />

      {/* MAIN COLUMN */}
      <div className="container">
        <Header title = {appInfo.title}
                tagline = {appInfo.tagline}
                description = {appInfo.description}
        />

        {/* RESTAURANTS ROW */}
        <RestaurantRows restaurants = {restaurants} setMenuItem = {setMenuItem} restaurantState = {restaurantState} setRestaurant = {setRestaurant} restaurantUnselected = {restaurantUnselected}/>
         
        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions = {currentInstruction()}/>

        {/* MENU DISPLAY */}
        <MenuDisplay currentMenuItems = {currentMenuItems} menuItem = {menuItem} setMenuItem = {setMenuItem} menuItemUnselected = {menuItemUnselected}/>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
