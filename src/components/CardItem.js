import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <>
    <li className="cards__items">
       <Link className="cards__item__link">
        <figure className="cards__item__pic-wrap">
            <img src="" alt="" className="cards__item__img"/>
        </figure>
        <div className="cards__item__info">
            
        </div>
       </Link>

    </li>
    </>
   
  )
}

export default CardItem