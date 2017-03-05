import React from 'react'
import { connect } from 'react-redux'
import { saveCredentials } from 'actions'
import { Button, Form, FormControl, FormGroup, ControlLabel, Col } from 'react-bootstrap'



const FieldGroup = ({id, label, help, submitButton, value, ...props}) => {
    return(
        <FormGroup controlId={id} >
            <Col sm={3} componentClass={ControlLabel}>{label}</Col>
            <Col sm={6}>
                {submitButton &&
                    <Button type='submit' {...props} block>{value}</Button>
                }
                {!submitButton && 
                    <FormControl {...props} />
                }

            </Col>
        </FormGroup>
    )
}

let CredentialsForm = ({dispatch, credentials}) => {
    let inputUserName, inputPassword
    return(
    <div>
        <Form horizontal 
            onSubmit={e => {
                e.preventDefault()
                dispatch(saveCredentials({username: inputUserName.value, password: inputPassword.value}))
            }}
        >
            <FieldGroup
                id='formCtrlUsername'
                type='text'
                label='username'
                placeholder='username'
                inputRef={ thisInput => { inputUserName = thisInput } }
            />
            <FieldGroup
                id='formCtrlPassword'
                type='password'
                label='password'
                placeholder='password'
                inputRef={ thisInput => { inputPassword = thisInput } }
            />
            <FieldGroup
                id='formCtrlSave'
                type='submit'
                value='Login'
                bsStyle='primary'
                submitButton='true'
            />  
            
        </Form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        credentials: state.credentials
    }
    
}

CredentialsForm = connect(mapStateToProps)(CredentialsForm)

export default CredentialsForm