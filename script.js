function toggleRead() {
    var readMoreContent = document.getElementById("read-more-content");
    if (readMoreContent.style.display === "block") {
        document.getElementById("read-more-content").style.display = "none";
        document.getElementById("readMore").textContent = "Leer más...";
    } else {
        document.getElementById("read-more-content").style.display = "block";
        document.getElementById("readMore").textContent = "Leer menos...";
    }
     
}

function mostrarCategoria(type) {
  var comidaElement= document.getElementById("comida");
  var paseosElement= document.getElementById("paseos");
  var hobbiesElement= document.getElementById("hobbies");

  var comidaBtnElement = document.getElementById("comida-btn");
  var paseosBtnElement= document.getElementById("paseos-btn");
  var hobbiesBtnElement= document.getElementById("hobbies-btn");
  switch (type) {
      case "comida":
           paseosElement.style.display = "none";
           hobbiesElement.style.display = "none";
           comidaElement.style.display = "block";

           paseosBtnElement.style.backgroundColor = "rgb(244, 124, 36)";
           hobbiesBtnElement.style.backgroundColor = "rgb(244, 124, 36)";
           comidaBtnElement.style.backgroundColor = "rgb(90, 3, 2)";
           break;
       case "paseos":
           hobbiesElement.style.display = "none";
           comidaElement.style.display = "none";
           paseosElement.style.display = "block";
        
           comidaBtnElement.style.backgroundColor = "rgb(244, 124, 36)";
           hobbiesBtnElement.style.backgroundColor = "rgb(244, 124, 36)";
           paseosBtnElement.style.backgroundColor = "rgb(90, 3, 2)";
           break;
        default:
            comidaElement.style.display = "none";
            paseosElement.style.display = "none";
            hobbiesElement.style.display = "block";"rgb(90, 3, 2)";

            paseosBtnElement.style.backgroundColor = "rgb(244, 124, 36)";
            comidaBtnElement.style.backgroundColor = "rgb(244, 124, 36)";
            hobbiesBtnElement.style.backgroundColor = "rgb(90, 3, 2)";
            break;


    }


}