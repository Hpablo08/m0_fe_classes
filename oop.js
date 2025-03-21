// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn
{
constructor(name){

this.name = name;
this.color = "silver";

}

say(squiggly) {
  this.squiggly=squiggly

  console.log(`*~* ${squiggly} *~*`);
}
}


 var unicorn1 = new Unicorn ("Ploppsy");
 console.log(unicorn1)

 unicorn1.say("Ploppsy"+" black")



// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor(name){
this.name = name;
this.pet = "bat";
this.thirsty = true
}

changeThirsty(newThirsty) {
  this.thirsty = newThirsty;
}
}

var vamp1= new Vampire ("Suckula");
console.log(vamp1);

vamp1.changeThirsty(false);
console.log(vamp1)



//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

class Dragon {
  constructor(name, rider, color) {
this.name = name;
this.rider= rider;
this.color= color;
this.isHungry= true;

      }

eat(hunger) {
     if (hunger>= 4) {
     this.isHungry= false;
   } } }

var drag1 = new Dragon("Toothless","Ben","black");
console.log(drag1);

drag1.eat(4);
console.log(drag1)


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name,disposition) {
  this.name=name;
  this.disposition=disposition;
  this.age=0;
  this.isAdult= false;
  this.isOld= false;
  this.hasRing= false
}

celebrateBirthday(yay)
 {

   if (this.name === "Frodo")
   {
     this.hasRing = true}
   ;

if (yay > 33) {
  this.isAdult=true; }

  if (yay >= 101)
  {
    this.isOld = true}
;

} }

var hob1 = new Hobbit ("Frodo","tall");
console.log(hob1);

hob1.celebrateBirthday(130);
console.log(hob1)
