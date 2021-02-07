import {Dispatch} from 'react';

import {OnLoadData, StoredData} from '../storage/types';

export const AuthProviderAction = <const>['CHANGE_AUTH'];

export interface AuthProviderProps {
  version?: string;
  initialStatus?: string;
  onLoadData?: OnLoadData;
  onAuthError: () => string;
  onAuthSuccess: (stored: StoredData) => string;
}

export interface AuthProviderState {
  status?: string;
  data?: any;
}

export interface AuthProviderActionObject {
  type: typeof AuthProviderAction[number];
  payload?: AuthProviderState;
}

export type InitializeAuthProviderState = (status: string) => AuthProviderState;

export type Auth = [AuthProviderState, Dispatch<AuthProviderActionObject>];
