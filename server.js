import jsonServer from 'json-server';

const server = jsonServer.create();
const port = process.env.PORT || 4040;
const router = jsonServer.router('src/api/db.json');
const middlewares = jsonServer.defaults( { noCors: true } );

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});