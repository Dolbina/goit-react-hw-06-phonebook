import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [];

const contactsSlice = createSlice({
  name: 'contacts',
    initialState: initialContacts,
    reducers: {
        addContact: {
            reducer: (state, action){
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                    },
                };
            },
        },
        deleteContact(state, action) {
            index = state.filter(contact => contact.id !== action.payload);
                           },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;