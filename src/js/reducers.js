import { combineReducers } from 'redux'
import * as types from './ActionTypes'

const emptyContact = {
  firstName: '',
  lastName: '',
  email: '',
  phoneMobile: '',
  phoneWork: ''
}

const selectedContact = (state = emptyContact, action) => {
  switch (action.type) {
    case types.SELECT_CONTACT:
      return action.payload

    case types.CHANGE_CONTACT:
      return { ...state, ...action.payload }

    case types.CREATE_CONTACT_FULFILLED:
      return action.payload

    case types.DELETE_CONTACT_FULFILLED:
      return emptyContact

    case types.CLEAR_SELECTED_CONTACT:
      return emptyContact

    default:
      return state
  }
}

const contacts = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CONTACTS_FULFILLED:
      return action.payload

    case types.CHANGE_CONTACT:
      return state.map((c) => {
        if (c._id === action.contactId) {
          return { ...c, ...action.payload };
        }
        return c;
      });

    case types.CREATE_CONTACT_FULFILLED:
      return [...state, action.payload]

    case types.DELETE_CONTACT_FULFILLED:
      return state.filter((c) => c._id !== action.payload)

    default:
      return state
  }
}

export default combineReducers({
  selectedContact,
  contacts
})
