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
  default: () => NFTs
});
var import_index_dca6450b = require("../../chunks/index-dca6450b.js");
var potion = "/_app/assets/potion-28153db5.png";
var backpack = "/_app/assets/backpack-78bb6ad8.png";
var NFTSHero_svelte_svelte_type_style_lang = "";
const css = {
  code: `#NFTHero.svelte-u696zs.svelte-u696zs{height:100vh;overflow:hidden;background-image:url('../assets/NFThero.jpg')
}main.svelte-u696zs.svelte-u696zs{position:relative;width:100%;height:100vh}#slider.svelte-u696zs.svelte-u696zs{width:100%;max-width:1200px;height:100%;margin:0 auto;position:relative}#slider.svelte-u696zs img.svelte-u696zs{width:100%;max-width:100%;position:relative;z-index:0}.slider-inner.svelte-u696zs.svelte-u696zs{position:relative;display:flex;align-items:center;width:100%;max-width:1060px;height:100%;margin:0 auto;z-index:5}#slider-content.svelte-u696zs.svelte-u696zs{padding:0 10px}#slider-content.svelte-u696zs h2.svelte-u696zs{font-weight:bold;font-size:20px;letter-spacing:-1px;color:white;line-height:30px;margin:0px;text-transform:uppercase}@media screen and (min-width: 800px){#slider-content.svelte-u696zs h2.svelte-u696zs{font-size:45px;line-height:1.5}}#slider-content.svelte-u696zs span.svelte-u696zs{display:none}#slider-content.svelte-u696zs .meta.svelte-u696zs{display:inline-block;font-size:11px;letter-spacing:5px;color:#fff;text-transform:uppercase;position:relative}@media screen and (min-width: 800px){#slider-content.svelte-u696zs .meta.svelte-u696zs{font-size:13px}}#slider-content.svelte-u696zs .meta.svelte-u696zs:after{content:"";display:block;position:absolute;top:5px;right:-55px;width:45px;height:2px;background-color:#fff}#slider-content.svelte-u696zs #slide-status.svelte-u696zs{margin-top:10px;font-weight:400;font-size:13px;color:white;max-width:400px}@media screen and (min-width: 800px){#slider-content.svelte-u696zs #slide-status.svelte-u696zs{font-size:16px}}@keyframes svelte-u696zs-loaderAnim{to{opacity:1;transform:scale3d(0.5, 0.5, 1)}}`,
  map: null
};
const NFTSHero = (0, import_index_dca6450b.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"NFTHero"}" class="${"svelte-u696zs"}"><main class="${"svelte-u696zs"}"><div id="${"slider"}" class="${"svelte-u696zs"}"><div class="${"slider-inner svelte-u696zs"}"><div id="${"slider-content"}" class="${"svelte-u696zs"}"><div class="${"meta svelte-u696zs"}">NFTS</div>
					<h2 id="${"slide-title"}" class="${"svelte-u696zs"}">Synergies</h2>
					<span data-slide-title="${"0"}" class="${"svelte-u696zs"}">Synergies</span>
					<span data-slide-title="${"1"}" class="${"svelte-u696zs"}">Skins</span>
					<span data-slide-title="${"2"}" class="${"svelte-u696zs"}">Equipment</span>
					<span data-slide-title="${"3"}" class="${"svelte-u696zs"}">Lands</span>
					<div style="${"display:none;"}" class="${"meta svelte-u696zs"}">Status</div>
					<div id="${"slide-status"}" class="${"svelte-u696zs"}">All items in Skylandia, from resources and consumables to castles, lands, sieges weapons, and mythical creatures, are tradable NFTs. Being a competitive game powerful equipment and other types of items are a must if players want to reach the top and stay there. </div>
					<span data-slide-status="${"0"}" class="${"svelte-u696zs"}">All items in Skylandia, from resources and consumables to castles, lands, sieges weapons, and mythical creatures, are tradable NFTs. Being a competitive game powerful equipment and other types of items are a must if players want to reach the top and stay there. </span>
					<span data-slide-status="${"1"}" class="${"svelte-u696zs"}">Endangered</span>
					<span data-slide-status="${"2"}" class="${"svelte-u696zs"}">All items in Skylandia, from resources and consumables to castles, lands, sieges weapons, and mythical creatures, are tradable NFTs. Being a competitive game powerful equipment and other types of items are a must if players want to reach the top and stay there. </span>
					<span data-slide-status="${"3"}" class="${"svelte-u696zs"}">Least Concern</span></div></div>

			<img${(0, import_index_dca6450b.b)("src", potion, 0)} alt="${""}" class="${"svelte-u696zs"}">
			<img${(0, import_index_dca6450b.b)("src", potion, 0)} alt="${""}" class="${"svelte-u696zs"}">
			<img${(0, import_index_dca6450b.b)("src", backpack, 0)} alt="${""}" class="${"svelte-u696zs"}">
			<img${(0, import_index_dca6450b.b)("src", backpack, 0)} alt="${""}" class="${"svelte-u696zs"}">

			<div id="${"pagination"}"><button class="${"active"}" data-slide="${"0"}"></button>
				<button data-slide="${"1"}"></button>
				<button data-slide="${"2"}"></button>
				<button data-slide="${"3"}"></button></div></div></main>

</section>`;
});
const NFTs = (0, import_index_dca6450b.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_dca6450b.v)(NFTSHero, "NFTSHero").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
