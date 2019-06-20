var romans = ["M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($("input#number")).val();
    alert("the input number is " + inputNum);
    var result = romanNum(inputNum);
    $("#result").text(result);
  });
});
