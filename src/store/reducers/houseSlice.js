import { createSlice } from '@reduxjs/toolkit';

// useParams over state,
// worker check out "comlink"
// https://web.dev/progressive-web-apps/

export const houseSlice = createSlice({
    name: 'house',
    initialState: {
        selectedHouseId: 1,
        data: {
            1: // house id
                { id: 1, houseName: 'house 1' },
            2: // house id
                { id: 2, houseName: 'house 2' },
        }
    },
    reducers: {
        addHouse: (state, action) => {
            state.data[action.payload.id] = action.payload;
        },
        deleteHouse: (state, action) => {
            delete state.data[action.payload];
        },
        selectHouse: (state, action) => {
            state.selectedHouseId = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { addHouse, deleteHouse, selectHouse } = houseSlice.actions;

export default houseSlice.reducer;
