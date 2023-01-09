let validEmail = false;
let validPassword = false;

let flag = false;
function gooo() {
    let btn = document.getElementById("go");
    if(!(validEmail && validPassword)) {
        if(flag) {
            btn.classList.remove("float-end");
            flag = false;
        } else {
            btn.classList.add("float-end");
            flag = true;
        }
    }
}

function checkEmail() {
    let objEmail = document.getElementById("email");
    if(objEmail.value.match(/^[a-zA-Z0-9._-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/)) {
        validEmail = true;
        objEmail.classList.remove("is-invalid");
        objEmail.classList.add("is-valid");
    } else {
        validEmail = false;
        objEmail.classList.remove("is-valid");
        objEmail.classList.add("is-invalid");
    }
}

function checkPassword() {
    let objPassword = document.getElementById("password");
    if(objPassword.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        validPassword = true;
        objPassword.classList.remove("is-invalid");
        objPassword.classList.add("is-valid");
    } else {
        validPassword = false;
        objPassword.classList.remove("is-valid");
        objPassword.classList.add("is-invalid");
    }
}

function submit() {
    alert("Oops! YOU GOT ME!!");
}