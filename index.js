
const Student = function (firstName, lastName, age, city) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.city = city;
}

Student.prototype = {
  changeCity: function (newCity) {
    this.city = newCity;
  },
  changeCounry: function (newCountry) {
    this.country = newCountry;
  }
}


const StudentInfo = new Student('Ivan', 'Ivanov', 21, 'Zaporozhe');
StudentInfo.country = 'Ukraine';


// функция которая запрашивает число и проверяет простое оно (просто число делиться без остатка на себя и на единицу)






function getArea(width, height) {
  return width * height
}

console.log(getArea(10, 3));

// const getAreaExp = function (width, height) {
//   return width * height;
// }




function isCorectRectangle(a, b, c) {
  const corectRectangle = (a <= b + c && b <= c + a && c <= b + a) ? true : false;
  return corectRectangle;
}