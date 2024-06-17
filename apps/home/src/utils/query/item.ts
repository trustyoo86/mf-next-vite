import { gql } from '@apollo/client';

const ItemQuery = gql`
    query Item($id: String) {
      item @rest(type: "Item", path: "/todos/{args.id}") {
        id
        userId
      }
    }
  `;

export { ItemQuery };

