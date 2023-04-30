import responses from '../responses';

const User = {
  '/users': {
    get: {
      tags: ['User'],
      security: [],
      summary: 'Get all users of E-Health System',
      parameters: [],
      consumes: ['application/json'],
      responses,
    },
  },
  '/users/physicians': {
        get: {
        tags: ['User'],
        security: [],
        summary: 'Get all physicians of E-Health System',
        parameters: [],
        consumes: ['application/json'],
        responses,
        },
    },
    '/users/patients': {
        get: {
        tags: ['User'],
        security: [],
        summary: 'Get all patients of E-Health System',
        parameters: [],
        consumes: ['application/json'],
        responses,
        },
    },
    '/users/pharmacists': {
        get: {
        tags: ['User'],
        security: [],
        summary: 'Get all pharmacists of E-Health System',
        parameters: [],
        consumes: ['application/json'],
        responses,
        },
    },
};

export default User;
