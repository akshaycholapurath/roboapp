import React from 'react';



const Card = ({id,name,email})=>{
   
    return(
        <div className="tc dib br3 pa2 ma2 grow bw5 shadow-2 ">
            <img src={`https://robohash.org/${id}?100x100`} alt="robots" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}


export default Card;