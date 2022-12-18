"use strict";

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navbar-collapse');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 55; //page .header height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */

// Initialize Gumshoe
var spy = new Gumshoe('.main-nav .nav-link', {
	offset: 55
});


/* ==== Vanilla JS Back To Top Widget ====== */
/* Ref: https://github.com/vfeskov/vanilla-back-to-top */
addBackToTop({
  cornerOffset: 15, // px
  id:'back-to-top',
});


    
/* ======= Countdown ========= */
// set the date we're counting down to
var target_date = new Date("July 16, 2024").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown =  document.getElementById("countdown-box");
var days_span = document.createElement("SPAN");
days_span.className = 'days';
countdown.appendChild(days_span);
var hours_span = document.createElement("SPAN");
hours_span.className = 'hours';
countdown.appendChild(hours_span);
var minutes_span = document.createElement("SPAN");
minutes_span.className = 'minutes';
countdown.appendChild(minutes_span);
var secs_span = document.createElement("SPAN");
secs_span.className = 'secs';
countdown.appendChild(secs_span);
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value.
    days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit script">Days</span>';
    hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit script">Hrs</span>';
    minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit script">Mins</span>';
    secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit script">Secs</span>';
    
  
    //countdown.innerHTML = days + "d, " + hours + "h, "
   // + minutes + "m, " + seconds + "s";  
 
}, 1000);
     

    
/* ===== Packery ===== */
//Ref: http://packery.metafizzy.co/
//Ref: http://imagesloaded.desandro.com/
var elem = document.getElementById('photos-wrapper');
var pckry = new Packery( elem, {
  // options
  itemSelector: '.item',
  percentPosition: true
});


/* ====== SimpleLightbox Plugin ======= */
/*  Ref: https://github.com/andreknieriem/simplelightbox */

var lightbox = new SimpleLightbox('#photos-wrapper .gallery-link', {
	//Options
	animationSlide:false
});

  
const guestNumber = document.getElementById('cguests');   
const guestInfoField = document.querySelector('.guestinfo-group');   
const guestInfoInput = document.getElementById('cguestinfo');  

guestNumber.addEventListener('change', function(e){
	if (guestNumber.value) {
		guestInfoField.style.display = "none"; //hide
		guestInfoInput.value = " "; //Clear data
		console.log('not selected');
	} else if (guestNumber.value == "No Guests") {
		guestInfoField.style.display = "none"; //hide
		guestInfoInput.value = 'No Guests';
		console.log('No guests');
	} else {
		guestInfoField.style.display = "block"; //show
		guestInfoInput.value = " "; //Clear data
		console.log('Has guests');
	}
});
    