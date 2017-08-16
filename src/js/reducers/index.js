import * as types from '../constants/ActionTypes'

const emptyContact = () => {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phoneMobile: '',
    phoneWork: ''
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    
    case types.SELECT_CONTACT:
      return { ...state, selectedContact: action.payload }
      
    case types.CHANGE_CONTACT:
      var updatedContact = {...state.selectedContact, ...action.payload};
      var updatedContacts = state.contacts;
    
      if (updatedContact._id) {
        updatedContacts = state.contacts.map(c => {
          if (updatedContact._id === c._id) {
            return updatedContact;
          }
          return c;
        });
      }
      return { selectedContact: updatedContact, contacts: updatedContacts }
      
    case types.FETCH_CONTACTS_FULFILLED:
      return {...state, contacts: action.payload}  
      
    case types.CREATE_CONTACT_FULFILLED:
      var newContact = action.payload
      return {
        ...state,
        selectedContact: action.payload,
        contacts: [...state.contacts, newContact]
      }

    case types.UPDATE_CONTACT_FULFILLED:
      // no op data already correct
      return state

    case types.DELETE_CONTACT_FULFILLED:
      return {
        ...state,
        selectedContact: emptyContact(),
        contacts: state.contacts.filter(c => c._id !== action.payload)
      }

    case types.CLEAR_SELECTED_CONTACT:
      return { ...state, selectedContact: emptyContact() }
      
    default:
      return state
  }
}

export default reducer