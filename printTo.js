export const setValue = (selector, value, { parent = document } = {}) => {
  // console.log(value);
  parent.querySelector(`[data-${selector}]`).textContent = value
}