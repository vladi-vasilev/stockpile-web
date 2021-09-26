import React from 'react';
import { useDispatch } from 'react-redux';
import { selectStorage } from '../../store/reducers/storageSlice';
import { useSelector } from 'react-redux';

const Item = ({ item }) => {
    const { id, itemName } = item;
    // const dispatch = useDispatch();
    // const selectedStorageId = useSelector(state => state.storages.selectedStorageId);

    // const handleSelect = () => {
    //     dispatch(selectStorage(id));
    // }

    return (
        <>
            {/* <h1 onClick={handleSelect}>{storageName} {selectedStorageId === storage.id ? '*' : null}</h1> */}
            <h1>{itemName}</h1>        
        </>
    )
}

export default Item;
