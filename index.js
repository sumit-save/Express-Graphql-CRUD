const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const rootValue = require("./rootValue");

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true
}));

app.listen(8000);
console.log("Graphql Server Running On: http://localhost:8000/graphql");
