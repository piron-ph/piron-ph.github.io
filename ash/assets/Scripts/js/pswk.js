function checkPswd() {
    var confirmPassword = "012124";
    var password = document.getElementById("019292914").value;
    if (password == confirmPassword) {
         window.location="photos.html";
    }
    else{
        alert("Wrong password, babe, try again you can do it :)");
    }
}