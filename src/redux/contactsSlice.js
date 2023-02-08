import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = {
    contactsGroup: [],
};

const contactsSlice = createSlice({
  // Ім'я слайсу
    name: "contacts",
  // Початковий стан редюсера слайсу
    initialState: contactsInitialState,
  // Об'єкт редюсерів
    reducers: {
        addContact(state, action) {
            state.contactsGroup.push(action.payload)
        },
        deleteContact(state, action) {
            state.contactsGroup = state.contactsGroup.filter(({ id }) => id !== action.payload)
        },
    },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;