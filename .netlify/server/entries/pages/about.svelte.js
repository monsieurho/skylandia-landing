var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => About,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_dca6450b = require("../../chunks/index-dca6450b.js");
const browser = false;
const dev = false;
var closebutton = "/_app/assets/close-50f4588c.png";
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: `#about.svelte-1kjpbm1.svelte-1kjpbm1{position:relative;min-height:100vh;background-image:url('../assets/map.jpg');background-size:cover;background-position:center}section.svelte-1kjpbm1.svelte-1kjpbm1{display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden}.about-text-container.svelte-1kjpbm1.svelte-1kjpbm1{color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:8}.about-text-container.svelte-1kjpbm1 h1.svelte-1kjpbm1{color:#fff;max-width:400px;margin:0px;text-align:center}.about-text-container.svelte-1kjpbm1 p.svelte-1kjpbm1{color:#fff;max-width:400px;margin:0px;text-align:center}.compass.svelte-1kjpbm1.svelte-1kjpbm1{width:200px;height:200px;border:solid #fff 1px;border-radius:50%;position:absolute;right:100px;bottom:150px;display:flex;justify-content:center;align-items:center}.compass.svelte-1kjpbm1.svelte-1kjpbm1:before{content:"N";position:absolute;top:0px;color:#fff;text-shadow:0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px rgb(0, 183, 255),
    0 0 82px rgb(0, 255, 242),
    0 0 92px #0fa,
    0 0 102px rgb(0, 238, 255),
    0 0 151px rgb(0, 255, 242)}.compass.svelte-1kjpbm1.svelte-1kjpbm1:after{content:"S";position:absolute;bottom:0px;color:#fff;text-shadow:0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px rgb(0, 183, 255),
    0 0 82px rgb(0, 255, 242),
    0 0 92px #0fa,
    0 0 102px rgb(0, 238, 255),
    0 0 151px rgb(0, 255, 242)}.box.svelte-1kjpbm1.svelte-1kjpbm1{background-color:#fff;width:3px;height:200px}.modal-map.svelte-1kjpbm1.svelte-1kjpbm1{position:absolute;top:-2vh;opacity:0;visibility:hidden;min-height:100%;width:100%;background:rgba(24, 24, 24, 0.4);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);display:flex;justify-content:center;align-items:center;flex-direction:column;color:white;padding:40px;transition:all ease-in 0.2s}.modal-map-inner.svelte-1kjpbm1.svelte-1kjpbm1{display:flex;justify-content:center;align-items:center;flex-direction:column;color:white;padding:40px;max-width:600px;background:rgba(51, 51, 51, 0.4);border-radius:10px;border:1px solid rgba(102, 101, 101, 0.2);position:absolute}.modal-map-inner.svelte-1kjpbm1 img.svelte-1kjpbm1{width:25px;position:absolute;top:20px;right:20px;cursor:pointer}.modal-map.svelte-1kjpbm1 p.svelte-1kjpbm1{font-size:14px}.active.svelte-1kjpbm1.svelte-1kjpbm1{opacity:1;visibility:visible;top:0;left:0;transition:all ease-in .2s}.overlay-background.svelte-1kjpbm1.svelte-1kjpbm1{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.1)}`,
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const About = (0, import_index_dca6450b.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}<link rel="${"stylesheet"}" href="${"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"}" integrity="${"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="}" crossorigin="${""}" data-svelte="svelte-1kjz7om">`, ""}




<section id="${"about"}" class="${"svelte-1kjpbm1"}"><div class="${"overlay-background svelte-1kjpbm1"}"></div>
<div class="${"about-text-container svelte-1kjpbm1"}"><h1 class="${"svelte-1kjpbm1"}">Lorem Ipsum</h1>
<p class="${"svelte-1kjpbm1"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p></div>
<div class="${"key-points"}"><div class="${"map-lines"}"></div>
    <p class="${"place"}"></p>
     <p class="${"place2"}"></p>
     <p class="${"place3"}"></p>
     <svg xmlns="${"http://www.w3.org/2000/svg"}" version="${"1.1"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0"}" y="${"0"}" viewBox="${"0 0 490 490"}" style="${"enable-background:new 0 0 512 512"}" xml:space="${"preserve"}" class="${""}"><g><g xmlns="${"http://www.w3.org/2000/svg"}"><g><path d="${"M0,480.086L150.771,245L0,9.914L490,245L0,480.086z"}" fill="${"#ffed00"}" data-original="${"#000000"}" class="${""}"></path></g></g></g></svg></div>

<div class="${"compass svelte-1kjpbm1"}"><div class="${"box player svelte-1kjpbm1"}"></div></div>


<div class="${["modal-map place-content svelte-1kjpbm1", ""].join(" ").trim()}"><div class="${"modal-map-inner svelte-1kjpbm1"}"><img${(0, import_index_dca6450b.b)("src", closebutton, 0)} alt="${"close button"}" class="${"svelte-1kjpbm1"}">
  <h2>Headline 1</h2>
  <p class="${"svelte-1kjpbm1"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
    <p class="${"svelte-1kjpbm1"}">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div>

  
<div class="${["modal-map place-content svelte-1kjpbm1", ""].join(" ").trim()}"><div class="${"modal-map-inner svelte-1kjpbm1"}"><img${(0, import_index_dca6450b.b)("src", closebutton, 0)} alt="${"close button"}" class="${"svelte-1kjpbm1"}">
  <h2>Headline 2</h2>
  <p class="${"svelte-1kjpbm1"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
    <p class="${"svelte-1kjpbm1"}">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div>

  
<div class="${["modal-map place-content svelte-1kjpbm1", ""].join(" ").trim()}"><div class="${"modal-map-inner svelte-1kjpbm1"}"><img${(0, import_index_dca6450b.b)("src", closebutton, 0)} alt="${"close button"}" class="${"svelte-1kjpbm1"}">
  <h2>Headline 3</h2>
  <p class="${"svelte-1kjpbm1"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
    <p class="${"svelte-1kjpbm1"}">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
