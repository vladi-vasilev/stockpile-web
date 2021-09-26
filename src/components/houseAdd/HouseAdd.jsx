import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addHouse } from '../../store/reducers/houseSlice';

const HouseAdd = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input) {
            dispatch(
                addHouse({
                    id: nanoid(),
                    houseName: input
                })
            )
            setInput('');
        }
    }

    return (
        <section>
            <h2>Add a new house.</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="houseName">House name:</label>
                <input
                    type="text"
                    id="houseName"
                    name="houseName"
                    value={input}
                    onChange={handleInputChange}
                />

                <input type="submit" value="Add" />
            </form>
        </section>
    )
}

export default HouseAdd;
