import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction(
  'contacts/fetchContactSuccsess',
);
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccsess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccsess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
