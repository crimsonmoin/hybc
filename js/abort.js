var d=0;
self.addEventListener("message", function(e) {
  d = e.data;
}, false);
function abortOp() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		postMessage(1);
    }
  };
  xhttp.open("GET", "http://api2.valleyretail.in/rest/api.php?request=abortOp&id="+d, true);
  xhttp.send();
};
abortOp();