// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PDFPolly, Home } = initSchema(schema);

export {
  PDFPolly,
  Home
};