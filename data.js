export const data = [
  {
    "name": "AAA",
    "code": "999"
  },
  {
    "name": "AAA",
    "code": "111"
  },

  {
    "name": "YYY",
    "code": "555"
  }
]



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export const fetchData = async () => {

  await sleep(3000);
  return data;
}


