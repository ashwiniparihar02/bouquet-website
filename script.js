let container=document.querySelector('.product-contain');
let product="";
let allProducts=[
    {
    name:'BOUQUET 1',
    img:"image/2.png",
    price:{
    original_price:450,
    dis_price:350
}},

{
name:'BOUQUET 2',
img:"image/2.png",
price:{original_price:500,
dis_price:400}
},

{
 name:"BOUQUET 3",
 img:"image/33.png",
 price:{original_price:600,
dis_price:450}  
},

{
    name:"BOUQUET 4",
    img:"image/44.png",
    price:{original_price:600,
   dis_price:200}  
   },

   {
    name:"BOUQUET 5",
    img:"image/55.png",
    price:{original_price:700,
   dis_price:350}  
   },

   {
    name:"BOUQUET 6",
    img:"image/66.png",
    price:{original_price:700,
   dis_price:350}  
   },

   {
    name:"BOUQUET 7",
    img:"image/77.png",
    price:{original_price:700,
   dis_price:350}  
   },

   {
    name:"BOUQUET 8",
    img:"image/88.png",
    price:{original_price:700,
   dis_price:350}  
   },
   {
    name:"BOUQUET 9",
    img:"image/99.png",
    price:{original_price:700,
   dis_price:350}  
   },
   {
    name:"BOUQUET 10",
    img:"image/88.png",
    price:{original_price:800,
   dis_price:450}  
   },
   {
    name:"BOUQUET 11",
    img:"image/110.png",
    price:{original_price:800,
   dis_price:450}  
   },
   {
    name:"BOUQUET 13",
    img:"image/13.png",
    price:{original_price:800,
   dis_price:450}  
   },
]

for(let i=0;i<allProducts.length;i++){
    product=product+` <div class="product-contain">
 <img src=${allProducts[i].img} class="product-img">
    <p class="product-name">${allProducts[i].name}</p>
    <div class="price">
    <p class="discount">₹${allProducts[i].price.original_price}</p>
        <p class="original">₹${allProducts[i].price.dis_price}</p>
      </div>
      <div class="flex-space">
      <button class="cart-btn">Add to Cart</button>
      <button class="buy-btn">Buy</button>
      </div>
</div>`;
container.innerHTML=product;
}

