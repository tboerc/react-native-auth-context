import React from 'react';

import {Auth} from './AuthProvider/types';

export const AuthContext = React.createContext<Auth | null>(null);
AuthContext.displayName = 'AuthContext';
