import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { dispatchFetchContacts } from '../actions'

const emptyContact = () => {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phoneMobile: '',
    phoneWork: ''
  }
}

const defaultState = {
  contacts: [],
  selectedContact: emptyContact(),
}

const middleware = applyMiddleware(createLogger(), thunk)
const store = createStore(reducers, defaultState, middleware)
store.dispatch(dispatchFetchContacts)
window.store = store // expose store globally to manipulate in browser

export default store