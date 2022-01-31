function peopleWithAgeDrink(old) {
    if (old >= 21 ){
        return "drink whisky";
    } else if (old <= 13) {
        return "drink toddy";
    } else if (old >= 14 && old <= 17) {
        return "drink coke";
    } else if (old >= 18 && old <= 20){
        return "drink beer";
    }
};

console.log(peopleWithAgeDrink(22)); // return 'drink whisky'
console.log(peopleWithAgeDrink(13)); // return 'drink toddy'
console.log(peopleWithAgeDrink(18)); // return 'drink beer'
console.log(peopleWithAgeDrink(15)); // return 'drink coke'