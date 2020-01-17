// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // Elements

  const header = document.createElement("div"),
    date = document.createElement("span"),
    title = document.createElement("h1"),
    temperature = document.createElement("span");

  // Classes

  header.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  // Setup

  header.append(date);
  header.append(title);
  header.append(temperature);

  //   Text Content

  date.textContent = "JAN 17, 2020";
  title.textContent = "Lambda Times";
  temperature.textContent = "32°";

  return header;
}

const container = document.querySelector(".header-container");
container.append(Header());
