export default class utils {
   // to declare a method within class, change function to static
   static add(input1, input2) {
      // A1: any JavaScript value
      // A2: any JavaScript value
      // R: a single JavaScript value
      return input1 + input2;
   }

   static subtract(firstNumber, secondNumber) {
      // A1: a number
      // A2 : a number
      // R : a number
      return secondNumber - firstNumber;
   }

   static multiply(firstNumber, secondNumber) {
      // A1 : a number
      // A2 : a number
      // R : a number
      return firstNumber * secondNumber;
   }

   static divide(firstNumber, secondNumber) {
      // A1 : a number
      // A2 : a number
      // R : a number
      return firstNumber / secondNumber;
   }

   static increment(firstNumber) {
      // A1 : a number
      // R : number + 1
      // ++
      return ++firstNumber;
   }

   static decrement(firstNumber) {
      // A1 : a number
      // R : number - 1
      // --
      return --firstNumber;
   }

   static multiplyDecimals(firstNumber, secondNumber) {
      // A1 : a number
      // A2 : a number
      // R : a number
      return firstNumber * secondNumber;
   }

   static divideDecimals(firstNumber, secondNumber) {
      // A1 : a number
      // A2 : a number
      // R : a number
      return firstNumber / secondNumber;
   }

   static concatenate(input1, input2) {
      // A1 : string1
      // A2 : a string2
      // R :  string1 string2
      return input1 + " " + input2;
   }

   static concatenatePlusEquals(input1, input2) {
      // A1 : string1
      // A2 : string2
      // R : string1String2
      // +=
      return (input1 += input2);
   }

   static stringVariables(input1, input2) {
      var yourName = input1 + " " + input2;
      var greeting = "Hello " + yourName + ", nice to meet you";
      return greeting;
   }

   static stringLength(input1) {
      //"Kawika" = 6
      return input1.length;
   }

   static firstCharacter(input1) {
      //   "Kawika" = "K"
      //   var firstLetter = firstName[0];
      return input1[0];
   }

   static nthCharacter(input1, input2) {
      // input1 = string
      // input2 = nth character
      return input1[input2];
   }

   static findLastCharacter(input1) {
      //var firstName = "Kawika";
      //var lastLetter = firstName[firstName.length - 1]; //a
      return input1[input1.length - 1];
   }

   static nthToLastCharacter(input1, input2) {
      // input1 = string
      // input2 = nth character
      return input1[input1.length - [input2]];
   }

   static arrayPush(input1) {
      const myArray = ["Dog", "Cat"];
      myArray.push([input1]); // adds to elemnet to end of array
      return myArray;
   }

   static arrayPop(input1) {
      const myArray = ["Dog", "Cat", "Mouse", "Hat"];
      myArray.pop([input1]); // removes last element
      return myArray;
   }

   static arrayShift(input1) {
      const myArray = [
         ["dog", 3],
         ["cat", 7],
      ];
      myArray.shift([input1]); // removes first element
      return myArray;
   }

   static arrayUnshift(input1) {
      const myArray = ["kiwi", "apple", "banana"];
      myArray.unshift([input1]); // adds element to the beginning of array
      return myArray;
   }

   static shoppingList(input1, input2) {
      const myList = [[[input1]], [[input2]]]; // 1st element = string (item), 2nd element = quantity (of item)
      return myList;
   }

   static nextInLine(input1) {
      const myArray = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
      myArray.push([input1]); // adds element to end of array
      myArray.shift(); // removes first element of array
      return myArray;
   }

   // counting cards
   // if count is positive, then Bet
   // if count is 0 or negative, then Hold

   static countingCards(input1, input2) {
      var count = 0;
      switch (input1) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count += 1;
            break;
         case 7:
         case 8:
         case 9:
            count += 0;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count -= 1;
            break;
         default:
            return;
      }

      switch (input2) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count += 1;
            break;
         case 7:
         case 8:
         case 9:
            count += 0;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count -= 1;
            break;
         default:
            return;
      }

      if (count > 0) {
         return count + " Bet";
      } else {
         return count + " Hold";
      }
   }

   // profile lookup

   static profileLookup(input1, input2) {
      var contacts = [
         {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
         },
         {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
         },
         {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
         },
      ];
      // input1 = name
      // input2 = property (ex: firstName, number)

      for (var i = 0; i < contacts.length; i++) {
         var contact = contacts[i];
         if (contact.firstName === input1) {
            if (contact[input2] !== undefined) {
               return contact[input2];
            }
            return "No such property";
         }
      }
      return "No such contact";
   }

   // random number generator
   static randomNum(input1, input2) {
      // input1 = min number
      // input2 = max number
      // return a random whole number within range of input1 & input2

      return Math.floor(Math.random() * (input2 - input1 + 1)) + input1;
   }

   // remove using splice
   static removeSplice(input1, input2) {
      // input1 = index on the array from which to begin removing from
      // input2 = number of elements to delete

      const arr = ["Hello", "Konnichiwa", "Annyeong", "Aloha", "Hola"];
      arr.splice(input1, input2);
      return arr;
   }

   // add using splice
   static addSplice(input1, input2, input3) {
      // input1 = index on the array from which to begin remvoing from
      // input2 = number of elements to delete
      // input3 = element(s) to be inserted at that same index

      const arr = ["Lexus", "Honda", "Nissan", "Toyota", "Subaru"];
      arr.splice(input1, input2, input3);
      return arr;
   }

   // indexOf
   static indexOf(input1) {
      // (arr, elem)
      // input1 is the element (elem) we are checking to see if its in the array

      const arr = ["Carrot", "Mushroom", "Potato", "Garlic", "Onion", "Ginger"];
      if (arr.indexOf(input1) === -1) {
         return false;
      } else {
         return true;
      }
   }

   // typeof
   static checkType(input1) {
      // input1 = calls on the varible you want to check the data type of
      return typeof input1;
   }

   // filter method
   static filterMethod(input1) {
      // input1 = any number
      var k = [13, 24, 18, 57, 4, 59, input1]; // original array
      k.filter = function (callback) {
         var newArr = []; // creates a new empty array

         // will go through each element (num) one by by in the array above
         for (let i = 0; i < k.length; i++)
            if (callback(k[i])) newArr.push(k[i]); // if the num in the array is divisable by 3, then it will pushed into the new array
         return newArr;
      };
      // below is the callback (a function that is executed after another function has finished executing)
      // the var divByThree takes the array and filters out the numbers that are divisable by 3
      // ... it basically returns the elements in the array that meet the condion of the callback
      var divByThree = k.filter(function (num) {
         return num % 3 === 0; // takes the num, divides it by 3. if the num is didsable by 3, no remainder = true.
      });
      return divByThree;
   }

   // slice
   static sliceArr(input1, input2) {
      // input1 (argument 1) = gives the index of where to begin the slice
      // input2 (argument 2) = gives the index of where to end the slice (non -inclusise)
      let chips = ["Doritos", "Cheetos", "Pringles", "Ruffles", "Lay's"];

      let newChipsArr = chips.slice(input1, input2);
      return newChipsArr;
   }

   // remove elements using slice - pretty much the same slice (right above)
   static sliceNotSplice(input1) {
      // input1 (argument 1) = gives the index of where to begin the slice
      let iceCreamFlavors = ["Vanilla", "Chocolate", "Strawberry", "Pistachio"];

      let newIceCreamFlavors = iceCreamFlavors.slice(input1);
      return newIceCreamFlavors;
   }

   // concatnating
   static concatArr(input1) {
      // input1 = array of input1 will be added to original arr animalSounds

      let animalSounds = ["Bark", " Meow", " Oink", " Quack"];

      let newAnimalSounds = animalSounds.concat([input1]);
      return newAnimalSounds;
   }

   // concatnate not push
   // concatnate both arrays
   static concatNotPush(input1, input2) {
      // input1 = array 1
      // input2 = array 2
      return input1.concat(input2);
   }

   // reduce method
   static reduceMethod(input1) {
      // input1 = any number
      let arr = [13, 27, 8, 46, input1];
      // acc = accumulator. the acc value will increase until the function is complete
      // val = the current value being processes. so the first value would be 13, then it moves down the array till the end
      // starts at 0. can change to any number to start off with by add num after val. ex: ... => acc + val, 1
      let sum = arr.reduce((acc, val) => acc + val);
      return sum;
   }

   // higher-order fucntions
   static higherOrder(input1) {
      // input1 = any number
      let arr = [-3.1, 2, -10, 8, -7, input1];
      let positiveIntegerCubed = arr
         .filter(function (num) {
            if (Number.isInteger(num) && num > 0) {
               // Number.isInteger determines if num is an integer (no decimal)
               //    return num; //changed
            }
            return num; // changed
         })
         .map(function (num) {
            return Math.pow(num, 3); // map creates a new array w/passed num & Math.pow takes num to the 3rd power (cubed)
         });
      return positiveIntegerCubed;
   }

   // sort
   static sortArr(input1, input2) {
      // input1 = any fruit
      // input2 = any fruit
      // defualt sort order is accending
      let fruits = ["banana", "papaya", "apple", "mango", input1, input2];

      return fruits.sort();
   }

   // return sorted array w/o changing the origianl array
   static returnSortedArr(input1) {
      // input1
      let snacksArr = ["fruit", "cookies", "chips", "candy", input1];
      let newSnacksArr = snacksArr.concat(); // concatnate a new array so original array does not change
      return newSnacksArr.sort();
   }

   // split method

   static splitArr(input1) {
      // input1 = any value
      let str = [input1.split(" ")];
      return str;
   }

   // join method
   static joinMethod(input1) {
      // input1 = any name
      let greeting = ["Hello", "world", "my", "name", "is", input1];
      let str = greeting.join(" ");
      return str;
   }

   // convert string to URL Slug
   // URL Slug = part of the URL or link that comes after the domain extension.
   /// "...URL slug can be used to SEO optimize the URL by showing Google the structure of your site and the contents of the page in question"
   static stringToSlug(input1) {
      // input1 = any value
      return input1
         .slice()
         .toLowerCase()
         .split(" ")
         .filter(function (word) {
            if (word !== "") {
               // return word; // changed
            }
            return word; //changed
         })
         .join("-"); // joins the elements in the array and makes it into URL slug form
   }

   // every method
   // returns as a boleen (true or false)
   // once an array element passes false, it returns the whole array as false
   static everyMethod(input1) {
      // input1 = age
      let age = [input1];
      let ageLimit = age.every(function (num) {
         return num >= 21;
      });
      return ageLimit;
   }

   // some method
   // returns as a boleen (true or false)
   // once an array element passes true, it returns the whole array as true
   static someMethod(input1) {
      let numbers = [input1];
      let anyNumber = numbers.some(function (num) {
         return num > 0;
      });
      return anyNumber;
   }

   // converting C to F
   static celsiusToFahrenheit(input1) {
      // input1 = any celsius temperature

      let fahrenheit = input1 * (9 / 5) + 32; // C to F conversion
      return fahrenheit;
   }

   // reverse a string
   // one of many ways to do
   // this method includes: split, reverse, join
   static reverseMethod(input1) {
      // input1 = any word or phrase
      let word = input1.split("").reverse().join("");
      return word;
   }

   // factorialize a number
   // short hand n! ex: 3! = 1 * 2 * 3 = 6
   static factorializeNum(input1) {
      // input1 = any number
      let facNumTotal = 1; // 0! = 1. loop will not start if input1 is 0 since it starts at 1, making 0 = 1
      for (var i = 1; i <= input1; i += 1) {
         // will loop each number up to the given input1 number
         facNumTotal = facNumTotal * i; // each number up to given input1 number will times eachother
      }
      return facNumTotal;
   }

   // longest word in a string
   // loops through string and finds which word is the longest
   // returns a number of the longest word
   static longestWord(input1) {
      // input1= a string
      let splitStr = input1.split(" ");
      let longestWord = 0;
      for (let i = 0; i < splitStr.length; i++) {
         if (splitStr[i].length > longestWord) {
            longestWord = splitStr[i].length;
         }
      }
      return longestWord;
   }
   // largest numbers in the array
   static largestNumArr(input1) {
      // input1 = array of numbers
      let arr = [43, 21, 77, 92, 2, 36, input1];
      let newArr = Math.max(...arr);

      console.log(newArr);
      return newArr;
   }
   // return input1.map(function (subArray) {
   //    //       return Math.max.apply(null, subArray);
   //    //    });

   // confirm the ending
   // can use .endsWith method or substring method
   // endsWith method = determines whether a string ends with the characters of a specified string, returning T or F
   // substring method = returns the part of the string between the start and end indexes, or to the end of the string
   // using substr instead of substring, substr on mdn says avoid when possible. used in FCC challenge
   // neg in substr starts index from back
   static confirmEnding(input1, input2) {
      // input1 = string
      // input2 = target
      // example : "dog" - string, "g" - target
      if (input1.substr(-input2.length) === input2) {
         return true;
      } else {
         return false;
      }
   }

   // repeat a string repeat a string
   // loop starts at num (input2) and goes down in incremnts of 1 (--)
   // adds each string (input1) to the enpty string (repaeated string) after each loop
   // .repeat() method also can be used
   static repeatString(input1, input2) {
      // input1 = string
      // input2 = num of times to loop
      let repeatedString = "";
      while (input2 > 0) {
         repeatedString += input1;
         input2--;
      }
      return repeatedString;
   }

   // truncate a string
   // shortens a string if it is longer than the specificed number of character
   // truncated string will end w/ translatable ellipsis sequence ("...") (by default) or specified characters
   // use slice (0, num) 0 = start, num = char, where to slice up till
   // spaces COUNT!
   static truncateStr(input1, input2) {
      // input1 = string (arg 1)
      // input2 = maximum string length (arg 2)
      if (input1.length > input2) {
         return input1.slice(0, input2) + "...";
      }
      return input1;
   }

   // finders keepers
   static findersKeepers(input1, input2) {
      // input1 = num
      // input2 = num

      let arr = [input1, input2];

      for (var i = 0; i < arr.length; i++) {
         let num = arr[i];
         if (num % 4 === 0) {
            return num;
         }
      }
   }

   // Boo who - checking if value is a boolean primitive
   // use typeof
   static booWho(input1) {
      //input1 = any value
      if (typeof input1 === "boolean") {
         return true;
      }
      return false;
   }

   // title case a sentence

   static capTitle(input1) {
      // input1 = string
      return input1
         .toLowerCase() // lowercases all words in string
         .split(" ") // splits each word in the string
         .map((word) => {
            // manipulates each word in array
            // each letter in each word (0 place) is capitalized and put in new array, then
            // rest of the word is concatnaed to the capitalized letter in the new array made by map
            return word[0].toUpperCase() + word.slice(1);
         })
         .join(" "); // joins all elements in array back together
   }

   // slice and splice
   static sliceNSplice(input1) {
      // input1 = index of where to insert element of second array
      let arr1 = [" Earth", " Fire", " Water", " Air"];
      let arr2 = [
         " Earth Kingdom",
         " Fire Nation",
         " Water Tribe",
         " Air Nomads",
      ];
      let allNationsAndElements = arr2.slice(); // copy of array2
      allNationsAndElements.splice(input1, 0, ...arr1); // splice(index of elem, how many to replace, elem that is going to replace)
      // operator ... used to add each elem individually. just copying array would keep it in bracet form
      return allNationsAndElements;
   }

   // falsy bouncer
   // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN
   static byeFalsy(input1) {
      let arr = [7, "Hi", "", false, 9, 0, input1];
      return arr.filter((x) => x); // this works because filter method returns truthy values from the callback

      // this is basically answer above but in short form
      // return arr.filter(function (x) {
      // return x;
   }

   // where do i belong

   static whereDoIBelong(input1) {
      let arr = [21, 7, 42, 59];
      arr.push(input1);
      arr.sort(function (a, b) {
         return a - b;
      });
      return arr.indexOf(input1);
   }

   // mutation
   static mutation(input1, input2) {
      let firstWord = input1.toLowerCase();
      let secondWord = input2.toLowerCase();
      for (var i = 0; i < secondWord.length; i++) {
         if (firstWord.indexOf(secondWord[i]) < 0) {
            return false;
         }
      }
      return true;
   }

   // chunky money // NEED TO FIX
   static chunkyMonkey(input1, input2) {
      var arr = input1;
      var size = input2;
      var newArr = [];
      var i = 0;
      while (arr.length > 0) {
         newArr.push(arr.splice(i, size));
         // i += size;
      }
      console.log(newArr);
      return newArr;
   }
}
