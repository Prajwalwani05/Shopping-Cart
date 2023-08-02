let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let saveInfoBtn = document.getElementById("saveInfoBtn");
let oldPassword = document.getElementById("oldPassword");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmNewPassword");
let changePasswordBtn = document.getElementById("changePasswordBtn");
let logoutBtn = document.getElementById("logoutBtn");

let usersArray = JSON.parse(localStorage.getItem("users")) || [];
let userObject = usersArray[usersArray.length -1];

if(userObject){
    fName.value = userObject.firstName;
    lName.value = userObject.lastName;
    oldPassword.value = userObject.password;
}
saveInfoBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
})

document.querySelector("#logoutBtn").addEventListener("click",()=>{
    window.localStorage.removeItem('users');
    window.sessionStorage.removeItem('loggenInUser')
    window.localStorage.removeItem('accessToken')
    window.location.href="../index.html";
})