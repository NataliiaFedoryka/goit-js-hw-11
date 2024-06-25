import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function d(r){const i={imageList:document.querySelector(".images-list")},o=r.map(t=>`<li class="images-list-item">
      <a class="img-link" href="${t.largeImageURL}">
        <img class="img" src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <ul class="img-dscr">
        <li class="img-data">
          <p class="img-data-title">Likes</p>
          <p class="img-data-numbers">${t.likes}</p>
        </li>
        <li class="img-data">
          <p class="img-data-title">Views</p>
          <p class="img-data-numbers">${t.views}</p>
        </li>
        <li class="img-data">
          <p class="img-data-title">Comments</p>
          <p class="img-data-numbers">${t.comments}</p>
        </li>
        <li class="img-data">
          <p class="img-data-title">Downloads</p>
          <p class="img-data-numbers">${t.downloads}</p>
        </li>
      </ul>
    </li>`).join("");i.imageList.innerHTML=o}function p(){const r={imageList:document.querySelector(".images-list")};r.imageList.innerHTML=""}const g="44528758-32c26e02cbc7bd56fd7d9b89c",f="https://pixabay.com/api/";async function h(r,i=1){const o=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:12}),t=`${f}?${o.toString()}`;try{const e=await fetch(t);if(!e.ok)throw new Error("Network response was not ok");return e.json()}catch{throw new Error("Fetch request failed")}}const a={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.getElementById("loader")};a.loader.style.display="none";let l,m;a.imageSearchForm.addEventListener("submit",async r=>{if(r.preventDefault(),m=a.imageSearchInput.value.trim(),m==="")return a.imageList.innerHTML="",c.info({message:"You need to enter a search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});a.loader.style.display="block",p();try{const i=await h(m);i.hits.length===0?(a.imageList.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})):(d(i.hits),l?l.refresh():l=new u(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}))}catch{c.error({message:"Something went wrong. Please try again later!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})}finally{a.loader.style.display="none"}r.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
