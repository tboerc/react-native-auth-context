export interface StoredData {
  data: any;
  metadata: Metadata;
}

export type Metadata = {
  version?: string;
  createdAt?: Date;
  [key: string]: any;
};

export type OnLoadData = (data: StoredData) => StoredData;
