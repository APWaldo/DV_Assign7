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

/*
 * This is console logging our array to make sure that the images appear.
 */
console.log(images);

/*
 * Index of the current image in the array.
 */
var index = 0;


/*Change the image here. It will provide us with the name of the next image.*/
function updateImage(){
		$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
	console.log(image[index]);
}


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

