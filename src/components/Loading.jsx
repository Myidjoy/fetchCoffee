import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <div className='loading'>
      <CircularProgress disableShrink />
    </div>
  );
};

export default Loading;