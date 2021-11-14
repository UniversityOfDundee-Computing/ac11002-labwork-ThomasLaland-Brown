
  function myFunction5() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = "£" + x * 0.05;
  }

  function myFunction10() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = "£" + x * 0.1;
  }

  function myFunction25() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = "£" + x * 0.25;
  }

  function myFunctionLarge() {
    var x = document.getElementById("myText").value;
    var tip = 2 + (x * 0.1);
    document.getElementById("demo").innerHTML = "£" + tip;
  }
