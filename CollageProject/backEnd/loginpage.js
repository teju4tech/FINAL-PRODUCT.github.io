var form = document.forms["frm"]

form.onsubmit = function(e) {
    e.preventDefault();
    if (form.user.value == "username" && form.pass.value == "lab2user") {

        window.open("/html/index.html");
    } else {
        alert("account doesn't exist")
        alert("Please Enter correct password")
    }

}