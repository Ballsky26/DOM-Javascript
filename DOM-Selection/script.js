// DOM Selection

// document.getElementById(); -> mengembalikan element (Satu Element) (Element yg punya Id pakai ini) (Lebih Cepat)
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Ballsky";

// document.getElementsByTagName(); -> mengembalikan HTMLcollection (Banyak Element HTML)
const p = document.getElementsByTagName("p");
p[0].style.backgroundColor = "#ccc";
p[1].style.backgroundColor = "#ccc";
p[2].style.backgroundColor = "#ccc";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName(); -> mengembalikan HTMLcollection (Banyak Element HTML) (Element yg punya Class pakai ini) (Lebih Cepat)
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari Javascript";

// document.querySelector() -> menghasilkan satu element (Tidak merubah struktur html, id, class pakai ini)
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

const li3 = document.querySelector("section#b ul li:nth-child(3)");
li3.style.backgroundColor = "lightblue";

// document.querySelectorAll(); menghasilkan satu element (Tidak merubah struktur html, id, class pakai ini)
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// Mengubah Node Root
const p4 = document.getElementsByTagName("p");
p4[3].style.backgroundColor = "lightblue";

const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "orange";
