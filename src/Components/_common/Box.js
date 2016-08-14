// libs
import Radium from 'radium';
import React from 'react';

function Box({
  column,
  flexDirection,
  flex,
  justifyContent,
  alignItems,
  textAlign,
  width,
  height,
  padding,
  style,
  children,
  ...other,
}) {
  return (
    <div style={{
      display: 'flex',
      position: 'relative',
      flex,
      flexDirection: (column && 'column') || flexDirection,
      justifyContent,
      alignItems,
      textAlign,
      width,
      height,
      padding,
      ...style,
    }} {...other}>{children} {flexDirection}</div>
  );
}

export default Radium(Box);
