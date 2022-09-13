
const { ApolloServer, gql, withFilter }  = require('apollo-server-express');

const resolvers = { 
    Query: {
    greeting: (root, args ,{MySoap}) => {
      console.log(MySoap)
      return 'Soap query Test';
    }
  },
};

module.exports = { resolvers };
