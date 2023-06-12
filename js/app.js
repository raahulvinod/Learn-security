// ar = [1, 2, 3];

// sum = 0
// for (i in ar) {
//     sum = sum + ar[i]
// }
// // console.log(sum);

// ar.forEach(element => {
//     console.log(element);
// });
// sum = 0
// ar.forEach((value, index) => {
//     sum += value;
// });
// console.log(sum);

// person = [{'name': 'rahul'}, {'name': 'vinod'}]

// person.forEach((value, index) => {
//     console.log('index: '+index, 'Value: ' +value.name);
// });

// for (var i = 0; i <= 10; i++) {
//     if (i > 3) {
//         break;
//     }
//     console.log(i);
// }

// const inputYear = '1991';
// console.log(+(inputYear) + 18);
// console.log(typeof NaN);
// console.log(String(23), 23);
// console.log('20'+'10'-5);

// const scoreDholphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDholphins, scoreKoalas);

// if (scoreDholphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDholphins) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDholphins === scoreKoalas) {
//   console.log("Math draw");
// }

// const scoreDholphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// console.log(scoreDholphins, scoreKoalas);

// if (scoreDholphins > scoreKoalas && scoreDholphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDholphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (
//   scoreDholphins === scoreKoalas &&
//   scoreDholphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log('Both win the trophy');
// } else {
//   console.log('No one win the trophy!');
// }

// const birthYer = year => console.log(year);

// const day = 'tuesday';

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to the coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare the theory videos');
//     break;

//   case 'wednesday':
//   case 'Thursday':
//     console.log('Write code example');
//     break;

//   case 'friday':
//     console.log('Record videos');
//     break;

//   case 'saturday':
//   case 'Sunday':
//     console.log('Enjoy the weekend');
//     break;

//     dafault: console.log('Not a valid dat');
// }

// const age = 13;
// age >= 18 ? console.log('I like to drink wine') : console.log('No wine');

// const bill = 275;

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
// );

// const friends = ['razik', 'rahul', 'aromal'];
// const newLength = friends.push('anu');
// // console.log(friends);
// // console.log(newLength);

// friends.unshift('bipi');
// // console.log(friends);

// const popped = friends.pop();
// // console.log(friends);
// console.log(popped);

// // friends.pop();
// console.log(friends);
// console.log(friends.indexOf('aromal'));
// console.log(friends.indexOf('mal'));

// console.log(friends.includes('mal'));
// console.log(friends.includes('bipi'));
