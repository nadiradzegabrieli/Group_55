// ✅ 1) Rest და Spread ოპერატორების ახსნა

// Rest (...) აგროვებს არგუმენტებს/კუთვნილებებს ერთ მასივში ან ობიექტში
function exampleRest(a, b, ...others) {
  console.log("Rest ოპერატორით შეგროვებული:", others);
}
exampleRest(1, 2, 3, 4, 5); // others = [3, 4, 5]

// Spread (...) შლის მასივს ან ობიექტს
const array = [10, 20, 30];
const copiedArray = [...array]; // Spread ოპერატორით შლილი array
console.log("Spread-ით დაშლილი მასივი:", copiedArray);

// 🔍 განსხვავება:
  // Rest იკრიბება (შედგენს), Spread იშლება (გავრცელდება)

// ✅ 2) ობიექტზე დესტრუქცია rest ოპერატორით
const person = {
  name: "Gabi",
  age: 25,
  height: 170
};

const { name, ...others } = person;
console.log("სახელი ცალკე:", name);
console.log("დარჩენილი კუთვნილებები:", others); // { age: 25, height: 170 }

// ✅ 3) 3 ობიექტის გაერთიანება spread ოპერატორით
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const mergedObject = { ...obj1, ...obj2, ...obj3 };
console.log("შერწყმული ობიექტი:", mergedObject);

// ✅ 4) ფუნქცია, რომელიც იღებს n რაოდენობის სახელს და დაბეჭდავს
function printNames(...names) {
  names.forEach(name => console.log("სახელი:", name))}

  