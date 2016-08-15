// libs
import React, { Component } from 'react';

// lib components
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

// common
import Box from '../../_common/Box';

// children
import Form from './Form/Form.js';

export default class RequestInvite extends Component {
  // todo: move to redux state
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <Box>
        <RaisedButton label="Request an invite" onTouchTap={this.handleOpen} />
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <Form onRequestClose={this.handleClose} />
        </Dialog>
      </Box>
    );
  }
}

// export default Dimensions()(RequestInvite);
export default RequestInvite;
