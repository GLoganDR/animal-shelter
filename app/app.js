/* global prompt:true */ //This makes the prompt true so Grunt will ignore it//

var prompt = require('sync-prompt').prompt;

var dogs = [];
var cats = [];
var mice = [];
var people = [];

var person1 = {name:'Bob', age:10, pets:[]};
var person2 = {name:'Sam', age:5, pets:[]};
var person3 = {name:'Jill', age:7, pets:[]};

people.push(person1, person2, person3);

var option = prompt('(d)og, (c)at, (m)ouse or (q)uit: ');
while (option !== 'q'){
  
   if (option === 'd'){//I should have used "switch" here//
      var dogName = prompt('Dog\'s Name: ');
      var dogAge = prompt('Dog\'s Age: ');
      var dogBreed = prompt('Dog\'s Breed: ');

      var dog = {name:dogName, age:dogAge, breed:dogBreed};
        dogs.push(dog);
   }else if (option === 'c'){
     var catName = prompt('Cat\'s Name: ');
     var catAge = prompt('Cat\'s Age: ');
     var catGender = prompt('Cat\'s Gender: ');

     var cat = {name:catName, age:catAge, gender:catGender};
       cats.push(cat);
   }else if (option === 'm'){
     var mouseName = prompt('Mouse\'s Name: ');
     var mouseAge = prompt('Mouse\'s Age: ');
     var mouseColor = prompt('Mouse\'s Color: ');

     var mouse = {name:mouseName, age:mouseAge, color:mouseColor};
     mice.push(mouse);
   }

              option = prompt('(d)og, (c)at, (m)ouse or (q)uit: ');
}

option = prompt('(b)ob, (s)am, (j)ill, (q)uit: ');
while(option !== 'q'){
  //someone typed a j --- for jill
  //find that person in the array of people
  //and console.log it out
  //TRAVERSING AN ARRAY!//
  for(var i = 0; i < people.length; i++){
   if(people[i].name[0].toLowerCase() === option.toLowerCase()){
     var client = people[i];
      break;
   }
  }

  console.log('Client: ', client);
  var animals;

  var choice = prompt('What type of Pet? (d)og, (c)at or (m)ouse: ');
  switch(choice){
    case 'd':
      console.log('Dogs: ', dogs);
        animals = dogs;
    break;
    case 'c':
      console.log('Cats: ', cats);
        animals = cats;
    break;
    case 'm':
      console.log('Mice: ', mice);
        animals = mice;
  }
  
  var name = prompt('What is the name of the animal you want to adopt?: ');

  for (i = 0; i < animals.length; i++){
    if(animals[i].name[0].toLowerCase() === name.toLowerCase()){
    var animal = animals[i];
    var index = i;
    break;
  }
  }

      console.log('Animal:', animal);

      animals.splice(index, 1);
      client.pets.push(animal);
      console.log('After adoption: ', client);
      console.log('Animals array: ', animals);


  option = prompt('(b)ob, (s)am, (j)ill, (q)uit: ');
}


console.log('Dogs', dogs);
console.log('Cats', cats);
console.log('Mice', mice);

//Teacher's Code//
//var dogs = [], cats = [], bees = [];
//
//var option = prompt('(d)og, (c)at, (b)ee, (q)uit ");
//while(option !== 'q'){
//switch(option){
//case 'd':
//var name = prompt('Name : ');
//var age = prompt('Age : ');
//var breed = prompt('Breed : ');
//var dog = {name:name, age:age, breed:breed}
//dogs.push(dog);
//break;
//

