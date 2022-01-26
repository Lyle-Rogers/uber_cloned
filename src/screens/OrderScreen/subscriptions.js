export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
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
    }
  }
`;

export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($owner: String) {
    onUpdateCar(owner: $owner) {
      
    }
  }
`;
