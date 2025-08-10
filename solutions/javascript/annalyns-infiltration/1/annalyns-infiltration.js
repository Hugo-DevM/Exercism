
export function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake) {
    return true
  }
  return false;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake === true || archerIsAwake === true || prisonerIsAwake === true) {
    return true
  }
  return false;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  return (petDogIsPresent && !archerIsAwake) || (prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}
