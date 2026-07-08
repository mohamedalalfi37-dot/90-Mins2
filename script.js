const allProducts = [
    { id:'c1',name:'Al Ahly 2026 Home Jersey',cat:'clubs',price:380,img:'https://i.ibb.co/mLgWRgc/ahly-home.jpg',emoji:'🔴',badge:'Best Seller',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Official Al Ahly home jersey for 2026 season.' },
    { id:'c2',name:'Al Ahly 2026 Away Jersey',cat:'clubs',price:380,img:'https://i.ibb.co/xNLmYQT/ahly-away.jpg',emoji:'🔵',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Official Al Ahly away jersey for 2026 season.' },
    { id:'c3',name:'Zamalek 2026 Home Jersey',cat:'clubs',price:380,img:'https://i.ibb.co/PGn83HT2/zamalek-home.jpg',emoji:'⚪',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Official Zamalek home jersey for 2026 season.' },
    { id:'c4',name:'Zamalek 2026 Away Jersey',cat:'clubs',price:380,img:'https://i.ibb.co/VWzJbCbC/zamalek-away.jpg',emoji:'🔴',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Official Zamalek away jersey for 2026 season.' },
    { id:'c5',name:'Barcelona 2026 Home Jersey',cat:'clubs',price:420,img:'https://i.ibb.co/mxqxXWC/barcelona-home.jpg',emoji:'🔵🔴',badge:'Exclusive',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'FC Barcelona home jersey.' },
    { id:'c6',name:'Barcelona 2026 Away Jersey',cat:'clubs',price:420,img:'https://i.ibb.co/5g5YfVFQ/barcelona-away.jpg',emoji:'🟡',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'FC Barcelona away jersey.' },
    { id:'c7',name:'Real Madrid 2026 Home Jersey',cat:'clubs',price:420,img:'https://i.ibb.co/GY3fV87/real-madrid-home.jpg',emoji:'⚪👑',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid home jersey.' },
    { id:'c8',name:'Real Madrid 2026 Away Jersey',cat:'clubs',price:420,img:'https://i.ibb.co/99KSLqGS/real-madrid-away.jpg',emoji:'🟣',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid away jersey.' },
    { id:'c9',name:'Real Madrid Classic 2002 Jersey',cat:'clubs',price:480,img:'https://i.ibb.co/xqZHZVqv/real-madrid-classic.jpg',emoji:'⚪⭐',badge:'Classic',type:'Classic',sizes:['S','M','L','XL','XXL'],desc:'Real Madrid 2002 Centenary classic jersey.' },
    { id:'c10',name:'Liverpool 2026 Home Jersey',cat:'clubs',price:400,img:'https://i.ibb.co/vC0dX7Fc/liverpool-home.jpg',emoji:'🔴',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Liverpool home jersey.' },
    { id:'c11',name:'Liverpool 2026 Away Jersey',cat:'clubs',price:400,img:'https://i.ibb.co/tphyS09c/liverpool-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Liverpool away jersey.' },
    { id:'c12',name:'Man City 2026 Home Jersey',cat:'clubs',price:400,img:'https://i.ibb.co/V0mxDqVb/man-city-home.jpg',emoji:'🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Manchester City home jersey.' },
    { id:'c13',name:'Man United 2026 Home Jersey',cat:'clubs',price:400,img:'https://i.ibb.co/DD5xDjpQ/man-united-home.jpg',emoji:'🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Manchester United home jersey.' },
    { id:'c14',name:'Arsenal 2026 Home Jersey',cat:'clubs',price:390,img:'https://i.ibb.co/Pfx3Sd9/arsenal-home.jpg',emoji:'🔴⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Arsenal home jersey.' },
    { id:'c15',name:'Chelsea 2026 Home Jersey',cat:'clubs',price:390,img:'https://i.ibb.co/8nqWmxPJ/chelsea-home.jpg',emoji:'🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Chelsea home jersey.' },
    { id:'c16',name:'Bayern Munich 2026 Home Jersey',cat:'clubs',price:410,img:'https://i.ibb.co/DfrjTxjK/bayern-home.jpg',emoji:'🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Bayern Munich home jersey.' },
    { id:'c17',name:'Juventus 2026 Home Jersey',cat:'clubs',price:390,img:'https://i.ibb.co/N2WgrVkD/juventus-home.jpg',emoji:'⚫⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Juventus home jersey.' },
    { id:'c18',name:'PSG 2026 Home Jersey',cat:'clubs',price:430,img:'https://i.ibb.co/yB0hXNjQ/psg-home.jpg',emoji:'🔴🔵',badge:'New',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Paris Saint-Germain home jersey.' },
    { id:'c19',name:'Inter Milan 2026 Home Jersey',cat:'clubs',price:380,img:'https://i.ibb.co/s9Knjsyk/inter-milan-home.jpg',emoji:'⚫🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Inter Milan home jersey.' },
    { id:'c20',name:'AC Milan 2026 Home Jersey',cat:'clubs',price:380,img:'https://i.ibb.co/7JT6DcQ3/ac-milan-home.jpg',emoji:'🔴⚫',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'AC Milan home jersey.' },
    { id:'n1',name:'Brazil Home Jersey 2026',cat:'national',price:450,img:'https://i.ibb.co/chT32xHd/brazil-home.jpg',emoji:'🟡🟢',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Brazil national team home jersey.' },
    { id:'n2',name:'Brazil Away Jersey 2026',cat:'national',price:450,img:'https://i.ibb.co/Mk3Lt6Sx/brazil-away.jpg',emoji:'🔵⚪',badge:'New',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Brazil national team away jersey.' },
    { id:'n3',name:'Argentina Home Jersey 2026',cat:'national',price:450,img:'https://i.ibb.co/nqy9fjWN/argentina-home.jpg',emoji:'⚪🔵',badge:'World Champ',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Argentina world champions home jersey.' },
    { id:'n4',name:'Argentina Away Jersey 2026',cat:'national',price:450,img:'https://i.ibb.co/xtvGRwsm/argentina-away.jpg',emoji:'🟣',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Argentina away jersey.' },
    { id:'n5',name:'Portugal Home Jersey 2026',cat:'national',price:430,img:'https://i.ibb.co/zhX2H7Y5/portugal-home.jpg',emoji:'🔴🟢',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Portugal home jersey.' },
    { id:'n6',name:'Portugal Away Jersey 2026',cat:'national',price:430,img:'https://i.ibb.co/ZzS7WSPB/portugal-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Portugal away jersey.' },
    { id:'n7',name:'France Home Jersey 2026',cat:'national',price:440,img:'https://i.ibb.co/TBXNkD8Z/france-home.jpg',emoji:'🔵⚪🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'France home jersey.' },
    { id:'n8',name:'France Away Jersey 2026',cat:'national',price:440,img:'https://i.ibb.co/j98PxdBK/france-away.jpg',emoji:'⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'France away jersey.' },
    { id:'n9',name:'England Home Jersey 2026',cat:'national',price:430,img:'https://i.ibb.co/MkB4MCFz/england-home.jpg',emoji:'⚪🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'England home jersey.' },
    { id:'n10',name:'England Away Jersey 2026',cat:'national',price:430,img:'https://i.ibb.co/7xxgFTYy/england-away.jpg',emoji:'🔴',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'England away jersey.' },
    { id:'n11',name:'Egypt Home Jersey 2026',cat:'national',price:350,img:'https://i.ibb.co/v4v6YMhG/egypt-home.jpg',emoji:'🇪🇬🔴',badge:'National',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Egypt national team home jersey.' },
    { id:'n12',name:'Egypt Away Jersey 2026',cat:'national',price:350,img:'https://i.ibb.co/tpwf5f6N/egypt-away.jpg',emoji:'🇪🇬⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Egypt national team away jersey.' },
    { id:'n13',name:'Morocco Home Jersey 2026',cat:'national',price:360,img:'https://i.ibb.co/HT0czswM/morocco-home.jpg',emoji:'🇲🇦🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Morocco home jersey.' },
    { id:'n14',name:'Italy Home Jersey 2026',cat:'national',price:440,img:'https://i.ibb.co/zTTPYgQk/italy-home.jpg',emoji:'🇮🇹🔵',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Italy home jersey.' },
    { id:'n15',name:'Italy Away Jersey 2026',cat:'national',price:440,img:'https://i.ibb.co/5gTBySDk/italy-away.jpg',emoji:'🇮🇹⚪',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Italy away jersey.' },
    { id:'n16',name:'Germany Home Jersey 2026',cat:'national',price:440,img:'https://i.ibb.co/v4nrYnjD/germany-home.jpg',emoji:'🇩🇪⚪',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Germany home jersey.' },
    { id:'n17',name:'Germany Away Jersey 2026',cat:'national',price:440,img:'https://i.ibb.co/YFyD0T0N/germany-away.jpg',emoji:'🇩🇪🟢',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Germany away jersey.' },
    { id:'n18',name:'Spain Home Jersey 2026',cat:'national',price:440,img:'https://i.ibb.co/yFPzcgzy/spain-home.jpg',emoji:'🇪🇸🔴',badge:'',type:'Home',sizes:['S','M','L','XL','XXL'],desc:'Spain home jersey.' },
    { id:'n19',name:'Spain Away Jersey 2026',cat:'national',price:440,img:'https://i.ibb.co/bMxrD153/spain-away.jpg',emoji:'🇪🇸🟡',badge:'',type:'Away',sizes:['S','M','L','XL','XXL'],desc:'Spain away jersey.' },
    { id:'l1',name:'Aboutrika × Al Ahly Legend',cat:'legends',price:500,img:'https://i.ibb.co/twv9VW7s/aboutrika-legend.jpg',emoji:'⭐🔴',badge:'Legend',type:'Legend',sizes:['S','M','L','XL','XXL'],desc:'Mohamed Aboutrika legendary jersey.' },
    { id:'l2',name:'Zinedine Zidane Real Madrid 2002',cat:'legends',price:550,img:'https://i.ibb.co/B5M9GSKX/zidane-legend.jpg',emoji:'👑⚪',badge:'Legend',type:'Classic Legend',sizes:['S','M','L','XL','XXL'],desc:'Zinedine Zidane classic Real Madrid jersey.' },
    { id:'p1',name:'Cristiano Ronaldo × Al Nassr',cat:'players',price:480,img:'https://i.ibb.co/chK0y05t/ronaldo-nassr.jpg',emoji:'🐐🟡',badge:'CR7',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'Cristiano Ronaldo Al Nassr player edition jersey.' },
    { id:'p2',name:'Lionel Messi × Inter Miami',cat:'players',price:500,img:'https://i.ibb.co/LzxR6sJc/messi-intermiami.jpg',emoji:'🐐🟣',badge:'Messi',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'Lionel Messi Inter Miami player edition jersey.' },
    { id:'p3',name:'Mohamed Salah × Liverpool',cat:'players',price:460,img:'https://i.ibb.co/Kx1bMnpX/salah-liverpool.jpg',emoji:'👑🔴',badge:'Mo Salah',type:'Player Edition',sizes:['S','M','L','XL','XXL'],desc:'Mohamed Salah Liverpool player edition jersey.' },
    { id:'pkg1',name:'Cristiano Ronaldo Package 🐐',cat:'package',price:990,img:'https://i.ibb.co/PZkLBNFd/ronaldo-package.jpg',emoji:'👕👕👕',badge:'Exclusive Pack',type:'Package',sizes:['S','M','L','XL','XXL'],desc:'3 Jerseys: MU 2008 + RM 2011 + RM 2017.' },
];

let cart = JSON.parse(localStorage.getItem('90m_cart_v8')) || [];
let favorites = JSON.parse(localStorage.getItem('90m_favorites_v8')) || [];
let discount = 0;
const promos = ['CR7','MI7','MAC1','MY15'];
let user = JSON.parse(localStorage.getItem('90m_user_v8')) || null;
let lastMsg = '';
let dark = localStorage.getItem('90m_dark_v8') === 'true';
let currentFilter = 'all';

function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function isValidEgyptPhone(phone) { return /^01[0-2,5]{1}[0-9]{8}$/.test(phone); }
function isValidPassword(password) { return password.length >= 6; }
function isValidName(name) { return name.trim().length >= 3; }

function saveFavorites(){ localStorage.setItem('90m_favorites_v8',JSON.stringify(favorites)); }
function toggleFavorite(id){
    const index = favorites.indexOf(id);
    if(index > -1) { favorites.splice(index,1); toast('💔 Removed from favorites'); }
    else { favorites.push(id); toast('❤️ Added to favorites'); }
    saveFavorites(); render();
}
function isFavorite(id){ return favorites.includes(id); }

function saveCart(){ localStorage.setItem('90m_cart_v8',JSON.stringify(cart)); updateUI(); }
function addToCart(p,size){
    const ex = cart.find(i=>i.id===p.id && i.size===size);
    if(ex) ex.qty++; else cart.push({id:p.id,name:p.name,price:p.price,img:p.img,emoji:p.emoji,size,qty:1,cat:p.cat,desc:p.desc||'',type:p.type||''});
    saveCart(); toast(`✅ Added "${p.name}" - Size ${size}`);
}
function removeCart(i){ cart.splice(i,1); saveCart(); }
function sub(){ return cart.reduce((s,i)=>s+i.price*i.qty,0); }
function total(){ return Math.round(sub()*(1-discount/100)); }
function applyPromo(){
    const c = document.getElementById('promoInput').value.trim().toUpperCase();
    const m = document.getElementById('promoMsg');
    if(promos.includes(c)){ discount = 15; m.textContent = '✅ 15% Discount Applied!'; m.style.color = '#2ecc71'; }
    else { discount = 0; m.textContent = '❌ Invalid Code'; m.style.color = '#e94560'; }
    updateUI();
}
function updateUI(){
    const badge = document.getElementById('cartCountBadge');
    if (badge) badge.textContent = cart.reduce((s,i)=>s+i.qty,0);
    const el = document.getElementById('cartItems');
    if (!el) return;
    if(!cart.length){ el.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:30px;">Your cart is empty 😴</p>'; }
    else { el.innerHTML = cart.map((i,idx)=>`<div class="cart-item"><span style="font-size:1.5rem;min-width:40px;text-align:center;">${i.img?`<img src="${i.img}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;" onerror="this.innerHTML='${i.emoji||'⚽'}'">`:(i.emoji||'⚽')}</span><div style="flex:1;"><strong>${i.name}</strong><br><small>Size: ${i.size} | ${i.price} EGP ×${i.qty}</small></div><button onclick="removeCart(${idx})" style="background:none;border:none;cursor:pointer;color:#e94560;">🗑️</button></div>`).join(''); }
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.textContent = total().toLocaleString() + ' EGP';
}
function toggleCart(){ document.getElementById('cartSidebar').classList.toggle('active'); document.getElementById('cartOverlay').classList.toggle('active'); updateUI(); }

function openDetailPage(productId){
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    const page = document.getElementById('detailPage');
    const content = document.getElementById('detailPageContent');
    const fav = isFavorite(product.id);
    content.innerHTML = `
        <div class="detail-layout">
            <div class="detail-image-section">
                ${product.img ? `<img src="${product.img}" alt="${product.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block';"><span class="detail-emoji" style="display:none;">${product.emoji||'⚽'}</span>` : `<span class="detail-emoji">${product.emoji||'⚽'}</span>`}
            </div>
            <div class="detail-info-section">
                <span class="detail-cat">${product.cat==='package'?'Package':product.cat==='national'?'National Team':product.cat==='legends'?'Legend Jersey':product.cat==='players'?'Player Edition':'Club Jersey'}</span>
                <h2>${product.name}</h2>
                ${product.badge?`<span class="detail-badge">${product.badge}</span>`:''} ${product.type?`<span class="detail-type">${product.type}</span>`:''}
                <p class="detail-desc">${product.desc||'Premium quality football jersey.'}</p>
                <div class="detail-price">${product.price} EGP</div>
                <p class="detail-size-label">Select Size:</p>
                <div class="sizes-row" id="detailPageSizes" style="gap:8px;">${(product.sizes||['S','M','L','XL','XXL']).map(s=>`<span class="size-dot ${s==='L'?'selected':''}" data-size="${s}" style="padding:8px 16px;font-size:0.8rem;">${s}</span>`).join('')}</div>
                <button class="btn-add btn-detail-add" id="btnDetailPageAdd" style="margin-top:15px;padding:14px;font-size:0.95rem;">🛒 Add to Cart</button>
                <button class="btn-add" id="btnDetailPageFav" style="margin-top:10px;padding:14px;font-size:0.95rem;background:${fav?'#e94560':'var(--text)'};color:#fff;">${fav?'❤️ Remove from Favorites':'🤍 Add to Favorites'}</button>
            </div>
        </div>`;
    let detailSize = 'L';
    content.querySelectorAll('#detailPageSizes .size-dot').forEach(o => o.addEventListener('click', function(){ content.querySelectorAll('#detailPageSizes .size-dot').forEach(x => x.classList.remove('selected')); this.classList.add('selected'); detailSize = this.dataset.size; }));
    content.querySelector('#btnDetailPageAdd').addEventListener('click', () => { addToCart(product, detailSize); });
    content.querySelector('#btnDetailPageFav').addEventListener('click', function(){ toggleFavorite(product.id); const favNow = isFavorite(product.id); this.textContent = favNow ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'; this.style.background = favNow ? '#e94560' : 'var(--text)'; });
    page.classList.add('active'); document.body.style.overflow = 'hidden'; window.scrollTo(0, 0);
}
function closeDetailPage(){ document.getElementById('detailPage').classList.remove('active'); document.body.style.overflow = ''; }

function performSearch(){
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.product-card'); let visibleCount = 0;
    cards.forEach(card => { const name = card.querySelector('h3')?.textContent.toLowerCase() || ''; if (!query || (name+' '+card.dataset.type+' '+card.dataset.cat).includes(query)){ card.classList.remove('hidden-by-search'); visibleCount++; } else { card.classList.add('hidden-by-search'); } });
    document.getElementById('noResults').style.display = (query && visibleCount === 0) ? 'block' : 'none';
}

function goToCheckout(){ if(!user){ toast('⚠️ Please sign in first'); openLoginModal(); return; } if(!cart.length){ toast('⚠️ Cart is empty'); return; } if(document.getElementById('cartSidebar').classList.contains('active')) toggleCart(); document.getElementById('checkoutPage').classList.add('active'); document.getElementById('cName').value = user.name || ''; document.getElementById('cPhone').value = user.phone || ''; updateCheckoutSummary(); }
function closeCheckout(){ document.getElementById('checkoutPage').classList.remove('active'); }
function updateCheckoutSummary(){ document.getElementById('checkoutSummary').innerHTML = `<strong>📋 Order Summary</strong><br>${cart.map(i=>`<div style="display:flex;justify-content:space-between;font-size:0.8rem;"><span>${i.name} (${i.size}) ×${i.qty}</span><span>${i.price*i.qty} EGP</span></div>`).join('')}${discount>0?`<div style="color:#e94560;">🎫 Discount ${discount}%: -${Math.round(sub()*discount/100)} EGP</div>`:''}<div style="font-weight:900;border-top:1px solid var(--border);padding-top:8px;margin-top:8px;">Total: ${total().toLocaleString()} EGP</div>`; }
function confirmOrder(){
    const n=document.getElementById('cName').value.trim(); const p=document.getElementById('cPhone').value.trim(); const a=document.getElementById('cAddress').value.trim(); const nt=document.getElementById('cNotes').value.trim();
    if(!n||!p||!a){ toast('⚠️ Please complete all required fields'); return; }
    const sum=cart.map(i=>`• ${i.name} | Size ${i.size} | ${i.price} EGP ×${i.qty}`).join('\n');
    lastMsg=`🛒 *New Order - 90 Mins*\n\n👤 *Name:* ${n}\n📞 *Phone:* ${p}\n📍 *Address:* ${a}\n${nt?'📝 *Notes:* '+nt+'\n':''}\n📋 *Items:*\n${sum}\n${discount>0?'🎫 *15% Discount*\n':''}\n💰 *Total: ${total()} EGP*\n💵 Cash on Delivery\n🚚 Shubra El Kheima`;
    window.open(`https://wa.me/201027081851?text=${encodeURIComponent(lastMsg)}`,'_blank');
    cart=[]; discount=0; document.getElementById('promoInput').value=''; document.getElementById('promoMsg').textContent=''; saveCart(); closeCheckout(); toast('✅ Order sent to WhatsApp!');
}

function toggleDarkMode(){ dark=!dark; document.body.classList.toggle('dark-mode',dark); localStorage.setItem('90m_dark_v8',dark); document.getElementById('themeToggle').textContent=dark?'☀️':'🌓'; }

function openLoginModal(){ document.getElementById('loginModal').classList.add('active'); switchTab('login'); }
function closeLoginModal(){ document.getElementById('loginModal').classList.remove('active'); }
function switchTab(t){
    document.querySelectorAll('#loginModal .tab-btn').forEach(b=>b.classList.remove('active'));
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    if(t==='login'){ document.getElementById('tabLogin').classList.add('active'); document.getElementById('loginForm').classList.remove('hidden'); document.getElementById('modalTitle').textContent='Sign In'; }
    else { document.getElementById('tabSignup').classList.add('active'); document.getElementById('signupForm').classList.remove('hidden'); document.getElementById('modalTitle').textContent='Create Account'; }
    document.getElementById('loginErr').style.display='none'; document.getElementById('signErr').style.display='none';
}

function login(){
    const id = document.getElementById('loginId').value.trim();
    const pw = document.getElementById('loginPass').value.trim();
    document.getElementById('loginErr').style.display = 'none';
    if (!id) { toast('⚠️ Phone or email is required'); return; }
    if (!pw) { toast('⚠️ Password is required'); return; }
    const isPhone = /^01/.test(id);
    const isEmail = id.includes('@');
    if (isPhone && !isValidEgyptPhone(id)) { toast('⚠️ Invalid phone number (must be 11 digits starting with 01)'); return; }
    if (isEmail && !isValidEmail(id)) { toast('⚠️ Invalid email format'); return; }
    if (!isPhone && !isEmail) { toast('⚠️ Enter a valid phone number or email'); return; }
    if (!isValidPassword(pw)) { toast('⚠️ Password must be at least 6 characters'); return; }
    const users = JSON.parse(localStorage.getItem('90m_users_v8')) || [];
    const u = users.find(x => (x.phone === id || x.email === id) && x.password === pw);
    if (u) { user = u; localStorage.setItem('90m_user_v8', JSON.stringify(u)); updateUserUI(); closeLoginModal(); toast('✅ Signed in successfully!'); }
    else { document.getElementById('loginErr').style.display = 'block'; }
}

function signup(){
    const n = document.getElementById('signName').value.trim();
    const ph = document.getElementById('signPhone').value.trim();
    const em = document.getElementById('signEmail').value.trim();
    const pw = document.getElementById('signPass').value.trim();
    document.getElementById('signErr').style.display = 'none';
    if (!isValidName(n)) { toast('⚠️ Name must be at least 3 characters'); return; }
    if (!isValidEgyptPhone(ph)) { toast('⚠️ Invalid phone number (must be 11 digits starting with 01)'); return; }
    if (em && !isValidEmail(em)) { toast('⚠️ Invalid email format'); return; }
    if (!isValidPassword(pw)) { toast('⚠️ Password must be at least 6 characters'); return; }
    const users = JSON.parse(localStorage.getItem('90m_users_v8')) || [];
    if (users.find(x => x.phone === ph)) { toast('⚠️ This phone number is already registered'); return; }
    if (em && users.find(x => x.email === em)) { toast('⚠️ This email is already registered'); return; }
    const newU = { name: n, phone: ph, email: em, password: pw };
    users.push(newU); localStorage.setItem('90m_users_v8', JSON.stringify(users));
    user = newU; localStorage.setItem('90m_user_v8', JSON.stringify(newU));
    updateUserUI(); closeLoginModal(); toast('✅ Account created successfully!');
}

function logout(){ user = null; localStorage.removeItem('90m_user_v8'); updateUserUI(); toast('👋 Signed out'); }
function updateUserUI(){
    const area = document.getElementById('userArea');
    if (user) { area.innerHTML = `<span class="user-greeting">👋 <span>${user.name}</span></span><button class="btn-logout" id="btnLogout">Logout</button>`; document.getElementById('btnLogout').addEventListener('click', logout); }
    else { area.innerHTML = '<button class="btn-login" id="btnOpenLogin">Sign In</button>'; document.getElementById('btnOpenLogin').addEventListener('click', openLoginModal); }
}

function toast(m){ const c = document.getElementById('toastContainer'); const t = document.createElement('div'); t.className = 'toast'; t.textContent = m; c.appendChild(t); setTimeout(() => t.remove(), 3000); }

function createCard(p){
    const card = document.createElement('div'); card.className = 'product-card'; card.dataset.cat = p.cat; card.dataset.type = p.type || ''; const fav = isFavorite(p.id);
    let bc = ''; if (p.badge === 'Legend' || p.badge === 'Classic Legend') bc = 'legend'; else if (p.cat === 'package') bc = 'package'; else if (['New', 'World Champ', 'CR7', 'Messi', 'Mo Salah', 'Best Seller', 'Exclusive', 'Classic', 'National'].includes(p.badge)) bc = 'new';
    let imgHTML = ''; if (p.img && p.img.trim() !== '') { imgHTML = `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span style="font-size:4rem;display:none;">${p.emoji || '⚽'}</span>`; } else { imgHTML = `<span style="font-size:4rem;">${p.emoji || '⚽'}</span>`; }
    card.innerHTML = `${p.badge ? `<span class="product-badge ${bc}">${p.badge}</span>` : ''}<span class="fav-icon ${fav ? 'active' : ''}" data-id="${p.id}">${fav ? '❤️' : '🤍'}</span><div class="product-img" data-id="${p.id}">${imgHTML}</div><div class="product-info"><span class="club">${p.cat === 'package' ? 'Package' : p.cat === 'national' ? 'National Team' : p.cat === 'legends' ? 'Legend Jersey' : p.cat === 'players' ? 'Player Edition' : 'Club Jersey'}</span><h3 data-id="${p.id}">${p.name}</h3>${p.type ? `<span class="type-tag">${p.type}</span>` : ''}<div class="price">${p.price} EGP</div><button class="btn-add quick-add" data-id="${p.id}">🛒 Quick Add</button></div>`;
    card.querySelector('.product-img').addEventListener('click', function(e) { e.stopPropagation(); openDetailPage(this.dataset.id); });
    card.querySelector('h3').addEventListener('click', function(e) { e.stopPropagation(); openDetailPage(this.dataset.id); });
    card.querySelector('.fav-icon').addEventListener('click', function(e) { e.stopPropagation(); toggleFavorite(this.dataset.id); this.classList.toggle('active'); this.textContent = this.classList.contains('active') ? '❤️' : '🤍'; });
    card.querySelector('.quick-add').addEventListener('click', function(e) { e.stopPropagation(); const prod = allProducts.find(pr => pr.id === this.dataset.id); if (prod) addToCart(prod, 'L'); });
    return card;
}

function render(){ const grid = document.getElementById('allProductsGrid'); if (!grid) return; grid.innerHTML = ''; allProducts.forEach(p => grid.appendChild(createCard(p))); }

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
    document.getElementById('loginModal').onclick = function(e){ if(e.target === this) closeLoginModal(); };
    document.getElementById('btnBackFromDetail').onclick = closeDetailPage;
    document.getElementById('searchInput').oninput = performSearch;
    document.querySelectorAll('.cat-tab').forEach(btn => {
        btn.onclick = function(){
            document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.cat;
            document.getElementById('searchInput').value = '';
            document.getElementById('noResults').style.display = 'none';
            document.querySelectorAll('.product-card').forEach(c => c.classList.remove('hidden-by-search'));
            if(currentFilter !== 'all'){ document.querySelectorAll('.product-card').forEach(card => { if(card.dataset.cat !== currentFilter) card.classList.add('hidden-by-search'); }); }
        };
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (dark) { document.body.classList.add('dark-mode'); const tt = document.getElementById('themeToggle'); if (tt) tt.textContent = '☀️'; }
    render(); updateUI(); updateUserUI(); setupEvents();
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    if (productId) { setTimeout(() => openDetailPage(productId), 300); }
});