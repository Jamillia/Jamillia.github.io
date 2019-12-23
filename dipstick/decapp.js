const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const d5 = document.getElementById("d5");
const d6 = document.getElementById("d6");
const d7 = document.getElementById("d7");
const d8 = document.getElementById("d8");
const d9 = document.getElementById("d9");
const d10 = document.getElementById("d10");
const d11 = document.getElementById("d11");
const d12 = document.getElementById("d12");
const d13 = document.getElementById("d13");
const d14 = document.getElementById("d14");
const d15 = document.getElementById("d15");
const d16 = document.getElementById("d16");
const d17 = document.getElementById("d17");
const d18 = document.getElementById("d18");
const d19 = document.getElementById("d19");
const d20 = document.getElementById("d20");
const d21 = document.getElementById("d21");
const d22 = document.getElementById("d22");
const d23 = document.getElementById("d23");
const d24 = document.getElementById("d24");
const d25 = document.getElementById("d25");
const d26 = document.getElementById("d26");
const d27 = document.getElementById("d27");
const d28 = document.getElementById("d28");
const d29 = document.getElementById("d29");
const d30 = document.getElementById("d30");
const d31 = document.getElementById("d31");
const days = document.getElementById("days");
const noPhotoDays = [d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31];
const photoDays = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13];
const greyedOut = "#444444";
const selected = "lightgreen";
const cursorPoint = "pointer";
const borderColor = "1px solid blue";

let dayToPhotos = new Map();
dayToPhotos.set(d1, ["./December/12-1-1.png", "./December/12-1-2.png"]);
dayToPhotos.set(d2, ["./December/12-2-1.png", "./December/12-2-2.png", "./December/12-2-3.png"]);
dayToPhotos.set(d3, ["./December/12-3-1.png", "./December/12-3-2.png", "./December/12-3-3.png"]);
dayToPhotos.set(d4, ["./December/12-4-1.png", "./December/12-4-2.png"]);
dayToPhotos.set(d5, ["./December/12-5-1.png", "./December/12-5-2.png"]);
dayToPhotos.set(d6, ["./December/12-6-1.png", "./December/12-6-2.png"]);
dayToPhotos.set(d7, ["./December/12-7-1.png", "./December/12-7-2.png"]);
dayToPhotos.set(d8, ["./December/12-8-1.png", "./December/12-8-2.png", "./December/12-8-3.png"]);
dayToPhotos.set(d9, ["./December/12-9-1.png", "./December/12-9-2.png", "./December/12-9-3.png", "./December/12-9-4.png"]);
dayToPhotos.set(d10, ["./December/12-10-1.png", "./December/12-10-2.png", "./December/12-10-3.png"]);
dayToPhotos.set(d11, ["./December/12-11-1.png", "./December/12-11-2.png", "./December/12-11-3.png"]);
dayToPhotos.set(d12, ["./December/12-12-1.png", "./December/12-12-2.png"]);
dayToPhotos.set(d13, ["./December/12-13-1.png", "./December/12-13-2.png", "./December/12-13-3.png"]);
let dayToDiv = new Map();
dayToDiv.set(d1, "12-1");
dayToDiv.set(d2, "12-2");
dayToDiv.set(d3, "12-3");
dayToDiv.set(d4, "12-4");
dayToDiv.set(d5, "12-5");
dayToDiv.set(d6, "12-6");
dayToDiv.set(d7, "12-7");
dayToDiv.set(d8, "12-8");
dayToDiv.set(d9, "12-9");
dayToDiv.set(d10, "12-10");
dayToDiv.set(d11, "12-11");
dayToDiv.set(d12, "12-12");
dayToDiv.set(d13, "12-13");

for (let i = 0; i < noPhotoDays.length; i++) {
	noPhotoDays[i].style.background = greyedOut;
}
for (let i = 0; i < photoDays.length; i++) {
	photoDays[i].style.cursor = cursorPoint;
	photoDays[i].addEventListener('click', function() {doStuff(photoDays[i])});
}

function doStuff(day) {
	var img;
	var div;
	let photoList = dayToPhotos.get(day);
	
	if (day.style.background != selected) {
		div = document.createElement("div");
		div.setAttribute("id", dayToDiv.get(day));
		div.setAttribute("class", "photos");
		day.style.background = selected;
		for (let i = 0; i < photoList.length; i++) {
			img = document.createElement("img");
			img.setAttribute("id", photoList[i]);
			img.setAttribute("src", photoList[i]);
			div.style.border = borderColor;
			div.appendChild(img);
		}
		days.appendChild(div);

		let divlist = Array.from(days.getElementsByTagName("div"));
		divlist.sort(function(a,b) {
			var idA = a.getAttribute("id");
			var idB = b.getAttribute("id");
			return (idA < idB) ? -1 : (idA > idB) ? 1 : 0;
		});
		for (i = 0; i < divlist.length; i++) {
			days.appendChild(divlist[i]);
		}
	} else {
		div = document.getElementById(dayToDiv.get(day));
		days.removeChild(div);
		day.style.background = "none";
	}
}