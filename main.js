(()=>{"use strict";var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{p:()=>a});const e=(()=>{const t=document.querySelector(".locationForm"),e=document.querySelector(".changeUnits");let n,r="metric";t.addEventListener("submit",(t=>{t.preventDefault(),a(c(),r)})),e.addEventListener("click",(()=>o()));const o=function(){"metric"==r?(r="imperial",e.textContent="Display °C"):"imperial"==r&&(r="metric",e.textContent="Display °F"),a(n[0].name,r)},c=function(){return document.getElementById("location").value};return{updateData:function(t,e){const a=t[0],r=t[1];n=t;let o="";o="metric"==e?"C":"F",function(t,e){var n;document.querySelector(".cloud-type").textContent=t.weather[0].description.toProperCase(),document.querySelector(".city-name").textContent=t.name,document.querySelector(".today-date").textContent=(n=t.dt,new Date(1e3*n).toDateString()),document.querySelector(".current-time").textContent=function(t){return new Date(1e3*t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}(t.dt),document.querySelector(".current-temperature").textContent=`${Math.round(t.main.temp)} °${e}`,document.querySelector(".currentCloud").src=`http://openweathermap.org/img/w/${t.weather[0].icon}.png`}(a,o),function(t,e){const n=document.querySelector(".forecast-container");n.innerHTML="";for(let r=0;r<t.length-1;r++){const o=t[r],c=document.createElement("div");c.classList.add("forecast-card");const i=document.createElement("p");i.classList.add("forecast-day"),i.textContent=(a=o.dt,["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][new Date(1e3*a).getDay()]);const d=document.createElement("div");d.classList.add("forecast-temperatures");const s=document.createElement("p");s.classList.add("forecast-low-temperature"),s.textContent=`${Math.round(o.temp.min)} °${e}`;const u=document.createElement("p");u.classList.add("forecast-high-temperature"),u.textContent=`${Math.round(o.temp.max)} °${e}`;const p=document.createElement("img");p.src=`http://openweathermap.org/img/w/${o.weather[0].icon}.png`,c.appendChild(i),c.appendChild(d),c.appendChild(p),d.appendChild(u),d.appendChild(s),n.append(c)}var a}(r.daily,o)}}})(),n=new class{constructor(t){this.apikey=t}buildURL(t,e){return`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=${this.apikey}&units=${e}`}async getWeather(t,e){const n=await fetch(this.buildURL(t,e)),a=await n.json();return[a,await this.getForecast(this.getCoord(a),e)]}getCoord(t){return t.coord}async getForecast(t,e){const{lat:n,lon:a}=t,r=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${n}&lon=${a}&exclude=minutely,hourly,alerts&units=${e}&appid=${this.apikey}`);return await r.json()}}("a722fdf37dc5dcbe9f831dd8326dd09a");async function a(t,a){const r=await n.getWeather(t,a);e.updateData(r,a)}String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},a("Miami","imperial")})();