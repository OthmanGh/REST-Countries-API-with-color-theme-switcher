export function formatPopulationNumber(number) {
  return new Intl.NumberFormat('en-US').format(number);
}
