(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const o="/assets/matthieuGravy-c38389c5.svg";document.querySelector("#app").innerHTML=`
  <article>
      <img src="${o}" class="logo vanilla" alt="Matthieu Gravy" />
      <h1><span class="col-2">M</span>atthieu <span class="w-600"><span class="col-2">G</span>ravy</span></h1>

    <p>
    <span>Web dev junior </span>| <span>JS enthousiast </span>  | <span>Ubuntu lover </span>  | <span>#BeCode trainee </span>   
    <br />
    </p>
    <div class="button-box">
      <a class="button" href="https://www.linkedin.com/in/matthieugravy/" target="_blank">
      Linkedin
      </a>
      <a class="button " href="https://github.com/matthieuGravy" target="_blank">
      gitHub</a>
      <a  class="button"  href ="https//pommepatate.be" target="_blank">
      pommepatate.be<a/>
    </div>
  </article>
`;
