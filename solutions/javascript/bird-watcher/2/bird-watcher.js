
export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for(let key in birdsPerDay){
    if ( key !== 'length') sum += birdsPerDay[key]
  }
  
  return sum;
}

export function birdsInWeek(birdsPerDay, week) {
  let start = (week - 1) * 7; 
  let end = start + 7;
  let sum = 0;
  for (let i = start; i < birdsPerDay.length; i++) {
    if (i !== 'length' && i < end) sum += birdsPerDay[i]
  }
  return sum;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1
    }
  }
  return birdsPerDay;
}
