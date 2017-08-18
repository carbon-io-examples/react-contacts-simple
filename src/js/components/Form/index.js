import React from "react"
import { connect } from 'react-redux'
import { changeContact, dispatchCreateContact, dispatchUpdateContact, dispatchDeleteContact } from '../../actions'

const DISPLAY_NAMES = {
  'firstName': 'First Name',
  'lastName': 'Last Name',
  'email': 'Email',
  'phoneMobile': 'Mobile',
  'phoneWork': 'Work',
  'phoneHome': 'Home'
}

export class FormView extends React.Component {

  render() {
    const { contact, handleUpdateContact, handleCreateContact, handleDeleteContact } = this.props

    const contactFields = contact ? Object.keys(contact) : []

    const submitUpdate = (e) => {
      e.preventDefault()
      handleUpdateContact(contact)
    }
    
    const submitCreate = (e) => {
      e.preventDefault()
      handleCreateContact(contact)
    }
    
    const submitDelete = (e) => {
      e.preventDefault()
      handleDeleteContact(contact._id)
    }

    return (
      <form onSubmit={contact._id ? submitUpdate : submitCreate} className="contact-form col-md-6">
        <div className="contact-form-top">
          <h3 className="contact-form-top--title">{contact._id ? "Update" : "Create"}</h3>
        </div>

        <div className='editable-view'>
          { contactFields
              .filter(field => field !== '_id')
              .map(field => this.renderInput(field)) }
          <div className="button-bar">
            { contact._id && <button key="Delete" className="btn btn-danger pull-left" onClick={submitDelete}>Delete</button> }
            
              <button type="submit" className="btn btn-primary pull-right">{contact._id ? "Update" : "Create"}</button> 
          </div>
        </div>
      </form>
    )
  }

  renderInput(field) {
    const { handleChangeContact, contact } = this.props
    
    const changeHandler = (e) => {
      handleChangeContact(field, e.target.value)
    }
    
    return (
      <div className="form-group" key={field}>
      <label className="form-label">{DISPLAY_NAMES[field]}</label>
      <input
        className="form-control"
        placeholder={DISPLAY_NAMES[field]}
        name={field}
        value={contact[field]}
        type="text"
        onChange={changeHandler} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.selectedContact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeContact: (key, val) => {
      dispatch(changeContact(key, val))
    },
    handleCreateContact: contact => {
      dispatch(dispatchCreateContact(contact))
    },
    handleUpdateContact: contact => {
      dispatch(dispatchUpdateContact(contact))
    },
    handleDeleteContact: contactId => {
      dispatch(dispatchDeleteContact(contactId))
    }
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormView)

export default Form