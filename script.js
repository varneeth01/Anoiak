// Sticky navigation bar

window.onscroll = function () {
  myFunction();
};
var navbar = document.querySelector(".navbar ");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//                                        cursor follower

const root = document.querySelector("html");

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Following extra cursor element
const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

//                                       num animate

let valueDisplays = document.querySelectorAll(".num");
let interval = 10000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

//                      font fade
const lists = document.querySelectorAll(".font-fade");
document.addEventListener("scroll", function () {
  lists.forEach((list) => {
    if (isInView(list)) {
      list.classList.add("font-fade--visible");
    }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
      (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}

//                                     work animation

let next = document.querySelector(".next-work");
let prev = document.querySelector(".prev-work");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item-work");
  document.querySelector(".slide-work").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item-work");
  document.querySelector(".slide-work").prepend(items[items.length - 3]); // here the length of items = 6
});

//                                    infinite scroll
const root2 = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root2).getPropertyValue(
  "--marquee-elements-displayed",
);
const marqueeContent = document.querySelector("ul.marquee-content");

root2.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

//                                       navbar togglebtn

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
