import responses from '../responses';

const patients = {
  '/auth/patients/signup': {
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
  '/auth/patients/login': {
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
              role:"Patient",
              email: 'admin@rinda.com',
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

export default patients;
