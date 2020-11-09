// dependencies
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose"); // ORM library

// relative imports
const typeDefs = require("./graphql/typesDefs");
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });

// ! run server: node index
// ! nodemon: cd into client then npm start
