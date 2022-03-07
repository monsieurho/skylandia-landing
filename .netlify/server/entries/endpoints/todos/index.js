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
  del: () => del,
  get: () => get,
  patch: () => patch,
  post: () => post
});
const base = "https://api.svelte.dev";
function api(method, resource, data) {
  return fetch(`${base}/${resource}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
}
const get = async ({ locals }) => {
  const response = await api("get", `todos/${locals.userid}`);
  if (response.status === 404) {
    return {
      body: {
        todos: []
      }
    };
  }
  if (response.status === 200) {
    return {
      body: {
        todos: await response.json()
      }
    };
  }
  return {
    status: response.status
  };
};
const post = async ({ request, locals }) => {
  const form = await request.formData();
  await api("post", `todos/${locals.userid}`, {
    text: form.get("text")
  });
  return {};
};
const redirect = {
  status: 303,
  headers: {
    location: "/todos"
  }
};
const patch = async ({ request, locals }) => {
  const form = await request.formData();
  await api("patch", `todos/${locals.userid}/${form.get("uid")}`, {
    text: form.has("text") ? form.get("text") : void 0,
    done: form.has("done") ? !!form.get("done") : void 0
  });
  return redirect;
};
const del = async ({ request, locals }) => {
  const form = await request.formData();
  await api("delete", `todos/${locals.userid}/${form.get("uid")}`);
  return redirect;
};
module.exports = __toCommonJS(stdin_exports);
