// Завдання 1 

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
  for (const key of keys) {
  const name = key;
  const voul = user[key]
  console.log(`${name}: ${voul}`);
}
// Завдання 2 

const countProps = function (obj) {
  const values = Object.values(obj);
  return values.length;
};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Завдання 3

const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let bestResult = 0;
  let bestEmployment = "";
  for (const key of keys) {
    if (employees[key] > bestResult) {
      bestResult = employees[key];
      bestEmployment = key;
    };
  }
  return bestEmployment;
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);

// Завдання №4

const countTotalSalary = function (employees) {
    const values = Object.values(employees);
    let totalSallary = 0;
    for (const value of values) {
         totalSallary += value;
    }
  return totalSallary;
};
console.log(countTotalSalary({}));
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);

// Завдання №5

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];
const getAllPropValues = function (arr, prop) {
  for (const product of arr) {
  console.log(product[prop]);
  }
};
console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));

// Завдання №6

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProdcuts, productName) {
    let totalPrice = 0;
    for (const product of allProdcuts) {
      if (product.name ===  productName) {
        totalPrice = product.price * product.quantity;
      };
    };
  return totalPrice;
};
console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроїд'));