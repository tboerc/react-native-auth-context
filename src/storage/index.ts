import AsyncStorage from '@react-native-async-storage/async-storage';

import {OnLoadData, StoredData} from './types';

export class Storage {
  static async set({data, metadata}: StoredData) {
    const temp = {data, metadata: {...metadata, createdAt: new Date()}};

    await AsyncStorage.setItem('@react-native-auth-hook', JSON.stringify(temp));
  }

  static async get(onLoadData?: OnLoadData): Promise<StoredData> {
    try {
      const stored = await AsyncStorage.getItem('@react-native-auth-hook');

      if (stored !== null) {
        let parsed = JSON.parse(stored ?? '');

        if (typeof onLoadData === 'function') {
          parsed = onLoadData(parsed) as StoredData;
        }

        return parsed;
      }

      return {metadata: {}, data: null};
    } catch (e) {
      console.warn('Failed to retrieve AuthProvider data', e);

      return {metadata: {}, data: null};
    }
  }
}
