import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const emptyContact = () => {
  return {
    _id: null,
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

const middleware = applyMiddleware(createLogger())
const store = createStore(reducers, defaultState, middleware)
window.store = store // expose store globally to manipulate in browser

export default store