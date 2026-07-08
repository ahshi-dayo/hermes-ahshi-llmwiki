// 自家ホスト化コピー（deploy-safetyタスクC、2026-07-08）
// 取得日: 2026-07-08
// 取得元URL: https://hacknock.github.io/lobster-wiki/lobster-wiki.js
// upstream: github.com/hacknock/lobster-wiki
//
// MIT License
// Copyright (c) 2026 Hacknock
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// 備考: このファイルはデフォルトで lobsterUrl 未指定時に
// https://hacknock.github.io/lobsterjs/lobster.js を動的import()する仕組みを持つ
// （transitive依存）。本リポジトリでは wiki.config.json の "lobsterUrl" を
// "./lobster.js" に上書きしている。動的import()の相対パスは import元モジュール
// （＝このファイルの場所 /lobster-wiki/）基準で解決されるため、この値で
// 同ディレクトリの自家ホストコピー lobster.js が読み込まれる（下記コード自体は無改変）。

//#region src/lobster-wiki.ts
var e = "https://hacknock.github.io/lobsterjs/lobster.js", t = "./content/", n = "intro", r = null;
async function i(e) {
	if (r) return { loadMarkdown: r };
	let t = await import(
		/* @vite-ignore */
		e
);
	return r = t.loadMarkdown, { loadMarkdown: t.loadMarkdown };
}
function a(e) {
	return e.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/^-+|-+$/g, "");
}
function o(e) {
	document.body.innerHTML = "";
	let t = document.createElement("header");
	t.className = "lbw-header", t.appendChild(document.createElement("div")), t.firstElementChild.className = "lbw-header-inner";
	let n = document.createElement("div");
	n.className = "lbw-body";
	let r = document.createElement("nav");
	r.className = "lbw-sidebar";
	let i = document.createElement("main");
	i.className = "lbw-main";
	let a = document.createElement("nav");
	a.className = "lbw-toc", n.appendChild(r), n.appendChild(i), e.tableOfContents && n.appendChild(a);
	let o = document.createElement("footer");
	return o.className = "lbw-footer", document.body.appendChild(t), document.body.appendChild(n), document.body.appendChild(o), {
		header: t,
		sidebar: r,
		main: i,
		toc: a,
		footer: o
	};
}
function s(e) {
	return e.routing ?? "query";
}
function c(e) {
	let t = s(e), r = e.defaultPage ?? n;
	if (t === "hash") {
		let e = location.hash.slice(1);
		return new URLSearchParams(e).get("page") ?? r;
	}
	return new URLSearchParams(location.search).get("page") ?? r;
}
function l(e, t) {
	let r = s(e), i = r === "hash" ? "a[href*=\"#page=\"]" : "a[href*=\"?page=\"]";
	document.addEventListener("click", (e) => {
		let n = e.target.closest?.(i);
		if (!n) return;
		e.preventDefault();
		let a;
		if (r === "hash") {
			let e = new URL(n.href, location.href).hash.slice(1);
			a = new URLSearchParams(e).get("page");
		} else a = new URL(n.href, location.href).searchParams.get("page");
		a && (r === "hash" ? location.hash = `page=${a}` : history.pushState({ page: a }, "", `?page=${a}`), t(a));
	}), r === "hash" ? window.addEventListener("hashchange", () => {
		t(c(e));
	}) : window.addEventListener("popstate", (r) => {
		t(r.state?.page ?? e.defaultPage ?? n);
	});
}
function u(e, t, n) {
	let r = s(n);
	e.querySelectorAll("a").forEach((e) => {
		let n;
		if (r === "hash") {
			let t = new URL(e.href, location.href).hash.slice(1);
			n = new URLSearchParams(t).get("page");
		} else n = new URL(e.href, location.href).searchParams.get("page");
		e.classList.toggle("lbw-active", n === t);
	});
}
function d(e, t, n) {
	let r = t.split(",")[0], i = e.querySelector(`a[href*="page=${r}"]`)?.textContent?.trim();
	document.title = i && n ? `${i} - ${n}` : i ?? n ?? "";
}
function f(e, t) {
	let n = typeof t.tableOfContents == "object" ? t.tableOfContents : {}, r = n.minLevel ?? 2, i = n.maxLevel ?? 4, o = [];
	return e.querySelectorAll([
		2,
		3,
		4,
		5,
		6
	].filter((e) => e >= r && e <= i).map((e) => `.lbs-heading-${e}`).join(",")).forEach((e) => {
		let t = parseInt(Array.from(e.classList).find((e) => e.startsWith("lbs-heading-"))?.replace("lbs-heading-", "") ?? "2", 10), n = e.textContent?.trim() ?? "";
		e.id ||= a(n), o.push({
			level: t,
			text: n,
			id: e.id
		});
	}), o;
}
function p(e, t) {
	if (t.length === 0) {
		e.innerHTML = "";
		return;
	}
	let n = document.createElement("div");
	n.className = "lbw-toc-title", n.textContent = "On this page";
	let r = document.createElement("ul");
	r.className = "lbw-toc-list";
	for (let e of t) {
		let t = document.createElement("li");
		t.className = `lbw-toc-item lbw-toc-level-${e.level}`;
		let n = document.createElement("a");
		n.href = `#${e.id}`, n.textContent = e.text, n.addEventListener("click", (t) => {
			t.preventDefault();
			let n = document.getElementById(e.id);
			n && (n.scrollIntoView({ behavior: "smooth" }), history.replaceState(null, "", `#${e.id}`));
		}), t.appendChild(n), r.appendChild(t);
	}
	e.innerHTML = "", e.appendChild(n), e.appendChild(r);
}
async function m(n) {
	let r;
	if (typeof n == "string") {
		let e = await fetch(new URL(n, location.href).href);
		if (!e.ok) throw Error(`Failed to load wiki config from ${n}: ${e.status} ${e.statusText}`);
		r = await e.json();
	} else r = n;
	let a = r.lobsterUrl ?? e, s = r.contentDir ?? t, { loadMarkdown: m } = await i(a), h = o(r);
	r.header && await m(r.header, h.header.querySelector(".lbw-header-inner")), r.footer && await m(r.footer, h.footer), await m(r.navigation, h.sidebar);
	async function g(e) {
		let t = e.split(",").map((e) => `${s}${e.trim()}.md`);
		if (await m(t.length === 1 ? t[0] : t, h.main), u(h.sidebar, e, r), d(h.sidebar, e, r.title), window.scrollTo(0, 0), r.tableOfContents) {
			let e = f(h.main, r);
			p(h.toc, e);
		}
	}
	l(r, g), await g(c(r));
}
//#endregion
export { m as initWiki };
