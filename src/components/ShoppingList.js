import React from "react";

const ShoppingList = ({
  shopping,
  delItem,
  incrementCart,
  decrementCart,
  favoriteItem,
  additem,
}) => {
  const sike = "hello";
  const selectedItems = shopping.map((e) => {
    const className = e.favorite ? "favorited" : "button";
    //will only allow add if selected is true
    if (e.selected === true) {
      return (
        <div>
          <hr className="line" />
          <br />
          <i style={{ cursor: "pointer" }} onClick={() => delItem(e.id)}>
            <img
              width="20"
              height="20"
              alt="trash"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png"
            />
          </i>
          &emsp;
          <i style={{ cursor: "pointer" }} onClick={() => incrementCart(e.id)}>
            <img
              width="20"
              height="20"
              alt="up"
              src="data:image/png;base64,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"
            />
          </i>
          &emsp;
          {e.quantity}
          &emsp;
          <i style={{ cursor: "pointer" }} onClick={() => decrementCart(e.id)}>
            <img
              className="imageFlip"
              width="20"
              height="20"
              alt="down"
              src="data:image/png;base64,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"
            />
          </i>
          &emsp;
          <i
            style={{ cursor: "pointer" }}
            className={className}
            onClick={() => favoriteItem(e.id)}
          >
            Fav
          </i>
          <h4> {e.name}</h4>
          <div>
            Sugar Count:
            {e.nutrition[0].sugars}
          </div>
          <br />
        </div>
      );
    }
  });

  return <div>{selectedItems}</div>;
};

export default ShoppingList;
