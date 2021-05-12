function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

signupForm.addEventListener("input", () => {
if (email.value.length > 12) {
signupBtn.removeAttribute("disabled");
} else {
    signupBtn.setAttribute("disabled", "disabled");
}
})


function myFunction(){
var  myobj = document.getElementById("demo");
myobj.remove();


document.getElementById("new") .innerHTML += "<span>user already signed up</span>";
}
