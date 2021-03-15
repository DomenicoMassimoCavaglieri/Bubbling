console.log(window.innerWidth + " x " + window.innerHeight);

getButton().addEventListener("click", function () {
  setListener();
})

getSelect().addEventListener("click", function () {
  resetListener();
})

function setListener() {
    switch (getSelectValue())  {
     case "ARTICLE":
       getArticle().addEventListener("click", getTargetArticle)
       break;
     case "SECTION":
       getSection().addEventListener("click", getTargetSection)  
       break;
     case "MAIN":
       getMain().addEventListener("click", getTargetMain)  
       break;
   }
}   

function resetListener() {
     resetAnswer()
     getArticle().removeEventListener("click", getTargetArticle)
     getSection().removeEventListener("click", getTargetSection)
     getMain().removeEventListener("click", getTargetMain)
     getCircle().classList.remove("red"); 
     getCircle().classList.remove("green"); 
     getCircle().classList.remove("blue"); 
}

function getTargetArticle() {
      setColorCircle("red");
      printAnswer()
 }

function getTargetSection() {
      setColorCircle("green");
      printAnswer()
 }

function getTargetMain() {
      setColorCircle("blue");
      printAnswer()
 }

function setColorCircle(color) {
  document.getElementById("circle").setAttribute("class", color);
}

function printAnswer() {
  getAnswerTarget().innerHTML = "target is: " + event.target.tagName;
  getAnswerCurrentTarget().innerHTML = "currentTarget is " + event.currentTarget.tagName;
}

function resetAnswer() {
  getAnswerTarget().innerHTML = "target is...";
  getAnswerCurrentTarget().innerHTML = "currentTarget is...";
}

function getSelect() {
  let result = document.getElementById("listener-select");
  return result;
}

function getSelectValue() {
  let result = document.getElementById("listener-select").value;
  return result;
}

function getButton() {
  return document.getElementById("btn");
}

function getCircle() {
  return document.getElementById("circle");
}

function getArticle() {
  return document.getElementById("article");
}

function getSection() {
  return document.getElementById("section");
}

function getMain() {
  return document.getElementById("main");
}

function getAnswerTarget() {
  return document.getElementById("answer-target");
}

function getAnswerCurrentTarget() {
  return document.getElementById("answer-current-target");
}
