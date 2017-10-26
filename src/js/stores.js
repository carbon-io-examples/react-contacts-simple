import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { dispatchFetchContacts } from './actions'

const middleware = applyMiddleware(createLogger(), thunk)
const store = createStore(reducers, middleware)
store.dispatch(dispatchFetchContacts)
window.store = store // expose store globally to manipulate in browser

export default store
