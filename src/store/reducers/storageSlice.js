import { createSlice } from '@reduxjs/toolkit';

export const storageSlice = createSlice({
    name: 'storage',
    initialState: {
        selectedStorageId: 12,
        data: [
            { id: 1, storageName: 'fridge', houseIds: [1, 2] },
            { id: 2, storageName: 'freezer', houseIds: [1] },
        ]
    },
    reducers: {
        selectStorage: (state, action) => {
            state.selectedStorageId = action.payload;
        }
        // addHouse: (state, action) => {
        //     state.data.push(action.payload);
        // },
        // deleteHouse: (state, action) => {
        //     state.data = state.data.filter(house => house.id !== action.payload);
        // }
    }
})

// Action creators are generated for each case reducer function
export const { selectStorage } = storageSlice.actions;

export default storageSlice.reducer;
