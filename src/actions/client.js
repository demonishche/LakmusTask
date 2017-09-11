import createReducer from '../createReducer'

const REQUEST_CLIENT_INFO='REQUEST_CLIENT_INFO'
const SUCCESS_RECEIVED_CLIENT_INFO='SUCCESS_RECEIVED_CLIENT_INFO'
const FAILURE_RECEIVED_CLIENT_INFO='FAILURE_RECEIVED_CLIENT_INFO'

export const receiveClientInfo = clientId => dispatch => {
  dispatch({type: REQUEST_CLIENT_INFO})

  let header = new Headers()
  header.append('Content-Type', 'application/json')
  let url = `http://api.demo.lakmus.org/api/clients/${clientId}`
  fetch(url, {
    method: 'GET',
    header
  })
    .then(response => response.json())
    .then(data => dispatch({type: SUCCESS_RECEIVED_CLIENT_INFO, clientInfo: data}))
    .catch(error => dispatch({type: FAILURE_RECEIVED_CLIENT_INFO, error: true}))
}

const initialState = {
  isFetching: true,
  clientInfo: {},
  error: false
}

export const client = createReducer(initialState, {
  [REQUEST_CLIENT_INFO]: (state, action) => ({isFetching: true, clientInfo: {}, error: false}),
  [SUCCESS_RECEIVED_CLIENT_INFO]: (state, {clientInfo}) => ({clientInfo, isFetching: false}),
  [FAILURE_RECEIVED_CLIENT_INFO]: (state, {error}) => ({error, isFetching: false})
})