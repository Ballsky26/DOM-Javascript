// DOM Selection

// document.getElementById(); -> mengembalikan element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Ballsky";

// document.getElementsByTagName(); -> mengembalikan HTMLcollection
const p = document.getElementsByTagName("p");
// p[0].style.backgroundColor = "#ccc";
// p[1].style.backgroundColor = "#ccc";
// p[2].style.backgroundColor = "#ccc";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName(); -> mengembalikan HTMLcollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari Javascript";
