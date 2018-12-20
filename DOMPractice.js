/* Global variables just for easy practice */

// An array of objects containing questions and answers
questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language."
  },
  {
    question: "Give the selector and rule to color all paragraph text blue.",
    answer: "p {color: blue;}"
  },
  {
    question:
      "How are heading elements similar and different from the header element?",
    answer:
      "the header element is a container and can contain multiple elements. In addition it is good and commont practice to include a heading element within a header element."
  },
  {
    question:
      "When would you want to use an article element and when would this generally not be necessary?",
    answer: "To be written..."
  }
];

// Initial question to display
qIndex = 0;
// Set up variables to hold element references

// Example of variables and initialization
qCountSpan = document.getElementById("qCount");
qIndexSpan = document.getElementById("qIndex");

const qCreator = document.getElementById("QCreator");
qCreator.classList.add("hideStuff");
// initialize buttons
initButtons();
showQuestion("");







/* Functions defined below here */

/* Attach buttons to their handler functions here. Button id:
 BForward BBack BShow BShowQC BRemove BHideA BAddQ BHideQC */

function initButtons() {
	

	document.getElementById("BShowQC").addEventListener("click", function(){showQACreator()});
	document.getElementById("BHideQC").addEventListener("click", function(){hideQACreator()});
	document.getElementById("BShow").addEventListener("click", function(){showAnswer()});
	document.getElementById("BHideA").addEventListener("click", function(){hideAnswer()});
	document.getElementById("BForward").addEventListener("click", function(){showQuestion("fwd")});
	document.getElementById("BBack").addEventListener("click", function(){showQuestion("bkwd")});
	document.getElementById("BRemove").addEventListener("click", function(){removeQuestion()});
	document.getElementById("BAddQ").addEventListener("click", function(){addQuestion()});

}
  // Show and hide creator


/* You may want to define functions like the following to attach to buttons */

/* Takes the content from the text areas and adds
 to the quesiton list */
function addQuestion() {
  // You provide the functionality.
	 qsn=document.getElementById("Question").value;
	 ans=document.getElementById("Answer").value;
	 if (document.getElementById("Question").value.length > 0 && document.getElementById("Answer").value.length > 0){
		questions.push({question: qsn, answer: ans}); 
		qCountSpan.innerHTML = questions.length;
	    document.getElementById("Question").value='';
		document.getElementById("Answer").value='';
	    showQuestion("");

	  }
    else 
		alert("Please enter your question and answer ");
	 
}

function removeQuestion(){
	if(questions.length > 0){
		questions.splice(qIndex,1);
		if(qIndex >= questions.length - 1){
			qIndex = questions.length - 1;
		}
		showQuestion("");
	}
	else
		alert("There are no questions to remove")
}


function showQACreator(){
	qCreator.classList.remove("hideStuff");
}

function hideQACreator(){
	qCreator.classList.add("hideStuff");
}

function showQuestion(action){
   if(action == "fwd")
	   if(qIndex == questions.length - 1)
		   qIndex = 0;
	   else qIndex ++;
	else if(action == "bkwd")
		if(qIndex == 0)
		 qIndex = questions.length -1;
		else
			qIndex--;
  
   qCountSpan.innerHTML = questions.length;
    qIndexSpan.innerHTML = questions.length > 0 ? qIndex + 1 : 0;
   
   divContentQ = document.getElementById("contentQ");
   divContentA = document.getElementById("contentA");
   
   if(divContentQ.getElementsByTagName("p").length > 0)
	   divContentQ.removeChild(divContentQ.getElementsByTagName("p")[0]);
   if(divContentA.getElementsByTagName("p").length > 0)
	   divContentA.removeChild(divContentA.getElementsByTagName("p")[0]);
   
   pContentQ = document.createElement("p");
   pContentQ.innerHTML = questions[qIndex].question;
   divContentQ.appendChild(pContentQ);
   
   pContentA = document.createElement("p");
   pContentA.innerHTML = questions[qIndex].answer;
   divContentA.appendChild(pContentA);
   divContentA.style.display ="none";

	}

function showAnswer(){
	divContentA = document.getElementById("contentA");
	divContentA.style.display ="block";
}

function hideAnswer(){
	divContentA = document.getElementById("contentA");
	divContentA.style.display ="none";
}


