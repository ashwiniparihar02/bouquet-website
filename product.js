let container=document.querySelector('.product-contain');
let iconCart=document.querySelector('.cart');//jab bhi cart me item add krne hoge to uske liye hume icon ko click krna hoga
let closeCart=document.querySelector('.close')
let show=document.querySelector('.cartTab');
let listCart=document.querySelector('.listCart')
let iconCartSpan=document.querySelector('.cart span');
let amountVar=document.querySelector('.amount');


iconCart.addEventListener('click',()=>{
    show.classList.toggle('showcart')
})
closeCart.addEventListener('click',()=>{
    show.classList.toggle('showcart')
})
var allProducts = [];
let cart=[];
var product = " ";

const addDatatoHTML= () =>{
    for(let i=0;i<allProducts.length;i++){
        product=product+` <div class="card"  >

     <img src=${allProducts[i].img} class="product-img">
        <p class="product-name">${allProducts[i].name}</p>
        <div class="price">
        <p class="discount">₹${allProducts[i].price.original_price}</p>
            <p class="original">₹${allProducts[i].price.dis_price}</p>
          </div>
          <div class="flex-space">
          <button class="cart-btn" id="${allProducts[i].id}">Add to Cart</button>
          <button class="buy-btn">Buy</button>
          </div>
    </div>`;
    container.innerHTML=product;
    }
} 

container.addEventListener('click',(event)=>{  
    let positionClick=event.target;
     if(positionClick.classList.contains('cart-btn')){
        let product_id = positionClick.id;
         addToCart(product_id);
        //  console.log(allProducts[product_id].name)
        //  console.log(allProducts[product_id].img)
        //  console.log(allProducts[product_id].price)
     }
 })
 
 const addToCart=(product_id)=>{
    let positionThisProductInCart=cart.findIndex((value)=>value.product_id==product_id);
 if(cart.length<=0){
    cart=[{
      product_id:product_id,
      img : allProducts[product_id].img,
      name : allProducts[product_id].name,
      price : allProducts[product_id].price.dis_price,
      quantity:1
    }]
 }
 else if(positionThisProductInCart<0){
cart.push({
    product_id:product_id,
    img : allProducts[product_id].img,
    name : allProducts[product_id].name,
    price : allProducts[product_id].price.dis_price,
    quantity:1
}) 
 }else{
    cart[positionThisProductInCart].quantity=cart[positionThisProductInCart].quantity+1;
 }
addCartToHTML(product_id)
 }
//  const store = [];

  const addCartToHTML=(product_id)=>{
    // store.push(allProducts[product_id]);
    listCart.innerHTML='';
    let cartTotal = 0 ;
    if(cart.length>0){
        cart.forEach(carts=>{
          cartTotal += (carts.price *  carts.quantity )
       let newCart=document.createElement('div');
       newCart.classList.add('saman');
       let positionProduct=allProducts.findIndex((value) =>value.id==cart.product_id);
       let info=allProducts[positionProduct];
       newCart.innerHTML=`
       <div class="photo">
            <img src=${carts.img} alt="">
          </div>
          <div class="nav">
          ${carts.name}
          </div>
          <div class="totalprice">
            ${carts.quantity}
          </div>
          <div class="kiti">
            <span class="minus"><</span>
            <span>${carts.price}</span>
            <span class="plus"> > </span>
          </div>`;
        listCart.appendChild(newCart) ; 
    })
}
amountVar.innerHTML = `${cartTotal}`
}

const initApp =()=>{
    fetch('products.json')
    .then(response=>response.json())
    .then(data=>{
         allProducts=data;
        console.log(allProducts);
        addDatatoHTML();
    })
}

initApp();

