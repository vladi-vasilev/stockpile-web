import React from 'react';
import { useSelector } from 'react-redux';
import Storage from '../storage/Storage';


const StorageList = () => {
    const storages = useSelector(state => state.storages.data);
    const selectedHouse = useSelector(state => state.houses.selectedHouseId);
    const filteredStorages = storages.filter(storage => storage.houseIds.includes(selectedHouse));

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
