import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Storage from '../storage/Storage';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectStorage } from '../../store/reducers/storageSlice';

const StorageList = () => {
    const { houseId } = useParams();
    const dispatch = useDispatch();

    const storages = useSelector(state => state.storages.data);
    // const selectedHouse = useSelector(state => state.houses.selectedHouseId);
    // const filteredStorages = storages.filter(storage => storage.houseIds.includes(selectedHouse));
    const filteredStorages = storages.filter(storage => storage.houseIds.includes(Number(houseId)));

    useEffect(() => {
        dispatch(selectStorage(storages[0].id));
    }, [])

    if (filteredStorages.length < 1) {
        return (
            <section>
                <h2>No storages found.</h2>
            </section>
        )
    }

    const storageList = filteredStorages.map(storage => {
        return (
            <li key={storage.id}>
                <Storage storage={storage} />
            </li>
        )
    })

    return (
        <section>
            <h2>List of storages: </h2>
            <ol>
                {storageList}
            </ol>
        </section>
    )
}

export default StorageList;
