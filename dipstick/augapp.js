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
const noPhotoDays = [d7, d8, d9, d10, d11, d12, d23, d28, d30, d31];
const photoDays = [d1, d2, d3, d4, d5, d6, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d24, d25, d26, d27, d29];
const greyedOut = "#444444";
const selected = "lightgreen";
const cursorPoint = "pointer";
const borderColor = "1px solid blue";

let dayToPhotos = new Map();
dayToPhotos.set(d1, ["./August/8-1-1.png", "./August/8-1-2.png"]);
dayToPhotos.set(d2, ["./August/8-2-1.png", "./August/8-2-2.png", "./August/8-2-3.png"]);
dayToPhotos.set(d3, ["./August/8-3-1.png", "./August/8-3-2.png", "./August/8-3-3.png", "./August/8-3-4.png"]);
dayToPhotos.set(d4, ["./August/8-4-1.png", "./August/8-4-2.png"]);
dayToPhotos.set(d5, ["./August/8-5-1.png", "./August/8-5-2.png", "./August/8-5-3.png"]);
dayToPhotos.set(d6, ["./August/8-6-1.png", "./August/8-6-2.png"]);
dayToPhotos.set(d13, ["./August/8-13-1.png", "./August/8-13-2.png"]);
dayToPhotos.set(d14, ["./August/8-14-1.png", "./August/8-14-2.png"]);
dayToPhotos.set(d15, ["./August/8-15-1.png", "./August/8-15-2.png"]);
dayToPhotos.set(d16, ["./August/8-16-1.png", "./August/8-16-2.png", "./August/8-16-3.png"]);
dayToPhotos.set(d17, ["./August/8-17-1.png", "./August/8-17-2.png"]);
dayToPhotos.set(d18, ["./August/8-18-1.png", "./August/8-18-2.png"]);
dayToPhotos.set(d19, ["./August/8-19-1.png", "./August/8-19-2.png"]);
dayToPhotos.set(d20, ["./August/8-20-1.png", "./August/8-20-2.png"]);
dayToPhotos.set(d21, ["./August/8-21-1.png", "./August/8-21-2.png"]);
dayToPhotos.set(d22, ["./August/8-22-1.png", "./August/8-22-2.png"]);
dayToPhotos.set(d24, ["./August/8-24-1.png", "./August/8-24-2.png"]);
dayToPhotos.set(d25, ["./August/8-25-1.png", "./August/8-25-2.png"]);
dayToPhotos.set(d26, ["./August/8-26-1.png", "./August/8-26-2.png", "./August/8-26-3.png"]);
dayToPhotos.set(d27, ["./August/8-27-1.png", "./August/8-27-2.png"]);
dayToPhotos.set(d29, ["./August/8-29-1.png"]);
let dayToDiv = new Map();
dayToDiv.set(d1, "8-01");
dayToDiv.set(d2, "8-02");
dayToDiv.set(d3, "8-03");
dayToDiv.set(d4, "8-04");
dayToDiv.set(d5, "8-05");
dayToDiv.set(d6, "8-06");
dayToDiv.set(d13, "8-13");
dayToDiv.set(d14, "8-14");
dayToDiv.set(d15, "8-15");
dayToDiv.set(d16, "8-16");
dayToDiv.set(d17, "8-17");
dayToDiv.set(d18, "8-18");
dayToDiv.set(d19, "8-19");
dayToDiv.set(d20, "8-20");
dayToDiv.set(d21, "8-21");
dayToDiv.set(d22, "8-22");
dayToDiv.set(d24, "8-24");
dayToDiv.set(d25, "8-25");
dayToDiv.set(d26, "8-26");
dayToDiv.set(d27, "8-27");
dayToDiv.set(d29, "8-29");

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