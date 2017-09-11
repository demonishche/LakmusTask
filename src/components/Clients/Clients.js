import React from 'react'
import Pagination from 'rc-pagination'
import {Field, reduxForm} from 'redux-form'
import './Clients.css'

const Clients = ({clients, receiveClients, page, handleSubmit}) => {
  console.log(clients)
  return (
    <div>
      <h1>Clients</h1>
      <form onSubmit={handleSubmit}>
        <Field type='text' name='name' id='name' placeholder='Name...' component='input'/>
        <button type='submit'>Filter</button>
      </form>
      <Pagination onChange={receiveClients} current={page} total={100} />
    </div>
  )
}

export default reduxForm({form: 'clientsName'})(Clients)