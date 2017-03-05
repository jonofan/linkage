import React from 'react'
import {} from 'react-bootstrap'
import { connect } from 'react-redux'
import AuthenticationContainer from 'containers/AuthenticationContainer'


let MainLayout = () => {
    return(
        <div id="main-layout">
            <AuthenticationContainer />
        </div>
    )
}


MainLayout = connect()(MainLayout)

export default MainLayout