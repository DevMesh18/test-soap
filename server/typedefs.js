const { gql} = require('apollo-server-express');

const typeDefs = gql`
extend type Query {
    greeting: String
  }
`;

module.exports = { typeDefs };