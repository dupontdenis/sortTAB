import { fetchData } from "./data.js";
import { setValue } from "./printTo.js";
import { dynSort } from "./dynSort.js";

let items;

const dataSection = document.querySelector("[data-section]");
const dataTemplate = document.querySelector("[data-template]");

function renderData(data) {
  dataSection.innerHTML = ""
  data.forEach(({ name, code }) => {
    const element = dataTemplate.content.cloneNode(true)
    setValue("name", name, { parent: element });
    setValue("code", code, { parent: element });
    dataSection.append(element)
  })
}

fetchData().then(

  (data) => {
    items = data;
    document.querySelector("[data-table]").classList.remove("blurred");
    renderData(items);
  }
)



//event

const renderSort = function (event) {
  const targetElement = event.target;

  if (targetElement.closest("span")) {
    let { dataset: { optionSort } } = targetElement.closest("span");
    items.sort(dynSort(optionSort));
    renderData(items);
  }
};

const zone = document.querySelector("[data-head]");
zone.addEventListener("click", renderSort, false);





