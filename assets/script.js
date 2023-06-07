const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*creation bullets*/
const dots = document.querySelector(".dots")
 
 for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
}
let index=0; 
let dotposition =0;
let selectedDot = document.querySelector(".dot:nth-child(1)");
selectedDot.classList.add("dot_selected"); 
let slides_max = slides.length;
console.log("valeur tableau:",slides_max)
// Ajout du listener 
const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function (){
console.log("appuie sur la fléche droite");
index++ ;

if ( dotposition == slides_max) {
	dotposition = 0 ;
}
dotposition++;
console.log("valeur index:",index)

if (index +1 > slides_max ) {
	index = 0 ; 
	dotposition = slides_max;
	}
 const bannerImg =document.querySelector(".banner-img");
 bannerImg.src ="./assets/images/slideshow/" +slides[index].image; 
const bannerp =document.querySelector("#banner p");
bannerp.innerHTML= slides[index].tagLine;
let deselectedDot = document.querySelector(`.dot:nth-child(${dotposition})`);
console.log("dotposition:",dotposition)
deselectedDot.classList.remove("dot_selected"); 
let selectedDot=document.querySelector(`.dot:nth-child(${index+1})`)
selectedDot.classList.add("dot_selected");
});



const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", function (){
	console.log("valeur index :", index);
let deselectedDot = document.querySelector(`.dot:nth-child(${index+1})`);
deselectedDot.classList.remove("dot_selected");
	index-- ;
	if (index < 0 ){ 
		index = slides_max-1}
console.log("valeur index :", index);
 const bannerImg =document.querySelector(".banner-img");
 bannerImg.src ="./assets/images/slideshow/" +slides[index].image;
const bannerp =document.querySelector("#banner p");
bannerp.innerHTML= slides[index].tagLine;
let selectedDot=document.querySelector(`.dot:nth-child(${index+1})`)
selectedDot.classList.add("dot_selected");
})

;
 






