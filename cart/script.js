
let t = localStorage.getItem('accessToken');
if(!t){
  alert("Please Signup /login to continue");
  window.location.href = "../signup";
}
const cartSection=document.querySelector("#cart-section");


let cartItems=JSON.parse(localStorage.getItem("cart"))|| [];
console.log(cartItems)



let total=0;
//price calculation
function calculateTotal(){
   
 cartItems.map((item) => {
    total+= item.price;
});
//to get current user who is logged in
let currentUser=JSON.parse(localStorage.getItem("currentUser")) ||{total : 0};
currentUser.total=total.toFixed(2)

localStorage.setItem("currentUser", JSON.stringify(currentUser))

document.getElementById("total-price").innerHTML = "$"+total.toFixed(2)
}
calculateTotal()

//Rendering cart items
function renderCartSection(){
  if(cartItems.length === 0){
   setTimeout(() => {
    window.location.href = "../shop";
   }, 800);
  }
    const searchHTML = cartItems.map((item) => renderItems(item));
    document.getElementById("cart-items").innerHTML =  searchHTML.join("");
}
renderCartSection()

//checkout section with item price
function renderList(){
    const searchHTML_2 = cartItems.map((item) => renderPrice(item));
    document.getElementById("list-items").innerHTML  =  searchHTML_2.join("");
}
renderList()

//Rendering items on the screen
function renderItems(item) {
    return `
   <div class="item">
   <div id="img-div">
   <img src=${item.image} alt="Item" />
   </div>
   <hr>
     <div class="info" id="info-div">
     <div class="title">${item.title}</div>
     <div class="row">
       <div class="price">$${item.price}</div>
       <div class="sized">S,M,L</div>
     </div>
     <div class="colors">
       Colors:
       <div class="row">
         <div class="circle" style="background-color: #000"></div>
         <div class="circle" style="background-color: #4938af"></div>
         <div class="circle" style="background-color: #203d3e"></div>
       </div>
     </div>
     
     <div class="row">Rating: ${item.rating.rate}⭐</div>
   </div>
   <div id="btn-div">
   <button id="addBtn" onclick="removeItems(${item.id})">Remove from cart</button>
   </div>
   </div>
   <div id="msg">Your cart is empty! <span>Go to shop section and shop crazyyyy!</span></div>
  `;

  }

  //Bill rendering
  function renderPrice(item){

    return`
    <div id="itemOfList"> 
    <div>${item.title.slice(0, 20)}...</div>
    <div>$${item.price}</div>

    </div>
    `
  }
 

  //Removing items from the cart
  function removeItems(id){
   cartItems=cartItems.filter((item)=>{
        return item.id != id
    })
    
    localStorage.setItem("cart",JSON.stringify(cartItems))
    renderCartSection()
    renderList()
    calculateTotal()
    window.location.reload();
  }

  //Razor-pay 
  document.querySelector("#pay-btn").addEventListener("click",()=>{
    //clearing cart items after clicking to the checkout btn
    localStorage.setItem("cart", JSON.stringify([]))
    alert("Redirecting to the payment page!");
    window.location.href="../razorpay/index.html"
  })
