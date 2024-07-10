const drinks = [
  {
    id: "drink-1",
    title: "Vine",
  },
  {
    id: "drink-2",
    title: "Juice",
  },
  {
    id: "drink-3",
    title: "Beer",
  },

];


const newDrinks = drinks.filter((d)=> d.id === "") || [];
console.log(newDrinks)