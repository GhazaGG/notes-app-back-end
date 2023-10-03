/* eslint-disable import/no-extraneous-dependencies */
const Hapi = require('@hapi/hapi');
const routes = require('./notes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://notesapp-v1.dicodingacademy.com/'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
