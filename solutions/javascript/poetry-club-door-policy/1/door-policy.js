
export function frontDoorResponse(line) {
  return line[0];
}
export function frontDoorPassword(word) {
  const firstCharacter = word[0];
  let newWord = word.substring(0,0) + word.substring(1,word.length);
  return firstCharacter.toUpperCase() + newWord.toLowerCase();
}
export function backDoorResponse(line) {
  const newLine = line.trim();
  const lastWordPosition = newLine.length - 1
  return newLine[lastWordPosition];
}
export function backDoorPassword(word) {
  const firstCharacter = word[0];
  let newWord = word.substring(0,0) + word.substring(1,word.length);
  let finalWord = firstCharacter.toUpperCase() + newWord.toLowerCase() + ', please';
  return finalWord;
}
