import { createSlice } from '@reduxjs/toolkit';

const initialFilter = "";
const filtersSlice = createSlice({
  name: 'filter',
    initialState: initialFilter,
    reducers: {
        filtersContact(state, action){
            state.initialFilter = action.payload;
            },
                            },
                });


//  const onChangeInput = event => {
//    setFilter(event.target.value.toLocaleLowerCase());
//  };

//  const filterContacts = () => {
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
// };
  
// export const { addContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;