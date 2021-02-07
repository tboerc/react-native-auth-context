import {AuthProviderState, AuthProviderActionObject, InitializeAuthProviderState} from './AuthProvider/types';

export const initializeState: InitializeAuthProviderState = (status: string) => ({
  status,
  data: null,
});

export const reducer = (state: AuthProviderState, {type, payload}: AuthProviderActionObject) => {
  switch (type) {
    case 'CHANGE_AUTH':
      return {status: payload?.status ?? state.status, data: payload?.data};
    default:
      return state;
  }
};
