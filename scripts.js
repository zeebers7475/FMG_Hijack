if (! function (t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (_, t) {
        "use strict";

        function m(t) {
            return null != t && t === t.window
        }
        var e = [],
            i = Object.getPrototypeOf,
            a = e.slice,
            g = e.flat ? function (t) {
                return e.flat.call(t)
            } : function (t) {
                return e.concat.apply([], t)
            },
            l = e.push,
            o = e.indexOf,
            n = {},
            r = n.toString,
            v = n.hasOwnProperty,
            s = v.toString,
            c = s.call(Object),
            y = {},
            b = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            S = _.document,
            u = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function x(t, e, n) {
            var i, o, r = (n = n || S).createElement("script");
            if (r.text = t, e)
                for (i in u)(o = e[i] || e.getAttribute && e.getAttribute(i)) && r.setAttribute(i, o);
            n.head.appendChild(r).parentNode.removeChild(r)
        }

        function w(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[r.call(t)] || "object" : typeof t
        }
        var d = "3.5.1",
            $ = function (t, e) {
                return new $.fn.init(t, e)
            };

        function h(t) {
            var e = !!t && "length" in t && t.length,
                n = w(t);
            return !b(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }
        $.fn = $.prototype = {
            jquery: d,
            constructor: $,
            length: 0,
            toArray: function () {
                return a.call(this)
            },
            get: function (t) {
                return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function (t) {
                var e = $.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function (t) {
                return $.each(this, t)
            },
            map: function (n) {
                return this.pushStack($.map(this, function (t, e) {
                    return n.call(t, e, t)
                }))
            },
            slice: function () {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            even: function () {
                return this.pushStack($.grep(this, function (t, e) {
                    return (e + 1) % 2
                }))
            },
            odd: function () {
                return this.pushStack($.grep(this, function (t, e) {
                    return e % 2
                }))
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= n && n < e ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: e.sort,
            splice: e.splice
        }, $.extend = $.fn.extend = function () {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || b(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = t[e], "__proto__" !== e && s !== i && (c && i && ($.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[e], r = o && !Array.isArray(n) ? [] : o || $.isPlainObject(n) ? n : {}, o = !1, s[e] = $.extend(c, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }, $.extend({
            expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== r.call(t) || (e = i(t)) && ("function" != typeof (n = v.call(e, "constructor") && e.constructor) || s.call(n) !== c))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function (t, e, n) {
                x(t, {
                    nonce: e && e.nonce
                }, n)
            },
            each: function (t, e) {
                var n, i = 0;
                if (h(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (h(Object(t)) ? $.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : o.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function (t, e, n) {
                for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) != s && i.push(t[o]);
                return i
            },
            map: function (t, e, n) {
                var i, o, r = 0,
                    s = [];
                if (h(t))
                    for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && s.push(o);
                else
                    for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
                return g(s)
            },
            guid: 1,
            support: y
        }), "function" == typeof Symbol && ($.fn[Symbol.iterator] = e[Symbol.iterator]), $.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            n["[object " + e + "]"] = e.toLowerCase()
        });
        var f = function (n) {
            function d(t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return e || (n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }

            function o() {
                C()
            }
            var t, f, x, r, s, p, h, m, w, l, c, C, _, a, S, g, u, v, y, $ = "sizzle" + +new Date,
                b = n.document,
                T = 0,
                i = 0,
                E = lt(),
                F = lt(),
                k = lt(),
                P = lt(),
                A = function (t, e) {
                    return t === e && (c = !0), 0
                },
                L = {}.hasOwnProperty,
                e = [],
                j = e.pop,
                D = e.push,
                M = e.push,
                z = e.slice,
                O = function (t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                q = "[\\x20\\t\\r\\n\\f]",
                I = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                R = "\\[" + q + "*(" + I + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + q + "*\\]",
                H = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                B = new RegExp(q + "+", "g"),
                W = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                Q = new RegExp("^" + q + "*," + q + "*"),
                G = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
                X = new RegExp(q + "|>"),
                V = new RegExp(H),
                U = new RegExp("^" + I + "$"),
                Y = {
                    ID: new RegExp("^#(" + I + ")"),
                    CLASS: new RegExp("^\\.(" + I + ")"),
                    TAG: new RegExp("^(" + I + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + H),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + N + ")$", "i"),
                    needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
                },
                Z = /HTML$/i,
                J = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                tt = /^[^{]+\{\s*\[native \w/,
                et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                nt = /[+~]/,
                it = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
                ot = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                rt = function (t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                st = yt(function (t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                M.apply(e = z.call(b.childNodes), b.childNodes), e[b.childNodes.length].nodeType
            } catch (t) {
                M = {
                    apply: e.length ? function (t, e) {
                        D.apply(t, z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }

            function at(t, e, n, i) {
                var o, r, s, a, l, c, u, d = e && e.ownerDocument,
                    h = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!i && (C(e), e = e || _, S)) {
                    if (11 !== h && (l = et.exec(t)))
                        if (o = l[1]) {
                            if (9 === h) {
                                if (!(s = e.getElementById(o))) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (d && (s = d.getElementById(o)) && y(e, s) && s.id === o) return n.push(s), n
                        } else {
                            if (l[2]) return M.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = l[3]) && f.getElementsByClassName && e.getElementsByClassName) return M.apply(n, e.getElementsByClassName(o)), n
                        } if (f.qsa && !P[t + " "] && (!g || !g.test(t)) && (1 !== h || "object" !== e.nodeName.toLowerCase())) {
                        if (u = t, d = e, 1 === h && (X.test(t) || G.test(t))) {
                            for ((d = nt.test(t) && mt(e.parentNode) || e) === e && f.scope || ((a = e.getAttribute("id")) ? a = a.replace(ot, rt) : e.setAttribute("id", a = $)), r = (c = p(t)).length; r--;) c[r] = (a ? "#" + a : ":scope") + " " + vt(c[r]);
                            u = c.join(",")
                        }
                        try {
                            return M.apply(n, d.querySelectorAll(u)), n
                        } catch (e) {
                            P(t, !0)
                        } finally {
                            a === $ && e.removeAttribute("id")
                        }
                    }
                }
                return m(t.replace(W, "$1"), e, n, i)
            }

            function lt() {
                var i = [];
                return function t(e, n) {
                    return i.push(e + " ") > x.cacheLength && delete t[i.shift()], t[e + " "] = n
                }
            }

            function ct(t) {
                return t[$] = !0, t
            }

            function ut(t) {
                var e = _.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function dt(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
            }

            function ht(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function ft(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function pt(s) {
                return ct(function (r) {
                    return r = +r, ct(function (t, e) {
                        for (var n, i = s([], t.length, r), o = i.length; o--;) t[n = i[o]] && (t[n] = !(e[n] = t[n]))
                    })
                })
            }

            function mt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (t in f = at.support = {}, s = at.isXML = function (t) {
                    var e = t.namespaceURI,
                        n = (t.ownerDocument || t).documentElement;
                    return !Z.test(e || n && n.nodeName || "HTML")
                }, C = at.setDocument = function (t) {
                    var e, n, i = t ? t.ownerDocument || t : b;
                    return i != _ && 9 === i.nodeType && i.documentElement && (a = (_ = i).documentElement, S = !s(_), b != _ && (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), f.scope = ut(function (t) {
                        return a.appendChild(t).appendChild(_.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                    }), f.attributes = ut(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), f.getElementsByTagName = ut(function (t) {
                        return t.appendChild(_.createComment("")), !t.getElementsByTagName("*").length
                    }), f.getElementsByClassName = tt.test(_.getElementsByClassName), f.getById = ut(function (t) {
                        return a.appendChild(t).id = $, !_.getElementsByName || !_.getElementsByName($).length
                    }), f.getById ? (x.filter.ID = function (t) {
                        var e = t.replace(it, d);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, x.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && S) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (x.filter.ID = function (t) {
                        var n = t.replace(it, d);
                        return function (t) {
                            var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return e && e.value === n
                        }
                    }, x.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && S) {
                            var n, i, o, r = e.getElementById(t);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                                for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                    if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                            }
                            return []
                        }
                    }), x.find.TAG = f.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" !== t) return r;
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }, x.find.CLASS = f.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && S) return e.getElementsByClassName(t)
                    }, u = [], g = [], (f.qsa = tt.test(_.querySelectorAll)) && (ut(function (t) {
                        var e;
                        a.appendChild(t).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + q + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + q + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + $ + "-]").length || g.push("~="), (e = _.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || g.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + $ + "+*").length || g.push(".#.+[+~]"), t.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                    }), ut(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = _.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + q + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (f.matchesSelector = tt.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ut(function (t) {
                        f.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), u.push("!=", H)
                    }), g = g.length && new RegExp(g.join("|")), u = u.length && new RegExp(u.join("|")), e = tt.test(a.compareDocumentPosition), y = e || tt.test(a.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, A = e ? function (t, e) {
                        if (t === e) return c = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === n ? t == _ || t.ownerDocument == b && y(b, t) ? -1 : e == _ || e.ownerDocument == b && y(b, e) ? 1 : l ? O(l, t) - O(l, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return c = !0, 0;
                        var n, i = 0,
                            o = t.parentNode,
                            r = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!o || !r) return t == _ ? -1 : e == _ ? 1 : o ? -1 : r ? 1 : l ? O(l, t) - O(l, e) : 0;
                        if (o === r) return ht(t, e);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (; s[i] === a[i];) i++;
                        return i ? ht(s[i], a[i]) : s[i] == b ? -1 : a[i] == b ? 1 : 0
                    }), _
                }, at.matches = function (t, e) {
                    return at(t, null, null, e)
                }, at.matchesSelector = function (t, e) {
                    if (C(t), f.matchesSelector && S && !P[e + " "] && (!u || !u.test(e)) && (!g || !g.test(e))) try {
                        var n = v.call(t, e);
                        if (n || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {
                        P(e, !0)
                    }
                    return 0 < at(e, _, null, [t]).length
                }, at.contains = function (t, e) {
                    return (t.ownerDocument || t) != _ && C(t), y(t, e)
                }, at.attr = function (t, e) {
                    (t.ownerDocument || t) != _ && C(t);
                    var n = x.attrHandle[e.toLowerCase()],
                        i = n && L.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !S) : void 0;
                    return void 0 !== i ? i : f.attributes || !S ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, at.escape = function (t) {
                    return (t + "").replace(ot, rt)
                }, at.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, at.uniqueSort = function (t) {
                    var e, n = [],
                        i = 0,
                        o = 0;
                    if (c = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort(A), c) {
                        for (; e = t[o++];) e === t[o] && (i = n.push(o));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return l = null, t
                }, r = at.getText = function (t) {
                    var e, n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += r(e);
                    return n
                }, (x = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: Y,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(it, d), t[3] = (t[3] || t[4] || t[5] || "").replace(it, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                        },
                        PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(it, d).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function (t) {
                            var e = E[t + " "];
                            return e || (e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) && E(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (n, i, o) {
                            return function (t) {
                                var e = at.attr(t, n);
                                return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === o : "!=" === i ? e !== o : "^=" === i ? o && 0 === e.indexOf(o) : "*=" === i ? o && -1 < e.indexOf(o) : "$=" === i ? o && e.slice(-o.length) === o : "~=" === i ? -1 < (" " + e.replace(B, " ") + " ").indexOf(o) : "|=" === i && (e === o || e.slice(0, o.length + 1) === o + "-"))
                            }
                        },
                        CHILD: function (p, t, e, m, g) {
                            var v = "nth" !== p.slice(0, 3),
                                y = "last" !== p.slice(-4),
                                b = "of-type" === t;
                            return 1 === m && 0 === g ? function (t) {
                                return !!t.parentNode
                            } : function (t, e, n) {
                                var i, o, r, s, a, l, c = v != y ? "nextSibling" : "previousSibling",
                                    u = t.parentNode,
                                    d = b && t.nodeName.toLowerCase(),
                                    h = !n && !b,
                                    f = !1;
                                if (u) {
                                    if (v) {
                                        for (; c;) {
                                            for (s = t; s = s[c];)
                                                if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                            l = c = "only" === p && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                        for (f = (a = (i = (o = (r = (s = u)[$] || (s[$] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === T && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                                            if (1 === s.nodeType && ++f && s === t) {
                                                o[p] = [T, a, f];
                                                break
                                            }
                                    } else if (h && (f = a = (i = (o = (r = (s = t)[$] || (s[$] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === T && i[1]), !1 === f)
                                        for (;
                                            (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (h && ((o = (r = s[$] || (s[$] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] = [T, f]), s !== t)););
                                    return (f -= g) === m || f % m == 0 && 0 <= f / m
                                }
                            }
                        },
                        PSEUDO: function (t, r) {
                            var e, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                            return s[$] ? s(r) : 1 < s.length ? (e = [t, t, "", r], x.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, e) {
                                for (var n, i = s(t, r), o = i.length; o--;) t[n = O(t, i[o])] = !(e[n] = i[o])
                            }) : function (t) {
                                return s(t, 0, e)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: ct(function (t) {
                            var i = [],
                                o = [],
                                a = h(t.replace(W, "$1"));
                            return a[$] ? ct(function (t, e, n, i) {
                                for (var o, r = a(t, null, i, []), s = t.length; s--;)(o = r[s]) && (t[s] = !(e[s] = o))
                            }) : function (t, e, n) {
                                return i[0] = t, a(i, null, n, o), i[0] = null, !o.pop()
                            }
                        }),
                        has: ct(function (e) {
                            return function (t) {
                                return 0 < at(e, t).length
                            }
                        }),
                        contains: ct(function (e) {
                            return e = e.replace(it, d),
                                function (t) {
                                    return -1 < (t.textContent || r(t)).indexOf(e)
                                }
                        }),
                        lang: ct(function (n) {
                            return U.test(n || "") || at.error("unsupported lang: " + n), n = n.replace(it, d).toLowerCase(),
                                function (t) {
                                    var e;
                                    do {
                                        if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var e = n.location && n.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function (t) {
                            return t === a
                        },
                        focus: function (t) {
                            return t === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: ft(!1),
                        disabled: ft(!0),
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (t) {
                            return !x.pseudos.empty(t)
                        },
                        header: function (t) {
                            return K.test(t.nodeName)
                        },
                        input: function (t) {
                            return J.test(t.nodeName)
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: pt(function () {
                            return [0]
                        }),
                        last: pt(function (t, e) {
                            return [e - 1]
                        }),
                        eq: pt(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: pt(function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }),
                        odd: pt(function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }),
                        lt: pt(function (t, e, n) {
                            for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                            return t
                        }),
                        gt: pt(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }).pseudos.nth = x.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[t] = function (e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[t] = function (n) {
                return function (t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === n
                }
            }(t);

            function gt() {}

            function vt(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function yt(a, t, e) {
                var l = t.dir,
                    c = t.next,
                    u = c || l,
                    d = e && "parentNode" === u,
                    h = i++;
                return t.first ? function (t, e, n) {
                    for (; t = t[l];)
                        if (1 === t.nodeType || d) return a(t, e, n);
                    return !1
                } : function (t, e, n) {
                    var i, o, r, s = [T, h];
                    if (n) {
                        for (; t = t[l];)
                            if ((1 === t.nodeType || d) && a(t, e, n)) return !0
                    } else
                        for (; t = t[l];)
                            if (1 === t.nodeType || d)
                                if (o = (r = t[$] || (t[$] = {}))[t.uniqueID] || (r[t.uniqueID] = {}), c && c === t.nodeName.toLowerCase()) t = t[l] || t;
                                else {
                                    if ((i = o[u]) && i[0] === T && i[1] === h) return s[2] = i[2];
                                    if ((o[u] = s)[2] = a(t, e, n)) return !0
                                } return !1
                }
            }

            function bt(o) {
                return 1 < o.length ? function (t, e, n) {
                    for (var i = o.length; i--;)
                        if (!o[i](t, e, n)) return !1;
                    return !0
                } : o[0]
            }

            function xt(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
                return s
            }

            function wt(t) {
                for (var o, e, n, i = t.length, r = x.relative[t[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = yt(function (t) {
                        return t === o
                    }, s, !0), c = yt(function (t) {
                        return -1 < O(o, t)
                    }, s, !0), u = [function (t, e, n) {
                        var i = !r && (n || e !== w) || ((o = e).nodeType ? l : c)(t, e, n);
                        return o = null, i
                    }]; a < i; a++)
                    if (e = x.relative[t[a].type]) u = [yt(bt(u), e)];
                    else {
                        if ((e = x.filter[t[a].type].apply(null, t[a].matches))[$]) {
                            for (n = ++a; n < i && !x.relative[t[n].type]; n++);
                            return function t(f, p, m, g, v, e) {
                                return g && !g[$] && (g = t(g)), v && !v[$] && (v = t(v, e)), ct(function (t, e, n, i) {
                                    var o, r, s, a = [],
                                        l = [],
                                        c = e.length,
                                        u = t || function (t, e, n) {
                                            for (var i = 0, o = e.length; i < o; i++) at(t, e[i], n);
                                            return n
                                        }(p || "*", n.nodeType ? [n] : n, []),
                                        d = !f || !t && p ? u : xt(u, a, f, n, i),
                                        h = m ? v || (t ? f : c || g) ? [] : e : d;
                                    if (m && m(d, h, n, i), g)
                                        for (o = xt(h, l), g(o, [], n, i), r = o.length; r--;)(s = o[r]) && (h[l[r]] = !(d[l[r]] = s));
                                    if (t) {
                                        if (v || f) {
                                            if (v) {
                                                for (o = [], r = h.length; r--;)(s = h[r]) && o.push(d[r] = s);
                                                v(null, h = [], o, i)
                                            }
                                            for (r = h.length; r--;)(s = h[r]) && -1 < (o = v ? O(t, s) : a[r]) && (t[o] = !(e[o] = s))
                                        }
                                    } else h = xt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, i) : M.apply(e, h)
                                })
                            }(1 < a && bt(u), 1 < a && vt(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(W, "$1"), e, a < n && wt(t.slice(a, n)), n < i && wt(t = t.slice(n)), n < i && vt(t))
                        }
                        u.push(e)
                    } return bt(u)
            }
            return gt.prototype = x.filters = x.pseudos, x.setFilters = new gt, p = at.tokenize = function (t, e) {
                var n, i, o, r, s, a, l, c = F[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (s = t, a = [], l = x.preFilter; s;) {
                    for (r in n && !(i = Q.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = G.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(W, " ")
                        }), s = s.slice(n.length)), x.filter) !(i = Y[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: r,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return e ? s.length : s ? at.error(t) : F(t, a).slice(0)
            }, h = at.compile = function (t, e) {
                var n, g, v, y, b, i, o = [],
                    r = [],
                    s = k[t + " "];
                if (!s) {
                    for (n = (e = e || p(t)).length; n--;)(s = wt(e[n]))[$] ? o.push(s) : r.push(s);
                    (s = k(t, (g = r, y = 0 < (v = o).length, b = 0 < g.length, i = function (t, e, n, i, o) {
                        var r, s, a, l = 0,
                            c = "0",
                            u = t && [],
                            d = [],
                            h = w,
                            f = t || b && x.find.TAG("*", o),
                            p = T += null == h ? 1 : Math.random() || .1,
                            m = f.length;
                        for (o && (w = e == _ || e || o); c !== m && null != (r = f[c]); c++) {
                            if (b && r) {
                                for (s = 0, e || r.ownerDocument == _ || (C(r), n = !S); a = g[s++];)
                                    if (a(r, e || _, n)) {
                                        i.push(r);
                                        break
                                    } o && (T = p)
                            }
                            y && ((r = !a && r) && l--, t && u.push(r))
                        }
                        if (l += c, y && c !== l) {
                            for (s = 0; a = v[s++];) a(u, d, e, n);
                            if (t) {
                                if (0 < l)
                                    for (; c--;) u[c] || d[c] || (d[c] = j.call(i));
                                d = xt(d)
                            }
                            M.apply(i, d), o && !t && 0 < d.length && 1 < l + v.length && at.uniqueSort(i)
                        }
                        return o && (T = p, w = h), u
                    }, y ? ct(i) : i))).selector = t
                }
                return s
            }, m = at.select = function (t, e, n, i) {
                var o, r, s, a, l, c = "function" == typeof t && t,
                    u = !i && p(t = c.selector || t);
                if (n = n || [], 1 === u.length) {
                    if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === e.nodeType && S && x.relative[r[1].type]) {
                        if (!(e = (x.find.ID(s.matches[0].replace(it, d), e) || [])[0])) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = Y.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)
                        if ((l = x.find[a]) && (i = l(s.matches[0].replace(it, d), nt.test(r[0].type) && mt(e.parentNode) || e))) {
                            if (r.splice(o, 1), !(t = i.length && vt(r))) return M.apply(n, i), n;
                            break
                        }
                }
                return (c || h(t, u))(i, e, !S, n, !e || nt.test(t) && mt(e.parentNode) || e), n
            }, f.sortStable = $.split("").sort(A).join("") === $, f.detectDuplicates = !!c, C(), f.sortDetached = ut(function (t) {
                return 1 & t.compareDocumentPosition(_.createElement("fieldset"))
            }), ut(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || dt("type|href|height|width", function (t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), f.attributes && ut(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || dt("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), ut(function (t) {
                return null == t.getAttribute("disabled")
            }) || dt(N, function (t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), at
        }(_);
        $.find = f, $.expr = f.selectors, $.expr[":"] = $.expr.pseudos, $.uniqueSort = $.unique = f.uniqueSort, $.text = f.getText, $.isXMLDoc = f.isXML, $.contains = f.contains, $.escapeSelector = f.escape;

        function p(t, e, n) {
            for (var i = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && $(t).is(n)) break;
                    i.push(t)
                } return i
        }

        function C(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
        var T = $.expr.match.needsContext;

        function E(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function k(t, n, i) {
            return b(n) ? $.grep(t, function (t, e) {
                return !!n.call(t, e, t) !== i
            }) : n.nodeType ? $.grep(t, function (t) {
                return t === n !== i
            }) : "string" != typeof n ? $.grep(t, function (t) {
                return -1 < o.call(n, t) !== i
            }) : $.filter(n, t, i)
        }
        $.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? $.find.matchesSelector(i, t) ? [i] : [] : $.find.matches(t, $.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, $.fn.extend({
            find: function (t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack($(t).filter(function () {
                    for (e = 0; e < i; e++)
                        if ($.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) $.find(t, o[e], n);
                return 1 < i ? $.uniqueSort(n) : n
            },
            filter: function (t) {
                return this.pushStack(k(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(k(this, t || [], !0))
            },
            is: function (t) {
                return !!k(this, "string" == typeof t && T.test(t) ? $(t) : t || [], !1).length
            }
        });
        var P, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ($.fn.init = function (t, e, n) {
            var i, o;
            if (!t) return this;
            if (n = n || P, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : b(t) ? void 0 !== n.ready ? n.ready(t) : t($) : $.makeArray(t, this);
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : A.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof $ ? e[0] : e, $.merge(this, $.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : S, !0)), F.test(i[1]) && $.isPlainObject(e))
                    for (i in e) b(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (o = S.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }).prototype = $.fn, P = $(S);
        var L = /^(?:parents|prev(?:Until|All))/,
            j = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function D(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        $.fn.extend({
            has: function (t) {
                var e = $(t, this),
                    n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++)
                        if ($.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof t && $(t);
                if (!T.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && $.find.matchesSelector(n, t))) {
                                r.push(n);
                                break
                            } return this.pushStack(1 < r.length ? $.uniqueSort(r) : r)
            },
            index: function (t) {
                return t ? "string" == typeof t ? o.call($(t), this[0]) : o.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack($.uniqueSort($.merge(this.get(), $(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), $.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return p(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return p(t, "parentNode", n)
            },
            next: function (t) {
                return D(t, "nextSibling")
            },
            prev: function (t) {
                return D(t, "previousSibling")
            },
            nextAll: function (t) {
                return p(t, "nextSibling")
            },
            prevAll: function (t) {
                return p(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return p(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return p(t, "previousSibling", n)
            },
            siblings: function (t) {
                return C((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return C(t.firstChild)
            },
            contents: function (t) {
                return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (E(t, "template") && (t = t.content || t), $.merge([], t.childNodes))
            }
        }, function (i, o) {
            $.fn[i] = function (t, e) {
                var n = $.map(this, o, t);
                return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = $.filter(e, n)), 1 < this.length && (j[i] || $.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n)
            }
        });
        var M = /[^\x20\t\r\n\f]+/g;

        function z(t) {
            return t
        }

        function O(t) {
            throw t
        }

        function N(t, e, n, i) {
            var o;
            try {
                t && b(o = t.promise) ? o.call(t).done(e).fail(n) : t && b(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }
        $.Callbacks = function (i) {
            var n;
            i = "string" == typeof i ? (n = {}, $.each(i.match(M) || [], function (t, e) {
                n[e] = !0
            }), n) : $.extend({}, i);

            function o() {
                for (s = s || i.once, e = r = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
                i.memory || (t = !1), r = !1, s && (a = t ? [] : "")
            }
            var r, t, e, s, a = [],
                l = [],
                c = -1,
                u = {
                    add: function () {
                        return a && (t && !r && (c = a.length - 1, l.push(t)), function n(t) {
                            $.each(t, function (t, e) {
                                b(e) ? i.unique && u.has(e) || a.push(e) : e && e.length && "string" !== w(e) && n(e)
                            })
                        }(arguments), t && !r && o()), this
                    },
                    remove: function () {
                        return $.each(arguments, function (t, e) {
                            for (var n; - 1 < (n = $.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
                        }), this
                    },
                    has: function (t) {
                        return t ? -1 < $.inArray(t, a) : 0 < a.length
                    },
                    empty: function () {
                        return a = a && [], this
                    },
                    disable: function () {
                        return s = l = [], a = t = "", this
                    },
                    disabled: function () {
                        return !a
                    },
                    lock: function () {
                        return s = l = [], t || r || (a = t = ""), this
                    },
                    locked: function () {
                        return !!s
                    },
                    fireWith: function (t, e) {
                        return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || o()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!e
                    }
                };
            return u
        }, $.extend({
            Deferred: function (t) {
                var r = [
                        ["notify", "progress", $.Callbacks("memory"), $.Callbacks("memory"), 2],
                        ["resolve", "done", $.Callbacks("once memory"), $.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", $.Callbacks("once memory"), $.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    s = {
                        state: function () {
                            return o
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function (t) {
                            return s.then(null, t)
                        },
                        pipe: function () {
                            var o = arguments;
                            return $.Deferred(function (i) {
                                $.each(r, function (t, e) {
                                    var n = b(o[e[4]]) && o[e[4]];
                                    a[e[1]](function () {
                                        var t = n && n.apply(this, arguments);
                                        t && b(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        then: function (e, n, i) {
                            var l = 0;

                            function c(o, r, s, a) {
                                return function () {
                                    function t() {
                                        var t, e;
                                        if (!(o < l)) {
                                            if ((t = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            e = t && ("object" == typeof t || "function" == typeof t) && t.then, b(e) ? a ? e.call(t, c(l, r, z, a), c(l, r, O, a)) : (l++, e.call(t, c(l, r, z, a), c(l, r, O, a), c(l, r, z, r.notifyWith))) : (s !== z && (n = void 0, i = [t]), (a || r.resolveWith)(n, i))
                                        }
                                    }
                                    var n = this,
                                        i = arguments,
                                        e = a ? t : function () {
                                            try {
                                                t()
                                            } catch (t) {
                                                $.Deferred.exceptionHook && $.Deferred.exceptionHook(t, e.stackTrace), l <= o + 1 && (s !== O && (n = void 0, i = [t]), r.rejectWith(n, i))
                                            }
                                        };
                                    o ? e() : ($.Deferred.getStackHook && (e.stackTrace = $.Deferred.getStackHook()), _.setTimeout(e))
                                }
                            }
                            return $.Deferred(function (t) {
                                r[0][3].add(c(0, t, b(i) ? i : z, t.notifyWith)), r[1][3].add(c(0, t, b(e) ? e : z)), r[2][3].add(c(0, t, b(n) ? n : O))
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? $.extend(t, s) : s
                        }
                    },
                    a = {};
                return $.each(r, function (t, e) {
                    var n = e[2],
                        i = e[5];
                    s[e[1]] = n.add, i && n.add(function () {
                        o = i
                    }, r[3 - t][2].disable, r[3 - t][3].disable, r[0][2].lock, r[0][3].lock), n.add(e[3].fire), a[e[0]] = function () {
                        return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[e[0] + "With"] = n.fireWith
                }), s.promise(a), t && t.call(a, a), a
            },
            when: function (t) {
                function e(e) {
                    return function (t) {
                        o[e] = this, r[e] = 1 < arguments.length ? a.call(arguments) : t, --n || s.resolveWith(o, r)
                    }
                }
                var n = arguments.length,
                    i = n,
                    o = Array(i),
                    r = a.call(arguments),
                    s = $.Deferred();
                if (n <= 1 && (N(t, s.done(e(i)).resolve, s.reject, !n), "pending" === s.state() || b(r[i] && r[i].then))) return s.then();
                for (; i--;) N(r[i], e(i), s.reject);
                return s.promise()
            }
        });
        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        $.Deferred.exceptionHook = function (t, e) {
            _.console && _.console.warn && t && q.test(t.name) && _.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, $.readyException = function (t) {
            _.setTimeout(function () {
                throw t
            })
        };
        var I = $.Deferred();

        function R() {
            S.removeEventListener("DOMContentLoaded", R), _.removeEventListener("load", R), $.ready()
        }
        $.fn.ready = function (t) {
            return I.then(t).catch(function (t) {
                $.readyException(t)
            }), this
        }, $.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --$.readyWait : $.isReady) || ($.isReady = !0) !== t && 0 < --$.readyWait || I.resolveWith(S, [$])
            }
        }), $.ready.then = I.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? _.setTimeout($.ready) : (S.addEventListener("DOMContentLoaded", R), _.addEventListener("load", R));
        var H = function (t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === w(n))
                    for (a in o = !0, n) H(t, e, a, n[a], !0, r, s);
                else if (void 0 !== i && (o = !0, b(i) || (s = !0), c && (e = s ? (e.call(t, i), null) : (c = e, function (t, e, n) {
                        return c.call($(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            },
            B = /^-ms-/,
            W = /-([a-z])/g;

        function Q(t, e) {
            return e.toUpperCase()
        }

        function G(t) {
            return t.replace(B, "ms-").replace(W, Q)
        }

        function X(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }

        function V() {
            this.expando = $.expando + V.uid++
        }
        V.uid = 1, V.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[G(e)] = n;
                else
                    for (i in e) o[G(i)] = e[i];
                return o
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
            },
            access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function (t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in i ? [e] : e.match(M) || []).length;
                        for (; n--;) delete i[e[n]]
                    }
                    void 0 !== e && !$.isEmptyObject(i) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !$.isEmptyObject(e)
            }
        };
        var U = new V,
            Y = new V,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            J = /[A-Z]/g;

        function K(t, e, n) {
            var i, o;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                    try {
                        n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Z.test(o) ? JSON.parse(o) : o)
                    } catch (t) {}
                    Y.set(t, e, n)
                } else n = void 0;
            return n
        }
        $.extend({
            hasData: function (t) {
                return Y.hasData(t) || U.hasData(t)
            },
            data: function (t, e, n) {
                return Y.access(t, e, n)
            },
            removeData: function (t, e) {
                Y.remove(t, e)
            },
            _data: function (t, e, n) {
                return U.access(t, e, n)
            },
            _removeData: function (t, e) {
                U.remove(t, e)
            }
        }), $.fn.extend({
            data: function (n, t) {
                var e, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                    Y.set(this, n)
                }) : H(this, function (t) {
                    var e;
                    return r && void 0 === t ? void 0 !== (e = Y.get(r, n)) || void 0 !== (e = K(r, n)) ? e : void 0 : void this.each(function () {
                        Y.set(this, n, t)
                    })
                }, null, t, 1 < arguments.length, null, !0);
                if (this.length && (o = Y.get(r), 1 === r.nodeType && !U.get(r, "hasDataAttrs"))) {
                    for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = G(i.slice(5)), K(r, i, o[i]));
                    U.set(r, "hasDataAttrs", !0)
                }
                return o
            },
            removeData: function (t) {
                return this.each(function () {
                    Y.remove(this, t)
                })
            }
        }), $.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = U.get(t, e), n && (!i || Array.isArray(n) ? i = U.access(t, e, $.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = $.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = $._queueHooks(t, e);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
                    $.dequeue(t, e)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return U.get(t, n) || U.access(t, n, {
                    empty: $.Callbacks("once memory").add(function () {
                        U.remove(t, [e + "queue", n])
                    })
                })
            }
        }), $.fn.extend({
            queue: function (e, n) {
                var t = 2;
                return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? $.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                    var t = $.queue(this, e, n);
                    $._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && $.dequeue(this, e)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    $.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                function n() {
                    --o || r.resolveWith(s, [s])
                }
                var i, o = 1,
                    r = $.Deferred(),
                    s = this,
                    a = this.length;
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = U.get(s[a], t + "queueHooks")) && i.empty && (o++, i.empty.add(n));
                return n(), r.promise(e)
            }
        });
        var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
            nt = ["Top", "Right", "Bottom", "Left"],
            it = S.documentElement,
            ot = function (t) {
                return $.contains(t.ownerDocument, t)
            },
            rt = {
                composed: !0
            };
        it.getRootNode && (ot = function (t) {
            return $.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
        });

        function st(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === $.css(t, "display")
        }

        function at(t, e, n, i) {
            var o, r, s = 20,
                a = i ? function () {
                    return i.cur()
                } : function () {
                    return $.css(t, e, "")
                },
                l = a(),
                c = n && n[3] || ($.cssNumber[e] ? "" : "px"),
                u = t.nodeType && ($.cssNumber[e] || "px" !== c && +l) && et.exec($.css(t, e));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) $.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                u *= 2, $.style(t, e, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }
        var lt = {};

        function ct(t, e) {
            for (var n, i, o, r, s, a, l = [], c = 0, u = t.length; c < u; c++)(i = t[c]).style && (n = i.style.display, e ? ("none" === n && (l[c] = U.get(i, "display") || null, l[c] || (i.style.display = "")), "" === i.style.display && st(i) && (l[c] = (a = r = o = void 0, r = i.ownerDocument, s = i.nodeName, (a = lt[s]) || (o = r.body.appendChild(r.createElement(s)), a = $.css(o, "display"), o.parentNode.removeChild(o), "none" === a && (a = "block"), lt[s] = a)))) : "none" !== n && (l[c] = "none", U.set(i, "display", n)));
            for (c = 0; c < u; c++) null != l[c] && (t[c].style.display = l[c]);
            return t
        }
        $.fn.extend({
            show: function () {
                return ct(this, !0)
            },
            hide: function () {
                return ct(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    st(this) ? $(this).show() : $(this).hide()
                })
            }
        });
        var ut, dt = /^(?:checkbox|radio)$/i,
            ht = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ft = /^$|^module$|\/(?:java|ecma)script/i,
            pt = S.createDocumentFragment().appendChild(S.createElement("div"));
        (ut = S.createElement("input")).setAttribute("type", "radio"), ut.setAttribute("checked", "checked"), ut.setAttribute("name", "t"), pt.appendChild(ut), y.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue, pt.innerHTML = "<option></option>", y.option = !!pt.lastChild;
        var mt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function gt(t, e) {
            var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && E(t, e) ? $.merge([t], n) : n
        }

        function vt(t, e) {
            for (var n = 0, i = t.length; n < i; n++) U.set(t[n], "globalEval", !e || U.get(e[n], "globalEval"))
        }
        mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td, y.option || (mt.optgroup = mt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var yt = /<|&#?\w+;/;

        function bt(t, e, n, i, o) {
            for (var r, s, a, l, c, u, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
                if ((r = t[f]) || 0 === r)
                    if ("object" === w(r)) $.merge(h, r.nodeType ? [r] : r);
                    else if (yt.test(r)) {
                for (s = s || d.appendChild(e.createElement("div")), a = (ht.exec(r) || ["", ""])[1].toLowerCase(), l = mt[a] || mt._default, s.innerHTML = l[1] + $.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                $.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
            } else h.push(e.createTextNode(r));
            for (d.textContent = "", f = 0; r = h[f++];)
                if (i && -1 < $.inArray(r, i)) o && o.push(r);
                else if (c = ot(r), s = gt(d.appendChild(r), "script"), c && vt(s), n)
                for (u = 0; r = s[u++];) ft.test(r.type || "") && n.push(r);
            return d
        }
        var xt = /^key/,
            wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ct = /^([^.]*)(?:\.(.+)|)/;

        function _t() {
            return !0
        }

        function St() {
            return !1
        }

        function $t(t, e) {
            return t === function () {
                try {
                    return S.activeElement
                } catch (t) {}
            }() == ("focus" === e)
        }

        function Tt(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), e) Tt(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = St;
            else if (!o) return t;
            return 1 === r && (s = o, (o = function (t) {
                return $().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = $.guid++)), t.each(function () {
                $.event.add(this, e, o, i, n)
            })
        }

        function Et(t, o, r) {
            r ? (U.set(t, o, !1), $.event.add(t, o, {
                namespace: !1,
                handler: function (t) {
                    var e, n, i = U.get(this, o);
                    if (1 & t.isTrigger && this[o]) {
                        if (i.length)($.event.special[o] || {}).delegateType && t.stopPropagation();
                        else if (i = a.call(arguments), U.set(this, o, i), e = r(this, o), this[o](), i !== (n = U.get(this, o)) || e ? U.set(this, o, !1) : n = {}, i !== n) return t.stopImmediatePropagation(), t.preventDefault(), n.value
                    } else i.length && (U.set(this, o, {
                        value: $.event.trigger($.extend(i[0], $.Event.prototype), i.slice(1), this)
                    }), t.stopImmediatePropagation())
                }
            })) : void 0 === U.get(t, o) && $.event.add(t, o, _t)
        }
        $.event = {
            global: {},
            add: function (e, t, n, i, o) {
                var r, s, a, l, c, u, d, h, f, p, m, g = U.get(e);
                if (X(e))
                    for (n.handler && (n = (r = n).handler, o = r.selector), o && $.find.matchesSelector(it, o), n.guid || (n.guid = $.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function (t) {
                            return void 0 !== $ && $.event.triggered !== t.type ? $.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(M) || [""]).length; c--;) f = m = (a = Ct.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = $.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = $.event.special[f] || {}, u = $.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && $.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), $.event.global[f] = !0)
            },
            remove: function (t, e, n, i, o) {
                var r, s, a, l, c, u, d, h, f, p, m, g = U.hasData(t) && U.get(t);
                if (g && (l = g.events)) {
                    for (c = (e = (e || "").match(M) || [""]).length; c--;)
                        if (f = m = (a = Ct.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                            for (d = $.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || $.removeEvent(t, f, g.handle), delete l[f])
                        } else
                            for (f in l) $.event.remove(t, f + e[c], n, i, !0);
                    $.isEmptyObject(l) && U.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                var e, n, i, o, r, s, a = new Array(arguments.length),
                    l = $.event.fix(t),
                    c = (U.get(this, "events") || Object.create(null))[l.type] || [],
                    u = $.event.special[l.type] || {};
                for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                    for (s = $.event.handlers.call(this, l, c), e = 0;
                        (o = s[e++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = (($.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, l), l.result
                }
            },
            handlers: function (t, e) {
                var n, i, o, r, s, a = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? -1 < $(o, this).index(c) : $.find(o, this, null, [c]).length), s[o] && r.push(i);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        } return c = this, l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function (e, t) {
                Object.defineProperty($.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: b(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (t) {
                return t[$.expando] ? t : new $.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (t) {
                        var e = this || t;
                        return dt.test(e.type) && e.click && E(e, "input") && Et(e, "click", _t), !1
                    },
                    trigger: function (t) {
                        var e = this || t;
                        return dt.test(e.type) && e.click && E(e, "input") && Et(e, "click"), !0
                    },
                    _default: function (t) {
                        var e = t.target;
                        return dt.test(e.type) && e.click && E(e, "input") && U.get(e, "click") || E(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, $.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, $.Event = function (t, e) {
            if (!(this instanceof $.Event)) return new $.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && $.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[$.expando] = !0
        }, $.Event.prototype = {
            constructor: $.Event,
            isDefaultPrevented: St,
            isPropagationStopped: St,
            isImmediatePropagationStopped: St,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, $.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, $.event.addProp), $.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            $.event.special[t] = {
                setup: function () {
                    return Et(this, t, $t), !1
                },
                trigger: function () {
                    return Et(this, t), !0
                },
                delegateType: e
            }
        }), $.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, o) {
            $.event.special[t] = {
                delegateType: o,
                bindType: o,
                handle: function (t) {
                    var e, n = t.relatedTarget,
                        i = t.handleObj;
                    return n && (n === this || $.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o), e
                }
            }
        }), $.fn.extend({
            on: function (t, e, n, i) {
                return Tt(this, t, e, n, i)
            },
            one: function (t, e, n, i) {
                return Tt(this, t, e, n, i, 1)
            },
            off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, $(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each(function () {
                    $.event.remove(this, t, n, e)
                });
                for (o in t) this.off(o, e, t[o]);
                return this
            }
        });
        var Ft = /<script|<style|<link/i,
            kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function At(t, e) {
            return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && $(t).children("tbody")[0] || t
        }

        function Lt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function jt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Dt(t, e) {
            var n, i, o, r, s, a;
            if (1 === e.nodeType) {
                if (U.hasData(t) && (a = U.get(t).events))
                    for (o in U.remove(e, "handle events"), a)
                        for (n = 0, i = a[o].length; n < i; n++) $.event.add(e, o, a[o][n]);
                Y.hasData(t) && (r = Y.access(t), s = $.extend({}, r), Y.set(e, s))
            }
        }

        function Mt(n, i, o, r) {
            i = g(i);
            var t, e, s, a, l, c, u = 0,
                d = n.length,
                h = d - 1,
                f = i[0],
                p = b(f);
            if (p || 1 < d && "string" == typeof f && !y.checkClone && kt.test(f)) return n.each(function (t) {
                var e = n.eq(t);
                p && (i[0] = f.call(this, t, e.html())), Mt(e, i, o, r)
            });
            if (d && (e = (t = bt(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === t.childNodes.length && (t = e), e || r)) {
                for (a = (s = $.map(gt(t, "script"), Lt)).length; u < d; u++) l = t, u !== h && (l = $.clone(l, !0, !0), a && $.merge(s, gt(l, "script"))), o.call(n[u], l, u);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, $.map(s, jt), u = 0; u < a; u++) l = s[u], ft.test(l.type || "") && !U.access(l, "globalEval") && $.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? $._evalUrl && !l.noModule && $._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : x(l.textContent.replace(Pt, ""), l, c))
            }
            return n
        }

        function zt(t, e, n) {
            for (var i, o = e ? $.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || $.cleanData(gt(i)), i.parentNode && (n && ot(i) && vt(gt(i, "script")), i.parentNode.removeChild(i));
            return t
        }
        $.extend({
            htmlPrefilter: function (t) {
                return t
            },
            clone: function (t, e, n) {
                var i, o, r, s, a, l, c, u = t.cloneNode(!0),
                    d = ot(t);
                if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || $.isXMLDoc(t)))
                    for (s = gt(u), i = 0, o = (r = gt(t)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                if (e)
                    if (n)
                        for (r = r || gt(t), s = s || gt(u), i = 0, o = r.length; i < o; i++) Dt(r[i], s[i]);
                    else Dt(t, u);
                return 0 < (s = gt(u, "script")).length && vt(s, !d && gt(t, "script")), u
            },
            cleanData: function (t) {
                for (var e, n, i, o = $.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (X(n)) {
                        if (e = n[U.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? $.event.remove(n, i) : $.removeEvent(n, i, e.handle);
                            n[U.expando] = void 0
                        }
                        n[Y.expando] && (n[Y.expando] = void 0)
                    }
            }
        }), $.fn.extend({
            detach: function (t) {
                return zt(this, t, !0)
            },
            remove: function (t) {
                return zt(this, t)
            },
            text: function (t) {
                return H(this, function (t) {
                    return void 0 === t ? $.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return Mt(this, arguments, function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
                })
            },
            prepend: function () {
                return Mt(this, arguments, function (t) {
                    var e;
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = At(this, t)).insertBefore(t, e.firstChild)
                })
            },
            before: function () {
                return Mt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return Mt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && ($.cleanData(gt(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return $.clone(this, t, e)
                })
            },
            html: function (t) {
                return H(this, function (t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Ft.test(t) && !mt[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = $.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && ($.cleanData(gt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var n = [];
                return Mt(this, arguments, function (t) {
                    var e = this.parentNode;
                    $.inArray(this, n) < 0 && ($.cleanData(gt(this)), e && e.replaceChild(t, this))
                }, n)
            }
        }), $.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, s) {
            $.fn[t] = function (t) {
                for (var e, n = [], i = $(t), o = i.length - 1, r = 0; r <= o; r++) e = r === o ? this : this.clone(!0), $(i[r])[s](e), l.apply(n, e.get());
                return this.pushStack(n)
            }
        });

        function Ot(t, e, n) {
            var i, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            for (o in i = n.call(t), e) t.style[o] = r[o];
            return i
        }
        var Nt, qt, It, Rt, Ht, Bt, Wt, Qt, Gt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
            Xt = function (t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = _), e.getComputedStyle(t)
            },
            Vt = new RegExp(nt.join("|"), "i");

        function Ut(t, e, n) {
            var i, o, r, s, a = t.style;
            return (n = n || Xt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || ot(t) || (s = $.style(t, e)), !y.pixelBoxStyles() && Gt.test(s) && Vt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function Yt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function Zt() {
            var t;
            Qt && (Wt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Qt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(Wt).appendChild(Qt), t = _.getComputedStyle(Qt), Nt = "1%" !== t.top, Bt = 12 === Jt(t.marginLeft), Qt.style.right = "60%", Rt = 36 === Jt(t.right), qt = 36 === Jt(t.width), Qt.style.position = "absolute", It = 12 === Jt(Qt.offsetWidth / 3), it.removeChild(Wt), Qt = null)
        }

        function Jt(t) {
            return Math.round(parseFloat(t))
        }
        Wt = S.createElement("div"), (Qt = S.createElement("div")).style && (Qt.style.backgroundClip = "content-box", Qt.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Qt.style.backgroundClip, $.extend(y, {
            boxSizingReliable: function () {
                return Zt(), qt
            },
            pixelBoxStyles: function () {
                return Zt(), Rt
            },
            pixelPosition: function () {
                return Zt(), Nt
            },
            reliableMarginLeft: function () {
                return Zt(), Bt
            },
            scrollboxSize: function () {
                return Zt(), It
            },
            reliableTrDimensions: function () {
                var t, e, n, i;
                return null == Ht && (t = S.createElement("table"), e = S.createElement("tr"), n = S.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", n.style.height = "9px", it.appendChild(t).appendChild(e).appendChild(n), i = _.getComputedStyle(e), Ht = 3 < parseInt(i.height), it.removeChild(t)), Ht
            }
        }));
        var Kt = ["Webkit", "Moz", "ms"],
            te = S.createElement("div").style,
            ee = {};

        function ne(t) {
            return $.cssProps[t] || ee[t] || (t in te ? t : ee[t] = function (t) {
                for (var e = t[0].toUpperCase() + t.slice(1), n = Kt.length; n--;)
                    if ((t = Kt[n] + e) in te) return t
            }(t) || t)
        }
        var ie = /^(none|table(?!-c[ea]).+)/,
            oe = /^--/,
            re = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            se = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function ae(t, e, n) {
            var i = et.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function le(t, e, n, i, o, r) {
            var s = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += $.css(t, n + nt[s], !0, o)), i ? ("content" === n && (l -= $.css(t, "padding" + nt[s], !0, o)), "margin" !== n && (l -= $.css(t, "border" + nt[s] + "Width", !0, o))) : (l += $.css(t, "padding" + nt[s], !0, o), "padding" !== n ? l += $.css(t, "border" + nt[s] + "Width", !0, o) : a += $.css(t, "border" + nt[s] + "Width", !0, o));
            return !i && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
        }

        function ce(t, e, n) {
            var i = Xt(t),
                o = (!y.boxSizingReliable() || n) && "border-box" === $.css(t, "boxSizing", !1, i),
                r = o,
                s = Ut(t, e, i),
                a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Gt.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!y.boxSizingReliable() && o || !y.reliableTrDimensions() && E(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === $.css(t, "display", !1, i)) && t.getClientRects().length && (o = "border-box" === $.css(t, "boxSizing", !1, i), (r = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + le(t, e, n || (o ? "border" : "content"), r, i, s) + "px"
        }

        function ue(t, e, n, i, o) {
            return new ue.prototype.init(t, e, n, i, o)
        }
        $.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = Ut(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = G(e),
                        l = oe.test(e),
                        c = t.style;
                    if (l || (e = ne(a)), s = $.cssHooks[e] || $.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e];
                    "string" == (r = typeof n) && (o = et.exec(n)) && o[1] && (n = at(t, e, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || ($.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
                }
            },
            css: function (t, e, n, i) {
                var o, r, s, a = G(e);
                return oe.test(e) || (e = ne(a)), (s = $.cssHooks[e] || $.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Ut(t, e, i)), "normal" === o && e in se && (o = se[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), $.each(["height", "width"], function (t, l) {
            $.cssHooks[l] = {
                get: function (t, e, n) {
                    if (e) return !ie.test($.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ce(t, l, n) : Ot(t, re, function () {
                        return ce(t, l, n)
                    })
                },
                set: function (t, e, n) {
                    var i, o = Xt(t),
                        r = !y.scrollboxSize() && "absolute" === o.position,
                        s = (r || n) && "border-box" === $.css(t, "boxSizing", !1, o),
                        a = n ? le(t, l, n, s, o) : 0;
                    return s && r && (a -= Math.ceil(t["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(o[l]) - le(t, l, "border", !1, o) - .5)), a && (i = et.exec(e)) && "px" !== (i[3] || "px") && (t.style[l] = e, e = $.css(t, l)), ae(0, e, a)
                }
            }
        }), $.cssHooks.marginLeft = Yt(y.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(Ut(t, "marginLeft")) || t.getBoundingClientRect().left - Ot(t, {
                marginLeft: 0
            }, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), $.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (o, r) {
            $.cssHooks[o + r] = {
                expand: function (t) {
                    for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[o + nt[e] + r] = i[e] || i[e - 2] || i[0];
                    return n
                }
            }, "margin" !== o && ($.cssHooks[o + r].set = ae)
        }), $.fn.extend({
            css: function (t, e) {
                return H(this, function (t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (i = Xt(t), o = e.length; s < o; s++) r[e[s]] = $.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? $.style(t, e, n) : $.css(t, e)
                }, t, e, 1 < arguments.length)
            }
        }), (($.Tween = ue).prototype = {
            constructor: ue,
            init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || $.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || ($.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = ue.propHooks[this.prop];
                return t && t.get ? t.get(this) : ue.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = ue.propHooks[this.prop];
                return this.options.duration ? this.pos = e = $.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ue.propHooks._default.set(this), this
            }
        }).init.prototype = ue.prototype, (ue.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = $.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function (t) {
                    $.fx.step[t.prop] ? $.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !$.cssHooks[t.prop] && null == t.elem.style[ne(t.prop)] ? t.elem[t.prop] = t.now : $.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = ue.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, $.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, $.fx = ue.prototype.init, $.fx.step = {};
        var de, he, fe, pe, me = /^(?:toggle|show|hide)$/,
            ge = /queueHooks$/;

        function ve() {
            he && (!1 === S.hidden && _.requestAnimationFrame ? _.requestAnimationFrame(ve) : _.setTimeout(ve, $.fx.interval), $.fx.tick())
        }

        function ye() {
            return _.setTimeout(function () {
                de = void 0
            }), de = Date.now()
        }

        function be(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = nt[i])] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function xe(t, e, n) {
            for (var i, o = (we.tweeners[e] || []).concat(we.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function we(r, t, e) {
            var n, s, i = 0,
                o = we.prefilters.length,
                a = $.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (s) return !1;
                    for (var t = de || ye(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                    return a.notifyWith(r, [c, n, e]), n < 1 && o ? e : (o || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1)
                },
                c = a.promise({
                    elem: r,
                    props: $.extend({}, t),
                    opts: $.extend(!0, {
                        specialEasing: {},
                        easing: $.easing._default
                    }, e),
                    originalProperties: t,
                    originalOptions: e,
                    startTime: de || ye(),
                    duration: e.duration,
                    tweens: [],
                    createTween: function (t, e) {
                        var n = $.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function (t) {
                        var e = 0,
                            n = t ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; e < n; e++) c.tweens[e].run(1);
                        return t ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, t])) : a.rejectWith(r, [c, t]), this
                    }
                }),
                u = c.props;
            for (function (t, e) {
                    var n, i, o, r, s;
                    for (n in t)
                        if (o = e[i = G(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = $.cssHooks[i]) && "expand" in s)
                            for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                        else e[i] = o
                }(u, c.opts.specialEasing); i < o; i++)
                if (n = we.prefilters[i].call(c, r, u, c.opts)) return b(n.stop) && ($._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return $.map(u, xe, c), b(c.opts.start) && c.opts.start.call(r, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), $.fx.timer($.extend(l, {
                elem: r,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        $.Animation = $.extend(we, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return at(n.elem, t, et.exec(e), n), n
                }]
            },
            tweener: function (t, e) {
                for (var n, i = 0, o = (t = b(t) ? (e = t, ["*"]) : t.match(M)).length; i < o; i++) n = t[i], we.tweeners[n] = we.tweeners[n] || [], we.tweeners[n].unshift(e)
            },
            prefilters: [function (t, e, n) {
                var i, o, r, s, a, l, c, u, d = "width" in e || "height" in e,
                    h = this,
                    f = {},
                    p = t.style,
                    m = t.nodeType && st(t),
                    g = U.get(t, "fxshow");
                for (i in n.queue || (null == (s = $._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || a()
                    }), s.unqueued++, h.always(function () {
                        h.always(function () {
                            s.unqueued--, $.queue(t, "fx").length || s.empty.fire()
                        })
                    })), e)
                    if (o = e[i], me.test(o)) {
                        if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            m = !0
                        }
                        f[i] = g && g[i] || $.style(t, i)
                    } if ((l = !$.isEmptyObject(e)) || !$.isEmptyObject(f))
                    for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = U.get(t, "display")), "none" === (u = $.css(t, "display")) && (c ? u = c : (ct([t], !0), c = t.style.display || c, u = $.css(t, "display"), ct([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === $.css(t, "float") && (l || (h.done(function () {
                            p.display = c
                        }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = U.access(t, "fxshow", {
                        display: c
                    }), r && (g.hidden = !m), m && ct([t], !0), h.done(function () {
                        for (i in m || ct([t]), U.remove(t, "fxshow"), f) $.style(t, i, f[i])
                    })), l = xe(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function (t, e) {
                e ? we.prefilters.unshift(t) : we.prefilters.push(t)
            }
        }), $.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? $.extend({}, t) : {
                complete: n || !n && e || b(t) && t,
                duration: t,
                easing: n && e || e && !b(e) && e
            };
            return $.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in $.fx.speeds ? i.duration = $.fx.speeds[i.duration] : i.duration = $.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                b(i.old) && i.old.call(this), i.queue && $.dequeue(this, i.queue)
            }, i
        }, $.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(st).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (e, t, n, i) {
                function o() {
                    var t = we(this, $.extend({}, e), s);
                    (r || U.get(this, "finish")) && t.stop(!0)
                }
                var r = $.isEmptyObject(e),
                    s = $.speed(t, n, i);
                return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function (o, t, r) {
                function s(t) {
                    var e = t.stop;
                    delete t.stop, e(r)
                }
                return "string" != typeof o && (r = t, t = o, o = void 0), t && this.queue(o || "fx", []), this.each(function () {
                    var t = !0,
                        e = null != o && o + "queueHooks",
                        n = $.timers,
                        i = U.get(this);
                    if (e) i[e] && i[e].stop && s(i[e]);
                    else
                        for (e in i) i[e] && i[e].stop && ge.test(e) && s(i[e]);
                    for (e = n.length; e--;) n[e].elem !== this || null != o && n[e].queue !== o || (n[e].anim.stop(r), t = !1, n.splice(e, 1));
                    !t && r || $.dequeue(this, o)
                })
            },
            finish: function (s) {
                return !1 !== s && (s = s || "fx"), this.each(function () {
                    var t, e = U.get(this),
                        n = e[s + "queue"],
                        i = e[s + "queueHooks"],
                        o = $.timers,
                        r = n ? n.length : 0;
                    for (e.finish = !0, $.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete e.finish
                })
            }
        }), $.each(["toggle", "show", "hide"], function (t, i) {
            var o = $.fn[i];
            $.fn[i] = function (t, e, n) {
                return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(be(i, !0), t, e, n)
            }
        }), $.each({
            slideDown: be("show"),
            slideUp: be("hide"),
            slideToggle: be("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, i) {
            $.fn[t] = function (t, e, n) {
                return this.animate(i, t, e, n)
            }
        }), $.timers = [], $.fx.tick = function () {
            var t, e = 0,
                n = $.timers;
            for (de = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || $.fx.stop(), de = void 0
        }, $.fx.timer = function (t) {
            $.timers.push(t), $.fx.start()
        }, $.fx.interval = 13, $.fx.start = function () {
            he || (he = !0, ve())
        }, $.fx.stop = function () {
            he = null
        }, $.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, $.fn.delay = function (i, t) {
            return i = $.fx && $.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
                var n = _.setTimeout(t, i);
                e.stop = function () {
                    _.clearTimeout(n)
                }
            })
        }, fe = S.createElement("input"), pe = S.createElement("select").appendChild(S.createElement("option")), fe.type = "checkbox", y.checkOn = "" !== fe.value, y.optSelected = pe.selected, (fe = S.createElement("input")).value = "t", fe.type = "radio", y.radioValue = "t" === fe.value;
        var Ce, _e = $.expr.attrHandle;
        $.fn.extend({
            attr: function (t, e) {
                return H(this, $.attr, t, e, 1 < arguments.length)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    $.removeAttr(this, t)
                })
            }
        }), $.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? $.prop(t, e, n) : (1 === r && $.isXMLDoc(t) || (o = $.attrHooks[e.toLowerCase()] || ($.expr.match.bool.test(e) ? Ce : void 0)), void 0 !== n ? null === n ? void $.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : !(o && "get" in o && null !== (i = o.get(t, e))) && null == (i = $.find.attr(t, e)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!y.radioValue && "radio" === e && E(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var n, i = 0,
                    o = e && e.match(M);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), Ce = {
            set: function (t, e, n) {
                return !1 === e ? $.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, $.each($.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var s = _e[e] || $.find.attr;
            _e[e] = function (t, e, n) {
                var i, o, r = e.toLowerCase();
                return n || (o = _e[r], _e[r] = i, i = null != s(t, e, n) ? r : null, _e[r] = o), i
            }
        });
        var Se = /^(?:input|select|textarea|button)$/i,
            $e = /^(?:a|area)$/i;

        function Te(t) {
            return (t.match(M) || []).join(" ")
        }

        function Ee(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function Fe(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(M) || []
        }
        $.fn.extend({
            prop: function (t, e) {
                return H(this, $.prop, t, e, 1 < arguments.length)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[$.propFix[t] || t]
                })
            }
        }), $.extend({
            prop: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && $.isXMLDoc(t) || (e = $.propFix[e] || e, o = $.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = $.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Se.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), y.optSelected || ($.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), $.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            $.propFix[this.toLowerCase()] = this
        }), $.fn.extend({
            addClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (b(e)) return this.each(function (t) {
                    $(this).addClass(e.call(this, t, Ee(this)))
                });
                if ((t = Fe(e)).length)
                    for (; n = this[l++];)
                        if (o = Ee(n), i = 1 === n.nodeType && " " + Te(o) + " ") {
                            for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = Te(i)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (b(e)) return this.each(function (t) {
                    $(this).removeClass(e.call(this, t, Ee(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = Fe(e)).length)
                    for (; n = this[l++];)
                        if (o = Ee(n), i = 1 === n.nodeType && " " + Te(o) + " ") {
                            for (s = 0; r = t[s++];)
                                for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                            o !== (a = Te(i)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function (o, e) {
                var r = typeof o,
                    s = "string" == r || Array.isArray(o);
                return "boolean" == typeof e && s ? e ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function (t) {
                    $(this).toggleClass(o.call(this, t, Ee(this), e), e)
                }) : this.each(function () {
                    var t, e, n, i;
                    if (s)
                        for (e = 0, n = $(this), i = Fe(o); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                    else void 0 !== o && "boolean" != r || ((t = Ee(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== o && U.get(this, "__className__") || ""))
                })
            },
            hasClass: function (t) {
                for (var e, n = 0, i = " " + t + " "; e = this[n++];)
                    if (1 === e.nodeType && -1 < (" " + Te(Ee(e)) + " ").indexOf(i)) return !0;
                return !1
            }
        });
        var ke = /\r/g;
        $.fn.extend({
            val: function (n) {
                var i, t, o, e = this[0];
                return arguments.length ? (o = b(n), this.each(function (t) {
                    var e;
                    1 === this.nodeType && (null == (e = o ? n.call(this, t, $(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = $.map(e, function (t) {
                        return null == t ? "" : t + ""
                    })), (i = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
                })) : e ? (i = $.valHooks[e.type] || $.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(ke, "") : null == t ? "" : t : void 0
            }
        }), $.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = $.find.attr(t, "value");
                        return null != e ? e : Te($.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                            if (((n = i[l]).selected || l === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                if (e = $(n).val(), r) return e;
                                s.push(e)
                            } return s
                    },
                    set: function (t, e) {
                        for (var n, i, o = t.options, r = $.makeArray(e), s = o.length; s--;)((i = o[s]).selected = -1 < $.inArray($.valHooks.option.get(i), r)) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), $.each(["radio", "checkbox"], function () {
            $.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = -1 < $.inArray($(t).val(), e)
                }
            }, y.checkOn || ($.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), y.focusin = "onfocusin" in _;

        function Pe(t) {
            t.stopPropagation()
        }
        var Ae = /^(?:focusinfocus|focusoutblur)$/;
        $.extend($.event, {
            trigger: function (t, e, n, i) {
                var o, r, s, a, l, c, u, d = [n || S],
                    h = v.call(t, "type") ? t.type : t,
                    f = v.call(t, "namespace") ? t.namespace.split(".") : [],
                    p = u = r = n = n || S;
                if (3 !== n.nodeType && 8 !== n.nodeType && !Ae.test(h + $.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(), f.sort()), a = h.indexOf(":") < 0 && "on" + h, (t = t[$.expando] ? t : new $.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : $.makeArray(e, [t]), c = $.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                    if (!i && !c.noBubble && !m(n)) {
                        for (s = c.delegateType || h, Ae.test(s + h) || (p = p.parentNode); p; p = p.parentNode) d.push(p), r = p;
                        r === (n.ownerDocument || S) && d.push(r.defaultView || r.parentWindow || _)
                    }
                    for (o = 0;
                        (p = d[o++]) && !t.isPropagationStopped();) u = p, t.type = 1 < o ? s : c.bindType || h, (l = (U.get(p, "events") || Object.create(null))[t.type] && U.get(p, "handle")) && l.apply(p, e), (l = a && p[a]) && l.apply && X(p) && (t.result = l.apply(p, e), !1 === t.result && t.preventDefault());
                    return t.type = h, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), e) || !X(n) || a && b(n[h]) && !m(n) && ((r = n[a]) && (n[a] = null), $.event.triggered = h, t.isPropagationStopped() && u.addEventListener(h, Pe), n[h](), t.isPropagationStopped() && u.removeEventListener(h, Pe), $.event.triggered = void 0, r && (n[a] = r)), t.result
                }
            },
            simulate: function (t, e, n) {
                var i = $.extend(new $.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                $.event.trigger(i, null, e)
            }
        }), $.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    $.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return $.event.trigger(t, e, n, !0)
            }
        }), y.focusin || $.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, i) {
            function o(t) {
                $.event.simulate(i, t.target, $.event.fix(t))
            }
            $.event.special[i] = {
                setup: function () {
                    var t = this.ownerDocument || this.document || this,
                        e = U.access(t, i);
                    e || t.addEventListener(n, o, !0), U.access(t, i, (e || 0) + 1)
                },
                teardown: function () {
                    var t = this.ownerDocument || this.document || this,
                        e = U.access(t, i) - 1;
                    e ? U.access(t, i, e) : (t.removeEventListener(n, o, !0), U.remove(t, i))
                }
            }
        });
        var Le = _.location,
            je = {
                guid: Date.now()
            },
            De = /\?/;
        $.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new _.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || $.error("Invalid XML: " + t), e
        };
        var Me = /\[\]$/,
            ze = /\r?\n/g,
            Oe = /^(?:submit|button|image|reset|file)$/i,
            Ne = /^(?:input|select|textarea|keygen)/i;
        $.param = function (t, e) {
            function n(t, e) {
                var n = b(e) ? e() : e;
                o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            }
            var i, o = [];
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !$.isPlainObject(t)) $.each(t, function () {
                n(this.name, this.value)
            });
            else
                for (i in t) ! function n(i, t, o, r) {
                    var e;
                    if (Array.isArray(t)) $.each(t, function (t, e) {
                        o || Me.test(i) ? r(i, e) : n(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, o, r)
                    });
                    else if (o || "object" !== w(t)) r(i, t);
                    else
                        for (e in t) n(i + "[" + e + "]", t[e], o, r)
                }(i, t[i], e, n);
            return o.join("&")
        }, $.fn.extend({
            serialize: function () {
                return $.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = $.prop(this, "elements");
                    return t ? $.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !$(this).is(":disabled") && Ne.test(this.nodeName) && !Oe.test(t) && (this.checked || !dt.test(t))
                }).map(function (t, e) {
                    var n = $(this).val();
                    return null == n ? null : Array.isArray(n) ? $.map(n, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(ze, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(ze, "\r\n")
                    }
                }).get()
            }
        });
        var qe = /%20/g,
            Ie = /#.*$/,
            Re = /([?&])_=[^&]*/,
            He = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Be = /^(?:GET|HEAD)$/,
            We = /^\/\//,
            Qe = {},
            Ge = {},
            Xe = "*/".concat("*"),
            Ve = S.createElement("a");

        function Ue(r) {
            return function (t, e) {
                "string" != typeof t && (e = t, t = "*");
                var n, i = 0,
                    o = t.toLowerCase().match(M) || [];
                if (b(e))
                    for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e)
            }
        }

        function Ye(e, o, r, s) {
            var a = {},
                l = e === Ge;

            function c(t) {
                var i;
                return a[t] = !0, $.each(e[t] || [], function (t, e) {
                    var n = e(o, r, s);
                    return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
                }), i
            }
            return c(o.dataTypes[0]) || !a["*"] && c("*")
        }

        function Ze(t, e) {
            var n, i, o = $.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i = i || {})[n] = e[n]);
            return i && $.extend(!0, t, i), t
        }
        Ve.href = Le.href, $.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Le.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Le.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": $.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? Ze(Ze(t, $.ajaxSettings), e) : Ze($.ajaxSettings, t)
            },
            ajaxPrefilter: Ue(Qe),
            ajaxTransport: Ue(Ge),
            ajax: function (t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var u, d, h, n, f, i, p, m, o, r, g = $.ajaxSetup({}, e),
                    v = g.context || g,
                    y = g.context && (v.nodeType || v.jquery) ? $(v) : $.event,
                    b = $.Deferred(),
                    x = $.Callbacks("once memory"),
                    w = g.statusCode || {},
                    s = {},
                    a = {},
                    l = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (p) {
                                if (!n)
                                    for (n = {}; e = He.exec(h);) n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = n[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function () {
                            return p ? h : null
                        },
                        setRequestHeader: function (t, e) {
                            return null == p && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, s[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return null == p && (g.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (p) C.always(t[C.status]);
                                else
                                    for (e in t) w[e] = [w[e], t[e]];
                            return this
                        },
                        abort: function (t) {
                            var e = t || l;
                            return u && u.abort(e), c(0, e), this
                        }
                    };
                if (b.promise(C), g.url = ((t || g.url || Le.href) + "").replace(We, Le.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(M) || [""], null == g.crossDomain) {
                    i = S.createElement("a");
                    try {
                        i.href = g.url, i.href, g.crossDomain = Ve.protocol + "//" + Ve.host != i.protocol + "//" + i.host
                    } catch (t) {
                        g.crossDomain = !0
                    }
                }
                if (g.data && g.processData && "string" != typeof g.data && (g.data = $.param(g.data, g.traditional)), Ye(Qe, g, e, C), p) return C;
                for (o in (m = $.event && g.global) && 0 == $.active++ && $.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Be.test(g.type), d = g.url.replace(Ie, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(qe, "+")) : (r = g.url.slice(d.length), g.data && (g.processData || "string" == typeof g.data) && (d += (De.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(Re, "$1"), r = (De.test(d) ? "&" : "?") + "_=" + je.guid++ + r), g.url = d + r), g.ifModified && ($.lastModified[d] && C.setRequestHeader("If-Modified-Since", $.lastModified[d]), $.etag[d] && C.setRequestHeader("If-None-Match", $.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && C.setRequestHeader("Content-Type", g.contentType), C.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : g.accepts["*"]), g.headers) C.setRequestHeader(o, g.headers[o]);
                if (g.beforeSend && (!1 === g.beforeSend.call(v, C, g) || p)) return C.abort();
                if (l = "abort", x.add(g.complete), C.done(g.success), C.fail(g.error), u = Ye(Ge, g, e, C)) {
                    if (C.readyState = 1, m && y.trigger("ajaxSend", [C, g]), p) return C;
                    g.async && 0 < g.timeout && (f = _.setTimeout(function () {
                        C.abort("timeout")
                    }, g.timeout));
                    try {
                        p = !1, u.send(s, c)
                    } catch (t) {
                        if (p) throw t;
                        c(-1, t)
                    }
                } else c(-1, "No Transport");

                function c(t, e, n, i) {
                    var o, r, s, a, l, c = e;
                    p || (p = !0, f && _.clearTimeout(f), u = void 0, h = i || "", C.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, n && (a = function (t, e, n) {
                        for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) {
                                    l.unshift(o);
                                    break
                                } if (l[0] in n) r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s = s || o
                            }
                            r = r || s
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r]
                    }(g, C, n)), !o && -1 < $.inArray("script", g.dataTypes) && (g.converters["text script"] = function () {}), a = function (t, e, n, i) {
                        var o, r, s, a, l, c = {},
                            u = t.dataTypes.slice();
                        if (u[1])
                            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                        for (r = u.shift(); r;)
                            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(g, a, C, o), o ? (g.ifModified && ((l = C.getResponseHeader("Last-Modified")) && ($.lastModified[d] = l), (l = C.getResponseHeader("etag")) && ($.etag[d] = l)), 204 === t || "HEAD" === g.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, !t && c || (c = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || c) + "", o ? b.resolveWith(v, [r, c, C]) : b.rejectWith(v, [C, c, s]), C.statusCode(w), w = void 0, m && y.trigger(o ? "ajaxSuccess" : "ajaxError", [C, g, o ? r : s]), x.fireWith(v, [C, c]), m && (y.trigger("ajaxComplete", [C, g]), --$.active || $.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function (t, e, n) {
                return $.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return $.get(t, void 0, e, "script")
            }
        }), $.each(["get", "post"], function (t, o) {
            $[o] = function (t, e, n, i) {
                return b(e) && (i = i || n, n = e, e = void 0), $.ajax($.extend({
                    url: t,
                    type: o,
                    dataType: i,
                    data: e,
                    success: n
                }, $.isPlainObject(t) && t))
            }
        }), $.ajaxPrefilter(function (t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        }), $._evalUrl = function (t, e, n) {
            return $.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {}
                },
                dataFilter: function (t) {
                    $.globalEval(t, e, n)
                }
            })
        }, $.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (b(t) && (t = t.call(this[0])), e = $(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function (n) {
                return b(n) ? this.each(function (t) {
                    $(this).wrapInner(n.call(this, t))
                }) : this.each(function () {
                    var t = $(this),
                        e = t.contents();
                    e.length ? e.wrapAll(n) : t.append(n)
                })
            },
            wrap: function (e) {
                var n = b(e);
                return this.each(function (t) {
                    $(this).wrapAll(n ? e.call(this, t) : e)
                })
            },
            unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    $(this).replaceWith(this.childNodes)
                }), this
            }
        }), $.expr.pseudos.hidden = function (t) {
            return !$.expr.pseudos.visible(t)
        }, $.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, $.ajaxSettings.xhr = function () {
            try {
                return new _.XMLHttpRequest
            } catch (t) {}
        };
        var Je = {
                0: 200,
                1223: 204
            },
            Ke = $.ajaxSettings.xhr();
        y.cors = !!Ke && "withCredentials" in Ke, y.ajax = Ke = !!Ke, $.ajaxTransport(function (o) {
            var r, s;
            if (y.cors || Ke && !o.crossDomain) return {
                send: function (t, e) {
                    var n, i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (n in o.xhrFields) i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
                    r = function (t) {
                        return function () {
                            r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Je[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                        4 === i.readyState && _.setTimeout(function () {
                            r && s()
                        })
                    }, r = r("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (t) {
                        if (r) throw t
                    }
                },
                abort: function () {
                    r && r()
                }
            }
        }), $.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), $.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return $.globalEval(t), t
                }
            }
        }), $.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), $.ajaxTransport("script", function (n) {
            var i, o;
            if (n.crossDomain || n.scriptAttrs) return {
                send: function (t, e) {
                    i = $("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function (t) {
                        i.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
                    }), S.head.appendChild(i[0])
                },
                abort: function () {
                    o && o()
                }
            }
        });
        var tn, en = [],
            nn = /(=)\?(?=&|$)|\?\?/;
        $.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = en.pop() || $.expando + "_" + je.guid++;
                return this[t] = !0, t
            }
        }), $.ajaxPrefilter("json jsonp", function (t, e, n) {
            var i, o, r, s = !1 !== t.jsonp && (nn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = b(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nn, "$1" + i) : !1 !== t.jsonp && (t.url += (De.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return r || $.error(i + " was not called"), r[0]
            }, t.dataTypes[0] = "json", o = _[i], _[i] = function () {
                r = arguments
            }, n.always(function () {
                void 0 === o ? $(_).removeProp(i) : _[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, en.push(i)), r && b(o) && o(r[0]), r = o = void 0
            }), "script"
        }), y.createHTMLDocument = ((tn = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === tn.childNodes.length), $.parseHTML = function (t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((i = (e = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, e.head.appendChild(i)) : e = S), r = !n && [], (o = F.exec(t)) ? [e.createElement(o[1])] : (o = bt([t], e, r), r && r.length && $(r).remove(), $.merge([], o.childNodes)));
            var i, o, r
        }, $.fn.load = function (t, e, n) {
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return -1 < a && (i = Te(t.slice(a)), t = t.slice(0, a)), b(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && $.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                r = arguments, s.html(i ? $("<div>").append($.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                s.each(function () {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }), this
        }, $.expr.pseudos.animated = function (e) {
            return $.grep($.timers, function (t) {
                return e === t.elem
            }).length
        }, $.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, s, a, l, c = $.css(t, "position"),
                    u = $(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), r = $.css(t, "top"), l = $.css(t, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), b(e) && (e = e.call(t, n, $.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
            }
        }, $.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    $.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === $.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === $.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((o = $(t).offset()).top += $.css(t, "borderTopWidth", !0), o.left += $.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - $.css(i, "marginTop", !0),
                        left: e.left - o.left - $.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === $.css(t, "position");) t = t.offsetParent;
                    return t || it
                })
            }
        }), $.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, o) {
            var r = "pageYOffset" === o;
            $.fn[e] = function (t) {
                return H(this, function (t, e, n) {
                    var i;
                    return m(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n ? i ? i[o] : t[e] : void(i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : t[e] = n)
                }, e, t, arguments.length)
            }
        }), $.each(["top", "left"], function (t, n) {
            $.cssHooks[n] = Yt(y.pixelPosition, function (t, e) {
                if (e) return e = Ut(t, n), Gt.test(e) ? $(t).position()[n] + "px" : e
            })
        }), $.each({
            Height: "height",
            Width: "width"
        }, function (s, a) {
            $.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function (i, r) {
                $.fn[r] = function (t, e) {
                    var n = arguments.length && (i || "boolean" != typeof t),
                        o = i || (!0 === t || !0 === e ? "margin" : "border");
                    return H(this, function (t, e, n) {
                        var i;
                        return m(t) ? 0 === r.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? $.css(t, e, o) : $.style(t, e, n, o)
                    }, a, n ? t : void 0, n)
                }
            })
        }), $.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            $.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), $.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), $.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
            $.fn[n] = function (t, e) {
                return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
            }
        });
        var on = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        $.proxy = function (t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e], e = t, t = n), b(t)) return i = a.call(arguments, 2), (o = function () {
                return t.apply(e || this, i.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || $.guid++, o
        }, $.holdReady = function (t) {
            t ? $.readyWait++ : $.ready(!0)
        }, $.isArray = Array.isArray, $.parseJSON = JSON.parse, $.nodeName = E, $.isFunction = b, $.isWindow = m, $.camelCase = G, $.type = w, $.now = Date.now, $.isNumeric = function (t) {
            var e = $.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, $.trim = function (t) {
            return null == t ? "" : (t + "").replace(on, "")
        }, "function" == typeof define && define.amd && define("jquery", [], function () {
            return $
        });
        var rn = _.jQuery,
            sn = _.$;
        return $.noConflict = function (t) {
            return _.$ === $ && (_.$ = sn), t && _.jQuery === $ && (_.jQuery = rn), $
        }, void 0 === t && (_.jQuery = _.$ = $), $
    }), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return e(t, window)
        }) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window)
    }(function (a, i) {
        "use strict";

        function t(t) {
            return 0 <= function (t, e) {
                for (var n = /^(\d+)\.(\d+)\.(\d+)/, i = n.exec(t) || [], o = n.exec(e) || [], r = 1; r <= 3; r++) {
                    if (+o[r] < +i[r]) return 1;
                    if (+i[r] < +o[r]) return -1
                }
                return 0
            }(a.fn.jquery, t)
        }
        a.migrateVersion = "3.3.1", i.console && i.console.log && (a && t("3.0.0") || i.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), a.migrateWarnings && i.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), i.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion));
        var n = {};

        function l(t) {
            var e = i.console;
            a.migrateDeduplicateWarnings && n[t] || (n[t] = !0, a.migrateWarnings.push(t), e && e.warn && !a.migrateMute && (e.warn("JQMIGRATE: " + t), a.migrateTrace && e.trace && e.trace()))
        }

        function e(t, e, n, i) {
            Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return l(i), n
                },
                set: function (t) {
                    l(i), n = t
                }
            })
        }

        function o(t, e, n, i) {
            t[e] = function () {
                return l(i), n.apply(this, arguments)
            }
        }
        a.migrateDeduplicateWarnings = !0, a.migrateWarnings = [], void 0 === a.migrateTrace && (a.migrateTrace = !0), a.migrateReset = function () {
            n = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === i.document.compatMode && l("jQuery is not compatible with Quirks Mode");
        var r, s, c = {},
            u = a.fn.init,
            d = a.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (r in a.fn.init = function (t) {
                var e = Array.prototype.slice.call(arguments);
                return "string" == typeof t && "#" === t && (l("jQuery( '#' ) is not a valid selector"), e[0] = []), u.apply(this, e)
            }, a.fn.init.prototype = a.fn, a.find = function (e) {
                var n = Array.prototype.slice.call(arguments);
                if ("string" == typeof e && h.test(e)) try {
                    i.document.querySelector(e)
                } catch (t) {
                    e = e.replace(f, function (t, e, n, i) {
                        return "[" + e + n + '"' + i + '"]'
                    });
                    try {
                        i.document.querySelector(e), l("Attribute selector with '#' must be quoted: " + n[0]), n[0] = e
                    } catch (t) {
                        l("Attribute selector with '#' was not fixed: " + n[0])
                    }
                }
                return d.apply(this, n)
            }, d) Object.prototype.hasOwnProperty.call(d, r) && (a.find[r] = d[r]);
        o(a.fn, "size", function () {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(a, "parseJSON", function () {
            return JSON.parse.apply(null, arguments)
        }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(a, "holdReady", a.holdReady, "jQuery.holdReady is deprecated"), o(a, "unique", a.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), e(a.expr, "filters", a.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), e(a.expr, ":", a.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), t("3.1.1") && o(a, "trim", function (t) {
            return null == t ? "" : (t + "").replace(p, "")
        }, "jQuery.trim is deprecated; use String.prototype.trim"), t("3.2.0") && o(a, "nodeName", function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, "jQuery.nodeName is deprecated"), t("3.3.0") && (o(a, "isNumeric", function (t) {
            var e = typeof t;
            return ("number" == e || "string" == e) && !isNaN(t - parseFloat(t))
        }, "jQuery.isNumeric() is deprecated"), a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            c["[object " + e + "]"] = e.toLowerCase()
        }), o(a, "type", function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[Object.prototype.toString.call(t)] || "object" : typeof t
        }, "jQuery.type is deprecated"), o(a, "isFunction", function (t) {
            return "function" == typeof t
        }, "jQuery.isFunction() is deprecated"), o(a, "isWindow", function (t) {
            return null != t && t === t.window
        }, "jQuery.isWindow() is deprecated"), o(a, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), a.ajax && (s = a.ajax, a.ajax = function () {
            var t = s.apply(this, arguments);
            return t.promise && (o(t, "success", t.done, "jQXHR.success is deprecated and removed"), o(t, "error", t.fail, "jQXHR.error is deprecated and removed"), o(t, "complete", t.always, "jQXHR.complete is deprecated and removed")), t
        });
        var m = a.fn.removeAttr,
            g = a.fn.toggleClass,
            v = /\S+/g;

        function y(t) {
            return t.replace(/-([a-z])/g, function (t, e) {
                return e.toUpperCase()
            })
        }
        a.fn.removeAttr = function (t) {
            var n = this;
            return a.each(t.match(v), function (t, e) {
                a.expr.match.bool.test(e) && (l("jQuery.fn.removeAttr no longer sets boolean properties: " + e), n.prop(e, !1))
            }), m.apply(this, arguments)
        };
        var b, x = !(a.fn.toggleClass = function (e) {
                return void 0 !== e && "boolean" != typeof e ? g.apply(this, arguments) : (l("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
                    var t = this.getAttribute && this.getAttribute("class") || "";
                    t && a.data(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== e && a.data(this, "__className__") || "")
                }))
            }),
            w = /^[a-z]/,
            C = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function (t, e) {
            var n = a.cssHooks[e] && a.cssHooks[e].get;
            n && (a.cssHooks[e].get = function () {
                var t;
                return x = !0, t = n.apply(this, arguments), x = !1, t
            })
        }), a.swap = function (t, e, n, i) {
            var o, r, s = {};
            for (r in x || l("jQuery.swap() is undocumented and deprecated"), e) s[r] = t.style[r], t.style[r] = e[r];
            for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
            return o
        }, t("3.4.0") && "undefined" != typeof Proxy && (a.cssProps = new Proxy(a.cssProps || {}, {
            set: function () {
                return l("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), a.cssNumber || (a.cssNumber = {}), b = a.fn.css, a.fn.css = function (t, e) {
            var n, i, o = this;
            return t && "object" == typeof t && !Array.isArray(t) && a.each(t, function (t, e) {
                a.fn.css.call(o, t, e)
            }), "number" == typeof e && (i = n = y(t), w.test(i) && C.test(i[0].toUpperCase() + i.slice(1)) || a.cssNumber[n] || l('Number-typed values are deprecated for jQuery.fn.css( "' + t + '", value )')), b.apply(this, arguments)
        };
        var _, S, $, T, E = a.data;
        a.data = function (t, e, n) {
            var i, o, r;
            if (e && "object" == typeof e && 2 === arguments.length) {
                for (r in i = a.hasData(t) && E.call(this, t), o = {}, e) r !== y(r) ? (l("jQuery.data() always sets/gets camelCased names: " + r), i[r] = e[r]) : o[r] = e[r];
                return E.call(this, t, o), e
            }
            return e && "string" == typeof e && e !== y(e) && (i = a.hasData(t) && E.call(this, t)) && e in i ? (l("jQuery.data() always sets/gets camelCased names: " + e), 2 < arguments.length && (i[e] = n), i[e]) : E.apply(this, arguments)
        }, a.fx && ($ = a.Tween.prototype.run, T = function (t) {
            return t
        }, a.Tween.prototype.run = function () {
            1 < a.easing[this.easing].length && (l("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), a.easing[this.easing] = T), $.apply(this, arguments)
        }, _ = a.fx.interval || 13, S = "jQuery.fx.interval is deprecated", i.requestAnimationFrame && Object.defineProperty(a.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
                return i.document.hidden || l(S), _
            },
            set: function (t) {
                l(S), _ = t
            }
        }));
        var F = a.fn.load,
            k = a.event.add,
            P = a.event.fix;

        function A(t) {
            var e = i.document.implementation.createHTMLDocument("");
            return e.body.innerHTML = t, e.body && e.body.innerHTML
        }

        function L(t) {
            var e = t.replace(j, "<$1></$2>");
            e !== t && A(t) !== A(e) && l("HTML tags must be properly nested and closed: " + t)
        }
        a.event.props = [], a.event.fixHooks = {}, e(a.event.props, "concat", a.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), a.event.fix = function (t) {
            var e, n = t.type,
                i = this.fixHooks[n],
                o = a.event.props;
            if (o.length)
                for (l("jQuery.event.props are deprecated and removed: " + o.join()); o.length;) a.event.addProp(o.pop());
            if (i && !i._migrated_ && (i._migrated_ = !0, l("jQuery.event.fixHooks are deprecated and removed: " + n), (o = i.props) && o.length))
                for (; o.length;) a.event.addProp(o.pop());
            return e = P.call(this, t), i && i.filter ? i.filter(e, t) : e
        }, a.event.add = function (t, e) {
            return t === i && "load" === e && "complete" === i.document.readyState && l("jQuery(window).on('load'...) called after load event occurred"), k.apply(this, arguments)
        }, a.each(["load", "unload", "error"], function (t, e) {
            a.fn[e] = function () {
                var t = Array.prototype.slice.call(arguments, 0);
                return "load" === e && "string" == typeof t[0] ? F.apply(this, t) : (l("jQuery.fn." + e + "() is deprecated"), t.splice(0, 0, e), arguments.length ? this.on.apply(this, t) : (this.triggerHandler.apply(this, t), this))
            }
        }), a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
            a.fn[n] = function (t, e) {
                return l("jQuery.fn." + n + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
            }
        }), a(function () {
            a(i.document).triggerHandler("ready")
        }), a.event.special.ready = {
            setup: function () {
                this === i.document && l("'ready' event is deprecated")
            }
        }, a.fn.extend({
            bind: function (t, e, n) {
                return l("jQuery.fn.bind() is deprecated"), this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return l("jQuery.fn.unbind() is deprecated"), this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return l("jQuery.fn.delegate() is deprecated"), this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return l("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            hover: function (t, e) {
                return l("jQuery.fn.hover() is deprecated"), this.on("mouseenter", t).on("mouseleave", e || t)
            }
        });
        var j = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            D = a.htmlPrefilter;
        a.UNSAFE_restoreLegacyHtmlPrefilter = function () {
            a.htmlPrefilter = function (t) {
                return L(t), t.replace(j, "<$1></$2>")
            }
        }, a.htmlPrefilter = function (t) {
            return L(t), D(t)
        };
        var M, z = a.fn.offset;
        a.fn.offset = function () {
            var t = this[0];
            return !t || t.nodeType && t.getBoundingClientRect ? z.apply(this, arguments) : (l("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, a.ajax && (M = a.param, a.param = function (t, e) {
            var n = a.ajaxSettings && a.ajaxSettings.traditional;
            return void 0 === e && n && (l("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), e = n), M.call(this, t, e)
        });
        var O, N, q = a.fn.andSelf || a.fn.addBack;
        return a.fn.andSelf = function () {
            return l("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), q.apply(this, arguments)
        }, a.Deferred && (O = a.Deferred, N = [
            ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
            ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
            ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
        ], a.Deferred = function (t) {
            var r = O(),
                s = r.promise();
            return r.pipe = s.pipe = function () {
                var o = arguments;
                return l("deferred.pipe() is deprecated"), a.Deferred(function (i) {
                    a.each(N, function (t, e) {
                        var n = "function" == typeof o[t] && o[t];
                        r[e[1]](function () {
                            var t = n && n.apply(this, arguments);
                            t && "function" == typeof t.promise ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[e[0] + "With"](this === s ? i.promise() : this, n ? [t] : arguments)
                        })
                    }), o = null
                }).promise()
            }, t && t.call(r, r), r
        }, a.Deferred.exceptionHook = O.exceptionHook), a
    }), function (c, a, m, g) {
        "use strict";

        function n(t) {
            var e = m(t.currentTarget),
                n = t.data ? t.data.options : {},
                i = e.attr("data-fancybox") || "",
                o = 0,
                r = [];
            t.isDefaultPrevented() || (t.preventDefault(), i ? (o = (r = (r = n.selector ? m(n.selector) : t.data ? t.data.items : []).length ? r.filter('[data-fancybox="' + i + '"]') : m('[data-fancybox="' + i + '"]')).index(e)) < 0 && (o = 0) : r = [e], m.fancybox.open(r, n, o))
        }
        if (m) {
            if (m.fn.fancybox) return "console" in c && console.log("fancyBox already initialized");
            var t = {
                    loop: !1,
                    margin: [44, 0],
                    gutter: 50,
                    keyboard: !0,
                    arrows: !0,
                    infobar: !0,
                    toolbar: !0,
                    buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                    idleTime: 3,
                    smallBtn: "auto",
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: "auto"
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 500,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                    btnTpl: {
                        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
                    },
                    parentEl: "body",
                    autoFocus: !1,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 4e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0,
                        parentEl: ".fancybox-container",
                        axis: "y"
                    },
                    wheel: "auto",
                    onInit: m.noop,
                    beforeLoad: m.noop,
                    afterLoad: m.noop,
                    beforeShow: m.noop,
                    afterShow: m.noop,
                    beforeClose: m.noop,
                    afterClose: m.noop,
                    onActivate: m.noop,
                    onDeactivate: m.noop,
                    clickContent: function (t, e) {
                        return "image" === t.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        idleTime: !1,
                        margin: 0,
                        clickContent: function (t, e) {
                            return "image" === t.type && "toggleControls"
                        },
                        clickSlide: function (t, e) {
                            return "image" === t.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function (t, e) {
                            return "image" === t.type && "zoom"
                        },
                        dblclickSlide: function (t, e) {
                            return "image" === t.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom"
                        },
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "Zurück",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Maßstab"
                        }
                    }
                },
                r = m(c),
                l = m(a),
                o = 0,
                d = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function (t) {
                    return c.setTimeout(t, 1e3 / 60)
                },
                h = function () {
                    var t, e = a.createElement("fakeelement"),
                        n = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (t in n)
                        if (e.style[t] !== g) return n[t];
                    return "transitionend"
                }(),
                f = function (t) {
                    return t && t.length && t[0].offsetHeight
                },
                i = function (t, e, n) {
                    var i = this;
                    i.opts = m.extend(!0, {
                        index: n
                    }, m.fancybox.defaults, e || {}), m.fancybox.isMobile && (i.opts = m.extend(!0, {}, i.opts, i.opts.mobile)), e && m.isArray(e.buttons) && (i.opts.buttons = e.buttons), i.id = i.opts.id || ++o, i.group = [], i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = null, i.createGroup(t), i.group.length && (i.$lastFocus = m(a.activeElement).blur(), i.slides = {}, i.init())
                };
            m.extend(i.prototype, {
                init: function () {
                    var t, e, n, i = this,
                        o = i.group[i.currIndex],
                        r = o.opts,
                        s = m.fancybox.scrollbarWidth;
                    i.scrollTop = l.scrollTop(), i.scrollLeft = l.scrollLeft(), m.fancybox.getInstance() || (m("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !c.MSStream ? "image" !== o.type && m("body").css("top", -1 * m("body").scrollTop()).addClass("fancybox-iosfix") : !m.fancybox.isMobile && a.body.scrollHeight > c.innerHeight && (s === g && (t = m('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), s = m.fancybox.scrollbarWidth = t[0].offsetWidth - t[0].clientWidth, t.remove()), m("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + s + "px; }</style>"), m("body").addClass("compensate-for-scrollbar"))), n = "", m.each(r.buttons, function (t, e) {
                        n += r.btnTpl[e] || ""
                    }), e = m(i.translate(i, r.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass("fancybox-is-hidden").addClass(r.baseClass).data("FancyBox", i).appendTo(r.parentEl), i.$refs = {
                        container: e
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                        i.$refs[t] = e.find(".fancybox-" + t)
                    }), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
                },
                translate: function (t, e) {
                    var i = t.opts.i18n[t.opts.lang];
                    return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                        var n = i[e];
                        return n === g ? t : n
                    })
                },
                createGroup: function (t) {
                    var c = this,
                        e = m.makeArray(t);
                    m.each(e, function (t, e) {
                        var n, i, o, r, s, a = {},
                            l = {};
                        m.isPlainObject(e) ? l = (a = e).opts || e : "object" === m.type(e) && m(e).length ? (l = (n = m(e)).data(), (l = m.extend({}, l, l.options || {})).$orig = n, a.src = l.src || n.attr("href"), a.type || a.src || (a.type = "inline", a.src = e)) : a = {
                            type: "html",
                            src: e + ""
                        }, a.opts = m.extend(!0, {}, c.opts, l), m.isArray(l.buttons) && (a.opts.buttons = l.buttons), i = a.type || a.opts.type, r = a.src || "", !i && r && (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? i = "pdf" : (o = r.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (i = "video", a.opts.videoFormat || (a.opts.videoFormat = "video/" + ("ogv" === o[1] ? "ogg" : o[1]))) : "#" === r.charAt(0) && (i = "inline")), i ? a.type = i : c.trigger("objectNeedsType", a), a.index = c.group.length, a.opts.$orig && !a.opts.$orig.length && delete a.opts.$orig, !a.opts.$thumb && a.opts.$orig && (a.opts.$thumb = a.opts.$orig.find("img:first")), a.opts.$thumb && !a.opts.$thumb.length && delete a.opts.$thumb, "function" === m.type(a.opts.caption) && (a.opts.caption = a.opts.caption.apply(e, [c, a])), "function" === m.type(c.opts.caption) && (a.opts.caption = c.opts.caption.apply(e, [c, a])), a.opts.caption instanceof m || (a.opts.caption = a.opts.caption === g ? "" : a.opts.caption + ""), "ajax" !== i || 1 < (s = r.split(/\s+/, 2)).length && (a.src = s.shift(), a.opts.filter = s.shift()), "auto" == a.opts.smallBtn && (-1 < m.inArray(i, ["html", "inline", "ajax"]) ? (a.opts.toolbar = !1, a.opts.smallBtn = !0) : a.opts.smallBtn = !1), "pdf" === i && (a.type = "iframe", a.opts.iframe.preload = !1), a.opts.modal && (a.opts = m.extend(!0, a.opts, {
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), c.group.push(a)
                    })
                },
                addEvents: function () {
                    var i = this;
                    i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                        t.stopPropagation(), t.preventDefault(), i.close(t)
                    }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function (t) {
                        t.stopPropagation(), t.preventDefault(), i.previous()
                    }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function (t) {
                        t.stopPropagation(), t.preventDefault(), i.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                        i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), r.on("orientationchange.fb resize.fb", function (t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? d(function () {
                            i.update()
                        }) : (i.$refs.stage.hide(), setTimeout(function () {
                            i.$refs.stage.show(), i.update()
                        }, 600))
                    }), l.on("focusin.fb", function (t) {
                        var e = m.fancybox ? m.fancybox.getInstance() : null;
                        e.isClosing || !e.current || !e.current.opts.trapFocus || m(t.target).hasClass("fancybox-container") || m(t.target).is(a) || e && "fixed" !== m(t.target).css("position") && !e.$refs.container.has(t.target).length && (t.stopPropagation(), e.focus(), r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                    }), l.on("keydown.fb", function (t) {
                        var e = i.current,
                            n = t.keyCode || t.which;
                        if (e && e.opts.keyboard && !m(t.target).is("input") && !m(t.target).is("textarea")) return 8 === n || 27 === n ? (t.preventDefault(), void i.close(t)) : 37 === n || 38 === n ? (t.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, n)
                    }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                        i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                    }), i.idleInterval = c.setInterval(function () {
                        i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                    }, 1e3))
                },
                removeEvents: function () {
                    r.off("orientationchange.fb resize.fb"), l.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null)
                },
                previous: function (t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function (t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function (t, i, e) {
                    var n, o, r, s, a, l, c, u = this,
                        d = u.group.length;
                    if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
                        if (t = parseInt(t, 10), !(o = u.current ? u.current.opts.loop : u.opts.loop) && (t < 0 || d <= t)) return !1;
                        if (n = u.firstRun = null === u.firstRun, !(d < 2 && !n && u.isDragging)) {
                            if (s = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, r = u.createSlide(t), 1 < d && ((o || 0 < r.index) && u.createSlide(t - 1), (o || r.index < d - 1) && u.createSlide(t + 1)), u.current = r, u.currIndex = r.index, u.currPos = r.pos, u.trigger("beforeShow", n), u.updateControls(), l = m.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== l.left || 0 !== l.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = g, m.isNumeric(i) ? r.forcedDuration = i : i = r.opts[n ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), n) return r.opts.animationEffect && i && u.$refs.container.css("transition-duration", i + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), f(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), u.loadSlide(r), void u.preload("image");
                            m.each(u.slides, function (t, e) {
                                m.fancybox.stop(e.$slide)
                            }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (a = Math.round(r.$slide.width()), m.each(u.slides, function (t, e) {
                                var n = e.pos - r.pos;
                                m.fancybox.animate(e.$slide, {
                                    top: 0,
                                    left: n * a + n * e.opts.gutter
                                }, i, function () {
                                    e.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === u.currPos && (r.isMoved = !1, u.complete())
                                })
                            })) : u.$refs.stage.children().removeAttr("style"), r.isLoaded ? u.revealContent(r) : u.loadSlide(r), u.preload("image"), s.pos !== r.pos && (c = "fancybox-slide--" + (s.pos > r.pos ? "next" : "previous"), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), s.isComplete = !1, i && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? s.$slide.addClass(c) : (c = "fancybox-animated " + c + " fancybox-fx-" + r.opts.transitionEffect, m.fancybox.animate(s.$slide, c, i, function () {
                                s.$slide.removeClass(c).removeAttr("style")
                            }))))
                        }
                    }
                },
                createSlide: function (t) {
                    var e, n = this,
                        i = t % n.group.length;
                    return i = i < 0 ? n.group.length + i : i, !n.slides[t] && n.group[i] && (e = m('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[t] = m.extend(!0, {}, n.group[i], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), n.updateSlide(n.slides[t])), n.slides[t]
                },
                scaleToActual: function (t, e, n) {
                    var i, o, r, s, a, l = this,
                        c = l.current,
                        u = c.$content,
                        d = parseInt(c.$slide.width(), 10),
                        h = parseInt(c.$slide.height(), 10),
                        f = c.width,
                        p = c.height;
                    "image" != c.type || c.hasError || !u || l.isAnimating || (m.fancybox.stop(u), l.isAnimating = !0, t = t === g ? .5 * d : t, e = e === g ? .5 * h : e, s = f / (i = m.fancybox.getTranslate(u)).width, a = p / i.height, o = .5 * d - .5 * f, r = .5 * h - .5 * p, d < f && (0 < (o = i.left * s - (t * s - t)) && (o = 0), o < d - f && (o = d - f)), h < p && (0 < (r = i.top * a - (e * a - e)) && (r = 0), r < h - p && (r = h - p)), l.updateCursor(f, p), m.fancybox.animate(u, {
                        top: r,
                        left: o,
                        scaleX: s,
                        scaleY: a
                    }, n || 330, function () {
                        l.isAnimating = !1
                    }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
                },
                scaleToFit: function (t) {
                    var e, n = this,
                        i = n.current,
                        o = i.$content;
                    "image" != i.type || i.hasError || !o || n.isAnimating || (m.fancybox.stop(o), n.isAnimating = !0, e = n.getFitPos(i), n.updateCursor(e.width, e.height), m.fancybox.animate(o, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / o.width(),
                        scaleY: e.height / o.height()
                    }, t || 330, function () {
                        n.isAnimating = !1
                    }))
                },
                getFitPos: function (t) {
                    var e, n, i, o, r, s = t.$content,
                        a = t.width,
                        l = t.height,
                        c = t.opts.margin;
                    return !(!s || !s.length || !a && !l) && ("number" === m.type(c) && (c = [c, c]), 2 == c.length && (c = [c[0], c[1], c[0], c[1]]), e = parseInt(this.$refs.stage.width(), 10) - (c[1] + c[3]), n = parseInt(this.$refs.stage.height(), 10) - (c[0] + c[2]), i = Math.min(1, e / a, n / l), o = Math.floor(i * a), r = Math.floor(i * l), {
                        top: Math.floor(.5 * (n - r)) + c[0],
                        left: Math.floor(.5 * (e - o)) + c[3],
                        width: o,
                        height: r
                    })
                },
                update: function () {
                    var n = this;
                    m.each(n.slides, function (t, e) {
                        n.updateSlide(e)
                    })
                },
                updateSlide: function (t, e) {
                    var n = this,
                        i = t && t.$content;
                    i && (t.width || t.height) && (n.isAnimating = !1, m.fancybox.stop(i), m.fancybox.setTranslate(i, n.getFitPos(t)), t.pos === n.currPos && n.updateCursor()), t.$slide.trigger("refresh"), n.trigger("onUpdate", t)
                },
                centerSlide: function (t, e) {
                    var n, i;
                    this.current && (n = Math.round(t.$slide.width()), i = t.pos - this.current.pos, m.fancybox.animate(t.$slide, {
                        top: 0,
                        left: i * n + i * t.opts.gutter,
                        opacity: 1
                    }, e === g ? 0 : e, null, !1))
                },
                updateCursor: function (t, e) {
                    var n = this,
                        i = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                    n.current && !n.isClosing && (n.isZoomable() ? (i.addClass("fancybox-is-zoomable"), (t !== g && e !== g ? t < n.current.width && e < n.current.height : n.isScaledDown()) ? i.addClass("fancybox-can-zoomIn") : n.current.opts.touch ? i.addClass("fancybox-can-drag") : i.addClass("fancybox-can-zoomOut")) : n.current.opts.touch && i.addClass("fancybox-can-drag"))
                },
                isZoomable: function () {
                    var t, e = this.current;
                    if (e && !this.isClosing) return !!("image" === e.type && e.isLoaded && !e.hasError && ("zoom" === e.opts.clickContent || m.isFunction(e.opts.clickContent) && "zoom" === e.opts.clickContent(e)) && (t = this.getFitPos(e), e.width > t.width || e.height > t.height))
                },
                isScaledDown: function () {
                    var t = this.current,
                        e = t.$content,
                        n = !1;
                    return e && (n = (n = m.fancybox.getTranslate(e)).width < t.width || n.height < t.height), n
                },
                canPan: function () {
                    var t = this.current,
                        e = t.$content,
                        n = !1;
                    return e && (n = this.getFitPos(t), n = 1 < Math.abs(e.width() - n.width) || 1 < Math.abs(e.height() - n.height)), n
                },
                loadSlide: function (n) {
                    var t, e, i, o = this;
                    if (!n.isLoading && !n.isLoaded) {
                        switch (n.isLoading = !0, o.trigger("beforeLoad", n), t = n.type, (e = n.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(n.opts.slideClass), t) {
                            case "image":
                                o.setImage(n);
                                break;
                            case "iframe":
                                o.setIframe(n);
                                break;
                            case "html":
                                o.setContent(n, n.src || n.content);
                                break;
                            case "inline":
                                m(n.src).length ? o.setContent(n, m(n.src)) : o.setError(n);
                                break;
                            case "ajax":
                                o.showLoading(n), i = m.ajax(m.extend({}, n.opts.ajax.settings, {
                                    url: n.src,
                                    success: function (t, e) {
                                        "success" === e && o.setContent(n, t)
                                    },
                                    error: function (t, e) {
                                        t && "abort" !== e && o.setError(n)
                                    }
                                })), e.one("onReset", function () {
                                    i.abort()
                                });
                                break;
                            case "video":
                                o.setContent(n, '<video controls><source src="' + n.src + '" type="' + n.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video>");
                                break;
                            default:
                                o.setError(n)
                        }
                        return !0
                    }
                },
                setImage: function (t) {
                    var e, n, i, o, r = this,
                        s = t.opts.srcset || t.opts.image.srcset;
                    if (s) {
                        i = c.devicePixelRatio || 1, o = c.innerWidth * i, (n = s.split(",").map(function (t) {
                            var i = {};
                            return t.trim().split(/\s+/).forEach(function (t, e) {
                                var n = parseInt(t.substring(0, t.length - 1), 10);
                                return 0 === e ? i.url = t : void(n && (i.value = n, i.postfix = t[t.length - 1]))
                            }), i
                        })).sort(function (t, e) {
                            return t.value - e.value
                        });
                        for (var a = 0; a < n.length; a++) {
                            var l = n[a];
                            if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= i) {
                                e = l;
                                break
                            }
                        }!e && n.length && (e = n[n.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value))
                    }
                    t.$content = m('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = m("<img />").one("error", function () {
                        m(this).remove(), t.$ghost = null, r.setBigImage(t)
                    }).one("load", function () {
                        r.afterLoad(t), r.setBigImage(t)
                    }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : r.setBigImage(t)
                },
                setBigImage: function (t) {
                    var e = this,
                        n = m("<img />");
                    t.$image = n.one("error", function () {
                        e.setError(t)
                    }).one("load", function () {
                        clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = t.opts.width || this.naturalWidth, t.height = t.opts.height || this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function () {
                            t.timouts = null, t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (n[0].complete || "complete" == n[0].readyState) && n[0].naturalWidth && n[0].naturalHeight ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function () {
                        n[0].complete || t.hasError || e.showLoading(t)
                    }, 100)
                },
                setIframe: function (r) {
                    var s, e = this,
                        a = r.opts.iframe,
                        t = r.$slide;
                    r.$content = m('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(t), s = m(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(r.$content), a.preload ? (e.showLoading(r), s.on("load.fb error.fb", function (t) {
                        this.isReady = 1, r.$slide.trigger("refresh"), e.afterLoad(r)
                    }), t.on("refresh.fb", function () {
                        var t, e, n = r.$content,
                            i = a.css.width,
                            o = a.css.height;
                        if (1 === s[0].isReady) {
                            try {
                                e = s.contents().find("body")
                            } catch (t) {}
                            e && e.length && (i === g && (t = s[0].contentWindow.document.documentElement.scrollWidth, i = Math.ceil(e.outerWidth(!0) + (n.width() - t)), i += n.outerWidth() - n.innerWidth()), o === g && (o = Math.ceil(e.outerHeight(!0)), o += n.outerHeight() - n.innerHeight()), i && n.width(i), o && n.height(o)), n.removeClass("fancybox-is-hidden")
                        }
                    })) : this.afterLoad(r), s.attr("src", r.src), !0 === r.opts.smallBtn && r.$content.prepend(e.translate(r, r.opts.btnTpl.smallBtn)), t.one("onReset", function () {
                        try {
                            m(this).find("iframe").hide().attr("src", "//about:blank")
                        } catch (t) {}
                        m(this).empty(), r.isLoaded = !1
                    })
                },
                setContent: function (t, e) {
                    var n;
                    this.isClosing || (this.hideLoading(t), t.$slide.empty(), (n = e) && n.hasOwnProperty && n instanceof m && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = m("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" !== m.type(e) || 3 === (e = m("<div>").append(m.trim(e)).contents())[0].nodeType && (e = m("<div>").html(e)), t.opts.filter && (e = m("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                        m(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (m(this).empty(), t.isLoaded = !1)
                    }), t.$content = m(e).appendTo(t.$slide), this.afterLoad(t))
                },
                setError: function (t) {
                    t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
                },
                showLoading: function (t) {
                    (t = t || this.current) && !t.$spinner && (t.$spinner = m(this.opts.spinnerTpl).appendTo(t.$slide))
                },
                hideLoading: function (t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
                },
                afterLoad: function (t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = m(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && m('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
                },
                revealContent: function (e) {
                    var n, t, i, o = this,
                        r = e.$slide,
                        s = !1,
                        a = e.opts[o.firstRun ? "animationEffect" : "transitionEffect"],
                        l = e.opts[o.firstRun ? "animationDuration" : "transitionDuration"];
                    return l = parseInt(e.forcedDuration === g ? l : e.forcedDuration, 10), !e.isMoved && e.pos === o.currPos && l || (a = !1), "zoom" !== a || e.pos === o.currPos && l && "image" === e.type && !e.hasError && (s = o.getThumbPos(e)) || (a = "fade"), "zoom" === a ? ((i = o.getFitPos(e)).scaleX = i.width / s.width, i.scaleY = i.height / s.height, delete i.width, delete i.height, "auto" == (t = e.opts.zoomOpacity) && (t = .1 < Math.abs(e.width / e.height - s.width / s.height)), t && (s.opacity = .1, i.opacity = 1), m.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), s), f(e.$content), void m.fancybox.animate(e.$content, i, l, function () {
                        o.complete()
                    })) : (o.updateSlide(e), a ? (m.fancybox.stop(r), n = "fancybox-animated fancybox-slide--" + (e.pos >= o.prevPos ? "next" : "previous") + " fancybox-fx-" + a, r.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), e.$content.removeClass("fancybox-is-hidden"), f(r), void m.fancybox.animate(r, "fancybox-slide--current", l, function (t) {
                        r.removeClass(n).removeAttr("style"), e.pos === o.currPos && o.complete()
                    }, !0)) : (f(r), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === o.currPos && o.complete())))
                },
                getThumbPos: function (t) {
                    var e, n = !1,
                        i = t.opts.$thumb,
                        o = i ? i.offset() : 0;
                    return o && i[0].ownerDocument === a && function (t) {
                        for (var e = t[0], i = e.getBoundingClientRect(), n = []; null !== e.parentElement;) "hidden" !== m(e.parentElement).css("overflow") && "auto" !== m(e.parentElement).css("overflow") || n.push(e.parentElement.getBoundingClientRect()), e = e.parentElement;
                        return n.every(function (t) {
                            var e = Math.min(i.right, t.right) - Math.max(i.left, t.left),
                                n = Math.min(i.bottom, t.bottom) - Math.max(i.top, t.top);
                            return 0 < e && 0 < n
                        }) && 0 < i.bottom && 0 < i.right && i.left < m(c).width() && i.top < m(c).height()
                    }(i) && (e = this.$refs.stage.offset(), n = {
                        top: o.top - e.top + parseFloat(i.css("border-top-width") || 0),
                        left: o.left - e.left + parseFloat(i.css("border-left-width") || 0),
                        width: i.width(),
                        height: i.height(),
                        scaleX: 1,
                        scaleY: 1
                    }), n
                },
                complete: function () {
                    var n = this,
                        t = n.current,
                        i = {};
                    t.isMoved || !t.isLoaded || t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), f(t.$slide), t.$slide.addClass("fancybox-slide--complete"), m.each(n.slides, function (t, e) {
                        e.pos >= n.currPos - 1 && e.pos <= n.currPos + 1 ? i[e.pos] = e : e && (m.fancybox.stop(e.$slide), e.$slide.off().remove())
                    }), n.slides = i, n.updateCursor(), n.trigger("afterShow"), t.$slide.find("video,audio").first().trigger("play"), (m(a.activeElement).is("[disabled]") || t.opts.autoFocus && "image" != t.type && "iframe" !== t.type) && n.focus())
                },
                preload: function (t) {
                    var e = this,
                        n = e.slides[e.currPos + 1],
                        i = e.slides[e.currPos - 1];
                    n && n.type === t && e.loadSlide(n), i && i.type === t && e.loadSlide(i)
                },
                focus: function () {
                    var t, e = this.current;
                    this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (t = t && t.length ? t : this.$refs.container).focus())
                },
                activate: function () {
                    var e = this;
                    m(".fancybox-container").each(function () {
                        var t = m(this).data("FancyBox");
                        t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                    }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                },
                close: function (t, e) {
                    function n() {
                        c.cleanUp(t)
                    }
                    var i, o, r, s, a, l, c = this,
                        u = c.current;
                    return !c.isClosing && (!(c.isClosing = !0) === c.trigger("beforeClose", t) ? (c.isClosing = !1, d(function () {
                        c.update()
                    }), !1) : (c.removeEvents(), u.timouts && clearTimeout(u.timouts), r = u.$content, i = u.opts.animationEffect, o = m.isNumeric(e) ? e : i ? u.opts.animationDuration : 0, u.$slide.off(h).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), u.$slide.siblings().trigger("onReset").remove(), o && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), c.hideLoading(u), c.hideControls(), c.updateCursor(), "zoom" !== i || !0 !== t && r && o && "image" === u.type && !u.hasError && (l = c.getThumbPos(u)) || (i = "fade"), "zoom" === i ? (m.fancybox.stop(r), (a = m.fancybox.getTranslate(r)).width = a.width * a.scaleX, a.height = a.height * a.scaleY, "auto" == (s = u.opts.zoomOpacity) && (s = .1 < Math.abs(u.width / u.height - l.width / l.height)), s && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, a.width = l.width, a.height = l.height, m.fancybox.setTranslate(u.$content, a), f(u.$content), m.fancybox.animate(u.$content, l, o, n)) : i && o ? !0 === t ? setTimeout(n, o) : m.fancybox.animate(u.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, n) : n(), !0))
                },
                cleanUp: function (t) {
                    var e, n, i = this,
                        o = m("body");
                    i.current.$slide.trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", t), i.$lastFocus && i.current.opts.backFocus && i.$lastFocus.focus(), i.current = null, (e = m.fancybox.getInstance()) ? e.activate() : (r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft), o.removeClass("fancybox-active compensate-for-scrollbar"), o.hasClass("fancybox-iosfix") && (n = parseInt(a.body.style.top, 10), o.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * n)), m("#fancybox-style-noscroll").remove())
                },
                trigger: function (t, e) {
                    var n, i = Array.prototype.slice.call(arguments, 1),
                        o = this,
                        r = e && e.opts ? e : o.current;
                    return r ? i.unshift(r) : r = o, i.unshift(o), m.isFunction(r.opts[t]) && (n = r.opts[t].apply(r, i)), !1 === n ? n : void("afterClose" !== t && o.$refs ? o.$refs.container.trigger(t + ".fb", i) : l.trigger(t + ".fb", i))
                },
                updateControls: function (t) {
                    var e = this,
                        n = e.current,
                        i = n.index,
                        o = n.opts.caption,
                        r = e.$refs.container,
                        s = e.$refs.caption;
                    n.$slide.trigger("refresh"), e.$caption = o && o.length ? s.html(o) : null, e.isHiddenControls || e.isIdle || e.showControls(), r.find("[data-fancybox-count]").html(e.group.length), r.find("[data-fancybox-index]").html(i + 1), r.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && i <= 0), r.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && i >= e.group.length - 1), "image" === n.type ? r.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : r.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
                },
                hideControls: function () {
                    this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
                },
                showControls: function () {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        n = t.$refs.container;
                    t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length)).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
                },
                toggleControls: function () {
                    this.isHiddenControls ? this.showControls() : this.hideControls()
                }
            }), m.fancybox = {
                version: "3.2.10",
                defaults: t,
                getInstance: function (t) {
                    var e = m('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return e instanceof i && ("string" === m.type(t) ? e[t].apply(e, n) : "function" === m.type(t) && t.apply(e, n), e)
                },
                open: function (t, e, n) {
                    return new i(t, e, n)
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close())
                },
                destroy: function () {
                    this.close(!0), l.off("click.fb-start")
                },
                isMobile: a.createTouch !== g && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: (e = a.createElement("div"), c.getComputedStyle && c.getComputedStyle(e).getPropertyValue("transform") && !(a.documentMode && a.documentMode < 11)),
                getTranslate: function (t) {
                    var e, n;
                    return !(!t || !t.length) && ((e = (e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? (e = (e = e.split("(")[1]).split(")")[0]).split(",") : []).length ? e = (e = 10 < e.length ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat) : (e = [0, 0, 1, 1], (n = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"))) && (e[0] = parseFloat(n[2]), e[1] = parseFloat(n[1]))), {
                        top: e[0],
                        left: e[1],
                        scaleX: e[2],
                        scaleY: e[3],
                        opacity: parseFloat(t.css("opacity")),
                        width: t.width(),
                        height: t.height()
                    })
                },
                setTranslate: function (t, e) {
                    var n = "",
                        i = {};
                    if (t && e) return e.left === g && e.top === g || (n = (e.left === g ? t.position().left : e.left) + "px, " + (e.top === g ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== g && e.scaleY !== g && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== g && (i.opacity = e.opacity), e.width !== g && (i.width = e.width), e.height !== g && (i.height = e.height), t.css(i)
                },
                animate: function (e, n, t, i, o) {
                    m.isFunction(t) && (i = t, t = null), m.isPlainObject(n) || e.removeAttr("style"), e.on(h, function (t) {
                        t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName) || (m.fancybox.stop(e), m.isPlainObject(n) ? (n.scaleX !== g && n.scaleY !== g && (e.css("transition-duration", ""), n.width = Math.round(e.width() * n.scaleX), n.height = Math.round(e.height() * n.scaleY), n.scaleX = 1, n.scaleY = 1, m.fancybox.setTranslate(e, n)), !1 === o && e.removeAttr("style")) : !0 !== o && e.removeClass(n), m.isFunction(i) && i(t))
                    }), m.isNumeric(t) && e.css("transition-duration", t + "ms"), m.isPlainObject(n) ? m.fancybox.setTranslate(e, n) : e.addClass(n), n.scaleX && e.hasClass("fancybox-image-wrap") && e.parent().addClass("fancybox-is-scaling"), e.data("timer", setTimeout(function () {
                        e.trigger("transitionend")
                    }, t + 16))
                },
                stop: function (t) {
                    clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling")
                }
            }, m.fn.fancybox = function (t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? m("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, n) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, n), this
            }, l.on("click.fb-start", "[data-fancybox]", n)
        }
        var e
    }(window, document, window.jQuery || jQuery), function (h) {
        "use strict";

        function f(n, t, e) {
            if (n) return e = e || "", "object" === h.type(e) && (e = h.param(e, !0)), h.each(t, function (t, e) {
                n = n.replace("$" + t, e || "")
            }), e.length && (n += (0 < n.indexOf("?") ? "&" : "?") + e), n
        }
        var p = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            metacafe: {
                matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                type: "iframe",
                url: "//www.metacafe.com/embed/$1/?ap=1"
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "iframe",
                url: "//www.dailymotion.com/embed/video/$1"
            },
            vine: {
                matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                type: "iframe",
                url: "//vine.co/v/$1/embed/simple"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
        h(document).on("objectNeedsType.fb", function (t, e, o) {
            var r, s, a, l, c, n, u = o.src || "",
                d = !1,
                i = h.extend(!0, {}, p, o.opts.media);
            h.each(i, function (t, e) {
                if (s = u.match(e.matcher)) {
                    if (d = e.type, c = {}, e.paramPlace && s[e.paramPlace]) {
                        "?" == (l = s[e.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                        for (var n = 0; n < l.length; ++n) {
                            var i = l[n].split("=", 2);
                            2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
                        }
                    }
                    return a = h.extend(!0, {}, e.params, o.opts[t], c), u = "function" === h.type(e.url) ? e.url.call(this, s, a, o) : f(e.url, s, a), r = "function" === h.type(e.thumb) ? e.thumb.call(this, s, a, o) : f(e.thumb, s), "vimeo" === t && (u = u.replace("&%23", "#")), !1
                }
            }), d ? (o.src = u, o.type = d, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === d && (h.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            }), o.contentProvider = n, o.opts.slideClass += " fancybox-slide--video")) : u && (o.type = o.opts.defaultType)
        })
    }(window.jQuery || jQuery), function (p, a, m) {
        "use strict";

        function u(t) {
            var e = [];
            for (var n in t = (t = t.originalEvent || t || p.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[n].pageX ? e.push({
                x: t[n].pageX,
                y: t[n].pageY
            }) : t[n].clientX && e.push({
                x: t[n].clientX,
                y: t[n].clientY
            });
            return e
        }

        function g(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        }

        function l(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || m.isFunction(t.get(0).onclick) || t.data("selectable")) return 1;
            for (var e = 0, n = t[0].attributes, i = n.length; e < i; e++)
                if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return 1
        }

        function c(t) {
            for (var e, n, i, o, r, s = !1;
                (e = t.get(0), 0, n = p.getComputedStyle(e)["overflow-y"], i = p.getComputedStyle(e)["overflow-x"], o = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight, r = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth, !(s = o || r)) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            return s
        }

        function n(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(e, "ontouchstart"))
        }
        var v = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || function (t) {
                return p.setTimeout(t, 1e3 / 60)
            },
            y = p.cancelAnimationFrame || p.webkitCancelAnimationFrame || p.mozCancelAnimationFrame || p.oCancelAnimationFrame || function (t) {
                p.clearTimeout(t)
            };
        n.prototype.destroy = function () {
            this.$container.off(".fb.touch")
        }, n.prototype.ontouchstart = function (t) {
            var e = this,
                n = m(t.target),
                i = e.instance,
                o = i.current,
                r = o.$content,
                s = "touchstart" == t.type;
            if (s && e.$container.off("mousedown.fb.touch"), (!t.originalEvent || 2 != t.originalEvent.button) && n.length && !l(n) && !l(n.parent()) && (n.is("img") || !(t.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
                if (!o || e.instance.isAnimating || e.instance.isClosing) return t.stopPropagation(), void t.preventDefault();
                if (e.realPoints = e.startPoints = u(t), e.startPoints) {
                    if (t.stopPropagation(), e.startEvent = t, e.canTap = !0, e.$target = n, e.$content = r, e.opts = o.opts.touch, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.isScrolling = !1, e.sliderStartPos = e.sliderLastPos || {
                            top: 0,
                            left: 0
                        }, e.contentStartPos = m.fancybox.getTranslate(e.$content), e.contentLastPos = null, e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.canvasWidth = Math.round(o.$slide[0].clientWidth), e.canvasHeight = Math.round(o.$slide[0].clientHeight), m(a).off(".fb.touch").on(s ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(e, "ontouchend")).on(s ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(e, "ontouchmove")), m.fancybox.isMobile && a.addEventListener("scroll", e.onscroll, !0), !e.opts && !i.canPan() || !n.is(e.$stage) && !e.$stage.find(n).length) return void(n.is("img") && t.preventDefault());
                    m.fancybox.isMobile && (c(n) || c(n.parent())) || t.preventDefault(), 1 === e.startPoints.length && ("image" === o.type && (e.contentStartPos.width > e.canvasWidth + 1 || e.contentStartPos.height > e.canvasHeight + 1) ? (m.fancybox.stop(e.$content), e.$content.css("transition-duration", ""), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-controls--isGrabbing")), 2 !== e.startPoints.length || i.isAnimating || o.hasError || "image" !== o.type || !o.isLoaded && !o.$ghost || (e.canTap = !1, e.isSwiping = !1, e.isPanning = !1, e.isZooming = !0, m.fancybox.stop(e.$content), e.$content.css("transition-duration", ""), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - m(p).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - m(p).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = g(e.startPoints[0], e.startPoints[1]))
                }
            }
        }, n.prototype.onscroll = function (t) {
            self.isScrolling = !0
        }, n.prototype.ontouchmove = function (t) {
            var e = this,
                n = m(t.target);
            return e.isScrolling || !n.is(e.$stage) && !e.$stage.find(n).length ? void(e.canTap = !1) : (e.newPoints = u(t), void((e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = g(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = g(e.newPoints[0], e.startPoints[0], "y"), e.distance = g(e.newPoints[0], e.startPoints[0]), 0 < e.distance && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
        }, n.prototype.onSwipe = function (t) {
            var e, i = this,
                n = i.isSwiping,
                o = i.sliderStartPos.left || 0;
            if (!0 !== n) "x" == n && (0 < i.distanceX && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? o += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? o -= Math.pow(-i.distanceX, .8) : o += i.distanceX), i.sliderLastPos = {
                top: "x" == n ? 0 : i.sliderStartPos.top + i.distanceY,
                left: o
            }, i.requestId && (y(i.requestId), i.requestId = null), i.requestId = v(function () {
                i.sliderLastPos && (m.each(i.instance.slides, function (t, e) {
                    var n = e.pos - i.instance.currPos;
                    m.fancybox.setTranslate(e.$slide, {
                        top: i.sliderLastPos.top,
                        left: i.sliderLastPos.left + n * i.canvasWidth + n * e.opts.gutter
                    })
                }), i.$container.addClass("fancybox-is-sliding"))
            });
            else if (10 < Math.abs(i.distance)) {
                if (i.canTap = !1, i.instance.group.length < 2 && i.opts.vertical ? i.isSwiping = "y" : i.instance.isDragging || !1 === i.opts.vertical || "auto" === i.opts.vertical && 800 < m(p).width() ? i.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = 45 < e && e < 135 ? "y" : "x"), i.canTap = !1, "y" === i.isSwiping && m.fancybox.isMobile && (c(i.$target) || c(i.$target.parent()))) return void(i.isScrolling = !0);
                i.instance.isDragging = i.isSwiping, i.startPoints = i.newPoints, m.each(i.instance.slides, function (t, e) {
                    m.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === i.instance.current.pos && (i.sliderStartPos.left = m.fancybox.getTranslate(e.$slide).left)
                }), i.instance.SlideShow && i.instance.SlideShow.isActive && i.instance.SlideShow.stop()
            }
        }, n.prototype.onPan = function () {
            var t = this;
            return g(t.newPoints[0], t.realPoints[0]) < (m.fancybox.isMobile ? 10 : 5) ? void(t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (y(t.requestId), t.requestId = null), void(t.requestId = v(function () {
                m.fancybox.setTranslate(t.$content, t.contentLastPos)
            })))
        }, n.prototype.limitMovement = function () {
            var t = this,
                e = t.canvasWidth,
                n = t.canvasHeight,
                i = t.distanceX,
                o = t.distanceY,
                r = t.contentStartPos,
                s = r.left,
                a = r.top,
                l = r.width,
                c = r.height,
                u = e < l ? s + i : s,
                d = a + o,
                h = Math.max(0, .5 * e - .5 * l),
                f = Math.max(0, .5 * n - .5 * c),
                p = Math.min(e - l, .5 * e - .5 * l),
                m = Math.min(n - c, .5 * n - .5 * c);
            return e < l && (0 < i && h < u && (u = h - 1 + Math.pow(-h + s + i, .8) || 0), i < 0 && u < p && (u = p + 1 - Math.pow(p - s - i, .8) || 0)), n < c && (0 < o && f < d && (d = f - 1 + Math.pow(-f + a + o, .8) || 0), o < 0 && d < m && (d = m + 1 - Math.pow(m - a - o, .8) || 0)), {
                top: d,
                left: u,
                scaleX: r.scaleX,
                scaleY: r.scaleY
            }
        }, n.prototype.limitPosition = function (t, e, n, i) {
            var o = this.canvasWidth,
                r = this.canvasHeight;
            return t = o < n ? (t = 0 < t ? 0 : t) < o - n ? o - n : t : Math.max(0, o / 2 - n / 2), {
                top: e = r < i ? (e = 0 < e ? 0 : e) < r - i ? r - i : e : Math.max(0, r / 2 - i / 2),
                left: t
            }
        }, n.prototype.onZoom = function () {
            var t = this,
                e = t.contentStartPos.width,
                n = t.contentStartPos.height,
                i = t.contentStartPos.left,
                o = t.contentStartPos.top,
                r = g(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
                s = Math.floor(e * r),
                a = Math.floor(n * r),
                l = (e - s) * t.percentageOfImageAtPinchPointX,
                c = (n - a) * t.percentageOfImageAtPinchPointY,
                u = (t.newPoints[0].x + t.newPoints[1].x) / 2 - m(p).scrollLeft(),
                d = (t.newPoints[0].y + t.newPoints[1].y) / 2 - m(p).scrollTop(),
                h = u - t.centerPointStartX,
                f = {
                    top: o + (c + (d - t.centerPointStartY)),
                    left: i + (l + h),
                    scaleX: t.contentStartPos.scaleX * r,
                    scaleY: t.contentStartPos.scaleY * r
                };
            t.canTap = !1, t.newWidth = s, t.newHeight = a, t.contentLastPos = f, t.requestId && (y(t.requestId), t.requestId = null), t.requestId = v(function () {
                m.fancybox.setTranslate(t.$content, t.contentLastPos)
            })
        }, n.prototype.ontouchend = function (t) {
            var e = this,
                n = Math.max((new Date).getTime() - e.startTime, 1),
                i = e.isSwiping,
                o = e.isPanning,
                r = e.isZooming,
                s = e.isScrolling;
            return e.endPoints = u(t), e.$container.removeClass("fancybox-controls--isGrabbing"), m(a).off(".fb.touch"), a.removeEventListener("scroll", e.onscroll, !0), e.requestId && (y(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.isScrolling = !1, e.instance.isDragging = !1, e.canTap ? e.onTap(t) : (e.speed = 366, e.velocityX = e.distanceX / n * .5, e.velocityY = e.distanceY / n * .5, e.speedX = Math.max(.5 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), void(o ? e.endPanning() : r ? e.endZooming() : e.endSwiping(i, s)))
        }, n.prototype.endSwiping = function (t, e) {
            var n = this,
                i = !1,
                o = n.instance.group.length;
            n.sliderLastPos = null, "y" == t && !e && 50 < Math.abs(n.distanceY) ? (m.fancybox.animate(n.instance.current.$slide, {
                top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
                opacity: 0
            }, 150), i = n.instance.close(!0, 300)) : "x" == t && 50 < n.distanceX && 1 < o ? i = n.instance.previous(n.speedX) : "x" == t && n.distanceX < -50 && 1 < o && (i = n.instance.next(n.speedX)), !1 !== i || "x" != t && "y" != t || (e || o < 2 ? n.instance.centerSlide(n.instance.current, 150) : n.instance.jumpTo(n.instance.current.index)), n.$container.removeClass("fancybox-is-sliding")
        }, n.prototype.endPanning = function () {
            var t, e, n, i = this;
            i.contentLastPos && (e = !1 === i.opts.momentum ? (t = i.contentLastPos.left, i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, i.contentLastPos.top + i.velocityY * i.speed), (n = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, n.height = i.contentStartPos.height, m.fancybox.animate(i.$content, n, 330))
        }, n.prototype.endZooming = function () {
            var t, e, n, i, o = this,
                r = o.instance.current,
                s = o.newWidth,
                a = o.newHeight;
            o.contentLastPos && (t = o.contentLastPos.left, i = {
                top: e = o.contentLastPos.top,
                left: t,
                width: s,
                height: a,
                scaleX: 1,
                scaleY: 1
            }, m.fancybox.setTranslate(o.$content, i), s < o.canvasWidth && a < o.canvasHeight ? o.instance.scaleToFit(150) : s > r.width || a > r.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (n = o.limitPosition(t, e, s, a), m.fancybox.setTranslate(o.content, m.fancybox.getTranslate(o.$content)), m.fancybox.animate(o.$content, n, 150)))
        }, n.prototype.onTap = function (n) {
            function t(t) {
                var e = s.opts[t];
                if (m.isFunction(e) && (e = e.apply(r, [s, n])), e) switch (e) {
                    case "close":
                        r.close(i.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls(!0);
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        1 < r.group.length ? r.next() : r.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == s.type && (s.isLoaded || s.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(l, c) : r.group.length < 2 && r.close(i.startEvent))
                }
            }
            var e, i = this,
                o = m(n.target),
                r = i.instance,
                s = r.current,
                a = n && u(n) || i.startPoints,
                l = a[0] ? a[0].x - i.$stage.offset().left : 0,
                c = a[0] ? a[0].y - i.$stage.offset().top : 0;
            if ((!n.originalEvent || 2 != n.originalEvent.button) && (o.is("img") || !(l > o[0].clientWidth + o.offset().left))) {
                if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
                else if (o.is(".fancybox-slide")) e = "Slide";
                else {
                    if (!r.current.$content || !r.current.$content.find(o).addBack().filter(o).length) return;
                    e = "Content"
                }
                if (i.tapped) {
                    if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(l - i.tapX) || 50 < Math.abs(c - i.tapY)) return this;
                    t("dblclick" + e)
                } else i.tapX = l, i.tapY = c, s.opts["dblclick" + e] && s.opts["dblclick" + e] !== s.opts["click" + e] ? i.tapped = setTimeout(function () {
                    i.tapped = null, t("click" + e)
                }, 500) : t("click" + e);
                return this
            }
        }, m(a).on("onActivate.fb", function (t, e) {
            e && !e.Guestures && (e.Guestures = new n(e))
        })
    }(window, document, window.jQuery || jQuery), function (s, a) {
        "use strict";
        a.extend(!0, a.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
            },
            slideShow: {
                autoStart: !1,
                speed: 3e3
            }
        });

        function n(t) {
            this.instance = t, this.init()
        }
        a.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this;
                t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    t.toggle()
                }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
            },
            set: function (t) {
                var e = this;
                e.instance && e.instance.current && (!0 === t || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function () {
                    e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
                }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
            },
            clear: function () {
                clearTimeout(this.timer), this.timer = null
            },
            start: function () {
                var t = this.instance.current;
                t && (this.isActive = !0, this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.set(!0))
            },
            stop: function () {
                var t = this.instance.current;
                this.clear(), this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1
            },
            toggle: function () {
                this.isActive ? this.stop() : this.start()
            }
        }), a(s).on({
            "onInit.fb": function (t, e) {
                e && !e.SlideShow && (e.SlideShow = new n(e))
            },
            "beforeShow.fb": function (t, e, n, i) {
                var o = e && e.SlideShow;
                i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
            },
            "afterShow.fb": function (t, e, n) {
                var i = e && e.SlideShow;
                i && i.isActive && i.set()
            },
            "afterKeydown.fb": function (t, e, n, i, o) {
                var r = e && e.SlideShow;
                !r || !n.opts.slideShow || 80 !== o && 32 !== o || a(s.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function (t, e) {
                var n = e && e.SlideShow;
                n && n.stop()
            }
        }), a(s).on("visibilitychange", function () {
            var t = a.fancybox.getInstance(),
                e = t && t.SlideShow;
            e && e.isActive && (s.hidden ? e.clear() : e.set())
        })
    }(document, window.jQuery || jQuery), function (r, n) {
        "use strict";
        var e = function () {
            for (var t, e, n = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], i = {}, o = 0; o < n.length; o++)
                if ((t = n[o]) && t[1] in r) {
                    for (e = 0; e < t.length; e++) i[n[0][e]] = t[e];
                    return i
                } return !1
        }();
        if (!e) return n && n.fancybox && (n.fancybox.defaults.btnTpl.fullScreen = !1);
        var i = {
            request: function (t) {
                (t = t || r.documentElement)[e.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                r[e.exitFullscreen]()
            },
            toggle: function (t) {
                t = t || r.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function () {
                return Boolean(r[e.fullscreenElement])
            },
            enabled: function () {
                return Boolean(r[e.fullscreenEnabled])
            }
        };
        n.extend(!0, n.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), n(r).on({
            "onInit.fb": function (t, e) {
                var n;
                e && e.group[e.currIndex].opts.fullScreen ? ((n = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle(n[0])
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(n[0]), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function (t, e, n, i, o) {
                e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
            },
            "beforeClose.fb": function (t) {
                t && t.FullScreen && i.exit()
            }
        }), n(r).on(e.fullscreenchange, function () {
            var t = i.isFullscreen(),
                e = n.fancybox.getInstance();
            e && (e.current && "image" === e.current.type && e.isAnimating && (e.current.$content.css("transition", "none"), e.isAnimating = !1, e.update(!0, !0, 0)), e.trigger("onFullscreenChange", t), e.$refs.container.toggleClass("fancybox-is-fullscreen", t))
        })
    }(document, window.jQuery || jQuery), function (t, a) {
        "use strict";
        a.fancybox.defaults = a.extend(!0, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            }
        }, a.fancybox.defaults);

        function i(t) {
            this.init(t)
        }
        a.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this;
                (e.instance = t).Thumbs = e;
                var n = t.group[0],
                    i = t.group[1];
                e.opts = t.group[t.currIndex].opts.thumbs, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), e.opts && n && i && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (e.$button.show().on("click", function () {
                    e.toggle()
                }), e.isActive = !0) : e.$button.hide()
            },
            create: function () {
                var n, i, t = this,
                    e = t.instance,
                    o = t.opts.parentEl;
                t.$grid = a('<div class="fancybox-thumbs fancybox-thumbs-' + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(o).addBack().filter(o)), n = "<ul>", a.each(e.group, function (t, e) {
                    (i = e.opts.thumb || (e.opts.$thumb ? e.opts.$thumb.attr("src") : null)) || "image" !== e.type || (i = e.src), i && i.length && (n += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
                }), n += "</ul>", t.$list = a(n).appendTo(t.$grid).on("click", "li", function () {
                    e.jumpTo(a(this).data("index"))
                }), t.$list.find("img").hide().one("load", function () {
                    var t = a(this).parent().removeClass("fancybox-thumbs-loading"),
                        e = t.outerWidth(),
                        n = t.outerHeight(),
                        i = this.naturalWidth || this.width,
                        o = this.naturalHeight || this.height,
                        r = i / e,
                        s = o / n;
                    1 <= r && 1 <= s && (s < r ? (i /= s, o = n) : (i = e, o /= r)), a(this).css({
                        width: Math.floor(i),
                        height: Math.floor(o),
                        "margin-top": n < o ? Math.floor(.3 * n - .3 * o) : Math.floor(.5 * n - .5 * o),
                        "margin-left": Math.floor(.5 * e - .5 * i)
                    }).show()
                }).each(function () {
                    this.src = a(this).data("src")
                }), "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right")) + e.group.length * t.$list.children().eq(0).outerWidth(!0) + "px")
            },
            focus: function (t) {
                var e, n, i = this,
                    o = i.$list;
                i.instance.current && (n = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - e.outerHeight()) ? o.stop().animate({
                    scrollTop: o.scrollTop() + n.top
                }, t) : "x" === i.opts.axis && (n.left < o.parent().scrollLeft() || n.left > o.parent().scrollLeft() + (o.parent().width() - e.outerWidth())) && o.parent().stop().animate({
                    scrollLeft: n.left
                }, t))
            },
            update: function () {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
            },
            hide: function () {
                this.isVisible = !1, this.update()
            },
            show: function () {
                this.isVisible = !0, this.update()
            },
            toggle: function () {
                this.isVisible = !this.isVisible, this.update()
            }
        }), a(t).on({
            "onInit.fb": function (t, e) {
                var n;
                !e || e.Thumbs || (n = new i(e)).isActive && !0 === n.opts.autoStart && n.show()
            },
            "beforeShow.fb": function (t, e, n, i) {
                var o = e && e.Thumbs;
                o && o.isVisible && o.focus(i ? 0 : 250)
            },
            "afterKeydown.fb": function (t, e, n, i, o) {
                var r = e && e.Thumbs;
                r && r.isActive && 71 === o && (i.preventDefault(), r.toggle())
            },
            "beforeClose.fb": function (t, e) {
                var n = e && e.Thumbs;
                n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
            }
        })
    }(document, window.jQuery), function (t, o) {
        "use strict";
        o.extend(!0, o.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
            },
            share: {
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
            }
        }), o(t).on("click", "[data-fancybox-share]", function () {
            var t, e, n, i = o.fancybox.getInstance();
            i && (t = !1 === i.current.opts.hash ? i.current.src : window.location, e = i.current.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.current.type ? encodeURIComponent(i.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (n = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            }, String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return n[t]
            }))).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), o.fancybox.open({
                src: i.translate(i, e),
                type: "html",
                opts: {
                    animationEffect: "fade",
                    animationDuration: 250,
                    afterLoad: function (t, e) {
                        e.$content.find(".fancybox-share__links a").click(function () {
                            return window.open(this.href, "Share", "width=550, height=450"), !1
                        })
                    }
                }
            }))
        })
    }(document, window.jQuery || jQuery), function (r, s, a) {
        "use strict";

        function o() {
            var t = s.location.hash.substr(1),
                e = t.split("-"),
                n = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
            return n < 1 && (n = 1), {
                hash: t,
                index: n,
                gallery: e.join("-")
            }
        }

        function e(t) {
            var e;
            "" !== t.gallery && ((e = a("[data-fancybox='" + a.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = a("#" + a.escapeSelector(t.gallery))), e.length && (c = !1, e.trigger("click")))
        }

        function l(t) {
            var e;
            return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : ""))
        }
        a.escapeSelector || (a.escapeSelector = function (t) {
            return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            })
        });
        var c = !0,
            u = null,
            d = null;
        a(function () {
            !1 !== a.fancybox.defaults.hash && (a(r).on({
                "onInit.fb": function (t, e) {
                    var n, i;
                    !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = l(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
                },
                "beforeShow.fb": function (t, e, n) {
                    var i;
                    !n || !1 === n.opts.hash || (i = l(e)) && "" !== i && (s.location.hash.indexOf(i) < 0 && (e.opts.origHash = s.location.hash), u = i + (1 < e.group.length ? "-" + (n.index + 1) : ""), "replaceState" in s.history ? (d && clearTimeout(d), d = setTimeout(function () {
                        s.history[c ? "pushState" : "replaceState"]({}, r.title, s.location.pathname + s.location.search + "#" + u), d = null, c = !1
                    }, 300)) : s.location.hash = u)
                },
                "beforeClose.fb": function (t, e, n) {
                    var i, o;
                    d && clearTimeout(d), !1 !== n.opts.hash && (i = l(e), o = e && e.opts.origHash ? e.opts.origHash : "", i && "" !== i && ("replaceState" in history ? s.history.replaceState({}, r.title, s.location.pathname + s.location.search + o) : (s.location.hash = o, a(s).scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))), u = null)
                }
            }), a(s).on("hashchange.fb", function () {
                var t = o();
                a.fancybox.getInstance() ? !u || u === t.gallery + "-" + t.index || 1 === t.index && u == t.gallery || (u = null, a.fancybox.close()) : "" !== t.gallery && e(t)
            }), setTimeout(function () {
                e(o())
            }, 50))
        })
    }(document, window, window.jQuery || jQuery), function (t, e) {
        "use strict";
        var o = (new Date).getTime();
        e(t).on({
            "onInit.fb": function (t, i, e) {
                i.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                    var e = i.current,
                        n = (new Date).getTime();
                    i.group.length < 1 || !1 === e.opts.wheel || "auto" === e.opts.wheel && "image" !== e.type || (t.preventDefault(), t.stopPropagation(), e.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, n - o < 250 || (o = n, i[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                })
            }
        })
    }(document, window.jQuery || jQuery), function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (u) {
        u.extend(u.fn, {
            validate: function (t) {
                if (this.length) {
                    var i = u.data(this[0], "validator");
                    return i ? i : (this.attr("novalidate", "novalidate"), i = new u.validator(t, this[0]), u.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                        i.settings.submitHandler && (i.submitButton = t.target), u(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                    }), this.on("submit.validate", function (n) {
                        function t() {
                            var t, e;
                            return !i.settings.submitHandler || (i.submitButton && (t = u("<input type='hidden'/>").attr("name", i.submitButton.name).val(u(i.submitButton).val()).appendTo(i.currentForm)), e = i.settings.submitHandler.call(i, i.currentForm, n), i.submitButton && t.remove(), void 0 !== e && e)
                        }
                        return i.settings.debug && n.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, t()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : t() : (i.focusInvalid(), !1)
                    })), i)
                }
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function () {
                var t, e, n;
                return u(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, e = u(this[0].form).validate(), this.each(function () {
                    (t = e.element(this) && t) || (n = n.concat(e.errorList))
                }), e.errorList = n), t
            },
            rules: function (t, e) {
                if (this.length) {
                    var n, i, o, r, s, a, l = this[0];
                    if (t) switch (i = (n = u.data(l.form, "validator").settings).rules, o = u.validator.staticRules(l), t) {
                        case "add":
                            u.extend(o, u.validator.normalizeRule(e)), delete o.messages, i[l.name] = o, e.messages && (n.messages[l.name] = u.extend(n.messages[l.name], e.messages));
                            break;
                        case "remove":
                            return e ? (a = {}, u.each(e.split(/\s/), function (t, e) {
                                a[e] = o[e], delete o[e], "required" === e && u(l).removeAttr("aria-required")
                            }), a) : (delete i[l.name], o)
                    }
                    return (r = u.validator.normalizeRules(u.extend({}, u.validator.classRules(l), u.validator.attributeRules(l), u.validator.dataRules(l), u.validator.staticRules(l)), l)).required && (s = r.required, delete r.required, r = u.extend({
                        required: s
                    }, r), u(l).attr("aria-required", "true")), r.remote && (s = r.remote, delete r.remote, r = u.extend(r, {
                        remote: s
                    })), r
                }
            }
        }), u.extend(u.expr.pseudos, {
            blank: function (t) {
                return !u.trim("" + u(t).val())
            },
            filled: function (t) {
                var e = u(t).val();
                return null !== e && !!u.trim("" + e)
            },
            unchecked: function (t) {
                return !u(t).prop("checked")
            }
        }), u.validator = function (t, e) {
            this.settings = u.extend(!0, {}, u.validator.defaults, t), this.currentForm = e, this.init()
        }, u.validator.format = function (n, t) {
            return 1 === arguments.length ? function () {
                var t = u.makeArray(arguments);
                return t.unshift(n), u.validator.format.apply(this, t)
            } : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), u.each(t, function (t, e) {
                n = n.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                    return e
                })
            })), n)
        }, u.extend(u.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: u([]),
                errorLabelContainer: u([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function (t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function (t, e) {
                    9 === e.which && "" === this.elementValue(t) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
                },
                onclick: function (t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function (t, e, n) {
                    "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(n) : u(t).addClass(e).removeClass(n)
                },
                unhighlight: function (t, e, n) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(n) : u(t).removeClass(e).addClass(n)
                }
            },
            setDefaults: function (t) {
                u.extend(u.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: u.validator.format("Please enter no more than {0} characters."),
                minlength: u.validator.format("Please enter at least {0} characters."),
                rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
                range: u.validator.format("Please enter a value between {0} and {1}."),
                max: u.validator.format("Please enter a value less than or equal to {0}."),
                min: u.validator.format("Please enter a value greater than or equal to {0}."),
                step: u.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n, i = this.groups = {};

                    function t(t) {
                        var e = u.data(this.form, "validator"),
                            n = "on" + t.type.replace(/^validate/, ""),
                            i = e.settings;
                        i[n] && !u(this).is(i.ignore) && i[n].call(e, this, t)
                    }
                    u.each(this.settings.groups, function (n, t) {
                        "string" == typeof t && (t = t.split(/\s/)), u.each(t, function (t, e) {
                            i[e] = n
                        })
                    }), n = this.settings.rules, u.each(n, function (t, e) {
                        n[t] = u.validator.normalizeRule(e)
                    }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), u(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function () {
                    return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function (t) {
                    var e, n, i = this.clean(t),
                        o = this.validationTargetFor(i),
                        r = this,
                        s = !0;
                    return void 0 === o ? delete this.invalid[i.name] : (this.prepareElement(o), this.currentElements = u(o), (n = this.groups[o.name]) && u.each(this.groups, function (t, e) {
                        e === n && t !== o.name && (i = r.validationTargetFor(r.clean(r.findByName(t)))) && i.name in r.invalid && (r.currentElements.push(i), s = s && r.check(i))
                    }), e = !1 !== this.check(o), s = s && e, this.invalid[o.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(t).attr("aria-invalid", !e)), s
                },
                showErrors: function (e) {
                    var n;
                    e && (n = this, u.extend(this.errorMap, e), this.errorList = u.map(this.errorMap, function (t, e) {
                        return {
                            message: t,
                            element: n.findByName(e)[0]
                        }
                    }), this.successList = u.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })), this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function () {
                    u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t)
                },
                resetElements: function (t) {
                    var e;
                    if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                    else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid)
                },
                objectLength: function (t) {
                    var e, n = 0;
                    for (e in t) t[e] && n++;
                    return n
                },
                hideErrors: function () {
                    this.hideThese(this.toHide)
                },
                hideThese: function (t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function () {
                    return 0 === this.size()
                },
                size: function () {
                    return this.errorList.length
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid) try {
                        u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function () {
                    var e = this.lastActive;
                    return e && 1 === u.grep(this.errorList, function (t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function () {
                    var e = this,
                        n = {};
                    return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                        var t = this.name || u(this).attr("name");
                        return !t && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0]), !(t in n || !e.objectLength(u(this).rules())) && (n[t] = !0)
                    })
                },
                clean: function (t) {
                    return u(t)[0]
                },
                errors: function () {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return u(this.settings.errorElement + "." + t, this.errorContext)
                },
                resetInternals: function () {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([])
                },
                reset: function () {
                    this.resetInternals(), this.currentElements = u([])
                },
                prepareForm: function () {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function (t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function (t) {
                    var e, n, i = u(t),
                        o = t.type;
                    return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && void 0 !== t.validity ? t.validity.badInput ? "NaN" : i.val() : (e = t.hasAttribute("contenteditable") ? i.text() : i.val(), "file" === o ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (n = e.lastIndexOf("/")) || 0 <= (n = e.lastIndexOf("\\")) ? e.substr(n + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
                },
                check: function (e) {
                    e = this.validationTargetFor(this.clean(e));
                    var t, n, i, o = u(e).rules(),
                        r = u.map(o, function (t, e) {
                            return e
                        }).length,
                        s = !1,
                        a = this.elementValue(e);
                    if ("function" == typeof o.normalizer) {
                        if ("string" != typeof (a = o.normalizer.call(e, a))) throw new TypeError("The normalizer should return a string value.");
                        delete o.normalizer
                    }
                    for (n in o) {
                        i = {
                            method: n,
                            parameters: o[n]
                        };
                        try {
                            if ("dependency-mismatch" === (t = u.validator.methods[n].call(this, a, e, i.parameters)) && 1 === r) {
                                s = !0;
                                continue
                            }
                            if (s = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!t) return this.formatAndAdd(e, i), !1
                        } catch (t) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method."), t
                        }
                    }
                    if (!s) return this.objectLength(o) && this.successList.push(e), !0
                },
                customDataMessage: function (t, e) {
                    return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg")
                },
                customMessage: function (t, e) {
                    var n = this.settings.messages[t];
                    return n && (n.constructor === String ? n : n[e])
                },
                findDefined: function () {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function (t, e) {
                    var n = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                        i = /\$?\{(\d+)\}/g;
                    return "function" == typeof n ? n = n.call(this, e.parameters, t) : i.test(n) && (n = u.validator.format(n.replace(i, "{$1}"), e.parameters)), n
                },
                formatAndAdd: function (t, e) {
                    var n = this.defaultMessage(t, e);
                    this.errorList.push({
                        message: n,
                        element: t,
                        method: e.method
                    }), this.errorMap[t.name] = n, this.submitted[t.name] = n
                },
                addWrapper: function (t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function () {
                    for (var t, e, n = 0; this.errorList[n]; n++) e = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                    if (this.settings.unhighlight)
                        for (n = 0, t = this.validElements(); t[n]; n++) this.settings.unhighlight.call(this, t[n], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function () {
                    return u(this.errorList).map(function () {
                        return this.element
                    })
                },
                showLabel: function (t, e) {
                    var n, i, o, r, s = this.errorsFor(t),
                        a = this.idOrName(t),
                        l = u(t).attr("aria-describedby");
                    s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(e)) : (n = s = u("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, u(t)) : n.insertAfter(t), s.is("label") ? s.attr("for", a) : 0 === s.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (o = s.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (l += " " + o) : l = o, u(t).attr("aria-describedby", l), (i = this.groups[t.name]) && (r = this, u.each(r.groups, function (t, e) {
                        e === i && u("[name='" + r.escapeCssMeta(t) + "']", r.currentForm).attr("aria-describedby", s.attr("id"))
                    })))), !e && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)), this.toShow = this.toShow.add(s)
                },
                errorsFor: function (t) {
                    var e = this.escapeCssMeta(this.idOrName(t)),
                        n = u(t).attr("aria-describedby"),
                        i = "label[for='" + e + "'], label[for='" + e + "'] *";
                    return n && (i = i + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(i)
                },
                escapeCssMeta: function (t) {
                    return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function (t) {
                    return this.groups[t.name] || !this.checkable(t) && t.id || t.name
                },
                validationTargetFor: function (t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), u(t).not(this.settings.ignore)[0]
                },
                checkable: function (t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function (t) {
                    return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
                },
                getLength: function (t, e) {
                    switch (e.nodeName.toLowerCase()) {
                        case "select":
                            return u("option:selected", e).length;
                        case "input":
                            if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function (t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    boolean: function (t) {
                        return t
                    },
                    string: function (t, e) {
                        return !!u(t, e.form).length
                    },
                    function: function (t, e) {
                        return t(e)
                    }
                },
                optional: function (t) {
                    var e = this.elementValue(t);
                    return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch"
                },
                startRequest: function (t) {
                    this.pending[t.name] || (this.pendingRequest++, u(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
                },
                stopRequest: function (t, e) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], u(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function (t, e) {
                    return u.data(t, "previousValue") || u.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, {
                            method: e
                        })
                    })
                },
                destroy: function () {
                    this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function (t, e) {
                t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t)
            },
            classRules: function (t) {
                var e = {},
                    n = u(t).attr("class");
                return n && u.each(n.split(" "), function () {
                    this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this])
                }), e
            },
            normalizeAttributeRule: function (t, e, n, i) {
                /min|max|step/.test(n) && (null === e || /number|range|text/.test(e)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? t[n] = i : e === n && "range" !== e && (t[n] = !0)
            },
            attributeRules: function (t) {
                var e, n, i = {},
                    o = u(t),
                    r = t.getAttribute("type");
                for (e in u.validator.methods) n = "required" === e ? ("" === (n = t.getAttribute(e)) && (n = !0), !!n) : o.attr(e), this.normalizeAttributeRule(i, r, e, n);
                return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
            },
            dataRules: function (t) {
                var e, n, i = {},
                    o = u(t),
                    r = t.getAttribute("type");
                for (e in u.validator.methods) n = o.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), this.normalizeAttributeRule(i, r, e, n);
                return i
            },
            staticRules: function (t) {
                var e = {},
                    n = u.data(t.form, "validator");
                return n.settings.rules && (e = u.validator.normalizeRule(n.settings.rules[t.name]) || {}), e
            },
            normalizeRules: function (i, o) {
                return u.each(i, function (t, e) {
                    if (!1 !== e) {
                        if (e.param || e.depends) {
                            var n = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    n = !!u(e.depends, o.form).length;
                                    break;
                                case "function":
                                    n = e.depends.call(o, o)
                            }
                            n ? i[t] = void 0 === e.param || e.param : (u.data(o.form, "validator").resetElements(u(o)), delete i[t])
                        }
                    } else delete i[t]
                }), u.each(i, function (t, e) {
                    i[t] = u.isFunction(e) && "normalizer" !== t ? e(o) : e
                }), u.each(["minlength", "maxlength"], function () {
                    i[this] && (i[this] = Number(i[this]))
                }), u.each(["rangelength", "range"], function () {
                    var t;
                    i[this] && (u.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (t = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(t[0]), Number(t[1])]))
                }), u.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
            },
            normalizeRule: function (t) {
                var e;
                return "string" == typeof t && (e = {}, u.each(t.split(/\s/), function () {
                    e[this] = !0
                }), t = e), t
            },
            addMethod: function (t, e, n) {
                u.validator.methods[t] = e, u.validator.messages[t] = void 0 !== n ? n : u.validator.messages[t], e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t))
            },
            methods: {
                required: function (t, e, n) {
                    if (!this.depend(n, e)) return "dependency-mismatch";
                    if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < t.length;
                    var i = u(e).val();
                    return i && 0 < i.length
                },
                email: function (t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function (t, e) {
                    return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
                },
                date: function (t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function (t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function (t, e) {
                    return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function (t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                minlength: function (t, e, n) {
                    var i = u.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || n <= i
                },
                maxlength: function (t, e, n) {
                    var i = u.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || i <= n
                },
                rangelength: function (t, e, n) {
                    var i = u.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || i >= n[0] && i <= n[1]
                },
                min: function (t, e, n) {
                    return this.optional(e) || n <= t
                },
                max: function (t, e, n) {
                    return this.optional(e) || t <= n
                },
                range: function (t, e, n) {
                    return this.optional(e) || t >= n[0] && t <= n[1]
                },
                step: function (t, e, n) {
                    var i = u(e).attr("type"),
                        o = "Step attribute on input type " + i + " is not supported.",
                        r = new RegExp("\\b" + i + "\\b");
                    if (i && !r.test(["text", "number", "range"].join())) throw new Error(o);
                    return this.optional(e) || t % n == 0
                },
                equalTo: function (t, e, n) {
                    var i = u(n);
                    return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                        u(e).valid()
                    }), t === i.val()
                },
                remote: function (r, s, t, a) {
                    if (this.optional(s)) return "dependency-mismatch";
                    a = "string" == typeof a && a || "remote";
                    var l, e, n, c = this.previousValue(s, a);
                    return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), c.originalMessage = c.originalMessage || this.settings.messages[s.name][a], this.settings.messages[s.name][a] = c.message, t = "string" == typeof t ? {
                        url: t
                    } : t, n = u.param(u.extend({
                        data: r
                    }, t.data)), c.old === n ? c.valid : (c.old = n, (l = this).startRequest(s), (e = {})[s.name] = r, u.ajax(u.extend(!0, {
                        mode: "abort",
                        port: "validate" + s.name,
                        dataType: "json",
                        data: e,
                        context: l.currentForm,
                        success: function (t) {
                            var e, n, i, o = !0 === t || "true" === t;
                            l.settings.messages[s.name][a] = c.originalMessage, o ? (i = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(s), l.formSubmitted = i, l.successList.push(s), l.invalid[s.name] = !1, l.showErrors()) : (e = {}, n = t || l.defaultMessage(s, {
                                method: a,
                                parameters: r
                            }), e[s.name] = c.message = n, l.invalid[s.name] = !0, l.showErrors(e)), c.valid = o, l.stopRequest(s, o)
                        }
                    }, t)), "pending")
                }
            }
        });
        var i, o = {};
        u.ajaxPrefilter ? u.ajaxPrefilter(function (t, e, n) {
            var i = t.port;
            "abort" === t.mode && (o[i] && o[i].abort(), o[i] = n)
        }) : (i = u.ajax, u.ajax = function (t) {
            var e = ("mode" in t ? t : u.ajaxSettings).mode,
                n = ("port" in t ? t : u.ajaxSettings).port;
            return "abort" === e ? (o[n] && o[n].abort(), o[n] = i.apply(this, arguments), o[n]) : i.apply(this, arguments)
        })
    }), function (g, o, t, v) {
        var i = "stellar",
            n = {
                scrollProperty: "scroll",
                positionProperty: "position",
                horizontalScrolling: !0,
                verticalScrolling: !0,
                horizontalOffset: 0,
                verticalOffset: 0,
                responsive: !1,
                parallaxBackgrounds: !0,
                parallaxElements: !0,
                hideDistantElements: !0,
                hideElement: function (t) {
                    t.hide()
                },
                showElement: function (t) {
                    t.show()
                }
            },
            a = {
                scroll: {
                    getLeft: function (t) {
                        return t.scrollLeft()
                    },
                    setLeft: function (t, e) {
                        t.scrollLeft(e)
                    },
                    getTop: function (t) {
                        return t.scrollTop()
                    },
                    setTop: function (t, e) {
                        t.scrollTop(e)
                    }
                },
                position: {
                    getLeft: function (t) {
                        return -1 * parseInt(t.css("left"), 10)
                    },
                    getTop: function (t) {
                        return -1 * parseInt(t.css("top"), 10)
                    }
                },
                margin: {
                    getLeft: function (t) {
                        return -1 * parseInt(t.css("margin-left"), 10)
                    },
                    getTop: function (t) {
                        return -1 * parseInt(t.css("margin-top"), 10)
                    }
                },
                transform: {
                    getLeft: function (t) {
                        var e = getComputedStyle(t[0])[r];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                    },
                    getTop: function (t) {
                        var e = getComputedStyle(t[0])[r];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                    }
                }
            },
            l = {
                position: {
                    setLeft: function (t, e) {
                        t.css("left", e)
                    },
                    setTop: function (t, e) {
                        t.css("top", e)
                    }
                },
                transform: {
                    setPosition: function (t, e, n, i, o) {
                        t[0].style[r] = "translate3d(" + (e - n) + "px, " + (i - o) + "px, 0)"
                    }
                }
            },
            r = function () {
                var t, e = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    n = g("script")[0].style,
                    i = "";
                for (t in n)
                    if (e.test(t)) {
                        i = t.match(e)[0];
                        break
                    } return "WebkitOpacity" in n && (i = "Webkit"), "KhtmlOpacity" in n && (i = "Khtml"),
                    function (t) {
                        return i + (0 < i.length ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                    }
            }()("transform"),
            e = g("<div />", {
                style: "background:#fff"
            }).css("background-position-x") !== v,
            y = e ? function (t, e, n) {
                t.css({
                    "background-position-x": e,
                    "background-position-y": n
                })
            } : function (t, e, n) {
                t.css("background-position", e + " " + n)
            },
            b = e ? function (t) {
                return [t.css("background-position-x"), t.css("background-position-y")]
            } : function (t) {
                return t.css("background-position").split(" ")
            },
            s = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function (t) {
                setTimeout(t, 1e3 / 60)
            };

        function c(t, e) {
            this.element = t, this.options = g.extend({}, n, e), this._defaults = n, this._name = i, this.init()
        }
        c.prototype = {
            init: function () {
                this.options.name = i + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                    firstLoad: !0
                }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
            },
            _defineElements: function () {
                this.element === t.body && (this.element = o), this.$scrollElement = g(this.element), this.$element = this.element === o ? g("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== v ? g(this.options.viewportElement) : this.$scrollElement[0] === o || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
            },
            _defineGetters: function () {
                var t = this,
                    e = a[t.options.scrollProperty];
                this._getScrollLeft = function () {
                    return e.getLeft(t.$scrollElement)
                }, this._getScrollTop = function () {
                    return e.getTop(t.$scrollElement)
                }
            },
            _defineSetters: function () {
                var r = this,
                    t = a[r.options.scrollProperty],
                    s = l[r.options.positionProperty],
                    e = t.setLeft,
                    n = t.setTop;
                this._setScrollLeft = "function" == typeof e ? function (t) {
                    e(r.$scrollElement, t)
                } : g.noop, this._setScrollTop = "function" == typeof n ? function (t) {
                    n(r.$scrollElement, t)
                } : g.noop, this._setPosition = s.setPosition || function (t, e, n, i, o) {
                    r.options.horizontalScrolling && s.setLeft(t, e, n), r.options.verticalScrolling && s.setTop(t, i, o)
                }
            },
            _handleWindowLoadAndResize: function () {
                var t = this,
                    e = g(o);
                t.options.responsive && e.on("load." + this.name, function () {
                    t.refresh()
                }), e.on("resize." + this.name, function () {
                    t._detectViewport(), t.options.responsive && t.refresh()
                })
            },
            refresh: function (t) {
                var n = this,
                    e = n._getScrollLeft(),
                    i = n._getScrollTop();
                t && t.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), t && t.firstLoad && /WebKit/.test(navigator.userAgent) && g(o).on("load", function () {
                    var t = n._getScrollLeft(),
                        e = n._getScrollTop();
                    n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
                }), this._setScrollLeft(e), this._setScrollTop(i)
            },
            _detectViewport: function () {
                var t = this.$viewportElement.offset(),
                    e = null !== t && t !== v;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
            },
            _findParticles: function () {
                var m = this;
                this._getScrollLeft(), this._getScrollTop();
                if (this.particles !== v)
                    for (var t = this.particles.length - 1; 0 <= t; t--) this.particles[t].$element.data("stellar-elementIsActive", v);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function (t) {
                    var e, n, i, o, r, s, a, l, c, u = g(this),
                        d = 0,
                        h = 0,
                        f = 0,
                        p = 0;
                    if (u.data("stellar-elementIsActive")) {
                        if (u.data("stellar-elementIsActive") !== this) return
                    } else u.data("stellar-elementIsActive", this);
                    m.options.showElement(u), u.data("stellar-startingLeft") ? (u.css("left", u.data("stellar-startingLeft")), u.css("top", u.data("stellar-startingTop"))) : (u.data("stellar-startingLeft", u.css("left")), u.data("stellar-startingTop", u.css("top"))), i = u.position().left, o = u.position().top, r = "auto" === u.css("margin-left") ? 0 : parseInt(u.css("margin-left"), 10), s = "auto" === u.css("margin-top") ? 0 : parseInt(u.css("margin-top"), 10), l = u.offset().left - r, c = u.offset().top - s, u.parents().each(function () {
                        var t = g(this);
                        if (!0 === t.data("stellar-offset-parent")) return d = f, h = p, a = t, !1;
                        f += t.position().left, p += t.position().top
                    }), e = u.data("stellar-horizontal-offset") !== v ? u.data("stellar-horizontal-offset") : a !== v && a.data("stellar-horizontal-offset") !== v ? a.data("stellar-horizontal-offset") : m.horizontalOffset, n = u.data("stellar-vertical-offset") !== v ? u.data("stellar-vertical-offset") : a !== v && a.data("stellar-vertical-offset") !== v ? a.data("stellar-vertical-offset") : m.verticalOffset, m.particles.push({
                        $element: u,
                        $offsetParent: a,
                        isFixed: "fixed" === u.css("position"),
                        horizontalOffset: e,
                        verticalOffset: n,
                        startingPositionLeft: i,
                        startingPositionTop: o,
                        startingOffsetLeft: l,
                        startingOffsetTop: c,
                        parentOffsetLeft: d,
                        parentOffsetTop: h,
                        stellarRatio: u.data("stellar-ratio") !== v ? u.data("stellar-ratio") : 1,
                        width: u.outerWidth(!0),
                        height: u.outerHeight(!0),
                        isHidden: !1
                    })
                })
            },
            _findBackgrounds: function () {
                var t, f = this,
                    p = this._getScrollLeft(),
                    m = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function () {
                    var t, e, n, i, o, r, s, a = g(this),
                        l = b(a),
                        c = 0,
                        u = 0,
                        d = 0,
                        h = 0;
                    if (a.data("stellar-backgroundIsActive")) {
                        if (a.data("stellar-backgroundIsActive") !== this) return
                    } else a.data("stellar-backgroundIsActive", this);
                    a.data("stellar-backgroundStartingLeft") ? y(a, a.data("stellar-backgroundStartingLeft"), a.data("stellar-backgroundStartingTop")) : (a.data("stellar-backgroundStartingLeft", l[0]), a.data("stellar-backgroundStartingTop", l[1])), n = "auto" === a.css("margin-left") ? 0 : parseInt(a.css("margin-left"), 10), i = "auto" === a.css("margin-top") ? 0 : parseInt(a.css("margin-top"), 10), o = a.offset().left - n - p, r = a.offset().top - i - m, a.parents().each(function () {
                        var t = g(this);
                        if (!0 === t.data("stellar-offset-parent")) return c = d, u = h, s = t, !1;
                        d += t.position().left, h += t.position().top
                    }), t = a.data("stellar-horizontal-offset") !== v ? a.data("stellar-horizontal-offset") : s !== v && s.data("stellar-horizontal-offset") !== v ? s.data("stellar-horizontal-offset") : f.horizontalOffset, e = a.data("stellar-vertical-offset") !== v ? a.data("stellar-vertical-offset") : s !== v && s.data("stellar-vertical-offset") !== v ? s.data("stellar-vertical-offset") : f.verticalOffset, f.backgrounds.push({
                        $element: a,
                        $offsetParent: s,
                        isFixed: "fixed" === a.css("background-attachment"),
                        horizontalOffset: t,
                        verticalOffset: e,
                        startingValueLeft: l[0],
                        startingValueTop: l[1],
                        startingBackgroundPositionLeft: isNaN(parseInt(l[0], 10)) ? 0 : parseInt(l[0], 10),
                        startingBackgroundPositionTop: isNaN(parseInt(l[1], 10)) ? 0 : parseInt(l[1], 10),
                        startingPositionLeft: a.position().left,
                        startingPositionTop: a.position().top,
                        startingOffsetLeft: o,
                        startingOffsetTop: r,
                        parentOffsetLeft: c,
                        parentOffsetTop: u,
                        stellarRatio: a.data("stellar-background-ratio") === v ? 1 : a.data("stellar-background-ratio")
                    })
                }))
            },
            _reset: function () {
                for (var t, e, n, i, o = this.particles.length - 1; 0 <= o; o--) e = (t = this.particles[o]).$element.data("stellar-startingLeft"), n = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, n, n), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (o = this.backgrounds.length - 1; 0 <= o; o--)(i = this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), y(i.$element, i.startingValueLeft, i.startingValueTop)
            },
            destroy: function () {
                this._reset(), this.$scrollElement.off("resize." + this.name).off("scroll." + this.name), this._animationLoop = g.noop, g(o).off("load." + this.name).off("resize." + this.name)
            },
            _setOffsets: function () {
                var t = this,
                    e = g(o);
                e.off("resize.horizontal-" + this.name).off("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), e.bind("resize.horizontal-" + this.name, function () {
                    t.horizontalOffset = t.options.horizontalOffset()
                })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), e.bind("resize.vertical-" + this.name, function () {
                    t.verticalOffset = t.options.verticalOffset()
                })) : this.verticalOffset = this.options.verticalOffset
            },
            _repositionElements: function () {
                var t, e, n, i, o, r, s, a, l, c, u = this._getScrollLeft(),
                    d = this._getScrollTop(),
                    h = !0,
                    f = !0;
                if (this.currentScrollLeft !== u || this.currentScrollTop !== d || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = u, this.currentScrollTop = d, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; 0 <= c; c--) e = (t = this.particles[c]).isFixed ? 1 : 0, a = this.options.horizontalScrolling ? (r = (u + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft) - t.startingPositionLeft + t.startingOffsetLeft : (r = t.startingPositionLeft, t.startingOffsetLeft), l = this.options.verticalScrolling ? (s = (d + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop) - t.startingPositionTop + t.startingOffsetTop : (s = t.startingPositionTop, t.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : u) && a < (t.isFixed ? 0 : u) + this.viewportWidth + this.viewportOffsetLeft, h = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : d) && l < (t.isFixed ? 0 : d) + this.viewportHeight + this.viewportOffsetTop), f && h ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, r, t.startingPositionLeft, s, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                    for (c = this.backgrounds.length - 1; 0 <= c; c--) e = (n = this.backgrounds[c]).isFixed ? 0 : 1, i = this.options.horizontalScrolling ? (u + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (e - n.stellarRatio) + "px" : n.startingValueLeft, o = this.options.verticalScrolling ? (d + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (e - n.stellarRatio) + "px" : n.startingValueTop, y(n.$element, i, o)
                }
            },
            _handleScrollEvent: function () {
                function t() {
                    n._repositionElements(), i = !1
                }

                function e() {
                    i || (s(t), i = !0)
                }
                var n = this,
                    i = !1;
                this.$scrollElement.on("scroll." + this.name, e), e()
            },
            _startAnimationLoop: function () {
                var t = this;
                this._animationLoop = function () {
                    s(t._animationLoop), t._repositionElements()
                }, this._animationLoop()
            }
        }, g.fn[i] = function (e) {
            var n = arguments;
            return e === v || "object" == typeof e ? this.each(function () {
                g.data(this, "plugin_" + i) || g.data(this, "plugin_" + i, new c(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
                var t = g.data(this, "plugin_" + i);
                t instanceof c && "function" == typeof t[e] && t[e].apply(t, Array.prototype.slice.call(n, 1)), "destroy" === e && g.data(this, "plugin_" + i, null)
            }) : void 0
        }, g[i] = function (t) {
            var e = g(o);
            return e.stellar.apply(e, Array.prototype.slice.call(arguments, 0))
        }, g[i].scrollProperty = a, g[i].positionProperty = l, o.Stellar = c
    }(jQuery, this, document), window.Modernizr = function (i, d, s) {
        function o(t, e, n, i) {
            var o, r, s, a, l = d.createElement("div"),
                c = d.body,
                u = c || d.createElement("body");
            if (parseInt(n, 10))
                for (; n--;)(s = d.createElement("div")).id = i ? i[n] : f + (n + 1), l.appendChild(s);
            return o = ["&#173;", '<style id="s', f, '">', t, "</style>"].join(""), l.id = f, (c ? l : u).innerHTML += o, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = h.style.overflow, h.style.overflow = "hidden", h.appendChild(u)), r = e(l, t), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), h.style.overflow = a), !!r
        }
        var t, r, a, l = {},
            h = d.documentElement,
            f = "modernizr",
            c = d.createElement(f).style,
            u = d.createElement("input"),
            p = ":)",
            e = {}.toString,
            n = " -webkit- -moz- -o- -ms- ".split(" "),
            m = "Webkit Moz O ms",
            g = m.split(" "),
            v = m.toLowerCase().split(" "),
            y = "http://www.w3.org/2000/svg",
            b = {},
            x = {},
            w = {},
            C = [],
            _ = C.slice,
            S = (a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            }, function (t, e) {
                e = e || d.createElement(a[t] || "div");
                var n = (t = "on" + t) in e;
                return n || (e.setAttribute || (e = d.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(t, ""), n = E(e[t], "function"), void 0 !== e[t] && (e[t] = s), e.removeAttribute(t))), e = null, n
            }),
            $ = {}.hasOwnProperty;

        function T(t) {
            c.cssText = t
        }

        function E(t, e) {
            return typeof t === e
        }

        function F(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function k(t, e) {
            for (var n in t) {
                var i = t[n];
                if (!F(i, "-") && c[i] !== s) return "pfx" != e || i
            }
            return !1
        }

        function P(t, e, n) {
            var i = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + g.join(i + " ") + i).split(" ");
            return E(e, "string") || void 0 === e ? k(o, e) : function (t, e, n) {
                for (var i in t) {
                    var o = e[t[i]];
                    if (o !== s) return !1 === n ? t[i] : E(o, "function") ? o.bind(n || e) : o
                }
                return !1
            }(o = (t + " " + v.join(i + " ") + i).split(" "), e, n)
        }
        for (var A in r = void 0 !== $ && void 0 !== $.call ? function (t, e) {
                return $.call(t, e)
            } : function (t, e) {
                return e in t && void 0 === t.constructor.prototype[e]
            }, Function.prototype.bind || (Function.prototype.bind = function (i) {
                var o = this;
                if ("function" != typeof o) throw new TypeError;
                var r = _.call(arguments, 1),
                    s = function () {
                        if (this instanceof s) {
                            function t() {}
                            t.prototype = o.prototype;
                            var e = new t,
                                n = o.apply(e, r.concat(_.call(arguments)));
                            return Object(n) === n ? n : e
                        }
                        return o.apply(i, r.concat(_.call(arguments)))
                    };
                return s
            }), b.flexbox = function () {
                return P("flexWrap")
            }, b.flexboxlegacy = function () {
                return P("boxDirection")
            }, b.canvas = function () {
                var t = d.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }, b.canvastext = function () {
                return !(!l.canvas || !E(d.createElement("canvas").getContext("2d").fillText, "function"))
            }, b.webgl = function () {
                return !!i.WebGLRenderingContext
            }, b.touch = function () {
                var e;
                return "ontouchstart" in i || i.DocumentTouch && d instanceof DocumentTouch ? e = !0 : o(["@media (", n.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
                    e = 9 === t.offsetTop
                }), e
            }, b.geolocation = function () {
                return "geolocation" in navigator
            }, b.postmessage = function () {
                return !!i.postMessage
            }, b.websqldatabase = function () {
                return !!i.openDatabase
            }, b.indexedDB = function () {
                return !!P("indexedDB", i)
            }, b.hashchange = function () {
                return S("hashchange", i) && (d.documentMode === s || 7 < d.documentMode)
            }, b.history = function () {
                return !(!i.history || !history.pushState)
            }, b.draganddrop = function () {
                var t = d.createElement("div");
                return "draggable" in t || "ondragstart" in t && "ondrop" in t
            }, b.websockets = function () {
                return "WebSocket" in i || "MozWebSocket" in i
            }, b.rgba = function () {
                return T("background-color:rgba(150,255,150,.5)"), F(c.backgroundColor, "rgba")
            }, b.hsla = function () {
                return T("background-color:hsla(120,40%,100%,.5)"), F(c.backgroundColor, "rgba") || F(c.backgroundColor, "hsla")
            }, b.multiplebgs = function () {
                return T("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background)
            }, b.backgroundsize = function () {
                return P("backgroundSize")
            }, b.borderimage = function () {
                return P("borderImage")
            }, b.borderradius = function () {
                return P("borderRadius")
            }, b.boxshadow = function () {
                return P("boxShadow")
            }, b.textshadow = function () {
                return "" === d.createElement("div").style.textShadow
            }, b.opacity = function () {
                return T(n.join("opacity:.55;") + ""), /^0.55$/.test(c.opacity)
            }, b.cssanimations = function () {
                return P("animationName")
            }, b.csscolumns = function () {
                return P("columnCount")
            }, b.cssgradients = function () {
                var t = "background-image:";
                return T((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + n.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), F(c.backgroundImage, "gradient")
            }, b.cssreflections = function () {
                return P("boxReflect")
            }, b.csstransforms = function () {
                return !!P("transform")
            }, b.csstransforms3d = function () {
                var n = !!P("perspective");
                return n && "webkitPerspective" in h.style && o("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, e) {
                    n = 9 === t.offsetLeft && 3 === t.offsetHeight
                }), n
            }, b.csstransitions = function () {
                return P("transition")
            }, b.fontface = function () {
                var r;
                return o('@font-face {font-family:"font";src:url("https://")}', function (t, e) {
                    var n = d.getElementById("smodernizr"),
                        i = n.sheet || n.styleSheet,
                        o = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
                    r = /src/i.test(o) && 0 === o.indexOf(e.split(" ")[0])
                }), r
            }, b.generatedcontent = function () {
                var e;
                return o(["#", f, "{font:0/0 a}#", f, ':after{content:"', p, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
                    e = 3 <= t.offsetHeight
                }), e
            }, b.video = function () {
                var t = d.createElement("video"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (t) {}
                return e
            }, b.audio = function () {
                var t = d.createElement("audio"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (t) {}
                return e
            }, b.localstorage = function () {
                try {
                    return localStorage.setItem(f, f), localStorage.removeItem(f), !0
                } catch (t) {
                    return !1
                }
            }, b.sessionstorage = function () {
                try {
                    return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0
                } catch (t) {
                    return !1
                }
            }, b.webworkers = function () {
                return !!i.Worker
            }, b.applicationcache = function () {
                return !!i.applicationCache
            }, b.svg = function () {
                return !!d.createElementNS && !!d.createElementNS(y, "svg").createSVGRect
            }, b.inlinesvg = function () {
                var t = d.createElement("div");
                return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == y
            }, b.smil = function () {
                return !!d.createElementNS && /SVGAnimate/.test(e.call(d.createElementNS(y, "animate")))
            }, b.svgclippaths = function () {
                return !!d.createElementNS && /SVGClipPath/.test(e.call(d.createElementNS(y, "clipPath")))
            }, b) r(b, A) && (t = A.toLowerCase(), l[t] = b[A](), C.push((l[t] ? "" : "no-") + t));
        return l.input || (l.input = function (t) {
            for (var e = 0, n = t.length; e < n; e++) w[t[e]] = !!(t[e] in u);
            return w.list && (w.list = !(!d.createElement("datalist") || !i.HTMLDataListElement)), w
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), l.inputtypes = function (t) {
            for (var e, n, i, o = 0, r = t.length; o < r; o++) u.setAttribute("type", n = t[o]), (e = "text" !== u.type) && (u.value = p, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && u.style.WebkitAppearance !== s ? (h.appendChild(u), e = (i = d.defaultView).getComputedStyle && "textfield" !== i.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, h.removeChild(u)) : /^(search|tel)$/.test(n) || (e = /^(url|email)$/.test(n) ? u.checkValidity && !1 === u.checkValidity() : u.value != p)), x[t[o]] = !!e;
            return x
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))), l.addTest = function (t, e) {
            if ("object" == typeof t)
                for (var n in t) r(t, n) && l.addTest(n, t[n]);
            else {
                if (t = t.toLowerCase(), l[t] !== s) return l;
                e = "function" == typeof e ? e() : e, h.className += " " + (e ? "" : "no-") + t, l[t] = e
            }
            return l
        }, T(""), u = null, l._version = "2.8.3", l._prefixes = n, l._domPrefixes = v, l._cssomPrefixes = g, l.mq = function (t) {
            var e, n = i.matchMedia || i.msMatchMedia;
            return n ? n(t) && n(t).matches || !1 : (o("@media " + t + " { #" + f + " { position: absolute; } }", function (t) {
                e = "absolute" == (i.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), e)
        }, l.hasEvent = S, l.testProp = function (t) {
            return k([t])
        }, l.testAllProps = P, l.testStyles = o, l.prefixed = function (t, e, n) {
            return e ? P(t, e, n) : P(t, "pfx")
        }, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + C.join(" ")), l
    }(this, this.document), function (t, s) {
        var o, a, e = t.html5 || {},
            r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            l = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            n = "_html5shiv",
            i = 0,
            c = {};

        function d(t, e) {
            var n = t.createElement("p"),
                i = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function h() {
            var t = m.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function f(t) {
            var e = c[t[n]];
            return e || (e = {}, i++, t[n] = i, c[i] = e), e
        }

        function u(t, e, n) {
            return e = e || s, a ? e.createElement(t) : !(i = (n = n || f(e)).cache[t] ? n.cache[t].cloneNode() : l.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren || r.test(t) || i.tagUrn ? i : n.frag.appendChild(i);
            var i
        }

        function p(t) {
            var e, n, i = f(t = t || s);
            return !m.shivCSS || o || i.hasCSS || (i.hasCSS = !!d(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), a || (e = t, (n = i).cache || (n.cache = {}, n.createElem = e.createElement, n.createFrag = e.createDocumentFragment, n.frag = n.createFrag()), e.createElement = function (t) {
                return m.shivMethods ? u(t, e, n) : n.createElem(t)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/\w+/g, function (t) {
                return n.createElem(t), n.frag.createElement(t), 'c("' + t + '")'
            }) + ");return n}")(m, n.frag)), t
        }! function () {
            try {
                var t = s.createElement("a");
                t.innerHTML = "<xyz></xyz>", o = "hidden" in t, a = 1 == t.childNodes.length || function () {
                    s.createElement("a");
                    var t = s.createDocumentFragment();
                    return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                }()
            } catch (t) {
                a = o = !0
            }
        }();
        var m = {
            elements: e.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== e.shivCSS,
            supportsUnknownElements: a,
            shivMethods: !1 !== e.shivMethods,
            type: "default",
            shivDocument: p,
            createElement: u,
            createDocumentFragment: function (t, e) {
                if (t = t || s, a) return t.createDocumentFragment();
                for (var n = (e = e || f(t)).frag.cloneNode(), i = 0, o = h(), r = o.length; i < r; i++) n.createElement(o[i]);
                return n
            }
        };
        t.html5 = m, p(s);
        var g, v = /^$|\b(?:all|print)\b/,
            y = "html5shiv",
            b = !(a || (g = s.documentElement, void 0 === s.namespaces || void 0 === s.parentWindow || void 0 === g.applyElement || void 0 === g.removeNode || void 0 === t.attachEvent));

        function x(t) {
            for (var e, n = t.getElementsByTagName("*"), i = n.length, o = RegExp("^(?:" + h().join("|") + ")$", "i"), r = []; i--;) e = n[i], o.test(e.nodeName) && r.push(e.applyElement(function (t) {
                var e, n = t.attributes,
                    i = n.length,
                    o = t.ownerDocument.createElement(y + ":" + t.nodeName);
                for (; i--;)(e = n[i]).specified && o.setAttribute(e.nodeName, e.nodeValue);
                return o.style.cssText = t.style.cssText, o
            }(e)));
            return r
        }

        function w(a) {
            var l, c, t = f(a),
                e = a.namespaces,
                n = a.parentWindow;
            if (!b || a.printShived) return a;

            function u() {
                clearTimeout(t._removeSheetTimer), l && l.removeNode(!0), l = null
            }
            return void 0 === e[y] && e.add(y), n.attachEvent("onbeforeprint", function () {
                u();
                for (var t, e, n, i = a.styleSheets, o = [], r = i.length, s = Array(r); r--;) s[r] = i[r];
                for (; n = s.pop();)
                    if (!n.disabled && v.test(n.media)) {
                        try {
                            e = (t = n.imports).length
                        } catch (t) {
                            e = 0
                        }
                        for (r = 0; r < e; r++) s.push(t[r]);
                        try {
                            o.push(n.cssText)
                        } catch (t) {}
                    } o = function (t) {
                    for (var e, n = t.split("{"), i = n.length, o = RegExp("(^|[\\s,>+~])(" + h().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), r = "$1" + y + "\\:$2"; i--;)(e = n[i] = n[i].split("}"))[e.length - 1] = e[e.length - 1].replace(o, r), n[i] = e.join("}");
                    return n.join("{")
                }(o.reverse().join("")), c = x(a), l = d(a, o)
            }), n.attachEvent("onafterprint", function () {
                ! function (t) {
                    for (var e = t.length; e--;) t[e].removeNode()
                }(c), clearTimeout(t._removeSheetTimer), t._removeSheetTimer = setTimeout(u, 500)
            }), a.printShived = !0, a
        }
        m.type += " print", (m.shivPrint = w)(s)
    }(this, document), function (t, v) {
        function d(t) {
            return "[object Function]" == o.call(t)
        }

        function y(t) {
            return "string" == typeof t
        }

        function h() {}

        function b(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function x() {
            var t = _.shift();
            S = 1, t ? t.t ? w(function () {
                ("c" == t.t ? P.injectCss : P.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), x()) : S = 0
        }

        function e(t, e, n, i, o) {
            return S = 0, e = e || "j", y(t) ? (s = "c" == e ? F : E, a = t, l = e, c = this.i++, u = n, d = i, h = (h = o) || P.errorTimeout, f = v.createElement(s), m = p = 0, g = {
                t: l,
                s: a,
                e: u,
                a: d,
                x: h
            }, 1 === k[a] && (m = 1, k[a] = []), "object" == s ? f.data = a : (f.src = a, f.type = s), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () {
                r.call(this, m)
            }, _.splice(c, 0, g), "img" != s && (m || 2 === k[a] ? (T.insertBefore(f, $ ? null : C), w(r, h)) : k[a].push(f))) : (_.splice(this.i++, 0, t), 1 == _.length && x()), this;

            function r(t) {
                if (!p && b(f.readyState) && (g.r = p = 1, S || x(), f.onload = f.onreadystatechange = null, t))
                    for (var e in "img" != s && w(function () {
                            T.removeChild(f)
                        }, 50), k[a]) k[a].hasOwnProperty(e) && k[a][e].onload()
            }
            var s, a, l, c, u, d, h, f, p, m, g
        }

        function a() {
            var t = P;
            return t.loader = {
                load: e,
                i: 0
            }, t
        }
        var n, i = v.documentElement,
            w = t.setTimeout,
            C = v.getElementsByTagName("script")[0],
            o = {}.toString,
            _ = [],
            S = 0,
            r = "MozAppearance" in i.style,
            $ = r && !!v.createRange().compareNode,
            T = $ ? i : C.parentNode,
            i = t.opera && "[object Opera]" == o.call(t.opera),
            i = !!v.attachEvent && !i,
            E = r ? "object" : i ? "script" : "img",
            F = i ? "script" : E,
            s = Array.isArray || function (t) {
                return "[object Array]" == o.call(t)
            },
            l = [],
            k = {},
            c = {
                timeout: function (t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            },
            P = function (t) {
                function u(t, e, n, i, o) {
                    var r = function (t) {
                            for (var e, n, t = t.split("!"), i = l.length, o = t.pop(), r = t.length, o = {
                                    url: o,
                                    origUrl: o,
                                    prefixes: t
                                }, s = 0; s < r; s++) n = t[s].split("="), (e = c[n.shift()]) && (o = e(o, n));
                            for (s = 0; s < i; s++) o = l[s](o);
                            return o
                        }(t),
                        s = r.autoCallback;
                    r.url.split(".").pop().split("?").shift(), r.bypass || (e = e && (d(e) ? e : e[t] || e[i] || e[t.split("/").pop().split("?")[0]]), r.instead ? r.instead(t, e, n, i, o) : (k[r.url] ? r.noexec = !0 : k[r.url] = 1, n.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : void 0, r.noexec, r.attrs, r.timeout), (d(e) || d(s)) && n.load(function () {
                        a(), e && e(r.origUrl, o, i), s && s(r.origUrl, o, i), k[r.url] = 2
                    })))
                }

                function e(t, e) {
                    function n(n, t) {
                        if (n) {
                            if (y(n)) t || (a = function () {
                                var t = [].slice.call(arguments);
                                l.apply(this, t), c()
                            }), u(n, a, e, 0, r);
                            else if (Object(n) === n)
                                for (o in i = function () {
                                        var t, e = 0;
                                        for (t in n) n.hasOwnProperty(t) && e++;
                                        return e
                                    }(), n) n.hasOwnProperty(o) && (t || --i || (d(a) ? a = function () {
                                    var t = [].slice.call(arguments);
                                    l.apply(this, t), c()
                                } : a[o] = function (e) {
                                    return function () {
                                        var t = [].slice.call(arguments);
                                        e && e.apply(this, t), c()
                                    }
                                }(l[o])), u(n[o], a, e, o, r))
                        } else t || c()
                    }
                    var i, o, r = !!t.test,
                        s = t.load || t.both,
                        a = t.callback || h,
                        l = a,
                        c = t.complete || h;
                    n(r ? t.yep : t.nope, !!s), s && n(s)
                }
                var n, i, o = this.yepnope.loader;
                if (y(t)) u(t, 0, o, 0);
                else if (s(t))
                    for (n = 0; n < t.length; n++) y(i = t[n]) ? u(i, 0, o, 0) : s(i) ? P(i) : Object(i) === i && e(i, o);
                else Object(t) === t && e(t, o)
            };
        P.addPrefix = function (t, e) {
            c[t] = e
        }, P.addFilter = function (t) {
            l.push(t)
        }, P.errorTimeout = 1e4, null == v.readyState && v.addEventListener && (v.readyState = "loading", v.addEventListener("DOMContentLoaded", n = function () {
            v.removeEventListener("DOMContentLoaded", n, 0), v.readyState = "complete"
        }, 0)), t.yepnope = a(), t.yepnope.executeStack = x, t.yepnope.injectJs = function (t, e, n, i, o, r) {
            var s, a, l = v.createElement("script"),
                i = i || P.errorTimeout;
            for (a in l.src = t, n) l.setAttribute(a, n[a]);
            e = r ? x : e || h, l.onreadystatechange = l.onload = function () {
                !s && b(l.readyState) && (s = 1, e(), l.onload = l.onreadystatechange = null)
            }, w(function () {
                s || e(s = 1)
            }, i), o ? l.onload() : C.parentNode.insertBefore(l, C)
        }, t.yepnope.injectCss = function (t, e, n, i, o, r) {
            var s, i = v.createElement("link"),
                e = r ? x : e || h;
            for (s in i.href = t, i.rel = "stylesheet", i.type = "text/css", n) i.setAttribute(s, n[s]);
            o || (C.parentNode.insertBefore(i, C), w(e, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, function (i) {
        window.Global = window.Global || {}, i.extend(Global, {
            Weather: {
                init: function () {
                    i(".weather").each(function () {
                        var t, e, n = i(this).find("code").text();
                        n && (t = "//www.service-res.com/weather/v2/" + n + "/?callback=?", e = i(this), i.getJSON(t, "", function (t) {
                            t && (e.find(".degree").html(t.Temperature), e.find(".condition").html(t.Description), e.find("img").addClass(t.Image), e.show())
                        }))
                    })
                }
            },
            LeavingSiteDisclaimer: {
                headerHtml: '<div class="leavingSite"><div class="header">Leaving Site Disclaimer</div>',
                footerHtml: '<div class="footer"><a class="disclaimerProceed" href="#" target="_blank" rel="noopener noreferrer">Click here to proceed</a></div></div>',
                init: function () {
                    i.fancybox && FMG && FMG.RootLocation && FMG.LeavingSiteDisclaimer && i("body").on("click", "a", function () {
                        if (i(this).hasClass("disclaimerProceed") || i(this).hasClass("fmg-bypass-disclaimer")) i.fancybox.close();
                        else {
                            var t = i(this).prop("href");
                            if (t && (0 == t.indexOf("http://") || 0 == t.indexOf("https://")) && -1 == t.indexOf(FMG.RootLocation)) {
                                var e = i(this).prop("target"),
                                    n = Global.LeavingSiteDisclaimer.footerHtml,
                                    n = e ? n.replace("_blank", e) : n.replace('target="_blank"', "");
                                return i.fancybox.open(Global.LeavingSiteDisclaimer.headerHtml + FMG.LeavingSiteDisclaimer + n.replace("#", i(this).prop("href"))), !1
                            }
                        }
                    })
                }
            },
            Mobile: {
                init: function () {
                    window.Global.Mobile.refreshWindow(), i(window).on("resize", window.Global.Mobile.refreshWindow), i("nav #navButton").on("click", function () {
                        0 == i("nav ul:visible").length ? i("nav>.container>ul,nav>ul").show() : i("nav>.container>ul,nav>ul").hide()
                    }), i("nav .subnavButton").on("click", function () {
                        0 == i(this).parent().siblings("ul:visible").length ? (i(this).addClass("down"), i(this).parent().siblings("ul").show()) : (i(this).removeClass("down"), i(this).parent().siblings("ul").hide())
                    })
                },
                refreshWindow: function () {
                    i(window).width() < 480 ? (i(".video-player").length && (i(".video-player, .video-player embed").attr("width", "315px"), i(".video-player, .video-player embed").attr("height", "177px")), i("#calcContent").length && (i(".responsive").show(), i("#calcFrame").hide())) : (i(".video-player").length && (i(".video-player, .video-player embed").attr("width", "630px"), i(".video-player, .video-player embed").attr("height", "354px")), i("#calcContent").length && (i(".responsive").hide(), i("#calcFrame").show()))
                }
            },
            Blog: {
                init: function () {
                    i("a.show-all").on("click", function () {
                        return i("div.show-all").show(), i("a.show-all").hide(), !1
                    })
                }
            },
            FmgTokenReplacer: {
                init: function () {
                    i(".fmg-token-replacer").each(function () {
                        var t = i(this),
                            e = t.data("iframe-src");
                        e && (e = e.replace("{PublicIdentifier}", FMG.PartyPublicIdentifier).replace("{RootLocation}", encodeURIComponent(FMG.RootLocation)).replace("{PageURL}", encodeURIComponent(document.location)), t.attr("src", e))
                    })
                }
            }
        }), i(window.Global.Weather.init), i(window.Global.LeavingSiteDisclaimer.init), i(window.Global.Mobile.init), i(window.Global.Blog.init), i(window.Global.FmgTokenReplacer.init)
    }(jQuery), $("input.awesomplete").on("awesomplete-selectcomplete", function () {
        var t = $(this).val(),
            e = $(".c-team-search__list--hidden li").filter(function () {
                return $.text([this]).trim() === t.trim()
            }).data("url");
        window.location.href = e, window.location.href = e
    }), $(document).ready(function () {
        function e() {
            var t = window,
                e = "inner";
            return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
                width: t[e + "Width"],
                height: t[e + "Height"]
            }
        }

        function t() {
            e().width <= 991 ? $(".ScaleToFit.parallax").addClass("noParallaxMobile") : 992 <= e().width && $(".ScaleToFit.parallax").removeClass("noParallaxMobile")
        }
        t();

        function n(t, e) {
            this.el = t || {}, this.multiple = e || !1, this.el.find(".js-dropdown__toggle").on("click", {
                el: this.el,
                multiple: this.multiple
            }, this.dropdown)
        }
        n.prototype.dropdown = function (t) {
            var e = t.data.el;
            $this = $(this), $next = $this.next(), $next.slideToggle(), $this.parent().toggleClass("open"), t.data.multiple || e.find(".js-accordion__submenu").not($next).not($next).slideUp().parent().removeClass("open")
        };
        new n($(".c-topnav__container"), !1), new n($(".js-additional"), !1);
        $(".js-navbar__toggle").on("click", function (t) {
            t.preventDefault(), ($("body").toggleClass("c-nav__expanded"), $("html").toggleClass("c-nav__expanded"), $(this).toggleClass("c-circle__expand"), $(".js-circle__expand").toggleClass("c-circle__expand"), $(".js-circle-nav").toggleClass("c-circle__expanded"), $(".c-topnav__menu-item").hasClass("open") && ($(".c-topnav__menu-item").removeClass("open"), $(".dropdown-toggle").next().removeAttr("style")))
        }), $(window).on("resize", function () {
             ($("body").hasClass("c-nav__expanded") || $("html").hasClass("c-nav__expanded")) && ($("body").removeClass("c-nav__expanded"), $("html").removeClass("c-nav__expanded")), $(".c-topnav__menu-item").hasClass("open") && ($(".c-topnav__menu-item").removeClass("open"), $(".dropdown-toggle").next().removeAttr("style")), 991 <= e().width && ($(".js-circle-nav").hasClass("c-circle__expanded") || $(".js-circle__expand").hasClass("c-circle__expanded")) && ($(".js-circle-nav").removeClass("c-circle__expanded"), $(".js-circle__expand").removeClass("c-circle__expand")), t()
        }), $("li").has("ul").find("> a:first-child").addClass("dropdown-text"), $(".dropdown-text + a").addClass("dropdown-toggle");
        var i = window.location;
        $("nav .c-topnav__navwrapper ul li a").filter(function () {
            return this.href == i
        }).addClass("selected"), $("nav .c-topnav__navwrapper li li a.selected").parent().parent().siblings("a").addClass("selected"), $.stellar({
            horizontalScrolling: !1
        }), $(window).scroll(function () {
            50 < $(this).scrollTop() ? $(".back-to-top").fadeIn("slow") : $(".back-to-top").fadeOut("slow")
        }), $(".back-to-top").click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 500), !1
        }), $(".js-page-down").click(function () {
            return $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top
            }, 500), !1
        }), $(".section.section_Rotator").each(function () {
            var o = $(this).find(".owl-carousel"),
                r = $(this).find(".js-rotator-nav-next"),
                s = $(this).find(".js-rotator-nav-prev"),
                t = $(this).find(".c-rotator-dots"),
                e = $(this).find(".c-rotator-nav__wrapper"),
                a = $(this).find(".owl-dot"),
                n = $(this).find(".c-slide-auto").data("slideautoplay"),
                i = parseInt($(this).find(".c-slide-int").data("slideint").toString() + "000");
            o.on("initialized.owl.carousel", function (t) {
                $(".c-rotator-item").css("display", "block")
            }), o.owlCarousel({
                animateOut: "u-animate--out",
                animateIn: "u-animate--in",
                nav: !0,
                navText: ['<div class="c-rotator-nav c-rotator-nav-prev"><div class="c-rotator-nav-item--prev js-rotator-nav-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div></div>', '<div class="c-rotator-nav c-rotator-nav-next"><div class="c-rotator-nav-item--next js-rotator-nav-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div></div>'],
                loop: !0,
                smartSpeed: 1e3,
                autoplay: n,
                autoplayTimeout: i,
                mouseDrag: !1,
                touchDrag: !1,
                navContainer: e,
                dots: !0,
                dotsContainer: t,
                items: 1,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
            var l, c = "animate",
                u = !1;
            o.on("change.owl.carousel", function (t) {
                l = t.item.index
            }), o.on("changed.owl.carousel", function (t) {
                var e = t.item.index,
                    n = l <= e ? "Next" : "Prev",
                    i = {
                        moveIn: {
                            item: $(".owl-item", o).eq(e),
                            effect: c + "In" + n
                        },
                        moveOut: {
                            item: $(".owl-item", o).eq(l),
                            effect: c + "Out" + n
                        },
                        run: function (t) {
                            var e = this[t],
                                n = "animated owl-animated-" + ("moveIn" == t ? "in" : "out") + " " + e.effect,
                                i = o.find(".owl-prev, .owl-next, .owl-dot, .owl-stage");
                            i.css("pointerEvents", "none"), r.css("pointerEvents", "none"), s.css("pointerEvents", "none"), a.css("pointerEvents", "none"), e.item.stop().addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                e.item.removeClass(n), i.css("pointerEvents", "auto"), r.css("pointerEvents", "auto"), s.css("pointerEvents", "auto"), a.css("pointerEvents", "auto")
                            })
                        }
                    };
                u || (i.run("moveOut"), i.run("moveIn"))
            }), o.on("drag.owl.carousel", function (t) {
                u = !0
            }), o.on("dragged.owl.carousel", function (t) {
                u = !1
            }), s.on("click", function () {
                o.trigger("prev.owl.carousel")
            }), r.on("click", function () {
                o.trigger("next.owl.carousel")
            })
        }), $(".section_Boxes .box .btn").css("visibility", "visible"), jQuery.validator.addMethod("phoneUS", function (t, e) {
            return t = t.replace(/\s+/g, ""), this.optional(e) || 9 < t.length && t.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
        }, "Please specify a valid phone number"), $.validator.addMethod("customemail", function (t, e) {
            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
        }, "Please specify a valid phone email"), $(".contactForm").each(function () {
            $(this).validate({
                rules: {
                    Phone: {
                        phoneUS: !0
                    },
                    Email: {
                        email: !0
                    }
                },
                errorElement: "label"
            })
        }), $(".c-header-btn--link").each(function () {
            var t = $(this).css("color"),
                e = $(this).attr("data-text-hover"),
                n = $(this).css("background-color"),
                i = $(this).attr("data-bg-color-hover"),
                o = $(this).css("border-width"),
                r = $(this).attr("ddata-border-width-hover"),
                s = $(this).css("border-color"),
                a = $(this).attr("data-border-color-hover");
            void 0 !== t && !1 !== t && $(this).on("mouseenter", function () {
                $(this).css({
                    color: e
                }).on("mouseleave", function () {
                    $(this).css({
                        color: t
                    })
                })
            }), void 0 !== i && !1 !== i && $(this).on("mouseenter", function () {
                $(this).css({
                    "background-color": i
                }).on("mouseleave", function () {
                    $(this).css({
                        "background-color": n
                    })
                })
            }), void 0 !== r && !1 !== r && $(this).on("mouseenter", function () {
                $(this).css({
                    "border-width": r
                }).on("mouseleave", function () {
                    $(this).css({
                        "border-width": o
                    })
                })
            }), void 0 !== a && !1 !== a && $(this).on("mouseenter", function () {
                $(this).css({
                    "border-color": a
                }).on("mouseleave", function () {
                    $(this).css({
                        "border-color": s
                    })
                })
            })
        }), $(".sectionButtonHover").each(function () {
            var t = $(this).css("color"),
                e = $(this).attr("data-hover-text-color"),
                n = $(this).css("background-color"),
                i = $(this).attr("data-hover-bg-color"),
                o = $(this).css("border-width"),
                r = $(this).attr("data-hover-border-width"),
                s = $(this).css("border-color"),
                a = $(this).attr("data-hover-border-color");
            void 0 !== e && !1 !== t && $(this).on("mouseenter", function () {
                $(this).css({
                    color: e
                }).on("mouseleave", function () {
                    $(this).css({
                        color: t
                    })
                })
            }), void 0 !== i && !1 !== i && $(this).on("mouseenter", function () {
                $(this).css({
                    "background-color": i
                }).on("mouseleave", function () {
                    $(this).css({
                        "background-color": n
                    })
                })
            }), void 0 !== r && !1 !== r && $(this).on("mouseenter", function () {
                $(this).css({
                    "border-width": r
                }).on("mouseleave", function () {
                    $(this).css({
                        "border-width": o
                    })
                })
            }), void 0 !== a && !1 !== a && $(this).on("mouseenter", function () {
                $(this).css({
                    "border-color": a
                }).on("mouseleave", function () {
                    $(this).css({
                        "border-color": s
                    })
                })
            })
        }), $(".c-content__list .list-content ul").each(function () {
            $(this);
            12 <= $(this).find("li").length && $(this).find("li:gt(12)").hide().end().append($('<li class="c-articles--more"><i class="fa fa-plus" aria-hidden="true"> More...</i></li>').on("click", function () {
                $(this).siblings(":hidden").show().end().remove()
            }))
        });
        var o = document.querySelector(".c-topnav__container"),
            r = document.querySelectorAll(".c-topnav__menu-item"),
            s = document.querySelector(".c-header-nav--btn");
        void 0 !== s && null != s && (s.classList.add("c-nav-item-count--" + r.length), o.classList.add("u-margin-bottom--0"))
    }), "undefined" === Modernizr) throw "this page requires the Modernizr javascript library and it's not present in this page";
if ("undefined" === jQuery) throw "this page requires the jQuery javascript library and it's not present in this page";
if (! function (n) {
        window.Global = window.Global || {}, window.Global.Forms = window.Global.Forms || {}, n.extend(Global.Forms, {
            Activate: {
                initialize: function () {
                    Global.Forms.Activate.onInitialize(), Global.Forms.Activate.activateVisibleFormElements(), Global.Forms.Activate.afterInitialize()
                },
                onInitialize: function () {},
                afterInitialize: function () {},
                activateVisibleFormElements: function () {
                    var t = n("form");
                    null != t && t.each(function () {
                        var t, e = n(this);
                        null == e || null != (t = e.find(":input[disabled]:visible")) && 0 != t.length && t.each(function () {
                            var t = n(this);
                            t.removeAttr("disabled"), t.hasClass("disabled") && t.removeClass("disabled")
                        })
                    })
                }
            }
        }), n(window.Global.Forms.Activate.initialize)
    }(jQuery), "undefined" === Modernizr) throw "this page requires the Modernizr javascript library and it's not present in this page";
if ("undefined" === jQuery) throw "this page requires the jQuery javascript library and it's not present in this page";
if (! function (t) {
        var e = navigator.userAgent.toLowerCase();
        void 0 === t.browser && (t.browser = {}), t.browser.chrome = /chrome/.test(e), t.browser.chrome && (e = (e = e.substring(e.indexOf("chrome/") + 7)).substring(0, e.indexOf(".")), t.browser.version = e, t.browser.safari = !1), t.browser.safari && (e = (e = e.substring(e.indexOf("safari/") + 7)).substring(0, e.indexOf(".")), t.browser.version = e)
    }(jQuery), function (n) {
        window.Global = window.Global || {}, window.Global.Forms = window.Global.Forms || {}, n.extend(Global.Forms, {
            PlaceholderShim: {
                initialize: function () {
                    Modernizr.input.placeholder || Global.Forms.PlaceholderShim.setPlaceHolders()
                },
                setPlaceHolders: function () {
                    n("input[placeholder],textarea[placeholder]").each(function () {
                        var t = n(this);
                        "" == t.val() && "" != t.attr("placeholder") && (t.val(t.attr("placeholder")), t.focus(function () {
                            var t = n(this);
                            t.val() == t.attr("placeholder") && t.val("")
                        }), t.blur(function () {
                            var t = n(this);
                            "" == t.val() && t.val(t.attr("placeholder"))
                        }))
                    })
                }
            },
            PlaceholderFormSubmitShim: {
                initialize: function () {
                    Modernizr.input.placeholder || Global.Forms.PlaceholderFormSubmitShim.setOnSubmitShim()
                },
                setOnSubmitShim: function () {
                    var t = n("form");
                    null != t && 0 != t.length && t.each(function () {
                        var t = n(this);
                        null != t && 0 != t.find(":input[placeholder]").length && t.submit(Global.Forms.PlaceholderFormSubmitShim.clearPlaceholders)
                    })
                },
                clearPlaceholders: function () {
                    var t, e = n(this);
                    null == e || 0 != (t = e.find(":input[placeholder]")).length && t.each(function () {
                        var t = n(this);
                        t.val() == t.attr("placeholder") && t.val("")
                    })
                }
            }
        }), n(window.Global.Forms.PlaceholderShim.initialize), n(window.Global.Forms.PlaceholderFormSubmitShim.initialize)
    }(jQuery), function (t) {
        t.browser.chrome && t("[pattern*='(']").each(function () {
            t(this).prop("pattern", null)
        })
    }(jQuery), "undefined" === Modernizr) throw "this page requires the Modernizr javascript library and it's not present in this page";
if ("undefined" == typeof jQuery) throw "this page requires the jQuery javascript library and it's not present in this page";
if (void 0 === window.Global) throw "this page requires the Global javascript library and it's not present in this page";
if (void 0 === window.jQuery.fancybox) throw "this page requires the fancybox javascript library and it's not present in this page";
if (! function (i) {
        window.Global = window.Global || {}, window.Global.Events = window.Global.Events || {}, i.extend(Global.Events, {
            FormSection: null,
            initialize: function () {
                i("button.submit.register").on("click", function () {
                    null == Global.Events.FormSection && (Global.Events.FormSection = i("#eventRegistrationSection").detach());
                    var t, e, n = i(this).attr("data-identifier");
                    null != n && (null == (t = Global.Events.FormSection.find("form#EventRegistrationSignupForm")) || null != (e = t.find("input#EventAssetIdentifier")) && (e.val(n), i.fancybox.open(Global.Events.FormSection.html(), {
                        afterLoad: function () {
                            i("form#EventRegistrationSignupForm").find(":input:visible:not(input[type='checkbox'])").val(""), Modernizr.input.placeholder || Global.Forms.PlaceholderShim.setPlaceHolders(), window.Global.Forms.Activate.initialize(), setTimeout(function () {
                                Global.Events.registerSubmit(i("form#EventRegistrationSignupForm"))
                            }, 500)
                        }
                    })))
                })
            },
            registerSubmit: function (t) {
                t.submit(Global.Forms.PlaceholderFormSubmitShim.clearPlaceholders), t.submit(window.Global.Events.submit)
            },
            submit: function () {
                var n = i(this);
                n.find(".loading").show(), n.find(".msg.formError").hide(), n.find(".msg.formSuccess").hide();
                var t = n.serialize().concat("&IsNotSpam=true");
                n.find(":input:visible").attr("disabled", "disabled");
                var e = this.action.concat("?").concat(t);
                return i.getJSON(e.concat("&callback=?"), function (t) {
                    var e;
                    t.success ? (e = n.find(".msg.formSuccess"), null != t.message && "" != t.message && null != e && e.html(t.message), null != e && e.show(), n.find(":input:visible:not(input[type='checkbox'])").val(""), Modernizr.input.placeholder || Global.Forms.PlaceholderShim.setPlaceHolders()) : void 0 !== t.message && n.find(".msg.formError").html(t.message).show(), n.find(".loading").hide(), n.find(":input:visible:disabled").removeAttr("disabled"), Modernizr.input.placeholder || Global.Forms.PlaceholderShim.setPlaceHolders()
                }), !1
            }
        }), i(window.Global.Events.initialize)
    }(jQuery), window.Global = window.Global || {}, window.Global.FormSubmit = window.Global.FormSubmit || {}, "undefined" == typeof jQuery) throw "this page is missing the jquery javascript library.";
$.extend(Global.FormSubmit, {
        init: function () {
            $("form#newsletterSignup :disabled").prop("disabled", !1), $("form#newsletterSignup button.disabled").removeClass("disabled"), $("form#newsletterSignup").on("submit", Global.FormSubmit.submit)
        },
        submit: function () {
            var e = $(this);
            e.find(".loading").show(), e.find(".msg.formError").hide(), e.find(".msg.formSuccess").hide();
            var t = e.serialize().concat("&IsNotSpam=true");
            e.find("input").attr("disabled", "disabled"), e.find("button[type='submit']").attr("disabled", "disabled").addClass("disabled");
            var n = this.action + "?" + t;
            return $.getJSON(n + "&callback=?", function (t) {
                t.success ? (e.find("input").filter(":visible").val(""), e.find(".msg.formSuccess").show()) : void 0 !== t.message && e.find(".msg.formError").html(t.message).show(), e.find(".loading").hide(), e.find(":disabled").removeAttr("disabled"), e.find("button[type='submit']").removeClass("disabled")
            }), !1
        }
    }), $(function () {
        $("form.contactForm").on("submit", function () {
            var e = $(this);
            if (e.validate(), !1 === e.valid()) return !1;
            var t = this.action + "?" + e.serialize() + "&isNotSpam=true";
            return e.find(".c-contact__form").addClass("o-loading__opacity"), e.find(".c-submit__loading").show(), e.find(".msg.formError").hide(), e.find(".msg.formSuccess").hide(), e.find(".submit").attr("disabled", !0).addClass("disabled"), $.getJSON(t + "&callback=?", function (t) {
                e.find(".c-submit__loading").hide(), e.find(".c-contact__form").removeClass("o-loading__opacity"), t.success ? (e.find(".msg.formSuccess").show(), e.find(".submit").hide()) : (e.find(".msg.formError").show(), e.find(".submit").removeAttr("disabled").removeClass("disabled"), t.robot && alert(t.message))
            }), !1
        }), $("form.requestPrivacyForm").on("submit", function () {
            var e = $(this);
            if (e.validate(), !1 === e.valid()) return !1;
            var t = this.action + "?" + e.serialize() + "&isNotSpam=true";
            return e.find(".c-contact__form").addClass("o-loading__opacity"), e.find(".c-submit__loading").show(), e.find(".msg.formError").hide(), e.find(".msg.formSuccess").hide(), e.find(".submit").attr("disabled", !0).addClass("disabled"), $.getJSON(t + "&callback=?", function (t) {
                e.find(".c-submit__loading").hide(), e.find(".c-contact__form").removeClass("o-loading__opacity"), t.success ? (e.find(".msg.formSuccess").show(), e.find(".submit").hide()) : (e.find(".msg.formError").show(), e.find(".submit").removeAttr("disabled").removeClass("disabled"), t.robot && alert(t.message))
            }), !1
        }), $("form.c-referralCampaign-form").on("submit", function () {
            var e = $(this);
            if (e.validate(), !1 === e.valid()) return !1;
            var t = this.action + "?" + e.serialize() + "&isNotSpam=true";
            return e.find(".o-circle__loading-animation").show(), e.find(".c-referral__form").addClass("u-opacity-40"), e.find(".msg.formError").hide(), e.find(".msg.formSuccess").hide(), e.find(".submit").attr("disabled", !0).addClass("disabled"), $.getJSON(t + "&callback=?", function (t) {
                e.find(".o-circle__loading-animation").hide(), t.success ? (e.hide(), $().append(".c-referral__container"), $(".c-referral__success").show(), $(".c-referral__download").click(function () {
                    window.location = $(this).data("contenturl")
                })) : (e.find(".c-referral__form").removeClass("u-opacity-40"), $('<div class="u-submission__error"><i class="c-icn__remove-x js-msg__close"></i> Sorry. We are unable to process your request at this time.</div>').prependTo(".c-referralCampaign-form"), $(".u-submission__error").show(), $(".js-msg__close").click(function () {
                    $(this).parent().slideUp("normal", function () {
                        $(this).remove()
                    })
                }), e.find(".submit").removeAttr("disabled").removeClass("disabled"), t.robot && alert(t.message))
            }), !1
        }), jQuery.validator.addMethod("phoneUS", function (t, e) {
            return t = t.replace(/\s+/g, ""), this.optional(e) || 9 < t.length && t.match(/^(\+?1 ?[_\-\*/\\,\.]? ?)?\(?[2-9a-zA-Z][0-9a-zA-Z]{2}\)? ?[_\-\*/\\,\.]? ?[0-9a-zA-Z]{3} ?[_\-\*/\\,\.]? ?[0-9a-zA-Z]{4}[ a-wyzA-WYZ]{0,5}( ?(x|e|ex|ext)\.? ?\d{1,7})?$/)
        }, "Please enter a valid phone number"), jQuery.validator.addMethod("require_from_group", function (t, e, n) {
            var i = this,
                o = n[0],
                r = n[1],
                s = jQuery(r, e.form).filter(function () {
                    return i.elementValue(this)
                }).length >= o;
            return jQuery(r, e.form).off(".require_from_group"), this.settings.onkeyup && jQuery(r, e.form).on({
                "keyup.require_from_group": function (t) {
                    jQuery(r, e.form).valid()
                }
            }), this.settings.onfocusin && jQuery(r, e.form).on({
                "focusin.require_from_group": function (t) {
                    jQuery(r, e.form).valid()
                }
            }), this.settings.click && jQuery(r, e.form).on({
                "click.require_from_group": function (t) {
                    jQuery(r, e.form).valid()
                }
            }), this.settings.onfocusout && jQuery(r, e.form).on({
                "focusout.require_from_group": function (t) {
                    jQuery(r, e.form).valid()
                }
            }), s
        }, jQuery.validator.format("Please fill at least {0} of these fields.")), $(".c-referralCampaign-form").each(function () {
            $(this).validate({
                groups: {
                    referralInfo: "referralPhone referralEmail"
                },
                rules: {
                    referralPhone: {
                        require_from_group: [1, ".js-contact-info-group"],
                        phoneUS: {
                            required: !0
                        }
                    },
                    referralEmail: {
                        require_from_group: [1, ".js-contact-info-group"],
                        email: {
                            required: !0,
                            email: !0
                        }
                    },
                    referredByEmail: {
                        email: {
                            email: !0,
                            required: !0
                        }
                    }
                },
                messages: {
                    referredByName: "Please enter your name",
                    referredByEmail: {
                        required: "Please enter your email",
                        email: "Your email address does not look valid"
                    },
                    referralName: "Please enter your friend's name",
                    referralEmail: {
                        require_from_group: "Please enter your friend's email or phone number",
                        email: "Your friend's email does not look valid"
                    },
                    referralPhone: {
                        require_from_group: "Please enter your friend's email or phone number"
                    }
                },
                errorContainer: ".u-form__error",
                errorLabelContainer: ".u-form__error ul",
                wrapper: "li",
                errorElement: "label"
            })
        })
    }), $(function () {
        $("form#unsubscribe").on("submit", function () {
            var e = $(this),
                t = this.action + "&isNotSpam=true";
            return e.find(".loading").show(), e.find(".msg.formError").hide(), e.find(".msg.formSuccess").hide(), e.find(".submit").attr("disabled", !0).addClass("disabled"), $.getJSON(t + "&callback=?", function (t) {
                e.find(".loading").hide(), t.success ? e.find(".msg.formSuccess").show() : (e.find(".msg.formError").show(), e.find(".submit").removeAttr("disabled").removeClass("disabled"), t.robot && alert(t.message))
            }), !1
        })
    }), $(Global.FormSubmit.init),
    function () {
        var i = function (t, e) {
            var n = this;
            this.isOpened = !1, this.input = s(t), this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("aria-autocomplete", "list"), e = e || {},
                function (t, e, n) {
                    for (var i in e) {
                        var o = e[i],
                            r = t.input.getAttribute("data-" + i.toLowerCase());
                        "number" == typeof o ? t[i] = parseInt(r) : !1 === o ? t[i] = null !== r : o instanceof Function ? t[i] = null : t[i] = r, t[i] || 0 === t[i] || (t[i] = i in n ? n[i] : o)
                    }
                }(this, {
                    minChars: 2,
                    maxItems: 10,
                    autoFirst: !1,
                    data: i.DATA,
                    filter: i.FILTER_CONTAINS,
                    sort: i.SORT_BYLENGTH,
                    item: i.ITEM,
                    replace: i.REPLACE
                }, e), this.index = -1, this.container = s.create("div", {
                    className: "awesomplete",
                    around: t
                }), this.ul = s.create("ul", {
                    hidden: "hidden",
                    inside: this.container
                }), this.status = s.create("span", {
                    className: "visually-hidden",
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions",
                    inside: this.container
                }), s.bind(this.input, {
                    input: this.evaluate.bind(this),
                    blur: this.close.bind(this, {
                        reason: "blur"
                    }),
                    keydown: function (t) {
                        var e = t.keyCode;
                        n.opened && (13 === e && n.selected ? (t.preventDefault(), n.select()) : 27 === e ? n.close({
                            reason: "esc"
                        }) : 38 !== e && 40 !== e || (t.preventDefault(), n[38 === e ? "previous" : "next"]()))
                    }
                }), s.bind(this.input.form, {
                    submit: this.close.bind(this, {
                        reason: "submit"
                    })
                }), s.bind(this.ul, {
                    mousedown: function (t) {
                        var e = t.target;
                        if (e !== this) {
                            for (; e && !/li/i.test(e.nodeName);) e = e.parentNode;
                            e && 0 === t.button && (t.preventDefault(), n.select(e, t.target))
                        }
                    }
                }), this.input.hasAttribute("list") ? (this.list = "#" + this.input.getAttribute("list"), this.input.removeAttribute("list")) : this.list = this.input.getAttribute("data-list") || e.list || [], i.all.push(this)
        };

        function o(t) {
            var e = Array.isArray(t) ? {
                label: t[0],
                value: t[1]
            } : "object" == typeof t && "label" in t && "value" in t ? t : {
                label: t,
                value: t
            };
            this.label = e.label || e.value, this.value = e.value
        }
        i.prototype = {
            set list(t) {
                var o;
                Array.isArray(t) ? this._list = t : "string" == typeof t && -1 < t.indexOf(",") ? this._list = t.split(/\s*,\s*/) : (t = s(t)) && t.children && (o = [], n.apply(t.children).forEach(function (t) {
                    var e, n, i;
                    t.disabled || (e = t.textContent.trim(), n = t.value || e, i = t.label || e, "" !== n && o.push({
                        label: i,
                        value: n
                    }))
                }), this._list = o), document.activeElement === this.input && this.evaluate()
            },
            get selected() {
                return -1 < this.index
            },
            get opened() {
                return this.isOpened
            },
            close: function (t) {
                this.opened && (this.ul.setAttribute("hidden", ""), this.isOpened = !1, this.index = -1, s.fire(this.input, "awesomplete-close", t || {}))
            },
            open: function () {
                this.ul.removeAttribute("hidden"), this.isOpened = !0, this.autoFirst && -1 === this.index && this.goto(0), s.fire(this.input, "awesomplete-open")
            },
            next: function () {
                var t = this.ul.children.length;
                this.goto(this.index < t - 1 ? this.index + 1 : t ? 0 : -1)
            },
            previous: function () {
                var t = this.ul.children.length,
                    e = this.index - 1;
                this.goto(this.selected && -1 != e ? e : t - 1)
            },
            goto: function (t) {
                var e = this.ul.children;
                this.selected && e[this.index].setAttribute("aria-selected", "false"), -1 < (this.index = t) && 0 < e.length && (e[t].setAttribute("aria-selected", "true"), this.status.textContent = e[t].textContent, s.fire(this.input, "awesomplete-highlight", {
                    text: this.suggestions[this.index]
                }))
            },
            select: function (t, e) {
                var n;
                t ? this.index = s.siblingIndex(t) : t = this.ul.children[this.index], t && (n = this.suggestions[this.index], s.fire(this.input, "awesomplete-select", {
                    text: n,
                    origin: e || t
                }) && (this.replace(n), this.close({
                    reason: "select"
                }), s.fire(this.input, "awesomplete-selectcomplete", {
                    text: n
                })))
            },
            evaluate: function () {
                var e = this,
                    n = this.input.value;
                n.length >= this.minChars && 0 < this._list.length ? (this.index = -1, this.ul.innerHTML = "", this.suggestions = this._list.map(function (t) {
                    return new o(e.data(t, n))
                }).filter(function (t) {
                    return e.filter(t, n)
                }).sort(this.sort).slice(0, this.maxItems), this.suggestions.forEach(function (t) {
                    e.ul.appendChild(e.item(t, n))
                }), 0 === this.ul.children.length && e.ul.appendChild(e.item("Sorry, no results", "")), this.open()) : this.close({
                    reason: "nomatches"
                })
            },
            destroy: function () {
                this.input.autocomplete = "on", this.input.value = ""
            }
        }, i.all = [], i.FILTER_CONTAINS = function (t, e) {
            return RegExp(s.regExpEscape(e.trim()), "i").test(t)
        }, i.FILTER_STARTSWITH = function (t, e) {
            return RegExp("^" + s.regExpEscape(e.trim()), "i").test(t)
        }, i.SORT_BYLENGTH = function (t, e) {
            return t.length !== e.length ? t.length - e.length : t < e ? -1 : 1
        }, i.ITEM = function (t, e) {
            var n = "" === e.trim() ? t : t.replace(RegExp(s.regExpEscape(e.trim()), "gi"), "<mark>$&</mark>");
            return s.create("li", {
                innerHTML: n,
                "aria-selected": "false"
            })
        }, i.REPLACE = function (t) {
            this.input.value = t.value
        }, i.DATA = function (t) {
            return t
        }, Object.defineProperty(o.prototype = Object.create(String.prototype), "length", {
            get: function () {
                return this.label.length
            }
        }), o.prototype.toString = o.prototype.valueOf = function () {
            return "" + this.label
        };
        var n = Array.prototype.slice;

        function s(t, e) {
            return "string" == typeof t ? (e || document).querySelector(t) : t || null
        }

        function t(t, e) {
            return n.call((e || document).querySelectorAll(t))
        }

        function e() {
            t("input.awesomplete").forEach(function (t) {
                new i(t)
            }), window.onunload = function () {
                for (var t = 0; t < i.all.length; ++t) {
                    i.all[t].destroy()
                }
                window.onunload = null
            }
        }
        s.create = function (t, e) {
            var n = document.createElement(t);
            for (var i in e) {
                var o, r = e[i];
                "inside" === i ? s(r).appendChild(n) : "around" === i ? ((o = s(r)).parentNode.insertBefore(n, o), n.appendChild(o)) : i in n ? n[i] = r : n.setAttribute(i, r)
            }
            return n
        }, s.bind = function (e, t) {
            if (e)
                for (var n in t) {
                    var i = t[n];
                    n.split(/\s+/).forEach(function (t) {
                        e.addEventListener(t, i)
                    })
                }
        }, s.fire = function (t, e, n) {
            var i = document.createEvent("HTMLEvents");
            for (var o in i.initEvent(e, !0, !0), n) i[o] = n[o];
            return t.dispatchEvent(i)
        }, s.regExpEscape = function (t) {
            return t.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
        }, s.siblingIndex = function (t) {
            for (var e = 0; t = t.previousElementSibling; e++);
            return e
        }, "undefined" != typeof Document && ("loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)), i.$ = s, i.$$ = t, "undefined" != typeof self && (self.Awesomplete = i), "object" == typeof module && module.exports && (module.exports = i)
    }(),
    function (l, n, o, r) {
        function c(t, e) {
            this.settings = null, this.options = l.extend({}, c.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, l.each(["onResize", "onThrottledResize"], l.proxy(function (t, e) {
                this._handlers[e] = l.proxy(this[e], this)
            }, this)), l.each(c.Plugins, l.proxy(function (t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), l.each(c.Workers, l.proxy(function (t, e) {
                this._pipe.push({
                    filter: e.filter,
                    run: l.proxy(e.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        c.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: n,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, c.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, c.Type = {
            Event: "event",
            State: "state"
        }, c.Plugins = {}, c.Workers = [{
            filter: ["width", "settings"],
            run: function () {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (t) {
                var e = this.settings.margin || "",
                    n = !this.settings.autoWidth,
                    i = this.settings.rtl,
                    o = {
                        width: "auto",
                        "margin-left": i ? e : "",
                        "margin-right": i ? "" : e
                    };
                n || this.$stage.children().css(o), t.css = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    n = null,
                    i = this._items.length,
                    o = !this.settings.autoWidth,
                    r = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = 1 < n || t.items.merge, r[i] = o ? e * n : this._items[i].width();
                this._widths = r
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var t = [],
                    e = this._items,
                    n = this.settings,
                    i = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(e.length / 2),
                    r = n.loop && e.length ? n.rewind ? i : Math.max(i, o) : 0,
                    s = "",
                    a = "";
                for (r /= 2; r--;) t.push(this.normalize(t.length / 2, !0)), s += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
                this._clones = t, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, o = 0, r = []; ++n < e;) i = r[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, r.push(i + o * t);
                this._coordinates = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    n = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(n)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (t) {
                var e = this._coordinates.length,
                    n = !this.settings.autoWidth,
                    i = this.$stage.children();
                if (n && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
                else n && (t.css.width = t.items.width, i.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function () {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function () {
                for (var t, e, n = this.settings.rtl ? 1 : -1, i = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + i, r = o + this.width() * n, s = [], a = 0, l = this._coordinates.length; a < l; a++) t = this._coordinates[a - 1] || 0, e = Math.abs(this._coordinates[a]) + i * n, (this.op(t, "<=", o) && this.op(t, ">", r) || this.op(e, "<", o) && this.op(e, ">", r)) && s.push(a);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], c.prototype.initialize = function () {
            var t, e, n;
            this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t)), this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, c.prototype.setup = function () {
            var e = this.viewport(),
                t = this.options.responsive,
                n = -1,
                i = null;
            t ? (l.each(t, function (t) {
                t <= e && n < t && (n = Number(t))
            }), "function" == typeof (i = l.extend({}, this.options, t[n])).stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : i = l.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: i
                }
            }), this._breakpoint = n, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, c.prototype.optionsLogic = function () {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, c.prototype.prepare = function (t) {
            var e = this.trigger("prepare", {
                content: t
            });
            return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
                content: e.data
            }), e.data
        }, c.prototype.update = function () {
            for (var t = 0, e = this._pipe.length, n = l.proxy(function (t) {
                    return this[t]
                }, this._invalidated), i = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, n).length) && this._pipe[t].run(i), t++;
            this._invalidated = {}, this.is("valid") || this.enter("valid")
        }, c.prototype.width = function (t) {
            switch (t = t || c.Width.Default) {
                case c.Width.Inner:
                case c.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, c.prototype.refresh = function () {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, c.prototype.onThrottledResize = function () {
            n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, c.prototype.onResize = function () {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
        }, c.prototype.registerEventHandlers = function () {
            l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
        }, c.prototype.onDragStart = function (t) {
            var e = null;
            3 !== t.which && (e = l.support.transform ? {
                x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
                y: e[16 === e.length ? 13 : 5]
            } : (e = this.$stage.position(), {
                x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
                y: e.top
            }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(o).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(o).one("mousemove.owl.core touchmove.owl.core", l.proxy(function (t) {
                var e = this.difference(this._drag.pointer, this.pointer(t));
                l(o).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, c.prototype.onDragMove = function (t) {
            var e = null,
                n = null,
                i = null,
                o = this.difference(this._drag.pointer, this.pointer(t)),
                r = this.difference(this._drag.stage.start, o);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + i), n + i)), this._drag.stage.current = r, this.animate(r.x))
        }, c.prototype.onDragEnd = function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t)),
                n = this._drag.stage.current,
                i = 0 < e.x ^ this.settings.rtl ? "left" : "right";
            l(o).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== e.x ? i : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = i, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, c.prototype.closest = function (n, i) {
            var o = -1,
                r = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || l.each(s, l.proxy(function (t, e) {
                return "left" === i && e - 30 < n && n < e + 30 ? o = t : "right" === i && e - r - 30 < n && n < e - r + 30 ? o = t + 1 : this.op(n, "<", e) && this.op(n, ">", s[t + 1] || e - r) && (o = "left" === i ? t + 1 : t), -1 === o
            }, this)), this.settings.loop || (this.op(n, ">", s[this.minimum()]) ? o = n = this.minimum() : this.op(n, "<", s[this.maximum()]) && (o = n = this.maximum())), o
        }, c.prototype.animate = function (t) {
            var e = 0 < this.speed();
            this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
                transform: "translate3d(" + t + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : e ? this.$stage.animate({
                left: t + "px"
            }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: t + "px"
            })
        }, c.prototype.is = function (t) {
            return this._states.current[t] && 0 < this._states.current[t]
        }, c.prototype.current = function (t) {
            return t === r ? this._current : 0 === this._items.length ? r : (t = this.normalize(t), this._current !== t && ((e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            })).data !== r && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })), this._current);
            var e
        }, c.prototype.invalidate = function (t) {
            return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function (t, e) {
                return e
            })
        }, c.prototype.reset = function (t) {
            (t = this.normalize(t)) !== r && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, c.prototype.normalize = function (t, e) {
            var n = this._items.length,
                i = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || n < 1 ? t = r : (t < 0 || n + i <= t) && (t = ((t - i / 2) % n + n) % n + i / 2), t
        }, c.prototype.relative = function (t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, c.prototype.maximum = function (t) {
            var e, n, i, o = this.settings,
                r = this._coordinates.length;
            if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
            else if (o.autoWidth || o.merge) {
                for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && !(i < (n += this._items[e].width() + this.settings.margin)););
                r = e + 1
            } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
            return t && (r -= this._clones.length / 2), Math.max(r, 0)
        }, c.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2
        }, c.prototype.items = function (t) {
            return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, c.prototype.mergers = function (t) {
            return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, c.prototype.clones = function (n) {
            function i(t) {
                return t % 2 == 0 ? o + t / 2 : e - (t + 1) / 2
            }
            var e = this._clones.length / 2,
                o = e + this._items.length;
            return n === r ? l.map(this._clones, function (t, e) {
                return i(e)
            }) : l.map(this._clones, function (t, e) {
                return t === n ? i(e) : null
            })
        }, c.prototype.speed = function (t) {
            return t !== r && (this._speed = t), this._speed
        }, c.prototype.coordinates = function (t) {
            var e, n = 1,
                i = t - 1;
            return t === r ? l.map(this._coordinates, l.proxy(function (t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, i = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[i] || 0)) / 2 * n) : e = this._coordinates[i] || 0, e = Math.ceil(e))
        }, c.prototype.duration = function (t, e, n) {
            return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
        }, c.prototype.to = function (t, e) {
            var n = this.current(),
                i = null,
                o = t - this.relative(n),
                r = (0 < o) - (o < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (i = (((t = n + o) - a) % s + s) % s + a) !== t && i - o <= l && 0 < i - o && (n = i - o, t = i, this.reset(n))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, c.prototype.next = function (t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, c.prototype.prev = function (t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, c.prototype.onTransitionEnd = function (t) {
            if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, c.prototype.viewport = function () {
            var t;
            return this.options.responsiveBaseElement !== n ? t = l(this.options.responsiveBaseElement).width() : n.innerWidth ? t = n.innerWidth : o.documentElement && o.documentElement.clientWidth ? t = o.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
        }, c.prototype.replace = function (t) {
            this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
                return 1 === this.nodeType
            }).each(l.proxy(function (t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, c.prototype.add = function (t, e) {
            var n = this.relative(this._current);
            e = e === r ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
                content: t,
                position: e
            }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, c.prototype.remove = function (t) {
            (t = this.normalize(t, !0)) !== r && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, c.prototype.preloadAutoWidthImages = function (t) {
            t.each(l.proxy(function (t, e) {
                this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function (t) {
                    e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
                }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
            }, this))
        }, c.prototype.destroy = function () {
            for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(o).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, c.prototype.op = function (t, e, n) {
            var i = this.settings.rtl;
            switch (e) {
                case "<":
                    return i ? n < t : t < n;
                case ">":
                    return i ? t < n : n < t;
                case ">=":
                    return i ? t <= n : n <= t;
                case "<=":
                    return i ? n <= t : t <= n
            }
        }, c.prototype.on = function (t, e, n, i) {
            t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
        }, c.prototype.off = function (t, e, n, i) {
            t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
        }, c.prototype.trigger = function (t, e, n, i, o) {
            var r = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                s = l.camelCase(l.grep(["on", t, n], function (t) {
                    return t
                }).join("-").toLowerCase()),
                a = l.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), l.extend({
                    relatedTarget: this
                }, r, e));
            return this._supress[t] || (l.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(a)
            }), this.register({
                type: c.Type.Event,
                name: t
            }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[s] && this.settings[s].call(this, a)), a
        }, c.prototype.enter = function (t) {
            l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
                this._states.current[e] === r && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, c.prototype.leave = function (t) {
            l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
                this._states.current[e]--
            }, this))
        }, c.prototype.register = function (n) {
            var e;
            n.type === c.Type.Event ? (l.event.special[n.name] || (l.event.special[n.name] = {}), l.event.special[n.name].owl || (e = l.event.special[n.name]._default, l.event.special[n.name]._default = function (t) {
                return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
            }, l.event.special[n.name].owl = !0)) : n.type === c.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = l.grep(this._states.tags[n.name], l.proxy(function (t, e) {
                return l.inArray(t, this._states.tags[n.name]) === e
            }, this)))
        }, c.prototype.suppress = function (t) {
            l.each(t, l.proxy(function (t, e) {
                this._supress[e] = !0
            }, this))
        }, c.prototype.release = function (t) {
            l.each(t, l.proxy(function (t, e) {
                delete this._supress[e]
            }, this))
        }, c.prototype.pointer = function (t) {
            var e = {
                x: null,
                y: null
            };
            return (t = (t = t.originalEvent || t || n.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
        }, c.prototype.isNumeric = function (t) {
            return !isNaN(parseFloat(t))
        }, c.prototype.difference = function (t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, l.fn.owlCarousel = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var t = l(this),
                    n = t.data("owl.carousel");
                n || (n = new c(this, "object" == typeof e && e), t.data("owl.carousel", n), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                    n.register({
                        type: c.Type.Event,
                        name: e
                    }), n.$element.on(e + ".owl.carousel.core", l.proxy(function (t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([e]), n[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                    }, n))
                })), "string" == typeof e && "_" !== e.charAt(0) && n[e].apply(n, i)
            })
        }, l.fn.owlCarousel.Constructor = c
    }(window.Zepto || window.jQuery, window, document),
    function (e, n) {
        var i = function (t) {
            this._core = t, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": e.proxy(function (t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, i.prototype.watch = function () {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = n.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, i.prototype.refresh = function () {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, i.prototype.destroy = function () {
            var t, e;
            for (t in n.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
    }(window.Zepto || window.jQuery, window, document),
    function (a, r) {
        var e = function (t) {
            this._core = t, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {
                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                        for (var e = this._core.settings, n = e.center && Math.ceil(e.items / 2) || e.items, i = e.center && -1 * n || 0, o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + i, r = this._core.clones().length, s = a.proxy(function (t, e) {
                                this.load(e)
                            }, this); i++ < n;) this.load(r / 2 + this._core.relative(o)), r && a.each(this._core.clones(this._core.relative(o)), s), o++
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1
        }, e.prototype.load = function (t) {
            var e = this._core.$stage.children().eq(t),
                n = e && e.find(".owl-lazy");
            !n || -1 < a.inArray(e.get(0), this._loaded) || (n.each(a.proxy(function (t, e) {
                var n, i = a(e),
                    o = 1 < r.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src");
                this._core.trigger("load", {
                    element: i,
                    url: o
                }, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function () {
                    i.css("opacity", 1), this._core.trigger("loaded", {
                        element: i,
                        url: o
                    }, "lazy")
                }, this)).attr("src", o) : ((n = new Image).onload = a.proxy(function () {
                    i.css({
                        "background-image": 'url("' + o + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: i,
                        url: o
                    }, "lazy")
                }, this), n.src = o)
            }, this)), this._loaded.push(e.get(0)))
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    }(window.Zepto || window.jQuery, window, document),
    function (r) {
        var e = function (t) {
            this._core = t, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": r.proxy(function (t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": r.proxy(function (t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": r.proxy(function (t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = r.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, e.prototype.update = function () {
            var t, e = this._core._current,
                n = e + this._core.settings.items,
                i = this._core.$stage.children().toArray().slice(e, n),
                o = [];
            r.each(i, function (t, e) {
                o.push(r(e).height())
            }), t = Math.max.apply(null, o), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, r.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, (window, document)),
    function (u, e) {
        var n = function (t) {
            this._core = t, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": u.proxy(function (t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": u.proxy(function (t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": u.proxy(function (t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": u.proxy(function (t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": u.proxy(function (t) {
                    var e;
                    !t.namespace || (e = u(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, u(t.content)))
                }, this)
            }, this._core.options = u.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", u.proxy(function (t) {
                this.play(t)
            }, this))
        };
        n.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, n.prototype.fetch = function (t, e) {
            var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                r = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if (-1 < (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) n = "youtube";
            else if (-1 < i[3].indexOf("vimeo")) n = "vimeo";
            else {
                if (!(-1 < i[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                n = "vzaar"
            }
            i = i[6], this._videos[s] = {
                type: n,
                id: i,
                width: o,
                height: r
            }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
        }, n.prototype.thumbnail = function (e, t) {
            function n(t) {
                i = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after('<div class="owl-video-play-icon"></div>')
            }
            var i, o, r = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
                s = e.find("img"),
                a = "src",
                l = "",
                c = this._core.settings;
            if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return n(s.attr(a)), s.remove(), !1;
            "youtube" === t.type ? (o = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", n(o)) : "vimeo" === t.type ? u.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                    o = t[0].thumbnail_large, n(o)
                }
            }) : "vzaar" === t.type && u.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                    o = t.framegrab_url, n(o)
                }
            })
        }, n.prototype.stop = function () {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, n.prototype.play = function (t) {
            var e, n = u(t.target).closest("." + this._core.settings.itemClass),
                i = this._videos[n.attr("data-video")],
                o = i.width || "100%",
                r = i.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === i.type ? e = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === i.type ? e = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === i.type && (e = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"></iframe>'), u('<div class="owl-video-frame">' + e + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
        }, n.prototype.isInFullScreen = function () {
            var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
            return t && u(t).parent().hasClass("owl-video-frame")
        }, n.prototype.destroy = function () {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, u.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, (window, document)),
    function (s) {
        var e = function (t) {
            this.core = t, this.core.options = s.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": s.proxy(function (t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": s.proxy(function (t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": s.proxy(function (t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        e.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, e.prototype.swap = function () {
            var t, e, n, i, o, r;
            1 === this.core.settings.items && s.support.animation && s.support.transition && (this.core.speed(0), e = s.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous), i = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, r = this.core.settings.animateOut, this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(s.support.animation.end, e).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(r)), o && i.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(o)))
        }, e.prototype.clear = function (t) {
            s(t.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, s.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, (window, document)),
    function (n, i) {
        var e = function (t) {
            this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": n.proxy(function (t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": n.proxy(function (t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": n.proxy(function (t, e, n) {
                    t.namespace && this.play(e, n)
                }, this),
                "stop.owl.autoplay": n.proxy(function (t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": n.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": n.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": n.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": n.proxy(function () {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, e.prototype.play = function (t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, e.prototype._getNextTimeout = function (t, e) {
            return this._timeout && i.clearTimeout(this._timeout), i.setTimeout(n.proxy(function () {
                this._core.next(e || this._core.settings.autoplaySpeed)
            }, this), t || this._core.settings.autoplayTimeout)
        }, e.prototype._setAutoPlayInterval = function () {
            this._timeout = this._getNextTimeout()
        }, e.prototype.stop = function () {
            this._core.is("rotating") && (i.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, e.prototype.pause = function () {
            this._core.is("rotating") && (this._paused = !0)
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, n.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function (r) {
        "use strict";
        var e = function (t) {
            this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": r.proxy(function (t) {
                    t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + r(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": r.proxy(function (t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": r.proxy(function (t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": r.proxy(function (t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": r.proxy(function (t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": r.proxy(function (t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = r.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, e.prototype.initialize = function () {
            var t, n = this._core.settings;
            for (t in this._controls.$relative = (n.navContainer ? r(n.navContainer) : r("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = r("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", r.proxy(function (t) {
                    this.prev(n.navSpeed)
                }, this)), this._controls.$next = r("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", r.proxy(function (t) {
                    this.next(n.navSpeed)
                }, this)), n.dotsData || (this._templates = [r("<div>").addClass(n.dotClass).append(r("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? r(n.dotsContainer) : r("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", r.proxy(function (t) {
                    var e = r(t.target).parent().is(this._controls.$absolute) ? r(t.target).index() : r(t.target).parent().index();
                    t.preventDefault(), this.to(e, n.dotsSpeed)
                }, this)), this._overrides) this._core[t] = r.proxy(this[t], this)
        }, e.prototype.destroy = function () {
            var t, e, n, i;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (i in this.overides) this._core[i] = this._overrides[i];
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, e.prototype.update = function () {
            var t, e, n = this._core.clones().length / 2,
                i = n + this._core.items().length,
                o = this._core.maximum(!0),
                r = this._core.settings,
                s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
            if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
                for (this._pages = [], t = n, e = 0; t < i; t++) {
                    if (s <= e || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(o, t - n),
                                end: t - n + s - 1
                            }), Math.min(o, t - n) === o) break;
                        e = 0, 0
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, e.prototype.draw = function () {
            var t, e = this._core.settings,
                n = this._core.items().length <= e.items,
                i = this._core.relative(this._core.current()),
                o = e.loop || e.rewind;
            this._controls.$relative.toggleClass("disabled", !e.nav || n), e.nav && (this._controls.$previous.toggleClass("disabled", !o && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || n), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(r.inArray(this.current(), this._pages)).addClass("active"))
        }, e.prototype.onTrigger = function (t) {
            var e = this._core.settings;
            t.page = {
                index: r.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
            }
        }, e.prototype.current = function () {
            var n = this._core.relative(this._core.current());
            return r.grep(this._pages, r.proxy(function (t, e) {
                return t.start <= n && t.end >= n
            }, this)).pop()
        }, e.prototype.getPosition = function (t) {
            var e, n, i = this._core.settings;
            return "page" == i.slideBy ? (e = r.inArray(this.current(), this._pages), n = this._pages.length, t ? ++e : --e, e = this._pages[(e % n + n) % n].start) : (e = this._core.relative(this._core.current()), n = this._core.items().length, t ? e += i.slideBy : e -= i.slideBy), e
        }, e.prototype.next = function (t) {
            r.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
        }, e.prototype.prev = function (t) {
            r.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
        }, e.prototype.to = function (t, e, n) {
            var i;
            !n && this._pages.length ? (i = this._pages.length, r.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e)) : r.proxy(this._overrides.to, this._core)(t, e)
        }, r.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, (window, document)),
    function (i, o) {
        "use strict";
        var e = function (t) {
            this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": i.proxy(function (t) {
                    t.namespace && "URLHash" === this._core.settings.startPosition && i(o).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": i.proxy(function (t) {
                    if (t.namespace) {
                        var e = i(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!e) return;
                        this._hashes[e] = t.content
                    }
                }, this),
                "changed.owl.carousel": i.proxy(function (t) {
                    if (t.namespace && "position" === t.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            e = i.map(this._hashes, function (t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!e || o.location.hash.slice(1) === e) return;
                        o.location.hash = e
                    }
                }, this)
            }, this._core.options = i.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), i(o).on("hashchange.owl.navigation", i.proxy(function (t) {
                var e = o.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    i = this._hashes[e] && n.index(this._hashes[e]);
                void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
            }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in i(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, i.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function (o, r) {
        var s = o("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            t = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            e = function () {
                return !!l("transform")
            },
            n = function () {
                return !!l("perspective")
            },
            i = function () {
                return !!l("animation")
            };

        function l(t, n) {
            var i = !1,
                e = t.charAt(0).toUpperCase() + t.slice(1);
            return o.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
                if (s[e] !== r) return i = !n || e, !1
            }), i
        }

        function c(t) {
            return l(t, !0)
        }! function () {
            return !!l("transition")
        }() || (o.support.transition = new String(c("transition")), o.support.transition.end = t.transition.end[o.support.transition]), i() && (o.support.animation = new String(c("animation")), o.support.animation.end = t.animation.end[o.support.animation]), e() && (o.support.transform = new String(c("transform")), o.support.transform3d = n())
    }(window.Zepto || window.jQuery, (window, void document)),
    function (l) {
        var t, s = l.validator,
            a = "unobtrusiveValidation";

        function c(t, e, n) {
            t.rules[e] = n, t.message && (t.messages[e] = t.message)
        }

        function u(t) {
            return t.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
        }

        function d(t) {
            return t.substr(0, t.lastIndexOf(".") + 1)
        }

        function h(t, e) {
            return 0 === t.indexOf("*.") && (t = t.replace("*.", e)), t
        }

        function f(t) {
            var e = l(this),
                n = "__jquery_unobtrusive_validation_form_reset";
            if (!e.data(n)) {
                e.data(n, !0);
                try {
                    e.data("validator").resetForm()
                } finally {
                    e.removeData(n)
                }
                e.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"), e.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
            }
        }

        function p(i) {
            function t(t, e) {
                var n = r[t];
                n && l.isFunction(n) && n.apply(i, e)
            }
            var e = l(i),
                n = e.data(a),
                o = l.proxy(f, i),
                r = s.unobtrusive.options || {};
            return n || (n = {
                options: {
                    errorClass: r.errorClass || "input-validation-error",
                    errorElement: r.errorElement || "span",
                    errorPlacement: function () {
                        (function (t, e) {
                            var n = l(this).find("[data-valmsg-for='" + u(e[0].name) + "']"),
                                i = n.attr("data-valmsg-replace"),
                                o = i ? !1 !== l.parseJSON(i) : null;
                            n.removeClass("field-validation-valid").addClass("field-validation-error"), t.data("unobtrusiveContainer", n), o ? (n.empty(), t.removeClass("input-validation-error").appendTo(n)) : t.hide()
                        }).apply(i, arguments), t("errorPlacement", arguments)
                    },
                    invalidHandler: function () {
                        (function (t, e) {
                            var n = l(this).find("[data-valmsg-summary=true]"),
                                i = n.find("ul");
                            i && i.length && e.errorList.length && (i.empty(), n.addClass("validation-summary-errors").removeClass("validation-summary-valid"), l.each(e.errorList, function () {
                                l("<li />").html(this.message).appendTo(i)
                            }))
                        }).apply(i, arguments), t("invalidHandler", arguments)
                    },
                    messages: {},
                    rules: {},
                    success: function () {
                        (function (t) {
                            var e, n, i = t.data("unobtrusiveContainer");
                            i && (n = (e = i.attr("data-valmsg-replace")) ? l.parseJSON(e) : null, i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), n && i.empty())
                        }).apply(i, arguments), t("success", arguments)
                    }
                },
                attachValidation: function () {
                    e.off("reset." + a, o).on("reset." + a, o).validate(this.options)
                },
                validate: function () {
                    return e.validate(), e.valid()
                }
            }, e.data(a, n)), n
        }
        s.unobtrusive = {
            adapters: [],
            parseElement: function (i, t) {
                var e, o, r, s = l(i),
                    a = s.parents("form")[0];
                a && ((e = p(a)).options.rules[i.name] = o = {}, e.options.messages[i.name] = r = {}, l.each(this.adapters, function () {
                    var t = "data-val-" + this.name,
                        e = s.attr(t),
                        n = {};
                    void 0 !== e && (t += "-", l.each(this.params, function () {
                        n[this] = s.attr(t + this)
                    }), this.adapt({
                        element: i,
                        form: a,
                        message: e,
                        params: n,
                        rules: o,
                        messages: r
                    }))
                }), l.extend(o, {
                    __dummy__: !0
                }), t || e.attachValidation())
            },
            parse: function (t) {
                var e = l(t),
                    n = e.parents().addBack().filter("form").add(e.find("form")).has("[data-val=true]");
                e.find("[data-val=true]").each(function () {
                    s.unobtrusive.parseElement(this, !0)
                }), n.each(function () {
                    var t = p(this);
                    t && t.attachValidation()
                })
            }
        }, (t = s.unobtrusive.adapters).add = function (t, e, n) {
            return n || (n = e, e = []), this.push({
                name: t,
                params: e,
                adapt: n
            }), this
        }, t.addBool = function (e, n) {
            return this.add(e, function (t) {
                c(t, n || e, !0)
            })
        }, t.addMinMax = function (t, i, o, r, e, n) {
            return this.add(t, [e || "min", n || "max"], function (t) {
                var e = t.params.min,
                    n = t.params.max;
                e && n ? c(t, r, [e, n]) : e ? c(t, i, e) : n && c(t, o, n)
            })
        }, t.addSingleVal = function (e, n, i) {
            return this.add(e, [n || "val"], function (t) {
                c(t, i || e, t.params[n])
            })
        }, s.addMethod("__dummy__", function (t, e, n) {
            return !0
        }), s.addMethod("regex", function (t, e, n) {
            var i;
            return !!this.optional(e) || (i = new RegExp(n).exec(t)) && 0 === i.index && i[0].length === t.length
        }), s.addMethod("nonalphamin", function (t, e, n) {
            var i;
            return n && (i = (i = t.match(/\W/g)) && i.length >= n), i
        }), s.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept"), t.addSingleVal("regex", "pattern"), t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"), t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"), t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength"), t.add("equalto", ["other"], function (t) {
            var e = d(t.element.name),
                n = h(t.params.other, e);
            c(t, "equalTo", l(t.form).find(":input").filter("[name='" + u(n) + "']")[0])
        }), t.add("required", function (t) {
            "INPUT" === t.element.tagName.toUpperCase() && "CHECKBOX" === t.element.type.toUpperCase() || c(t, "required", !0)
        }), t.add("remote", ["url", "type", "additionalfields"], function (i) {
            var o = {
                    url: i.params.url,
                    type: i.params.type || "GET",
                    data: {}
                },
                r = d(i.element.name);
            l.each((i.params.additionalfields || i.element.name).replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g), function (t, e) {
                var n = h(e, r);
                o.data[n] = function () {
                    var t = l(i.form).find(":input").filter("[name='" + u(n) + "']");
                    return t.is(":checkbox") ? t.filter(":checked").val() || t.filter(":hidden").val() || "" : t.is(":radio") ? t.filter(":checked").val() || "" : t.val()
                }
            }), c(i, "remote", o)
        }), t.add("password", ["min", "nonalphamin", "regex"], function (t) {
            t.params.min && c(t, "minlength", t.params.min), t.params.nonalphamin && c(t, "nonalphamin", t.params.nonalphamin), t.params.regex && c(t, "regex", t.params.regex)
        }), l(function () {
            s.unobtrusive.parse(document)
        })
    }(jQuery), $(document).ready(function () {
        $.validator.addMethod("customemail", function (t, e) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)
        }, "Please specify a valid email"), $(".leadgen-submit").on("click", function () {
            var t, e, n, i, o, r, s, a, l, c, u, d = $(this);
            d.parent("form").valid() && (t = d.parent(), (e = t.find(".formError")).html(""), n = t.find(".leadgen-fname"), i = t.find(".leadgen-lname"), o = t.find(".leadgen-email"), r = t.find(".leadgen-Address"), s = t.find(".leadgen-sourceUrl"), a = t.find(".leadgen-leadType"), l = t.find(".leadgen-leadTitle"), c = {
                firstName: n.val(),
                lastName: i.val(),
                email: o.val(),
                sourceUrl: s.val(),
                address: r.val(),
                leadType: a.val(),
                leadTitle: l.val(),
                IsNotSpam: !0
            }, d.parent(".c-leadGen-form").validate({
                rules: {
                    Email: {
                        customemail: !0
                    }
                },
                errorElement: "label"
            }), d.parent(".c-leadGen-form").valid(), u = d.data("submiturl") + "?" + $.param(c), $.getJSON(u + "&callback=?", function (t) {
                d.removeAttr("disabled"), t.success ? ("quizLeadGenForm" === c.leadType ? (d.parent(".c-leadGen-form").parent().find("#quiz-modal").html(), $("html").addClass("u-no-scroll"), $(".c-modal__wrapper").fadeIn()) : (window.location = d.data("contenturl"), d.after('<span class="msg formSuccess" style="display: inline;">Thank you!</span>'), d.hide()), e.html(""), d.parent(".c-leadGen-form")[0].reset()) : e.html(t.message)
            }))
        }), $(".c-modal__wrapper").on("click", function (t) {
            $(t.target).is(".c-modal--close") && ($("html").removeClass("u-no-scroll"), t.preventDefault(), $(this).fadeOut(function () {
                $(this).remove()
            }))
        })
    });
var MatterPage = {
    init: function () {
        MatterPage.Matters.init()
    },
    Matters: {
        init: function () {
            $("[class^='tab']").on("click", function () {
                return MatterPage.Matters.resetTabState(), MatterPage.Matters.setTabState(this), MatterPage.Matters.resetContentState(), MatterPage.Matters.setContentState(this), !1
            })
        },
        resetTabState: function () {
            $("[class^='tab']").each(function () {
                $(this).removeClass("selected")
            })
        },
        setTabState: function (t) {
            $(t).addClass("selected")
        },
        resetContentState: function () {
            $("[class^='matterContent']").each(function () {
                $(this).removeClass("selected")
            })
        },
        setContentState: function (t) {
            var e = t.id.concat("_content");
            $("#".concat(e)).addClass("selected")
        }
    }
};

function getCurrentScrollPercentage() {
    var t = document.documentElement,
        e = document.body,
        n = "scrollHeight";
    return (t.scrollTop || e.scrollTop) / ((t[n] || e[n]) - t.clientHeight) * 100
}

function openPopup() {
    $(".js-popup").addClass("is-visible"), $("html").css("overflow", "hidden")
}
if ($(MatterPage.init), window.Global = window.Global || {}, window.Global.PopupForm = window.Global.PopupForm || {}, "undefined" == typeof jQuery) throw "This page is missing the jQuery Javascript library.";
$.extend(Global.PopupForm, {
        init: function () {
            $(".js-popup");
            $.validator.addMethod("customemail", function (t, e) {
                return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            }, "Please enter a valid email address"), $(".js-popup-form").each(function () {
                var t = "<span class='c-validation-icon fa-stack'><i class='fa fa-fw fa-circle fa-stack-1x'></i><i class='fa fa-fw fa-times fa-stack-1x'></i></span>";
                $(this).validate({
                    rules: {
                        FirstName: {
                            required: !0
                        },
                        LastName: {
                            required: !0
                        },
                        Email: {
                            required: !0,
                            email: !0
                        }
                    },
                    messages: {
                        FirstName: {
                            required: t + "Please enter a first name"
                        },
                        LastName: {
                            required: t + "Please enter a last name"
                        },
                        Email: {
                            required: t + "Please enter an email address",
                            email: t + "Please enter a valid email address"
                        }
                    },
                    errorElement: "label"
                })
            }), $(".js-popup-form").on("submit", Global.PopupForm.submit)
        },
        close: function (t) {
            t.preventDefault();
            var e = $(t.currentTarget).parents(".js-popup");
            e.css("overflow", "hidden").removeClass("is-visible"), $("html").css("overflow", "auto"), e.find(".c-popup__modal").on("transitionend webkitTransitionEnd oTransitionEnd", function () {
                setTimeout(function () {
                    e.remove()
                }, 250)
            })
        },
        submit: function () {
            var o = $(this);
            if (!1 === o.valid()) return !1;
            o.find(".c-loading__wrapper").show(), o.find(".msg.formError").hide(), o.find(".msg.formSuccess").hide();
            var t = o.attr("action"),
                e = o.serialize().concat("&isNotSpam=true"),
                r = o.find(".js-lead-type").val() || "";
            return "Quiz" !== r && "Ebook" !== r || (e = e.concat("&isPopup=true")), o.find("input").attr("disabled", "disabled"), o.find("input[type='submit']").attr("disabled", "disabled").addClass("disabled"), o.parents(".js-popup").find(".js-popup-close").unbind("click"), $.getJSON(t + "?" + e + "&callback=?", function (t) {
                var e, n, i;
                t.success ? ("Quiz" === r ? $(".js-quiz-popup").fadeIn() : "Ebook" === r && (e = o.find("input[type='submit']").data("contenturl"), window.open(e, "_blank")), (n = o.parents(".js-popup")).css("overflow", "hidden").removeClass("is-visible"), $("html").css("overflow", "auto"), n.find(".c-popup__modal").on("transitionend webkitTransitionEnd oTransitionEnd", function () {
                    setTimeout(function () {
                        n.remove()
                    }, 250)
                }), o.find("input").filter(":visible").val(""), o.find(".msg.formSuccess").show(), i = new Date, i = new Date(i.getTime() + 15768e7), console.log(i.toUTCString()), document.cookie = "GatedContent=1; expires=" + i.toUTCString() + ";") : void 0 !== t.message && o.find(".msg.formError").html(t.message).show(), o.find(".c-loading__wrapper").hide(), o.find(":disabled").prop("disabled", !1), o.find("button[type='submit']").removeClass("disabled")
            }), !1
        }
    }), $(Global.PopupForm.init),
    function (n) {
        var t = window.Global.PopupForm.OpenOnTimeDelay,
            i = window.Global.PopupForm.OpenOnScrollPercentage,
            e = window.Global.PopupForm.OpenOnExitIntent;
        0 < n(".js-popup").length && (null !== t && 0 <= t ? setTimeout(function () {
            openPopup()
        }, t) : null !== i && 0 <= i ? n(document).on("scroll", function (t) {
            var e = getCurrentScrollPercentage();
            i <= e && (openPopup(), n(t.currentTarget).off("scroll"))
        }) : e ? n(document).on("mouseleave", function (t) {
            t.toElement || t.relatedTarget || (openPopup(), n(t.currentTarget).off("mouseleave"))
        }) : openPopup())
    }(jQuery);
var PresentationLoad = {
    PresentationContent: "",
    init: function () {
        PresentationLoad.setClickEvent(), PresentationLoad.Fancybox.init()
    },
    setClickEvent: function () {
        $("a.presentation-btn").each(function (t) {
            var e = $(this);
            e.attr("data-id") && e.on("click", function () {
                if (FMG.HtTrack) {
                    PresentationLoad.PresentationContent || (PresentationLoad.PresentationContent = $("#presentationBody").html().replace(/..\/..\/..\/..\//g, "../../"), $("#presentationBody").html("")), $.fancybox.open({
                        src: PresentationLoad.PresentationContent,
                        type: "inline"
                    });
                    var t = document.createElement("script");
                    return t.type = "text/javascript", t.src = "../../static.demo.contentres.com/site/templates/global/js/presentation.js", document.body.appendChild(t), !1
                }
                return $.ajax({
                    url: FMG.RootLocation.concat("cms-srv/CmsContentService/GetAssetPresentation/").concat(e.attr("data-id")),
                    processData: !1,
                    datatype: "text",
                    success: function (t) {
                        $.fancybox.open({
                            src: t,
                            type: "inline"
                        })
                    }
                }), !1
            })
        })
    },
    Fancybox: {
        init: function () {}
    }
};
$(PresentationLoad.init), $(document).ready(function () {
    var t = $(".js-video-autoplay").not("[autoplay='autoplay']");
    $(document).on("scroll", function () {
        var o = $(window).scrollTop() + 200,
            r = $(window).scrollTop() + $(window).height() - 200;
        t.each(function (t, e) {
            $(this).on("ended", function () {
                $(this).addClass("ended")
            });
            var n = $(this).offset().top,
                i = $(this).height() + n;
            o < i && n < r ? $(this).hasClass("ended") || $(this).get(0).play() : $(this).get(0).pause()
        })
    })
});
var Video = {
    init: function () {
        Video.setClickEvent()
    },
    setClickEvent: function () {
        $("h3>a.video,section>div>a.video,a.introVideo").each(function (t) {
            var e = $(this);
            e.attr("data-id") && e.on("click", function () {
                if (FMG.HtTrack) return $.fancybox.open($("div#video_" + $(this).attr("data-id")).html()), !1;
                var t = {
                    url: FMG.RootLocation.concat("cms-srv/CmsContentService/GetAssetVideo/").concat(e.attr("data-id")),
                    processData: !1,
                    datatype: "text",
                    success: function (t) {
                        $.fancybox.open({
                            src: t,
                            type: "inline",
                            smallBtn: !1
                        })
                    }
                };
                return $.ajax(t), !1
            })
        })
    }
};
$(Video.init);
//# sourceMappingURL=maps/scripts.js.map