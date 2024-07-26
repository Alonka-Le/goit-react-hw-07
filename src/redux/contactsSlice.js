import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const pending = (state) => {
  state.loading = true;
  state.error = false;
};

const rejected = (state) => {
  state.loading = false;
  state.error = true;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (user) => user.id !== action.payload.id
        );

        state.loading = false;
      })
      .addCase(deleteContact.rejected, rejected);
  },
});
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, textFilter) => {
    console.log("selectVisibleTasks");
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
export default slice.reducer;
