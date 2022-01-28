import React from 'react';

export default function (props) {
  return <div className='Animal'>
      {props.animal === 'Snek' && '🐍'}
      {props.animal ===  'T-Rex' && '🦖'}
      {props.animal === 'Cow' && '🐄'}  
      {props.animal === 'Ladybug' && '🐞'}
  </div>;
}
