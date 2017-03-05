import React from 'react'
import CredentialsForm from 'containers/CredentialsForm'
import CredentialsViewer from 'components/CredentialsViewer'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'


let AuthenticationContainer = ({ isLoggedIn }) => {
    console.log(isLoggedIn)
    return (
        <div id='auth-container'>
            {isLoggedIn &&              
                    <CredentialsViewer />
            }
            {!isLoggedIn && 
                    <CredentialsForm />
            }
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoggedIn: state.authentication.isLoggedIn
    }
}

AuthenticationContainer = connect(mapStateToProps)(AuthenticationContainer)

export default AuthenticationContainer