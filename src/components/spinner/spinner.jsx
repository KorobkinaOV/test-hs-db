import React from 'react';

import SpinnerImg from '../../images/spinner.svg';
import './spinner.css';

const Spinner = () => {
  return(
    <div className='container mt-5'>
      <img className='spinner' src={SpinnerImg}  alt='' />
    </div>
  );
}

export default Spinner;