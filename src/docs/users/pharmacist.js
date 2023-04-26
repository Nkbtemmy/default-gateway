import responses from '../responses';

const pharmacists = {
  '/auth/pharmacist/signup': {
    post: {
      tags: ['Pharmacist'],
      security: [],
      summary: 'Register as pharmacist to E-Health System',
      parameters: [
        {
          in: 'body',
          name: 'patient',
          required: true,
          schema: {
            example: {
              name:"ndatumumuremyi",
              gender:"male",
              age:12,
              email:"paterne@gmail.com",
              password:"password",
              role:"Physician",
              phoneNumber:"0786388768",
              username:"paterne"
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
  '/auth/pharmacist/login': {
    post: {
      tags: ['Pharmacist'],
      security: [],
      summary: 'Signin to E-Health System',
      parameters: [
        {
          in: 'body',
          name: 'pharmacist',
          required: true,
          schema: {
            example: {
              role:"Pharmacist",
              email:"paterne@gmail.com",
              password:"password"
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
};

export default pharmacists;
