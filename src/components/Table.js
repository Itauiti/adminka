import React from 'react';
import Cell from './Cell'

function Table() {
  return (
    <div className="table">
      <div className="table__actions"></div>
      <Cell />
      <div className="table__display"></div>

    </div>
  );
}

export default Table;