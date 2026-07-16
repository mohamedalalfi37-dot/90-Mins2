var allProducts = [
    { id:'c1',name:'Al Ahly 2026 Home (Red)',cat:'clubs',price:300,img:'https://i.ibb.co/mLgWRgc/ahly-home.jpg',emoji:'🔴',badge:'Best Seller',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Official Al Ahly home jersey.' },
    { id:'c2',name:'Al Ahly 2026 Away (Black)',cat:'clubs',price:290,img:'https://i.ibb.co/xNLmYQT/ahly-away.jpg',emoji:'⚫',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Official Al Ahly away jersey.' },
    { id:'c3',name:'Zamalek 2026 Home (White)',cat:'clubs',price:350,img:'https://i.ibb.co/PGn83HT2/zamalek-home.jpg',emoji:'⚪',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Official Zamalek home jersey.' },
    { id:'c4',name:'Zamalek 2026 Away (Black)',cat:'clubs',price:250,img:'https://i.ibb.co/VWzJbCbC/zamalek-away.jpg',emoji:'⚫',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Official Zamalek away jersey.' },
    { id:'c5',name:'Barcelona 2026 Home',cat:'clubs',price:350,img:'https://i.ibb.co/mxqxXWC/barcelona-home.jpg',emoji:'🔵🔴',badge:'Exclusive',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'FC Barcelona home jersey.' },
    { id:'c6',name:'Barcelona 2026 Away (White)',cat:'clubs',price:350,img:'https://i.ibb.co/5g5YfVFQ/barcelona-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'FC Barcelona away jersey.' },
    { id:'c7',name:'Real Madrid 2026 Home (White)',cat:'clubs',price:300,img:'https://i.ibb.co/GY3fV87/real-madrid-home.jpg',emoji:'⚪👑',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid home jersey.' },
    { id:'c8',name:'Real Madrid 2026 Away (Black)',cat:'clubs',price:350,img:'https://i.ibb.co/99KSLqGS/real-madrid-away.jpg',emoji:'⚫',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid away jersey.' },
    { id:'c9',name:'Real Madrid Classic 2002',cat:'clubs',price:720,img:'https://i.ibb.co/xqZHZVqv/real-madrid-classic.jpg',emoji:'⚪⭐',badge:'Classic',type:'Classic',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid 2002 classic jersey.' },
    { id:'c10',name:'Liverpool 2026 Home (Red)',cat:'clubs',price:350,img:'https://i.ibb.co/vC0dX7Fc/liverpool-home.jpg',emoji:'🔴',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Liverpool home jersey.' },
    { id:'c11',name:'Liverpool 2026 Away (White)',cat:'clubs',price:350,img:'https://i.ibb.co/tphyS09c/liverpool-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Liverpool away jersey.' },
    { id:'c12',name:'Man City 2026 Home',cat:'clubs',price:290,img:'https://i.ibb.co/V0mxDqVb/man-city-home.jpg',emoji:'🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Manchester City home jersey.' },
    { id:'c13',name:'Man United 2026 Home',cat:'clubs',price:750,img:'https://i.ibb.co/DD5xDjpQ/man-united-home.jpg',emoji:'🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Manchester United home jersey.' },
    { id:'c14',name:'Arsenal 2026 Home',cat:'clubs',price:300,img:'https://i.ibb.co/Pfx3Sd9/arsenal-home.jpg',emoji:'🔴⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Arsenal home jersey.' },
    { id:'c15',name:'Chelsea 2026 Home',cat:'clubs',price:750,img:'https://i.ibb.co/8nqWmxPJ/chelsea-home.jpg',emoji:'🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Chelsea home jersey.' },
    { id:'c16',name:'Bayern Munich 2026 Home',cat:'clubs',price:350,img:'https://i.ibb.co/DfrjTxjK/bayern-home.jpg',emoji:'🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Bayern Munich home jersey.' },
    { id:'c17',name:'Juventus 2026 Home',cat:'clubs',price:390,img:'https://i.ibb.co/N2WgrVkD/juventus-home.jpg',emoji:'⚫⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Juventus home jersey.' },
    { id:'c18',name:'PSG 2026 Home',cat:'clubs',price:350,img:'https://i.ibb.co/yB0hXNjQ/psg-home.jpg',emoji:'🔴🔵',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Paris Saint-Germain home jersey.' },
    { id:'c19',name:'Inter Milan 2026 Home',cat:'clubs',price:750,img:'https://i.ibb.co/s9Knjsyk/inter-milan-home.jpg',emoji:'⚫🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Inter Milan home jersey.' },
    { id:'c20',name:'AC Milan 2026 Home',cat:'clubs',price:290,img:'https://i.ibb.co/7JT6DcQ3/ac-milan-home.jpg',emoji:'🔴⚫',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'AC Milan home jersey.' },
    { id:'n1',name:'Brazil Home 2026 (Yellow)',cat:'national',price:390,img:'https://i.ibb.co/chT32xHd/brazil-home.jpg',emoji:'🟡🟢',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Brazil home jersey.' },
    { id:'n2',name:'Brazil Away 2026 (Black)',cat:'national',price:300,img:'https://i.ibb.co/Mk3Lt6Sx/brazil-away.jpg',emoji:'⚫',badge:'New',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Brazil away jersey.' },
    { id:'n3',name:'Argentina Home 2026',cat:'national',price:250,img:'https://i.ibb.co/nqy9fjWN/argentina-home.jpg',emoji:'⚪🔵',badge:'World Champ',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Argentina home jersey.' },
    { id:'n4',name:'Argentina Away 2026',cat:'national',price:250,img:'https://i.ibb.co/xtvGRwsm/argentina-away.jpg',emoji:'🟣',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Argentina away jersey.' },
    { id:'n5',name:'Portugal Home 2026 (Black)',cat:'national',price:300,img:'https://i.ibb.co/zhX2H7Y5/portugal-home.jpg',emoji:'⚫',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Portugal home jersey.' },
    { id:'n6',name:'Portugal Away 2026 (Red)',cat:'national',price:300,img:'https://i.ibb.co/ZzS7WSPB/portugal-away.jpg',emoji:'🔴',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Portugal away jersey.' },
    { id:'n7',name:'France Home 2026 (Blue)',cat:'national',price:300,img:'https://i.ibb.co/TBXNkD8Z/france-home.jpg',emoji:'🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'France home jersey.' },
    { id:'n8',name:'France Away 2026 (White)',cat:'national',price:500,img:'https://i.ibb.co/j98PxdBK/france-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'France away jersey.' },
    { id:'n9',name:'England Home 2026 (White)',cat:'national',price:500,img:'https://i.ibb.co/MkB4MCFz/england-home.jpg',emoji:'⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'England home jersey.' },
    { id:'n10',name:'England Away 2026 (Red)',cat:'national',price:500,img:'https://i.ibb.co/7xxgFTYy/england-away.jpg',emoji:'🔴',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'England away jersey.' },
    { id:'n11',name:'Egypt Home 2026 (Red)',cat:'national',price:350,img:'https://i.ibb.co/v4v6YMhG/egypt-home.jpg',emoji:'🇪🇬🔴',badge:'National',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Egypt home jersey.' },
    { id:'n12',name:'Egypt Away 2026 (White)',cat:'national',price:350,img:'https://i.ibb.co/tpwf5f6N/egypt-away.jpg',emoji:'🇪🇬⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Egypt away jersey.' },
    { id:'n13',name:'Morocco Home 2026',cat:'national',price:350,img:'https://i.ibb.co/HT0czswM/morocco-home.jpg',emoji:'🇲🇦🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Morocco home jersey.' },
    { id:'n14',name:'Italy Home 2026 (Blue)',cat:'national',price:500,img:'https://i.ibb.co/zTTPYgQk/italy-home.jpg',emoji:'🇮🇹🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Italy home jersey.' },
    { id:'n15',name:'Italy Away 2026 (White)',cat:'national',price:700,img:'https://i.ibb.co/5gTBySDk/italy-away.jpg',emoji:'🇮🇹⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Italy away jersey.' },
    { id:'n16',name:'Germany Home 2026 (White)',cat:'national',price:500,img:'https://i.ibb.co/gL2DZShy/germany-home.jpg',emoji:'🇩🇪⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Germany home jersey.' },
    { id:'n17',name:'Germany Away 2026 (Green)',cat:'national',price:375,img:'https://i.ibb.co/Gvdf70Pg/germany-away.jpg',emoji:'🇩🇪🟢',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Germany away jersey.' },
    { id:'n18',name:'Spain Home 2026 (Red)',cat:'national',price:300,img:'https://i.ibb.co/yFPzcgzy/spain-home.jpg',emoji:'🇪🇸🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Spain home jersey.' },
    { id:'n19',name:'Spain Away 2026 (White)',cat:'national',price:400,img:'https://i.ibb.co/bMxrD153/spain-away.jpg',emoji:'🇪🇸⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Spain away jersey.' },
    { id:'l1',name:'Aboutrika x Al Ahly Legend',cat:'legends',price:0,img:'https://i.ibb.co/twv9VW7s/aboutrika-legend.jpg',emoji:'⭐🔴',badge:'Sold Out',type:'Legend',sizes:[],desc:'Currently out of stock.' },
    { id:'l2',name:'Zinedine Zidane Real Madrid 2002',cat:'legends',price:750,img:'https://i.ibb.co/B5M9GSKX/zidane-legend.jpg',emoji:'👑⚪',badge:'Legend',type:'Classic',sizes:['S','M','L','XL','XXL'],desc:'Zinedine Zidane classic jersey.' },
    { id:'p1',name:'Cristiano Ronaldo x Al Nassr',cat:'players',price:650,img:'https://i.ibb.co/chK0y05t/ronaldo-nassr.jpg',emoji:'🐐🟡',badge:'CR7',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'CR7 Al Nassr jersey.' },
    { id:'p2',name:'Lionel Messi x Inter Miami',cat:'players',price:750,img:'https://i.ibb.co/LzxR6sJc/messi-intermiami.jpg',emoji:'🐐🟣',badge:'Messi',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'Messi Inter Miami jersey.' },
    { id:'p3',name:'Mohamed Salah x Liverpool',cat:'players',price:400,img:'https://i.ibb.co/Kx1bMnpX/salah-liverpool.jpg',emoji:'👑🔴',badge:'Mo Salah',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'Salah Liverpool jersey.' },
    { id:'pkg-full',name:'CR7 Full Package (3 Jerseys)',cat:'package',price:1200,img:'https://i.ibb.co/vvc38yxV/ronaldo-package-new.jpg',emoji:'👕👕👕',badge:'Best Value',type:'Full Package',sizes:['S','M','L','XL','XXL'],desc:'MU 2008 + RM 2011 + Al Nassr.' }
];

var cart = JSON.parse(localStorage.getItem('90m_cart_v10')) || [];
var favorites = JSON.parse(localStorage.getItem('90m_fav_v10')) || [];
var user = JSON.parse(localStorage.getItem('90m_user_v10')) || null;
var dark = localStorage.getItem('90m_dark_v10') === 'true';
var currentFilter = 'all';

function saveCart(){ localStorage.setItem('90m_cart_v10',JSON.stringify(cart)); updateUI(); }
function saveFav(){ localStorage.setItem('90m_fav_v10',JSON.stringify(favorites)); }
function toggleFav(id){
    var i = favorites.indexOf(id);
    if(i>-1){favorites.splice(i,1);toast('Removed');}else{favorites.push(id);toast('Added');}
    saveFav();render();
}
function isFav(id){return favorites.indexOf(id)>-1;}

function addToCart(p,size){
    if(p.price===0||p.sizes.length===0){toast('SOLD OUT');return;}
    var ex=null;
    for(var i=0;i<cart.length;i++){if(cart[i].id===p.id&&cart[i].size===size){ex=cart[i];break;}}
    if(ex)ex.qty++;else cart.push({id:p.id,name:p.name,price:p.price,img:p.img,size:size,qty:1});
    saveCart();toast('Added: '+p.name);
}
function removeCart(i){cart.splice(i,1);saveCart();}
function getTotal(){
    var t=0;
    for(var i=0;i<cart.length;i++)t+=cart[i].price*cart[i].qty;
    var h=false,a=false;
    for(var j=0;j<cart.length;j++){if(cart[j].id==='n11')h=true;if(cart[j].id==='n12')a=true;}
    if(h&&a)t-=100;
    return t;
}

function updateUI(){
    var b=document.getElementById('cartCountBadge');if(b){var c=0;for(var i=0;i<cart.length;i++)c+=cart[i].qty;b.textContent=c;}
    var el=document.getElementById('cartItems');if(!el)return;
    if(cart.length===0){el.innerHTML='<p style="text-align:center;padding:30px;">Cart is empty</p>';}
    else{
        var h='';
        for(var i=0;i<cart.length;i++){
            var item=cart[i];
            h+='<div class="cart-item">';
            h+='<span style="font-size:1.5rem;min-width:40px;text-align:center;">'+(item.img?'<img src="'+item.img+'" style="width:40px;height:40px;object-fit:cover;border-radius:6px;">':(item.emoji||''))+'</span>';
            h+='<div style="flex:1;"><strong>'+item.name+'</strong><br><small>Size: '+item.size+' | '+item.price+' EGP x'+item.qty+'</small></div>';
            h+='<button onclick="removeCart('+i+')" style="background:none;border:none;cursor:pointer;color:#e94560;">X</button>';
            h+='</div>';
        }
        el.innerHTML=h;
    }
    var t=document.getElementById('cartTotal');if(t)t.textContent=getTotal().toLocaleString()+' EGP';
}

function toggleCart(){
    document.getElementById('cartSidebar').classList.toggle('active');
    document.getElementById('cartOverlay').classList.toggle('active');
    updateUI();
}

function openDetail(productId){
    var p=null;for(var i=0;i<allProducts.length;i++){if(allProducts[i].id===productId){p=allProducts[i];break;}}
    if(!p)return;
    var sold=(p.price===0||p.sizes.length===0);
    var page=document.getElementById('detailPage');
    var con=document.getElementById('detailPageContent');
    var fav=isFav(p.id);
    var h='<div class="detail-layout">';
    h+='<div class="detail-image-section">';
    if(p.img)h+='<img src="'+p.img+'" alt="'+p.name+'" style="'+(sold?'opacity:0.5;':'')+'">';
    else h+='<span class="detail-emoji">'+(p.emoji||'')+'</span>';
    if(sold)h+='<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:3rem;font-weight:900;color:#e94560;">SOLD OUT</div>';
    h+='</div>';
    h+='<div class="detail-info-section">';
    h+='<span class="detail-cat">'+p.cat+'</span><h2>'+p.name+'</h2>';
    if(p.badge)h+='<span class="detail-badge">'+p.badge+'</span>';
    if(p.type)h+='<span class="detail-type">'+p.type+'</span>';
    h+='<p class="detail-desc">'+(p.desc||'')+'</p>';
    if(sold){
        h+='<div style="font-size:2rem;font-weight:900;color:#e94560;margin:15px 0;">SOLD OUT</div>';
    }else{
        h+='<div class="detail-price">'+p.price+' EGP</div>';
        h+='<p class="detail-size-label">Select Size:</p><div class="sizes-row" id="detSizes" style="gap:8px;">';
        for(var s=0;s<p.sizes.length;s++)h+='<span class="size-dot '+(p.sizes[s]==='L'?'selected':'')+'" data-size="'+p.sizes[s]+'" style="padding:8px 16px;font-size:0.8rem;">'+p.sizes[s]+'</span>';
        h+='</div><button class="btn-add" id="btnDetAdd" style="margin-top:15px;padding:14px;">Add to Cart</button>';
    }
    h+='<button class="btn-add" id="btnDetFav" style="margin-top:10px;padding:14px;background:'+(fav?'#e94560':'var(--text)')+';color:#fff;">'+(fav?'Remove from Favorites':'Add to Favorites')+'</button>';
    h+='</div></div>';
    con.innerHTML=h;
    
    if(!sold){
        var ds='L';var dots=con.querySelectorAll('#detSizes .size-dot');
        for(var d=0;d<dots.length;d++){dots[d].onclick=function(){for(var x=0;x<dots.length;x++)dots[x].classList.remove('selected');this.classList.add('selected');ds=this.dataset.size;};}
        document.getElementById('btnDetAdd').onclick=function(){addToCart(p,ds);};
    }
    document.getElementById('btnDetFav').onclick=function(){toggleFav(p.id);var fn=isFav(p.id);this.textContent=fn?'Remove from Favorites':'Add to Favorites';this.style.background=fn?'#e94560':'var(--text)';};
    page.classList.add('active');document.body.style.overflow='hidden';window.scrollTo(0,0);
}
function closeDetail(){document.getElementById('detailPage').classList.remove('active');document.body.style.overflow='';}

function search(){
    var q=document.getElementById('searchInput').value.trim().toLowerCase();
    var cards=document.querySelectorAll('.product-card');var v=0;
    for(var i=0;i<cards.length;i++){var n=(cards[i].querySelector('h3')?.textContent||'').toLowerCase();if(!q||n.indexOf(q)>-1){cards[i].classList.remove('hidden-by-search');v++;}else{cards[i].classList.add('hidden-by-search');}}
    document.getElementById('noResults').style.display=(q&&v===0)?'block':'none';
}

function goToCheckout(){
    if(!user){toast('Please sign in first');openLogin();return;}
    if(!cart.length){toast('Cart is empty');return;}
    if(document.getElementById('cartSidebar').classList.contains('active'))toggleCart();
    document.getElementById('checkoutPage').classList.add('active');
    document.getElementById('cName').value=user.name||'';
    document.getElementById('cPhone').value=user.phone||'';
    updateCheckoutSummary();
}
function closeCheckout(){document.getElementById('checkoutPage').classList.remove('active');}
function updateCheckoutSummary(){
    var h='<strong>Order Summary</strong><br>';
    for(var i=0;i<cart.length;i++)h+='<div style="display:flex;justify-content:space-between;font-size:0.8rem;"><span>'+cart[i].name+' ('+cart[i].size+') x'+cart[i].qty+'</span><span>'+cart[i].price*cart[i].qty+' EGP</span></div>';
    h+='<div style="font-weight:900;border-top:1px solid var(--border);padding-top:8px;margin-top:8px;">Total: '+getTotal().toLocaleString()+' EGP</div>';
    document.getElementById('checkoutSummary').innerHTML=h;
}
function confirmOrder(){
    var n=document.getElementById('cName').value.trim();
    var p=document.getElementById('cPhone').value.trim();
    var a=document.getElementById('cAddress').value.trim();
    var nt=document.getElementById('cNotes').value.trim();
    if(!n||!p||!a){toast('Complete all fields');return;}
    var sum='';
    for(var i=0;i<cart.length;i++)sum+='- '+cart[i].name+' | Size '+cart[i].size+' | '+cart[i].price+' EGP x'+cart[i].qty+'\n';
    var msg='New Order - 90 Mins\n\nName: '+n+'\nPhone: '+p+'\nAddress: '+a+'\n'+(nt?'Notes: '+nt+'\n':'')+'\nItems:\n'+sum+'\nTotal: '+getTotal()+' EGP\nCash on Delivery\nShubra El Kheima';
    window.open('https://wa.me/201027081851?text='+encodeURIComponent(msg),'_blank');
    cart=[];saveCart();closeCheckout();toast('Order sent!');
}

function toggleDark(){dark=!dark;document.body.classList.toggle('dark-mode',dark);localStorage.setItem('90m_dark_v10',dark);document.getElementById('themeToggle').textContent=dark?'☀️':'🌓';}

function openLogin(){document.getElementById('loginModal').classList.add('active');switchTab('login');}
function closeLogin(){document.getElementById('loginModal').classList.remove('active');}
function switchTab(t){
    document.getElementById('tabLogin').classList.remove('active');
    document.getElementById('tabSignup').classList.remove('active');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    if(t==='login'){document.getElementById('tabLogin').classList.add('active');document.getElementById('loginForm').classList.remove('hidden');document.getElementById('modalTitle').textContent='Sign In';}
    else{document.getElementById('tabSignup').classList.add('active');document.getElementById('signupForm').classList.remove('hidden');document.getElementById('modalTitle').textContent='Create Account';}
    document.getElementById('loginErr').style.display='none';
    document.getElementById('signErr').style.display='none';
}
function login(){
    var id=document.getElementById('loginId').value.trim();
    var pw=document.getElementById('loginPass').value.trim();
    if(!id||!pw){toast('Fill all fields');return;}
    var users=JSON.parse(localStorage.getItem('90m_users_v10'))||[];
    var u=null;
    for(var i=0;i<users.length;i++){if((users[i].phone===id||users[i].email===id)&&users[i].password===pw){u=users[i];break;}}
    if(u){user=u;localStorage.setItem('90m_user_v10',JSON.stringify(u));updateUserUI();closeLogin();toast('Signed in!');}
    else{document.getElementById('loginErr').style.display='block';}
}
function signup(){
    var n=document.getElementById('signName').value.trim();
    var ph=document.getElementById('signPhone').value.trim();
    var em=document.getElementById('signEmail').value.trim();
    var pw=document.getElementById('signPass').value.trim();
    if(!n||!ph||!pw){toast('Fill all fields');return;}
    var users=JSON.parse(localStorage.getItem('90m_users_v10'))||[];
    for(var i=0;i<users.length;i++){if(users[i].phone===ph){toast('Phone registered');return;}}
    var newU={name:n,phone:ph,email:em,password:pw};
    users.push(newU);localStorage.setItem('90m_users_v10',JSON.stringify(users));
    user=newU;localStorage.setItem('90m_user_v10',JSON.stringify(newU));
    updateUserUI();closeLogin();toast('Account created!');
}
function logout(){user=null;localStorage.removeItem('90m_user_v10');updateUserUI();toast('Signed out');}
function updateUserUI(){
    var a=document.getElementById('userArea');
    if(user){a.innerHTML='<span class="user-greeting">Hello, <span>'+user.name+'</span></span><button class="btn-logout" id="btnLogout">Logout</button>';document.getElementById('btnLogout').onclick=logout;}
    else{a.innerHTML='<button class="btn-login" id="btnOpenLogin">Sign In</button>';document.getElementById('btnOpenLogin').onclick=openLogin;}
}

function toast(m){var c=document.getElementById('toastContainer');var t=document.createElement('div');t.className='toast';t.textContent=m;c.appendChild(t);setTimeout(function(){t.remove();},3000);}

function createCard(p){
    var card=document.createElement('div');card.className='product-card';card.dataset.cat=p.cat;
    var fav=isFav(p.id);var sold=(p.price===0||p.sizes.length===0);
    var bc='';if(p.badge==='Legend'||p.badge==='Sold Out')bc='legend';else if(p.cat==='package')bc='package';else if(p.badge&&['New','World Champ','CR7','Messi','Mo Salah','Best Seller','Exclusive','Classic','National','Best Value'].indexOf(p.badge)>-1)bc='new';
    var imgH='';if(p.img&&p.img.trim()!=='')imgH='<img src="'+p.img+'" alt="'+p.name+'" style="'+(sold?'opacity:0.4;':'')+'">';else imgH='<span style="font-size:4rem;">'+(p.emoji||'')+'</span>';
    var overlay=sold?'<div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:3;background:rgba(0,0,0,0.3);"><span style="font-size:1.5rem;font-weight:900;color:#e94560;">SOLD OUT</span></div>':'';
    var h='';
    if(p.badge)h+='<span class="product-badge '+bc+'">'+p.badge+'</span>';
    h+='<span class="fav-icon '+(fav?'active':'')+'" data-id="'+p.id+'">'+(fav?'❤️':'🤍')+'</span>';
    h+='<div class="product-img" data-id="'+p.id+'" style="position:relative;">'+imgH+overlay+'</div>';
    h+='<div class="product-info">';
    h+='<span class="club">'+(p.cat==='package'?'Package':p.cat==='national'?'National Team':p.cat==='legends'?'Legend':p.cat==='players'?'Player Edition':'Club Jersey')+'</span>';
    h+='<h3 data-id="'+p.id+'">'+p.name+'</h3>';
    if(p.type)h+='<span class="type-tag">'+p.type+'</span>';
    h+='<div class="price" style="'+(sold?'color:#e94560;':'')+'">'+(sold?'SOLD OUT':p.price+' EGP')+'</div>';
    h+='<button class="btn-add quick-add" data-id="'+p.id+'" '+(sold?'disabled style="opacity:0.4;cursor:not-allowed;background:#999;"':'')+'>'+(sold?'Unavailable':'Quick Add')+'</button>';
    h+='</div>';
    card.innerHTML=h;
    card.querySelector('.product-img').onclick=function(){openDetail(this.dataset.id);};
    card.querySelector('h3').onclick=function(){openDetail(this.dataset.id);};
    card.querySelector('.fav-icon').onclick=function(){toggleFav(this.dataset.id);this.classList.toggle('active');this.textContent=this.classList.contains('active')?'❤️':'🤍';};
    card.querySelector('.quick-add').onclick=function(){if(sold){toast('SOLD OUT');return;}var pr=null;for(var i=0;i<allProducts.length;i++){if(allProducts[i].id===this.dataset.id){pr=allProducts[i];break;}}if(pr&&pr.price>0)addToCart(pr,'L');};
    return card;
}

function render(){var g=document.getElementById('allProductsGrid');if(!g)return;g.innerHTML='';for(var i=0;i<allProducts.length;i++)g.appendChild(createCard(allProducts[i]));}

function setupEvents(){
    document.getElementById('themeToggle').onclick=toggleDark;
    document.getElementById('cartToggle').onclick=toggleCart;
    document.getElementById('btnCloseCart').onclick=toggleCart;
    document.getElementById('cartOverlay').onclick=toggleCart;
    document.getElementById('btnCheckout').onclick=goToCheckout;
    document.getElementById('btnCloseCheckout').onclick=closeCheckout;
    document.getElementById('btnConfirmOrder').onclick=confirmOrder;
    document.getElementById('btnLogin').onclick=login;
    document.getElementById('btnSignup').onclick=signup;
    document.getElementById('tabLogin').onclick=function(){switchTab('login');};
    document.getElementById('tabSignup').onclick=function(){switchTab('signup');};
    document.getElementById('loginModal').onclick=function(e){if(e.target===this)closeLogin();};
    document.getElementById('btnBackFromDetail').onclick=closeDetail;
    document.getElementById('searchInput').oninput=search;
    var tabs=document.querySelectorAll('.cat-tab');
    for(var i=0;i<tabs.length;i++){
        tabs[i].onclick=function(){
            for(var j=0;j<tabs.length;j++)tabs[j].classList.remove('active');
            this.classList.add('active');currentFilter=this.dataset.cat;
            document.getElementById('searchInput').value='';
            document.getElementById('noResults').style.display='none';
            var cards=document.querySelectorAll('.product-card');
            for(var k=0;k<cards.length;k++)cards[k].classList.remove('hidden-by-search');
            if(currentFilter!=='all'){for(var l=0;l<cards.length;l++){if(cards[l].dataset.cat!==currentFilter)cards[l].classList.add('hidden-by-search');}}
        };
    }
}

document.addEventListener('DOMContentLoaded',function(){
    if(dark){document.body.classList.add('dark-mode');document.getElementById('themeToggle').textContent='☀️';}
    render();updateUI();updateUserUI();setupEvents();
});