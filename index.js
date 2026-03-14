import{a as c,S as g,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=void 0;c.defaults.baseURL="https://pixabay.com";function y(o){return c.get("/api/",{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40}}).then(r=>r.data)}console.log("API KEY:",f);const u=document.querySelector(".js-gallery"),m=document.querySelector(".loader"),h=new g(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:a,comments:p,downloads:d})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img class="gallery-image"
      src="${i}"
      alt="${e}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t}</p>
    <p class="info-item"><b>Views</b> ${a}</p>
    <p class="info-item"><b>Comments</b> ${p}</p>
    <p class="info-item"><b>Downloads</b> ${d}</p>
  </div>
</li>`).join("");u.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){u.innerHTML=""}function v(){m.classList.add("is-visible")}function _(){m.classList.remove("is-visible")}const D={BASE_URL:"/goit-js-hw-11/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},l=document.querySelector(".js-form");l.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(o.currentTarget).get("search-text").trim();if(!i){n.error({message:"Please enter a search query!",position:"topRight",icon:!1});return}L(),v(),y(i).then(s=>{s.hits.length>0?b(s.hits):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#98a8d4ff",icon:!1})}).catch(()=>{n.error({message:"Error fetching images. Please try again later.",position:"topRight",icon:!1})}).finally(()=>{_()}),l.reset()});console.log(void 0);console.log("ENV:",D);
//# sourceMappingURL=index.js.map
