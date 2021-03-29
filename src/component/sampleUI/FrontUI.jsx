import React, { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';

const FrontUI = () => {
  const Global = useContext(GlobalContext);
  const { mode } = Global;

  return (
    <div
      style={{
        height: '100vh',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      className={` ${
        mode ? 'bg-dark text-light' : 'bg-light text-dark'
      } text-center`}>
      <p style={{ padding: '21.5em 0' }}>
        Type something to see the movie result
      </p>
    </div>
  );
};

export default FrontUI;
