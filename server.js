const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use authentication middleware
server.db = router.db;
server.use(jsonServer.bodyParser);
server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("✅ JSON Server with Authentication is running on port 3000");
});
