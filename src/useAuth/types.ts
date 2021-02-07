import {Metadata} from '../storage/types';

export type SetAuthConfig = {
  status?: string;
  store: boolean;
  replace: boolean;
  metadata: Metadata;
};

export type SetAuth = (data: any, config?: SetAuthConfig) => Promise<void>;
