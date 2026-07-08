var allProducts = [
    { id:'c1',name:'Al Ahly 2026 Home Jersey (Red)',cat:'clubs',price:300,img:'https://i.ibb.co/mLgWRgc/ahly-home.jpg',emoji:'🔴',badge:'Best Seller',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Official Al Ahly home jersey for 2026 season.' },
    { id:'c2',name:'Al Ahly 2026 Away Jersey (Black)',cat:'clubs',price:290,img:'https://i.ibb.co/xNLmYQT/ahly-away.jpg',emoji:'⚫',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Official Al Ahly away jersey for 2026 season.' },
    { id:'c3',name:'Zamalek 2026 Home Jersey (White)',cat:'clubs',price:350,img:'https://i.ibb.co/PGn83HT2/zamalek-home.jpg',emoji:'⚪',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Official Zamalek home jersey for 2026 season.' },
    { id:'c4',name:'Zamalek 2026 Away Jersey (Black)',cat:'clubs',price:250,img:'https://i.ibb.co/VWzJbCbC/zamalek-away.jpg',emoji:'⚫',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Official Zamalek away jersey for 2026 season.' },
    { id:'c5',name:'Barcelona 2026 Home Jersey (Blue & Red)',cat:'clubs',price:350,img:'https://i.ibb.co/mxqxXWC/barcelona-home.jpg',emoji:'🔵🔴',badge:'Exclusive',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'FC Barcelona home jersey.' },
    { id:'c6',name:'Barcelona 2026 Away Jersey (White)',cat:'clubs',price:350,img:'https://i.ibb.co/5g5YfVFQ/barcelona-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'FC Barcelona away jersey.' },
    { id:'c7',name:'Real Madrid 2026 Home Jersey (White)',cat:'clubs',price:300,img:'https://i.ibb.co/GY3fV87/real-madrid-home.jpg',emoji:'⚪👑',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid home jersey.' },
    { id:'c8',name:'Real Madrid 2026 Away Jersey (Black)',cat:'clubs',price:350,img:'https://i.ibb.co/99KSLqGS/real-madrid-away.jpg',emoji:'⚫',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid away jersey.' },
    { id:'c9',name:'Real Madrid Classic 2002 Jersey',cat:'clubs',price:720,img:'https://i.ibb.co/xqZHZVqv/real-madrid-classic.jpg',emoji:'⚪⭐',badge:'Classic',type:'Classic',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid 2002 Centenary classic jersey.' },
    { id:'c10',name:'Liverpool 2026 Home Jersey (Red)',cat:'clubs',price:350,img:'https://i.ibb.co/vC0dX7Fc/liverpool-home.jpg',emoji:'🔴',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Liverpool home jersey.' },
    { id:'c11',name:'Liverpool 2026 Away Jersey (White)',cat:'clubs',price:350,img:'https://i.ibb.co/tphyS09c/liverpool-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Liverpool away jersey.' },
    { id:'c12',name:'Man City 2026 Home Jersey',cat:'clubs',price:290,img:'https://i.ibb.co/V0mxDqVb/man-city-home.jpg',emoji:'🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Manchester City home jersey.' },
    { id:'c13',name:'Man United 2026 Home Jersey',cat:'clubs',price:750,img:'https://i.ibb.co/DD5xDjpQ/man-united-home.jpg',emoji:'🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Manchester United home jersey.' },
    { id:'c14',name:'Arsenal 2026 Home Jersey',cat:'clubs',price:300,img:'https://i.ibb.co/Pfx3Sd9/arsenal-home.jpg',emoji:'🔴⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Arsenal home jersey.' },
    { id:'c15',name:'Chelsea 2026 Home Jersey',cat:'clubs',price:750,img:'https://i.ibb.co/8nqWmxPJ/chelsea-home.jpg',emoji:'🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Chelsea home jersey.' },
    { id:'c16',name:'Bayern Munich 2026 Home Jersey',cat:'clubs',price:350,img:'https://i.ibb.co/DfrjTxjK/bayern-home.jpg',emoji:'🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Bayern Munich home jersey.' },
    { id:'c17',name:'Juventus 2026 Home Jersey',cat:'clubs',price:390,img:'https://i.ibb.co/N2WgrVkD/juventus-home.jpg',emoji:'⚫⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Juventus home jersey.' },
    { id:'c18',name:'PSG 2026 Home Jersey',cat:'clubs',price:350,img:'https://i.ibb.co/yB0hXNjQ/psg-home.jpg',emoji:'🔴🔵',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Paris Saint-Germain home jersey.' },
    { id:'c19',name:'Inter Milan 2026 Home Jersey',cat:'clubs',price:750,img:'https://i.ibb.co/s9Knjsyk/inter-milan-home.jpg',emoji:'⚫🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Inter Milan home jersey.' },
    { id:'c20',name:'AC Milan 2026 Home Jersey',cat:'clubs',price:290,img:'https://i.ibb.co/7JT6DcQ3/ac-milan-home.jpg',emoji:'🔴⚫',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'AC Milan home jersey.' },
    { id:'n1',name:'Brazil Home Jersey 2026 (Yellow)',cat:'national',price:390,img:'https://i.ibb.co/chT32xHd/brazil-home.jpg',emoji:'🟡🟢',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Brazil national team home jersey.' },
    { id:'n2',name:'Brazil Away Jersey 2026 (Black)',cat:'national',price:300,img:'https://i.ibb.co/Mk3Lt6Sx/brazil-away.jpg',emoji:'⚫',badge:'New',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Brazil national team away jersey.' },
    { id:'n3',name:'Argentina Home Jersey 2026',cat:'national',price:250,img:'https://i.ibb.co/nqy9fjWN/argentina-home.jpg',emoji:'⚪🔵',badge:'World Champ',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Argentina world champions home jersey.' },
    { id:'n4',name:'Argentina Away Jersey 2026',cat:'national',price:250,img:'https://i.ibb.co/xtvGRwsm/argentina-away.jpg',emoji:'🟣',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Argentina away jersey.' },
    { id:'n5',name:'Portugal Home Jersey 2026 (Black)',cat:'national',price:300,img:'https://i.ibb.co/zhX2H7Y5/portugal-home.jpg',emoji:'⚫',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Portugal home jersey.' },
    { id:'n6',name:'Portugal Away Jersey 2026 (Red)',cat:'national',price:300,img:'https://i.ibb.co/ZzS7WSPB/portugal-away.jpg',emoji:'🔴',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Portugal away jersey.' },
    { id:'n7',name:'France Home Jersey 2026 (Blue)',cat:'national',price:300,img:'https://i.ibb.co/TBXNkD8Z/france-home.jpg',emoji:'🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'France home jersey.' },
    { id:'n8',name:'France Away Jersey 2026 (White)',cat:'national',price:500,img:'https://i.ibb.co/j98PxdBK/france-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'France away jersey.' },
    { id:'n9',name:'England Home Jersey 2026 (White)',cat:'national',price:500,img:'https://i.ibb.co/MkB4MCFz/england-home.jpg',emoji:'⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'England home jersey.' },
    { id:'n10',name:'England Away Jersey 2026 (Red)',cat:'national',price:500,img:'https://i.ibb.co/7xxgFTYy/england-away.jpg',emoji:'🔴',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'England away jersey.' },
    { id:'n11',name:'Egypt Home Jersey 2026 (Red)',cat:'national',price:350,img:'https://i.ibb.co/v4v6YMhG/egypt-home.jpg',emoji:'🇪🇬🔴',badge:'National',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Egypt national team home jersey.' },
    { id:'n12',name:'Egypt Away Jersey 2026 (White)',cat:'national',price:350,img:'https://i.ibb.co/tpwf5f6N/egypt-away.jpg',emoji:'🇪🇬⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Egypt national team away jersey.' },
    { id:'n13',name:'Morocco Home Jersey 2026',cat:'national',price:350,img:'https://i.ibb.co/HT0czswM/morocco-home.jpg',emoji:'🇲🇦🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Morocco home jersey.' },
    { id:'n14',name:'Italy Home Jersey 2026 (Blue)',cat:'national',price:500,img:'https://i.ibb.co/zTTPYgQk/italy-home.jpg',emoji:'🇮🇹🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Italy home jersey.' },
    { id:'n15',name:'Italy Away Jersey 2026 (White)',cat:'national',price:700,img:'https://i.ibb.co/5gTBySDk/italy-away.jpg',emoji:'🇮🇹⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Italy away jersey.' },
    { id:'n16',name:'Germany Home Jersey 2026 (White)',cat:'national',price:500,img:'https://i.ibb.co/gL2DZShy/germany-home.jpg',emoji:'🇩🇪⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Germany home jersey.' },
    { id:'n17',name:'Germany Away Jersey 2026 (Green)',cat:'national',price:375,img:'https://i.ibb.co/Gvdf70Pg/germany-away.jpg',emoji:'🇩🇪🟢',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Germany away jersey.' },
    { id:'n18',name:'Spain Home Jersey 2026 (Red)',cat:'national',price:300,img:'https://i.ibb.co/yFPzcgzy/spain-home.jpg',emoji:'🇪🇸🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Spain home jersey.' },
    { id:'n19',name:'Spain Away Jersey 2026 (White)',cat:'national',price:400,img:'https://i.ibb.co/bMxrD153/spain-away.jpg',emoji:'🇪🇸⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Spain away jersey.' },
    // ★ SOLD OUT - مش هيقدر يضيفه للعربية ★
    { id:'l1',name:'Aboutrika x Al Ahly Legend - SOLD OUT',cat:'legends',price:0,img:'https://i.ibb.co/twv9VW7s/aboutrika-legend.jpg',emoji:'⭐🔴',badge:'Sold Out',type:'Unavailable',sizes:[],desc:'This jersey is currently out of stock and cannot be ordered.' },
    { id:'l2',name:'Zinedine Zidane Real Madrid 2002',cat:'legends',price:750,img:'https://i.ibb.co/B5M9GSKX/zidane-legend.jpg',emoji:'👑⚪',badge:'Legend',type:'Classic Legend',sizes:['S','M','L','XL','XXL'],desc:'Zinedine Zidane classic Real Madrid jersey.' },
    { id:'p1',name:'Cristiano Ronaldo x Al Nassr',cat:'players',price:650,img:'https://i.ibb.co/chK0y05t/ronaldo-nassr.jpg',emoji:'🐐🟡',badge:'CR7',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'Cristiano Ronaldo Al Nassr player edition jersey.' },
    { id:'p2',name:'Lionel Messi x Inter Miami',cat:'players',price:750,img:'https://i.ibb.co/LzxR6sJc/messi-intermiami.jpg',emoji:'🐐🟣',badge:'Messi',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'Lionel Messi Inter Miami player edition jersey.' },
    { id:'p3',name:'Mohamed Salah x Liverpool',cat:'players',price:400,img:'https://i.ibb.co/Kx1bMnpX/salah-liverpool.jpg',emoji:'👑🔴',badge:'Mo Salah',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'Mohamed Salah Liverpool player edition jersey.' },
    { id:'pkg-full',name:'Cristiano Ronaldo Package 🐐 (3 Jerseys)',cat:'package',price:1200,img:'https://i.ibb.co/vvc38yxV/ronaldo-package-new.jpg',emoji:'👕👕👕',badge:'Best Value',type:'Full Package',sizes:['S','M','L','XL','XXL'],desc:'3 Jerseys: Man United 2008 + Real Madrid 2011 + Al Nassr. Save 50 EGP!' }
];

var cart = JSON.parse(localStorage.getItem('90m_cart_v9')) || [];
var favorites = JSON.parse(localStorage.getItem('90m_favorites_v9')) || [];
var discount = 0;
var user = JSON.parse(localStorage.getItem('90m_user_v9')) || null;
var lastMsg = '';
var dark = localStorage.getItem('90m_dark_v9') === 'true';
var currentFilter = 'all';

function saveFavorites(){ localStorage.setItem('90m_favorites_v9',JSON.stringify(favorites)); }
function toggleFavorite(id){
    var index = favorites.indexOf(id);
    if(index > -1) { favorites.splice(index,1); toast('Removed from favorites'); }
    else { favorites.push(id); toast('Added to favorites'); }
    saveFavorites(); render();
}
function isFavorite(id){ return favorites.indexOf(id) > -1; }

function saveCart(){ localStorage.setItem('90m_cart_v9',JSON.stringify(cart)); updateUI(); }
function addToCart(p,size){
    // ★ ممنوع إضافة المنتجات اللي سعرها 0 (Sold Out) ★
    if (p.price === 0 || p.sizes.length === 0) { 
        toast('Sorry, this jersey is SOLD OUT and cannot be ordered'); 
        return; 
    }
    var ex = null;
    for(var i=0; i<cart.length; i++){ if(cart[i].id===p.id && cart[i].size===size){ ex = cart[i]; break; } }
    if(ex) ex.qty++; 
    else cart.push({id:p.id,name:p.name,price:p.price,img:p.img,emoji:p.emoji,size:size,qty:1,cat:p.cat,desc:p.desc||'',type:p.type||''});
    saveCart(); toast('Added: ' + p.name); checkEgyptBundle();
}
function removeCart(i){ cart.splice(i,1); saveCart(); checkEgyptBundle(); }
function sub(){ 
    var total = 0;
    for(var i=0; i<cart.length; i++){ total += cart[i].price * cart[i].qty; }
    var hasHome = false, hasAway = false;
    for(var j=0; j<cart.length; j++){ if(cart[j].id==='n11') hasHome=true; if(cart[j].id==='n12') hasAway=true; }
    if(hasHome && hasAway) total = total - 100;
    return total;
}
function total(){ return Math.round(sub()); }
function checkEgyptBundle(){
    var hasHome = false, hasAway = false;
    for(var i=0; i<cart.length; i++){ if(cart[i].id==='n11') hasHome=true; if(cart[i].id==='n12') hasAway=true; }
    if(hasHome && hasAway) toast('Egypt Bundle: Both for 600 EGP (Save 100)');
}
function applyPromo(){ toast('Promo codes are no longer available'); }

function updateUI(){
    var badge = document.getElementById('cartCountBadge');
    if(badge){ var count=0; for(var i=0; i<cart.length; i++) count+=cart[i].qty; badge.textContent = count; }
    var el = document.getElementById('cartItems');
    if(!el) return;
    if(cart.length === 0){ el.innerHTML = '<p style="text-align:center;padding:30px;">Your cart is empty</p>'; }
    else {
        var html = '';
        for(var i=0; i<cart.length; i++){
            var item = cart[i];
            html += '<div class="cart-item">';
            html += '<span style="font-size:1.5rem;min-width:40px;text-align:center;">';
            if(item.img) html += '<img src="'+item.img+'" style="width:40px;height:40px;object-fit:cover;border-radius:6px;">';
            else html += (item.emoji||'');
            html += '</span>';
            html += '<div style="flex:1;"><strong>'+item.name+'</strong><br><small>Size: '+item.size+' | '+item.price+' EGP x'+item.qty+'</small></div>';
            html += '<button onclick="removeCart('+i+')" style="background:none;border:none;cursor:pointer;color:#e94560;">X</button>';
            html += '</div>';
        }
        el.innerHTML = html;
    }
    var totalEl = document.getElementById('cartTotal');
    if(totalEl) totalEl.textContent = total().toLocaleString() + ' EGP';
}

function toggleCart(){ 
    document.getElementById('cartSidebar').classList.toggle('active'); 
    document.getElementById('cartOverlay').classList.toggle('active'); 
    updateUI(); 
}

function openDetailPage(productId){
    var product = null;
    for(var i=0; i<allProducts.length; i++){ if(allProducts[i].id===productId){ product=allProducts[i]; break; } }
    if(!product) return;
    
    var page = document.getElementById('detailPage');
    var content = document.getElementById('detailPageContent');
    var fav = isFavorite(product.id);
    var sizes = product.sizes || [];
    var isSoldOut = (product.price === 0 || sizes.length === 0);
    
    var html = '<div class="detail-layout">';
    html += '<div class="detail-image-section">';
    if(product.img) html += '<img src="'+product.img+'" alt="'+product.name+'" style="'+(isSoldOut?'opacity:0.5;':'')+'">';
    else html += '<span class="detail-emoji">'+(product.emoji||'')+'</span>';
    if(isSoldOut) html += '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:3rem;font-weight:900;color:#e94560;text-shadow:2px 2px 4px rgba(0,0,0,0.5);">SOLD OUT</div>';
    html += '</div>';
    html += '<div class="detail-info-section">';
    html += '<span class="detail-cat">'+product.cat+'</span>';
    html += '<h2>'+product.name+'</h2>';
    if(product.badge) html += '<span class="detail-badge" style="background:#e94560;">'+product.badge+'</span>';
    if(product.type) html += '<span class="detail-type">'+product.type+'</span>';
    html += '<p class="detail-desc">'+(product.desc||'Premium quality football jersey.')+'</p>';
    if(isSoldOut){
        html += '<div style="font-size:2rem;font-weight:900;color:#e94560;margin:15px 0;">SOLD OUT</div>';
        html += '<p style="color:var(--text-secondary);">This jersey is currently unavailable.</p>';
    } else {
        html += '<div class="detail-price">'+product.price+' EGP</div>';
        html += '<p class="detail-size-label">Select Size:</p>';
        html += '<div class="sizes-row" id="detailPageSizes" style="gap:8px;">';
        for(var s=0; s<sizes.length; s++) html += '<span class="size-dot '+(sizes[s]==='L'?'selected':'')+'" data-size="'+sizes[s]+'" style="padding:8px 16px;font-size:0.8rem;">'+sizes[s]+'</span>';
        html += '</div>';
        html += '<button class="btn-add btn-detail-add" id="btnDetailPageAdd" style="margin-top:15px;padding:14px;font-size:0.95rem;">Add to Cart</button>';
    }
    html += '<button class="btn-add" id="btnDetailPageFav" style="margin-top:10px;padding:14px;font-size:0.95rem;background:'+(fav?'#e94560':'var(--text)')+';color:#fff;">'+(fav?'Remove from Favorites':'Add to Favorites')+'</button>';
    html += '</div></div>';
    content.innerHTML = html;
    
    if(!isSoldOut){
        var detailSize = 'L';
        var dots = content.querySelectorAll('#detailPageSizes .size-dot');
        for(var d=0; d<dots.length; d++){
            dots[d].onclick = function(){
                for(var x=0; x<dots.length; x++) dots[x].classList.remove('selected');
                this.classList.add('selected');
                detailSize = this.dataset.size;
            };
        }
        document.getElementById('btnDetailPageAdd').onclick = function(){ addToCart(product, detailSize); };
    }
    
    document.getElementById('btnDetailPageFav').onclick = function(){
        toggleFavorite(product.id);
        var favNow = isFavorite(product.id);
        this.textContent = favNow ? 'Remove from Favorites' : 'Add to Favorites';
        this.style.background = favNow ? '#e94560' : 'var(--text)';
    };
    page.classList.add('active'); document.body.style.overflow = 'hidden'; window.scrollTo(0, 0);
}

function closeDetailPage(){ document.getElementById('detailPage').classList.remove('active'); document.body.style.overflow = ''; }

function performSearch(){
    var query = document.getElementById('searchInput').value.trim().toLowerCase();
    var cards = document.querySelectorAll('.product-card'); var visibleCount = 0;
    for(var i=0; i<cards.length; i++){
        var name = (cards[i].querySelector('h3')?.textContent || '').toLowerCase();
        if(!query || name.indexOf(query) > -1){ cards[i].classList.remove('hidden-by-search'); visibleCount++; }
        else { cards[i].classList.add('hidden-by-search'); }
    }
    document.getElementById('noResults').style.display = (query && visibleCount===0) ? 'block' : 'none';
}

function goToCheckout(){ 
    if(!user){ toast('Please sign in first'); openLoginModal(); return; } 
    if(!cart.length){ toast('Cart is empty'); return; } 
    if(document.getElementById('cartSidebar').classList.contains('active')) toggleCart(); 
    document.getElementById('checkoutPage').classList.add('active'); 
    document.getElementById('cName').value = user.name || ''; 
    document.getElementById('cPhone').value = user.phone || ''; 
    updateCheckoutSummary(); 
}
function closeCheckout(){ document.getElementById('checkoutPage').classList.remove('active'); }
function updateCheckoutSummary(){ 
    var html = '<strong>Order Summary</strong><br>';
    for(var i=0; i<cart.length; i++) html += '<div style="display:flex;justify-content:space-between;font-size:0.8rem;"><span>'+cart[i].name+' ('+cart[i].size+') x'+cart[i].qty+'</span><span>'+ (cart[i].price*cart[i].qty) +' EGP</span></div>';
    html += '<div style="font-weight:900;border-top:1px solid var(--border);padding-top:8px;margin-top:8px;">Total: '+ total().toLocaleString() +' EGP</div>';
    document.getElementById('checkoutSummary').innerHTML = html;
}
function confirmOrder(){
    var n=document.getElementById('cName').value.trim(); 
    var p=document.getElementById('cPhone').value.trim(); 
    var a=document.getElementById('cAddress').value.trim(); 
    var nt=document.getElementById('cNotes').value.trim();
    if(!n||!p||!a){ toast('Please complete all required fields'); return; }
    var sum='';
    for(var i=0; i<cart.length; i++) sum += '- '+cart[i].name+' | Size '+cart[i].size+' | '+cart[i].price+' EGP x'+cart[i].qty+'\n';
    lastMsg='New Order - 90 Mins\n\nName: '+n+'\nPhone: '+p+'\nAddress: '+a+'\n'+(nt?'Notes: '+nt+'\n':'')+'\nItems:\n'+sum+'\nTotal: '+total()+' EGP\nCash on Delivery\nShubra El Kheima';
    window.open('https://wa.me/201027081851?text='+encodeURIComponent(lastMsg),'_blank');
    cart=[]; saveCart(); closeCheckout(); toast('Order sent to WhatsApp!');
}

function toggleDarkMode(){ dark=!dark; document.body.classList.toggle('dark-mode',dark); localStorage.setItem('90m_dark_v9',dark); document.getElementById('themeToggle').textContent=dark?'☀️':'🌓'; }

function openLoginModal(){ document.getElementById('loginModal').classList.add('active'); switchTab('login'); }
function closeLoginModal(){ document.getElementById('loginModal').classList.remove('active'); }
function switchTab(t){
    var tabs = document.querySelectorAll('#loginModal .tab-btn');
    for(var i=0; i<tabs.length; i++) tabs[i].classList.remove('active');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    if(t==='login'){ 
        document.getElementById('tabLogin').classList.add('active'); 
        document.getElementById('loginForm').classList.remove('hidden'); 
        document.getElementById('modalTitle').textContent='Sign In'; 
    } else { 
        document.getElementById('tabSignup').classList.add('active'); 
        document.getElementById('signupForm').classList.remove('hidden'); 
        document.getElementById('modalTitle').textContent='Create Account'; 
    }
    document.getElementById('loginErr').style.display='none'; 
    document.getElementById('signErr').style.display='none';
}

function login(){
    var id = document.getElementById('loginId').value.trim();
    var pw = document.getElementById('loginPass').value.trim();
    document.getElementById('loginErr').style.display = 'none';
    if(!id||!pw){ toast('Please fill all fields'); return; }
    var users = JSON.parse(localStorage.getItem('90m_users_v9')) || [];
    var u = null;
    for(var i=0; i<users.length; i++){ if((users[i].phone===id||users[i].email===id) && users[i].password===pw){ u=users[i]; break; } }
    if(u){ user=u; localStorage.setItem('90m_user_v9', JSON.stringify(u)); updateUserUI(); closeLoginModal(); toast('Signed in!'); }
    else { document.getElementById('loginErr').style.display = 'block'; }
}

function signup(){
    var n = document.getElementById('signName').value.trim();
    var ph = document.getElementById('signPhone').value.trim();
    var em = document.getElementById('signEmail').value.trim();
    var pw = document.getElementById('signPass').value.trim();
    document.getElementById('signErr').style.display = 'none';
    if(!n||!ph||!pw){ toast('Please fill all required fields'); return; }
    var users = JSON.parse(localStorage.getItem('90m_users_v9')) || [];
    for(var i=0; i<users.length; i++){ if(users[i].phone===ph){ toast('Phone already registered'); return; } }
    var newU = { name:n, phone:ph, email:em, password:pw };
    users.push(newU); localStorage.setItem('90m_users_v9', JSON.stringify(users));
    user = newU; localStorage.setItem('90m_user_v9', JSON.stringify(newU));
    updateUserUI(); closeLoginModal(); toast('Account created!');
}

function logout(){ user=null; localStorage.removeItem('90m_user_v9'); updateUserUI(); toast('Signed out'); }
function updateUserUI(){
    var area = document.getElementById('userArea');
    if(user){ 
        area.innerHTML = '<span class="user-greeting">Hello, <span>'+user.name+'</span></span><button class="btn-logout" id="btnLogout">Logout</button>'; 
        document.getElementById('btnLogout').onclick = logout; 
    } else { 
        area.innerHTML = '<button class="btn-login" id="btnOpenLogin">Sign In</button>'; 
        document.getElementById('btnOpenLogin').onclick = openLoginModal; 
    }
}

function toast(m){ 
    var c = document.getElementById('toastContainer'); 
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = m; 
    c.appendChild(t); setTimeout(function(){ t.remove(); }, 3000); 
}

function createCard(p){
    var card = document.createElement('div'); card.className = 'product-card'; card.dataset.cat = p.cat; card.dataset.type = p.type || ''; 
    var fav = isFavorite(p.id);
    var isSoldOut = (p.price === 0 || p.sizes.length === 0);
    var bc = ''; 
    if(p.badge==='Legend'||p.badge==='Sold Out') bc='legend'; 
    else if(p.cat==='package') bc='package'; 
    else if(p.badge&&['New','World Champ','CR7','Messi','Mo Salah','Best Seller','Exclusive','Classic','National','Best Value'].indexOf(p.badge)>-1) bc='new';
    
    var imgHTML = ''; 
    if(p.img&&p.img.trim()!=='') imgHTML = '<img src="'+p.img+'" alt="'+p.name+'" loading="lazy" style="'+(isSoldOut?'opacity:0.4;':'')+'">'; 
    else imgHTML = '<span style="font-size:4rem;">'+(p.emoji||'')+'</span>';
    
    var soldOutOverlay = isSoldOut ? '<div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:3;background:rgba(0,0,0,0.3);"><span style="font-size:1.8rem;font-weight:900;color:#e94560;text-shadow:2px 2px 4px rgba(0,0,0,0.5);letter-spacing:2px;">SOLD OUT</span></div>' : '';
    
    var html = '';
    if(p.badge) html += '<span class="product-badge '+bc+'">'+p.badge+'</span>';
    html += '<span class="fav-icon '+(fav?'active':'')+'" data-id="'+p.id+'">'+(fav?'❤️':'🤍')+'</span>';
    html += '<div class="product-img" data-id="'+p.id+'" style="position:relative;">'+imgHTML+soldOutOverlay+'</div>';
    html += '<div class="product-info">';
    html += '<span class="club">'+(p.cat==='package'?'Package':p.cat==='national'?'National Team':p.cat==='legends'?'Legend Jersey':p.cat==='players'?'Player Edition':'Club Jersey')+'</span>';
    html += '<h3 data-id="'+p.id+'">'+p.name+'</h3>';
    if(p.type) html += '<span class="type-tag">'+p.type+'</span>';
    html += '<div class="price" style="'+(isSoldOut?'color:#e94560;':'')+'">'+(isSoldOut?'SOLD OUT':p.price+' EGP')+'</div>';
    html += '<button class="btn-add quick-add" data-id="'+p.id+'" '+(isSoldOut?'disabled style="opacity:0.4;cursor:not-allowed;background:#999;"':'')+'>'+(isSoldOut?'🚫 Unavailable':'Quick Add')+'</button>';
    html += '</div>';
    card.innerHTML = html;
    
    card.querySelector('.product-img').onclick = function(){ openDetailPage(this.dataset.id); };
    card.querySelector('h3').onclick = function(){ openDetailPage(this.dataset.id); };
    card.querySelector('.fav-icon').onclick = function(){ toggleFavorite(this.dataset.id); this.classList.toggle('active'); this.textContent = this.classList.contains('active')?'❤️':'🤍'; };
    card.querySelector('.quick-add').onclick = function(){ 
        if(isSoldOut){ toast('This jersey is SOLD OUT'); return; }
        var prod = null;
        for(var i=0; i<allProducts.length; i++){ if(allProducts[i].id===this.dataset.id){ prod=allProducts[i]; break; } }
        if(prod && prod.price>0) addToCart(prod, 'L'); 
    };
    return card;
}

function render(){ 
    var grid = document.getElementById('allProductsGrid'); 
    if(!grid) return; grid.innerHTML = ''; 
    for(var i=0; i<allProducts.length; i++) grid.appendChild(createCard(allProducts[i])); 
}

function setupEvents(){
    document.getElementById('themeToggle').onclick = toggleDarkMode;
    document.getElementById('cartToggle').onclick = toggleCart;
    document.getElementById('btnCloseCart').onclick = toggleCart;
    document.getElementById('cartOverlay').onclick = toggleCart;
    document.getElementById('btnApplyPromo').onclick = applyPromo;
    document.getElementById('btnCheckout').onclick = goToCheckout;
    document.getElementById('btnCloseCheckout').onclick = closeCheckout;
    document.getElementById('btnConfirmOrder').onclick = confirmOrder;
    document.getElementById('btnLogin').onclick = login;
    document.getElementById('btnSignup').onclick = signup;
    document.getElementById('tabLogin').onclick = function(){ switchTab('login'); };
    document.getElementById('tabSignup').onclick = function(){ switchTab('signup'); };
    document.getElementById('loginModal').onclick = function(e){ if(e.target===this) closeLoginModal(); };
    document.getElementById('btnBackFromDetail').onclick = closeDetailPage;
    document.getElementById('searchInput').oninput = performSearch;
    
    var catTabs = document.querySelectorAll('.cat-tab');
    for(var i=0; i<catTabs.length; i++){
        catTabs[i].onclick = function(){
            for(var j=0; j<catTabs.length; j++) catTabs[j].classList.remove('active');
            this.classList.add('active');
            currentFilter = this.dataset.cat;
            document.getElementById('searchInput').value = '';
            document.getElementById('noResults').style.display = 'none';
            var cards = document.querySelectorAll('.product-card');
            for(var k=0; k<cards.length; k++) cards[k].classList.remove('hidden-by-search');
            if(currentFilter !== 'all'){ 
                for(var l=0; l<cards.length; l++){ 
                    if(cards[l].dataset.cat !== currentFilter) cards[l].classList.add('hidden-by-search'); 
                } 
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', function(){
    if(dark){ document.body.classList.add('dark-mode'); document.getElementById('themeToggle').textContent='☀️'; }
    render(); updateUI(); updateUserUI(); setupEvents();
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get('product');
    if(productId){ setTimeout(function(){ openDetailPage(productId); }, 300); }
});