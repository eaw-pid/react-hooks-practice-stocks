import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onClickToPortfolio}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onClickToPortfolio={onClickToPortfolio}/>
      ))}
    </div>
  );
}

export default StockContainer;
