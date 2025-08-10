/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft) {
  if(timeLeft === 0) return 'Lasagna is done.'
  if(timeLeft > 0) return 'Not done, please wait.'
  return 'You forgot to set the timer.'
}
export function preparationTime(layers, timeLeft = 2) {
  return layers.length * timeLeft;
}
export function quantities(layers) {
  let data = {'noodles' : 0, 'sauce' : 0.0}
  for(let layer of layers){
    if(layer === 'noodles') data['noodles'] += 50;
    if(layer === 'sauce') data['sauce'] += 0.2;
  }
  return data;
}
export function addSecretIngredient(friendsList, myList) {
  console.log(myList.push(friendsList[friendsList.length - 1]))
}
export function scaleRecipe(recipe, portions) {
  let newRecipe = {};
  Object.assign(newRecipe, recipe);
  for(let r in recipe){
    newRecipe[r] = (portions / 2) * recipe[r];
  }
  return newRecipe
}


