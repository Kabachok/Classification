// put your javascript code here

// all variables for templates
var classes_template, animals_template;
var currentClass = context.class[0];
var currentAnimal = currentClass.animals[0];

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
	console.log("template was shown!");
}

$(document).ready(function(){

	// compiling templates
	var source = $("#classes-template").html();
	classes_template = Handlebars.compile(source);

	source = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	// 
	//  clicking on the albums tab shows the 
	//  thumbnails of all the albums
	//
	$("#classes-tab").click(function () {

		// set current nav batton as active
		$(".nav-tabs .active").removeClass("active");
		$("#classes-tab").addClass("active");
		// displays the albums template
		showTemplate(classes_template, context);

		$(".class-btn").click(function () {

			var index = $(this).data("id");
			currentClass = context.class[index];
			showTemplate(animals_template, currentClass);
			$("#animals-tab").click();
		});
		
	});

	$("#animals-tab").click(function () {

		// set current nav batton as active
		$(".nav-tabs .active").removeClass("active");
		$("#animals-tab").addClass("active");
		// displays the albums template
		showTemplate(animals_template, currentClass);
		
	});

	$("#classes-tab").click();
});

