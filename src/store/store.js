import { configureStore } from '@reduxjs/toolkit';
import houseReducer from './reducers/houseSlice';
import storageSlice from './reducers/storageSlice';
import itemsSlice from './reducers/itemsSlice';

const store = configureStore({
    reducer: {
        houses: houseReducer,
        storages: storageSlice,
        items: itemsSlice
    }
});

export default store;
