import './orders-page.css';
import './orders-delete.css';
import './virasat-brand.css?v=virasat-orders-logo-v2';
import virasatLogo from './assets/virasat-logo-transparent-v2.png';
document.title='My Orders — VIRASAT – A Legacy Woven';
document.querySelector('#ordersBrandLogo').src=virasatLogo;
const list=document.querySelector('#ordersList'); let orders=[];try{orders=JSON.parse(localStorage.getItem('rama-handloom-orders')||'[]')}catch{orders=[]}
const safe=value=>String(value||'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function renderOrders(){list.innerHTML=orders.length?orders.map(order=>`<article class="order-card"><div class="order-head"><div><p>Order ${safe(order.number)}</p><h2>${safe(order.date)}</h2></div><span>Order placed</span></div><div class="order-items">${order.items.map(item=>`<div class="order-item"><img src="${safe(item.image)}" alt=""><div><h3>${safe(item.name)}</h3><b>${safe(item.price)}</b></div></div>`).join('')}</div><div class="order-info"><p><b>Delivery address</b>${safe(order.delivery||'Not added')}</p><p><b>Payment method</b>${safe(order.payment||'Not selected')}</p></div><button class="delete-order" data-order="${safe(order.number)}">Delete order</button></article>`).join(''):'<p class="empty-orders">No orders have been placed yet.</p>';}
renderOrders();
list.addEventListener('click',event=>{const button=event.target.closest('.delete-order');if(!button)return;orders=orders.filter(order=>order.number!==button.dataset.order);localStorage.setItem('rama-handloom-orders',JSON.stringify(orders));renderOrders();});
