// libs
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, SubmissionError } from 'redux-form';
import memoize from 'lru-memoize';
import Radium from 'radium';

// lib components
import FlatButton from 'material-ui/FlatButton';
import { TextField as RFMUITextField } from 'redux-form-material-ui';

// common
import Box from '../../../_common/Box';
import { fontFamilies } from '../../../_common/typography.js';

const apiEndpoint = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod';

export const fields = [ 'name', 'email', 'confirmEmail' ];

const validate =
  memoize(10)(
    values => ({
      // chained for improved ux (display one error at a time)
      name:
        !values.name && 'Please provide a name',
      email: values.name &&
        !values.email && 'Please provide an email address',
      confirmEmail: values.email && (
        (!values.confirmEmail && 'Please confirm your email address') ||
        (values.email !== values.confirmEmail && 'Oops, email addresses don\'t match')
      ),
    })
  )
;

const TextField = props =>
  <RFMUITextField {...{
    hintStyle: {textTransform: 'uppercase', fontSize: 12},
  ...props}}/>
;

const Heading = ({children, ...other}) =>
  <h2 style={{fontWeight: 'normal', textAlign: 'center', fontFamily: fontFamilies.heading}} {...other}>{children}</h2>
;

const Button = ({children, ...other}) =>
  <FlatButton primary style={{width: '100%', marginTop: 16}} {...other}>{children}</FlatButton>
;

const FormSubmitError = ({error, activity = 'submitting your request'}) =>
  <div style={{color: 'red', marginTop: 16}}>
    {error || `Oops, something went wrong ${activity}, please try again or contact support.`}
  </div>
;

class Form extends Component {
  // todo: pull out; convert to redux action
  handleSubmit = (values, dispatch) => {
    return new Promise((resolve, reject) =>
      fetch(`${apiEndpoint}/fake-auth`, {
        method: 'post',
        body: JSON.stringify(
          {
            name: values.name,
            email: values.email,
          }
        )
      })
      // parse response
      .then(response =>
        response.json().then(json => ({response, json}))
      )
      .then(({json, response}) => {
        if (!response.ok) {
          // got a validish error response (with optional message)
          reject(new SubmissionError({_error: json.errorMessage}));
          return;
        }

        // all good...
        resolve();
      })
      .catch(error => {
        // no valid response
        reject(new SubmissionError());
      })
    );
  };

  renderFooter() {
    const {error, submitting, handleSubmit} = this.props;

    if (submitting) {
      return (
        <Button label="Sending, please wait..." disabled/>
      );
    }

    return (
      <div>
        <Button label="Send" onTouchTap={handleSubmit(this.handleSubmit)}/>
        {error &&
          <FormSubmitError error={error} activity="sending your invite"/>
        }
      </div>
    );
  }

  render() {
    //const {containerWidth, containerHeight} = this.props;
    const {onRequestClose, email, reset, handleSubmit, submitting, submitSucceeded, submitFailed} = this.props;

    if (submitSucceeded) {
      return (
        <div>
          <Heading>All done!</Heading>
          <div>You will be one of the first to experience Broccoli & Co. when we launch.</div>
          <Button label="OK" onTouchTap={onRequestClose}/>
        </div>
      );
    }

    return (
      <div>
        <Heading>Request an invite</Heading>
        <Field name="name" component={TextField} hintText="Full name" fullWidth autoFocus />
        <Field name="email" component={TextField} hintText="Email" type="email" fullWidth />
        <Field name="confirmEmail" component={TextField} hintText="Confirm email" type="email" disabled={!email} fullWidth />
        {this.renderFooter()}
      </div>
    );
  }
}

const enhance = compose(
  connect(
    (state, ownProps) => ({
      initialValues: {},
      email: (formValueSelector('requestAnInvite'))(state, 'email'),
      ...ownProps,
    }),
  ),
  reduxForm({form: 'requestAnInvite', fields, validate}),
  Radium,
  // Dimensions,
);

export default enhance(Form);
