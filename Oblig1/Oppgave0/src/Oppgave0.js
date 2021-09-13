// Oppgave 1
const removeBtn = document.getElementById("remove-btn");
const removeText = () => {
  let removed = document.getElementById("remove");
  //valgte remove siden den fjerner noden
  // og ikke setter elementet til null
  removed.remove();
};
removeBtn.addEventListener("click", removeText);
// Oppgave 2
const watchedText = document.getElementById("change");
const changeTextBtn = document.getElementById("change-btn");
const changeTextFun = () => {
  //valgt textContent
  watchedText.textContent = "This is the new text";
};
changeTextBtn.addEventListener("click", changeTextFun);
// Oppgave 3
const inputText = document.getElementById("input-text");
const input = document.getElementById("input");

const removeInputText = () => {
  inputText.textContent = null;
};

removeInputText();

const outputText = (event) => {
  let keyEvent = event.key;
  if (keyEvent === "Backspace") {
    return;
  }
  inputText.textContent += keyEvent;
};

input.addEventListener("keyup", outputText);
// Oppgave 4
const myList = ["item one", "item two", "item three"];

const ul = document.getElementById("ul");
const writeButton = document.getElementById("write-list");

const writeList = () => {
  const listElements = myList.map((listElement) => `<li>${listElement}</li>`);
  ul.innerHTML = listElements.join("");
};

writeButton.addEventListener("click", writeList);
// Oppgave 5
const inText = document.getElementById("text");
const createButton = document.getElementById("create");
const selected = document.getElementById("select");
const placeHolderElement = document.getElementById("placeholder");

const createElement = () => {
  const selectedElement = selected.value;
  const textElement = inText.value;
  placeHolderElement.innerHTML += `<${selectedElement}>${textElement}</${selectedElement}>`;
};

createButton.addEventListener("click", createElement);
// Oppgave 6
const removeLiItemButton = document.getElementById("remove-li");
const masterList = document.getElementById("list");

const removeItem = () => {
  const lastElement = masterList.lastElementChild;
  if (lastElement) {
    masterList.removeChild(lastElement);
  }
};

removeLiItemButton.addEventListener("click", removeItem);

// Oppgave 7
const nameInput = document.getElementById("name");
const nameButton = document.getElementById("order");
const checkLength = () => {
  const name = nameInput.value;

  if (name.length > 4) {
    nameButton.disabled = true;
    nameButton.style = "border: 1px solid red";
  } else {
    nameButton.disabled = false;
    nameButton.style = "border: 1px solid black";
  }
};

nameInput.addEventListener("keyup", checkLength);
// Oppgave 8
const ulParentNode = document.querySelector(".children");
const ulChildNodes = ulParentNode.children;
const colourButton = document.getElementById("color");

const addBorderColour = () => {
  Array.from(ulChildNodes).forEach((li, index) => {
    if (index % 2 === 0) {
      li.style = "border: 1px solid green; margin: 5px; padding: 5px;";
    } else {
      li.style = "border: 1px solid pink; margin: 5px; padding: 5px;";
    }
  });
};

colourButton.addEventListener("click", addBorderColour);
