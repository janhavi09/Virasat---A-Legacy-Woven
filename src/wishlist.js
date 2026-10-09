import './wishlist.css?v=wishlist-logo-short-v3';
import virasatLogo from './assets/virasat-logo-transparent-v2.png';
import cottonSilk from './assets/mangalagiri-cotton-silk/variant-01-cleaned.png';
import kuppadam from './assets/kuppadam-green-clean.png';
import pattu from './assets/pattu-by-pattu/variant-01.png';
import digitalPrint from './assets/digital-print-cotton-silk/variant-01.png';

const container=document.querySelector('#wishlistItems');
document.querySelector('#wishlistBrandLogo').src=virasatLogo;
const catalogue={
  1:{id:1,name:'Pure Handloom Mangalagiri Cotton Silk Saree',price:'₹7,500',image:cottonSilk},
  2:{id:2,name:'Kuppadam Kanchi Border Saree',price:'₹6,500',image:kuppadam},
  3:{id:3,name:'Pure Handloom Mangalagiri Pattu By Pattu Saree',price:'₹10,500',image:pattu},
  4:{id:4,name:'Pure Handloom Mangalagiri Cotton Silk Digital Print Saree',price:'₹5,000',image:digitalPrint}
};
let ids=[];try{ids=JSON.parse(localStorage.getItem('virasat-wishlist')||'[]')}catch{ids=[]}
let saved=ids.map(id=>catalogue[id]).filter(Boolean);
function renderWishlist(){container.innerHTML=saved.length?saved.map(item=>`<article><img src="${item.image}" alt="${item.name}"><h2>${item.name}</h2><p>${item.price}</p><div class="card-actions"><a href="/#shop">View collection →</a><button data-remove="${item.id}">Remove</button></div></article>`).join(''):'<div class="empty"><h2>Your wishlist is waiting.</h2><p>Save a saree from its product details to see it here.</p><a href="/#shop">Explore sarees →</a></div>'}
container.addEventListener('click',event=>{const button=event.target.closest('button[data-remove]');if(!button)return;const id=Number(button.dataset.remove);saved=saved.filter(item=>item.id!==id);localStorage.setItem('virasat-wishlist-items',JSON.stringify(saved));localStorage.setItem('virasat-wishlist',JSON.stringify(saved.map(item=>item.id)));renderWishlist()});
renderWishlist();
