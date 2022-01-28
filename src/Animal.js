import React from 'react';

export default function Animal(props) {
  return <div className='Animal'>
    {props.animal === 'snek' && '🐍'}
    {props.animal === 't-rex' && '🦖'}
    {props.animal === 'cow' && '🐄'}  
    {props.animal === 'ladybug' && '🐞'}
  </div>;
}
