const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create Customers, Restaurants and Reservations

  const createCustomers = async () => {
    const customers = [
        {name: "Tony"},
        {name: "Rebecca"},
        {name: "Samantha"},
        {name: "Fidias"},
    ]
    await prisma.customer.createMany({data: customers});
  };

  const createRestaurants = async () => {
    const restaurants = [
        {name: "Benihana"},
        {name: "Fuji Grill"},
        {name: "Chipotle"},
    ]
    await prisma.restaurant.createMany({data: restaurants});
  };

  const createReservations = async () => {
    const reservations = [
        {customerId: 1, restaurantId: 1, partyCount: 2, date: new Date ("2025-05-01") },
        {customerId: 2, restaurantId: 2, partyCount: 4, date: new Date ("2025-05-02") },
        {customerId: 3, restaurantId: 3, partyCount: 6, date: new Date ("2025-05-03") },
    ]
    await prisma.reservation.createMany({data: reservations})
  }

  await createCustomers();
  await createRestaurants();
  await createReservations();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });