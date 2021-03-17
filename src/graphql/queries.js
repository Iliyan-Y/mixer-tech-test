/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSaves = /* GraphQL */ `
  query GetSaves($id: ID!) {
    getSaves(id: $id) {
      id
      name
      description
      link
      username
      createdAt
      updatedAt
    }
  }
`;
export const listSavess = /* GraphQL */ `
  query ListSavess(
    $filter: ModelSavesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        link
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
