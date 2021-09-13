const users = require("./util.js");

// TODO: Hent HTML #id med getElementById
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");

const userUl = document.getElementById("users");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
//
const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Name</span><span>Age</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const handleSearch = () => {
  const searchedName = searchInput.value;

  if (!searchedName) {
    createTableUI(users);
  } else {
    const searchResult = users.find(
      (user) => user.name.toLowerCase() === searchedName.toLowerCase()
    );

    if (!searchResult) {
      userUl.innerHTML = `${searchedName} was not found`;
    } else {
      createTableUI([searchResult]);
    }
  }
};

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const handleFilter = () => {
  const filter = filterInput.value;

  if (!filter || !typeof Number) {
    createTableUI(users);
  } else {
    const result = users.filter((user) => user.age >= filter);
    if (!result || !result.length > 0) {
      userUl.innerHTML = `<span>No one older than ${filter} found</span>`;
    } else {
      createTableUI(result);
    }
  }
};

const main = () => {
  createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
searchInput.addEventListener("keyup", handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterButton.addEventListener("click", handleFilter);
