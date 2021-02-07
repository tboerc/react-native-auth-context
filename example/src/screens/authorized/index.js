import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {useAuth} from '../../../../dist';

const Authorized = ({route: {name}}) => {
  const {status, data, setAuth} = useAuth();

  const onPress = () => {
    setAuth(null, {status: 'NONE', store: true});
  };

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.bold}>SCREEN: </Text>
        {name}
      </Text>

      <Text>
        <Text style={styles.bold}>STATUS: </Text>
        {status}
      </Text>

      <Text>
        <Text style={styles.bold}>DATA: </Text>
        {JSON.stringify(data)}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.label}>UNAUTHORIZE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authorized;
