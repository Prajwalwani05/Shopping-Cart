//  // Function to check if the user is logged in
//  function isLoggedIn() {
//     // Implement your authentication logic here.
//     // For this example, we'll check if the "usersData" is available in localStorage.
//     return !!localStorage.getItem("usersData");
//   }

//   // Check if the user is not logged in; if so, redirect to the login page
//   if (!isLoggedIn()) {
//     window.location.href = "index.html";
//   }

//   let loginNavBtn = document.getElementById('login-nav-btn');
//   loginNavBtn.addEventListener('click' , ()=>{
//     setTimeout(() => {
//         window.location.href = "login.html";
//       }, 500)
//   })

if(localStorage.getItem("accessToken")){
  window.location.href = "/shop";
}
document.getElementById("notValid").addEventListener('click' , ()=>{
  alert("Please Login / Signup");
})
document.getElementById("notValidCart").addEventListener('click' , ()=>{
  alert("Please Login / Signup");
})
document.getElementById("notValidProfile").addEventListener('click' , ()=>{
  alert("Please Login / Signup");
})
let loginBtn = document.getElementById("loginBtn");
    let signupBtn = document.getElementById("signupBtn");

    loginBtn.addEventListener('click' , ()=>{
      setTimeout(() => {
        window.location.href = "../login";
      }, 100);
    })
    signupBtn.addEventListener('click' , ()=>{
        setTimeout(() => {
            window.location.href = "../signup"
        }, 100);
    })
 