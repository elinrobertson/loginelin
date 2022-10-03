const username = document.getElementById("username").value;
// console.log(username)

const password = document.getElementById("password").value;
// console.log(password)

const btn = document.getElementById("btn");
btn.addEventListener("click", function(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "Fredrik" && password === "12345"){
        console.log("Det stämmer");
        h2 = document.querySelector("h2");
        h2.textContent = (`Välkommen, ${username}`);

        btn.style.display = "none";
    } else {
        console.log("FEL!")
    }
});

// const h2 = document.querySelector("h2").value
// console.log("Välkommen")


