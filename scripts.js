/**
 * @author Annie P Waldman
 */

/*
 * First I need to create an array of the images (they have all been resized to match each other).
 */
var images = [
"1_8thAve-A1.jpg",
"2_8thAve-A2.jpg",
"3_BowlingGreen1.jpg",
"4_BowlingGreen2.jpg",
"5_delancy-1.jpg",
"6_delancy-2.jpg",
"7_mottB-1.jpg",
"8_mottB-2.jpg",
"9_Watchtower-1.jpg",
"10_Watchtower-2.jpg"
];

var descript = ["New York Savings Bank on 14th Street & 8th Avenue (1937)", "New York Savings Bank on 14th Street & 8th Avenue (2013)",
"Bowling Green (1907)", "Bowling Green (2013)", "Delancey Street (1968)", "Delancey Street (2013)","Mott Street and Bowery (1967)",
"Mott Street and Bowery (2013)", "Dumbo (1982)", "Dumbo (2013)" ];

/*
 * This is console logging our array to make sure that the images appear.
 */
console.log(images);

/*
 * Index of the current image in the array.
 */
var index2 = 0;

/*Assign events to buttons to set navigation.*/
function setNav2(){
	console.log("setNav2");
	
	$(".button").on("click",function(){
		
		var isNext =$(this).hasClass("next");
		
		if (isNext == true && index2 !=  (descript.length-1)) {
			index2 = index2 + 1;
		} else if (isNext == false && index2 !=  0)  { 	
			index2 = index2 - 1; 	
		};
		
		if (index2 == 0){
			$(".button.prev").addClass("disabled");
		} else if (index2 == (descript.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		};
		updateDescript();
	
	});

	$("body").keydown(function(e){
    // left arrow
    if ((e.keyCode || e.which) == 37 && index2 !=  0)
    {   
        index2 = index2 - 1;
         if (index2 == 0){
			$(".button.prev").addClass("disabled");
		} else if (index == (descript.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
        updateDescript();
       
		};
    }
    // right arrow
    if ((e.keyCode || e.which) == 39 && index2 !=  (descript.length-1))
    {
        index2 = index2 + 1;
        if (index2 == 0){
			$(".button.prev").addClass("disabled");
		} else if (index2 == (descript.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		};
        updateDescript();
        
    }   
});
	
}
/*Change the description here. It will provide us with the name of the next image.*/
function updateDescript(){
		$(".description").html(
		"<p>"+descript[index2]+"</p>"
	);
}


/*
 * Index of the current image in the array.
 */
var index = 0;

/*Assign events to buttons to set navigation.*/
function setNav(){
	console.log("setNav");
	
	$(".button").on("click",function(){
		
		var isNext =$(this).hasClass("next");
		
		if (isNext == true && index !=  (images.length-1)) {
			index = index + 1;
		} else if (isNext == false && index !=  0)  { 	
			index = index - 1; 	
		};
		
		if (index == 0){
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		};
		
		updateImage();
	
	});

	$("body").keydown(function(e){
    // left arrow
    if ((e.keyCode || e.which) == 37 && index !=  0)
    {   
        index = index - 1;
         if (index == 0){
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
        updateImage(); 
       
		};
    }
    // right arrow
    if ((e.keyCode || e.which) == 39 && index !=  (images.length-1))
    {
        index = index + 1;
        if (index == 0){
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		};
        updateImage(); 
        
    }   
});
	
}


/*Change the image here. It will provide us with the name of the next image.*/
function updateImage(){
		$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
}


/*
 * Load the first description.
 */
$(document).ready(function(){
	$(".description").html(
		"<p>"+descript[index2]+"</p>"
	);
	setNav2();
  });



/*
 * Load the first image into our image holder
 */
$(document).ready(function() {
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
	
	$(".button.prev").addClass("disabled");
	setNav();
});
