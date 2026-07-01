(function(){
  var hd=document.getElementById('hd');
  function onScroll(){
    var y=window.scrollY||document.documentElement.scrollTop;
    if(hd) hd.classList.toggle('scrolled', y>40);
  }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el,i){
    el.style.transitionDelay=(Math.min(i%6,5)*55)+'ms'; io.observe(el);
  });

  document.querySelectorAll('.filters').forEach(function(f){
    f.querySelectorAll('.chip').forEach(function(c){
      c.addEventListener('click',function(){
        f.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on')});
        c.classList.add('on');
        var cat=c.getAttribute('data-cat');
        var grid=f.parentNode.querySelector('.pf-grid');
        if(grid){grid.querySelectorAll('.pf').forEach(function(p){
          p.style.display=(!cat||cat==='all'||p.getAttribute('data-cat')===cat)?'':'none';
        });}
      });
    });
  });

  var f=document.querySelector('form.demo');
  if(f) f.addEventListener('submit',function(e){e.preventDefault();alert('데모 시안입니다. 실제 구축 시 제출 → 지정 메일 자동발송으로 연동됩니다.');});
})();
