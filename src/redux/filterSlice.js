import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// const filterState = { filter: '' };
// export const addFilter = createAction('contactList/filter');

// export const filterReducer = createReducer(filterState, builder =>
//   builder.addCase(addFilter, (state, action) => {
//     return {
//       ...state,
//       filter: action.payload,
//     };
//   })
// );
