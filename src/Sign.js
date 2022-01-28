import React from 'react';

export default function Sign({ isOpen }) {
  return <div>
    { isOpen ? 'The animals are caged, enter!' : 'The animals are loose. DO NOT ENTER!'}
  </div>;
}
