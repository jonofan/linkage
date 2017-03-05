import React from 'react'
import { connect } from 'react-redux'
import { Button, Panel } from 'react-bootstrap'
import { logout } from 'actions'

let CredentialsViewer = ({credentials, logout}) => {
    return(
        <div className='credential-viewer-container'>
            <Panel header={`You are logged in as ${credentials.username}.`} bsStyle='primary'>
                <Button bsStyle='primary' onClick={() => logout()}>Logout</Button>
            </Panel>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        credentials: state.authentication.credentials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

CredentialsViewer = connect(mapStateToProps, mapDispatchToProps)(CredentialsViewer)

export default CredentialsViewer