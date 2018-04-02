var i = 0;
var y = document.getElementsByClassName("burger")[0];
function myFunction(x) {
  i++;
  x.classList.toggle("change");
  if (i%2==0) {
    y.classList.add("burger");
  } else {
    y.classList.remove("burger");
  }

}