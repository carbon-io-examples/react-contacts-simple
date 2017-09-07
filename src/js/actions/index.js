import ContactServiceApi from '../services/ContactServiceApi'
import * as types from '../constants/ActionTypes'

export const selectContact = (contact) => ({
  type: types.SELECT_CONTACT,
  payload: contact
})

export const changeContact = (contactId, contactKey, newContactVal) => ({
  contactId,
  type: types.CHANGE_CONTACT,
  payload: { [contactKey]: newContactVal }
})

export const clearSelectedContact = () => ({
  type: types.CLEAR_SELECTED_CONTACT
})

export const dispatchFetchContacts = (dispatch) => {
  dispatch({ type: types.FETCH_CONTACTS_PENDING })
  return ContactServiceApi.fetchContacts().then(
    res => {
      dispatch({ type: types.FETCH_CONTACTS_FULFILLED, payload: res.data })
    },
    err => {
      dispatch({ type: types.FETCH_CONTACTS_FAILED, err })
    }
  )
}

export const dispatchUpdateContact = (contact) => (dispatch) => {
  dispatch({ type: types.UPDATE_CONTACT_PENDING })
  return ContactServiceApi.updateContact(contact).then(
    res => {
      dispatch({ type: types.UPDATE_CONTACT_FULFILLED })
    },
    err => {
      dispatch({ type: types.UPDATE_CONTACT_FAILED, err })
    }
  )
}

export const dispatchCreateContact = (contact) => (dispatch) => {
  dispatch({ type: types.CREATE_CONTACT_PENDING })
  return ContactServiceApi.createContact(contact).then(
    res => {
      dispatch({ type: types.CREATE_CONTACT_FULFILLED, payload: res.data })
    },
    err => {
      dispatch({ type: types.CREATE_CONTACT_FAILED, err })
    }
  )
}

export const dispatchDeleteContact = (contactId) => (dispatch) => {
  dispatch({ type: types.DELETE_CONTACT_PENDING })
  return ContactServiceApi.deleteContact(contactId).then(
    res => {
      dispatch({ type: types.DELETE_CONTACT_FULFILLED, payload: contactId })
    },
    err => {
      dispatch({ type: types.DELETE_CONTACT_FAILED, err })
    }
  )
}