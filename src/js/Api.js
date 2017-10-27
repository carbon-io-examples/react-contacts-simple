import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = process.env.CONTACTS_API_URI


const api = {
  fetchContacts: () => axios({
    method: 'get',
    url: `/contacts`
  }),

  updateContact: (contact) => axios({
    method: 'put',
    url: `/contacts/${contact._id}`,
    data: contact
  }),

  createContact: (contact) => axios({
    method: 'post',
    url: `/contacts`,
    data: contact
  }),

  deleteContact: (contactId) => axios({
    method: 'delete',
    url: `/contacts/${contactId}`
  })
}

export default api
