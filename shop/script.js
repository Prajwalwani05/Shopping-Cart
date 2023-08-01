let url = "https://fakestoreapi.com/products";
let productsBox = document.getElementById("productsBox");

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showImage(data);
  }
  fetchData();
  
  function showImage(data){
    let productsHtml = "";
    
    for(let x=0;x<data.length;x++){
        productsHtml += `
        <div class="productCard">
           <div class="img">
               <img src="${data[x].image}" alt="img">
            </div><br>
            <div class="cardContent">
               <span class="price">$${data[x].price}</span>
               <span class="size">S,M,L,XL </span>
               <p class="colors">Colors : 🔴 🔵 🟡</p>
               <p class="rating">Rating : ${data[x].rating.rate}</p>
            </div><br>
            <div class="button">
               <button class="cardBtn" id="cardBtn">Add to Cart</button>
            </div>
        </div>
        `;
    }
    productsBox.innerHTML = productsHtml;
    

   let allBtn = document.getElementById("all");
   allBtn.addEventListener('click' , ()=>{
      productsBox.innerHTML="";
    let productsHtml = "";
    for(let x=0;x<data.length;x++){
      
         productsHtml += `
        <div class="productCard">
           <div class="img">
               <img src="${data[x].image}" alt="img">
            </div><br>
            <div class="cardContent">
               <span class="price">$${data[x].price}</span>
               <span class="size">S,M,L,XL </span>
               <p class="colors">Colors : 🔴 🔵 🟡</p>
               <p class="rating">Rating : ${data[x].rating.rate}</p>
            </div><br>
            <div class="button">
               <button class="cardBtn" id="cardBtn">Add to Cart</button>
            </div>
        </div>
        `;
      productsBox.innerHTML = productsHtml;
    }
   })

    let menBtn = document.getElementById("mens");
    menBtn.addEventListener('click' , ()=>{
      productsBox.innerHTML="";
    let productsHtml = "";
    for(let x=0;x<data.length;x++){
      let category = data[x].category;
      if(category === "men's clothing"){
         productsHtml += `
        <div class="productCard">
           <div class="img">
               <img src="${data[x].image}" alt="img">
            </div><br>
            <div class="cardContent">
               <span class="price">$${data[x].price}</span>
               <span class="size">S,M,L,XL </span>
               <p class="colors">Colors : 🔴 🔵 🟡</p>
               <p class="rating">Rating : ${data[x].rating.rate}</p>
            </div><br>
            <div class="button">
               <button class="cardBtn" id="cardBtn">Add to Cart</button>
            </div>
        </div>
        `;
      }
     
      productsBox.innerHTML = productsHtml;
    }
  });

  
  let womenBtn = document.getElementById("womens");
   womenBtn.addEventListener('click' , ()=>{
   productsBox.innerHTML="";
   let productsHtml = "";
   for(let x=0;x<data.length;x++){
     let category = data[x].category;
     if(category === "women's clothing"){
        productsHtml += `
       <div class="productCard">
          <div class="img">
              <img src="${data[x].image}" alt="img">
           </div><br>
           <div class="cardContent">
              <span class="price">$${data[x].price}</span>
              <span class="size">S,M,L,XL </span>
              <p class="colors">Colors : 🔴 🔵 🟡</p>
              <p class="rating">Rating : ${data[x].rating.rate}</p>
           </div><br>
           <div class="button">
              <button class="cardBtn" id="cardBtn">Add to Cart</button>
           </div>
       </div>
       `;
     }
     productsBox.innerHTML = productsHtml;
   }
 });

 let jewellery = document.getElementById("jewellery");
 jewellery.addEventListener('click' , ()=>{
  productsBox.innerHTML="";
  let productsHtml = "";
  for(let x=0;x<data.length;x++){
    let category = data[x].category;
    if(category === "jewelery"){
       productsHtml += `
      <div class="productCard">
         <div class="img">
             <img src="${data[x].image}" alt="img">
          </div><br>
          <div class="cardContent">
             <span class="price">$${data[x].price}</span>
             <span class="size">S,M,L,XL </span>
             <p class="colors">Colors : 🔴 🔵 🟡</p>
             <p class="rating">Rating : ${data[x].rating.rate}</p>
          </div><br>
          <div class="button">
             <button class="cardBtn" id="cardBtn">Add to Cart</button>
          </div>
      </div>
      `;
    }
    productsBox.innerHTML = productsHtml;
  }
});

let electronics = document.getElementById("electronics");
electronics.addEventListener('click' , ()=>{
 productsBox.innerHTML="";
 let productsHtml = "";
 for(let x=0;x<data.length;x++){
   let category = data[x].category;
   if(category === "electronics"){
      productsHtml += `
     <div class="productCard">
        <div class="img">
            <img src="${data[x].image}" alt="img">
         </div><br>
         <div class="cardContent">
            <span class="price">$${data[x].price}</span>
            <span class="size">S,M,L,XL </span>
            <p class="colors">Colors : 🔴 🔵 🟡</p>
            <p class="rating">Rating : ${data[x].rating.rate}</p>
         </div><br>
         <div class="button">
            <button class="cardBtn" id="cardBtn">Add to Cart</button>
         </div>
     </div>
     `;
   }
   productsBox.innerHTML = productsHtml;
 }
});

document.getElementById("cardBtn").addEventListener('click' , ()=>{
   
})


}

