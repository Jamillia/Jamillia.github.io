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
const days = document.getElementById("days");
const noPhotoDays = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19];
const photoDays = [d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30];
const greyedOut = "#444444";
const selected = "lightgreen";
const cursorPoint = "pointer";
const borderColor = "1px solid blue";

let dayToPhotos = new Map();
dayToPhotos.set(d20, ["./November/11-20-1.png", "./November/11-20-2.png"]);
dayToPhotos.set(d21, ["./November/11-21-1.png", "./November/11-21-2.png"]);
dayToPhotos.set(d22, ["./November/11-22-1.png", "./November/11-22-2.png", "./November/11-22-3.png", "./November/11-22-4.png"]);
dayToPhotos.set(d23, ["./November/11-23-1.png", "./November/11-23-2.png", "./November/11-23-3.png"]);
dayToPhotos.set(d24, ["./November/11-24-1.png", "./November/11-24-2.png"]);
dayToPhotos.set(d25, ["./November/11-25-1.png", "./November/11-25-2.png", "./November/11-25-3.png"]);
dayToPhotos.set(d26, ["./November/11-26-1.png", "./November/11-26-2.png"]);
dayToPhotos.set(d27, ["./November/11-27-1.png", "./November/11-27-2.png", "./November/11-27-3.png"]);
dayToPhotos.set(d28, ["./November/11-28-1.png", "./November/11-28-2.png"]);
dayToPhotos.set(d29, ["./November/11-29-1.png", "./November/11-29-2.png"]);
dayToPhotos.set(d30, ["./November/11-30-1.png", "./November/11-30-2.png"]);
let dayToDiv = new Map();
dayToDiv.set(d20, "11-20");
dayToDiv.set(d21, "11-21");
dayToDiv.set(d22, "11-22");
dayToDiv.set(d23, "11-23");
dayToDiv.set(d24, "11-24");
dayToDiv.set(d25, "11-25");
dayToDiv.set(d26, "11-26");
dayToDiv.set(d27, "11-27");
dayToDiv.set(d28, "11-28");
dayToDiv.set(d29, "11-29");
dayToDiv.set(d30, "11-30");

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