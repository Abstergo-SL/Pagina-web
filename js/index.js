document.addEventListener("DOMContentLoaded", function(event){

    let result = "nothing"

    const Http = new XMLHttpRequest();
    const url='http://172.16.51.3:5000/select?table=prueba';
    Http.open("POST", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      result = Http.responseText;
      cositas();
    }

    function cositas(){
        console.log(result);
    }


    navEventHandler();
    
});

function navEventHandler() {
  let navitems = document.getElementsByClassName("nav-button");

  for(var element of navitems){
    if (element.id == "toggle") {
      element.addEventListener('click', function(movidas){

      });
    }
    else {
      element.addEventListener('click', function(event){
        setActive(navitems, this.innerText);
        document.getElementById("frame").src = this.innerText + ".html";
      });
    }
  }
}

function setActive(HTMLcollection, content) {
  for (var elem of HTMLcollection) {
    if (elem.innerText == content) {
      elem.classList.toggle("active");
    }
    else{
      elem.classList.remove("active");
    }
  }
}