import React from 'react'
import {PageHeader, Grid, Row, Col, Button, Form, Table, Pagination, FormGroup} from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import './Clients.css'

const Clients = ({clients, receiveClients, page, handleSubmit, isFetching, requestError}) => {
  return (
    <Grid>
      <PageHeader>Clients</PageHeader>
      <Row>
        <Col lg={5} md={6}>
          <Pagination
            className='clientsPagination'
            bsSize="medium"
            prev
            next
            first
            last
            boundaryLinks
            maxButtons={5}
            items={100}
            activePage={page}
            onSelect={receiveClients}
          />
        </Col>
        <Col lgOffset={3} lg={4} mdOffset={2} md={4} sm={12}>
          <Form horizontal onSubmit={handleSubmit}>
            <FormGroup className='formGroupName'>
              <Col lg={9} md={8} sm={10} xs={10}>
                <Field type='text' className='form-control' name='name' id='name' placeholder='Name...'
                       component='input'/>
              </Col>
              <Col lg={3} md={4} sm={2} xs={2}>
                <Button className='submitButton' type='submit'>Filter</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Table responsive striped condensed hover className='clientsList'>
        <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Address</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {clients.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.contactPerson}</td>
              <td>{item.email || ' - '}</td>
              <td>{!!item.birthYear ? `${item.birthYear}.${item.birthMonth}.${item.birthDay}` : ' - '}</td>
              <td>{item.address || ' - '}</td>
              <td><Link to={`/client/${item.id}`}>Details</Link></td>
            </tr>
        )
        }
        </tbody>
      </Table>
      {requestError ? <p className='requestError'>ERROR: Can`t load clients list.</p> : null}
      {isFetching ? <p className='loading'>Loading...</p> : null}
    </Grid>
  )
}

export default reduxForm({form: 'clientsName'})(Clients)