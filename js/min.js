
let num = document.getElementById('number');
let r = document.getElementById("result");

function grade() {
  if (num.value >= 80 && num.value <= 100) {
    document.getElementById("result").innerHTML = "A+";

  }
  else if (num.value >= 70 && num.value <= 79) {
    document.getElementById("result").innerHTML = "A";
  }
  else if (num.value >= 60 && num.value <= 69) {
    document.getElementById("result").innerHTML = "A-";
  }
  else if (num.value >= 50 && num.value <= 59) {
    document.getElementById("result").innerHTML = "B";
  }
  else if (num.value >= 40 && num.value <= 49) {
    document.getElementById("result").innerHTML = "C";
  }
  else if (num.value >= 33 && num.value <= 39) {
    document.getElementById("result").innerHTML = "D";
  }
  else {
    document.getElementById("result").innerHTML = "Read attentively";
  }
}

