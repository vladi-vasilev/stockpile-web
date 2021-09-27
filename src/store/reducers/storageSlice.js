import { createSlice } from '@reduxjs/toolkit';

export const storageSlice = createSlice({
    name: 'storage',
    initialState: {
        selectedStorageId: 1,
        data: {
            1: // storage id 
                { id: 1, storageName: 'fridge', houseIds: 1 },
            2: // storage id 
                { id: 2, storageName: 'fridge 1', houseIds: 2 },
            3: // storage id 
                { id: 3, storageName: 'fridge 2 ', houseIds: 1 },
            // 1: //house id
            //     [
            //         { id: 1, storageName: 'fridge' },
            //         { id: 2, storageName: 'freezer' },
            //         { id: 3, storageName: 'garage' },
            //     ],
            // 2: //house id
            //     [
            //         { id: 1, storageName: 'fridge' },
            //         { id: 3, storageName: 'garage' },
            //     ],
        }
        // data: {
        //     1: // storage id 
        //         { id: 1, storageName: 'fridge', houseIds: 1 },
        //     2: // storage id 
        //         { id: 2, storageName: 'fridge', houseIds: 2 },
        //     2: // storage id
        //         { id: 2, storageName: 'freezer', houseIds: [1] },
        //     3: // storage id
        //         { id: 3, storageName: 'garage', houseIds: [1] },
        // }
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
