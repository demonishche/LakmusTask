import React from 'react'
import {PageHeader, Grid, Row, Col} from 'react-bootstrap'
import './Client.css'

const Client = ({clientInfo, isFetching, error}) => {
  return (
    <Grid>
      <PageHeader>Client</PageHeader>
      {isFetching ? <p className='loading'>Loading...</p> : (error ?
        <p className='requestError'>ERROR: Can`t load clientInfo</p> : (
        <Row>
          <Col lgOffset={4} mdOffset={4} smOffset={4} xsOffset={3}>
            <ul className='clientInfo'>
              <li className='clientInfoItem'>ID: {clientInfo.id}</li>
              <li className='clientInfoItem'>Name: {clientInfo.name}</li>
              <li className='clientInfoItem'>Gender: {clientInfo.gender}</li>
              <li className='clientInfoItem'>
                Birthday: {!!clientInfo.birthYear ? `${clientInfo.birthYear}.${clientInfo.birthMonth}.${clientInfo.birthDay}` : ' - '}</li>
              <li className='clientInfoItem'>Phone: {clientInfo.contactPerson || ' - '}</li>
              <li className='clientInfoItem'>Email: {clientInfo.email || ' - '}</li>
              <li className='clientInfoItem'>Card number: {clientInfo.cardNumber || ' - '}</li>
              <li className='clientInfoItem'>Address: {clientInfo.address || ' - '}</li>
            </ul>
          </Col>
        </Row>
      ))}
    </Grid>
  )
}

export default Client