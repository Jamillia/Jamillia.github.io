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
const noPhotoDays = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14];
const photoDays = [d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31];
const greyedOut = "#444444";
const unselected = "grey";
const selected = "lightgreen";
const cursorPoint = "pointer";
const borderColor = "1px solid blue";

let dayToPhotos = new Map();
dayToPhotos.set(d15, ["./May/5-15-1.png", "./May/5-15-2.png"]);
dayToPhotos.set(d16, ["./May/5-16-1.png", "./May/5-16-2.png"]);
dayToPhotos.set(d17, ["./May/5-17-1.png", "./May/5-17-2.png", "./May/5-17-3.png"]);
dayToPhotos.set(d18, ["./May/5-18-1.png", "./May/5-18-2.png", "./May/5-18-3.png"]);
dayToPhotos.set(d19, ["./May/5-19-1.png", "./May/5-19-2.png"]);
dayToPhotos.set(d20, ["./May/5-20-1.png", "./May/5-20-2.png", "./May/5-20-3.png"]);
dayToPhotos.set(d21, ["./May/5-21-1.png", "./May/5-21-2.png"]);
dayToPhotos.set(d22, ["./May/5-22-1.png", "./May/5-22-2.png"]);
dayToPhotos.set(d23, ["./May/5-23-1.png", "./May/5-23-2.png", "./May/5-23-3.png", "./May/5-23-4.png"]);
dayToPhotos.set(d24, ["./May/5-24-1.png", "./May/5-24-2.png", "./May/5-24-3.png", "./May/5-24-3.png"]);
dayToPhotos.set(d25, ["./May/5-25-1.png", "./May/5-25-2.png", "./May/5-25-3.png"]);
dayToPhotos.set(d26, ["./May/5-26-1.png", "./May/5-26-2.png"]);
dayToPhotos.set(d27, ["./May/5-27-1.png", "./May/5-27-2.png"]);
dayToPhotos.set(d28, ["./May/5-28-1.png", "./May/5-28-2.png", "./May/5-28-3.png"]);
dayToPhotos.set(d29, ["./May/5-29-1.png", "./May/5-29-2.png"]);
dayToPhotos.set(d30, ["./May/5-30-1.png", "./May/5-30-2.png", "./May/5-30-3.png"]);
dayToPhotos.set(d31, ["./May/5-31-1.png", "./May/5-31-2.png"]);
let dayToDiv = new Map();
dayToDiv.set(d15, "5-15");
dayToDiv.set(d16, "5-16");
dayToDiv.set(d17, "5-17");
dayToDiv.set(d18, "5-18");
dayToDiv.set(d19, "5-19");
dayToDiv.set(d20, "5-20");
dayToDiv.set(d21, "5-21");
dayToDiv.set(d22, "5-22");
dayToDiv.set(d23, "5-23");
dayToDiv.set(d24, "5-24");
dayToDiv.set(d25, "5-25");
dayToDiv.set(d26, "5-26");
dayToDiv.set(d27, "5-27");
dayToDiv.set(d28, "5-28");
dayToDiv.set(d29, "5-29");
dayToDiv.set(d30, "5-30");
dayToDiv.set(d31, "5-31");

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
		/*for (let i = 0; i < photoList.length; i++) {
			img = document.getElementById(photoList[i]);
			div.style.border = "none";
			div.removeChild(img);
		}*/
		days.removeChild(div);
		day.style.background = unselected;
	}
}