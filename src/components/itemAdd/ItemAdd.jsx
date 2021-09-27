import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addItem } from '../../store/reducers/itemsSlice';

const ItemAdd = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const selectedHouseId = useSelector(state => state.houses.selectedHouseId);
    const selectedStorageId = useSelector(state => state.storages.selectedStorageId);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input) {
            dispatch(
                addItem({
                    id: nanoid(),
                    itemName: input,
                    storage_id: selectedStorageId,
                    house_id: selectedHouseId
                })
            )
            setInput('');
        }
    }

    return (
        <section>
            <h2>Add a new item.</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="itemName">Item name:</label>
                <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    value={input}
                    onChange={handleInputChange}
                />

                <input type="submit" value="Add" />
            </form>
        </section>
    )
}

export default ItemAdd;
