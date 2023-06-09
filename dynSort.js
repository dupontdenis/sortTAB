export const dynSort = (property) => {

  console.log(`dynsort:  + ${property}`)
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return sortOrder * result;
  };
} 
