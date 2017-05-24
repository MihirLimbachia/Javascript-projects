/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName=HTMLheaderName.replace('%data%','Mihir Limbachia');
 var formattedRole=HTMLheaderRole.replace('%data%','Software Engineer');
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 var bio={
 	"name":"Mihir Limbachia",
 	"role":"Software Engineer",
 	"contacts":{"mobile":"7600052707","email":"mihirlimbachia@gmail.com","github":"MihirLimbachia","Twitter":"@LimbachiaMihir","location":"Gandhinagar"},
 	"picture":"https://lh4.googleusercontent.com/-axfgGIIYxns/AAAAAAAAAAI/AAAAAAAAAPw/CUivw-bH3c8/photo.jpg",
 	"welcome Message":"Holla",
 	"skills":["HTML","CSS","JavaScript","AngularJS","NodeJS"]
 }
 var education={
 	"schools":[{
 	"Institute":"DAIICT",
 	"Majors":["ICT"],
 	"Minors":["Computational Science"],
 	"Years":"2014-2018",
 	"location":"Gandhinagar"
 }
 ],
    "online courses":[{"title":"Standford Machine Learning","school":"Coursera","url":"ferf","year":"2017"},
    				{"title":"Machine Learning","school":"Udacity","url":"ffsdfsd","year":"2017"}	
    ]
 }
 var work = {
	"jobs": [{
		"employer": "CBS Interactive",
		"title": "Software Engineer",
		"location": "Louisville,KY",
		"dates": "October 2014 - Present",
		"description": "Blah blah..."
	}, {
		"employer": "American Printing House for Blind",
		"title": "Software Engineer",
		"location": "Louisville,KY",
		"dates": "March 2014-Octber 2014",
		"description": "Blah blah..."

	}, {
		"employer": "Model N",
		"title": "Software Engineer",
		"location": "Waltham,MA",
		"dates": "June 2012-September 2013",
		"description": "Designed and implemented an application for an international reference pricing for pharmacy industry to analyze revenue for different scenarios in cloud platform salesforce.com using Apex and Java script, Jquery, HTML5. Using Agile method to develop and Git repository tools" + "\n" + "Research about column oriented data base and SQL server 2013" + "\n" + "Research about could platforms and their usages"

	}, {
		"employer": "BioSensics LLC",
		"title": "Software Engineer Intern",
		"location": "Cambridge,MA",
		"dates": "June 2011-September 2011",
		"description": "Designed and implemented an application to analysis the result given from<br> the sensor attached to the human body and plot the movement in real time in Java"

}],
display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formettedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formettedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);

		}

}
}
 var projects={
 	"projects":[{
 	"title":"Project 1",
 	"Year":"2014",
 	"description":"To b added",
 	"url":"To be added"},
 	{
 	"title":"Project 2",
 	"Year":"2015",
 	"description":"To b added",
 	"url":"To be added"
 	}
 	]
 }

 var toap=HTMLmobile.replace("%data%",bio.contacts.mobile);
 $("#topContacts").append(toap);
 toap=HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(toap);
 toap=HTMLtwitter.replace("%data%",bio.contacts.Twitter);
$("#topContacts").append(toap);
 toap=HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(toap);
toap=HTMLbioPic.replace("%data%",bio.picture);
$("#topContacts").append(toap);
 if(bio.skills.length > 0){
 	$("#header").append(HTMLskillsStart);
 	for(skill in bio.skills){
 	$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
 }
}
$("#main").append(internationalizeButton) 


projects.display =function(){
	for (var project in projects.projects){
	$("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].Year));
    $(".projects-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
    
	}
}
projects.display(); 
$("#mapDiv").append(googleMap);
