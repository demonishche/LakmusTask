import {combineReducers} from 'redux'
import {clients} from '../actions/clients'
import {reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  clients,
  form: formReducer
})

export default rootReducer