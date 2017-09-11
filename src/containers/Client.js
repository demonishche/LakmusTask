import React from 'react'
import {receiveClientInfo} from '../actions/client'
import {connect} from 'react-redux'
import Client from '../components/Client'
import {bindActionCreators} from 'redux'

class ClientContainer extends React.Component {
  componentWillMount() {
    const clientId = this.props.match.params.clientId
    this.props.receiveClientInfo(clientId)
  }

  render() {
    return <Client {...this.props}/>
  }
}

const mapStateToProps = ({client}) => ({
  ...client
})

const mapDispatchToProps = dispatch => bindActionCreators({receiveClientInfo}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer)
