const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CONTACT':
      return { ...state, selectedContact: action.payload }

    default:
      return state
  }
}

export default reducer