import {useContext, Dispatch, useCallback} from 'react';
import _ from 'lodash';

import {SetAuth} from './types';
import {Storage} from '../storage';
import {AuthContext} from '../AuthContext';
import {AuthProviderActionObject, AuthProviderState} from '../AuthProvider/types';

const DEFAULTS = {
  setAuthConfig: {
    store: false,
    replace: true,
    metadata: {
      version: '1.0',
    },
  },
};

export const useAuth = () => {
  const [state, dispatch] = useContext(AuthContext) as [AuthProviderState, Dispatch<AuthProviderActionObject>];

  const setAuth: SetAuth = useCallback(async (data, config) => {
    const mergedConfig = _.assign(DEFAULTS.setAuthConfig, config);
    const mergedData = mergedConfig.replace ? data : _.merge(state.data, data);

    if (mergedConfig.store) {
      await Storage.set({data: mergedData, metadata: mergedConfig.metadata});
    }

    dispatch({type: 'CHANGE_AUTH', payload: {data: mergedData, status: mergedConfig.status}});
  }, []);

  return {...state, setAuth};
};
