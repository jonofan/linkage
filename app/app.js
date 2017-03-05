import React from 'react';
import ReactDOM from "react-dom";
import { render } from 'react-dom'
import CredentialsForm from 'containers/CredentialsForm'
import CredentialsViewer from 'components/CredentialsViewer'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import AuthenticationContainer from 'containers/AuthenticationContainer'
import MainLayout from 'views/MainLayout'

class SideBySide extends React.Component {
    render() {
        return (
            <div>
                <CredentialsForm />
                <CredentialsViewer />
            </div>
        )
    }
}

export default class App extends React.Component {
    render() {
      return (
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={MainLayout} />
                    <Route path='/test' component={SideBySide} />
                </Router>
            </div>
        )     
    }
}

