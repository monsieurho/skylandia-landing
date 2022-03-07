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
  default: () => Routes,
  prerender: () => prerender
});
var import_index_dca6450b = require("../../chunks/index-dca6450b.js");
var Counter_svelte_svelte_type_style_lang = "";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#hero.svelte-1pmmyf9.svelte-1pmmyf9{position:relative;min-height:100vh}section.svelte-1pmmyf9.svelte-1pmmyf9{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1;overflow:hidden}.video-background.svelte-1pmmyf9.svelte-1pmmyf9{min-width:100%;min-height:100%;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.video-overlay.svelte-1pmmyf9.svelte-1pmmyf9{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.2)}.trailer.svelte-1pmmyf9.svelte-1pmmyf9{position:absolute;bottom:0px;right:0px;width:20%;padding-right:20px;padding-bottom:20px;display:flex;flex-direction:column;display:none}.trailer.svelte-1pmmyf9 h4.svelte-1pmmyf9{color:#fff;margin:0px;margin-bottom:5px}.trailer-content.svelte-1pmmyf9.svelte-1pmmyf9{display:flex;flex-direction:column;justify-content:center;align-items:center}.trailer-content.svelte-1pmmyf9 h4.svelte-1pmmyf9{color:white;position:absolute}.video-trailer.svelte-1pmmyf9.svelte-1pmmyf9{width:100%}.hero-text-container.svelte-1pmmyf9.svelte-1pmmyf9{position:absolute;left:15%;display:flex;flex-direction:column;justify-content:left;align-items:left;text-align:left;color:#fff}.hero-text-container.svelte-1pmmyf9 h1.svelte-1pmmyf9{color:#fff;max-width:400px;margin:0px;text-align:left}.hero-text-container.svelte-1pmmyf9 p.svelte-1pmmyf9{color:#fff;max-width:400px;margin:0px;text-align:left}.getupdates-inline.svelte-1pmmyf9.svelte-1pmmyf9{color:white;margin-top:20px;text-decoration:none}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_dca6450b.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

	<section id="${"hero"}" class="${"svelte-1pmmyf9"}"><video class="${"video-background svelte-1pmmyf9"}" autoplay muted loop playsinline><source src="${"https://assets.codepen.io/4625073/background.mp4"}" type="${"video/mp4"}">
  Your browser does not support the video tag.
</video>

<div class="${"video-overlay svelte-1pmmyf9"}"></div>

<div class="${"hero-text-container svelte-1pmmyf9"}"><h1 class="${"svelte-1pmmyf9"}">PLAY TO EARN MMORPG GAME</h1>
  <p class="${"svelte-1pmmyf9"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.

</p>
<a class="${"getupdates-inline svelte-1pmmyf9"}" href="${"/"}">Get updates</a></div>

<div class="${"trailer svelte-1pmmyf9"}"><h4 class="${"svelte-1pmmyf9"}">Trailer</h4>
	<div class="${"trailer-content svelte-1pmmyf9"}"><h4 class="${"svelte-1pmmyf9"}">Coming soon</h4>
	
<video class="${"video-trailer svelte-1pmmyf9"}" autoplay muted loop><source src="${"https://assets.codepen.io/4625073/Untitled.mp4"}" type="${"video/mp4"}">
  Your browser does not support the video tag.
</video></div></div>

</section>`;
});
module.exports = __toCommonJS(stdin_exports);
