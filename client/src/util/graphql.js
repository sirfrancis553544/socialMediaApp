import gql from "graphql-tag";

// added in the word query 
export const FETCH_POSTS_QUERY = gql`
  {
    query { 
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
