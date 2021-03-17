/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSaves = /* GraphQL */ `
  mutation CreateSaves(
    $input: CreateSavesInput!
    $condition: ModelSavesConditionInput
  ) {
    createSaves(input: $input, condition: $condition) {
      id
      name
      description
      link
      createdAt
      updatedAt
    }
  }
`;
export const updateSaves = /* GraphQL */ `
  mutation UpdateSaves(
    $input: UpdateSavesInput!
    $condition: ModelSavesConditionInput
  ) {
    updateSaves(input: $input, condition: $condition) {
      id
      name
      description
      link
      createdAt
      updatedAt
    }
  }
`;
export const deleteSaves = /* GraphQL */ `
  mutation DeleteSaves(
    $input: DeleteSavesInput!
    $condition: ModelSavesConditionInput
  ) {
    deleteSaves(input: $input, condition: $condition) {
      id
      name
      description
      link
      createdAt
      updatedAt
    }
  }
`;
