import axios from 'axios'
 
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = process.env.CONTACTS_API_URI
 
 
const Api = {
  fetchContacts: () => {
    return axios({
      method: 'get',
      url: `/contacts`
    })
  },
  updateContact: (contact) => {
    return axios({
      method: 'put',
      url: `/contacts/${contact._id}`,
      data: contact
    })
  },
  createContact: (contact) => {
    return axios({
      method: 'post',
      url: `/contacts`,
      data: contact
    })
  },

  deleteContact: (contactId) => {
    return axios({
      method: 'delete',
      url: `/contacts/${contactId}`
    })
  }
}

export default Api