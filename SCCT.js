var counter = 0;

window.onload = () => {
	document.addEventListener("keypress",nextSlide);
	document.body.addEventListener("click",slides,true);
}

function nextSlide(e){
	if(e.code == "Space"){
		slides();
	}
}

function slides(){
	counter++;
	switch(counter){
		case 1:
			document.querySelector(".title").style.display = 'none';
			document.querySelector(".bullets").style.display = "block";
			document.querySelector(".bullet1").style.display = "block";
			break;
		case 2:
			document.querySelector(".bullet2").style.display = "block";
			break;
		case 3:
			document.querySelector(".bullet3").style.display = "block";
			break;
		case 4:
			document.querySelector(".bullets").style.display = "none";
			document.querySelector(".upper1").style.display = "inline";
			break;
		case 5:
			document.querySelector(".image1").style.display = "block";
			break;
		case 6:
			document.querySelector(".image1").style.display = "none";
			document.querySelector(".bullets2").style.display = "block";
			document.querySelector(".bullet2-1").style.display = "block";
			break;
		case 7:
			document.querySelector(".bullet2-2").style.display = "block";
			break;
		case 8:
			document.querySelector(".bullet2-3").style.display = "block";
			break;
		case 9:
			document.querySelector(".bullet2-4").style.display = "block";
			break;
		case 10:
			document.querySelector(".bullets2").style.display = "none";
			break;
		case 11:
			document.querySelector(".image2").style.display = "block";
			break;
		case 12:
			document.querySelector(".equation1").style.display = "block";
			break;
		case 13:
			document.querySelector(".equation2").style.display = "block";
			break;
		case 14:
			document.querySelector(".upper1").innerHTML = "Causes";
			document.querySelector(".equation1").style.display = "none";
			document.querySelector(".equation2").style.display = "none";
			document.querySelector(".image2").style.display = "none";
			break;
		case 15:
			document.querySelector(".image3").style.display = "block";
			break;
		case 16:
			document.querySelector(".bullets3").style.display = "block";
			document.querySelector(".bullet3-1").style.display = "block";
			break;
		case 17:
			document.querySelector(".bullet3-2").style.display = "block";
			break;
		case 18:
			document.querySelector(".bullets3").style.display = "none";
			document.querySelector(".image3").style.display = "none";
			document.querySelector(".upper1").innerHTML = "Electricity Production";
			break;
		case 19:
			document.querySelector(".image4").style.display = "block";
			break;
		case 20:
			document.querySelector(".text1").style.display = "block";
			break;
		case 21:
			document.querySelector(".image4").style.display = "none";
			document.querySelector(".text1").style.display = "none";
			break;
		case 22:
			document.querySelector(".text2").style.display = "block";
			break;
		case 23:
			document.querySelector(".text2").style.display = "none";
			document.querySelector(".text3").style.display = "block";
			break;
		case 24:
			document.querySelector(".text3").style.display = "none";
			break;
		case 25:
			document.querySelector(".image5").style.display = "block";
			break;
		case 26:
			document.querySelector(".image6").style.display = "block";
			break;
		case 27:
			document.querySelector(".image7").style.display = "block";
			break;
		case 28:
			document.querySelector(".image8").style.display = "block";
			break;
		case 29:
			document.querySelector(".image9").style.display = "block";
			break;
		case 30:
			for(let i = 5; i <= 9; i++){
				document.querySelector(`.image${i}`).style.display = "none";
			}
			document.querySelector(".upper1").innerHTML = "Agriculture, Forestry, and Other Land Uses (AFOLU)";
			break;
		case 31:
			document.querySelector(".image10").style.display = "block";
			break;
		case 32:
			document.querySelector(".image10").style.display = "none";
			document.querySelector(".bullets4").style.display = "block";
			document.querySelector(".bullet4-1").style.display = "block";
			break;
		case 33:
			document.querySelector(".bullet4-2").style.display = "block";
			break;
		case 34:
			document.querySelector(".bullets4").style.display = "none";
			break;
		case 35:
			document.querySelector(".image11").style.display = "block";
			break;
		case 36:
			document.querySelector(".image11").style.display = "none";
			document.querySelector(".upper1").innerHTML = "What can be done about it?";
			break;
		case 37:
			document.querySelector(".graph").style.display = "block";
			document.querySelector(".image12").style.display = "block";
			document.querySelector(".image13").style.display = "block";
			break;
		case 38:
			document.querySelector(".image12").classList.add("enlarge");
			document.querySelector(".image13").classList.add("shrink");
			break;
		case 39:
			document.querySelector(".graph").style.display = "none";
			document.querySelector(".image14").style.display = "block";
			break;
	}
}
