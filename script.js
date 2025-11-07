
const cart = [];
const cartCountEl = document.getElementById('cart-count');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');

function updateCartUI(){
  cartCountEl.textContent = cart.length;
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price;
    const div = document.createElement('div');
    div.className = 'cart-row';
    div.style.display='flex';
    div.style.justifyContent='space-between';
    div.style.padding='8px 0';
    div.innerHTML = `<span>${item.name}</span><span>₹${item.price}</span>`;
    cartItemsEl.appendChild(div);
  });
  cartTotalEl.textContent = '₹' + total;
}

document.querySelectorAll('.add-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const prod = e.target.closest('.product');
    const id = prod.getAttribute('data-id');
    const price = parseInt(prod.getAttribute('data-price'),10);
    const name = prod.querySelector('h4').innerText;
    cart.push({id, price, name});
    updateCartUI();
    // show toast briefly
    btn.textContent = 'Added';
    setTimeout(()=> btn.textContent = 'Add to Cart', 900);
  })
});

cartBtn.addEventListener('click', ()=>{
  cartModal.setAttribute('aria-hidden','false');
});

closeCart.addEventListener('click', ()=>{
  cartModal.setAttribute('aria-hidden','true');
});

checkoutBtn.addEventListener('click', ()=>{
  alert('This is a mock checkout. For real payments please integrate a payment gateway.');
});
document.getElementById('contactForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thanks — message sent (mock).');
  e.target.reset();
});
