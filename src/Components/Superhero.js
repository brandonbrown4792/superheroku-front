import React from 'react';

const mapPowers = (powers) => {
    return powers.map(power =>
        <li className='list-group-item'>{power}</li>
    )
}

export const Superhero = ({ name, powers }) => {
    return (
        <>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <h4>{name}</h4>
                    <ul className='list-group'>
                        {mapPowers(powers)}
                    </ul>
                </li>
            </ul>
            <br />
        </>
    )
}