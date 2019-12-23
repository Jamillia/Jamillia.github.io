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
const photoDays = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30];
const selected = "lightgreen";
const cursorPoint = "pointer";
const borderColor = "1px solid blue";

let dayToPhotos = new Map();
dayToPhotos.set(d1, ["./June/6-1-1.png", "./June/6-1-2.png", "./June/6-1-3.png", "./June/6-1-4.png", "./June/6-1-5.png"]);
dayToPhotos.set(d2, ["./June/6-2-1.png", "./June/6-2-2.png"]);
dayToPhotos.set(d3, ["./June/6-3-1.png"]);
dayToPhotos.set(d4, ["./June/6-4-1.png", "./June/6-4-2.png", "./June/6-4-3.png"]);
dayToPhotos.set(d5, ["./June/6-5-1.png", "./June/6-5-2.png", "./June/6-5-3.png", "./June/6-5-4.png"]);
dayToPhotos.set(d6, ["./June/6-6-1.png", "./June/6-6-2.png", "./June/6-6-3.png", "./June/6-6-4.png"]);
dayToPhotos.set(d7, ["./June/6-7-1.png", "./June/6-7-2.png"]);
dayToPhotos.set(d8, ["./June/6-8-1.png", "./June/6-8-2.png"]);
dayToPhotos.set(d9, ["./June/6-9-1.png", "./June/6-9-2.png"]);
dayToPhotos.set(d10, ["./June/6-10-1.png", "./June/6-10-2.png"]);
dayToPhotos.set(d11, ["./June/6-11-1.png", "./June/6-11-2.png"]);
dayToPhotos.set(d12, ["./June/6-12-1.png", "./June/6-12-2.png"]);
dayToPhotos.set(d13, ["./June/6-13-1.png", "./June/6-13-2.png", "./June/6-13-3.png"]);
dayToPhotos.set(d14, ["./June/6-14-1.png", "./June/6-14-2.png", "./June/6-14-3.png"]);
dayToPhotos.set(d15, ["./June/6-15-1.png", "./June/6-15-2.png", "./June/6-15-3.png"]);
dayToPhotos.set(d16, ["./June/6-16-1.png", "./June/6-16-2.png", "./June/6-16-3.png"]);
dayToPhotos.set(d17, ["./June/6-17-1.png", "./June/6-17-2.png", "./June/6-17-3.png"]);
dayToPhotos.set(d18, ["./June/6-18-1.png", "./June/6-18-2.png", "./June/6-18-3.png", "./June/6-18-4.png"]);
dayToPhotos.set(d19, ["./June/6-19-1.png", "./June/6-19-2.png", "./June/6-19-3.png"]);
dayToPhotos.set(d20, ["./June/6-20-1.png", "./June/6-20-2.png", "./June/6-20-3.png", "./June/6-20-4.png"]);
dayToPhotos.set(d21, ["./June/6-21-1.png", "./June/6-21-2.png"]);
dayToPhotos.set(d22, ["./June/6-22-1.png", "./June/6-22-2.png"]);
dayToPhotos.set(d23, ["./June/6-23-1.png", "./June/6-23-2.png"]);
dayToPhotos.set(d24, ["./June/6-24-1.png", "./June/6-24-2.png"]);
dayToPhotos.set(d25, ["./June/6-25-1.png", "./June/6-25-2.png", "./June/6-25-3.png", "./June/6-25-4.png"]);
dayToPhotos.set(d26, ["./June/6-26-1.png", "./June/6-26-2.png"]);
dayToPhotos.set(d27, ["./June/6-27-1.png", "./June/6-27-2.png", "./June/6-27-3.png"]);
dayToPhotos.set(d28, ["./June/6-28-1.png", "./June/6-28-2.png"]);
dayToPhotos.set(d29, ["./June/6-29-1.png", "./June/6-29-2.png", "./June/6-29-3.png"]);
dayToPhotos.set(d30, ["./June/6-30-1.png", "./June/6-30-2.png"]);
let dayToDiv = new Map();
dayToDiv.set(d1, "6-01");
dayToDiv.set(d2, "6-02");
dayToDiv.set(d3, "6-03");
dayToDiv.set(d4, "6-04");
dayToDiv.set(d5, "6-05");
dayToDiv.set(d6, "6-06");
dayToDiv.set(d7, "6-07");
dayToDiv.set(d8, "6-08");
dayToDiv.set(d9, "6-09");
dayToDiv.set(d10, "6-10");
dayToDiv.set(d11, "6-11");
dayToDiv.set(d12, "6-12");
dayToDiv.set(d13, "6-13");
dayToDiv.set(d14, "6-14");
dayToDiv.set(d15, "6-15");
dayToDiv.set(d16, "6-16");
dayToDiv.set(d17, "6-17");
dayToDiv.set(d18, "6-18");
dayToDiv.set(d19, "6-19");
dayToDiv.set(d20, "6-20");
dayToDiv.set(d21, "6-21");
dayToDiv.set(d22, "6-22");
dayToDiv.set(d23, "6-23");
dayToDiv.set(d24, "6-24");
dayToDiv.set(d25, "6-25");
dayToDiv.set(d26, "6-26");
dayToDiv.set(d27, "6-27");
dayToDiv.set(d28, "6-28");
dayToDiv.set(d29, "6-29");
dayToDiv.set(d30, "6-30");

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