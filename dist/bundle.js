(()=>{const e=document.getElementById("textarea"),t=document.getElementById("output"),n=document.getElementById("currentLine");function o(){const e=indexedDB.open("text_editor",1);e.onsuccess=function(){const o=e.result.transaction("entries","readonly").objectStore("entries").get(1);o.onsuccess=function(){const e=o.result;if(e&&e.content){const o=e.content.split("\n");t.innerHTML="";let s=1;o.forEach((e=>{const n=document.createElement("div");n.classList.add("line"),n.innerHTML=`<span class="line-no">${s}</span><span class="line-content">${e}</span>`,t.appendChild(n),s++})),n.textContent=s}}}}console.log("Hello, world!"),e.addEventListener("keydown",(function(s){"Enter"===s.key&&(s.preventDefault(),function(s){const c=indexedDB.open("text_editor",1);c.onsuccess=function(){const i=c.result.transaction("entries","readwrite"),d=i.objectStore("entries"),r=d.get(1);"clear"===s?(d.clear(),t.innerHTML="",n.textContent=1):r.onsuccess=function(){const e=r.result;let t=s;e&&e.content&&(t=e.content+"\n"+s),d.put({id:1,content:t})},i.oncomplete=function(){console.log("Contents saved to IndexedDB"),e.value="",o()}}}(e.value))})),document.addEventListener("DOMContentLoaded",(function(){e.focus(),o()})),document.getElementById("terminal").addEventListener("click",(function(t){e.focus()})),window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),window.deferredPrompt=e,s.style.visibility="visible"}));const s=document.getElementById("installButton");s.addEventListener("click",(async()=>{window.deferredPrompt&&(window.deferredPrompt.preventDefault(),window.deferredPrompt.prompt(),"accepted"===(await window.deferredPrompt.userChoice).outcome?(console.log("User accepted the installation"),s.style.visibility="hidden"):console.log("User dismissed the installation"),window.deferredPrompt=null)}))})();