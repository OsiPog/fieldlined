(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();let r;const c=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&c.decode();let a=null;function u(){return(a===null||a.byteLength===0)&&(a=new Uint8Array(r.memory.buffer)),a}function f(e,n){return e=e>>>0,c.decode(u().subarray(e,e+n))}async function d(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(t){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}const o=await e.arrayBuffer();return await WebAssembly.instantiate(o,n)}else{const o=await WebAssembly.instantiate(e,n);return o instanceof WebAssembly.Instance?{instance:o,module:e}:o}}function A(){const e={};return e.wbg={},e.wbg.__wbg_log_33a7d28a5e68e479=function(n,o){console.log(f(n,o))},e}function m(e,n){return r=e.exports,l.__wbindgen_wasm_module=n,a=null,r}async function l(e){if(r!==void 0)return r;typeof e>"u"&&(e=new URL("data:application/wasm;base64,AGFzbQEAAAABCQJgAn9/AGAAAAIiAQN3YmcaX193YmdfbG9nXzMzYTdkMjhhNWU2OGU0NzkAAAMCAQEFAwEAEQcTAgZtZW1vcnkCAAZzYXlfaGkAAQoNAQsAQYCAwABBAhAACwsLAQBBgIDAAAsCSGkAewlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNjkuMCAoODRjODk4ZDY1IDIwMjMtMDQtMTYpBndhbHJ1cwYwLjE5LjAMd2FzbS1iaW5kZ2VuEjAuMi44NiAoMmQ4ODJjOTdiKQ==",self.location));const n=A();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:o,module:t}=await d(await e,n);return m(o,t)}const y=document.querySelector("canvas"),w=y.getContext("webgl",{antialias:!0});let b=await l();if(!w)throw"Failed to initialize WebGL";b.say_hi()})();