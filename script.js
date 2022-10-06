// const username = document.getElementById("username").value;
// const password = document.getElementById("password").value;

const logintext = document.querySelector ("h2");
const form = document.querySelector (".form");
const usernameinput = document.querySelector ("#username");
const passwordinput = document.querySelector ("#password");
const loginButton = document.querySelector (".btnlogin");
const  logoutButton= document.querySelector (".btnlogout");

const userName = "Fredrik";
const passWord = "12345";

if (localStorage.getItem("successfulLogin")) { 
    const login = localStorage.getItem("successfulLogin")
    successfulLogin(login)
}  
console.log(checkLogin)

loginButton.addEventListener("click", checkLogin);
logoutButton.addEventListener("click", logout)

function checkLogin(){
if (usernameinput.value === userName && passwordinput.value === passWord) {
    successfulLogin ();
} else {
    failLogin ();
}
}

// Funktion som visar när man är inloggad
function successfulLogin(){
    logintext.textContent = (`Välkommen, ${userName}`);
    form.style.display = "none";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";

    localStorage.setItem("successfulLogin", userName);
}
// Vad som händer när man skriver in fel lösenord
function failLogin (){
    logintext.textContent = "Fel uppgifter, testa igen";
    logintext.style.color = "red";
    usernameinput.value = "";
    passwordinput.value = "";
}

// Hur man gör för att logga ut
function logout(){
    logintext.textContent = "Logga in här:";
    form.style.display = "flex";
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
    usernameinput.value = "";
    passwordinput.value = "";
    localStorage.removeItem("successfulLogin")
}

// localStorage.setItem("username", "Fredrik");
// localStorage.setItem("password", "12345");


// localStorage.setItem("username", usernameinput.value);
// localStorage.setItem("password", passwordinput.value);


// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(){

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     if (username === "Fredrik" && password === "12345"){
//         console.log("Det stämmer");
//         h2 = document.querySelector("h2");
//         h2.textContent = (`Välkommen, ${username}`);

//         btn.style.display = "none";
//     } else {
//         console.log("FEL!")
//     }
// });

// const h2 = document.querySelector("h2").value
// console.log("Välkommen")


// (username === "Fredrik" && password === "12345")

