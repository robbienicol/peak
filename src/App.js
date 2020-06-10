import React, { useState } from "react";
import initialData from "./Data";
import "./App.css";
import GroceryList from "../src/components/GroceryList";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [listData, setListData] = useState(initialData);
  // flips selected boolean to true on plus-icon button click
  function addItem(id) {
    const updateItems = listData.map((item) =>
      item.id === id ? { ...item, selected: true } : item
    );
    setListData(updateItems);
  }
  // flips selected boolean to false on both trash-icon button click
  function delItem(id) {
    const delItems = listData.map((item) =>
      item.id === id ? { ...item, selected: false } : item
    );
    setListData(delItems);
  }
  //flips favorite boolean to not favorite on heart-icon & fav-icon click
  function favoriteItem(id) {
    const updateFavorite = listData.map((fav) =>
      fav.id === id ? { ...fav, favorite: !fav.favorite } : fav
    );
    setListData(updateFavorite);
  }
  //increments quantity + 1 on up-arrow click
  function incrementCart(id) {
    const updateIncrement = listData.map((up) =>
      up.id === id ? { ...up, quantity: up.quantity + 1 } : up
    );
    setListData(updateIncrement);
  }
  //decrements quantity - 1 on down-arrow click & not allowed to go under zero

  function decrementCart(id) {
    const updateDecrement = listData.map((down) =>
      down.id === id && down.quantity > 0
        ? { ...down, quantity: down.quantity - 1 }
        : down
    );
    setListData(updateDecrement);
  }

  return (
    <div className="App">
      <h1>Grocery & Shopping List</h1>
      <GroceryList
        addItem={addItem}
        favoriteItem={favoriteItem}
        delItem={delItem}
      />
      <div className="shopping">
        <h2 style={{ color: "green" }}>Shopping List</h2>
        <ShoppingList
          listData={listData}
          delItem={delItem}
          incrementCart={incrementCart}
          decrementCart={decrementCart}
          favoriteItem={favoriteItem}
        />
      </div>
    </div>
  );
}

export default App;
