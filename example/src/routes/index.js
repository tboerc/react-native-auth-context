import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuth} from '../../../dist';
import {AUTH_STATUS} from '../config';

import Splash from '../screens/splash';
import Authorized from '../screens/authorized';
import Unauthorized from '../screens/unauthorized';

const Stack = createStackNavigator();

const Routes = () => {
  const {status} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {
          {
            [AUTH_STATUS.INITIAL]: (
              <Stack.Screen name="Splash" component={Splash} />
            ),

            [AUTH_STATUS.NONE]: (
              <Stack.Screen name="Unauthorized" component={Unauthorized} />
            ),

            [AUTH_STATUS.AUTHORIZED]: (
              <Stack.Screen name="Authorized" component={Authorized} />
            ),
          }[status]
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
