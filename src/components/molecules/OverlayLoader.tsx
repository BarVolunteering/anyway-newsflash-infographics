import React, { FC } from 'react';
import Loader from '../atoms/Loader';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { borderColor } from '../../style/_globals';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: borderColor,
    opacity: 0.5,
    zIndex: 2,
    display: (show) => (show ? 'flex' : 'none'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IProps {
  show: boolean;
}

const OverlayLoader: FC<IProps> = ({ show }) => {
  // passing props to useStyles - see demo: https://codesandbox.io/s/giubj?file=/demo.js:224-229
  const classes = useStyles(show);
  return (
    <Box className={classes.root}>
      <Loader />
    </Box>
  );
};
export default OverlayLoader;
