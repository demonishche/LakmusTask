import React from 'react'
import {receiveClients, setName, changeCurrentPage} from '../actions/clients'
import {connect} from 'react-redux'
import Clients from '../components/Clients'
import {bindActionCreators} from 'redux'

class ClientsContainer extends React.Component {
  componentWillMount() {
    const page = this.props.match.params.page
    if (!!page) {
      this.props.receiveClients(page)
      this.props.changeCurrentPage(+page)
      return true
    }

    this.props.receiveClients(1)
  }

  render() {
    console.log(this.props.error)
    return <Clients error={this.props.error} {...this.props}/>
  }
}

const mapStateToProps = ({clients}) => ({
  clients: clients.clientsList,
  requestError: clients.error,
  ...clients
})

const mapDispatchToProps = dispatch => bindActionCreators({onSubmit: setName, receiveClients, changeCurrentPage}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer)
