
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

function primeNumber(number) {
  let i = 1;
  while (++i <= number) {
    if (number % i === 0) {
      console.log('обычное число - false');
      break;
    } else if (i <= 3) {
      console.log('Простое число - true');
      break;
    }
    else {
      console.log('Простое число - true');
      break;
    }
  }
}
primeNumber(82);



/**********************************/
function getArea(width, height) {
  return width * height
}

// console.log(getArea(10, 3));

// const getAreaExp = function (width, height) {
//   return width * height;
// }
/*********************************/



function isCorectRectangle(a, b, c) {
  const corectRectangle = (a <= b + c && b <= c + a && c <= b + a) ? true : false;
  return corectRectangle;
}


function isWorkingAgePerson(age) {
  const agePerson = (age >= 16 && age <= 65) ? true : false;
  return agePerson;
}
isWorkingAgePerson(18);


function checkMultiplicity(a, b) {
  if (a % b === 0) {
    return true;
  } else if (b > a) {
    return false;
  } else {
    return false;
  }
}
checkMultiplicity(15, 5);

