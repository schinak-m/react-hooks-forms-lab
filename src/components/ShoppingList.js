import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("")
  
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearChange(event){
    setSearchInput(event.target.value)
    console.log(searchInput)
  }

  const itemsToDisplay = items.filter((item) => {
    const isCategoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const isSearchMatch = searchInput === '' || item.name.toLowerCase().includes(searchInput.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchInput} onSearchChange={handleSearChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
