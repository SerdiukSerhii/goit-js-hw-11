import{a as c,S as p,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com";function y(s){return c.get("/api",{params:{key:"55023581-b8ae6332fd3af068fbd1cd850",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data)}const f=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),g=new p(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(s){const o=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:a,comments:m,downloads:d})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img class="gallery-image"
      src="${i}"
      alt="${e}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t}</p>
    <p class="info-item"><b>Views</b> ${a}</p>
    <p class="info-item"><b>Comments</b> ${m}</p>
    <p class="info-item"><b>Downloads</b> ${d}</p>
  </div>
</li>`).join("");f.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){f.innerHTML=""}function L(){u.classList.add("is-visible")}function v(){u.classList.remove("is-visible")}const l=document.querySelector(".js-form");l.addEventListener("submit",s=>{s.preventDefault();const i=new FormData(s.currentTarget).get("search-text").trim();if(!i){n.error({message:"Please enter a search query!",position:"topRight",icon:!1});return}b(),L(),y(i).then(r=>{r.hits.length>0?h(r.hits):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#ec4343ff",icon:!1})}).catch(r=>{console.log(r)}).finally(()=>{v()}),l.reset()});
//# sourceMappingURL=index.js.map
