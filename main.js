let canva = document.getElementById('canvas');
ctx = canva.getContext("2d");
  
canva.width = window.innerWidth;
canva.height = window.innerHeight;

let width = canva.width;
let height = canva.height;

let data = {
	a : ["springgreen", "mediumspringgreen", "palegreen", "slateblue", "goldenrod", "azure", "deeppink"],
	x : 0,
	y : 0,
	b : 0
};

function selectSquCir(int, randNum) {
	if (int == "a") {
		if (randNum == 1) {
			ctx.strokeStyle = data.a[Math.floor(Math.random() * data.a.length)];
			ctx.strokeRect(data.x, data.y, 20, 20)
			ctx.stroke();
		} else if (randNum == 2) {
			ctx.fillStyle = "transparent";
			ctx.fillRect(data.x, data.y, 20, 20)
			ctx.fill();
		} else {
			ctx.fillStyle = data.a[Math.floor(Math.random() * data.a.length)];
			ctx.fillRect(data.x, data.y, 20, 20)
			ctx.fill();
		}
	} else {
		if (randNum == 1) {
			ctx.beginPath();
			ctx.strokeStyle = data.a[Math.floor(Math.random() * data.a.length)];
			ctx.arc(data.x, data.y, 10, 0, Math.PI * 2, true);
			ctx.stroke();
			ctx.closePath();
		} else if (randNum == 2) {
			ctx.beginPath();
			ctx.fillStyle = "transparent";
			ctx.arc(data.x, data.y, 10, 0, Math.PI * 2, true);
			ctx.fill();
			ctx.closePath();
		} else {
			ctx.beginPath();
			ctx.fillStyle = data.a[Math.floor(Math.random() * data.a.length)];
			ctx.arc(data.x, data.y, 10, 0, Math.PI * 2, true);
			ctx.fill();
			ctx.closePath();
		}
	}
}

function drawSquCir(int) {
	for (i = 0; i < 1000; i++) {
		let randNum = Math.ceil(Math.random() * 3);
		if (data.x > width) {
			data.x = 0;
			data.y += 40;
		}
		else if (data.y > height) return;

		if (randNum == 1) {
			ctx.strokeStyle = data.a[Math.floor(Math.random() * data.a.length)];
			selectSquCir(int, randNum);
			ctx.stroke();
		} else if (randNum == 2) {
			ctx.fillStyle = "transparent";
			selectSquCir(int, randNum);
			ctx.fill();
		} else {
			ctx.fillStyle = data.a[Math.floor(Math.random() * data.a.length)];
			selectSquCir(int, randNum);
			ctx.fill();
		}
		data.x += 40;
	}
}
drawSquCir("a");

document.body.addEventListener("click", (e) => {
	if (data.b % 2 == 0) {
		data.x = 0;
		data.y = 0;
		ctx.clearRect(0, 0, width, height);
		drawSquCir("b");
	}
	else {
		data.x = 0;
		data.y = 0;
		ctx.clearRect(0, 0, width, height);
		drawSquCir("a");
	}
	data.b++;
});


