import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stocks, setStocks] = useState([])
const [portfolio, setPortfolio] = useState([])
const [sortBy, setSortBy] = useState("Alphabetically")
const [filterBy, setFilterBy] = useState("Tech")

useEffect(() => {
  fetch("http://localhost:3001/stocks")
  .then(res => res.json())
  .then(stocks => setStocks(stocks))
}, [])

function clickToPortfolio(item) {
  const portStocks = stocks.find(stock => stock.id === item.id) 
  //console.log(portStocks)
  setPortfolio([...portfolio, portStocks])
}

function handleDelete(deletedStock) {
  const updatedPortfolio = portfolio.filter((item) => item.id !== deletedStock.id)
  setPortfolio(updatedPortfolio)
}

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.name.localeCompare(b.name)
    } else {
      return a.price - b.price
    }
      
    });
 

  const filteredStocks = sortedStocks.filter((stock) => stock.type === filterBy)


  return (
    <div>
      <SearchBar 
      onChangeSort={setSortBy} 
      onFilterBy={setFilterBy}
      filterBy={filterBy}
      sortBy={sortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onClickToPortfolio={clickToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onHandleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
  }
export default MainContainer;

// const nameA = a.name.toUpperCase();
      // const nameB = b.name.toUpperCase();
      // if (nameA < nameB) {
      //   return -1
      // }
      // if (nameA > nameB) {
      //   return 1
      // }
      // return 0
      