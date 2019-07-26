export const doubleNumber = (num) => {
  return num * 2
}

export const squareNumber = (num) => {
  return num * num
}

export default {
  double: (num) => exports.doubleNumber(num),
  square: (num) => squareNumber(num),
}
