const DIM_WORD = 4;

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const data = [...Array(10)].map(() => {
  const randomStr = "EESSARTIN".split('').sort(() => .5 - Math.random()).join('');
  return randomStr.slice(0, randomIntFromInterval(DIM_WORD, 10))
})