import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHouse, selectHouse } from '../../store/reducers/houseSlice';
// import { selectStorage } from '../../store/reducers/storageSlice';
// import { useSelector } from 'react-redux';

const House = ({ id, houseName }) => {
    const dispatch = useDispatch();
    // const storages = useSelector(state => state.storages.data);


    const handleDelete = () => {
        dispatch(deleteHouse(id));
    }

    const handleSelect = () => {
        // dispatch(selectStorage(storages.houseIds[0]));
        dispatch(selectHouse(id));
    }

    return (
        <>
            <h1>{houseName}</h1>
            <button onClick={handleSelect}>Select</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default House;
