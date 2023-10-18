import React from 'react'

function Portfolio({port, onHandleDelete}) {

function handleClick() {
    onHandleDelete(port)
}

    return (
        <div>
          <div className="card" onClick={handleClick}>
            <div className="card-body">
              <h5 className="card-title">{port.name}</h5>
              <p className="card-text">{port.price}</p>
            </div>
          </div>
        </div>
      );
    }

export default Portfolio