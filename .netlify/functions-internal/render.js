const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-5d468cc7.js","js":["start-5d468cc7.js","chunks/vendor-9666334e.js","chunks/singletons-a6a7384f.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/todos\/?$/,
				params: null,
				path: "/todos",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/index.js')),
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/NFTs\/?$/,
				params: null,
				path: "/NFTs",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		]
	}
});
