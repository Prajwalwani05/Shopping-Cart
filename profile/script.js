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
    userObject.firstName = fName.value.trim();
    userObject.lastName = lName.value.trim();
    localStorage.setItem("users" , JSON.stringify(userObject));
})
changePasswordBtn.addEventListener('click' , ()=>{
    if(newPassword.value === "" || confirmPassword.value===""){
        alert("Please fill Passwords");
    }
    else if(newPassword.value.trim()!==confirmPassword.value.trim()){
        alert("Passwords are not matching");
    }
    else if(newPassword.value.trim()=== (userObject.password)){
        alert("Old Password and New Password are same");
    }
    else{
        userObject.password = newPassword.value.trim();
        localStorage.setItem("users" , JSON.stringify(userObject));
    }
    newPassword.value = "";
    confirmPassword.value = "";
})

document.querySelector("#logoutBtn").addEventListener("click",()=>{
    window.localStorage.removeItem('users');
    window.sessionStorage.removeItem('loggenInUser')
    window.localStorage.removeItem('accessToken')
    window.location.href="../index.html";

})