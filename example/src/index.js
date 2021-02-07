import React from 'react';

import Routes from './routes';
import {AUTH_STATUS} from './config';
import {AuthProvider} from '../../dist';

const App = () => {
  const onLoadData = (stored) => {
    // You can do something when the stored data is loaded, like
    // return a new value based on the stored ones.
    // Just remeber you need to return a StoredData type value.

    return stored;
  };

  const onAuthSuccess = (stored) => {
    // Callback called if there is some stored data avaliable.
    // You can decide what to do with the stored data here, and then
    // you must return a status so your application can handle wich
    // screens it will show.

    return AUTH_STATUS.AUTHORIZED;
  };

  const onAuthError = () => {
    // Callback called if there is no stored data avaliable or if an error
    // occurred when trying to get the value from Async Storage.
    // You must return a status so your application can handle wich
    // screens it will show.

    return AUTH_STATUS.NONE;
  };

  return (
    <AuthProvider
      onLoadData={onLoadData}
      onAuthError={onAuthError}
      onAuthSuccess={onAuthSuccess}>
      <Routes />
    </AuthProvider>
  );
};

export default App;
