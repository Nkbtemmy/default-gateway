import responses from '../responses';

const physicians = {
  '/auth/physician/signup': {
    post: {
      tags: ['Physician'],
      security: [],
      summary: 'Register as physician to E-Health System',
      parameters: [
        {
          in: 'body',
          name: 'patient',
          required: true,
          schema: {
            example: {
              name:"nkubito",
              gender:"male",
              age:12,
              email:"nkubito@gmail.com",
              password:"password",
              role:"Physician",
              phoneNumber:"0786388768",
              username:"nkubito"
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
  '/auth/login/physicians': {
    post: {
      tags: ['Physician'],
      security: [],
      summary: 'Signin to E-Health System',
      parameters: [
        {
          in: 'body',
          name: 'Physician',
          required: true,
          schema: {
            example: {
              email: 'admin@hospital.com',
              password: 'admin123!',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
};

export default physicians;