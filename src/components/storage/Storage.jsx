import React from 'react';
import { useDispatch } from 'react-redux';
import { selectStorage } from '../../store/reducers/storageSlice';

const Storage = ({ storage }) => {
    const { id, storageName } = storage;
    const dispatch = useDispatch();

    const handleSelect = () => {
        dispatch(selectStorage(id));
    }

    return (
        <>
            <h1 onClick={handleSelect}>{storageName}</h1>
        </>
    )
}

export default Storage;
