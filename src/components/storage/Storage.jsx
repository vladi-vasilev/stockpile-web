import React from 'react';
import { useDispatch } from 'react-redux';
import { selectStorage } from '../../store/reducers/storageSlice';
import { useSelector } from 'react-redux';

const Storage = ({ storage }) => {
    const dispatch = useDispatch();
    const { id, storageName } = storage;
    const selectedStorageId = useSelector(state => state.storages.selectedStorageId);

    const handleSelect = () => {
        dispatch(selectStorage(id));
    }

    return (
        <>
            <h1 onClick={handleSelect}>{storageName} {selectedStorageId === storage.id ? '*' : null}</h1>
        </>
    )
}

export default Storage;
