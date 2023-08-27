import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: '',
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
    reducers: {
        addContacts(state, action) {
         state.contacts.push(action.payload);
      },
      addFilter(state, action) {
             state.filter = action.payload;
      },
      deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      //  const deletedPostIndex = state.posts.findIndex(post => post.id === action.payload);
      //  state.posts.splice(deletedPostIndex, 1);
    },
  },
});
export const { addContacts, addFilter, deleteContact} =
  contactsSlice.actions;
export const filterRedux = state => state.contacts.filter;
export const contactsRedux = state => state.contacts.contacts;

export const contactsReducer = contactsSlice.reducer;