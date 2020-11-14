// dependencies
const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose"); // ORM library

// relative imports
const typeDefs = require("./graphql/typesDefs");
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config.js");

const pubsub = new PubSub();
const PORT = process.env.port || 5000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });

// ! run server: node index
// ! nodemon: cd into client then npm start
