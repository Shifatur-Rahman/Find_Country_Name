let content = document.getElementById("content");
let text = document.getElementById("text");
let submit = document.getElementById("btn");

function countryData() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((item) => displayCount(item));
}

submit.addEventListener("click", countryData);

function displayCount(item) {
  for (let data of item) {
    if (text.value == data.name.common) {
      let li = document.createElement("li");
      li.classList.add("list");
      li.innerHTML = `
      <img src="${data.flags.png}" />
      <h3>Name: ${data.name.common} </h3>
      <h3>Population: ${data.population} </h3>
      <h3>Area: ${data.area} </h3>
      <h3>Capital: ${data.capital} </h3>
      `;
      content.appendChild(li);
    }
  }
}
