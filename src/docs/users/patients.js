import responses from '../responses';

const patients = {
  '/auth/register': {
    post: {
      tags: ['Patients'],
      security: [],
      summary: 'Register as patient to E-Health System',
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
  '/auth/login/patients': {
    post: {
      tags: ['Patients'],
      security: [],
      summary: 'Signin to E-Health System',
      parameters: [
        {
          in: 'body',
          name: 'patient',
          required: true,
          schema: {
            example: {
              "password":"passw",
              "username":"thunder"
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
};

export default patients;
