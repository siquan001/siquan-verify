!function(f){
  f.verifyeventlist={};
  f.Verify={
    version:'1.0.0',
    onready:function(){},
    isVerified:function(_verify){
      if(_verify.getAttribute('data-verified')=="true"){
        return true;
      }
      return false;
    },
    onverified:function(_verify,fn){
      f.verifyeventlist[_verify.getAttribute('data-embedid')]={'verified':fn};
    }
  }
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.verify').forEach(function(e){
      e.innerHTML='<div class="nover"><svg class="vp-circle-i" t="1620806853783" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1572" style="fill: rgb(255, 255, 255); width: 24px;"><path d="M490.154667 928.170667c12.544 6.698667 28.288 6.656 40.832-0.042667 341.845333-183.637333 366.122667-542.421333 365.824-644.437333a42.154667 42.154667 0 0 0-25.429334-38.528l-343.466666-152.149334a42.88 42.88 0 0 0-34.688 0.042667L152.149333 245.205333a42.24 42.24 0 0 0-25.258666 38.058667c-1.450667 101.504 18.986667 461.056 363.264 644.906667zM370.090667 439.168l97.834666 97.834667 183.168-183.168 60.330667 60.330666-243.498667 243.498667-158.165333-158.165333 60.330667-60.330667z" p-id="1573"></path></svg></div><p>点击完成人机验证</p>';
      e.addEventListener('click',function(e){
        if(e.pageX==0&&e.pageX==0) return;
        if(this.getAttribute('data-verified')=="true") return;
        startVerify(this);
      });
      var id=Math.random();
      e.setAttribute('data-embedid',id);
    })
    document.querySelectorAll(".verify-embed").forEach(function(e){
      var id=Math.random();
      e.setAttribute('data-embedid',id);
      e.innerHTML="<iframe src=\"http://siquan001.github.io/myshow/verify.html?embed="+id+"\"></iframe>";
    })
    var n=document.createElement('style');  
    n.innerHTML=`.verify-embed{width:300px;height:204px;border:#ccc solid 1px;}.verify-embed iframe{width:400px;height:270px;transform:scale(0.75);transform-origin:0 0;border:0;}.verify{width:200px;height:30px;line-height:30px;background:#3c8aff;color:#fff;font-size:14px;margin:10px;cursor:pointer;}.verify>div.nover{width:30px;height:30px;display:flex;justify-content:center;align-items:center;background:#2a60b2;float:left;}.verify>div.ver{width:30px;height:30px;display:flex;justify-content:center;align-items:center;background:#009882;float:left;}.verify:hover>div.nover svg{display:none;}.verify:hover>div.nover::after{content:'';width:10px;height:10px;border-radius:50%;border:#fff solid 2px;animation: verify 1.5s infinite linear;}@keyframes verify{0%{width:10px;height:10px;}50%{width:20px;height:20px;}100%{width:10px;height:10px;}}.verify>p{float:left;margin:0;text-align:center;width:160px;}.verify-frame{width:100%;height:100vh;background-color:#0002;position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;z-index:100000;}.verify-frame iframe{width:400px;height:270px;border:0;}@media(max-width:400px){.verify-frame iframe{width:calc(400px / 1.3);}}`;
    document.head.append(n);
    function startVerify(_verify){
      var d=document.createElement('div');
      d.classList.add('verify-frame');
      document.body.append(d);
      d.innerHTML="<iframe src=\"http://siquan001.github.io/myshow/verify.html\"></iframe>"
      f.thisVerify=_verify;
    }
    f.addEventListener('message',function(event){
      if(event.data=="success"){
        var nover=f.thisVerify.querySelector('.nover');
        var np=f.thisVerify.querySelector('p');
        nover.classList.remove('nover');
        nover.classList.add('ver');
        np.innerHTML="验证成功";
        nover.innerHTML='<svg style="width: 24px; fill: #fff" t="1620873613343" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7219"><path d="M455.42 731.04c-8.85 0-17.75-3.05-24.99-9.27L235.14 553.91c-16.06-13.81-17.89-38.03-4.09-54.09 13.81-16.06 38.03-17.89 54.09-4.09l195.29 167.86c16.06 13.81 17.89 38.03 4.09 54.09-7.58 8.83-18.31 13.36-29.1 13.36z" p-id="7220"></path><path d="M469.89 731.04c-8.51 0-17.07-2.82-24.18-8.6-16.43-13.37-18.92-37.53-5.55-53.96L734.1 307.11c13.37-16.44 37.53-18.92 53.96-5.55 16.43 13.37 18.92 37.53 5.55 53.96L499.67 716.89c-7.58 9.31-18.64 14.15-29.78 14.15z" p-id="7221"></path></svg>';
        f.thisVerify.style.background='#00D59F';
        f.thisVerify.setAttribute('data-verified','true');
        if(f.verifyeventlist[f.thisVerify.getAttribute('data-embedid')]){
          if(typeof f.verifyeventlist[f.thisVerify.getAttribute('data-embedid')].verified=='function'){
            f.verifyeventlist[f.thisVerify.getAttribute('data-embedid')].verified();
          }
        }
      }else if(event.data=="quit"){
        document.querySelector(".verify-frame").remove();
      }else if(event.data.indexOf('embedsuccess')!=-1){
        var embedId=event.data.split(':')[1];
        document.querySelector(".verify-embed[data-embedid=\""+embedId+"\"]").setAttribute('data-verified','true');
        if(f.verifyeventlist[embedId]){
          if(typeof f.verifyeventlist[embedId].verified=='function'){
            f.verifyeventlist[embedId].verified();
          }
        }
      }
    });
    Verify.onready();
  },false);
}(window);
