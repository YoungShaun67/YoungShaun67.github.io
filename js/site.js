(function(){
var b=document.querySelector('.burger'),n=document.querySelector('nav'),l=document.querySelector('.logo img');
if(b&&n&&l){
  var base=l.getAttribute('src').replace('logo.svg',''),o=document.createElement('div');
  o.className='ov';o.hidden=true;
  o.innerHTML='<button class="x" aria-label="Close menu">&times;</button>'+
    [].map.call(n.querySelectorAll('a'),function(a,i){return '<a href="'+a.getAttribute('href')+'"><span>0'+(i+1)+'</span>'+a.textContent+'</a>'}).join('')+
    '<img src="'+base+'menu-art.svg" alt="">';
  document.body.appendChild(o);
  var t=function(s){o.hidden=!s;b.setAttribute('aria-expanded',s);document.body.style.overflow=s?'hidden':''};
  b.onclick=function(){t(true)};
  o.querySelector('.x').onclick=function(){t(false)};
  document.addEventListener('keydown',function(e){if(e.key==='Escape')t(false)});
}
var tabs=document.querySelectorAll('.tab');
[].forEach.call(tabs,function(tb){tb.onclick=function(){
  [].forEach.call(tabs,function(x){x.classList.toggle('on',x===tb)});
  var f=tb.getAttribute('data-f');
  [].forEach.call(document.querySelectorAll('.card[data-g]'),function(c){c.hidden=f!=='all'&&c.getAttribute('data-g')!==f});
}});
})();
