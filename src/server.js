const express = require("express");
const { default: jsonGraphqlExpress } = require("json-graphql-server");

const data = require("./data.json");

const port = 3001;
const app = express();
app.use("/graphql", jsonGraphqlExpress(data));
app.listen(port);
