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
const photoDays = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31];
const selected = "lightgreen";
const cursorPoint = "pointer";
const borderColor = "1px solid blue";

let dayToPhotos = new Map();
dayToPhotos.set(d1, ["./July/7-1-1.png", "./July/7-1-2.png"]);
dayToPhotos.set(d2, ["./July/7-2-1.png", "./July/7-2-2.png"]);
dayToPhotos.set(d3, ["./July/7-3-1.png", "./July/7-3-2.png", "./July/7-3-3.png"]);
dayToPhotos.set(d4, ["./July/7-4-1.png", "./July/7-4-2.png"]);
dayToPhotos.set(d5, ["./July/7-5-1.png", "./July/7-5-2.png"]);
dayToPhotos.set(d6, ["./July/7-6-1.png", "./July/7-6-2.png", "./July/7-6-3.png"]);
dayToPhotos.set(d7, ["./July/7-7-1.png", "./July/7-7-2.png", "./July/7-7-3.png"]);
dayToPhotos.set(d8, ["./July/7-8-1.png", "./July/7-8-2.png"]);
dayToPhotos.set(d9, ["./July/7-9-1.png", "./July/7-9-2.png", "./July/7-9-3.png", "./July/7-9-4.png"]);
dayToPhotos.set(d10, ["./July/7-10-1.png", "./July/7-10-2.png", "./July/7-10-3.png"]);
dayToPhotos.set(d11, ["./July/7-11-1.png", "./July/7-11-2.png"]);
dayToPhotos.set(d12, ["./July/7-12-1.png", "./July/7-12-2.png", "./July/7-12-3.png"]);
dayToPhotos.set(d13, ["./July/7-13-1.png"]);
dayToPhotos.set(d14, ["./July/7-14-1.png", "./July/7-14-2.png"]);
dayToPhotos.set(d15, ["./July/7-15-1.png", "./July/7-15-2.png"]);
dayToPhotos.set(d16, ["./July/7-16-1.png", "./July/7-16-2.png", "./July/7-16-3.png"]);
dayToPhotos.set(d17, ["./July/7-17-1.png", "./July/7-17-2.png"]);
dayToPhotos.set(d18, ["./July/7-18-1.png", "./July/7-18-2.png", "./July/7-18-3.png"]);
dayToPhotos.set(d19, ["./July/7-19-1.png", "./July/7-19-2.png", "./July/7-19-3.png"]);
dayToPhotos.set(d20, ["./July/7-20-1.png"]);
dayToPhotos.set(d21, ["./July/7-21-1.png", "./July/7-21-2.png", "./July/7-21-3.png"]);
dayToPhotos.set(d22, ["./July/7-22-1.png", "./July/7-22-2.png", "./July/7-22-3.png"]);
dayToPhotos.set(d23, ["./July/7-23-1.png", "./July/7-23-2.png"]);
dayToPhotos.set(d24, ["./July/7-24-1.png", "./July/7-24-2.png"]);
dayToPhotos.set(d25, ["./July/7-25-1.png", "./July/7-25-2.png"]);
dayToPhotos.set(d26, ["./July/7-26-1.png", "./July/7-26-2.png"]);
dayToPhotos.set(d27, ["./July/7-27-1.png"]);
dayToPhotos.set(d28, ["./July/7-28-1.png", "./July/7-28-2.png", "./July/7-28-3.png"]);
dayToPhotos.set(d29, ["./July/7-29-1.png", "./July/7-29-2.png"]);
dayToPhotos.set(d30, ["./July/7-30-1.png", "./July/7-30-2.png", "./July/7-30-3.png"]);
dayToPhotos.set(d31, ["./July/7-31-1.png"]);
let dayToDiv = new Map();
dayToDiv.set(d1, "7-01");
dayToDiv.set(d2, "7-02");
dayToDiv.set(d3, "7-03");
dayToDiv.set(d4, "7-04");
dayToDiv.set(d5, "7-05");
dayToDiv.set(d6, "7-06");
dayToDiv.set(d7, "7-07");
dayToDiv.set(d8, "7-08");
dayToDiv.set(d9, "7-09");
dayToDiv.set(d10, "7-10");
dayToDiv.set(d11, "7-11");
dayToDiv.set(d12, "7-12");
dayToDiv.set(d13, "7-13");
dayToDiv.set(d14, "7-14");
dayToDiv.set(d15, "7-15");
dayToDiv.set(d16, "7-16");
dayToDiv.set(d17, "7-17");
dayToDiv.set(d18, "7-18");
dayToDiv.set(d19, "7-19");
dayToDiv.set(d20, "7-20");
dayToDiv.set(d21, "7-21");
dayToDiv.set(d22, "7-22");
dayToDiv.set(d23, "7-23");
dayToDiv.set(d24, "7-24");
dayToDiv.set(d25, "7-25");
dayToDiv.set(d26, "7-26");
dayToDiv.set(d27, "7-27");
dayToDiv.set(d28, "7-28");
dayToDiv.set(d29, "7-29");
dayToDiv.set(d30, "7-30");
dayToDiv.set(d31, "7-31");

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