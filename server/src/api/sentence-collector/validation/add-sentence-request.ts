import { AllowedSchema } from 'express-json-validator-middleware';

export const AddSentenceRequest: AllowedSchema = {
  type: 'object',
  required: ['sentence', 'source', 'localeId', 'localeName'],
  properties: {
    sentence: {
      type: 'string',
    },
    source: {
      type: 'string',
    },
    localeId: {
      type: 'integer',
      minimum: 1,
    },
    localeName: {
      type: 'string',
    },
  },
};
