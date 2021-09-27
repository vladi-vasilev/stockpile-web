import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        data: {
            1: //item Id
                { id: 1, itemName: 'item 1', storageId: 1},
            2:
                { id: 2, itemName: 'item 2', storageId: 2},

            //     [
                    
            //         { id: 2, itemName: 'item 2', storageId: 1},
            //         { id: 3, itemName: 'item 3', storageId: 1},
            //         { id: 4, itemName: 'item 5', storageId: 1},
            //         { id: 5, itemName: 'item 6', storageId: 1}
            //     ],
            // 2: //storage Id
            //     [
            //         { id: 1, itemName: 'item 2.1' },
            //         { id: 2, itemName: 'item 2.2' },
            //         { id: 3, itemName: 'item 2.3' },
            //         { id: 4, itemName: 'item 2.5' },
            //         { id: 5, itemName: 'item 2.6' }
            //     ],

            // 3: //storage Id
            //     [
            //         { id: 1, itemName: 'item 3.1' }
            //     ]
        }
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
