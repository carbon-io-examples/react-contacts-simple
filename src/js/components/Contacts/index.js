import { connect } from 'react-redux'
import React from "react"
import { selectContact, clearSelectedContact } from '../../actions'

export class ContactsView extends React.Component {

  render() {
    const { contacts, selectedContactId, handleSelectContact, handleClearSelectedContact } = this.props
    return (
      <div>
        <section className="contact-list col-md-6">
          <div className="contact-list-top">
            <h3 className="contact-list-top--title">Contacts</h3>
            { selectedContactId &&
              <button className="btn btn-primary btn-sm" onClick={handleClearSelectedContact}>+ Add Contact</button>
            }
          </div>

          <ul className="contact-list--list">
            {
              contacts.length 
                ? contacts.map((contact) => this.renderListItem(contact, selectedContactId, handleSelectContact))
                : <li className="contact-list--list-item m-empty">You have not added any contacts, yet.</li>
            }
          </ul>
        </section>
      </div>
    );
  }


  renderListItem(contact, selectedContactId, handleSelectContact) {
    const { _id, firstName, lastName } = contact
    const selectedClass = selectedContactId === _id ? "s-selected" : ""
    
    return (
      <li
        key={_id}
        className={`contact-list--list-item ${selectedClass}`} 
        onClick={(e) => handleSelectContact(contact)} >
        {`${firstName} ${lastName}`}
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    selectedContactId: state.selectedContact._id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectContact: contact => {
      dispatch(selectContact(contact))
    },
    handleClearSelectedContact: () => {
      dispatch(clearSelectedContact())
    }
  }
}

const Contacts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsView)

export default Contacts