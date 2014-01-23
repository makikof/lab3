'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("CLICKY CLICK");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(formButtonClick);

	$("a.thumbnail").click(projectClick);

	$(".defaultDescrip").click(function(e){
		$(".defaultDescrip").fadeOut("normal");
		$("#background").fadeOut("normal");
	});

}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // This was for the lab, but it was ugly/meaningless so I took it out
   // var projectTitle = $(this).find("p").text();
   // var jumbotronHeader = $(".jumbotron h1");
   // jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".defaultDescrip");
    description.fadeIn(500);
    $("#background").fadeIn(200);

}

function formButtonClick(e){
	var chosenProject = $("#project").val();
	var newDescrip = $("#description").val();
	var newWidth = $("#width").val();
	var message = "";

	if (newWidth){
		$(chosenProject).animate({
			width: newWidth
		}, 1000);
	}

	if (newDescrip){
		var description = $(chosenProject).find(".defaultDescrip p");
		description.text(newDescrip);
	}
	
	$("#submitMsg").text('Change made!');
	$('#submitMsg').fadeIn().delay(1000).fadeOut();
}