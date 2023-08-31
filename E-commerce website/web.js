let cloths = document.getElementById("cloths");
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let blogs = document.getElementById("blogs");

cloths.addEventListener("click", function(){
    cloths.style.color="red"
    reviews.style.color="black"
    contacts.style.color="black"
    blogs.style.color="black"
})
reviews.addEventListener("click", function(){
    cloths.style.color="black"
    reviews.style.color="red"
    contacts.style.color="black"
    blogs.style.color="black"
})
contacts.addEventListener("click", function(){
    cloths.style.color="black"
    reviews.style.color="black"
    contacts.style.color="red"
    blogs.style.color="black"
})
blogs.addEventListener("click", function(){
    cloths.style.color="black"
    reviews.style.color="black"
    contacts.style.color="black"
    blogs.style.color="red"
})

let logbtn = document.getElementById("login");

logbtn.addEventListener("click", ()=>{
    document.querySelector(".loginPage").style.display="block";
})

let loged = document.getElementById("loged");
loged.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("password");
    if (email.value == "" || pass.value == ""){
        alert("Please enter email and password");
    } else {
        alert("Loged In");
        document.querySelector(".loginPage").style.display="none";
    }
})
