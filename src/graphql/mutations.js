/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          carId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          carId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          carId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          owner
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          carId
          createdAt
          updatedAt
          owner
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          carId
          createdAt
          updatedAt
          owner
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          carId
          createdAt
          updatedAt
          owner
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
