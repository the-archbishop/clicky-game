import React from "react";
import "../styles/Polaroids.css";

function Polaroids(props) {
    return (
        <div className="polaroids">
        {props.cards.map(card => (
            <div className="polaroid" key={card.id} onClick={e => props.clickEvent(e.target.id)}>
                <img src={card.image} id={card.id} data-value={card.clickState} alt={card.name} />
            </div>
        ))}
        </div>
    );
}

export default Polaroids;