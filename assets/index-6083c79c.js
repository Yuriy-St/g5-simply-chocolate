(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n={prevArrow:!1,nextArrow:!1,infinite:!1,speed:300,adaptiveHeight:!0,variableWidth:!1},c={responsiveSliders:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1}}],responsiveSliders2:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]};$(".responsive").slick(n,n.dots=!0,n.slidesToShow=3,n.slidesToScroll=1,n.responsive=c.responsiveSliders);$(".responsive-sellers").slick(n,n.dots=!1,n.responsive=c.responsiveSliders2);(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(s){for(var o=this,i=(o.document||o.ownerDocument).querySelectorAll(s),e=0;i[e]&&i[e]!==o;)++e;return Boolean(i[e])}),typeof r.closest!="function"&&(r.closest=function(s){for(var o=this;o&&o.nodeType===1;){if(o.matches(s))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),s=document.querySelector(".js-backdrop-modal"),o=document.querySelectorAll(".js-modal-close"),i=document.querySelector(".review-button");r.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),document.body.classList.add("modal-open");var l=this.getAttribute("data-modal"),a=document.querySelector('.modal[data-modal="'+l+'"]');a.classList.add("active"),s.classList.add("active")})}),o.forEach(function(e){e.addEventListener("click",function(t){var l=this.closest(".modal");document.body.classList.remove("modal-open"),l.classList.remove("active"),s.classList.remove("active")})}),document.body.addEventListener("keyup",function(e){var t=e.keyCode;t==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".js-backdrop-modal").classList.remove("active"),document.body.classList.remove("modal-open"))},!1),s.addEventListener("click",function(e){e.target===e.currentTarget&&(document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open"))}),i.addEventListener("click",function(e){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open")})});
