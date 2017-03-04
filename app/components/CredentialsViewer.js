import React from 'react'
import { connect } from 'react-redux'

let CredentialsViewer = ({credentials}) => {
    return(
        <div>
            username: <label>{credentials.username}</label><br />
            password: <label>{credentials.password}</label> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        credentials: state.credentials
    }
}

CredentialsViewer = connect(mapStateToProps)(CredentialsViewer)

export default CredentialsViewer