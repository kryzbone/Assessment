//Selectors
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const slides = document.querySelectorAll(".slide");
const desktop = document.querySelector(".hero-des");
const mobile = document.querySelector(".hero-mob");



let pos = 0;
const first = 0;
const last = slides.length - 1;


//Events
rightButton.addEventListener("click", () => {
	next(pos);
})

leftButton.addEventListener("click", () => {
	prev(pos)
})


//FUNCTIONS
function next(n) {
	//hide current slide
	slides[n].classList.add("hide");

	//show next slide
	if(n == last) {
		slides[first].classList.remove("hide");
		desktop.src = slides[first].dataset.img 
		mobile.src  = slides[first].dataset.img2;
		pos = first;
	}else {
		slides[n+1].classList.remove("hide");
		desktop.src = slides[n+1].dataset.img;
		mobile.src = slides[n+1].dataset.img2;
		pos = n+1
	}
	
}

function prev(n) {
	//hide current slide
	slides[n].classList.add("hide");

	//show prev slide
	if(n == first) {
		slides[last].classList.remove("hide");
		desktop.src = slides[last].dataset.img;
		mobile.src = slides[last].dataset.img2;
		pos = last
	}else {
		slides[n-1].classList.remove("hide");
		desktop.src = slides[n-1].dataset.img; 
		mobile.src = slides[n-1].dataset.img2;
		pos = n-1
	}
}