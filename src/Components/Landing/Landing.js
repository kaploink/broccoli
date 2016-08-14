// libs
import React, { Component } from 'react';

// lib components
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dimensions from 'react-dimensions';
import ReactPlayer from 'react-player';

import TextField from 'material-ui/TextField';

// common
import Box from '../_common/Box';
import { fontFamilies } from '../_common/typography.js';

// children
import RequestAnInvite from './RequestAnInvite/RequestAnInvite';

class Landing extends Component {
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
    const {containerWidth, containerHeight} = this.props;

    return (
      <Box column style={{height: '100%', color: 'white', fontFamily: 'Roboto, sans-serif'}}>
        {/*<Box style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, zIndex: -1, paddingBottom: '56.25%';}}>*/}
        <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: -1, overflow: 'hidden'}}>
          <div style={{position: 'relative', paddingBottom: '56.25%'}}>
            <ReactPlayer url='https://www.youtube.com/watch?v=mcixldqDIEQ' playing loop volume={0} youtubeConfig={{playerVars: {start: 10, modestbranding: 0}}} height="100%" width="100%" style={{width: '100%', height: '100%', position: 'absolute'}} />
            {/*<YouTube videoId="mcixldqDIEQ" playing loop volume={0} opts={{playerVars: {start: 10, modestbranding: 0, autoplay: 1, rel: 0, loop: 1}}} height="100%" width="100%" style={{width: '100%', height: '100%', position: 'absolute'}} />*/}



            {/*<iframe src="https://www.youtube.com/embed/Kb8CW3axqRE?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen style={{width: '100%', position: 'absolute', height: '100%', left: 0, top: 0}}></iframe>*/}
            {/*<iframe width={containerWidth} height={containerHeight * 2} src="https://www.youtube.com/embed/Kb8CW3axqRE?controls=0&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" style={{width: '100%', height: '100%', position: 'absolute'}} frameborder="0" allowfullscreen></iframe>*/}
            {/*<iframe src="https://www.youtube.com/embed/Kb8CW3axqRE?controls=0&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" style={{width: '100%', height: '100%', position: 'absolute'}} frameborder="0" allowfullscreen></iframe>*/}
            {/*<iframe src="https://www.youtube.com/embed/fsieCzPNqJM?controls=0&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=1&playlist=fsieCzPNqJM&start=10" style={{width: '100%', height: '100%', position: 'absolute'}} frameBorder="0" allowFullScreen></iframe>*/}
          </div>
        </div>

        <Box>
          {/*
            https://www.youtube.com/watch?v=mcixldqDIEQ
            https://www.youtube.com/watch?v=aPAHrdkV0Ds
            https://www.youtube.com/watch?v=fsieCzPNqJM
            https://www.youtube.com/watch?v=2SltjWsh7Sk
            https://www.youtube.com/watch?v=Kb8CW3axqRE

          */}
        </Box>
        <Box style={_s.header} column padding="20px 20%">
          Broccoli & Co.
        </Box>
        <Box style={_s.main} column flex="1 0 0" justifyContent="center" alignItems="center" textAlign="center">
          <h1 style={_s.title}>A better way<br/> to enjoy every day.</h1>
          <p style={_s.hook}>Be the first to know when we launch.</p>
          <div>
            <RequestAnInvite/>
          </div>

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
  header: {
    opacity: 0.75,
    textTransform: 'uppercase',
    // background: 'rgba(0,0,0,0.5)',
    fontFamily: 'BioRhyme, serif',
  },
  title: {
    // textAlign: 'center',
    fontFamily: fontFamilies.heading,
    fontWeight: 'normal',
    lineHeight: 1.2,
    fontSize: 36,
  },
  hook: {
    // textAlign: 'center',
  },
  main: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
  },
  footer: {
    opacity: 0.5,
    // background: 'rgba(0,0,0,0.5)',
    fontSize: 12,
    fontStyle: 'italic',
  },
};
