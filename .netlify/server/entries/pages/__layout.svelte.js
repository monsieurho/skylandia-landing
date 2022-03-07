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
  default: () => _layout,
  load: () => load
});
var import_index_dca6450b = require("../../chunks/index-dca6450b.js");
const getStores = () => {
  const stores = (0, import_index_dca6450b.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "data:image/png;base64,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";
var Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: `header.svelte-1bgc56l.svelte-1bgc56l{display:flex;justify-content:flex-start;position:fixed;top:20px;padding-left:30px;padding-right:30px;z-index:99;width:100%}.logo.svelte-1bgc56l.svelte-1bgc56l{width:180px;margin-right:50px}.logo.svelte-1bgc56l a.svelte-1bgc56l{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.logo.svelte-1bgc56l img.svelte-1bgc56l{width:100%;object-fit:contain}nav.svelte-1bgc56l.svelte-1bgc56l{display:flex;width:100%}ul.svelte-1bgc56l.svelte-1bgc56l{position:relative;padding:0;margin:0;display:flex;list-style:none;width:100%}li.svelte-1bgc56l.svelte-1bgc56l{position:relative;height:100%;margin-left:50px;display:flex;justify-content:center;align-items:center}li.active.svelte-1bgc56l.svelte-1bgc56l::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}li.svelte-1bgc56l.svelte-1bgc56l:hover::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1bgc56l a.svelte-1bgc56l{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:normal;font-size:0.8rem;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1bgc56l.svelte-1bgc56l:hover{color:var(--pure-white)}.getupdates.svelte-1bgc56l.svelte-1bgc56l{display:inline-block;margin-left:auto;align-self:flex-end}.getupdates.svelte-1bgc56l a.svelte-1bgc56l{background:rgba(255, 255, 255, 0.4);backdrop-filter:blur(19px);border-radius:48px;padding:22px 38px}.progress.svelte-1bgc56l.svelte-1bgc56l{width:1px;height:3px;background:#fff;transition:width 0.1s linear;position:fixed;bottom:0px;left:0px}.togglePlay.svelte-1bgc56l.svelte-1bgc56l{display:flex;justify-content:center;align-items:center;border:none;cursor:pointer;transition:transform 150ms ease-out}.togglePlay.svelte-1bgc56l.svelte-1bgc56l{background:transparent;background-image:url( "../../assets/mutesound.png" );background-size:contain;width:30px;height:30px
}.togglePlay.active{background-image:url( "../../assets/playsound.png" ) !important;background-size:contain}.trailer-container.svelte-1bgc56l.svelte-1bgc56l{display:flex;justify-content:center;align-items:center;position:fixed;bottom:40px;right:60px}.trailer-container.svelte-1bgc56l .text-ama.svelte-1bgc56l{color:#fff;font-size:12px;position:relative;top:2px}.audio-container.svelte-1bgc56l.svelte-1bgc56l{width:46px;height:40px;overflow:hidden;position:relative;margin-left:20px;transform:scale(0.5)
}.bar.svelte-1bgc56l.svelte-1bgc56l{width:8px;height:40px;background:rgb(255, 255, 255);position:absolute;left:0;transition:all .3s ease}.audio-container.play.svelte-1bgc56l .bar.svelte-1bgc56l{animation:svelte-1bgc56l-upDown 2.5s linear infinite}@keyframes svelte-1bgc56l-upDown{0%{transform:translateY(0px)}10%{transform:translateY(15px)}20%{transform:translateY(0px)}30%{transform:translateY(10px)}40%{transform:translateY(20px)}50%{transform:translateY(15px)}60%{transform:translateY(30px)}70%{transform:translateY(20px)}80%{transform:translateY(15px)}90%{transform:translateY(20px)}100%{transform:translateY(0px)}}.bar_two.svelte-1bgc56l.svelte-1bgc56l{left:12px}.audio-container.play.svelte-1bgc56l .bar_two.svelte-1bgc56l{animation-delay:.6s}.bar_three.svelte-1bgc56l.svelte-1bgc56l{left:24px}.audio-container.play.svelte-1bgc56l .bar_three.svelte-1bgc56l{animation-delay:.3s}.bar_four.svelte-1bgc56l.svelte-1bgc56l{left:36px}.audio-container.play.svelte-1bgc56l .bar_four.svelte-1bgc56l{animation-delay:.9s}`,
  map: null
};
const Header = (0, import_index_dca6450b.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_dca6450b.a)(page, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<header class="${"svelte-1bgc56l"}"><div class="${"logo svelte-1bgc56l"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1bgc56l"}"><img${(0, import_index_dca6450b.b)("src", logo, 0)} alt="${"Skylandia"}" class="${"svelte-1bgc56l"}"></a></div>

	<nav class="${"svelte-1bgc56l"}"><ul class="${"svelte-1bgc56l"}"><li class="${["svelte-1bgc56l", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"svelte-1bgc56l"}">About</a></li>
			<li class="${["svelte-1bgc56l", $page.url.pathname === "/NFTs" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/NFTs"}" class="${"svelte-1bgc56l"}">NFTs</a></li>
						<li class="${["svelte-1bgc56l", $page.url.pathname === "/todos" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/todos"}" class="${"svelte-1bgc56l"}">White Paper</a></li>
									<li class="${["svelte-1bgc56l", $page.url.pathname === "/todos" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/todos"}" class="${"svelte-1bgc56l"}">Gameplay Paper</a></li>

<li class="${"svelte-1bgc56l"}"><div class="${"progress svelte-1bgc56l"}" id="${"progress"}"></div>
  <audio id="${"audio"}" src="${"https://www.freesound.org/data/previews/338/338825_1648170-lq.mp3"}" loop></audio>
  <button class="${"togglePlay svelte-1bgc56l"}"></button></li>

									<li class="${["getupdates svelte-1bgc56l", $page.url.pathname === "/todos" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/todos"}" class="${"svelte-1bgc56l"}">Get updates</a></li></ul></nav>
		<div class="${"trailer-container svelte-1bgc56l"}"><div class="${"audio-container play svelte-1bgc56l"}"><span class="${"bar bar_one svelte-1bgc56l"}"></span>
  <span class="${"bar bar_two svelte-1bgc56l"}"></span>
  <span class="${"bar bar_three svelte-1bgc56l"}"></span>
  <span class="${"bar bar_four svelte-1bgc56l"}"></span>
  </div><span class="${"text-ama svelte-1bgc56l"}">AMA coming soon</span></div>
</header>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.bcn_social-bottom-container.svelte-r5two8.svelte-r5two8{width:40px;position:fixed;bottom:0px;left:40px;z-index:10;color:#fff}.bcn_social-list.svelte-r5two8.svelte-r5two8{display:flex;flex-direction:column;-webkit-box-align:center;align-items:center;margin:0px;padding:0px;list-style:none}.bcn_social-list.svelte-r5two8 li.svelte-r5two8{margin-top:10px;transition:ease-out all 1s}.bcn_social-list.svelte-r5two8.svelte-r5two8::after{content:"";display:block;width:1px;height:90px;margin:0px auto;background-color:#fff}.bcn_social-list.svelte-r5two8 li.svelte-r5two8:hover{position:relative;top:-5px;transition:ease-out all 1s}li.svelte-r5two8 svg.svelte-r5two8{width:30px}',
  map: null
};
const Footer = (0, import_index_dca6450b.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div orientation="${"left"}" class="${"bcn_social-bottom-container svelte-r5two8"}"><ul class="${"bcn_social-list svelte-r5two8"}"><li class="${"svelte-r5two8"}"><a href="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" version="${"1.1"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" xmlns:svgjs="${"http://svgjs.com/svgjs"}" x="${"0"}" y="${"0"}" viewBox="${"0 0 176 176"}" style="${"enable-background:new 0 0 512 512"}" xml:space="${"preserve"}" class="${" svelte-r5two8"}"><g><g xmlns="${"http://www.w3.org/2000/svg"}" id="${"Layer_2"}" data-name="${"Layer 2"}"><g id="${"_16.telegram"}" data-name="${"16.telegram"}"><g id="${"icon"}"><path d="${"m123.33 62.35-44.63 36.48-2.1 1.72a2.27 2.27 0 0 0 -.84 1.48l-.47 3.88-1.29 10.9a.5.5 0 0 1 -1 .09l-3.63-10.9-3.75-11.15a2.24 2.24 0 0 1 1.08-2.66l46.44-26.62 8.74-5c1.27-.74 2.57.86 1.45 1.78z"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path><path d="${"m88 0a88 88 0 1 0 88 88 88 88 0 0 0 -88-88zm54.89 50.94-17.18 75.91c-.81 3.56-5.33 5.17-8.5 3l-25.94-17.6-13.21 12.49a4.54 4.54 0 0 1 -7.32-1.62l-4.77-14-4.77-14-25.57-7a3.32 3.32 0 0 1 -.29-6.41l98.78-35.59 1.82-.65c3.83-1.34 7.79 1.76 6.95 5.47z"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path></g></g></g></g></svg></a></li>
    
    <li class="${"svelte-r5two8"}"><a href="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" version="${"1.1"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" xmlns:svgjs="${"http://svgjs.com/svgjs"}" x="${"0"}" y="${"0"}" viewBox="${"0 0 512 512"}" style="${"enable-background:new 0 0 512 512"}" xml:space="${"preserve"}" class="${" svelte-r5two8"}"><g><path xmlns="${"http://www.w3.org/2000/svg"}" d="${"m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path><path xmlns="${"http://www.w3.org/2000/svg"}" d="${"m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path><path xmlns="${"http://www.w3.org/2000/svg"}" d="${"m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path></g></svg></a></li>
    
    <li class="${"svelte-r5two8"}"><a href="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" version="${"1.1"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" xmlns:svgjs="${"http://svgjs.com/svgjs"}" x="${"0"}" y="${"0"}" viewBox="${"0 0 512 512"}" style="${"enable-background:new 0 0 512 512"}" xml:space="${"preserve"}" class="${" svelte-r5two8"}"><g><path xmlns="${"http://www.w3.org/2000/svg"}" d="${"m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path></g></svg></a></li>
    <li class="${"svelte-r5two8"}"><a href="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" version="${"1.1"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" xmlns:svgjs="${"http://svgjs.com/svgjs"}" x="${"0"}" y="${"0"}" viewBox="${"0 0 512 512"}" style="${"enable-background:new 0 0 512 512"}" xml:space="${"preserve"}" class="${" svelte-r5two8"}"><g><path xmlns="${"http://www.w3.org/2000/svg"}" d="${"m195.065 240.1v-.165c-19.137 0-34.58 15.82-34.58 35.264s15.443 35.265 34.58 35.265 34.581-15.82 34.581-35.1c0-19.446-15.612-35.264-34.581-35.264z"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path><path xmlns="${"http://www.w3.org/2000/svg"}" d="${"m256 6c-138.071 0-250 111.929-250 250s111.929 250 250 250 250-111.929 250-250-111.929-250-250-250zm92.494 381.911s-12.594-14.011-21.655-26.366c43.645-12.359 60.1-37.076 60.1-37.076-45.379 28.057-87.76 38.852-130.939 37.449-43.179 1.4-85.56-9.392-130.934-37.449 0 0 16.45 24.717 60.1 37.076-9.064 12.359-21.654 26.366-21.654 26.366-74.873-1.648-103.912-47.458-105.592-45.481 0-102 49.52-185.054 49.52-185.054 44.316-31.8 85.611-33.122 93.5-33.287l5.037 4.779c-56.571 15.819-83.933 40.537-83.933 40.537 48.553-23.451 94.315-31.7 133.956-32.194 39.642.5 85.4 8.743 133.956 32.194 0 0-27.362-24.718-83.932-40.537l5.036-4.779c7.89.165 49.184 1.483 93.5 33.287 0 0 49.519 83.052 49.519 185.054-1.679-1.977-30.718 43.833-105.585 45.481z"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path><path xmlns="${"http://www.w3.org/2000/svg"}" d="${"m316.935 239.933v.165c-18.969 0-34.581 15.82-34.581 35.264 0 19.28 15.445 35.1 34.581 35.1s34.58-15.82 34.58-35.265-15.443-35.264-34.58-35.264z"}" fill="${"#ffffff"}" data-original="${"#000000"}" class="${""}"></path></g></svg></a></li></ul>
</div>`;
});
var app = "";
const PageTransition = (0, import_index_dca6450b.c)(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `


<div>${slots.default ? slots.default({}) : ``}</div>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-hzf60u{flex:1;display:flex;flex-direction:column;padding:0px;width:100%;max-width:100vw;margin:0 auto;box-sizing:border-box}footer.svelte-hzf60u{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px;background-color:#111;color:#fff}@media(min-width: 480px){footer.svelte-hzf60u{padding:40px 0}}",
  map: null
};
const load = async ({ url }) => ({ props: { url } });
const _layout = (0, import_index_dca6450b.c)(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `${(0, import_index_dca6450b.v)(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"svelte-hzf60u"}">${(0, import_index_dca6450b.v)(PageTransition, "PageTransition").$$render($$result, { url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main>

<footer class="${"svelte-hzf60u"}">${(0, import_index_dca6450b.v)(Footer, "Footer").$$render($$result, {}, {}, {})}
	Copyright \xA9 2022
</footer>`;
});
module.exports = __toCommonJS(stdin_exports);
