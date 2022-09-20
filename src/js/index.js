
const x1 = 10;
const x2 = 30;
const number = 15;

console.log(`Число ${number} потрапляє в відрізок до ${x1}`, number < x1);
console.log(`Число ${number} потрапляє в відрізок після ${x2}`, number > x2);

const res1 = number > x1 && number < x2;
console.log(`Число ${number} потрапляє в відрізок від ${x1} до ${x2}`, res1);

const res2 = number < x1 || number > x2;
console.log(`Число ${number} потрапляє в відрізок до ${x1} або після ${x2}`, res2);
