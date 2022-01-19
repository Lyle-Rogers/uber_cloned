/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($owner: String) {
    onCreateCar(owner: $owner) {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($owner: String) {
    onUpdateCar(owner: $owner) {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($owner: String) {
    onDeleteCar(owner: $owner) {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
      id
      createdAt
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      userOrdersId
      carOrdersId
      owner
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
      id
      createdAt
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      userOrdersId
      carOrdersId
      owner
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
      id
      createdAt
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      userOrdersId
      carOrdersId
      owner
    }
  }
`;
