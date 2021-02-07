import React, {useEffect, useReducer} from 'react';

import {Storage} from '../storage';
import {AuthProviderProps} from './types';
import {AuthContext} from '../AuthContext';
import {initializeState, reducer} from '../state';

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  children,
  onLoadData,
  onAuthError,
  onAuthSuccess,
  version = '1.0',
  initialStatus = 'INITIAL',
}) => {
  const [state, dispatch] = useReducer(reducer, initializeState(initialStatus));

  useEffect(() => {
    const init = async () => {
      try {
        const stored = await Storage.get(onLoadData);

        if (stored.data !== null && stored.metadata.version === version) {
          dispatch({
            type: 'CHANGE_AUTH',
            payload: {status: await Promise.resolve(onAuthSuccess(stored)), data: stored.data},
          });
        } else {
          dispatch({
            type: 'CHANGE_AUTH',
            payload: {status: await Promise.resolve(onAuthError()), data: null},
          });
        }
      } catch (e) {
        console.warn('Failed to initialize AuthProvider', e);

        dispatch({
          type: 'CHANGE_AUTH',
          payload: {status: await Promise.resolve(onAuthError()), data: null},
        });
      }
    };

    init();
  }, []);

  return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>;
};
