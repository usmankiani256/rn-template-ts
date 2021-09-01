import { gql } from 'graphql-request'

export const FetchRandomUser = gql`
  query FETCH_RANDOM_USER($id: ID!) {
    user(id: $id) {
      id
      nam
      username
      email
      phone
    }
  }
`
