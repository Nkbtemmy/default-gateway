import responses from '../responses';

const pharmacists = {
  '/auth/signup': {
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
              name:"nkubito",
              gender:"male",
              age:12,
              email:"nkubito@gmail.com",
              password:"password",
              role:"Pharmacist",
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
  '/auth/login/pharmacists': {
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
              "password":"passw",
              "phoneNumber":"0787311654"
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
