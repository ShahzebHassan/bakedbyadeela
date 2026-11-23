const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu(){nav?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Open navigation')}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){closeMenu();menuButton.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu()});
matchMedia('(min-width:1021px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.flavour').forEach(item=>{item.hidden=button.dataset.filter!=='all'&&item.dataset.category!==button.dataset.filter;if(!item.hidden)count++});document.querySelector('#filter-status').textContent=`${count} flavour ideas shown`;}));
const form=document.querySelector('#enquiry-form');
if(form){
  const now=new Date();form.elements.date.min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const params=new URLSearchParams(location.search);const category=params.get('collection');
  if([...form.elements.collection.options].some(o=>o.value===category))form.elements.collection.value=category;
  form.elements.design.value=(params.get('design')||'').slice(0,150);
  form.addEventListener('submit',async e=>{
    e.preventDefault();if(!form.reportValidity())return;
    const button=form.querySelector('[type=submit]');const status=document.querySelector('#form-status');
    button.disabled=true;form.setAttribute('aria-busy','true');status.dataset.error='false';status.textContent='Sending your enquiry…';
    try{
      const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString()});
      if(!response.ok)throw new Error('Submission failed');
      location.assign('/thank-you.html');
    }catch{
      status.dataset.error='true';status.textContent='Your enquiry could not be sent. Your details are still here. Please try again, or contact @bakedbyadeela on Instagram.';
      button.disabled=false;form.removeAttribute('aria-busy');
    }
  });
}
// The supplied portfolio remains visible unless an authorised feed returns media.
const feed=document.querySelector('#instagram-feed');
if(feed){
  function safeURL(value,instagramOnly=false){try{const u=new URL(value);return u.protocol==='https:'&&(!instagramOnly||u.hostname==='www.instagram.com'||u.hostname==='instagram.com')?u.href:null}catch{return null}}
  async function loadInstagram(){
    try{
      const response=await fetch('/.netlify/functions/instagram-feed',{signal:AbortSignal.timeout(8000)});
      if(!response.ok)return;
      const payload=await response.json();if(!Array.isArray(payload.items)||!payload.items.length)return;
      const cards=payload.items.slice(0,4).map(item=>{
        const media=safeURL(item.image);const permalink=safeURL(item.url,true);if(!media||!permalink)return null;
        const a=document.createElement('a');a.href=permalink;a.target='_blank';a.rel='noopener noreferrer';
        const figure=document.createElement('figure');const img=document.createElement('img');
        img.src=media;img.alt=(item.caption||'Floral cake creation by Baked By Adeela').slice(0,240);img.loading='lazy';img.width=600;img.height=750;
        a.setAttribute('aria-label',img.alt+' — view on Instagram');figure.append(img);a.append(figure);return a;
      }).filter(Boolean);
      if(cards.length){feed.replaceChildren(...cards);document.querySelector('#feed-note').textContent='Latest from @bakedbyadeela on Instagram.'}
    }catch{/* Keep the original portfolio available when the connection is absent or offline. */}
  }
  const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){observer.disconnect();loadInstagram()}},{rootMargin:'200px'});observer.observe(feed);
}
