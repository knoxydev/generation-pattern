let canva = document.getElementById('canvas');
ctx = canva.getContext("2d");

canva.width = window.innerWidth;
canva.height = window.innerHeight;

canva.style.backgroundColor = document.getElementById("bgColor").value = "#333333";
let colors = ["springgreen", "mediumspringgreen", "purple", "yellow", "palegreen", "seagreen", "slateblue", "goldenrod", "azure", "deeppink", "indigo", "orangered"];
let x = 0, y = 0;
let patternInt = 0, menuInt = 0;
let inpX				= document.getElementById("x-input").value = 40;
let inpY				= document.getElementById("y-input").value = 40;
let size 				= document.getElementById("square-input").value = 20;
let arcSize 		= document.getElementById("circle-input").value = 10;

alert("Чтобы открыть настройки нажмите по центру экрана\nЕсли вы на компьютере то можете нажать Space или Enter для создания паттерна");
function repeatGeneration() {
	inpX = document.getElementById("x-input").value;
	inpY = document.getElementById("y-input").value;
	size = document.getElementById("square-input").value;
	arcSize = document.getElementById("circle-input").value;
	canva.style.backgroundColor = document.getElementById("bgColor").value;
	
	ctx.clearRect(0, 0, canva.width, canva.height);
	x = 0, y = 0;
	figureSelect();
}

function figureSelect() {
	for (i = 0; i < 10000; i++) {
		if (x > canva.width) {
			x = 0;
			y += +inpY;
		}
		else if (y > canva.height) return;

		if (document.getElementById("square-btn").checked) viewFigure(1);
		else if (document.getElementById("circle-btn").checked) viewFigure(2);
		else if (document.getElementById("square-circle-btn").checked) viewFigure(3); 

		x += +inpX;
	}
}

function viewFigure(fgr) {
	if (document.getElementById("fill-btn").checked) tsrtZone(fgr, 1);
	else if (document.getElementById("stroke-btn").checked) tsrtZone(fgr, 2);
	else if (document.getElementById("fill-stroke-btn").checked) tsrtZone(fgr, 3);
}
function tsrtZone(fgr, tsrt) {
	if (fgr == 1) drawSquare(tsrt);
	else if (fgr == 2) drawCircle(tsrt);
	else if (fgr == 3) drawSquareCircle(tsrt);
}

function drawSquare(tsrt) {
	if (tsrt == 1) {
		if (document.getElementById("tsrt-true-btn").checked) {
			let col_tsrt = Math.floor(Math.random() * 2);
			if (col_tsrt == 1) ctx.fillStyle = "transparent";
			else ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

		} else if (document.getElementById("tsrt-false-btn").checked) ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
		ctx.fillRect(x, y, size, size);
		ctx.fill();

	} else if (tsrt == 2) {
		if (document.getElementById("tsrt-true-btn").checked) {
			let col_tsrt = Math.floor(Math.random() * 2);
			if (col_tsrt == 1) ctx.strokeStyle = "transparent";
			else ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];

		} else if (document.getElementById("tsrt-false-btn").checked) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
		ctx.strokeRect(x, y, size, size);
		ctx.stroke();

	} else if (tsrt == 3) {
		let fgr_num = Math.floor(Math.random() * 2);

		if (fgr_num == 1) {
			if (document.getElementById("tsrt-true-btn").checked) {
				let col_tsrt = Math.floor(Math.random() * 2);
				if (col_tsrt == 1) ctx.fillStyle = "transparent";
				else ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

			} else if (document.getElementById("tsrt-false-btn").checked) ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
			ctx.fillRect(x, y, size, size);
			ctx.fill();
		} else {
			if (document.getElementById("tsrt-true-btn").checked) {
				let col_tsrt = Math.floor(Math.random() * 2);
				if (col_tsrt == 1) ctx.strokeStyle = "transparent";
				else ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];

			} else if (document.getElementById("tsrt-false-btn").checked) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
			ctx.strokeRect(x, y, size, size);
			ctx.stroke();
		}
	}
}

function drawCircle(tsrt) {
	ctx.beginPath();
	if (tsrt == 1) {
		if (document.getElementById("tsrt-true-btn").checked) {
			
			let col_tsrt = Math.floor(Math.random() * 2);
			if (col_tsrt == 1) ctx.fillStyle = "transparent";
			else ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
			
		} else if (document.getElementById("tsrt-false-btn").checked) ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
		ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);
		ctx.fill();

	} else if (tsrt == 2) {
		if (document.getElementById("tsrt-true-btn").checked) {
			
			let col_tsrt = Math.floor(Math.random() * 2);
			if (col_tsrt == 1) ctx.strokeStyle = "transparent";
			else ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
			
		} else if (document.getElementById("tsrt-false-btn").checked) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
		ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);
		ctx.stroke();

	}	else if (tsrt == 3) {
		let fgr_num = Math.floor(Math.random() * 2);

		if (fgr_num == 1) {
			if (document.getElementById("tsrt-true-btn").checked) {

				let col_tsrt = Math.floor(Math.random() * 2);
				if (col_tsrt == 1) ctx.fillStyle = "transparent";
				else ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				
			} else if (document.getElementById("tsrt-false-btn").checked) ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
			ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);
			ctx.fill();

		} else {
			if (document.getElementById("tsrt-true-btn").checked) {
				
				let col_tsrt = Math.floor(Math.random() * 2);
				if (col_tsrt == 1) ctx.strokeStyle = "transparent";
				else ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];

			} else if (document.getElementById("tsrt-false-btn").checked) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
			ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);
			ctx.stroke();
		}
	}
	ctx.closePath();
}

function drawSquareCircle(tsrt) {
	ctx.beginPath();
	if (tsrt == 1) {
		if (document.getElementById("tsrt-true-btn").checked) {
			let square_circle = Math.floor(Math.random() * 2);
			if (square_circle == 1) {

				let col_tsrt = Math.floor(Math.random() * 2);
				if (col_tsrt == 1) ctx.fillStyle = "transparent";
				else ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.fillRect(x, y, size, size);

			} else {
				let col_tsrt = Math.floor(Math.random() * 2);

				if (col_tsrt == 1) ctx.fillStyle = "transparent";
				else ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);	
			}	
			ctx.fill();

		} else if (document.getElementById("tsrt-false-btn").checked) {
			let square_circle = Math.floor(Math.random() * 2);
			if (square_circle == 1) {
				ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.fillRect(x, y, size, size);;
			} else {
				ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);
			}
			ctx.fill();	
		}
	} else if (tsrt == 2) {
		if (document.getElementById("tsrt-true-btn").checked) {
			let square_circle = Math.floor(Math.random() * 2);
			if (square_circle == 1) {

				let col_tsrt = Math.floor(Math.random() * 2);
				if (col_tsrt == 1) ctx.strokeStyle = "transparent";
				else ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.strokeRect(x, y, size, size);
				
			} else {
				let col_tsrt = Math.floor(Math.random() * 2);
				if (col_tsrt == 1) ctx.strokeStyle = "transparent";
				else ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);
			}
			ctx.stroke();

		} else if (document.getElementById("tsrt-false-btn").checked) {
			let square_circle = Math.floor(Math.random() * 2);
			if (square_circle == 1) {
				ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.strokeRect(x, y, size, size);
			} else {
				ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);	
			}
			ctx.stroke();	
		}
	} else if (tsrt == 3) {
		let square_circle = Math.floor(Math.random() * 2);
		if (square_circle == 1) {
			let fgr_num = Math.floor(Math.random() * 2);
			if (fgr_num == 1) {
				if (document.getElementById("tsrt-true-btn").checked) {

					let col_num = Math.floor(Math.random() * 2);
					if (col_num == 1) ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
					else ctx.fillStyle = "transparent";

				} else if (document.getElementById("tsrt-false-btn").checked) ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.fillRect(x, y, size, size);
				ctx.fill();

			} else {
				if (document.getElementById("tsrt-true-btn").checked) {

					let col_num = Math.floor(Math.random() * 2);
					if (col_num == 1) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
					else ctx.strokeStyle = "transparent";

				} else if (document.getElementById("tsrt-false-btn").checked) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.strokeRect(x, y, size, size);
				ctx.stroke();

			}
		} else {
			let fgr_num = Math.floor(Math.random() * 2);
			if (fgr_num == 1) {
				if (document.getElementById("tsrt-true-btn").checked) {
					
					let col_num = Math.floor(Math.random() * 2);
					if (col_num == 1) ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
					else ctx.fillStyle = "transparent";
					
				} else if (document.getElementById("tsrt-false-btn").checked) ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);
				ctx.fill();

			} else {
				if (document.getElementById("tsrt-true-btn").checked) {

					let col_num = Math.floor(Math.random() * 2);
					if (col_num == 1) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
					else ctx.strokeStyle = "transparent";

				} else if (document.getElementById("tsrt-false-btn").checked) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
				ctx.arc(x, y, arcSize, 0, Math.PI * 2, true);
				ctx.stroke();
			}
		}	
	}
	ctx.closePath();
}

figureSelect();

document.getElementById("btn-generate").addEventListener("click", (e) => repeatGeneration());
document.addEventListener("keydown", (e) => {
	if (e.keyCode == "32") repeatGeneration();
	else if (e.keyCode == "13") repeatGeneration();
	else return;
});

canvas.addEventListener("click", (e) => {
	let menu = document.getElementById("block-setting");
	if (menuInt % 2 == 0) menu.style.transform = "translateX(0px)";
	else menu.style.transform = "translateX(-472px)";
	menuInt++;
});



