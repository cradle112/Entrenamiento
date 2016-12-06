/*Button function and assignment of color change
 of the contour of the table*/
 document.getElementById("here").innerHTML = "Here are some champions:";
 function myFunction() {
    var num, voteable;
    num = document.getElementById("num").value;
      voteable = (num < 20 ) ? "You're a NOOB":"You're a good";
      document.getElementById("demo").innerHTML = voteable + " player.";
    var table = document.getElementById("table-main");
      table.style.border = "thick groove brown";
    var thead = table.children[0];
        for (var i = 0; i < thead.children[0].children.length; i++) {
        thead.children[0].children[i].style.border = "thick groove brown";
        }
    var tbody = table.children[1];
        for (var i = 0; i < tbody.children.length; i++) {
        tbody.children[i].style.border = "thick groove brown";
    var tr = tbody.children[i];
        for (var j = 0; j < tr.children.length; j++) {
        tr.children[j].style.border = "thick groove brown";
        }
      }
    document.getElementById("table-main").style.border = "thick groove brown";
  };

//JSON table data

  var objects = {championExample :[
    {
      "name" : "Ashe",
      "role" : "ADC",
      "attack" : "Shooter",
      "powerR" : "Ice arrow"
    },
    {
      "name" : "Garen",
      "role" : "TOP",
      "attack" : "Mele",
      "powerR" : "Sword of Heaven"
    },
    {
      "name" : "Ahri",
      "role" : "MID",
      "attack" : "Magic",
      "powerR" : "Fox attack"
    }
  ]
  }

//Loop to assign table

  var txt = "";
    for (var i = 0; i < objects.championExample.length; i++){
    txt = txt +"<tr><td>"+ objects.championExample[i].name
    + "</td><td>" + objects.championExample[i].role + "</td><td> " + objects.championExample[i].attack + "</td><td>"
    + objects.championExample[i].powerR + "</td></tr>";
    }
  document.getElementById("table").innerHTML = txt;

//Center text
  function functionName() {
  document.getElementsByTagName("table")[0].style.textAlign = "center";
}

//Elements DOM

  var a = document.getElementById("container");
  var b = a.getElementsByTagName("p")
  document.getElementById("add").innerHTML = b[0].innerHTML;


//Steps numbers

function moveOne(obj) {
    obj.innerHTML = "First, enter de name of the champion:"
}

function moveTwo(obj) {
    obj.innerHTML = "1"
}
function moveThree(obj) {
    obj.innerHTML = "Then, insert the role:"
}

function moveFour(obj) {
    obj.innerHTML = "2"
}
function moveFive(obj) {
    obj.innerHTML = "Next, assign the type of attack:"
}

function moveSix(obj) {
    obj.innerHTML = "3"
}
function moveSeven(obj) {
    obj.innerHTML = "Finally, if you know your Power R, insert it:"
}

function moveEight(obj) {
    obj.innerHTML = "4"
}
