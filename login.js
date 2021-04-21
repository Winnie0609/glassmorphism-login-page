const submitBtn = document.querySelector('[data-action="submit"]');
submitBtn.addEventListener("click",signIn);

function signIn(){
    const nameElement = document.getElementById("username");
    const passElement = document.getElementById("pass");
    const name = nameElement.value;
    const pass = passElement.value;
    nameElement.value=""
    passElement.value=""

    if (name === ""){
        alert("Please enter your username and password.")
    }else if(pass === ""){
        alert("Please enter your password.")
    }else{
        alert(name + ", welcome!")
    }
}