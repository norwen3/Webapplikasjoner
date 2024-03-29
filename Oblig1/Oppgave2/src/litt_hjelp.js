const users = require("./util.js");

// TODO: Hent HTML #id med getElementById
const searchInput = "";
const filterInput = "";
const filterButton = "";

const userUl = document.getElementById("users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = "";
  // TODO: Sjekk om searchName ekisterer
  if ("") {
    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet
    const searchResult = "";
    // TODO: Sjekk som resultatet eksisterer
    if ("") {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
    }
  } else {
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
  }
};

const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  const filterValue = "";
  // TODO: Sjekk om filterVerdien ekisterer og er et tall
  if ("") {
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
    const filterResult = "";
    // TODO: Sjekk om det er noe resultat og at legnden er større enn null
    if ("") {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
    }
  } else {
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI
  }
};

const main = () => {
  createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
