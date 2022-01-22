import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PDFPollyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PDFPolly {
  readonly id: string;
  readonly userId?: string;
  readonly bucketName?: string;
  readonly documentStatus?: string;
  readonly docObjectName?: string;
  readonly pollyObjectName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PDFPolly, PDFPollyMetaData>);
  static copyOf(source: PDFPolly, mutator: (draft: MutableModel<PDFPolly, PDFPollyMetaData>) => MutableModel<PDFPolly, PDFPollyMetaData> | void): PDFPolly;
}

export declare class Home {
  readonly id: string;
  readonly address?: string;
  readonly image_url?: string;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}