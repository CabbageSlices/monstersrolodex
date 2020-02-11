import React from 'react';

const cardStyle = {
    border: "1px solid black",
    marginRight: "-1px",
    height: "350px",
    maxWidth: "250px",
    minWidth: "200px",
    padding: "20px",
    verticalAlign: "middle",
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    boxSizing: 'border-box'
};

export const Card = props => (
    <div style={{...cardStyle, ...props.style}}>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h1>{props.monster.name}</h1>
    </div>
)