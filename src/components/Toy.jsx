import React from 'react'

function Toy(props) {
  return (

<div className="toy-card">
      <h2 className="toy-title">{props.toyInfo.name}</h2>
      <img src={props.toyInfo.details.img} alt="" className="toy-img" />
      <p className="toy-description">
        {props.toyInfo.name} <br /> is from the {props.toyInfo.details.media} called {props.toyInfo.details.title}. <br />
        This toy is made from {props.toyInfo.details.material} <br /> and is appropriate for children ages {props.toyInfo.details.ageRange}
      </p>
      <h3 className="toy-price">${props.toyInfo.details.price}</h3>
    </div>

    )
}

export default Toy