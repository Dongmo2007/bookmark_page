let input = document.getElementById("mon_input");
let button = document.getElementById("envoyer");
let p = document.getElementById("erreur");

button.addEventListener("click", function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(input.value)) {
    // Utiliser input.value
    p.textContent = "Veuillez entrer un email valide";
    p.style.color = "red";
    p.style.fontSize = "15px";
    p.style.margin = "auto";
    p.style.marginTop = "1px";
    input.style.border = "1px solid";
    input.style.borderColor = "red";
  } else {
    p.textContent = "Email valide !";
    p.style.color = "green";
    input.style.border = "none";
    input.style.borderColor = "";
  }
  document.getElementById("mon_input").value = "";
});

let container = document.getElementById("qw");
let navItems = document.querySelectorAll(
  "nav ul li.scd1, nav ul li.scd2, nav ul li.scd3"
);

const contentMap = {
  content1: {
    img: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  content2: {
    img: "./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  content3: {
    img: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
};
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => nav.classList.remove("scd1"));
    this.classList.add("scd1");
    container.innerHTML = "";

    const content = contentMap[this.dataset.content];
    let div = document.createElement("div");
    div.className = "contain";
    let div1 = document.createElement("div");
    div1.className = "featcontain";
    let div2 = document.createElement("div");
    div2.className = "text";
    let imag = document.createElement("img");
    imag.src = content.img;
    let h2 = document.createElement("h2");
    h2.textContent = content.title;
    let p1 = document.createElement("p");
    p1.textContent = content.text;
    let bu = document.createElement("button");
    bu.textContent = "More info";

    // ajout des Elemens

    div1.appendChild(imag);
    div2.appendChild(h2);
    div2.appendChild(p1);
    div2.appendChild(bu);
    div.appendChild(div1);
    div.appendChild(div2);
    container.appendChild(div);
  });
});

let quest = document.querySelectorAll(".qut");

quest.forEach((p) => {
  let span = document.createElement("span");
  let img = document.createElement("img");
  img.src = "./images/icon-arrow.svg";
  span.appendChild(img);
  p.appendChild(span);
  p.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const isactive = this.classList.contains("active");
    quest.forEach((q) => {
      q.classList.remove("active");
      q.nextElementSibling.classList.remove("active");
    });

    if (!isactive) {
      this.classList.add("active");
      answer.classList.add("active");
    }
  });
});

let hamb = document.querySelector(".hamburger");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let nav = document.querySelector("hdr");
let navlist = document.querySelector(".hdr .hd");
let offcanvas = document.querySelector(".offcanvas");
let navitems = document.querySelectorAll("nav ul li a");
let navitm = document.querySelectorAll("nav ul li ");
let header = document.querySelector("header");
let isOpen = false;
hamb.addEventListener("click", function () {
  if (!isOpen) {
    console.log("first time");
    offcanvas.classList.add("show");
    navlist.style.display = "flex";
    bar1.style.transform = "skew(15deg, 40deg)";
    bar2.style.transform = "skew(15deg, -40deg)";
    bar2.style.marginTop = "-15%";
    document.body.className = "noscroll";
  } else {
    offcanvas.classList.remove("show");
    bar1.style.transform = "";
    bar2.style.transform = "";
    bar2.style.marginTop = "";
    document.body.className = "";
  }
  isOpen = !isOpen;
});

navlist.addEventListener("click", function () {
  offcanvas.classList.remove("show");
  document.body.className = "";
  bar1.style.transform = "";
  bar2.style.transform = "";
  bar2.style.marginTop = "";
  isOpen = !isOpen;
});
