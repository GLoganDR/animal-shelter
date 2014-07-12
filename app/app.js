/* global prompt:true */

var prompt = require('sync-prompt').prompt;

var dogs = [];
var cats = [];
var mice = [];

var option = prompt('(d)og, (c)at, (m)ouse or (q)uit: ');
while (option !== 'q'){
  
   if (option === 'd'){
      var dogName = prompt('Dog\'s Name: ');
      var dogAge = prompt('Dog\'s Age: ');
      var dogBreed = prompt('Dog\'s Breed: ');

      var dog = {Name:dogName, Age:dogAge, Breed:dogBreed};
        dogs.push(dog);
   }else if (option === 'c'){
     var catName = prompt('Cat\'s Name: ');
     var catAge = prompt('Cat\'s Age: ');
     var catBreed = prompt('Cat\'s Breed: ');

     var cat = {Name:catName, Age:catAge, Breed:catBreed};
       cats.push(cat);
   }else if (option === 'm'){
     var mouseName = prompt('Mouse\'s Name: ');
     var mouseAge = prompt('Mouse\'s Age: ');
     var mouseColor = prompt('Mouse\'s Color: ');

     var mouse = {Name:mouseName, Age:mouseAge, Color:mouseColor};
     mice.push(mouse);
   }

              option = prompt('(d)og, (c)at, (m)ouse or (q)uit: ');
}

console.log('Dogs', dogs);
console.log('Cats', cats);
console.log('Mice', mice);

