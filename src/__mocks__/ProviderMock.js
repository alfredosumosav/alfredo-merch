import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const ProviderMock = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>{children}</BrowserRouter>
    </AppContext.Provider>
  );
};

export default ProviderMock;
