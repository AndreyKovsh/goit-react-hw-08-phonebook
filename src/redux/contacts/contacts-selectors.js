import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoader = state => state.contacts.loading;

// export const getError = state => state.contacts.error;
const getTotalContacts = state => {
  const todos = getContacts(state);
  return todos.length;
};

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name }) => name && name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactSelectors = {
  getContacts,
  getFilter,
  getLoader,
  getVisibleContacts,
  getTotalContacts,
};
export default contactSelectors;
