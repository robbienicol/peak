import React from "react";

const GroceryList = ({
  addItem,
  favoriteItem,
  delItem,
  AddGroceryItem,
  Ref,
  listData,
}) => {
  const Grocerys = listData.map((e) => {
    const className = e.favorite ? "favorited" : "button";

    return (
      <div>
        <br />
        {e.name}
        &nbsp; &nbsp;
        <i onClick={() => addItem(e.id)}>
          <img
            width="18"
            height="18"
            alt="add"
            src="data:image/png;base64,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"
          />{" "}
        </i>
        &nbsp; &nbsp;
        <i className={className} onClick={() => favoriteItem(e.id)}>
          Fav
        </i>
        &emsp;
        <i onClick={() => delItem(e.id)}>
          <img
            width="20"
            height="20"
            alt="trash"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png"
          />
        </i>
      </div>
    );
  });
  return (
    <div className="boarder">
      <h2 style={{ color: "brown" }}>Grocerys</h2>

      <h4>Add Grocerys</h4>
      <input type={"text"} ref={Ref} />
      <button onClick={() => AddGroceryItem()}>submit</button>

      {Grocerys}
      <br />
    </div>
  );
};
export default GroceryList;
