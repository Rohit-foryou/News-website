import React from 'react';
import loading from './loading.gif';
import giphy from './giphy.gif'

const Spinner = () => {
  return (
    <div className='text-center my-3'>
      <img src={giphy} alt="loading" style={{ width: '50px', height: '50px' }} />
    </div>
  );
}

export default Spinner;
