import createReducer from '../createReducer'

const REQUEST_CLIENTS='REQUEST_CLIENTS'
const SUCCESS_RECEIVED_CLIENTS='SUCCESS_RECEIVED_CLIENTS'
const FAILURE_RECEIVED_CLIENTS='FAILURE_RECEIVED_CLIENTS'
const CHANGE_CURRENT_PAGE='CHANGE_CURRENT_PAGE'
const SET_NAME='SET_NAME'

export const receiveClients = (page) => (dispatch, getState) => {
  dispatch({type: REQUEST_CLIENTS})
  dispatch({type: CHANGE_CURRENT_PAGE, page})

  const name = getState().clients.name
  let header = new Headers()
  header.append('Content-Type', 'application/json')
  let params = {name, '_start': (page - 1)*10, '_limit': 10}
  let url = 'http://api.demo.lakmus.org/api/clients'
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  fetch(url, {
    method: 'GET',
    header
  })
    .then(response => response.json())
    .then(data => dispatch({type: SUCCESS_RECEIVED_CLIENTS, clientsList: data}))
    .catch(error => dispatch({type: FAILURE_RECEIVED_CLIENTS, error}))
}

export const setName = ({name}) => dispatch => {
  dispatch({type: SET_NAME, name})
  dispatch(receiveClients(1))
}

const initialState = {
  isFetching: true,
  clientsList: [],
  page: 1,
  name: '',
  error: null
}

export const clients = createReducer(initialState, {
  [REQUEST_CLIENTS]: (state, action) => ({isFetching: true, clientsList: []}),
  [SUCCESS_RECEIVED_CLIENTS]: (state, {clientsList}) => ({clientsList, isFetching: false}),
  [FAILURE_RECEIVED_CLIENTS]: (state, {error}) => ({error, isFetching: false}),
  [SET_NAME]: (state, {name}) => ({name}),
  [CHANGE_CURRENT_PAGE]: (state, {page}) => ({page})
})
