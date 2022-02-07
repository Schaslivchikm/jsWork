function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 20; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  User.prototype = {
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  users.push(user);
}



const filterArray = users.map(item => item).filter((item) => !item.isMale && item.age >= 6 && item.age <= 18)
console.log(filterArray);

const student = {

  name: "Rudolf",
  surname: "Alfredovich",
  gender: "Male",
  phone: "322-33-22",
  country: "Ukraine",
  city: "Uzhgorog",
  street: "Kvitucha",
  house: "24",

  fullName() {

    return this.name + " " + this.surname

  },

  fullAddress() {

    return this.country + ", " + this.city + ", " + this.street + " " + this.house

  }

}




class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getMaxSize() {
    const { length, width, height } = this.dimensions;
    if (typeof length !== 'number' || typeof width !== 'number' || typeof height !== 'number') {
      throw new TypeError('must be namber')
    }
    return `length: ${length}mm,  width: ${width}mm,  height: ${height}mm`
  }
  getAge() {
    return `${new Date().getFullYear() - this.manufactureDate} years`;
  }
}


const vehicleMaxSize = {
  length: 10,
  width: 20,
  height: 12,
}
const vehicle = new Vehicle(vehicleMaxSize, 'geely', 'ck2', new Date(2015))


class PassengerTransprot extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, passengersLimit, passengersCount) {
    super(dimensions, brand, model, manufactureDate);
    this.passengersLimit = passengersLimit;
    this.passengersCount = passengersCount;
  }
  get addPassenger() {
    this.passengersCount++;
    this.passengersLimit >= this.passengersCount;
  }
}

const passangerTransport = new PassengerTransprot(vehicleMaxSize, 'geely', 'ck2', 2018, 25, 21)


class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return (this.capacity >= weight)
  }
}

const freightTransport = new FreightTransport(vehicleMaxSize, 'geely', 'ck2', 2018, 3500)