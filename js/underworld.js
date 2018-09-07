//faq question section
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

function showDiv() {
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;
    if (email != "" && message != ""){
        document.getElementById('contactAlert').style.display = "block";
    }
 };