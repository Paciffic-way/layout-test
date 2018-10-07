var a = document.querySelector("span.mapview");
a.addEventListener("click", changeMap);
let checker = true;

function changeMap() {

  if (checker == true) {
    checker = false;
    document.querySelector("table#tableid").style.display = "none";
  } 

}


var b = document.querySelector("div.treeview");
b.addEventListener("click", changeTree);


function changeTree() {

    if (checker == false) {
      checker = true;
      document.querySelector("table#tableid").style.display = "table";
    }
  }
  