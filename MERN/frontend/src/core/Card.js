import React, { useState } from 'react';
import './Card.css';
import ShowImage from './ShowImage';

const Card = ({ product }) => {
    const[count, Setcount] = useState(product.count);

    return(
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={product} url="product" />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <button className="btn btn-succes">Ver más</button>
            </div>
        </div>
    )
}
export default Card;