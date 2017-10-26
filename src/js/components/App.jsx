import React from "react"
import Contacts from './Contacts'
import Header from './Header'
import Form from './Form'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container content">
          <Contacts />
          <Form />
        </div>
      </div>
    )
  }
}
