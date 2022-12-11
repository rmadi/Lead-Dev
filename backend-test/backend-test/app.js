const data = require("./data");

const myArgs = process.argv.slice(2);
let operation = myArgs[0];
let arg = operation;


// get prefix of the argument 
if (operation.indexOf("=") != -1) {
  arg = operation.substr(0, operation.indexOf("="));
}

//  if the argument equal  filter then filterByPattern is called 
// else if argumet equal count then cout is called
// else warn messagne is displyed


switch (arg) {
  case "--filter":
    pattern = operation.substr(operation.indexOf("=") + 1);
    filterByPattern(pattern);

    //console.log(operation, pattern);
    break;
  case "--count":
    count();
    break;
  default:
    //console.log(myArgs);
    console.log("Please check your args , --filer=[filter] or --count");
}



function filterByPattern(pattern) {
    // loop trough all data and for every animals if animal name includes the pattern 
    // display the elem contiened
  data.map((elm) => {
    elm.people.map((el) => {
      el.animals.every((animalName) => {
        if (animalName.name.indexOf(pattern) > 0) {
          console.log(JSON.stringify(elm));
        }
      });
    });
  });
}

function count() {
    // llop trough the data and get the lengh of every people and assigned to the name 
  data.map((people) => {
    people.name = people.name + " " + "[" + people.people.length + "]";
    people.people.map((el) => {
      el.name = el.name + " " + "[" + el.animals.length + "]";
    });
  });
  console.log(JSON.stringify(data));
}
