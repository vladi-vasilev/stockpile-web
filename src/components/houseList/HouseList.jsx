import React from 'react';
import { useSelector } from 'react-redux';
import House from '../house/House';


const HouseList = () => {
    const houses = useSelector(state => state.houses.data);
    
    if (houses.length < 1) {
        return (
            <section>
                <h2>No houses found.</h2>
            </section>
        )
    }

    const houseList = houses.map(house => {
        return (
            <li key={house.id}>
                <House {...house} />
            </li>
        )
    })

    return (
        <section>
            <h2>List of houses: </h2>
            <ol>
                {houseList}
            </ol>
        </section>
    )
}

export default HouseList;
