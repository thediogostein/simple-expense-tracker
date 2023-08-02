import React from 'react';

function TotalAmount({ total }) {
  return (
    <div>
      <h2>Total gasto</h2>
      <p>R$ {total}</p>
    </div>
  );
}

export default TotalAmount;
