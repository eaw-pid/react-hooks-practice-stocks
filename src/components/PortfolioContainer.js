import React from "react";
import Stock from "./Stock";
import Portfolio from "./Portfolio"

function PortfolioContainer({portfolio, onHandleDelete}) {
  //console.log(portfolio)
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(port => (
        <Portfolio key={port.id} port={port} onHandleDelete={onHandleDelete}/>
      ))
      }
    </div>
  );
}

export default PortfolioContainer;
