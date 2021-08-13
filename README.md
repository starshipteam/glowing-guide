# Start here

1. Clone this repo.
1. Create a git branch with your last name and first initial, i.e. `skywalker-l`, and push it up to this repo.
    * `git checkout -b skywalker-l`
    * `git push --set-upstream origin skywalker-l`
1. Run `npm install`
1. Run `npm start`
1. Open http://localhost:3000/ to see your app.
1. Follow the instructions in your browser.

---

## GraphQL Server Notes

When you get to the persistence section of the challenge, it will have you start the server.
The server uses [json-graphql-server](https://github.com/marmelab/json-graphql-server) to turn the data.json file into a graphQL interface.
The one thing to be aware of is that it expects a high-level property to represent the Type of objects, and a value with an array of objects to build the schema from.

For example:

```
{
  "planets": [
    {
      name: "Earth",
      diameter: 12756
    },
    {
      name: "Mars",
      diameter: 6792
    },
  ]
}
```

will generate a schema like:

```
type Planet {
  name: String!
  diameter: Int!
}

type Query {
  allPlanets(...): [Planet]
}
```

If you run into any issues getting the GraphQL schema up an running, please don't take too much time. We'll be glad to help in the interview.
