import React 'react';
import loading from './loading.gif';

const Spinner = ()=>{
  
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="loading" style={{ width: '50px', height: '50px' }} />
      </div>
    );
  
}

export default Spinner
