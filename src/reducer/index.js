import {combineReducers} from 'redux'
import {clients} from '../actions/clients'
import {client} from '../actions/client'
import {reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  clients,
  client,
  form: formReducer
})

export default rootReducer