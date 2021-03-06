import React from 'react';
import {Card} from './card.jsx'

const cardListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    alignSelf: 'center'
};

const cardRowStyle = {
    flex: '0 0 20%',
    margin: '20px'
};

export const CardList = props => {
    console.log(props);

    return (
        <div style={cardListStyle}>
            {props.monsters.map(monster =>
                <Card style={cardRowStyle} monster={monster} key={monster.id}/>
            )}
        </div>
    );
}
