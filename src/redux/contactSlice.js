import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: [],
  },
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contact: [...state.contact, action.payload],
      };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contact: action.payload,
      };
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['contact'],
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;

// const contactState = { contact: [] };

// export const addContact = createAction('contactList/addContact');

// export const deleteContact = createAction('contactList/deleteContact');

// export const contactReducer = createReducer(contactState, builder =>
//   builder
//     .addCase(addContact, (state, action) => {
//       return {
//         ...state,
//         contact: [...state.contact, action.payload],
//       };
//     })
//     .addCase(deleteContact, (state, action) => {
//       return {
//         ...state,
//         contact: action.payload,
//       };
//     })
// );
