import React from "react";

function Stock({stock, onClickToPortfolio}) {

  const {name, price} = stock

  function handleClick() {
    onClickToPortfolio(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

//when stock is clicked, add to portfolio array to map over