// libs
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Radium from 'radium';

// lib components
import FlatButton from 'material-ui/FlatButton';
import { TextField as RFMUITextField } from 'redux-form-material-ui';

// common
import { fontFamilies } from '../../../_common/typography.js';

// actions - todo: migrate to redux
import submit from './submit';
import validate from './validate';

// child components - pull out when others need
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

export class Form extends Component {
  renderFooter() {
    const {error, submitting, handleSubmit} = this.props;

    if (submitting) {
      return (
        <Button label="Sending, please wait..." disabled/>
      );
    }

    return (
      <div>
        <Button label="Send" onTouchTap={handleSubmit(submit)}/>
        {error &&
          <FormSubmitError error={error} activity="sending your invite"/>
        }
      </div>
    );
  }

  render() {
    const {onRequestClose, email, submitSucceeded} = this.props;

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
      email: (formValueSelector('RequestInvite'))(state, 'email'),
      ...ownProps,
    }),
  ),
  reduxForm({form: 'RequestInvite', validate}),
  Radium,
);

export default enhance(Form);
