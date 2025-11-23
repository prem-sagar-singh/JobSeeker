import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Job Helper API',
      version: '1.0.0',
      description: 'API docs for Job Helper',
    },
    servers: [
      { url: 'http://localhost:3001', description: 'Local server' }
    ],
    tags:[
      {
        name: 'Jobs',
        description: 'Endpoints related to job listings'
      },
      {
        name: 'Home',
        description: 'Endpoints related to companies'
      }
      ,{
        name: 'Users',
        description: 'Endpoints related to user management'
      }
    ]
  },
  // Adjust paths to where your route/controller files with JSDoc are
  apis: ['src/routes/*.ts', 'src/controllers/*.ts'],
};

const specs = swaggerJsdoc(options);
export default specs;