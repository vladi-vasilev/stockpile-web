import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Item from '../item/Item';


const ItemList = () => {
    const { houseId } = useParams();

    const items = useSelector(state => state.items.data);
    const selectedStorageId = useSelector(state => state.storages.selectedStorageId);
    // const selectedStorageId = useSelector(state => state.storages.data);
    const filteredItems = items.filter(items => {
        // items.storage_id === selectedStorageId
        
        return items.storage_id === selectedStorageId && items.house_id === Number(houseId)
    });

    if (filteredItems.length < 1) {
        return (
            <section>
                <h2>No items found.</h2>
            </section>
        )
    }

    const itemList = filteredItems.map(item => {
        return (
            <li key={item.id}>
                <Item item={item} />
            </li>
        )
    })

    return (
        <section>
            <h2>List of items: </h2>
            <ol>
                {itemList}
            </ol>
        </section>
    )
}

export default ItemList;
