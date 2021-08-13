import React from "react";
import { Col, Container, Row } from "reactstrap";
import Tree from "./tree";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <img
              className="App-logo"
              src="https://f5v2v2k3.rocketcdn.me/wp-content/uploads/2020/11/press-starship-logos.png"
            />
            <h2>Welcome! Thanks for interviewing with Starship!</h2>
            <p>
              We're going to work with some trees today. Our goal with this
              exercise isn't to "stump" anyone with tricky business, but to give
              candidates a fair and uniform way to express themselves in code on
              a realistic-ish problem.
            </p>
            <p>
              In an hour, we expect everyone will get some of the way through
              this problem, and no one will get all the way through. If invited
              to an on-site interview, you'll pair with us wherever you left
              off, because we'd much rather see how you work on a problem you're
              familiar with and have had time to think about than on some clever
              whiteboard puzzle we spring on you.
            </p>
            <p>
              At this stage, we care most about:
              <ul>
                <li>Interpreting written specs (following instructions)</li>
                <li>
                  General familiarity with layout, data modeling, interaction,
                  network i/o
                </li>
                <li>Legible code</li>
              </ul>
            </p>
            <p>When in doubt, do less, better. :)</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className="App-instructions">
              <div className="App-step">🎨 First, with style </div>
              <div className="App-instructions">
                <ol>
                  <li>
                    Check out the file <code>./src/tree/index.js</code>.
                  </li>
                  <li>
                    Replace its inline "styling" with CSS in the{" "}
                    <code>./tree/index.css</code> file.
                  </li>
                  <li>
                    When the results look exactly the same as the original,
                    please commit changes to master and push to remote.
                  </li>
                  <li>
                    <i>
                      Bonus: Can we number every line such that{" "}
                      <code>root</code> starts with "1" and <code>ant</code>{" "}
                      starts with 1.1 and ... <code>elephant</code> starts with
                      1.2.2.1? (Show work in a new commit.)
                    </i>
                  </li>
                </ol>
              </div>
              <div className="App-step">🔢 Next, with data. </div>
              <div className="App-instructions">
                <ol>
                  <li>
                    Check out the (empty) file <code>./src/data.json</code>.
                  </li>
                  <li>
                    Replace its emptiness with a JSON object that represents our
                    animal tree. It should capture just the values and
                    relationships currently onscreen after step one
                  </li>
                  <li>
                    Update <code>./tree/index.js</code> to use your JSON object
                    to draw the animal tree instead of the your (styled) inline
                    text.
                  </li>
                  <li>
                    When the results look exactly the same as the original,
                    please commit changes and push to remote.
                  </li>
                </ol>
              </div>
              <div className="App-step">✨ Let's add interactions </div>
              <div className="App-instructions">
                <ol>
                  <li>
                    Add a text input field below the last element in each level,
                    at the correct indentation level. For example, at level 0
                    the text input should be below 'frog' but vertically inline
                    with 'root'. At level 1, it should be below 'frog' and
                    inline with 'frog'. At level 2 it should be below 'elephant'
                    but vertically inline with 'dog'. At level 3 it should be
                    below 'elephant' and inline with 'elephant'
                  </li>
                  <li>
                    When someone types a new word in the text box and hits
                    enter, add that word to the tree and redraw it.(Do not worry
                    about persisting this data)
                  </li>
                  <li>
                    Add a ❌ after every element on the tree. When a user clicks
                    the ❌, remove that node.
                  </li>
                  <li>
                    When you can add and remove items from the tree, commit your
                    changes and push to remote.
                  </li>
                </ol>
              </div>
              <div className="App-step">✨ Persistence </div>
              <div className="App-instructions">
                <p>
                  It is not expected that you start or complete this section in
                  the estimated hour. We can go over what you've done and then
                  pair to finish up the remaining sections.
                </p>
                <p>
                  This step uses the <code>data.json</code> file used in
                  previous steps to generate a GraphQL schema to query from.
                </p>
                <ol>
                  <li>
                    In a separate terminal run <code>npm run server</code>. Then
                    open up your browser to{" "}
                    <a
                      href="http://localhost:3001/graphql"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://localhost:3001/graphql
                    </a>{" "}
                    to make sure you can query the data from the{" "}
                    <code>data.json</code> file with GraphQL. If, at any point,
                    you need to reset the query data just restart the server to
                    reload the data from the <code>data.json</code> file.
                  </li>
                  <li>
                    Update your code to query from the GraphQL API instead of
                    directly from <code>data.json</code>. There is already an
                    Apollo Client setup in the <code>App.js</code> file. Feel
                    free to reference the{" "}
                    <a
                      href="https://www.apollographql.com/docs/react/data/queries/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apollo Query documentation
                    </a>{" "}
                    for examples on how to setup a query in React.
                  </li>
                  <li>
                    When you can query items from the GraphQL server, commit
                    your changes and push to remote.
                  </li>
                  <li>
                    <i>
                      Bonus: Update your code to persist adding nodes at the
                      root level (level 0) of the tree with the GraphQL API.
                      Feel free to reference the{" "}
                      <a
                        href="https://www.apollographql.com/docs/react/data/mutations/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apollo Mutations documentation
                      </a>{" "}
                      for examples on how to setup a mutation in React. (Show
                      work in a new commit.)
                    </i>
                  </li>
                  <li>
                    <i>
                      Bonus: Update your code to persist removing nodes from the
                      tree with the GraphQL API. (Show work in a new commit.)
                    </i>
                  </li>
                </ol>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <Tree />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
