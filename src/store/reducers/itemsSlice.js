import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        data: [
            { id: 1, itemName: 'item 1', storage_id: 1 },
            { id: 2, itemName: 'item 2', storage_id: 1  },
            { id: 3, itemName: 'item 3', storage_id: 2  },
        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.data.push(action.payload);
        },
        deleteitem: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        }
    }
})

// Action creators are generated for each case reducer function
export const { addItem, deleteitem } = itemsSlice.actions;

export default itemsSlice.reducer;
