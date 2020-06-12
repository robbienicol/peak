import React, { useState, useRef } from "react";
import initialData from "./Data";
import "./App.css";
import GroceryList from "../src/components/GroceryList";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [listData, setListData] = useState(initialData);
  const [shopping, setShopping] = useState(initialData);
  const Ref1 = useRef();
  const Ref3 = useRef();

  // flips selected boolean to true on plus-icon button click
  function delItemInitial(id) {
    const updateItems = listData.map((item) =>
      item.id === id ? { ...item, selected: true } : item
    );
    setListData(updateItems);
  }
  // flips selected boolean on Shopping List to false on the plus button click

  function additem(id) {
    const updateItems = shopping.map((item) =>
      item.id === id ? { ...item, selected: true } : item
    );
    setShopping(updateItems);
  }

  // flips selected boolean to false on both trash-icon button click
  function delItem(id) {
    const delItems = shopping.map((item) =>
      item.id === id ? { ...item, selected: false } : item
    );
    setShopping(delItems);
  }
  //flips favorite boolean to not favorite on heart-icon & fav-icon click
  function favoriteItem(id) {
    const up = shopping.map((hi) =>
      hi.id === id ? { ...hi, favorite: !hi.favorite } : hi
    );
    const updateFavorite = listData.map((fav) =>
      fav.id === id ? { ...fav, favorite: !fav.favorite } : fav
    );

    setListData(updateFavorite);
    setShopping(up);
  }
  //increments quantity + 1 on up-arrow click
  function incrementCart(id) {
    const updateIncrement = shopping.map((up) =>
      up.id === id ? { ...up, quantity: up.quantity + 1 } : up
    );
    setShopping(updateIncrement);
  }
  //decrements quantity - 1 on down-arrow click & not allowed to go under zero

  function decrementCart(id) {
    const updateDecrement = shopping.map((down) =>
      down.id === id && down.quantity > 0
        ? { ...down, quantity: down.quantity - 1 }
        : down
    );
    setShopping(updateDecrement);
  }

  // gives ability to add new Grocery Item, by adding a New Object to the array.
  function AddGroceryItem(id) {
    const addName = Ref1.current.value;
    const addSugar = Ref3.current.value;

    setListData([
      ...listData,
      {
        id: listData.length + 1,
        name: addName,
        favorite: false,
        quantity: 0,
        nutrition: [
          {
            sugars: addSugar,
          },
        ],
        selected: false,
      },
    ]);
    setShopping([
      ...shopping,
      {
        id: listData.length + 1,
        name: addName,
        favorite: false,
        quantity: 0,
        nutrition: [
          {
            sugars: addSugar,
          },
        ],
        selected: false,
      },
    ]);
  }

  function alsoAddGroceryItem(id) {
    const addName = Ref1.current.value;
    const addSugar = Ref3.current.value;

    setListData([
      ...listData,
      {
        id: listData.length + 1,
        name: addName,
        favorite: false,
        quantity: 0,
        nutrition: [
          {
            sugars: addSugar,
          },
        ],
        selected: false,
      },
    ]);
    setShopping([
      ...shopping,
      {
        id: listData.length + 1,
        name: addName,
        favorite: false,
        quantity: 0,
        nutrition: [
          {
            sugars: addSugar,
          },
        ],
        selected: true,
      },
    ]);
  }

  return (
    <div className="App">
      <h1>Grocery & Shopping List</h1>
      <div className="shopping">
        <h1 style={{ color: "brown" }}>Shopping List</h1>
        <ShoppingList
          additem={additem}
          shopping={shopping}
          delItem={delItem}
          incrementCart={incrementCart}
          decrementCart={decrementCart}
          favoriteItem={favoriteItem}
        />
      </div>
      <GroceryList
        additem={additem}
        listData={listData}
        delItemInitial={delItemInitial}
        favoriteItem={favoriteItem}
        AddGroceryItem={AddGroceryItem}
        Ref1={Ref1}
        Ref3={Ref3}
        alsoAddGroceryItem={alsoAddGroceryItem}
      />
    </div>
  );
}

export default App;
