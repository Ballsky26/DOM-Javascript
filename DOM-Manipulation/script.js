// DOM Manipulation Element
const judul = document.getElementById("judul");
judul.innerHTML = "<em>Hello Iam Ballsky</em>";

const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "<div><p>Paragraf 1</p></div>";

const judul = document.querySelector("#judul");
judul.style.color = "black";
judul.style.backgroundColor = "salmon";

const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "Ballsky");

const a = document.querySelector("section#a a");
a.setAttribute("name", "link");

const p2 = document.querySelector(".p2");
p2.setAttribute("class", "label");
