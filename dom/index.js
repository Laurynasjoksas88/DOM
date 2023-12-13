// selector
const divas = document.querySelector("div");
console.log(divas);

const divas1 = document.querySelector(".divas1");
const divas2 = document.querySelector("#divas1");

console.log(divas1, divas2);

const byID = document.getElementById("divas1");
console.log(byID);

const byClass = document.getElementsByClassName("divas1");
console.log(byClass);

const arr = document.querySelectorAll("div");
console.log(arr);

const byTag = document.getElementsByTagName("div");
console.log(byTag);

// vaikini elementa pasijema
const child = divas.querySelector("p");
console.log(child);

const child1 = document.querySelector("div").childNodes;
console.log(child1);
// labiausiai naudojamas
const child2 = document.querySelectorAll("div > p");
console.log(child2);

const firstChild = document.querySelector("div > p");
console.log(firstChild, child2[0]);

firstChild.setAttribute("id", "pirmasP", "sad");

child2[1].className = "antrasP";
console.log(firstChild, child2[1]);

// firstChild.removeAttribute('id')

const attr = firstChild.getAttribute("id");
console.log(attr);

child2[1].classList.add("myClassInCss");

child2[1].classList.remove("myClassInCss");
child2[1].classList.replace("antrasP", "myClassInCss");

child2[1].style.color = "red";

child2[1].style.backgroundColor = "black";

const myButton = document.createElement("button");
console.log(myButton);

divas2.appendChild(myButton);

divas2.append(myButton);

divas2.insertAdjacentElement("afterend", myButton);

myButton.innerHTML = "click";

divas2.innerHTML += "<span>fsdfsdf</span>";

const span = document.querySelector("span");
span.remove();

myButton.addEventListener(
  "click",
  () => {
    if (myButton.style.backgroundColor === "red") {
      myButton.style.backgroundColor = "blue";
    } else {
      myButton.style.backgroundColor = "red";
    }
  },
  { once: true }
);

const myButton2 = document.createElement("button");
myButton2.innerText = "click2";
divas2.appendChild(myButton2);

const myButton3 = document.createElement("button");
myButton3.innerText = "click3";

divas2.appendChild(myButton3);

const buttonGroup = document.querySelectorAll("button");
console.log(buttonGroup);

buttonGroup.forEach((el, ind) => el.addEventListener("click", () => {}));

// event.value
// event.target

const form = document.querySelector("form");
const input = document.querySelector("input");
const submitas = document.querySelector("form > button");
console.log(form, input, submitas);
const array = [];
let counter = 0
submitas.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = input.value;
  console.log(inputValue);
  array.push(inputValue);
  console.log(array);
  localStorage
    .setItem("zmones", JSON.stringify(array))

    // input.value=""c
    form.reset();
});

submitas.addEventListener("click", (a) => {
  a.preventDefault;
  console.log(a.target);
});
