 let email = document.getElementById("email");
 let password = document.getElementById("password");
 let loginBtn = document.getElementById("loginBtn");
 let errorMsg = document.getElementById("errorMsg");
//  if(!localStorage.getItem(accessToken)){
//     window.location.href = "/signup";
// }

loginBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    if(email.value.trim() ==='' || password.value.trim() ===''){
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "All feilds are Mandatory!"
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 1000);
    }
    else{
        let users = JSON.parse(localStorage.getItem('users'));
        if(users){
            let currentUser = users.find(user=>{
                return user.email === email.value.trim();
            })
            if(currentUser){
                if(password.value.trim() === currentUser.password){
                    sessionStorage.setItem("loggedInUser" , JSON.stringify(currentUser));
                    window.location.href = "../shop";
                }
                else{
                    alert("Password is incorrect");
                }
            }
            else{
                errorMsg.style.display = "block";
                errorMsg.style.color = "red";
                errorMsg.textContent = "Please Signup 'You are not a member'";
                setTimeout(() => {
                    errorMsg.style.display = "none";
                    window.location.href="../signup";
                }, 1200);
            }
        }
        else{
            errorMsg.style.display = "block";
                errorMsg.style.color = "red";
                errorMsg.textContent = "Please Signup 'You are not a member'";
                setTimeout(() => {
                    errorMsg.style.display = "none";
                    window.location.href="../signup";
           }, 1200);
        }
    }
});