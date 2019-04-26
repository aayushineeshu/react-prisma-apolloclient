import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from "apollo-boost";
import * as serviceWorker from './serviceWorker';
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';
import MyappRoutes from "./MyappRoutes";

const client = new ApolloClient({
    uri: "https://sherpa-prisma-git-master.jaikant.now.sh/"
});

client
    .query({
        query: gql`
      {
        agencies {
          owner {
            firstName
            lastName
          }
        }
      }
    `
    })
    .then(result => console.log("result"));
ReactDOM.render(
    <ApolloProvider client={client}>
        <MyappRoutes />
    </ApolloProvider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
