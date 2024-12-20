// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("data/db.json");
// const middleware = jsonServer.defaults();

// const cors = require("cors");
// server.use(cors());
// server.use(middleware);
// server.use(router);

// server.listen(3000, () => {
//   console.log("Server is Running at http://localhost:3000");
// });


const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middleware = jsonServer.defaults();

// Configure CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Enable CORS
server.use(cors(corsOptions));

// Use default middleware (e.g., logger, static)
server.use(middleware);

// Use JSON Server router
server.use(router);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
