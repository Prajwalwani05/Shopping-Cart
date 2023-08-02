
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let signupBtn = document.getElementById("signupBtn");
let errorMsg = document.getElementById("errorMsg");

document.getElementById("notValid").addEventListener('click' , ()=>{
    alert("Please Login / Signup");
  })
  document.getElementById("notValidCart").addEventListener('click' , ()=>{
    alert("Please Login / Signup");
  })
  document.getElementById("notValidProfile").addEventListener('click' , ()=>{
    alert("Please Login / Signup");
  })
// errorMsg.textContent = "";
function checkIfUserExist(email){
    let users = JSON.parse(localStorage.getItem('users'));
    // users will be array of objects
    const obj = users.find(obj=>{
        return obj.email === email;
        // if obj with email is exist 
    })
    if(obj) return true;
    else return false;
}

function saveUser(fName,lName,emailInput,passwordInput){
    let array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    let accessToken = Array.from(array,b=>b.toString(16).padStart(2,"0")).join("");

    let userObj ={
        firstName: fName, // firstName.value
        lastName: lName,
        email: emailInput,
        password: passwordInput,
        accessToken : accessToken,
    }
    let users = JSON.parse(localStorage.getItem('users'));
    if(users === null){
        users = [];
    }
    users.push(userObj); // i pushed my users in users array
    localStorage.setItem('users',JSON.stringify(users)); // updated it in localStorage
    localStorage.setItem('accessToken' , JSON.stringify(accessToken));
    //  write a logic that this user is signed in
    // session storage will delete data after tab is closed
    sessionStorage.setItem('loggenInUser',JSON.stringify(userObj));
    firstName.value='';
    lastName.value='';
    email.value='';
    password.value='';
    confirmPassword.value='';
    
    errorMsg.style.display = "block";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Successful Signup 😇";

    setTimeout(() => {
       errorMsg.style.display  = "none";
       window.location.href='/shop';
    }, 1000);
    // errorMsg.textContent = "SuccessFul!"
    // this is how we handle multiple pages
    // this will redirect to profile folder
    
}

signupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // if any of my field is empty
    if (firstName.value.trim() === '' ||
        lastName.value.trim() === '' ||
        email.value.trim() === '' ||
        password.value.trim() === '' ||
        confirmPassword.value.trim() === '') {
            errorMsg.style.display = "block";
            errorMsg.style.color = "red";
            errorMsg.textContent = "All fields are Mandatory!";
        
            setTimeout(() => {
               errorMsg.style.display  = "none";
            }, 1000);
    }
    else {
        if (password.value.trim() !== confirmPassword.value.trim()) {
            errorMsg.style.display = "block";
            errorMsg.style.color = "red";
            errorMsg.textContent = "Passwords are not matching!";
        
            setTimeout(() => {
               errorMsg.style.display  = "none";
            }, 1000);
            password.value = '';
            confirmPassword.value = '';
        } else {
            // if my user exist
            if (localStorage.getItem('users')) {
                if (checkIfUserExist(email.value)) {
                    errorMsg.style.display = "block";
                    errorMsg.style.color = "green";
                    errorMsg.textContent = "Already Signed up";
            
                    setTimeout(() => {
                       errorMsg.style.display  = "none";
                       window.location.href = "/login";
                    }, 1000);
                   
                }
                else {
                    saveUser(firstName.value, lastName.value, email.value, password.value);
                }
            } else {
                saveUser(firstName.value, lastName.value, email.value, password.value);
            }
        }

    }
});
