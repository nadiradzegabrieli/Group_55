// 1 Classwork

let month = prompt("შეიყვანეთ თვე რიცხვით (1-12):");

switch (month) {
  case 1:
    console.log("იანვარი");
    break;
  case 2:
    console.log("თებერვალი");
    break;
  case 3:
    console.log("მარტი");
    break;
  case 4:
    console.log("აპრილი");
    break;
  case 5:
    console.log("მაისი");
    break;
  case 6:
    console.log("ივნისი");
    break;
  case 7:
    console.log("ივლისი");
    break;
  case 8:
    console.log("აგვისტო");
    break;
  case 9:
    console.log("სექტემბერი");
    break;
  case 10:
    console.log("ოქტომბერი");
    break;
  case 11:
    console.log("ნოემბერი");
    break;
  case 12:
    console.log("დეკემბერი");
    break;
  default:
    console.log("ასეთი თვე არ არსებობს");
}


// 2 Classwork

let monthName = prompt("შეიყვანეთ თვის სახელი (მაგ: იანვარი, თებერვალი):");

switch (monthName.toLowerCase()) {
  case "დეკემბერი":
  case "იანვარი":
  case "თებერვალი":
    console.log("ეს ზამთარია ❄️");
    break;
  case "მარტი":
  case "აპრილი":
  case "მაისი":
    console.log("ეს გაზაფხულია 🌸");
    break;
  case "ივნისი":
  case "ივლისი":
  case "აგვისტო":
    console.log("ეს ზაფხულია 🌞");
    break;
  case "სექტემბერი":
  case "ოქტომბერი":
  case "ნოემბერი":
    console.log("ეს შემოდგომაა 🍁");
    break;
  default:
    console.log("ასეთი თვე არ არსებობს 🚫");
}