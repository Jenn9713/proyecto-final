function toggleRead() {
    var readMoreContent = document.getElementById("read-more-content");
    var readMoreContent = document.getElementById("readMore");
    if (readMoreContent.style.display === "block") {
        readMoreContent.style.display = "none";
        readMoreButton.textContent = "Leer más...";
    }  else {
        readMoreContentElement.style.display = "block";
        readMoreButton.textContent = "Leer menos...";
    }

}

function showCategory(type) {
  var paseosCategory = document.getElementById("paseos");
  var comidaCategory = document.getElementById("comida");
  var hobbiesCategory = document.getElementById("hobbies");

  var paseosBtnCategory = document.getElementById("paseos-btn");
  var comidaBtnCategory = document.getElementById("comida-btn");
  var hobbiesBtnCategory = document.getElementById("hobbies-btn");
  switch (type) { 
     case "paseos":
          comidaCategory.style.display = "none";
          hobbiesCategory.style.display = "none";
          paseosCategory.style.display = "block";

          comidaBtnCategory.style.backgroundColor = "#f47c24";
          hobbiesBtnCategory.style.backgroundColor = "#f47c24";       
          paseosBtnCategory.style.backgroundColor = "#5a0302";
          break;
      case "hobbies":
          comidaCategory.style.display = "none";
          paseosCategory.style.display = "none";
          hobbiesCategory.style.display = "block";

          comidaBtnCategory.style.backgroundColor = "#f47c24";
          paseosBtnCategory.style.backgroundColor = "#f47c24";
          hobbiesBtnCategory.style.backgroundColor = "#5a0302";
          break;
        default :
          paseosCategory.style.display = "none";
          hobbiesCategory.style.display = "none";
          comidaCategory.style.display = "block";

          paseosBtnCategory.style.backgroundColor = "#f47c24";
          hobbiesBtnCategory.style.backgroundColor = "#f47c24";
          comidaBtnCategory.style.backgroundColor = "#5a0302";
          break;
    }       

}