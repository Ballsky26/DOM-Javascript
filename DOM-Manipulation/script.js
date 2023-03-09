// DOM Manipulation Element
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Hello Iam Ballsky</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><p>Paragraf 1</p></div>";

// const judul = document.querySelector("#judul");
// judul.style.color = "black";
// judul.style.backgroundColor = "salmon";

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "Ballsky");

// const a = document.querySelector("section#a a");
// a.setAttribute("name", "link");

// const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label");

// DOM Manipulation Node
// Buat Element Baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

// Simpan tulisan ke dalam paragraf (Menggabungkan)
pBaru.appendChild(teksPBaru);

// Simpan pBaru diakhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// Membuat li Baru
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// Menghapus Tag a
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

// Mengganti Element Baru
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru!");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightblue";
liBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightblue";
