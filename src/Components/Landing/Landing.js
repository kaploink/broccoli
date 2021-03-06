// libs
import React, { Component } from 'react';

// lib components
import Dimensions from 'react-dimensions';

// common
import Box from '../_common/Box';
import { fontFamilies } from '../_common/typography.js';

// children
import RequestInvite from './RequestInvite/RequestInvite';

import background from './_assets/background.jpg';

class Landing extends Component {
  render() {
    const {containerWidth, containerHeight} = this.props;

    return (
      <Box column style={_s.container}>
        <Box style={_s.header} column padding="20px 20%">
          Broccoli & Co.
        </Box>
        <Box style={_s.main} column flex="1 0 0" justifyContent="center" alignItems="center" textAlign="center">
          <h1 style={_s.title}>A better way<br/> to enjoy every day.</h1>
          <p style={_s.info}>Be the first to know when we launch.</p>
          <RequestInvite/>
        </Box>
        <Box style={_s.footer} column alignItems="center" textAlign="center" padding="20px">
          Made with ♥ in Melbourne.<br/>
          © {(new Date()).getFullYear()} Broccoli & Co. All rights reserved.
        </Box>
      </Box>
    );
  }
}

export default Dimensions()(Landing);

const _s = {
  container: {
    height: '100%',
    color: 'white',
    textShadow: 'black 0px 0px 10px, black 0px 0px 50px',
    fontFamily: fontFamilies.normal,
    background: `url(${background}) center center`,
    backgroundSize: 'cover',
  },
  header: {
    opacity: 0.75,
    textTransform: 'uppercase',
    fontFamily: 'BioRhyme, serif',
  },
  main: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
  },
  title: {
    fontFamily: fontFamilies.heading,
    fontWeight: 'normal',
    lineHeight: 1.2,
    fontSize: 36,
  },
  info: {
  },
  footer: {
    opacity: 0.5,
    fontSize: 12,
    fontStyle: 'italic',
  },
};
