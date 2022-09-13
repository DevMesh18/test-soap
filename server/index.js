const { ApolloServer, gql } = require('apollo-server');
const { findAndParseConfig} = require('@graphql-mesh/cli');
const { getMesh} = require('@graphql-mesh/runtime');

async function main() {
const meshConfig = await findAndParseConfig();
const { schema, contextBuilder, rawSources } = await getMesh(meshConfig); 

const server = new ApolloServer({ schema,
  context: contextBuilder,
 });

server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
}

main().catch(err => console.error(err));