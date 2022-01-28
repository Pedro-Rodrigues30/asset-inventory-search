import React from "react";
import AssetInventory from "components/AssetInventory";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HvProvider } from "@hitachivantara/uikit-react-core";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
  credentials: "omit",
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <HvProvider>
      <AssetInventory />
    </HvProvider>
  </ApolloProvider>
);

export default App;
