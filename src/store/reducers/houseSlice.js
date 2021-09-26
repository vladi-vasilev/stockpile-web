import { createSlice } from '@reduxjs/toolkit';

export const houseSlice = createSlice({
    name: 'house',
    initialState: {
        selectedHouseId: 1,
        data: [
            { id: 1, houseName: 'house 1' },
            { id: 2, houseName: 'house 2' },
        ]
    },
    reducers: {
        addHouse: (state, action) => {
            state.data.push(action.payload);
        },
        deleteHouse: (state, action) => {
            state.data = state.data.filter(house => house.id !== action.payload);
        },
        selectHouse: (state, action) => {
            state.selectedHouseId = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { addHouse, deleteHouse, selectHouse } = houseSlice.actions;

export default houseSlice.reducer;
