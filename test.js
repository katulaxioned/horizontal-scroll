!(function () {
  "use strict";
  function t(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function e(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  /*!
   * GSAP 3.10.2
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var n,
    r,
    i,
    o,
    s,
    a,
    u,
    l,
    c,
    h,
    d,
    f,
    p,
    g = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    m = { duration: 0.5, overwrite: !1, delay: 0 },
    _ = 1e8,
    v = 1e-8,
    y = 2 * Math.PI,
    w = y / 4,
    x = 0,
    b = Math.sqrt,
    T = Math.cos,
    k = Math.sin,
    S = function (t) {
      return "string" == typeof t;
    },
    M = function (t) {
      return "function" == typeof t;
    },
    E = function (t) {
      return "number" == typeof t;
    },
    C = function (t) {
      return void 0 === t;
    },
    O = function (t) {
      return "object" == typeof t;
    },
    A = function (t) {
      return !1 !== t;
    },
    P = function () {
      return "undefined" != typeof window;
    },
    B = function (t) {
      return M(t) || S(t);
    },
    D =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    R = Array.isArray,
    L = /(?:-?\.?\d|\.)+/gi,
    I = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    X = /[+-]=-?[.\d]+/,
    F = /[^,'"\[\]\s]+/gi,
    W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    q = {},
    N = {},
    H = function (t) {
      return (N = _t(t, q)) && un;
    },
    V = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    U = function (t, e) {
      return !e && console.warn(t);
    },
    G = function (t, e) {
      return (t && (q[t] = e) && N && (N[t] = e)) || q;
    },
    j = function () {
      return 0;
    },
    Q = {},
    Z = [],
    K = {},
    J = {},
    tt = {},
    et = 30,
    nt = [],
    rt = "",
    it = function (t) {
      var e,
        n,
        r = t[0];
      if ((O(r) || M(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
        for (n = nt.length; n-- && !nt[n].targetTest(r); );
        e = nt[n];
      }
      for (n = t.length; n--; )
        (t[n] && (t[n]._gsap || (t[n]._gsap = new Ae(t[n], e)))) ||
          t.splice(n, 1);
      return t;
    },
    ot = function (t) {
      return t._gsap || it(Qt(t))[0]._gsap;
    },
    st = function (t, e, n) {
      return (n = t[e]) && M(n)
        ? t[e]()
        : (C(n) && t.getAttribute && t.getAttribute(e)) || n;
    },
    at = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    ut = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    lt = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    ct = function (t, e) {
      var n = e.charAt(0),
        r = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
      );
    },
    ht = function (t, e) {
      for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
      return r < n;
    },
    dt = function () {
      var t,
        e,
        n = Z.length,
        r = Z.slice(0);
      for (K = {}, Z.length = 0, t = 0; t < n; t++)
        (e = r[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    ft = function (t, e, n, r) {
      Z.length && dt(), t.render(e, n, r), Z.length && dt();
    },
    pt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(F).length < 2
        ? e
        : S(t)
        ? t.trim()
        : t;
    },
    gt = function (t) {
      return t;
    },
    mt = function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
      return t;
    },
    _t = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    },
    vt = function t(e, n) {
      for (var r in n)
        "__proto__" !== r &&
          "constructor" !== r &&
          "prototype" !== r &&
          (e[r] = O(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
      return e;
    },
    yt = function (t, e) {
      var n,
        r = {};
      for (n in t) n in e || (r[n] = t[n]);
      return r;
    },
    wt = function (t) {
      var e,
        n = t.parent || r,
        i = t.keyframes
          ? ((e = R(t.keyframes)),
            function (t, n) {
              for (var r in n)
                r in t ||
                  ("duration" === r && e) ||
                  "ease" === r ||
                  (t[r] = n[r]);
            })
          : mt;
      if (A(t.inherit))
        for (; n; ) i(t, n.vars.defaults), (n = n.parent || n._dp);
      return t;
    },
    xt = function (t, e, n, r, i) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var o,
        s = t[r];
      if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
      return (
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[n]), (t[n] = e)),
        e._next ? (e._next._prev = e) : (t[r] = e),
        (e._prev = s),
        (e.parent = e._dp = t),
        e
      );
    },
    bt = function (t, e, n, r) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var i = e._prev,
        o = e._next;
      i ? (i._next = o) : t[n] === e && (t[n] = o),
        o ? (o._prev = i) : t[r] === e && (t[r] = i),
        (e._next = e._prev = e.parent = null);
    },
    Tt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    kt = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
      return t;
    },
    St = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Mt = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Et = function (t) {
      return t._repeat ? Ct(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Ct = function (t, e) {
      var n = Math.floor((t /= e));
      return t && n === t ? n - 1 : n;
    },
    Ot = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    At = function (t) {
      return (t._end = lt(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || v) || 0)
      ));
    },
    Pt = function (t, e) {
      var n = t._dp;
      return (
        n &&
          n.smoothChildTiming &&
          t._ts &&
          ((t._start = lt(
            n._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          At(t),
          n._dirty || kt(n, t)),
        t
      );
    },
    Bt = function (t, e) {
      var n;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((n = Ot(t.rawTime(), e)),
          (!e._dur || Ht(0, e.totalDuration(), n) - e._tTime > v) &&
            e.render(n, !0)),
        kt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (n = t; n._dp; )
            n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
        t._zTime = -1e-8;
      }
    },
    Dt = function (t, e, n, i) {
      return (
        e.parent && Tt(e),
        (e._start = lt(
          (E(n) ? n : n || t !== r ? Wt(t, n, e) : t._time) + e._delay
        )),
        (e._end = lt(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        xt(t, e, "_first", "_last", t._sort ? "_start" : 0),
        zt(e) || (t._recent = e),
        i || Bt(t, e),
        t
      );
    },
    Rt = function (t, e) {
      return (
        (q.ScrollTrigger || V("scrollTrigger", e)) &&
        q.ScrollTrigger.create(e, t)
      );
    },
    Lt = function (t, e, n, r) {
      return (
        Ye(t, e),
        t._initted
          ? !n &&
            t._pt &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            u !== _e.frame
            ? (Z.push(t), (t._lazy = [e, r]), 1)
            : void 0
          : 1
      );
    },
    It = function t(e) {
      var n = e.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
    },
    zt = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    Yt = function (t, e, n, r) {
      var i = t._repeat,
        o = lt(e) || 0,
        s = t._tTime / t._tDur;
      return (
        s && !r && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = i ? (i < 0 ? 1e10 : lt(o * (i + 1) + t._rDelay * i)) : o),
        s > 0 && !r ? Pt(t, (t._tTime = t._tDur * s)) : t.parent && At(t),
        n || kt(t.parent, t),
        t
      );
    },
    Xt = function (t) {
      return t instanceof Be ? kt(t) : Yt(t, t._dur);
    },
    Ft = { _start: 0, endTime: j, totalDuration: j },
    Wt = function t(e, n, r) {
      var i,
        o,
        s,
        a = e.labels,
        u = e._recent || Ft,
        l = e.duration() >= _ ? u.endTime(!1) : e._dur;
      return S(n) && (isNaN(n) || n in a)
        ? ((o = n.charAt(0)),
          (s = "%" === n.substr(-1)),
          (i = n.indexOf("=")),
          "<" === o || ">" === o
            ? (i >= 0 && (n = n.replace(/=/, "")),
              ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0) *
                  (s ? (i < 0 ? u : r).totalDuration() / 100 : 1))
            : i < 0
            ? (n in a || (a[n] = l), a[n])
            : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
              s && r && (o = (o / 100) * (R(r) ? r[0] : r).totalDuration()),
              i > 1 ? t(e, n.substr(0, i - 1), r) + o : l + o))
        : null == n
        ? l
        : +n;
    },
    qt = function (t, e, n) {
      var r,
        i,
        o = E(e[1]),
        s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
        a = e[s];
      if ((o && (a.duration = e[1]), (a.parent = n), t)) {
        for (r = a, i = n; i && !("immediateRender" in r); )
          (r = i.vars.defaults || {}), (i = A(i.vars.inherit) && i.parent);
        (a.immediateRender = A(r.immediateRender)),
          t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
      }
      return new Ne(e[0], a, e[s + 1]);
    },
    Nt = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    Ht = function (t, e, n) {
      return n < t ? t : n > e ? e : n;
    },
    Vt = function (t, e) {
      return S(t) && (e = W.exec(t)) ? e[1] : "";
    },
    Ut = [].slice,
    Gt = function (t, e) {
      return (
        t &&
        O(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && O(t[0]))) &&
        !t.nodeType &&
        t !== i
      );
    },
    jt = function (t, e, n) {
      return (
        void 0 === n && (n = []),
        t.forEach(function (t) {
          var r;
          return (S(t) && !e) || Gt(t, 1)
            ? (r = n).push.apply(r, Qt(t))
            : n.push(t);
        }) || n
      );
    },
    Qt = function (t, e, n) {
      return !S(t) || n || (!o && ve())
        ? R(t)
          ? jt(t, n)
          : Gt(t)
          ? Ut.call(t, 0)
          : t
          ? [t]
          : []
        : Ut.call((e || s).querySelectorAll(t), 0);
    },
    Zt = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    $t = function (t) {
      if (M(t)) return t;
      var e = O(t) ? t : { each: t },
        n = Se(e.ease),
        r = e.from || 0,
        i = parseFloat(e.base) || 0,
        o = {},
        s = r > 0 && r < 1,
        a = isNaN(r) || s,
        u = e.axis,
        l = r,
        c = r;
      return (
        S(r)
          ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !s && a && ((l = r[0]), (c = r[1])),
        function (t, s, h) {
          var d,
            f,
            p,
            g,
            m,
            v,
            y,
            w,
            x,
            T = (h || e).length,
            k = o[T];
          if (!k) {
            if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, _])[1])) {
              for (
                y = -1e8;
                y < (y = h[x++].getBoundingClientRect().left) && x < T;

              );
              x--;
            }
            for (
              k = o[T] = [],
                d = a ? Math.min(x, T) * l - 0.5 : r % x,
                f = x === _ ? 0 : a ? (T * c) / x - 0.5 : (r / x) | 0,
                y = 0,
                w = _,
                v = 0;
              v < T;
              v++
            )
              (p = (v % x) - d),
                (g = f - ((v / x) | 0)),
                (k[v] = m = u ? Math.abs("y" === u ? g : p) : b(p * p + g * g)),
                m > y && (y = m),
                m < w && (w = m);
            "random" === r && Zt(k),
              (k.max = y - w),
              (k.min = w),
              (k.v = T =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (x > T
                      ? T - 1
                      : u
                      ? "y" === u
                        ? T / x
                        : x
                      : Math.max(x, T / x)) ||
                  0) * ("edges" === r ? -1 : 1)),
              (k.b = T < 0 ? i - T : i),
              (k.u = Vt(e.amount || e.each) || 0),
              (n = n && T < 0 ? Te(n) : n);
          }
          return (
            (T = (k[t] - k.min) / k.max || 0),
            lt(k.b + (n ? n(T) : T) * k.v) + k.u
          );
        }
      );
    },
    Kt = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (n) {
        var r = Math.round(parseFloat(n) / t) * t * e;
        return (r - (r % 1)) / e + (E(n) ? 0 : Vt(n));
      };
    },
    Jt = function (t, e) {
      var n,
        r,
        i = R(t);
      return (
        !i &&
          O(t) &&
          ((n = i = t.radius || _),
          t.values
            ? ((t = Qt(t.values)), (r = !E(t[0])) && (n *= n))
            : (t = Kt(t.increment))),
        Nt(
          e,
          i
            ? M(t)
              ? function (e) {
                  return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                }
              : function (e) {
                  for (
                    var i,
                      o,
                      s = parseFloat(r ? e.x : e),
                      a = parseFloat(r ? e.y : 0),
                      u = _,
                      l = 0,
                      c = t.length;
                    c--;

                  )
                    (i = r
                      ? (i = t[c].x - s) * i + (o = t[c].y - a) * o
                      : Math.abs(t[c] - s)) < u && ((u = i), (l = c));
                  return (
                    (l = !n || u <= n ? t[l] : e),
                    r || l === e || E(e) ? l : l + Vt(e)
                  );
                }
            : Kt(t)
        )
      );
    },
    te = function (t, e, n, r) {
      return Nt(R(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
        return R(t)
          ? t[~~(Math.random() * t.length)]
          : (n = n || 1e-5) &&
              (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                ) *
                  n *
                  r
              ) / r;
      });
    },
    ee = function (t, e, n) {
      return Nt(n, function (n) {
        return t[~~e(n)];
      });
    },
    ne = function (t) {
      for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
        (r = t.indexOf(")", e)),
          (i = "[" === t.charAt(e + 7)),
          (n = t.substr(e + 7, r - e - 7).match(i ? F : L)),
          (s +=
            t.substr(o, e - o) +
            te(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
          (o = r + 1);
      return s + t.substr(o, t.length - o);
    },
    re = function (t, e, n, r, i) {
      var o = e - t,
        s = r - n;
      return Nt(i, function (e) {
        return n + (((e - t) / o) * s || 0);
      });
    },
    ie = function (t, e, n) {
      var r,
        i,
        o,
        s = t.labels,
        a = _;
      for (r in s)
        (i = s[r] - e) < 0 == !!n &&
          i &&
          a > (i = Math.abs(i)) &&
          ((o = r), (a = i));
      return o;
    },
    oe = function (t, e, n) {
      var r,
        i,
        o = t.vars,
        s = o[e];
      if (s)
        return (
          (r = o[e + "Params"]),
          (i = o.callbackScope || t),
          n && Z.length && dt(),
          r ? s.apply(i, r) : s.call(i)
        );
    },
    se = function (t) {
      return (
        Tt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && oe(t, "onInterrupt"),
        t
      );
    },
    ae = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        n = M(t),
        r =
          e && !n && t.init
            ? function () {
                this._props = [];
              }
            : t,
        i = {
          init: j,
          render: Ke,
          add: Ie,
          kill: tn,
          modifier: Je,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: je, aliases: {}, register: 0 };
      if ((ve(), t !== r)) {
        if (J[e]) return;
        mt(r, mt(yt(t, i), o)),
          _t(r.prototype, _t(i, yt(t, o))),
          (J[(r.prop = e)] = r),
          t.targetTest && (nt.push(r), (Q[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      G(e, r), t.register && t.register(un, r, rn);
    },
    ue = 255,
    le = {
      aqua: [0, ue, ue],
      lime: [0, ue, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ue],
      navy: [0, 0, 128],
      white: [ue, ue, ue],
      olive: [128, 128, 0],
      yellow: [ue, ue, 0],
      orange: [ue, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ue, 0, 0],
      pink: [ue, 192, 203],
      cyan: [0, ue, ue],
      transparent: [ue, ue, ue, 0],
    },
    ce = function (t, e, n) {
      return (
        ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (n - e) * t * 6
          : t < 0.5
          ? n
          : 3 * t < 2
          ? e + (n - e) * (2 / 3 - t) * 6
          : e) *
          ue +
          0.5) |
        0
      );
    },
    he = function (t, e, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        h,
        d,
        f = t ? (E(t) ? [t >> 16, (t >> 8) & ue, t & ue] : 0) : le.black;
      if (!f) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), le[t]))
          f = le[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((r = t.charAt(1)),
              (i = t.charAt(2)),
              (o = t.charAt(3)),
              (t =
                "#" +
                r +
                r +
                i +
                i +
                o +
                o +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (f = parseInt(t.substr(1, 6), 16)) >> 16,
              (f >> 8) & ue,
              f & ue,
              parseInt(t.substr(7), 16) / 255,
            ];
          f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ue, t & ue];
        } else if ("hsl" === t.substr(0, 3))
          if (((f = d = t.match(L)), e)) {
            if (~t.indexOf("="))
              return (f = t.match(I)), n && f.length < 4 && (f[3] = 1), f;
          } else
            (s = (+f[0] % 360) / 360),
              (a = +f[1] / 100),
              (r =
                2 * (u = +f[2] / 100) -
                (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
              f.length > 3 && (f[3] *= 1),
              (f[0] = ce(s + 1 / 3, r, i)),
              (f[1] = ce(s, r, i)),
              (f[2] = ce(s - 1 / 3, r, i));
        else f = t.match(L) || le.transparent;
        f = f.map(Number);
      }
      return (
        e &&
          !d &&
          ((r = f[0] / ue),
          (i = f[1] / ue),
          (o = f[2] / ue),
          (u = ((l = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2),
          l === c
            ? (s = a = 0)
            : ((h = l - c),
              (a = u > 0.5 ? h / (2 - l - c) : h / (l + c)),
              (s =
                l === r
                  ? (i - o) / h + (i < o ? 6 : 0)
                  : l === i
                  ? (o - r) / h + 2
                  : (r - i) / h + 4),
              (s *= 60)),
          (f[0] = ~~(s + 0.5)),
          (f[1] = ~~(100 * a + 0.5)),
          (f[2] = ~~(100 * u + 0.5))),
        n && f.length < 4 && (f[3] = 1),
        f
      );
    },
    de = function (t) {
      var e = [],
        n = [],
        r = -1;
      return (
        t.split(pe).forEach(function (t) {
          var i = t.match(z) || [];
          e.push.apply(e, i), n.push((r += i.length + 1));
        }),
        (e.c = n),
        e
      );
    },
    fe = function (t, e, n) {
      var r,
        i,
        o,
        s,
        a = "",
        u = (t + a).match(pe),
        l = e ? "hsla(" : "rgba(",
        c = 0;
      if (!u) return t;
      if (
        ((u = u.map(function (t) {
          return (
            (t = he(t, e, 1)) &&
            l +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        n && ((o = de(t)), (r = n.c).join(a) !== o.c.join(a)))
      )
        for (s = (i = t.replace(pe, "1").split(z)).length - 1; c < s; c++)
          a +=
            i[c] +
            (~r.indexOf(c)
              ? u.shift() || l + "0,0,0,0)"
              : (o.length ? o : u.length ? u : n).shift());
      if (!i)
        for (s = (i = t.split(pe)).length - 1; c < s; c++) a += i[c] + u[c];
      return a + i[s];
    },
    pe = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in le) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    ge = /hsl[a]?\(/,
    me = function (t) {
      var e,
        n = t.join(" ");
      if (((pe.lastIndex = 0), pe.test(n)))
        return (
          (e = ge.test(n)),
          (t[1] = fe(t[1], e)),
          (t[0] = fe(t[0], e, de(t[1]))),
          !0
        );
    },
    _e = (function () {
      var t,
        e,
        n,
        r,
        u,
        l,
        h = Date.now,
        d = 500,
        f = 33,
        p = h(),
        g = p,
        m = 1e3 / 240,
        _ = m,
        v = [],
        y = function n(i) {
          var o,
            s,
            a,
            c,
            y = h() - g,
            w = !0 === i;
          if (
            (y > d && (p += y - f),
            ((o = (a = (g += y) - p) - _) > 0 || w) &&
              ((c = ++r.frame),
              (u = a - 1e3 * r.time),
              (r.time = a /= 1e3),
              (_ += o + (o >= m ? 4 : m - o)),
              (s = 1)),
            w || (t = e(n)),
            s)
          )
            for (l = 0; l < v.length; l++) v[l](a, u, c, i);
        };
      return (r = {
        time: 0,
        frame: 0,
        tick: function () {
          y(!0);
        },
        deltaRatio: function (t) {
          return u / (1e3 / (t || 60));
        },
        wake: function () {
          a &&
            (!o &&
              P() &&
              ((i = o = window),
              (s = i.document || {}),
              (q.gsap = un),
              (i.gsapVersions || (i.gsapVersions = [])).push(un.version),
              H(N || i.GreenSockGlobals || (!i.gsap && i) || {}),
              (n = i.requestAnimationFrame)),
            t && r.sleep(),
            (e =
              n ||
              function (t) {
                return setTimeout(t, (_ - 1e3 * r.time + 1) | 0);
              }),
            (c = 1),
            y(2));
        },
        sleep: function () {
          (n ? i.cancelAnimationFrame : clearTimeout)(t), (c = 0), (e = j);
        },
        lagSmoothing: function (t, e) {
          (d = t || 1e8), (f = Math.min(e, d, 0));
        },
        fps: function (t) {
          (m = 1e3 / (t || 240)), (_ = 1e3 * r.time + m);
        },
        add: function (t, e, n) {
          var i = e
            ? function (e, n, o, s) {
                t(e, n, o, s), r.remove(i);
              }
            : t;
          return r.remove(t), v[n ? "unshift" : "push"](i), ve(), i;
        },
        remove: function (t, e) {
          ~(e = v.indexOf(t)) && v.splice(e, 1) && l >= e && l--;
        },
        _listeners: v,
      });
    })(),
    ve = function () {
      return !c && _e.wake();
    },
    ye = {},
    we = /^[\d.\-M][\d.\-,\s]/,
    xe = /["']/g,
    be = function (t) {
      for (
        var e,
          n,
          r,
          i = {},
          o = t.substr(1, t.length - 3).split(":"),
          s = o[0],
          a = 1,
          u = o.length;
        a < u;
        a++
      )
        (n = o[a]),
          (e = a !== u - 1 ? n.lastIndexOf(",") : n.length),
          (r = n.substr(0, e)),
          (i[s] = isNaN(r) ? r.replace(xe, "").trim() : +r),
          (s = n.substr(e + 1).trim());
      return i;
    },
    Te = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    ke = function t(e, n) {
      for (var r, i = e._first; i; )
        i instanceof Be
          ? t(i, n)
          : !i.vars.yoyoEase ||
            (i._yoyo && i._repeat) ||
            i._yoyo === n ||
            (i.timeline
              ? t(i.timeline, n)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = n))),
          (i = i._next);
    },
    Se = function (t, e) {
      return (
        (t &&
          (M(t)
            ? t
            : ye[t] ||
              (function (t) {
                var e,
                  n,
                  r,
                  i,
                  o = (t + "").split("("),
                  s = ye[o[0]];
                return s && o.length > 1 && s.config
                  ? s.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [be(o[1])]
                        : ((e = t),
                          (n = e.indexOf("(") + 1),
                          (r = e.indexOf(")")),
                          (i = e.indexOf("(", n)),
                          e.substring(
                            n,
                            ~i && i < r ? e.indexOf(")", r + 1) : r
                          ))
                            .split(",")
                            .map(pt)
                    )
                  : ye._CE && we.test(t)
                  ? ye._CE("", t)
                  : s;
              })(t))) ||
        e
      );
    },
    Me = function (t, e, n, r) {
      void 0 === n &&
        (n = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === r &&
          (r = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var i,
        o = { easeIn: e, easeOut: n, easeInOut: r };
      return (
        at(t, function (t) {
          for (var e in ((ye[t] = q[t] = o),
          (ye[(i = t.toLowerCase())] = n),
          o))
            ye[
              i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = ye[t + "." + e] = o[e];
        }),
        o
      );
    },
    Ee = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    Ce = function t(e, n, r) {
      var i = n >= 1 ? n : 1,
        o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        s = (o / y) * (Math.asin(1 / i) || 0),
        a = function (t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * k((t - s) * o) + 1;
        },
        u =
          "out" === e
            ? a
            : "in" === e
            ? function (t) {
                return 1 - a(1 - t);
              }
            : Ee(a);
      return (
        (o = y / o),
        (u.config = function (n, r) {
          return t(e, n, r);
        }),
        u
      );
    },
    Oe = function t(e, n) {
      void 0 === n && (n = 1.70158);
      var r = function (t) {
          return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
        },
        i =
          "out" === e
            ? r
            : "in" === e
            ? function (t) {
                return 1 - r(1 - t);
              }
            : Ee(r);
      return (
        (i.config = function (n) {
          return t(e, n);
        }),
        i
      );
    };
  at("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var n = e < 5 ? e + 1 : e;
    Me(
      t + ",Power" + (n - 1),
      e
        ? function (t) {
            return Math.pow(t, n);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, n);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, n) / 2
          : 1 - Math.pow(2 * (1 - t), n) / 2;
      }
    );
  }),
    (ye.Linear.easeNone = ye.none = ye.Linear.easeIn),
    Me("Elastic", Ce("in"), Ce("out"), Ce()),
    (h = 7.5625),
    (f = 1 / (d = 2.75)),
    Me(
      "Bounce",
      function (t) {
        return 1 - p(1 - t);
      },
      (p = function (t) {
        return t < f
          ? h * t * t
          : t < 0.7272727272727273
          ? h * Math.pow(t - 1.5 / d, 2) + 0.75
          : t < 0.9090909090909092
          ? h * (t -= 2.25 / d) * t + 0.9375
          : h * Math.pow(t - 2.625 / d, 2) + 0.984375;
      })
    ),
    Me("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Me("Circ", function (t) {
      return -(b(1 - t * t) - 1);
    }),
    Me("Sine", function (t) {
      return 1 === t ? 1 : 1 - T(t * w);
    }),
    Me("Back", Oe("in"), Oe("out"), Oe()),
    (ye.SteppedEase =
      ye.steps =
      q.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
              r = t + (e ? 0 : 1),
              i = e ? 1 : 0;
            return function (t) {
              return (((r * Ht(0, 0.99999999, t)) | 0) + i) * n;
            };
          },
        }),
    (m.ease = ye["quad.out"]),
    at(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (rt += t + "," + t + "Params,");
      }
    );
  var Ae = function (t, e) {
      (this.id = x++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : st),
        (this.set = e ? e.getSetter : je);
    },
    Pe = (function () {
      function t(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Yt(this, +t.duration, 1, 1),
          (this.data = t.data),
          c || _e.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              Yt(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((ve(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              Pt(this, t), !n._dp || n.parent || Bt(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              Dt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === v) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), ft(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Et(this)) %
                  (this._dur + this._rDelay) || (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  Et(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * n, e)
            : this._repeat
            ? Ct(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? Ot(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
            this.totalTime(Ht(-this._delay, this._tDur, e), !0),
            At(this),
            St(this)
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (ve(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== v &&
                        (this._tTime -= v)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && Dt(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (A(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Ot(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.globalTime = function (t) {
          for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
            (n = e._start + n / (e._ts || 1)), (e = e._dp);
          return n;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), Xt(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          if (arguments.length) {
            var e = this._time;
            return (this._rDelay = t), Xt(this), e ? this.time(e) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(Wt(this, t), A(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, A(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            n = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= n &&
              t < this.endTime(!0) - v
            )
          );
        }),
        (e.eventCallback = function (t, e, n) {
          var r = this.vars;
          return arguments.length > 1
            ? (e
                ? ((r[t] = e),
                  n && (r[t + "Params"] = n),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete r[t],
              this)
            : r[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (n) {
            var r = M(t) ? t : gt,
              i = function () {
                var t = e.then;
                (e.then = null),
                  M(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                  n(r),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? i()
              : (e._prom = i);
          });
        }),
        (e.kill = function () {
          se(this);
        }),
        t
      );
    })();
  mt(Pe.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Be = (function (n) {
    function i(e, i) {
      var o;
      return (
        void 0 === e && (e = {}),
        ((o = n.call(this, e) || this).labels = {}),
        (o.smoothChildTiming = !!e.smoothChildTiming),
        (o.autoRemoveChildren = !!e.autoRemoveChildren),
        (o._sort = A(e.sortChildren)),
        r && Dt(e.parent || r, t(o), i),
        e.reversed && o.reverse(),
        e.paused && o.paused(!0),
        e.scrollTrigger && Rt(t(o), e.scrollTrigger),
        o
      );
    }
    e(i, n);
    var o = i.prototype;
    return (
      (o.to = function (t, e, n) {
        return qt(0, arguments, this), this;
      }),
      (o.from = function (t, e, n) {
        return qt(1, arguments, this), this;
      }),
      (o.fromTo = function (t, e, n, r) {
        return qt(2, arguments, this), this;
      }),
      (o.set = function (t, e, n) {
        return (
          (e.duration = 0),
          (e.parent = this),
          wt(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Ne(t, e, Wt(this, n), 1),
          this
        );
      }),
      (o.call = function (t, e, n) {
        return Dt(this, Ne.delayedCall(0, t, e), n);
      }),
      (o.staggerTo = function (t, e, n, r, i, o, s) {
        return (
          (n.duration = e),
          (n.stagger = n.stagger || r),
          (n.onComplete = o),
          (n.onCompleteParams = s),
          (n.parent = this),
          new Ne(t, n, Wt(this, i)),
          this
        );
      }),
      (o.staggerFrom = function (t, e, n, r, i, o, s) {
        return (
          (n.runBackwards = 1),
          (wt(n).immediateRender = A(n.immediateRender)),
          this.staggerTo(t, e, n, r, i, o, s)
        );
      }),
      (o.staggerFromTo = function (t, e, n, r, i, o, s, a) {
        return (
          (r.startAt = n),
          (wt(r).immediateRender = A(r.immediateRender)),
          this.staggerTo(t, e, r, i, o, s, a)
        );
      }),
      (o.render = function (t, e, n) {
        var i,
          o,
          s,
          a,
          u,
          l,
          c,
          h,
          d,
          f,
          p,
          g,
          m = this._time,
          _ = this._dirty ? this.totalDuration() : this._tDur,
          y = this._dur,
          w = t <= 0 ? 0 : lt(t),
          x = this._zTime < 0 != t < 0 && (this._initted || !y);
        if (
          (this !== r && w > _ && t >= 0 && (w = _),
          w !== this._tTime || n || x)
        ) {
          if (
            (m !== this._time &&
              y &&
              ((w += this._time - m), (t += this._time - m)),
            (i = w),
            (d = this._start),
            (l = !(h = this._ts)),
            x && (y || (m = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((p = this._yoyo),
              (u = y + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * u + t, e, n);
            if (
              ((i = lt(w % u)),
              w === _
                ? ((a = this._repeat), (i = y))
                : ((a = ~~(w / u)) && a === w / u && ((i = y), a--),
                  i > y && (i = y)),
              (f = Ct(this._tTime, u)),
              !m && this._tTime && f !== a && (f = a),
              p && 1 & a && ((i = y - i), (g = 1)),
              a !== f && !this._lock)
            ) {
              var b = p && 1 & f,
                T = b === (p && 1 & a);
              if (
                (a < f && (b = !b),
                (m = b ? 0 : y),
                (this._lock = 1),
                (this.render(m || (g ? 0 : lt(a * u)), e, !y)._lock = 0),
                (this._tTime = w),
                !e && this.parent && oe(this, "onRepeat"),
                this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                (m && m !== this._time) ||
                  l !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((y = this._dur),
                (_ = this._tDur),
                T &&
                  ((this._lock = 2),
                  (m = b ? y : -1e-4),
                  this.render(m, !0),
                  this.vars.repeatRefresh && !g && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              ke(this, g);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((c = (function (t, e, n) {
                var r;
                if (n > e)
                  for (r = t._first; r && r._start <= n; ) {
                    if ("isPause" === r.data && r._start > e) return r;
                    r = r._next;
                  }
                else
                  for (r = t._last; r && r._start >= n; ) {
                    if ("isPause" === r.data && r._start < e) return r;
                    r = r._prev;
                  }
              })(this, lt(m), lt(i))),
              c && (w -= i - (i = c._start))),
            (this._tTime = w),
            (this._time = i),
            (this._act = !h),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (m = 0)),
            !m && i && !e && (oe(this, "onStart"), this._tTime !== w))
          )
            return this;
          if (i >= m && t >= 0)
            for (o = this._first; o; ) {
              if (
                ((s = o._next), (o._act || i >= o._start) && o._ts && c !== o)
              ) {
                if (o.parent !== this) return this.render(t, e, n);
                if (
                  (o.render(
                    o._ts > 0
                      ? (i - o._start) * o._ts
                      : (o._dirty ? o.totalDuration() : o._tDur) +
                          (i - o._start) * o._ts,
                    e,
                    n
                  ),
                  i !== this._time || (!this._ts && !l))
                ) {
                  (c = 0), s && (w += this._zTime = -1e-8);
                  break;
                }
              }
              o = s;
            }
          else {
            o = this._last;
            for (var k = t < 0 ? t : i; o; ) {
              if (
                ((s = o._prev), (o._act || k <= o._end) && o._ts && c !== o)
              ) {
                if (o.parent !== this) return this.render(t, e, n);
                if (
                  (o.render(
                    o._ts > 0
                      ? (k - o._start) * o._ts
                      : (o._dirty ? o.totalDuration() : o._tDur) +
                          (k - o._start) * o._ts,
                    e,
                    n
                  ),
                  i !== this._time || (!this._ts && !l))
                ) {
                  (c = 0), s && (w += this._zTime = k ? -1e-8 : v);
                  break;
                }
              }
              o = s;
            }
          }
          if (
            c &&
            !e &&
            (this.pause(),
            (c.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1),
            this._ts)
          )
            return (this._start = d), At(this), this.render(t, e, n);
          this._onUpdate && !e && oe(this, "onUpdate", !0),
            ((w === _ && this._tTime >= this.totalDuration()) || (!w && m)) &&
              ((d !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !y) &&
                  ((w === _ && this._ts > 0) || (!w && this._ts < 0)) &&
                  Tt(this, 1),
                e ||
                  (t < 0 && !m) ||
                  (!w && !m && _) ||
                  (oe(
                    this,
                    w === _ && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(w < _ && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (o.add = function (t, e) {
        var n = this;
        if ((E(e) || (e = Wt(this, e, t)), !(t instanceof Pe))) {
          if (R(t))
            return (
              t.forEach(function (t) {
                return n.add(t, e);
              }),
              this
            );
          if (S(t)) return this.addLabel(t, e);
          if (!M(t)) return this;
          t = Ne.delayedCall(0, t);
        }
        return this !== t ? Dt(this, t, e) : this;
      }),
      (o.getChildren = function (t, e, n, r) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === n && (n = !0),
          void 0 === r && (r = -1e8);
        for (var i = [], o = this._first; o; )
          o._start >= r &&
            (o instanceof Ne
              ? e && i.push(o)
              : (n && i.push(o),
                t && i.push.apply(i, o.getChildren(!0, e, n)))),
            (o = o._next);
        return i;
      }),
      (o.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
          if (e[n].vars.id === t) return e[n];
      }),
      (o.remove = function (t) {
        return S(t)
          ? this.removeLabel(t)
          : M(t)
          ? this.killTweensOf(t)
          : (bt(this, t),
            t === this._recent && (this._recent = this._last),
            kt(this));
      }),
      (o.totalTime = function (t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = lt(
                _e.time -
                  (this._ts > 0
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            n.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (o.addLabel = function (t, e) {
        return (this.labels[t] = Wt(this, e)), this;
      }),
      (o.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (o.addPause = function (t, e, n) {
        var r = Ne.delayedCall(0, e || j, n);
        return (
          (r.data = "isPause"), (this._hasPause = 1), Dt(this, r, Wt(this, t))
        );
      }),
      (o.removePause = function (t) {
        var e = this._first;
        for (t = Wt(this, t); e; )
          e._start === t && "isPause" === e.data && Tt(e), (e = e._next);
      }),
      (o.killTweensOf = function (t, e, n) {
        for (var r = this.getTweensOf(t, n), i = r.length; i--; )
          De !== r[i] && r[i].kill(t, e);
        return this;
      }),
      (o.getTweensOf = function (t, e) {
        for (var n, r = [], i = Qt(t), o = this._first, s = E(e); o; )
          o instanceof Ne
            ? ht(o._targets, i) &&
              (s
                ? (!De || (o._initted && o._ts)) &&
                  o.globalTime(0) <= e &&
                  o.globalTime(o.totalDuration()) > e
                : !e || o.isActive()) &&
              r.push(o)
            : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
            (o = o._next);
        return r;
      }),
      (o.tweenTo = function (t, e) {
        e = e || {};
        var n,
          r = this,
          i = Wt(r, t),
          o = e,
          s = o.startAt,
          a = o.onStart,
          u = o.onStartParams,
          l = o.immediateRender,
          c = Ne.to(
            r,
            mt(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (i - (s && "time" in s ? s.time : r._time)) / r.timeScale()
                  ) ||
                  v,
                onStart: function () {
                  if ((r.pause(), !n)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (i - (s && "time" in s ? s.time : r._time)) /
                          r.timeScale()
                      );
                    c._dur !== t && Yt(c, t, 0, 1).render(c._time, !0, !0),
                      (n = 1);
                  }
                  a && a.apply(c, u || []);
                },
              },
              e
            )
          );
        return l ? c.render(0) : c;
      }),
      (o.tweenFromTo = function (t, e, n) {
        return this.tweenTo(e, mt({ startAt: { time: Wt(this, t) } }, n));
      }),
      (o.recent = function () {
        return this._recent;
      }),
      (o.nextLabel = function (t) {
        return void 0 === t && (t = this._time), ie(this, Wt(this, t));
      }),
      (o.previousLabel = function (t) {
        return void 0 === t && (t = this._time), ie(this, Wt(this, t), 1);
      }),
      (o.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + v);
      }),
      (o.shiftChildren = function (t, e, n) {
        void 0 === n && (n = 0);
        for (var r, i = this._first, o = this.labels; i; )
          i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
        if (e) for (r in o) o[r] >= n && (o[r] += t);
        return kt(this);
      }),
      (o.invalidate = function () {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
        return n.prototype.invalidate.call(this);
      }),
      (o.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, n = this._first; n; )
          (e = n._next), this.remove(n), (n = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          kt(this)
        );
      }),
      (o.totalDuration = function (t) {
        var e,
          n,
          i,
          o = 0,
          s = this,
          a = s._last,
          u = _;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -t : t)
          );
        if (s._dirty) {
          for (i = s.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              (n = a._start) > u && s._sort && a._ts && !s._lock
                ? ((s._lock = 1), (Dt(s, a, n - a._delay, 1)._lock = 0))
                : (u = n),
              n < 0 &&
                a._ts &&
                ((o -= n),
                ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                  ((s._start += n / s._ts), (s._time -= n), (s._tTime -= n)),
                s.shiftChildren(-n, !1, -Infinity),
                (u = 0)),
              a._end > o && a._ts && (o = a._end),
              (a = e);
          Yt(s, s === r && s._time > o ? s._time : o, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (i.updateRoot = function (t) {
        if ((r._ts && (ft(r, Ot(t, r)), (u = _e.frame)), _e.frame >= et)) {
          et += g.autoSleep || 120;
          var e = r._first;
          if ((!e || !e._ts) && g.autoSleep && _e._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || _e.sleep();
          }
        }
      }),
      i
    );
  })(Pe);
  mt(Be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var De,
    Re,
    Le = function (t, e, n, r, i, o, s) {
      var a,
        u,
        l,
        c,
        h,
        d,
        f,
        p,
        g = new rn(this._pt, t, e, 0, 1, $e, null, i),
        m = 0,
        _ = 0;
      for (
        g.b = n,
          g.e = r,
          n += "",
          (f = ~(r += "").indexOf("random(")) && (r = ne(r)),
          o && (o((p = [n, r]), t, e), (n = p[0]), (r = p[1])),
          u = n.match(Y) || [];
        (a = Y.exec(r));

      )
        (c = a[0]),
          (h = r.substring(m, a.index)),
          l ? (l = (l + 1) % 5) : "rgba(" === h.substr(-5) && (l = 1),
          c !== u[_++] &&
            ((d = parseFloat(u[_ - 1]) || 0),
            (g._pt = {
              _next: g._pt,
              p: h || 1 === _ ? h : ",",
              s: d,
              c: "=" === c.charAt(1) ? ct(d, c) - d : parseFloat(c) - d,
              m: l && l < 4 ? Math.round : 0,
            }),
            (m = Y.lastIndex));
      return (
        (g.c = m < r.length ? r.substring(m, r.length) : ""),
        (g.fp = s),
        (X.test(r) || f) && (g.e = 0),
        (this._pt = g),
        g
      );
    },
    Ie = function (t, e, n, r, i, o, s, a, u) {
      M(r) && (r = r(i || 0, t, o));
      var l,
        c = t[e],
        h =
          "get" !== n
            ? n
            : M(c)
            ? u
              ? t[
                  e.indexOf("set") || !M(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : c,
        d = M(c) ? (u ? Ue : Ve) : He;
      if (
        (S(r) &&
          (~r.indexOf("random(") && (r = ne(r)),
          "=" === r.charAt(1) &&
            ((l = ct(h, r) + (Vt(h) || 0)) || 0 === l) &&
            (r = l)),
        h !== r || Re)
      )
        return isNaN(h * r) || "" === r
          ? (!c && !(e in t) && V(e, r),
            Le.call(this, t, e, h, r, d, a || g.stringFilter, u))
          : ((l = new rn(
              this._pt,
              t,
              e,
              +h || 0,
              r - (h || 0),
              "boolean" == typeof c ? Ze : Qe,
              0,
              d
            )),
            u && (l.fp = u),
            s && l.modifier(s, this, t),
            (this._pt = l));
    },
    ze = function (t, e, n, r, i, o) {
      var s, a, u, c;
      if (
        J[t] &&
        !1 !==
          (s = new J[t]()).init(
            i,
            s.rawVars
              ? e[t]
              : (function (t, e, n, r, i) {
                  if (
                    (M(t) && (t = Fe(t, i, e, n, r)),
                    !O(t) || (t.style && t.nodeType) || R(t) || D(t))
                  )
                    return S(t) ? Fe(t, i, e, n, r) : t;
                  var o,
                    s = {};
                  for (o in t) s[o] = Fe(t[o], i, e, n, r);
                  return s;
                })(e[t], r, i, o, n),
            n,
            r,
            o
          ) &&
        ((n._pt = a = new rn(n._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
        n !== l)
      )
        for (u = n._ptLookup[n._targets.indexOf(i)], c = s._props.length; c--; )
          u[s._props[c]] = a;
      return s;
    },
    Ye = function t(e, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        h,
        d,
        f,
        p,
        g,
        y,
        w,
        x = e.vars,
        b = x.ease,
        T = x.startAt,
        k = x.immediateRender,
        S = x.lazy,
        M = x.onUpdate,
        E = x.onUpdateParams,
        C = x.callbackScope,
        O = x.runBackwards,
        P = x.yoyoEase,
        B = x.keyframes,
        D = x.autoRevert,
        R = e._dur,
        L = e._startAt,
        I = e._targets,
        z = e.parent,
        Y = z && "nested" === z.data ? z.parent._targets : I,
        X = "auto" === e._overwrite && !n,
        F = e.timeline;
      if (
        (F && (!B || !b) && (b = "none"),
        (e._ease = Se(b, m.ease)),
        (e._yEase = P ? Te(Se(!0 === P ? b : P, m.ease)) : 0),
        P &&
          e._yoyo &&
          !e._repeat &&
          ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
        (e._from = !F && !!x.runBackwards),
        !F || (B && !x.stagger))
      ) {
        if (
          ((y = (d = I[0] ? ot(I[0]).harness : 0) && x[d.prop]),
          (o = yt(x, Q)),
          L && (Tt(L.render(-1, !0)), (L._lazy = 0)),
          T)
        )
          if (
            (Tt(
              (e._startAt = Ne.set(
                I,
                mt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: z,
                    immediateRender: !0,
                    lazy: A(S),
                    startAt: null,
                    delay: 0,
                    onUpdate: M,
                    onUpdateParams: E,
                    callbackScope: C,
                    stagger: 0,
                  },
                  T
                )
              ))
            ),
            i < 0 && !k && !D && e._startAt.render(-1, !0),
            k)
          ) {
            if ((i > 0 && !D && (e._startAt = 0), R && i <= 0))
              return void (i && (e._zTime = i));
          } else !1 === D && (e._startAt = 0);
        else if (O && R)
          if (L) !D && (e._startAt = 0);
          else if (
            (i && (k = !1),
            (a = mt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: k && A(S),
                immediateRender: k,
                stagger: 0,
                parent: z,
              },
              o
            )),
            y && (a[d.prop] = y),
            Tt((e._startAt = Ne.set(I, a))),
            i < 0 && e._startAt.render(-1, !0),
            (e._zTime = i),
            k)
          ) {
            if (!i) return;
          } else t(e._startAt, v);
        for (
          e._pt = e._ptCache = 0, S = (R && A(S)) || (S && !R), s = 0;
          s < I.length;
          s++
        ) {
          if (
            ((h = (l = I[s])._gsap || it(I)[s]._gsap),
            (e._ptLookup[s] = p = {}),
            K[h.id] && Z.length && dt(),
            (g = Y === I ? s : Y.indexOf(l)),
            d &&
              !1 !== (f = new d()).init(l, y || o, e, g, Y) &&
              ((e._pt = u =
                new rn(e._pt, l, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                p[t] = u;
              }),
              f.priority && (c = 1)),
            !d || y)
          )
            for (a in o)
              J[a] && (f = ze(a, o, e, g, l, Y))
                ? f.priority && (c = 1)
                : (p[a] = u =
                    Ie.call(e, l, a, "get", o[a], g, Y, 0, x.stringFilter));
          e._op && e._op[s] && e.kill(l, e._op[s]),
            X &&
              e._pt &&
              ((De = e),
              r.killTweensOf(l, p, e.globalTime(i)),
              (w = !e.parent),
              (De = 0)),
            e._pt && S && (K[h.id] = 1);
        }
        c && nn(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = M),
        (e._initted = (!e._op || e._pt) && !w),
        B && i <= 0 && F.render(_, !0, !0);
    },
    Xe = function (t, e, n, r) {
      var i,
        o,
        s = e.ease || r || "power1.inOut";
      if (R(e))
        (o = n[t] || (n[t] = [])),
          e.forEach(function (t, n) {
            return o.push({ t: (n / (e.length - 1)) * 100, v: t, e: s });
          });
      else
        for (i in e)
          (o = n[i] || (n[i] = [])),
            "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: s });
    },
    Fe = function (t, e, n, r, i) {
      return M(t)
        ? t.call(e, n, r, i)
        : S(t) && ~t.indexOf("random(")
        ? ne(t)
        : t;
    },
    We = rt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    qe = {};
  at(We + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (qe[t] = 1);
  });
  var Ne = (function (i) {
    function o(e, o, s, a) {
      var u;
      "number" == typeof o && ((s.duration = o), (o = s), (s = null));
      var l,
        c,
        h,
        d,
        f,
        p,
        m,
        _,
        v = (u = i.call(this, a ? o : wt(o)) || this).vars,
        y = v.duration,
        w = v.delay,
        x = v.immediateRender,
        b = v.stagger,
        T = v.overwrite,
        k = v.keyframes,
        S = v.defaults,
        M = v.scrollTrigger,
        C = v.yoyoEase,
        P = o.parent || r,
        L = (R(e) || D(e) ? E(e[0]) : "length" in o) ? [e] : Qt(e);
      if (
        ((u._targets = L.length
          ? it(L)
          : U(
              "GSAP target " + e + " not found. https://greensock.com",
              !g.nullTargetWarn
            ) || []),
        (u._ptLookup = []),
        (u._overwrite = T),
        k || b || B(y) || B(w))
      ) {
        if (
          ((o = u.vars),
          (l = u.timeline =
            new Be({ data: "nested", defaults: S || {} })).kill(),
          (l.parent = l._dp = t(u)),
          (l._start = 0),
          b || B(y) || B(w))
        ) {
          if (((d = L.length), (m = b && $t(b)), O(b)))
            for (f in b) ~We.indexOf(f) && (_ || (_ = {}), (_[f] = b[f]));
          for (c = 0; c < d; c++)
            ((h = yt(o, qe)).stagger = 0),
              C && (h.yoyoEase = C),
              _ && _t(h, _),
              (p = L[c]),
              (h.duration = +Fe(y, t(u), c, p, L)),
              (h.delay = (+Fe(w, t(u), c, p, L) || 0) - u._delay),
              !b &&
                1 === d &&
                h.delay &&
                ((u._delay = w = h.delay), (u._start += w), (h.delay = 0)),
              l.to(p, h, m ? m(c, p, L) : 0),
              (l._ease = ye.none);
          l.duration() ? (y = w = 0) : (u.timeline = 0);
        } else if (k) {
          wt(mt(l.vars.defaults, { ease: "none" })),
            (l._ease = Se(k.ease || o.ease || "none"));
          var I,
            z,
            Y,
            X = 0;
          if (R(k))
            k.forEach(function (t) {
              return l.to(L, t, ">");
            });
          else {
            for (f in ((h = {}), k))
              "ease" === f || "easeEach" === f || Xe(f, k[f], h, k.easeEach);
            for (f in h)
              for (
                I = h[f].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  X = 0,
                  c = 0;
                c < I.length;
                c++
              )
                ((Y = {
                  ease: (z = I[c]).e,
                  duration: ((z.t - (c ? I[c - 1].t : 0)) / 100) * y,
                })[f] = z.v),
                  l.to(L, Y, X),
                  (X += Y.duration);
            l.duration() < y && l.to({}, { duration: y - l.duration() });
          }
        }
        y || u.duration((y = l.duration()));
      } else u.timeline = 0;
      return (
        !0 !== T || n || ((De = t(u)), r.killTweensOf(L), (De = 0)),
        Dt(P, t(u), s),
        o.reversed && u.reverse(),
        o.paused && u.paused(!0),
        (x ||
          (!y &&
            !k &&
            u._start === lt(P._time) &&
            A(x) &&
            Mt(t(u)) &&
            "nested" !== P.data)) &&
          ((u._tTime = -1e-8), u.render(Math.max(0, -w))),
        M && Rt(t(u), M),
        u
      );
    }
    e(o, i);
    var s = o.prototype;
    return (
      (s.render = function (t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c,
          h,
          d = this._time,
          f = this._tDur,
          p = this._dur,
          g = t > f - v && t >= 0 ? f : t < v ? 0 : t;
        if (p) {
          if (
            g !== this._tTime ||
            !t ||
            n ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != t < 0)
          ) {
            if (((r = g), (c = this.timeline), this._repeat)) {
              if (((s = p + this._rDelay), this._repeat < -1 && t < 0))
                return this.totalTime(100 * s + t, e, n);
              if (
                ((r = lt(g % s)),
                g === f
                  ? ((o = this._repeat), (r = p))
                  : ((o = ~~(g / s)) && o === g / s && ((r = p), o--),
                    r > p && (r = p)),
                (u = this._yoyo && 1 & o) && ((h = this._yEase), (r = p - r)),
                (a = Ct(this._tTime, s)),
                r === d && !n && this._initted)
              )
                return (this._tTime = g), this;
              o !== a &&
                (c && this._yEase && ke(c, u),
                !this.vars.repeatRefresh ||
                  u ||
                  this._lock ||
                  ((this._lock = n = 1),
                  (this.render(lt(s * o), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Lt(this, t < 0 ? t : r, n, e)) return (this._tTime = 0), this;
              if (d !== this._time) return this;
              if (p !== this._dur) return this.render(t, e, n);
            }
            if (
              ((this._tTime = g),
              (this._time = r),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = l = (h || this._ease)(r / p)),
              this._from && (this.ratio = l = 1 - l),
              r && !d && !e && (oe(this, "onStart"), this._tTime !== g))
            )
              return this;
            for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
            (c &&
              c.render(
                t < 0 ? t : !r && u ? -1e-8 : c._dur * c._ease(r / this._dur),
                e,
                n
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                oe(this, "onUpdate")),
              this._repeat &&
                o !== a &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                oe(this, "onRepeat"),
              (g !== this._tDur && g) ||
                this._tTime !== g ||
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  this._startAt.render(t, !0, !0),
                (t || !p) &&
                  ((g === this._tDur && this._ts > 0) ||
                    (!g && this._ts < 0)) &&
                  Tt(this, 1),
                e ||
                  (t < 0 && !d) ||
                  (!g && !d) ||
                  (oe(this, g === f ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(g < f && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (t, e, n, r) {
            var i,
              o,
              s,
              a = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start && It(t) && (t._initted || !zt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !zt(t))))
                  ? 0
                  : 1,
              l = t._rDelay,
              c = 0;
            if (
              (l &&
                t._repeat &&
                ((c = Ht(0, t._tDur, e)),
                (o = Ct(c, l)),
                t._yoyo && 1 & o && (u = 1 - u),
                o !== Ct(t._tTime, l) &&
                  ((a = 1 - u),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== a || r || t._zTime === v || (!e && t._zTime))
            ) {
              if (!t._initted && Lt(t, e, r, n)) return;
              for (
                s = t._zTime,
                  t._zTime = e || (n ? v : 0),
                  n || (n = e && !s),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = c,
                  i = t._pt;
                i;

              )
                i.r(u, i.d), (i = i._next);
              t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                t._onUpdate && !n && oe(t, "onUpdate"),
                c && t._repeat && !n && t.parent && oe(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && Tt(t, 1),
                  n ||
                    (oe(t, u ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, n);
        return this;
      }),
      (s.targets = function () {
        return this._targets;
      }),
      (s.invalidate = function () {
        return (
          (this._pt =
            this._op =
            this._startAt =
            this._onUpdate =
            this._lazy =
            this.ratio =
              0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          i.prototype.invalidate.call(this)
        );
      }),
      (s.resetTo = function (t, e, n, r) {
        c || _e.wake(), this._ts || this.play();
        var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Ye(this, i),
          (function (t, e, n, r, i, o, s) {
            var a,
              u,
              l,
              c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!c)
              for (
                c = t._ptCache[e] = [], u = t._ptLookup, l = t._targets.length;
                l--;

              ) {
                if ((a = u[l][e]) && a.d && a.d._pt)
                  for (a = a.d._pt; a && a.p !== e; ) a = a._next;
                if (!a)
                  return (Re = 1), (t.vars[e] = "+=0"), Ye(t, s), (Re = 0), 1;
                c.push(a);
              }
            for (l = c.length; l--; )
              ((a = c[l]).s =
                (!r && 0 !== r) || i ? a.s + (r || 0) + o * a.c : r),
                (a.c = n - a.s),
                a.e && (a.e = ut(n) + Vt(a.e)),
                a.b && (a.b = a.s + Vt(a.b));
          })(this, t, e, n, r, this._ease(i / this._dur), i)
            ? this.resetTo(t, e, n, r)
            : (Pt(this, 0),
              this.parent ||
                xt(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (s.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? se(this) : this;
        if (this.timeline) {
          var n = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, De && !0 !== De.vars.overwrite)
              ._first || se(this),
            this.parent &&
              n !== this.timeline.totalDuration() &&
              Yt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
            this
          );
        }
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = this._targets,
          h = t ? Qt(t) : c,
          d = this._ptLookup,
          f = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var n = t.length, r = n === e.length;
              r && n-- && t[n] === e[n];

            );
            return n < 0;
          })(c, h)
        )
          return "all" === e && (this._pt = 0), se(this);
        for (
          r = this._op = this._op || [],
            "all" !== e &&
              (S(e) &&
                ((a = {}),
                at(e, function (t) {
                  return (a[t] = 1);
                }),
                (e = a)),
              (e = (function (t, e) {
                var n,
                  r,
                  i,
                  o,
                  s = t[0] ? ot(t[0]).harness : 0,
                  a = s && s.aliases;
                if (!a) return e;
                for (r in ((n = _t({}, e)), a))
                  if ((r in n))
                    for (i = (o = a[r].split(",")).length; i--; )
                      n[o[i]] = n[r];
                return n;
              })(c, e))),
            l = c.length;
          l--;

        )
          if (~h.indexOf(c[l]))
            for (a in ((i = d[l]),
            "all" === e
              ? ((r[l] = e), (s = i), (o = {}))
              : ((o = r[l] = r[l] || {}), (s = e)),
            s))
              (u = i && i[a]) &&
                (("kill" in u.d && !0 !== u.d.kill(a)) || bt(this, u, "_pt"),
                delete i[a]),
                "all" !== o && (o[a] = 1);
        return this._initted && !this._pt && f && se(this), this;
      }),
      (o.to = function (t, e) {
        return new o(t, e, arguments[2]);
      }),
      (o.from = function (t, e) {
        return qt(1, arguments);
      }),
      (o.delayedCall = function (t, e, n, r) {
        return new o(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: n,
          onReverseCompleteParams: n,
          callbackScope: r,
        });
      }),
      (o.fromTo = function (t, e, n) {
        return qt(2, arguments);
      }),
      (o.set = function (t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new o(t, e);
      }),
      (o.killTweensOf = function (t, e, n) {
        return r.killTweensOf(t, e, n);
      }),
      o
    );
  })(Pe);
  mt(Ne.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    at("staggerTo,staggerFrom,staggerFromTo", function (t) {
      Ne[t] = function () {
        var e = new Be(),
          n = Ut.call(arguments, 0);
        return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
      };
    });
  var He = function (t, e, n) {
      return (t[e] = n);
    },
    Ve = function (t, e, n) {
      return t[e](n);
    },
    Ue = function (t, e, n, r) {
      return t[e](r.fp, n);
    },
    Ge = function (t, e, n) {
      return t.setAttribute(e, n);
    },
    je = function (t, e) {
      return M(t[e]) ? Ve : C(t[e]) && t.setAttribute ? Ge : He;
    },
    Qe = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    Ze = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    $e = function (t, e) {
      var n = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (1 === t && e.e) r = e.e;
      else {
        for (; n; )
          (r =
            n.p +
            (n.m
              ? n.m(n.s + n.c * t)
              : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
            r),
            (n = n._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    Ke = function (t, e) {
      for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
    },
    Je = function (t, e, n, r) {
      for (var i, o = this._pt; o; )
        (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
    },
    tn = function (t) {
      for (var e, n, r = this._pt; r; )
        (n = r._next),
          (r.p === t && !r.op) || r.op === t
            ? bt(this, r, "_pt")
            : r.dep || (e = 1),
          (r = n);
      return !e;
    },
    en = function (t, e, n, r) {
      r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
    },
    nn = function (t) {
      for (var e, n, r, i, o = t._pt; o; ) {
        for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
        (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
          (o._next = n) ? (n._prev = o) : (i = o),
          (o = e);
      }
      t._pt = r;
    },
    rn = (function () {
      function t(t, e, n, r, i, o, s, a, u) {
        (this.t = e),
          (this.s = r),
          (this.c = i),
          (this.p = n),
          (this.r = o || Qe),
          (this.d = s || this),
          (this.set = a || He),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = en),
            (this.m = t),
            (this.mt = n),
            (this.tween = e);
        }),
        t
      );
    })();
  at(
    rt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (Q[t] = 1);
    }
  ),
    (q.TweenMax = q.TweenLite = Ne),
    (q.TimelineLite = q.TimelineMax = Be),
    (r = new Be({
      sortChildren: !1,
      defaults: m,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (g.stringFilter = me);
  var on = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      e.forEach(function (t) {
        return ae(t);
      });
    },
    timeline: function (t) {
      return new Be(t);
    },
    getTweensOf: function (t, e) {
      return r.getTweensOf(t, e);
    },
    getProperty: function (t, e, n, r) {
      S(t) && (t = Qt(t)[0]);
      var i = ot(t || {}).get,
        o = n ? gt : pt;
      return (
        "native" === n && (n = ""),
        t
          ? e
            ? o(((J[e] && J[e].get) || i)(t, e, n, r))
            : function (e, n, r) {
                return o(((J[e] && J[e].get) || i)(t, e, n, r));
              }
          : t
      );
    },
    quickSetter: function (t, e, n) {
      if ((t = Qt(t)).length > 1) {
        var r = t.map(function (t) {
            return un.quickSetter(t, e, n);
          }),
          i = r.length;
        return function (t) {
          for (var e = i; e--; ) r[e](t);
        };
      }
      t = t[0] || {};
      var o = J[e],
        s = ot(t),
        a = (s.harness && (s.harness.aliases || {})[e]) || e,
        u = o
          ? function (e) {
              var r = new o();
              (l._pt = 0),
                r.init(t, n ? e + n : e, l, 0, [t]),
                r.render(1, r),
                l._pt && Ke(1, l);
            }
          : s.set(t, a);
      return o
        ? u
        : function (e) {
            return u(t, a, n ? e + n : e, s, 1);
          };
    },
    quickTo: function (t, e, n) {
      var r,
        i = un.to(
          t,
          _t((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {})
        ),
        o = function (t, n, r) {
          return i.resetTo(e, t, n, r);
        };
      return (o.tween = i), o;
    },
    isTweening: function (t) {
      return r.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Se(t.ease, m.ease)), vt(m, t || {});
    },
    config: function (t) {
      return vt(g, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        n = t.effect,
        r = t.plugins,
        i = t.defaults,
        o = t.extendTimeline;
      (r || "").split(",").forEach(function (t) {
        return (
          t && !J[t] && !q[t] && U(e + " effect requires " + t + " plugin.")
        );
      }),
        (tt[e] = function (t, e, r) {
          return n(Qt(t), mt(e || {}, i), r);
        }),
        o &&
          (Be.prototype[e] = function (t, n, r) {
            return this.add(tt[e](t, O(n) ? n : (r = n) && {}, this), r);
          });
    },
    registerEase: function (t, e) {
      ye[t] = Se(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Se(t, e) : ye;
    },
    getById: function (t) {
      return r.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var n,
        i,
        o = new Be(t);
      for (
        o.smoothChildTiming = A(t.smoothChildTiming),
          r.remove(o),
          o._dp = 0,
          o._time = o._tTime = r._time,
          n = r._first;
        n;

      )
        (i = n._next),
          (!e &&
            !n._dur &&
            n instanceof Ne &&
            n.vars.onComplete === n._targets[0]) ||
            Dt(o, n, n._start - n._delay),
          (n = i);
      return Dt(r, o, 0), o;
    },
    utils: {
      wrap: function t(e, n, r) {
        var i = n - e;
        return R(e)
          ? ee(e, t(0, e.length), n)
          : Nt(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function t(e, n, r) {
        var i = n - e,
          o = 2 * i;
        return R(e)
          ? ee(e, t(0, e.length - 1), n)
          : Nt(r, function (t) {
              return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
            });
      },
      distribute: $t,
      random: te,
      snap: Jt,
      normalize: function (t, e, n) {
        return re(t, e, 0, 1, n);
      },
      getUnit: Vt,
      clamp: function (t, e, n) {
        return Nt(n, function (n) {
          return Ht(t, e, n);
        });
      },
      splitColor: he,
      toArray: Qt,
      selector: function (t) {
        return (
          (t = Qt(t)[0] || U("Invalid scope") || {}),
          function (e) {
            var n = t.current || t.nativeElement || t;
            return Qt(
              e,
              n.querySelectorAll
                ? n
                : n === t
                ? U("Invalid scope") || s.createElement("div")
                : t
            );
          }
        );
      },
      mapRange: re,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (n) {
          return t(parseFloat(n)) + (e || Vt(n));
        };
      },
      interpolate: function t(e, n, r, i) {
        var o = isNaN(e + n)
          ? 0
          : function (t) {
              return (1 - t) * e + t * n;
            };
        if (!o) {
          var s,
            a,
            u,
            l,
            c,
            h = S(e),
            d = {};
          if ((!0 === r && (i = 1) && (r = null), h))
            (e = { p: e }), (n = { p: n });
          else if (R(e) && !R(n)) {
            for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++)
              u.push(t(e[a - 1], e[a]));
            l--,
              (o = function (t) {
                t *= l;
                var e = Math.min(c, ~~t);
                return u[e](t - e);
              }),
              (r = n);
          } else i || (e = _t(R(e) ? [] : {}, e));
          if (!u) {
            for (s in n) Ie.call(d, e, s, "get", n[s]);
            o = function (t) {
              return Ke(t, d) || (h ? e.p : e);
            };
          }
        }
        return Nt(r, o);
      },
      shuffle: Zt,
    },
    install: H,
    effects: tt,
    ticker: _e,
    updateRoot: Be.updateRoot,
    plugins: J,
    globalTimeline: r,
    core: {
      PropTween: rn,
      globals: G,
      Tween: Ne,
      Timeline: Be,
      Animation: Pe,
      getCache: ot,
      _removeLinkedListItem: bt,
      suppressOverwrites: function (t) {
        return (n = t);
      },
    },
  };
  at("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (on[t] = Ne[t]);
  }),
    _e.add(Be.updateRoot),
    (l = on.to({}, { duration: 0 }));
  var sn = function (t, e) {
      for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
        n = n._next;
      return n;
    },
    an = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, n, r) {
          r._onInit = function (t) {
            var r, i;
            if (
              (S(n) &&
                ((r = {}),
                at(n, function (t) {
                  return (r[t] = 1);
                }),
                (n = r)),
              e)
            ) {
              for (i in ((r = {}), n)) r[i] = e(n[i]);
              n = r;
            }
            !(function (t, e) {
              var n,
                r,
                i,
                o = t._targets;
              for (n in e)
                for (r = o.length; r--; )
                  (i = t._ptLookup[r][n]) &&
                    (i = i.d) &&
                    (i._pt && (i = sn(i, n)),
                    i && i.modifier && i.modifier(e[n], t, o[r], n));
            })(t, n);
          };
        },
      };
    },
    un =
      on.registerPlugin(
        {
          name: "attr",
          init: function (t, e, n, r, i) {
            var o, s;
            for (o in e)
              (s = this.add(
                t,
                "setAttribute",
                (t.getAttribute(o) || 0) + "",
                e[o],
                r,
                i,
                0,
                0,
                o
              )) && (s.op = o),
                this._props.push(o);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
          },
        },
        an("roundProps", Kt),
        an("modifiers"),
        an("snap", Jt)
      ) || on;
  (Ne.version = Be.version = un.version = "3.10.2"),
    (a = 1),
    P() && ve(),
    ye.Power0,
    ye.Power1,
    ye.Power2,
    ye.Power3,
    ye.Power4,
    ye.Linear,
    ye.Quad,
    ye.Cubic,
    ye.Quart,
    ye.Quint,
    ye.Strong,
    ye.Elastic,
    ye.Back,
    ye.SteppedEase,
    ye.Bounce,
    ye.Sine,
    ye.Expo,
    ye.Circ;
  /*!
   * CSSPlugin 3.10.2
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ln,
    cn,
    hn,
    dn,
    fn,
    pn,
    gn,
    mn = {},
    _n = 180 / Math.PI,
    vn = Math.PI / 180,
    yn = Math.atan2,
    wn = /([A-Z])/g,
    xn = /(left|right|width|margin|padding|x)/i,
    bn = /[\s,\(]\S/,
    Tn = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    kn = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Sn = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    Mn = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    En = function (t, e) {
      var n = e.s + e.c * t;
      e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    Cn = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    On = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    An = function (t, e, n) {
      return (t.style[e] = n);
    },
    Pn = function (t, e, n) {
      return t.style.setProperty(e, n);
    },
    Bn = function (t, e, n) {
      return (t._gsap[e] = n);
    },
    Dn = function (t, e, n) {
      return (t._gsap.scaleX = t._gsap.scaleY = n);
    },
    Rn = function (t, e, n, r, i) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
    },
    Ln = function (t, e, n, r, i) {
      var o = t._gsap;
      (o[e] = n), o.renderTransform(i, o);
    },
    In = "transform",
    zn = In + "Origin",
    Yn = function (t, e) {
      var n = cn.createElementNS
        ? cn.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : cn.createElement(t);
      return n.style ? n : cn.createElement(t);
    },
    Xn = function t(e, n, r) {
      var i = getComputedStyle(e);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(wn, "-$1").toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && t(e, Wn(n) || n, 1)) ||
        ""
      );
    },
    Fn = "O,Moz,ms,Ms,Webkit".split(","),
    Wn = function (t, e, n) {
      var r = (e || fn).style,
        i = 5;
      if (t in r && !n) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        i-- && !(Fn[i] + t in r);

      );
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Fn[i] : "") + t;
    },
    qn = function () {
      "undefined" != typeof window &&
        window.document &&
        ((ln = window),
        (cn = ln.document),
        (hn = cn.documentElement),
        (fn = Yn("div") || { style: {} }),
        Yn("div"),
        (In = Wn(In)),
        (zn = In + "Origin"),
        (fn.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (gn = !!Wn("perspective")),
        (dn = 1));
    },
    Nn = function t(e) {
      var n,
        r = Yn(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        o = this.nextSibling,
        s = this.style.cssText;
      if (
        (hn.appendChild(r),
        r.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (n = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (n = this._gsapBBox());
      return (
        i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
        hn.removeChild(r),
        (this.style.cssText = s),
        n
      );
    },
    Hn = function (t, e) {
      for (var n = e.length; n--; )
        if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
    },
    Vn = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (n) {
        e = Nn.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === Nn ||
          (e = Nn.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +Hn(t, ["x", "cx", "x1"]) || 0,
              y: +Hn(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    Un = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Vn(t));
    },
    Gn = function (t, e) {
      if (e) {
        var n = t.style;
        e in mn && e !== zn && (e = In),
          n.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              n.removeProperty(e.replace(wn, "-$1").toLowerCase()))
            : n.removeAttribute(e);
      }
    },
    jn = function (t, e, n, r, i, o) {
      var s = new rn(t._pt, e, n, 0, 1, o ? On : Cn);
      return (t._pt = s), (s.b = r), (s.e = i), t._props.push(n), s;
    },
    Qn = { deg: 1, rad: 1, turn: 1 },
    Zn = function t(e, n, r, i) {
      var o,
        s,
        a,
        u,
        l = parseFloat(r) || 0,
        c = (r + "").trim().substr((l + "").length) || "px",
        h = fn.style,
        d = xn.test(n),
        f = "svg" === e.tagName.toLowerCase(),
        p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
        g = 100,
        m = "px" === i,
        _ = "%" === i;
      return i === c || !l || Qn[i] || Qn[c]
        ? l
        : ("px" !== c && !m && (l = t(e, n, r, "px")),
          (u = e.getCTM && Un(e)),
          (!_ && "%" !== c) || (!mn[n] && !~n.indexOf("adius"))
            ? ((h[d ? "width" : "height"] = g + (m ? c : i)),
              (s =
                ~n.indexOf("adius") || ("em" === i && e.appendChild && !f)
                  ? e
                  : e.parentNode),
              u && (s = (e.ownerSVGElement || {}).parentNode),
              (s && s !== cn && s.appendChild) || (s = cn.body),
              (a = s._gsap) && _ && a.width && d && a.time === _e.time
                ? ut((l / a.width) * g)
                : ((_ || "%" === c) && (h.position = Xn(e, "position")),
                  s === e && (h.position = "static"),
                  s.appendChild(fn),
                  (o = fn[p]),
                  s.removeChild(fn),
                  (h.position = "absolute"),
                  d && _ && (((a = ot(s)).time = _e.time), (a.width = s[p])),
                  ut(m ? (o * l) / g : o && l ? (g / o) * l : 0)))
            : ((o = u ? e.getBBox()[d ? "width" : "height"] : e[p]),
              ut(_ ? (l / o) * g : (l / 100) * o)));
    },
    $n = function (t, e, n, r) {
      var i;
      return (
        dn || qn(),
        e in Tn &&
          "transform" !== e &&
          ~(e = Tn[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        mn[e] && "transform" !== e
          ? ((i = ur(t, r)),
            (i =
              "transformOrigin" !== e
                ? i[e]
                : i.svg
                ? i.origin
                : lr(Xn(t, zn)) + " " + i.zOrigin + "px"))
          : (!(i = t.style[e]) ||
              "auto" === i ||
              r ||
              ~(i + "").indexOf("calc(")) &&
            (i =
              (er[e] && er[e](t, e, n)) ||
              Xn(t, e) ||
              st(t, e) ||
              ("opacity" === e ? 1 : 0)),
        n && !~(i + "").trim().indexOf(" ") ? Zn(t, e, i, n) + n : i
      );
    },
    Kn = function (t, e, n, r) {
      if (!n || "none" === n) {
        var i = Wn(e, t, 1),
          o = i && Xn(t, i, 1);
        o && o !== n
          ? ((e = i), (n = o))
          : "borderColor" === e && (n = Xn(t, "borderTopColor"));
      }
      var s,
        a,
        u,
        l,
        c,
        h,
        d,
        f,
        p,
        m,
        _,
        v = new rn(this._pt, t.style, e, 0, 1, $e),
        y = 0,
        w = 0;
      if (
        ((v.b = n),
        (v.e = r),
        (n += ""),
        "auto" === (r += "") &&
          ((t.style[e] = r), (r = Xn(t, e) || r), (t.style[e] = n)),
        me((s = [n, r])),
        (n = s[0]),
        (r = s[1]),
        (u = n.match(z) || []),
        (r.match(z) || []).length)
      ) {
        for (; (a = z.exec(r)); )
          (d = a[0]),
            (p = r.substring(y, a.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                (c = 1),
            d !== (h = u[w++] || "") &&
              ((l = parseFloat(h) || 0),
              (_ = h.substr((l + "").length)),
              "=" === d.charAt(1) && (d = ct(l, d) + _),
              (f = parseFloat(d)),
              (m = d.substr((f + "").length)),
              (y = z.lastIndex - m.length),
              m ||
                ((m = m || g.units[e] || _),
                y === r.length && ((r += m), (v.e += m))),
              _ !== m && (l = Zn(t, e, h, m) || 0),
              (v._pt = {
                _next: v._pt,
                p: p || 1 === w ? p : ",",
                s: l,
                c: f - l,
                m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
              }));
        v.c = y < r.length ? r.substring(y, r.length) : "";
      } else v.r = "display" === e && "none" === r ? On : Cn;
      return X.test(r) && (v.e = 0), (this._pt = v), v;
    },
    Jn = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    tr = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var n,
          r,
          i,
          o = e.t,
          s = o.style,
          a = e.u,
          u = o._gsap;
        if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
        else
          for (i = (a = a.split(",")).length; --i > -1; )
            (n = a[i]),
              mn[n] && ((r = 1), (n = "transformOrigin" === n ? zn : In)),
              Gn(o, n);
        r &&
          (Gn(o, In),
          u &&
            (u.svg && o.removeAttribute("transform"),
            ur(o, 1),
            (u.uncache = 1)));
      }
    },
    er = {
      clearProps: function (t, e, n, r, i) {
        if ("isFromStart" !== i.data) {
          var o = (t._pt = new rn(t._pt, e, n, 0, 0, tr));
          return (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1;
        }
      },
    },
    nr = [1, 0, 0, 1, 0, 0],
    rr = {},
    ir = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    or = function (t) {
      var e = Xn(t, In);
      return ir(e) ? nr : e.substr(7).match(I).map(ut);
    },
    sr = function (t, e) {
      var n,
        r,
        i,
        o,
        s = t._gsap || ot(t),
        a = t.style,
        u = or(t);
      return s.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (i = t.transform.baseVal.consolidate().matrix).a,
            i.b,
            i.c,
            i.d,
            i.e,
            i.f,
          ]).join(",")
          ? nr
          : u
        : (u !== nr ||
            t.offsetParent ||
            t === hn ||
            s.svg ||
            ((i = a.display),
            (a.display = "block"),
            ((n = t.parentNode) && t.offsetParent) ||
              ((o = 1), (r = t.nextSibling), hn.appendChild(t)),
            (u = or(t)),
            i ? (a.display = i) : Gn(t, "display"),
            o &&
              (r
                ? n.insertBefore(t, r)
                : n
                ? n.appendChild(t)
                : hn.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    ar = function (t, e, n, r, i, o) {
      var s,
        a,
        u,
        l = t._gsap,
        c = i || sr(t, !0),
        h = l.xOrigin || 0,
        d = l.yOrigin || 0,
        f = l.xOffset || 0,
        p = l.yOffset || 0,
        g = c[0],
        m = c[1],
        _ = c[2],
        v = c[3],
        y = c[4],
        w = c[5],
        x = e.split(" "),
        b = parseFloat(x[0]) || 0,
        T = parseFloat(x[1]) || 0;
      n
        ? c !== nr &&
          (a = g * v - m * _) &&
          ((u = b * (-m / a) + T * (g / a) - (g * w - m * y) / a),
          (b = b * (v / a) + T * (-_ / a) + (_ * w - v * y) / a),
          (T = u))
        : ((b = (s = Vn(t)).x + (~x[0].indexOf("%") ? (b / 100) * s.width : b)),
          (T =
            s.y + (~(x[1] || x[0]).indexOf("%") ? (T / 100) * s.height : T))),
        r || (!1 !== r && l.smooth)
          ? ((y = b - h),
            (w = T - d),
            (l.xOffset = f + (y * g + w * _) - y),
            (l.yOffset = p + (y * m + w * v) - w))
          : (l.xOffset = l.yOffset = 0),
        (l.xOrigin = b),
        (l.yOrigin = T),
        (l.smooth = !!r),
        (l.origin = e),
        (l.originIsAbsolute = !!n),
        (t.style[zn] = "0px 0px"),
        o &&
          (jn(o, l, "xOrigin", h, b),
          jn(o, l, "yOrigin", d, T),
          jn(o, l, "xOffset", f, l.xOffset),
          jn(o, l, "yOffset", p, l.yOffset)),
        t.setAttribute("data-svg-origin", b + " " + T);
    },
    ur = function (t, e) {
      var n = t._gsap || new Ae(t);
      if ("x" in n && !e && !n.uncache) return n;
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        h,
        d,
        f,
        p,
        m,
        _,
        v,
        y,
        w,
        x,
        b,
        T,
        k,
        S,
        M,
        E,
        C,
        O,
        A,
        P,
        B,
        D,
        R,
        L,
        I = t.style,
        z = n.scaleX < 0,
        Y = "px",
        X = "deg",
        F = Xn(t, zn) || "0";
      return (
        (r = i = o = u = l = c = h = d = f = 0),
        (s = a = 1),
        (n.svg = !(!t.getCTM || !Un(t))),
        (_ = sr(t, n.svg)),
        n.svg &&
          ((E =
            (!n.uncache || "0px 0px" === F) &&
            !e &&
            t.getAttribute("data-svg-origin")),
          ar(t, E || F, !!E || n.originIsAbsolute, !1 !== n.smooth, _)),
        (p = n.xOrigin || 0),
        (m = n.yOrigin || 0),
        _ !== nr &&
          ((x = _[0]),
          (b = _[1]),
          (T = _[2]),
          (k = _[3]),
          (r = S = _[4]),
          (i = M = _[5]),
          6 === _.length
            ? ((s = Math.sqrt(x * x + b * b)),
              (a = Math.sqrt(k * k + T * T)),
              (u = x || b ? yn(b, x) * _n : 0),
              (h = T || k ? yn(T, k) * _n + u : 0) &&
                (a *= Math.abs(Math.cos(h * vn))),
              n.svg && ((r -= p - (p * x + m * T)), (i -= m - (p * b + m * k))))
            : ((L = _[6]),
              (D = _[7]),
              (A = _[8]),
              (P = _[9]),
              (B = _[10]),
              (R = _[11]),
              (r = _[12]),
              (i = _[13]),
              (o = _[14]),
              (l = (v = yn(L, B)) * _n),
              v &&
                ((E = S * (y = Math.cos(-v)) + A * (w = Math.sin(-v))),
                (C = M * y + P * w),
                (O = L * y + B * w),
                (A = S * -w + A * y),
                (P = M * -w + P * y),
                (B = L * -w + B * y),
                (R = D * -w + R * y),
                (S = E),
                (M = C),
                (L = O)),
              (c = (v = yn(-T, B)) * _n),
              v &&
                ((y = Math.cos(-v)),
                (R = k * (w = Math.sin(-v)) + R * y),
                (x = E = x * y - A * w),
                (b = C = b * y - P * w),
                (T = O = T * y - B * w)),
              (u = (v = yn(b, x)) * _n),
              v &&
                ((E = x * (y = Math.cos(v)) + b * (w = Math.sin(v))),
                (C = S * y + M * w),
                (b = b * y - x * w),
                (M = M * y - S * w),
                (x = E),
                (S = C)),
              l &&
                Math.abs(l) + Math.abs(u) > 359.9 &&
                ((l = u = 0), (c = 180 - c)),
              (s = ut(Math.sqrt(x * x + b * b + T * T))),
              (a = ut(Math.sqrt(M * M + L * L))),
              (v = yn(S, M)),
              (h = Math.abs(v) > 2e-4 ? v * _n : 0),
              (f = R ? 1 / (R < 0 ? -R : R) : 0)),
          n.svg &&
            ((E = t.getAttribute("transform")),
            (n.forceCSS = t.setAttribute("transform", "") || !ir(Xn(t, In))),
            E && t.setAttribute("transform", E))),
        Math.abs(h) > 90 &&
          Math.abs(h) < 270 &&
          (z
            ? ((s *= -1),
              (h += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((a *= -1), (h += h <= 0 ? 180 : -180))),
        (e = e || n.uncache),
        (n.x =
          r -
          ((n.xPercent =
            r &&
            ((!e && n.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
            ? (t.offsetWidth * n.xPercent) / 100
            : 0) +
          Y),
        (n.y =
          i -
          ((n.yPercent =
            i &&
            ((!e && n.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetHeight * n.yPercent) / 100
            : 0) +
          Y),
        (n.z = o + Y),
        (n.scaleX = ut(s)),
        (n.scaleY = ut(a)),
        (n.rotation = ut(u) + X),
        (n.rotationX = ut(l) + X),
        (n.rotationY = ut(c) + X),
        (n.skewX = h + X),
        (n.skewY = d + X),
        (n.transformPerspective = f + Y),
        (n.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (I[zn] = lr(F)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = g.force3D),
        (n.renderTransform = n.svg ? mr : gn ? gr : hr),
        (n.uncache = 0),
        n
      );
    },
    lr = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    cr = function (t, e, n) {
      var r = Vt(e);
      return ut(parseFloat(e) + parseFloat(Zn(t, "x", n + "px", r))) + r;
    },
    hr = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        gr(t, e);
    },
    dr = "0deg",
    fr = "0px",
    pr = ") ",
    gr = function (t, e) {
      var n = e || this,
        r = n.xPercent,
        i = n.yPercent,
        o = n.x,
        s = n.y,
        a = n.z,
        u = n.rotation,
        l = n.rotationY,
        c = n.rotationX,
        h = n.skewX,
        d = n.skewY,
        f = n.scaleX,
        p = n.scaleY,
        g = n.transformPerspective,
        m = n.force3D,
        _ = n.target,
        v = n.zOrigin,
        y = "",
        w = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (c !== dr || l !== dr)) {
        var x,
          b = parseFloat(l) * vn,
          T = Math.sin(b),
          k = Math.cos(b);
        (b = parseFloat(c) * vn),
          (x = Math.cos(b)),
          (o = cr(_, o, T * x * -v)),
          (s = cr(_, s, -Math.sin(b) * -v)),
          (a = cr(_, a, k * x * -v + v));
      }
      g !== fr && (y += "perspective(" + g + pr),
        (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
        (w || o !== fr || s !== fr || a !== fr) &&
          (y +=
            a !== fr || w
              ? "translate3d(" + o + ", " + s + ", " + a + ") "
              : "translate(" + o + ", " + s + pr),
        u !== dr && (y += "rotate(" + u + pr),
        l !== dr && (y += "rotateY(" + l + pr),
        c !== dr && (y += "rotateX(" + c + pr),
        (h === dr && d === dr) || (y += "skew(" + h + ", " + d + pr),
        (1 === f && 1 === p) || (y += "scale(" + f + ", " + p + pr),
        (_.style[In] = y || "translate(0, 0)");
    },
    mr = function (t, e) {
      var n,
        r,
        i,
        o,
        s,
        a = e || this,
        u = a.xPercent,
        l = a.yPercent,
        c = a.x,
        h = a.y,
        d = a.rotation,
        f = a.skewX,
        p = a.skewY,
        g = a.scaleX,
        m = a.scaleY,
        _ = a.target,
        v = a.xOrigin,
        y = a.yOrigin,
        w = a.xOffset,
        x = a.yOffset,
        b = a.forceCSS,
        T = parseFloat(c),
        k = parseFloat(h);
      (d = parseFloat(d)),
        (f = parseFloat(f)),
        (p = parseFloat(p)) && ((f += p = parseFloat(p)), (d += p)),
        d || f
          ? ((d *= vn),
            (f *= vn),
            (n = Math.cos(d) * g),
            (r = Math.sin(d) * g),
            (i = Math.sin(d - f) * -m),
            (o = Math.cos(d - f) * m),
            f &&
              ((p *= vn),
              (s = Math.tan(f - p)),
              (i *= s = Math.sqrt(1 + s * s)),
              (o *= s),
              p &&
                ((s = Math.tan(p)), (n *= s = Math.sqrt(1 + s * s)), (r *= s))),
            (n = ut(n)),
            (r = ut(r)),
            (i = ut(i)),
            (o = ut(o)))
          : ((n = g), (o = m), (r = i = 0)),
        ((T && !~(c + "").indexOf("px")) || (k && !~(h + "").indexOf("px"))) &&
          ((T = Zn(_, "x", c, "px")), (k = Zn(_, "y", h, "px"))),
        (v || y || w || x) &&
          ((T = ut(T + v - (v * n + y * i) + w)),
          (k = ut(k + y - (v * r + y * o) + x))),
        (u || l) &&
          ((s = _.getBBox()),
          (T = ut(T + (u / 100) * s.width)),
          (k = ut(k + (l / 100) * s.height))),
        (s =
          "matrix(" +
          n +
          "," +
          r +
          "," +
          i +
          "," +
          o +
          "," +
          T +
          "," +
          k +
          ")"),
        _.setAttribute("transform", s),
        b && (_.style[In] = s);
    },
    _r = function (t, e, n, r, i) {
      var o,
        s,
        a = 360,
        u = S(i),
        l = parseFloat(i) * (u && ~i.indexOf("rad") ? _n : 1) - r,
        c = r + l + "deg";
      return (
        u &&
          ("short" === (o = i.split("_")[1]) &&
            (l %= a) !== l % 180 &&
            (l += l < 0 ? a : -360),
          "cw" === o && l < 0
            ? (l = ((l + 36e9) % a) - ~~(l / a) * a)
            : "ccw" === o && l > 0 && (l = ((l - 36e9) % a) - ~~(l / a) * a)),
        (t._pt = s = new rn(t._pt, e, n, r, l, Sn)),
        (s.e = c),
        (s.u = "deg"),
        t._props.push(n),
        s
      );
    },
    vr = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    },
    yr = function (t, e, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = vr({}, n._gsap),
        h = n.style;
      for (i in (c.svg
        ? ((o = n.getAttribute("transform")),
          n.setAttribute("transform", ""),
          (h[In] = e),
          (r = ur(n, 1)),
          Gn(n, In),
          n.setAttribute("transform", o))
        : ((o = getComputedStyle(n)[In]),
          (h[In] = e),
          (r = ur(n, 1)),
          (h[In] = o)),
      mn))
        (o = c[i]) !== (s = r[i]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
          ((a = Vt(o) !== (l = Vt(s)) ? Zn(n, i, o, l) : parseFloat(o)),
          (u = parseFloat(s)),
          (t._pt = new rn(t._pt, r, i, a, u - a, kn)),
          (t._pt.u = l || 0),
          t._props.push(i));
      vr(r, c);
    };
  at("padding,margin,Width,Radius", function (t, e) {
    var n = "Top",
      r = "Right",
      i = "Bottom",
      o = "Left",
      s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (
        n
      ) {
        return e < 2 ? t + n : "border" + n + t;
      });
    er[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
      var o, a;
      if (arguments.length < 4)
        return (
          (o = s.map(function (e) {
            return $n(t, e, n);
          })),
          5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
        );
      (o = (r + "").split(" ")),
        (a = {}),
        s.forEach(function (t, e) {
          return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
        }),
        t.init(e, a, i);
    };
  });
  var wr,
    xr,
    br,
    Tr = {
      name: "css",
      register: qn,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, n, r, i) {
        var o,
          s,
          a,
          u,
          l,
          c,
          h,
          d,
          f,
          p,
          m,
          _,
          v,
          y,
          w,
          x,
          b,
          T,
          k,
          M = this._props,
          E = t.style,
          C = n.vars.startAt;
        for (h in (dn || qn(), e))
          if ("autoRound" !== h && ((s = e[h]), !J[h] || !ze(h, e, n, r, t, i)))
            if (
              ((l = typeof s),
              (c = er[h]),
              "function" === l && (l = typeof (s = s.call(n, r, t, i))),
              "string" === l && ~s.indexOf("random(") && (s = ne(s)),
              c)
            )
              c(this, t, h, s, n) && (w = 1);
            else if ("--" === h.substr(0, 2))
              (o = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                (s += ""),
                (pe.lastIndex = 0),
                pe.test(o) || ((d = Vt(o)), (f = Vt(s))),
                f ? d !== f && (o = Zn(t, h, o, f) + f) : d && (s += d),
                this.add(E, "setProperty", o, s, r, i, 0, 0, h),
                M.push(h);
            else if ("undefined" !== l) {
              if (
                (C && h in C
                  ? ((o =
                      "function" == typeof C[h] ? C[h].call(n, r, t, i) : C[h]),
                    S(o) && ~o.indexOf("random(") && (o = ne(o)),
                    Vt(o + "") || (o += g.units[h] || Vt($n(t, h)) || ""),
                    "=" === (o + "").charAt(1) && (o = $n(t, h)))
                  : (o = $n(t, h)),
                (u = parseFloat(o)),
                (p = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) &&
                  (s = s.substr(2)),
                (a = parseFloat(s)),
                h in Tn &&
                  ("autoAlpha" === h &&
                    (1 === u &&
                      "hidden" === $n(t, "visibility") &&
                      a &&
                      (u = 0),
                    jn(
                      this,
                      E,
                      "visibility",
                      u ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a
                    )),
                  "scale" !== h &&
                    "transform" !== h &&
                    ~(h = Tn[h]).indexOf(",") &&
                    (h = h.split(",")[0])),
                (m = h in mn))
              )
                if (
                  (_ ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) ||
                      ur(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && v.smooth),
                    ((_ = this._pt =
                      new rn(
                        this._pt,
                        E,
                        In,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === h)
                )
                  (this._pt = new rn(
                    this._pt,
                    v,
                    "scaleY",
                    v.scaleY,
                    (p ? ct(v.scaleY, p + a) : a) - v.scaleY || 0
                  )),
                    M.push("scaleY", h),
                    (h += "X");
                else {
                  if ("transformOrigin" === h) {
                    (b = void 0),
                      (T = void 0),
                      (k = void 0),
                      (b = (x = s).split(" ")),
                      (T = b[0]),
                      (k = b[1] || "50%"),
                      ("top" !== T &&
                        "bottom" !== T &&
                        "left" !== k &&
                        "right" !== k) ||
                        ((x = T), (T = k), (k = x)),
                      (b[0] = Jn[T] || T),
                      (b[1] = Jn[k] || k),
                      (s = b.join(" ")),
                      v.svg
                        ? ar(t, s, 0, y, 0, this)
                        : ((f = parseFloat(s.split(" ")[2]) || 0) !==
                            v.zOrigin && jn(this, v, "zOrigin", v.zOrigin, f),
                          jn(this, E, h, lr(o), lr(s)));
                    continue;
                  }
                  if ("svgOrigin" === h) {
                    ar(t, s, 1, y, 0, this);
                    continue;
                  }
                  if (h in rr) {
                    _r(this, v, h, u, p ? ct(u, p + s) : s);
                    continue;
                  }
                  if ("smoothOrigin" === h) {
                    jn(this, v, "smooth", v.smooth, s);
                    continue;
                  }
                  if ("force3D" === h) {
                    v[h] = s;
                    continue;
                  }
                  if ("transform" === h) {
                    yr(this, s, t);
                    continue;
                  }
                }
              else h in E || (h = Wn(h) || h);
              if (
                m ||
                ((a || 0 === a) && (u || 0 === u) && !bn.test(s) && h in E)
              )
                a || (a = 0),
                  (d = (o + "").substr((u + "").length)) !==
                    (f = Vt(s) || (h in g.units ? g.units[h] : d)) &&
                    (u = Zn(t, h, o, f)),
                  (this._pt = new rn(
                    this._pt,
                    m ? v : E,
                    h,
                    u,
                    (p ? ct(u, p + a) : a) - u,
                    m || ("px" !== f && "zIndex" !== h) || !1 === e.autoRound
                      ? kn
                      : En
                  )),
                  (this._pt.u = f || 0),
                  d !== f && "%" !== f && ((this._pt.b = o), (this._pt.r = Mn));
              else if (h in E) Kn.call(this, t, h, o, p ? p + s : s);
              else {
                if (!(h in t)) {
                  V(h, s);
                  continue;
                }
                this.add(t, h, o || t[h], p ? p + s : s, r, i);
              }
              M.push(h);
            }
        w && nn(this);
      },
      get: $n,
      aliases: Tn,
      getSetter: function (t, e, n) {
        var r = Tn[e];
        return (
          r && r.indexOf(",") < 0 && (e = r),
          e in mn && e !== zn && (t._gsap.x || $n(t, "x"))
            ? n && pn === n
              ? "scale" === e
                ? Dn
                : Bn
              : (pn = n || {}) && ("scale" === e ? Rn : Ln)
            : t.style && !C(t.style[e])
            ? An
            : ~e.indexOf("-")
            ? Pn
            : je(t, e)
        );
      },
      core: { _removeProperty: Gn, _getMatrix: sr },
    };
  (un.utils.checkPrefix = Wn),
    (br = at(
      (wr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (xr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        mn[t] = 1;
      }
    )),
    at(xr, function (t) {
      (g.units[t] = "deg"), (rr[t] = 1);
    }),
    (Tn[br[13]] = wr + "," + xr),
    at(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        Tn[e[1]] = br[e[0]];
      }
    ),
    at(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        g.units[t] = "px";
      }
    ),
    un.registerPlugin(Tr);
  var kr = un.registerPlugin(Tr) || un;
  function Sr(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  kr.core.Tween;
  /*!
   * Observer 3.10.2
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Mr,
    Er,
    Cr,
    Or,
    Ar,
    Pr,
    Br,
    Dr,
    Rr,
    Lr,
    Ir,
    zr = function () {
      return (
        Mr ||
        ("undefined" != typeof window &&
          (Mr = window.gsap) &&
          Mr.registerPlugin &&
          Mr)
      );
    },
    Yr = 1,
    Xr = [],
    Fr = [],
    Wr = [],
    qr = Date.now,
    Nr = function (t, e) {
      return e;
    },
    Hr = function (t, e) {
      return ~Wr.indexOf(t) && Wr[Wr.indexOf(t) + 1][e];
    },
    Vr = function (t) {
      return !!~Lr.indexOf(t);
    },
    Ur = function (t, e, n, r) {
      return t.addEventListener(e, n, { passive: !r });
    },
    Gr = function (t, e, n) {
      return t.removeEventListener(e, n);
    },
    jr = "scrollLeft",
    Qr = "scrollTop",
    Zr = function () {
      return (Ir && Ir.isPressed) || Fr.cache++;
    },
    $r = function (t) {
      return function (e) {
        return (
          e || 0 === e
            ? (Yr && (Cr.history.scrollRestoration = "manual"),
              t(e),
              (t.v = e),
              (t.c = Fr.cache),
              Ir && Ir.isPressed && Nr("ss", e))
            : (Fr.cache !== t.c || Nr("ref")) &&
              ((t.c = Fr.cache), (t.v = t())),
          t.v
        );
      };
    },
    Kr = {
      s: jr,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: $r(function (t) {
        return arguments.length
          ? Cr.scrollTo(t, Jr.sc())
          : Cr.pageXOffset ||
              Or.scrollLeft ||
              Ar.scrollLeft ||
              Pr.scrollLeft ||
              0;
      }),
    },
    Jr = {
      s: Qr,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Kr,
      sc: $r(function (t) {
        return arguments.length
          ? Cr.scrollTo(Kr.sc(), t)
          : Cr.pageYOffset || Or.scrollTop || Ar.scrollTop || Pr.scrollTop || 0;
      }),
    },
    ti = function (t) {
      return (
        Mr.utils.toArray(t)[0] ||
        ("string" == typeof t && !1 !== Mr.config().nullTargetWarn
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    ei = function (t, e) {
      var n = e.s,
        r = e.sc,
        i = Fr.indexOf(t),
        o = r === Jr.sc ? 1 : 2;
      return (
        !~i && (i = Fr.push(t) - 1),
        Fr[i + o] ||
          (Fr[i + o] =
            Hr(t, n) ||
            (Vr(t)
              ? r
              : function (e) {
                  return arguments.length ? (t[n] = e) : t[n];
                }))
      );
    },
    ni = function (t, e, n) {
      var r = t,
        i = t,
        o = qr(),
        s = o,
        a = e || 50,
        u = Math.max(500, 3 * a),
        l = function (t, e) {
          var u = qr();
          e || u - o > a
            ? ((i = r), (r = t), (s = o), (o = u))
            : n
            ? (r += t)
            : (r = i + ((t - i) / (u - s)) * (o - s));
        };
      return {
        update: l,
        reset: function () {
          (i = r = n ? 0 : r), (s = o = 0);
        },
        getVelocity: function (t) {
          var e = s,
            a = i,
            c = qr();
          return (
            (t || 0 === t) && t !== r && l(t),
            o === s || c - s > u
              ? 0
              : ((r + (n ? a : -a)) / ((n ? c : o) - e)) * 1e3
          );
        },
      };
    },
    ri = function (t, e) {
      return (
        e && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
      );
    },
    ii = function (t) {
      var e = Math.max.apply(Math, t),
        n = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(n) ? e : n;
    },
    oi = function (t) {
      return (
        (Mr = t || zr()) &&
          !Er &&
          "undefined" != typeof document &&
          document.body &&
          ((Cr = window),
          (Or = document),
          (Ar = Or.documentElement),
          (Pr = Or.body),
          (Lr = [Cr, Or, Ar, Pr]),
          Mr.utils.clamp,
          (Dr = "onpointerenter" in Pr ? "pointer" : "mouse"),
          (Br = si.isTouch =
            Cr.matchMedia &&
            Cr.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Cr ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          setTimeout(function () {
            return (Yr = 0);
          }, 500),
          (Er = 1)),
        Er
      );
    };
  (Kr.op = Jr), (Fr.cache = 0);
  var si = (function () {
    function t(t) {
      this.init(t);
    }
    var e, n, r;
    return (
      (t.prototype.init = function (t) {
        var e, n, r, i;
        Er || oi(Mr) || console.warn("Please gsap.registerPlugin(Observer)"),
          Rr ||
            ((Rr = Mr.core.globals().ScrollTrigger) &&
              Rr.core &&
              ((e = Rr.core),
              (n = e.bridge || {}),
              (r = e._scrollers),
              (i = e._proxies),
              r.push.apply(r, Fr),
              i.push.apply(i, Wr),
              (Fr = r),
              (Wr = i),
              (Nr = function (t, e) {
                return n[t](e);
              })));
        var o = t.tolerance,
          s = t.dragMinimum,
          a = t.type,
          u = t.target,
          l = t.lineHeight,
          c = t.debounce,
          h = t.preventDefault,
          d = t.onStop,
          f = t.onStopDelay,
          p = t.ignore,
          g = t.wheelSpeed,
          m = t.event,
          _ = t.onDragStart,
          v = t.onDragEnd,
          y = t.onDrag,
          w = t.onPress,
          x = t.onRelease,
          b = t.onRight,
          T = t.onLeft,
          k = t.onUp,
          S = t.onDown,
          M = t.onChangeX,
          E = t.onChangeY,
          C = t.onChange,
          O = t.onToggleX,
          A = t.onToggleY,
          P = t.onHover,
          B = t.onHoverEnd,
          D = t.onMove,
          R = t.ignoreCheck,
          L = t.isNormalizer,
          I = t.onGestureStart,
          z = t.onGestureEnd,
          Y = t.onWheel,
          X = t.onEnable,
          F = t.onDisable,
          W = t.onClick,
          q = t.scrollSpeed;
        (this.target = u = ti(u) || Ar),
          (this.vars = t),
          p && (p = Mr.utils.toArray(p)),
          (o = o || 0),
          (s = s || 0),
          (g = g || 1),
          (q = q || 1),
          (a = a || "wheel,touch,pointer"),
          (c = !1 !== c),
          l || (l = parseFloat(Cr.getComputedStyle(Pr).lineHeight) || 22);
        var N,
          H,
          V,
          U,
          G,
          j = this,
          Q = 0,
          Z = 0,
          K = ei(u, Kr),
          J = ei(u, Jr),
          tt = K(),
          et = J(),
          nt = (
            "ontouchstart" in Ar
              ? "touchstart,touchmove,touchcancel,touchend"
              : a.indexOf("pointer") >= 0 && !("onpointerdown" in Ar)
              ? "mousedown,mousemove,mouseup,mouseup"
              : "pointerdown,pointermove,pointercancel,pointerup"
          ).split(","),
          rt =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            "pointerdown" === nt[0],
          it = Vr(u),
          ot = u.ownerDocument || Or,
          st = [0, 0, 0],
          at = [0, 0, 0],
          ut = function (t, e) {
            return (
              ((j.event = t) && p && ~p.indexOf(t.target)) ||
              (e && rt && "touch" !== t.pointerType) ||
              (R && R(t))
            );
          },
          lt = function () {
            var t = (j.deltaX = ii(st)),
              e = (j.deltaY = ii(at)),
              n = Math.abs(t) >= o,
              r = Math.abs(e) >= o;
            C && (n || r) && C(j, t, e, st, at),
              n &&
                (b && j.deltaX > 0 && b(j),
                T && j.deltaX < 0 && T(j),
                M && M(j),
                O && j.deltaX < 0 != Q < 0 && O(j),
                (Q = j.deltaX),
                (st[0] = st[1] = st[2] = 0)),
              r &&
                (S && j.deltaY > 0 && S(j),
                k && j.deltaY < 0 && k(j),
                E && E(j),
                A && j.deltaY < 0 != Z < 0 && A(j),
                (Z = j.deltaY),
                (at[0] = at[1] = at[2] = 0)),
              U && (D(j), (U = !1)),
              V && (y(j), (V = !1)),
              G && (Y(j), (G = !1)),
              (N = 0);
          },
          ct = function (t, e, n) {
            (st[n] += t),
              (at[n] += e),
              j._vx.update(t, 2 === n),
              j._vy.update(e, 2 === n),
              c ? N || (N = requestAnimationFrame(lt)) : lt();
          },
          ht = function (t) {
            if (!ut(t, 1)) {
              var e = (t = ri(t, h)).clientX,
                n = t.clientY,
                r = e - j.x,
                i = n - j.y,
                o = j.isDragging;
              (j.x = e),
                (j.y = n),
                (o ||
                  Math.abs(j.startX - e) >= s ||
                  Math.abs(j.startY - n) >= s) &&
                  (y && (V = !0),
                  o || (j.isDragging = !0),
                  ct(r, i, 2),
                  o || (_ && _(j)));
            }
          },
          dt = (j.onPress = function (t) {
            ut(t, 1) ||
              (H.pause(),
              (j.isPressed = !0),
              (t = ri(t, h)),
              (Q = Z = 0),
              (j.startX = j.x = t.clientX),
              (j.startY = j.y = t.clientY),
              j._vx.reset(),
              j._vy.reset(),
              Ur(L ? u : ot, nt[1], ht, h),
              (j.deltaX = j.deltaY = 0),
              w && w(j));
          }),
          ft = function (t) {
            if (!ut(t, 1)) {
              Gr(L ? u : ot, nt[1], ht);
              var e = j.isDragging;
              e || (j._vx.reset(), j._vy.reset()),
                (j.isDragging = j.isGesturing = j.isPressed = !1),
                d && !L && H.restart(!0),
                v && e && v(j),
                x && x(j, e);
            }
          },
          pt = function (t) {
            return (
              t.touches &&
              t.touches.length > 1 &&
              (j.isGesturing = !0) &&
              I(t, j.isDragging)
            );
          },
          gt = function () {
            return (j.isGesturing = !1) || z(j);
          },
          mt = function (t) {
            if (!ut(t)) {
              var e = K(),
                n = J();
              ct((e - tt) * q, (n - et) * q, 1),
                (tt = e),
                (et = n),
                d && H.restart(!0);
            }
          },
          _t = function (t) {
            if (!ut(t)) {
              (t = ri(t, h)), Y && (G = !0);
              var e =
                (1 === t.deltaMode
                  ? l
                  : 2 === t.deltaMode
                  ? Cr.innerHeight
                  : 1) * g;
              ct(t.deltaX * e, t.deltaY * e, 0), d && !L && H.restart(!0);
            }
          },
          vt = function (t) {
            if (!ut(t)) {
              var e = t.clientX,
                n = t.clientY,
                r = e - j.x,
                i = n - j.y;
              (j.x = e), (j.y = n), D && (U = !0), (r || i) && ct(r, i, 2);
            }
          },
          yt = function (t) {
            (j.event = t), P(j);
          },
          wt = function (t) {
            (j.event = t), B(j);
          },
          xt = function (t) {
            return ut(t) || (ri(t, h) && W(j));
          };
        (H = j._dc =
          Mr.delayedCall(f || 0.25, function () {
            j._vx.reset(), j._vy.reset(), H.pause(), d && d(j);
          }).pause()),
          (j.deltaX = j.deltaY = 0),
          (j._vx = ni(0, 50, !0)),
          (j._vy = ni(0, 50, !0)),
          (j.scrollX = K),
          (j.scrollY = J),
          (j.isDragging = j.isGesturing = j.isPressed = !1),
          (j.enable = function (t) {
            return (
              j.isEnabled ||
                (Ur(it ? ot : u, "scroll", Zr),
                a.indexOf("scroll") >= 0 && Ur(it ? ot : u, "scroll", mt, h),
                a.indexOf("wheel") >= 0 && Ur(u, "wheel", _t, h),
                ((a.indexOf("touch") >= 0 && Br) ||
                  a.indexOf("pointer") >= 0) &&
                  (Ur(u, nt[0], dt, h),
                  Ur(ot, nt[2], ft),
                  Ur(ot, nt[3], ft),
                  W && Ur(u, "click", xt),
                  I && Ur(ot, "gesturestart", pt),
                  z && Ur(ot, "gestureend", gt),
                  P && Ur(u, Dr + "enter", yt),
                  B && Ur(u, Dr + "leave", wt),
                  D && Ur(u, Dr + "move", vt)),
                (j.isEnabled = !0),
                t && t.type && dt(t),
                X && X(j)),
              j
            );
          }),
          (j.disable = function () {
            j.isEnabled &&
              (Xr.filter(function (t) {
                return t !== j && Vr(t.target);
              }).length || Gr(it ? ot : u, "scroll", Zr),
              Gr(it ? ot : u, "scroll", mt),
              Gr(u, "wheel", _t),
              Gr(u, nt[0], dt),
              Gr(ot, nt[2], ft),
              Gr(ot, nt[3], ft),
              Gr(u, "click", xt),
              Gr(ot, "gesturestart", pt),
              Gr(ot, "gestureend", gt),
              Gr(u, Dr + "enter", yt),
              Gr(u, Dr + "leave", wt),
              Gr(u, Dr + "move", vt),
              (j.isEnabled = !1),
              F && F(j));
          }),
          (j.kill = function () {
            j.disable();
            var t = Xr.indexOf(j);
            t >= 0 && Xr.splice(t, 1), Ir === j && (Ir = 0);
          }),
          Xr.push(j),
          L && (Ir = j),
          j.enable(m);
      }),
      (e = t),
      (n = [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]) && Sr(e.prototype, n),
      r && Sr(e, r),
      t
    );
  })();
  (si.version = "3.10.2"),
    (si.create = function (t) {
      return new si(t);
    }),
    (si.register = oi),
    (si.getAll = function () {
      return Xr.slice();
    }),
    (si.getById = function (t) {
      return Xr.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    zr() && Mr.registerPlugin(si);
  /*!
   * ScrollTrigger 3.10.2
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ai,
    ui,
    li,
    ci,
    hi,
    di,
    fi,
    pi,
    gi,
    mi,
    _i,
    vi,
    yi,
    wi,
    xi,
    bi,
    Ti,
    ki,
    Si,
    Mi,
    Ei,
    Ci,
    Oi,
    Ai,
    Pi,
    Bi,
    Di,
    Ri,
    Li,
    Ii,
    zi,
    Yi,
    Xi = 1,
    Fi = Date.now,
    Wi = Fi(),
    qi = 0,
    Ni = 0,
    Hi = function () {
      return (wi = 1);
    },
    Vi = function () {
      return (wi = 0);
    },
    Ui = function (t) {
      return t;
    },
    Gi = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    ji = function () {
      return "undefined" != typeof window;
    },
    Qi = function () {
      return ai || (ji() && (ai = window.gsap) && ai.registerPlugin && ai);
    },
    Zi = function (t) {
      return !!~fi.indexOf(t);
    },
    $i = function (t) {
      return (
        Hr(t, "getBoundingClientRect") ||
        (Zi(t)
          ? function () {
              return (
                (as.width = li.innerWidth), (as.height = li.innerHeight), as
              );
            }
          : function () {
              return xo(t);
            })
      );
    },
    Ki = function (t, e) {
      var n = e.s,
        r = e.d2,
        i = e.d,
        o = e.a;
      return (n = "scroll" + r) && (o = Hr(t, n))
        ? o() - $i(t)()[i]
        : Zi(t)
        ? (hi[n] || di[n]) -
          (li["inner" + r] || hi["client" + r] || di["client" + r])
        : t[n] - t["offset" + r];
    },
    Ji = function (t, e) {
      for (var n = 0; n < Si.length; n += 3)
        (!e || ~e.indexOf(Si[n + 1])) && t(Si[n], Si[n + 1], Si[n + 2]);
    },
    to = function (t) {
      return "string" == typeof t;
    },
    eo = function (t) {
      return "function" == typeof t;
    },
    no = function (t) {
      return "number" == typeof t;
    },
    ro = function (t) {
      return "object" == typeof t;
    },
    io = function (t) {
      return eo(t) && t();
    },
    oo = function (t, e) {
      return function () {
        var n = io(t),
          r = io(e);
        return function () {
          io(n), io(r);
        };
      };
    },
    so = function (t, e, n) {
      return t && t.progress(e ? 0 : 1) && n && t.pause();
    },
    ao = function (t, e) {
      if (t.enabled) {
        var n = e(t);
        n && n.totalTime && (t.callbackAnimation = n);
      }
    },
    uo = Math.abs,
    lo = "left",
    co = "right",
    ho = "bottom",
    fo = "width",
    po = "height",
    go = "padding",
    mo = "margin",
    _o = "Width",
    vo = "px",
    yo = function (t) {
      return li.getComputedStyle(t);
    },
    wo = function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
      return t;
    },
    xo = function (t, e) {
      var n =
          e &&
          "matrix(1, 0, 0, 1, 0, 0)" !== yo(t)[xi] &&
          ai
            .to(t, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        r = t.getBoundingClientRect();
      return n && n.progress(0).kill(), r;
    },
    bo = function (t, e) {
      var n = e.d2;
      return t["offset" + n] || t["client" + n] || 0;
    },
    To = function (t) {
      var e,
        n = [],
        r = t.labels,
        i = t.duration();
      for (e in r) n.push(r[e] / i);
      return n;
    },
    ko = function (t) {
      var e = ai.utils.snap(t),
        n =
          Array.isArray(t) &&
          t.slice(0).sort(function (t, e) {
            return t - e;
          });
      return n
        ? function (t, r, i) {
            var o;
            if ((void 0 === i && (i = 0.001), !r)) return e(t);
            if (r > 0) {
              for (t -= i, o = 0; o < n.length; o++) if (n[o] >= t) return n[o];
              return n[o - 1];
            }
            for (o = n.length, t += i; o--; ) if (n[o] <= t) return n[o];
            return n[0];
          }
        : function (n, r, i) {
            void 0 === i && (i = 0.001);
            var o = e(n);
            return !r || Math.abs(o - n) < i || o - n < 0 == r < 0
              ? o
              : e(r < 0 ? n - t : n + t);
          };
    },
    So = function (t, e, n, r) {
      return n.split(",").forEach(function (n) {
        return t(e, n, r);
      });
    },
    Mo = function (t, e, n, r) {
      return t.addEventListener(e, n, { passive: !r });
    },
    Eo = function (t, e, n) {
      return t.removeEventListener(e, n);
    },
    Co = function (t, e, n) {
      return n && n.wheelHandler && t(e, "wheel", n);
    },
    Oo = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ao = { toggleActions: "play", anticipatePin: 0 },
    Po = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Bo = function (t, e) {
      if (to(t)) {
        var n = t.indexOf("="),
          r = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
        ~n && (t.indexOf("%") > n && (r *= e / 100), (t = t.substr(0, n - 1))),
          (t =
            r +
            (t in Po
              ? Po[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    Do = function (t, e, n, r, i, o, s, a) {
      var u = i.startColor,
        l = i.endColor,
        c = i.fontSize,
        h = i.indent,
        d = i.fontWeight,
        f = ci.createElement("div"),
        p = Zi(n) || "fixed" === Hr(n, "pinType"),
        g = -1 !== t.indexOf("scroller"),
        m = p ? di : n,
        _ = -1 !== t.indexOf("start"),
        v = _ ? u : l,
        y =
          "border-color:" +
          v +
          ";font-size:" +
          c +
          ";color:" +
          v +
          ";font-weight:" +
          d +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (y += "position:" + ((g || a) && p ? "fixed;" : "absolute;")),
        (g || a || !p) &&
          (y += (r === Jr ? co : ho) + ":" + (o + parseFloat(h)) + "px;"),
        s &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            s.offsetWidth +
            "px;"),
        (f._isStart = _),
        f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        (f.style.cssText = y),
        (f.innerText = e || 0 === e ? t + "-" + e : t),
        m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f),
        (f._offset = f["offset" + r.op.d2]),
        Ro(f, 0, r, _),
        f
      );
    },
    Ro = function (t, e, n, r) {
      var i = { display: "block" },
        o = n[r ? "os2" : "p2"],
        s = n[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (i[n.a + "Percent"] = r ? -100 : 0),
        (i[n.a] = r ? "1px" : 0),
        (i["border" + o + _o] = 1),
        (i["border" + s + _o] = 0),
        (i[n.p] = e + "px"),
        ai.set(t, i);
    },
    Lo = [],
    Io = {},
    zo = function () {
      return Fi() - qi > 34 && ts();
    },
    Yo = function () {
      (Oi && Oi.isPressed) ||
        (Fr.cache++,
        Ri || (Ri = requestAnimationFrame(ts)),
        qi || Vo("scrollStart"),
        (qi = Fi()));
    },
    Xo = function () {
      Fr.cache++,
        !yi &&
          !Ci &&
          !ci.fullscreenElement &&
          (!Ai ||
            Bi !== li.innerWidth ||
            Math.abs(li.innerHeight - Pi) > 0.25 * li.innerHeight) &&
          pi.restart(!0);
    },
    Fo = {},
    Wo = [],
    qo = [],
    No = function (t) {
      var e,
        n = ai.ticker.frame,
        r = [],
        i = 0;
      if (Ii !== n || Xi) {
        for (jo(); i < qo.length; i += 4)
          (e = li.matchMedia(qo[i]).matches) !== qo[i + 3] &&
            ((qo[i + 3] = e),
            e ? r.push(i) : jo(1, qo[i]) || (eo(qo[i + 2]) && qo[i + 2]()));
        for (Go(), i = 0; i < r.length; i++)
          (e = r[i]), (Li = qo[e]), (qo[e + 2] = qo[e + 1](t));
        (Li = 0), ui && $o(0, 1), (Ii = n), Vo("matchMedia");
      }
    },
    Ho = function t() {
      return Eo(ds, "scrollEnd", t) || $o(!0);
    },
    Vo = function (t) {
      return (
        (Fo[t] &&
          Fo[t].map(function (t) {
            return t();
          })) ||
        Wo
      );
    },
    Uo = [],
    Go = function (t) {
      for (var e = 0; e < Uo.length; e += 5)
        (t && Uo[e + 4] !== t) ||
          ((Uo[e].style.cssText = Uo[e + 1]),
          Uo[e].getBBox && Uo[e].setAttribute("transform", Uo[e + 2] || ""),
          (Uo[e + 3].uncache = 1));
    },
    jo = function (t, e) {
      var n;
      for (bi = 0; bi < Lo.length; bi++)
        (n = Lo[bi]), (e && n.media !== e) || (t ? n.kill(1) : n.revert());
      e && Go(e), e || Vo("revert");
    },
    Qo = function () {
      return (
        Fr.cache++ &&
        Fr.forEach(function (t) {
          return "function" == typeof t && (t.rec = 0);
        })
      );
    },
    Zo = 0,
    $o = function (t, e) {
      if (!qi || t) {
        zi = !0;
        var n = Vo("refreshInit");
        Mi && ds.sort(),
          e || jo(),
          Lo.slice(0).forEach(function (t) {
            return t.refresh();
          }),
          Lo.forEach(function (t) {
            return (
              "max" === t.vars.end &&
              t.setPositions(t.start, Ki(t.scroller, t._dir))
            );
          }),
          n.forEach(function (t) {
            return t && t.render && t.render(-1);
          }),
          Qo(),
          pi.pause(),
          Zo++,
          (zi = !1),
          Vo("refresh");
      } else Mo(ds, "scrollEnd", Ho);
    },
    Ko = 0,
    Jo = 1,
    ts = function () {
      if (!zi) {
        Yi && Yi.update(0), (ds.isUpdating = !0);
        var t = Lo.length,
          e = Fi(),
          n = e - Wi >= 50,
          r = t && Lo[0].scroll();
        if (
          ((Jo = Ko > r ? -1 : 1),
          (Ko = r),
          n &&
            (qi && !wi && e - qi > 200 && ((qi = 0), Vo("scrollEnd")),
            (_i = Wi),
            (Wi = e)),
          Jo < 0)
        ) {
          for (bi = t; bi-- > 0; ) Lo[bi] && Lo[bi].update(0, n);
          Jo = 1;
        } else for (bi = 0; bi < t; bi++) Lo[bi] && Lo[bi].update(0, n);
        ds.isUpdating = !1;
      }
      Ri = 0;
    },
    es = [
      lo,
      "top",
      ho,
      co,
      "marginBottom",
      "marginRight",
      "marginTop",
      "marginLeft",
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    ns = es.concat([
      fo,
      po,
      "boxSizing",
      "maxWidth",
      "maxHeight",
      "position",
      mo,
      go,
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
    ]),
    rs = function (t, e, n, r) {
      if (t.parentNode !== e) {
        for (var i, o = es.length, s = e.style, a = t.style; o--; )
          s[(i = es[o])] = n[i];
        (s.position = "absolute" === n.position ? "absolute" : "relative"),
          "inline" === n.display && (s.display = "inline-block"),
          (a.bottom = a.right = s.flexBasis = "auto"),
          (s.overflow = "visible"),
          (s.boxSizing = "border-box"),
          (s.width = bo(t, Kr) + vo),
          (s.height = bo(t, Jr) + vo),
          (s.padding = a.margin = a.top = a.left = "0"),
          os(r),
          (a.width = a.maxWidth = n.width),
          (a.height = a.maxHeight = n.height),
          (a.padding = n.padding),
          t.parentNode.insertBefore(e, t),
          e.appendChild(t);
      }
    },
    is = /([A-Z])/g,
    os = function (t) {
      if (t) {
        var e,
          n,
          r = t.t.style,
          i = t.length,
          o = 0;
        for ((t.t._gsap || ai.core.getCache(t.t)).uncache = 1; o < i; o += 2)
          (n = t[o + 1]),
            (e = t[o]),
            n
              ? (r[e] = n)
              : r[e] && r.removeProperty(e.replace(is, "-$1").toLowerCase());
      }
    },
    ss = function (t) {
      for (var e = ns.length, n = t.style, r = [], i = 0; i < e; i++)
        r.push(ns[i], n[ns[i]]);
      return (r.t = t), r;
    },
    as = { left: 0, top: 0 },
    us = function (t, e, n, r, i, o, s, a, u, l, c, h, d) {
      eo(t) && (t = t(a)),
        to(t) &&
          "max" === t.substr(0, 3) &&
          (t = h + ("=" === t.charAt(4) ? Bo("0" + t.substr(3), n) : 0));
      var f,
        p,
        g,
        m = d ? d.time() : 0;
      if ((d && d.seek(0), no(t))) s && Ro(s, n, r, !0);
      else {
        eo(e) && (e = e(a));
        var _,
          v,
          y,
          w,
          x = t.split(" ");
        (g = ti(e) || di),
          ((_ = xo(g) || {}) && (_.left || _.top)) ||
            "none" !== yo(g).display ||
            ((w = g.style.display),
            (g.style.display = "block"),
            (_ = xo(g)),
            w ? (g.style.display = w) : g.style.removeProperty("display")),
          (v = Bo(x[0], _[r.d])),
          (y = Bo(x[1] || "0", n)),
          (t = _[r.p] - u[r.p] - l + v + i - y),
          s && Ro(s, y, r, n - y < 20 || (s._isStart && y > 20)),
          (n -= n - y);
      }
      if (o) {
        var b = t + n,
          T = o._isStart;
        (f = "scroll" + r.d2),
          Ro(
            o,
            b,
            r,
            (T && b > 20) ||
              (!T && (c ? Math.max(di[f], hi[f]) : o.parentNode[f]) <= b + 1)
          ),
          c &&
            ((u = xo(s)),
            c && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + vo));
      }
      return (
        d &&
          g &&
          ((f = xo(g)),
          d.seek(h),
          (p = xo(g)),
          (d._caScrollDist = f[r.p] - p[r.p]),
          (t = (t / d._caScrollDist) * h)),
        d && d.seek(m),
        d ? t : Math.round(t)
      );
    },
    ls = /(webkit|moz|length|cssText|inset)/i,
    cs = function (t, e, n, r) {
      if (t.parentNode !== e) {
        var i,
          o,
          s = t.style;
        if (e === di) {
          for (i in ((t._stOrig = s.cssText), (o = yo(t))))
            +i ||
              ls.test(i) ||
              !o[i] ||
              "string" != typeof s[i] ||
              "0" === i ||
              (s[i] = o[i]);
          (s.top = n), (s.left = r);
        } else s.cssText = t._stOrig;
        (ai.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    hs = function (t, e) {
      var n,
        r,
        i = ei(t, e),
        o = "_scroll" + e.p2,
        s = function e(s, a, u, l, c) {
          var h = e.tween,
            d = a.onComplete,
            f = {};
          return (
            (u = u || i()),
            (c = (l && c) || 0),
            (l = l || s - u),
            h && h.kill(),
            (n = Math.round(u)),
            (a[o] = s),
            (a.modifiers = f),
            (f[o] = function (t) {
              return (
                (t = Gi(i())) !== n &&
                t !== r &&
                Math.abs(t - n) > 2 &&
                Math.abs(t - r) > 2
                  ? (h.kill(), (e.tween = 0))
                  : (t = u + l * h.ratio + c * h.ratio * h.ratio),
                (r = n),
                (n = Gi(t))
              );
            }),
            (a.onComplete = function () {
              (e.tween = 0), d && d.call(h);
            }),
            (h = e.tween = ai.to(t, a))
          );
        };
      return (
        (t[o] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Mo(t, "wheel", i.wheelHandler),
        s
      );
    },
    ds = (function () {
      function t(e, n) {
        ui ||
          t.register(ai) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          this.init(e, n);
      }
      return (
        (t.prototype.init = function (e, n) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            Ni)
          ) {
            var r,
              i,
              o,
              s,
              a,
              u,
              l,
              c,
              h,
              d,
              f,
              p,
              g,
              m,
              _,
              v,
              y,
              w,
              x,
              b,
              T,
              k,
              S,
              M,
              E,
              C,
              O,
              A,
              P,
              B,
              D,
              R,
              L,
              I,
              z,
              Y,
              X,
              F,
              W,
              q,
              N,
              H = (e = wo(
                to(e) || no(e) || e.nodeType ? { trigger: e } : e,
                Ao
              )),
              V = H.onUpdate,
              U = H.toggleClass,
              G = H.id,
              j = H.onToggle,
              Q = H.onRefresh,
              Z = H.scrub,
              K = H.trigger,
              J = H.pin,
              tt = H.pinSpacing,
              et = H.invalidateOnRefresh,
              nt = H.anticipatePin,
              rt = H.onScrubComplete,
              it = H.onSnapComplete,
              ot = H.once,
              st = H.snap,
              at = H.pinReparent,
              ut = H.pinSpacer,
              lt = H.containerAnimation,
              ct = H.fastScrollEnd,
              ht = H.preventOverlaps,
              dt =
                e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                  ? Kr
                  : Jr,
              ft = !Z && 0 !== Z,
              pt = ti(e.scroller || li),
              gt = ai.core.getCache(pt),
              mt = Zi(pt),
              _t =
                "fixed" ===
                ("pinType" in e
                  ? e.pinType
                  : Hr(pt, "pinType") || (mt && "fixed")),
              vt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              yt = ft && e.toggleActions.split(" "),
              wt = "markers" in e ? e.markers : Ao.markers,
              xt = mt ? 0 : parseFloat(yo(pt)["border" + dt.p2 + _o]) || 0,
              bt = this,
              Tt =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(bt);
                },
              kt = (function (t, e, n) {
                var r = n.d,
                  i = n.d2,
                  o = n.a;
                return (o = Hr(t, "getBoundingClientRect"))
                  ? function () {
                      return o()[r];
                    }
                  : function () {
                      return (e ? li["inner" + i] : t["client" + i]) || 0;
                    };
              })(pt, mt, dt),
              St = (function (t, e) {
                return !e || ~Wr.indexOf(t)
                  ? $i(t)
                  : function () {
                      return as;
                    };
              })(pt, mt),
              Mt = 0,
              Et = ei(pt, dt);
            if (
              ((bt.media = Li),
              (bt._dir = dt),
              (nt *= 45),
              (bt.scroller = pt),
              (bt.scroll = lt ? lt.time.bind(lt) : Et),
              (s = Et()),
              (bt.vars = e),
              (n = n || e.animation),
              "refreshPriority" in e &&
                ((Mi = 1), -9999 === e.refreshPriority && (Yi = bt)),
              (gt.tweenScroll = gt.tweenScroll || {
                top: hs(pt, Jr),
                left: hs(pt, Kr),
              }),
              (bt.tweenTo = r = gt.tweenScroll[dt.p]),
              (bt.scrubDuration = function (t) {
                (D = no(t) && t)
                  ? B
                    ? B.duration(t)
                    : (B = ai.to(n, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: D,
                        paused: !0,
                        onComplete: function () {
                          return rt && rt(bt);
                        },
                      }))
                  : (B && B.progress(1).kill(), (B = 0));
              }),
              n &&
                ((n.vars.lazy = !1),
                n._initted ||
                  (!1 !== n.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    n.render(0, !0, !0)),
                (bt.animation = n.pause()),
                (n.scrollTrigger = bt),
                bt.scrubDuration(Z),
                (A = 0),
                G || (G = n.vars.id)),
              Lo.push(bt),
              st &&
                ((ro(st) && !st.push) || (st = { snapTo: st }),
                "scrollBehavior" in di.style &&
                  ai.set(mt ? [di, hi] : pt, { scrollBehavior: "auto" }),
                (o = eo(st.snapTo)
                  ? st.snapTo
                  : "labels" === st.snapTo
                  ? (function (t) {
                      return function (e) {
                        return ai.utils.snap(To(t), e);
                      };
                    })(n)
                  : "labelsDirectional" === st.snapTo
                  ? ((W = n),
                    function (t, e) {
                      return ko(To(W))(t, e.direction);
                    })
                  : !1 !== st.directional
                  ? function (t, e) {
                      return ko(st.snapTo)(t, yi ? 0 : e.direction);
                    }
                  : ai.utils.snap(st.snapTo)),
                (R = st.duration || { min: 0.1, max: 2 }),
                (R = ro(R) ? mi(R.min, R.max) : mi(R, R)),
                (L = ai
                  .delayedCall(st.delay || D / 2 || 0.1, function () {
                    if (Math.abs(bt.getVelocity()) < 10 && !wi && Mt !== Et()) {
                      var t = n && !ft ? n.totalProgress() : bt.progress,
                        e = ((t - P) / (Fi() - _i)) * 1e3 || 0,
                        i = ai.utils.clamp(
                          -bt.progress,
                          1 - bt.progress,
                          (uo(e / 2) * e) / 0.185
                        ),
                        s = bt.progress + (!1 === st.inertia ? 0 : i),
                        a = mi(0, 1, o(s, bt)),
                        c = Et(),
                        h = Math.round(u + a * g),
                        d = st,
                        f = d.onStart,
                        p = d.onInterrupt,
                        m = d.onComplete,
                        _ = r.tween;
                      if (c <= l && c >= u && h !== c) {
                        if (_ && !_._initted && _.data <= uo(h - c)) return;
                        !1 === st.inertia && (i = a - bt.progress),
                          r(
                            h,
                            {
                              duration: R(
                                uo(
                                  (0.185 * Math.max(uo(s - t), uo(a - t))) /
                                    e /
                                    0.05 || 0
                                )
                              ),
                              ease: st.ease || "power3",
                              data: uo(h - c),
                              onInterrupt: function () {
                                return L.restart(!0) && p && p(bt);
                              },
                              onComplete: function () {
                                bt.update(),
                                  (Mt = Et()),
                                  (A = P =
                                    n && !ft ? n.totalProgress() : bt.progress),
                                  it && it(bt),
                                  m && m(bt);
                              },
                            },
                            c,
                            i * g,
                            h - c - i * g
                          ),
                          f && f(bt, r.tween);
                      }
                    } else bt.isActive && L.restart(!0);
                  })
                  .pause())),
              G && (Io[G] = bt),
              (F =
                (K = bt.trigger = ti(K || J)) && K._gsap && K._gsap.stRevert) &&
                (F = F(bt)),
              (J = !0 === J ? K : ti(J)),
              to(U) && (U = { targets: K, className: U }),
              J &&
                (!1 === tt ||
                  tt === mo ||
                  (tt = !(!tt && "flex" === yo(J.parentNode).display) && go),
                (bt.pin = J),
                !1 !== e.force3D && ai.set(J, { force3D: !0 }),
                (i = ai.core.getCache(J)).spacer
                  ? (m = i.pinState)
                  : (ut &&
                      ((ut = ti(ut)) &&
                        !ut.nodeType &&
                        (ut = ut.current || ut.nativeElement),
                      (i.spacerIsNative = !!ut),
                      ut && (i.spacerState = ss(ut))),
                    (i.spacer = y = ut || ci.createElement("div")),
                    y.classList.add("pin-spacer"),
                    G && y.classList.add("pin-spacer-" + G),
                    (i.pinState = m = ss(J))),
                (bt.spacer = y = i.spacer),
                (O = yo(J)),
                (S = O[tt + dt.os2]),
                (x = ai.getProperty(J)),
                (b = ai.quickSetter(J, dt.a, vo)),
                rs(J, y, O),
                (v = ss(J))),
              wt)
            ) {
              (p = ro(wt) ? wo(wt, Oo) : Oo),
                (d = Do("scroller-start", G, pt, dt, p, 0)),
                (f = Do("scroller-end", G, pt, dt, p, 0, d)),
                (w = d["offset" + dt.op.d2]);
              var Ct = ti(Hr(pt, "content") || pt);
              (c = this.markerStart = Do("start", G, Ct, dt, p, w, 0, lt)),
                (h = this.markerEnd = Do("end", G, Ct, dt, p, w, 0, lt)),
                lt && (X = ai.quickSetter([c, h], dt.a, vo)),
                _t ||
                  (Wr.length && !0 === Hr(pt, "fixedMarkers")) ||
                  ((N = yo((q = mt ? di : pt)).position),
                  (q.style.position =
                    "absolute" === N || "fixed" === N ? N : "relative"),
                  ai.set([d, f], { force3D: !0 }),
                  (E = ai.quickSetter(d, dt.a, vo)),
                  (C = ai.quickSetter(f, dt.a, vo)));
            }
            if (lt) {
              var Ot = lt.vars.onUpdate,
                At = lt.vars.onUpdateParams;
              lt.eventCallback("onUpdate", function () {
                bt.update(0, 0, 1), Ot && Ot.apply(At || []);
              });
            }
            (bt.previous = function () {
              return Lo[Lo.indexOf(bt) - 1];
            }),
              (bt.next = function () {
                return Lo[Lo.indexOf(bt) + 1];
              }),
              (bt.revert = function (t) {
                var e = !1 !== t || !bt.enabled,
                  r = yi;
                e !== bt.isReverted &&
                  (e &&
                    (bt.scroll.rec || !yi || !zi || (bt.scroll.rec = Et()),
                    (z = Math.max(Et(), bt.scroll.rec || 0)),
                    (I = bt.progress),
                    (Y = n && n.progress())),
                  c &&
                    [c, h, d, f].forEach(function (t) {
                      return (t.style.display = e ? "none" : "block");
                    }),
                  e && (yi = 1),
                  bt.update(e),
                  (yi = r),
                  J &&
                    (e
                      ? (function (t, e, n) {
                          os(n);
                          var r = t._gsap;
                          if (r.spacerIsNative) os(r.spacerState);
                          else if (t.parentNode === e) {
                            var i = e.parentNode;
                            i && (i.insertBefore(t, e), i.removeChild(e));
                          }
                        })(J, y, m)
                      : (!at || !bt.isActive) && rs(J, y, yo(J), M)),
                  (bt.isReverted = e));
              }),
              (bt.refresh = function (r, i) {
                if ((!yi && bt.enabled) || i)
                  if (J && r && qi) Mo(t, "scrollEnd", Ho);
                  else {
                    !zi && Tt && Tt(bt),
                      (yi = 1),
                      B && B.pause(),
                      et && n && n.time(-0.01, !0).invalidate(),
                      bt.isReverted || bt.revert();
                    for (
                      var o,
                        p,
                        w,
                        b,
                        S,
                        E,
                        C,
                        O,
                        A,
                        P,
                        D = kt(),
                        R = St(),
                        X = lt ? lt.duration() : Ki(pt, dt),
                        F = 0,
                        W = 0,
                        q = e.end,
                        N = e.endTrigger || K,
                        H =
                          e.start ||
                          (0 !== e.start && K ? (J ? "0 0" : "0 100%") : 0),
                        V = (bt.pinnedContainer =
                          e.pinnedContainer && ti(e.pinnedContainer)),
                        U = (K && Math.max(0, Lo.indexOf(bt))) || 0,
                        G = U;
                      G--;

                    )
                      (E = Lo[G]).end || E.refresh(0, 1) || (yi = 1),
                        !(C = E.pin) ||
                          (C !== K && C !== J) ||
                          E.isReverted ||
                          (P || (P = []), P.unshift(E), E.revert()),
                        E !== Lo[G] && (U--, G--);
                    for (
                      eo(H) && (H = H(bt)),
                        u =
                          us(H, K, D, dt, Et(), c, d, bt, R, xt, _t, X, lt) ||
                          (J ? -0.001 : 0),
                        eo(q) && (q = q(bt)),
                        to(q) &&
                          !q.indexOf("+=") &&
                          (~q.indexOf(" ")
                            ? (q = (to(H) ? H.split(" ")[0] : "") + q)
                            : ((F = Bo(q.substr(2), D)),
                              (q = to(H) ? H : u + F),
                              (N = K))),
                        l =
                          Math.max(
                            u,
                            us(
                              q || (N ? "100% 0" : X),
                              N,
                              D,
                              dt,
                              Et() + F,
                              h,
                              f,
                              bt,
                              R,
                              xt,
                              _t,
                              X,
                              lt
                            )
                          ) || -0.001,
                        g = l - u || ((u -= 0.01) && 0.001),
                        F = 0,
                        G = U;
                      G--;

                    )
                      (C = (E = Lo[G]).pin) &&
                        E.start - E._pinPush < u &&
                        !lt &&
                        E.end > 0 &&
                        ((o = E.end - E.start),
                        (C !== K && C !== V) ||
                          no(H) ||
                          (F += o * (1 - E.progress)),
                        C === J && (W += o));
                    if (
                      ((u += F),
                      (l += F),
                      (bt._pinPush = W),
                      c &&
                        F &&
                        (((o = {})[dt.a] = "+=" + F),
                        V && (o[dt.p] = "-=" + Et()),
                        ai.set([c, h], o)),
                      J)
                    )
                      (o = yo(J)),
                        (b = dt === Jr),
                        (w = Et()),
                        (T = parseFloat(x(dt.a)) + W),
                        !X &&
                          l > 1 &&
                          ((mt ? di : pt).style["overflow-" + dt.a] = "scroll"),
                        rs(J, y, o),
                        (v = ss(J)),
                        (p = xo(J, !0)),
                        (O = _t && ei(pt, b ? Kr : Jr)()),
                        tt &&
                          (((M = [tt + dt.os2, g + W + vo]).t = y),
                          (G = tt === go ? bo(J, dt) + g + W : 0) &&
                            M.push(dt.d, G + vo),
                          os(M),
                          _t && Et(z)),
                        _t &&
                          (((S = {
                            top: p.top + (b ? w - u : O) + vo,
                            left: p.left + (b ? O : w - u) + vo,
                            boxSizing: "border-box",
                            position: "fixed",
                          }).width = S.maxWidth =
                            Math.ceil(p.width) + vo),
                          (S.height = S.maxHeight = Math.ceil(p.height) + vo),
                          (S.margin =
                            S.marginTop =
                            S.marginRight =
                            S.marginBottom =
                            S.marginLeft =
                              "0"),
                          (S.padding = o.padding),
                          (S.paddingTop = o.paddingTop),
                          (S.paddingRight = o.paddingRight),
                          (S.paddingBottom = o.paddingBottom),
                          (S.paddingLeft = o.paddingLeft),
                          (_ = (function (t, e, n) {
                            for (
                              var r, i = [], o = t.length, s = n ? 8 : 0;
                              s < o;
                              s += 2
                            )
                              (r = t[s]), i.push(r, r in e ? e[r] : t[s + 1]);
                            return (i.t = t.t), i;
                          })(m, S, at))),
                        n
                          ? ((A = n._initted),
                            Ei(1),
                            n.render(n.duration(), !0, !0),
                            (k = x(dt.a) - T + g + W),
                            g !== k && _.splice(_.length - 2, 2),
                            n.render(0, !0, !0),
                            A || n.invalidate(),
                            Ei(0))
                          : (k = g);
                    else if (K && Et() && !lt)
                      for (p = K.parentNode; p && p !== di; )
                        p._pinOffset &&
                          ((u -= p._pinOffset), (l -= p._pinOffset)),
                          (p = p.parentNode);
                    P &&
                      P.forEach(function (t) {
                        return t.revert(!1);
                      }),
                      (bt.start = u),
                      (bt.end = l),
                      (s = a = Et()),
                      lt || (s < z && Et(z), (bt.scroll.rec = 0)),
                      bt.revert(!1),
                      L && bt.isActive && Et(u + g * I),
                      (yi = 0),
                      n &&
                        ft &&
                        (n._initted || Y) &&
                        n.progress() !== Y &&
                        n.progress(Y, !0).render(n.time(), !0, !0),
                      (I !== bt.progress || lt) &&
                        (n && !ft && n.totalProgress(I, !0),
                        (bt.progress = I),
                        bt.update(0, 0, 1)),
                      J && tt && (y._pinOffset = Math.round(bt.progress * k)),
                      Q && Q(bt);
                  }
              }),
              (bt.getVelocity = function () {
                return ((Et() - a) / (Fi() - _i)) * 1e3 || 0;
              }),
              (bt.endAnimation = function () {
                so(bt.callbackAnimation),
                  n &&
                    (B
                      ? B.progress(1)
                      : n.paused()
                      ? ft || so(n, bt.direction < 0, 1)
                      : so(n, n.reversed()));
              }),
              (bt.labelToScroll = function (t) {
                return (
                  (n &&
                    n.labels &&
                    (u || bt.refresh() || u) +
                      (n.labels[t] / n.duration()) * g) ||
                  0
                );
              }),
              (bt.getTrailing = function (t) {
                var e = Lo.indexOf(bt),
                  n =
                    bt.direction > 0
                      ? Lo.slice(0, e).reverse()
                      : Lo.slice(e + 1);
                return (
                  to(t)
                    ? n.filter(function (e) {
                        return e.vars.preventOverlaps === t;
                      })
                    : n
                ).filter(function (t) {
                  return bt.direction > 0 ? t.end <= u : t.start >= l;
                });
              }),
              (bt.update = function (t, e, i) {
                if (!lt || i || t) {
                  var o,
                    c,
                    h,
                    f,
                    p,
                    m,
                    w,
                    x = bt.scroll(),
                    M = t ? 0 : (x - u) / g,
                    O = M < 0 ? 0 : M > 1 ? 1 : M || 0,
                    D = bt.progress;
                  if (
                    (e &&
                      ((a = s),
                      (s = lt ? Et() : x),
                      st && ((P = A), (A = n && !ft ? n.totalProgress() : O))),
                    nt &&
                      !O &&
                      J &&
                      !yi &&
                      !Xi &&
                      qi &&
                      u < x + ((x - a) / (Fi() - _i)) * nt &&
                      (O = 1e-4),
                    O !== D && bt.enabled)
                  ) {
                    if (
                      ((f =
                        (p =
                          (o = bt.isActive = !!O && O < 1) !==
                          (!!D && D < 1)) || !!O != !!D),
                      (bt.direction = O > D ? 1 : -1),
                      (bt.progress = O),
                      f &&
                        !yi &&
                        ((c = O && !D ? 0 : 1 === O ? 1 : 1 === D ? 2 : 3),
                        ft &&
                          ((h =
                            (!p && "none" !== yt[c + 1] && yt[c + 1]) || yt[c]),
                          (w =
                            n &&
                            ("complete" === h || "reset" === h || h in n)))),
                      ht &&
                        (p || w) &&
                        (w || Z || !n) &&
                        (eo(ht)
                          ? ht(bt)
                          : bt.getTrailing(ht).forEach(function (t) {
                              return t.endAnimation();
                            })),
                      ft ||
                        (!B || yi || Xi
                          ? n && n.totalProgress(O, !!yi)
                          : ((lt || (Yi && Yi !== bt)) &&
                              B.render(B._dp._time - B._start),
                            B.resetTo
                              ? B.resetTo(
                                  "totalProgress",
                                  O,
                                  n._tTime / n._tDur
                                )
                              : ((B.vars.totalProgress = O),
                                B.invalidate().restart()))),
                      J)
                    )
                      if ((t && tt && (y.style[tt + dt.os2] = S), _t)) {
                        if (f) {
                          if (
                            ((m =
                              !t && O > D && l + 1 > x && x + 1 >= Ki(pt, dt)),
                            at)
                          )
                            if (t || (!o && !m)) cs(J, y);
                            else {
                              var R = xo(J, !0),
                                I = x - u;
                              cs(
                                J,
                                di,
                                R.top + (dt === Jr ? I : 0) + vo,
                                R.left + (dt === Jr ? 0 : I) + vo
                              );
                            }
                          os(o || m ? _ : v),
                            (k !== g && O < 1 && o) ||
                              b(T + (1 !== O || m ? 0 : k));
                        }
                      } else b(Gi(T + k * O));
                    st && !r.tween && !yi && !Xi && L.restart(!0),
                      U &&
                        (p || (ot && O && (O < 1 || !Di))) &&
                        gi(U.targets).forEach(function (t) {
                          return t.classList[o || ot ? "add" : "remove"](
                            U.className
                          );
                        }),
                      V && !ft && !t && V(bt),
                      f && !yi
                        ? (ft &&
                            (w &&
                              ("complete" === h
                                ? n.pause().totalProgress(1)
                                : "reset" === h
                                ? n.restart(!0).pause()
                                : "restart" === h
                                ? n.restart(!0)
                                : n[h]()),
                            V && V(bt)),
                          (!p && Di) ||
                            (j && p && ao(bt, j),
                            vt[c] && ao(bt, vt[c]),
                            ot && (1 === O ? bt.kill(!1, 1) : (vt[c] = 0)),
                            p || (vt[(c = 1 === O ? 1 : 3)] && ao(bt, vt[c]))),
                          ct &&
                            !o &&
                            Math.abs(bt.getVelocity()) > (no(ct) ? ct : 2500) &&
                            (so(bt.callbackAnimation),
                            B ? B.progress(1) : so(n, !O, 1)))
                        : ft && V && !yi && V(bt);
                  }
                  if (C) {
                    var z = lt
                      ? (x / lt.duration()) * (lt._caScrollDist || 0)
                      : x;
                    E(z + (d._isFlipped ? 1 : 0)), C(z);
                  }
                  X && X((-x / lt.duration()) * (lt._caScrollDist || 0));
                }
              }),
              (bt.enable = function (e, n) {
                bt.enabled ||
                  ((bt.enabled = !0),
                  Mo(pt, "resize", Xo),
                  Mo(mt ? ci : pt, "scroll", Yo),
                  Tt && Mo(t, "refreshInit", Tt),
                  !1 !== e && ((bt.progress = I = 0), (s = a = Mt = Et())),
                  !1 !== n && bt.refresh());
              }),
              (bt.getTween = function (t) {
                return t && r ? r.tween : B;
              }),
              (bt.setPositions = function (t, e) {
                J && ((T += t - u), (k += e - t - g)),
                  (bt.start = u = t),
                  (bt.end = l = e),
                  (g = e - t),
                  bt.update();
              }),
              (bt.disable = function (e, n) {
                if (
                  bt.enabled &&
                  (!1 !== e && bt.revert(),
                  (bt.enabled = bt.isActive = !1),
                  n || (B && B.pause()),
                  (z = 0),
                  i && (i.uncache = 1),
                  Tt && Eo(t, "refreshInit", Tt),
                  L && (L.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                  !mt)
                ) {
                  for (var o = Lo.length; o--; )
                    if (Lo[o].scroller === pt && Lo[o] !== bt) return;
                  Eo(pt, "resize", Xo), Eo(pt, "scroll", Yo);
                }
              }),
              (bt.kill = function (t, r) {
                bt.disable(t, r), B && !r && B.kill(), G && delete Io[G];
                var o = Lo.indexOf(bt);
                o >= 0 && Lo.splice(o, 1),
                  o === bi && Jo > 0 && bi--,
                  (o = 0),
                  Lo.forEach(function (t) {
                    return t.scroller === bt.scroller && (o = 1);
                  }),
                  o || (bt.scroll.rec = 0),
                  n &&
                    ((n.scrollTrigger = null),
                    t && n.render(-1),
                    r || n.kill()),
                  c &&
                    [c, h, d, f].forEach(function (t) {
                      return t.parentNode && t.parentNode.removeChild(t);
                    }),
                  J &&
                    (i && (i.uncache = 1),
                    (o = 0),
                    Lo.forEach(function (t) {
                      return t.pin === J && o++;
                    }),
                    o || (i.spacer = 0)),
                  e.onKill && e.onKill(bt);
              }),
              bt.enable(!1, !1),
              F && F(bt),
              n && n.add && !g
                ? ai.delayedCall(0.01, function () {
                    return u || l || bt.refresh();
                  }) &&
                  (g = 0.01) &&
                  (u = l = 0)
                : bt.refresh();
          } else this.update = this.refresh = this.kill = Ui;
        }),
        (t.register = function (e) {
          return (
            ui ||
              ((ai = e || Qi()),
              ji() && window.document && t.enable(),
              (ui = Ni)),
            ui
          );
        }),
        (t.defaults = function (t) {
          if (t) for (var e in t) Ao[e] = t[e];
          return Ao;
        }),
        (t.disable = function (t, e) {
          (Ni = 0),
            Lo.forEach(function (n) {
              return n[e ? "kill" : "disable"](t);
            }),
            Eo(li, "wheel", Yo),
            Eo(ci, "scroll", Yo),
            clearInterval(vi),
            Eo(ci, "touchcancel", Ui),
            Eo(di, "touchstart", Ui),
            So(Eo, ci, "pointerdown,touchstart,mousedown", Hi),
            So(Eo, ci, "pointerup,touchend,mouseup", Vi),
            pi.kill(),
            Ji(Eo);
          for (var n = 0; n < Fr.length; n += 3)
            Co(Eo, Fr[n], Fr[n + 1]), Co(Eo, Fr[n], Fr[n + 2]);
        }),
        (t.enable = function () {
          if (
            ((li = window),
            (ci = document),
            (hi = ci.documentElement),
            (di = ci.body),
            ai &&
              ((gi = ai.utils.toArray),
              (mi = ai.utils.clamp),
              (Ei = ai.core.suppressOverwrites || Ui),
              ai.core.globals("ScrollTrigger", t),
              di))
          ) {
            (Ni = 1),
              (t.isTouch =
                li.matchMedia &&
                li.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in li ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (fi = [li, ci, hi, di]),
              (Pi = li.innerHeight),
              (Bi = li.innerWidth),
              si.register(ai),
              Mo(ci, "scroll", Yo);
            var e,
              n,
              r = di.style,
              i = r.borderTopStyle;
            for (
              r.borderTopStyle = "solid",
                e = xo(di),
                Jr.m = Math.round(e.top + Jr.sc()) || 0,
                Kr.m = Math.round(e.left + Kr.sc()) || 0,
                i
                  ? (r.borderTopStyle = i)
                  : r.removeProperty("border-top-style"),
                vi = setInterval(zo, 250),
                ai.delayedCall(0.5, function () {
                  return (Xi = 0);
                }),
                Mo(ci, "touchcancel", Ui),
                Mo(di, "touchstart", Ui),
                So(Mo, ci, "pointerdown,touchstart,mousedown", Hi),
                So(Mo, ci, "pointerup,touchend,mouseup", Vi),
                xi = ai.utils.checkPrefix("transform"),
                ns.push(xi),
                ui = Fi(),
                pi = ai.delayedCall(0.2, $o).pause(),
                Si = [
                  ci,
                  "visibilitychange",
                  function () {
                    var t = li.innerWidth,
                      e = li.innerHeight;
                    ci.hidden
                      ? ((Ti = t), (ki = e))
                      : (Ti === t && ki === e) || Xo();
                  },
                  ci,
                  "DOMContentLoaded",
                  $o,
                  li,
                  "load",
                  $o,
                  li,
                  "resize",
                  Xo,
                ],
                Ji(Mo),
                Lo.forEach(function (t) {
                  return t.enable(0, 1);
                }),
                n = 0;
              n < Fr.length;
              n += 3
            )
              Co(Eo, Fr[n], Fr[n + 1]), Co(Eo, Fr[n], Fr[n + 2]);
          }
        }),
        (t.config = function (e) {
          "limitCallbacks" in e && (Di = !!e.limitCallbacks);
          var n = e.syncInterval;
          (n && clearInterval(vi)) || ((vi = n) && setInterval(zo, n)),
            "ignoreMobileResize" in e &&
              (Ai = 1 === t.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (Ji(Eo) || Ji(Mo, e.autoRefreshEvents || "none"),
              (Ci = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
        }),
        (t.scrollerProxy = function (t, e) {
          var n = ti(t),
            r = Fr.indexOf(n),
            i = Zi(n);
          ~r && Fr.splice(r, i ? 6 : 2),
            e && (i ? Wr.unshift(li, e, di, e, hi, e) : Wr.unshift(n, e));
        }),
        (t.matchMedia = function (t) {
          var e, n, r, i, o;
          for (n in t)
            (r = qo.indexOf(n)),
              (i = t[n]),
              (Li = n),
              "all" === n
                ? i()
                : (e = li.matchMedia(n)) &&
                  (e.matches && (o = i()),
                  ~r
                    ? ((qo[r + 1] = oo(qo[r + 1], i)),
                      (qo[r + 2] = oo(qo[r + 2], o)))
                    : ((r = qo.length),
                      qo.push(n, i, o),
                      e.addListener
                        ? e.addListener(No)
                        : e.addEventListener("change", No)),
                  (qo[r + 3] = e.matches)),
              (Li = 0);
          return qo;
        }),
        (t.clearMatchMedia = function (t) {
          t || (qo.length = 0), (t = qo.indexOf(t)) >= 0 && qo.splice(t, 4);
        }),
        (t.isInViewport = function (t, e, n) {
          var r = (to(t) ? ti(t) : t).getBoundingClientRect(),
            i = r[n ? fo : po] * e || 0;
          return n
            ? r.right - i > 0 && r.left + i < li.innerWidth
            : r.bottom - i > 0 && r.top + i < li.innerHeight;
        }),
        (t.positionInViewport = function (t, e, n) {
          to(t) && (t = ti(t));
          var r = t.getBoundingClientRect(),
            i = r[n ? fo : po],
            o =
              null == e
                ? i / 2
                : e in Po
                ? Po[e] * i
                : ~e.indexOf("%")
                ? (parseFloat(e) * i) / 100
                : parseFloat(e) || 0;
          return n
            ? (r.left + o) / li.innerWidth
            : (r.top + o) / li.innerHeight;
        }),
        t
      );
    })();
  (ds.version = "3.10.2"),
    (ds.saveStyles = function (t) {
      return t
        ? gi(t).forEach(function (t) {
            if (t && t.style) {
              var e = Uo.indexOf(t);
              e >= 0 && Uo.splice(e, 5),
                Uo.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  ai.core.getCache(t),
                  Li
                );
            }
          })
        : Uo;
    }),
    (ds.revert = function (t, e) {
      return jo(!t, e);
    }),
    (ds.create = function (t, e) {
      return new ds(t, e);
    }),
    (ds.refresh = function (t) {
      return t ? Xo() : (ui || ds.register()) && $o(!0);
    }),
    (ds.update = ts),
    (ds.clearScrollMemory = Qo),
    (ds.maxScroll = function (t, e) {
      return Ki(t, e ? Kr : Jr);
    }),
    (ds.getScrollFunc = function (t, e) {
      return ei(ti(t), e ? Kr : Jr);
    }),
    (ds.getById = function (t) {
      return Io[t];
    }),
    (ds.getAll = function () {
      return Lo.filter(function (t) {
        return "ScrollSmoother" !== t.vars.id;
      });
    }),
    (ds.isScrolling = function () {
      return !!qi;
    }),
    (ds.snapDirectional = ko),
    (ds.addEventListener = function (t, e) {
      var n = Fo[t] || (Fo[t] = []);
      ~n.indexOf(e) || n.push(e);
    }),
    (ds.removeEventListener = function (t, e) {
      var n = Fo[t],
        r = n && n.indexOf(e);
      r >= 0 && n.splice(r, 1);
    }),
    (ds.batch = function (t, e) {
      var n,
        r = [],
        i = {},
        o = e.interval || 0.016,
        s = e.batchMax || 1e9,
        a = function (t, e) {
          var n = [],
            r = [],
            i = ai
              .delayedCall(o, function () {
                e(n, r), (n = []), (r = []);
              })
              .pause();
          return function (t) {
            n.length || i.restart(!0),
              n.push(t.trigger),
              r.push(t),
              s <= n.length && i.progress(1);
          };
        };
      for (n in e)
        i[n] =
          "on" === n.substr(0, 2) && eo(e[n]) && "onRefreshInit" !== n
            ? a(0, e[n])
            : e[n];
      return (
        eo(s) &&
          ((s = s()),
          Mo(ds, "refresh", function () {
            return (s = e.batchMax());
          })),
        gi(t).forEach(function (t) {
          var e = {};
          for (n in i) e[n] = i[n];
          (e.trigger = t), r.push(ds.create(e));
        }),
        r
      );
    });
  var fs = function (t, e, n, r) {
      return (
        e > r ? t(r) : e < 0 && t(0),
        n > r ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
      );
    },
    ps = function (t) {
      !0 === t
        ? (di.style.removeProperty("touch-action"),
          hi.style.removeProperty("touch-action"))
        : (di.style.touchAction = hi.style.touchAction =
            t ? "pan-" + t : "none");
    },
    gs = function (t) {
      ro(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var e,
        n,
        r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = t,
        h = c.normalizeScrollX,
        d = c.momentum,
        f = 0,
        p = ei(hi, Jr),
        g = ei(hi, Kr),
        m = 1,
        _ = eo(d)
          ? function () {
              return d(e);
            }
          : function () {
              return d || 2.8;
            },
        v = function () {
          return (f = Fi());
        },
        y = function () {
          return (r = !1);
        },
        w = Ui,
        x = Ui,
        b = function () {
          (n = Ki(hi, Jr)),
            (x = mi(0, n)),
            h && (w = mi(0, Ki(hi, Kr))),
            (i = Zo);
        },
        T = ds.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
        k = function () {
          b(),
            o.isActive() &&
              o.vars.scrollY > n &&
              o.resetTo("scrollY", Ki(hi, Jr));
        };
      return (
        (t.ignoreCheck = function (t) {
          return (
            (T &&
              "touchmove" === t.type &&
              (function () {
                if (r) return requestAnimationFrame(y), !0;
                r = !0;
              })()) ||
            m > 1 ||
            e.isGesturing ||
            (t.touches && t.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          var t = m;
          (m = (li.visualViewport && li.visualViewport.scale) || 1),
            o.pause(),
            t !== m && ps(m > 1 || (!h && "x")),
            (r = !1),
            (s = g()),
            (a = p()),
            b(),
            (i = Zo);
        }),
        (t.onRelease = t.onGestureStart =
          function (t, e) {
            var n = t.event,
              r = n.changedTouches ? n.changedTouches[0] : n;
            if (
              !e ||
              (Math.abs(t.x - t.startX) <= 3 && Math.abs(t.y - t.startY) <= 3)
            )
              ai.delayedCall(0.05, function () {
                if (Fi() - f > 300 && !n.defaultPrevented)
                  if (n.target.click) n.target.click();
                  else if (u.createEvent) {
                    var t = u.createEvent("MouseEvents");
                    t.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      li,
                      1,
                      r.screenX,
                      r.screenY,
                      r.clientX,
                      r.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      n.target.dispatchEvent(t);
                  }
              }),
                l.restart(!0);
            else {
              var i,
                s,
                a = _();
              h &&
                ((s = (i = g()) + (0.05 * a * -t.velocityX) / 0.227 / m),
                (a *= fs(g, i, s, Ki(hi, Kr))),
                (o.vars.scrollX = w(s))),
                (s = (i = p()) + (0.05 * a * -t.velocityY) / 0.227 / m),
                (a *= fs(p, i, s, Ki(hi, Jr))),
                (o.vars.scrollY = x(s)),
                o.invalidate().duration(a).play(0.01);
            }
          }),
        (t.onWheel = function () {
          return o._ts && o.pause();
        }),
        (t.onChange = function (t, e, n, r, o) {
          Zo !== i && b(),
            e &&
              h &&
              g(w(r[2] === e ? s + (t.startX - t.x) / m : g() + e - r[1])),
            n && p(x(o[2] === n ? a + (t.startY - t.y) / m : p() + n - o[1])),
            ts();
        }),
        (t.onEnable = function (t) {
          ps(!h && "x"),
            Mo(li, "resize", k),
            t.target.addEventListener("click", v, { capture: !0 });
        }),
        (t.onDisable = function (t) {
          ps(!0), Eo(li, "resize", k), Eo(t.target, "click", v);
        }),
        (e = new si(t)),
        (u = e.target.ownerDocument || ci),
        (l = e._dc),
        (o = ai.to(e, {
          ease: "power4",
          paused: !0,
          scrollX: h ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          onComplete: l.vars.onComplete,
        })),
        e
      );
    };
  (ds.sort = function (t) {
    return Lo.sort(
      t ||
        function (t, e) {
          return (
            -1e6 * (t.vars.refreshPriority || 0) +
            t.start -
            (e.start + -1e6 * (e.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (ds.observe = function (t) {
      return new si(t);
    }),
    (ds.normalizeScroll = function (t) {
      if (void 0 === t) return Oi;
      if (!0 === t && Oi) return Oi.enable();
      var e = t instanceof si;
      return (
        Oi && (!1 === t || (e && t !== Oi)) && Oi.kill(),
        t && !e && (t = gs(t)),
        (Oi = t && t.enable())
      );
    }),
    (ds.core = {
      _getVelocityProp: ni,
      _scrollers: Fr,
      _proxies: Wr,
      bridge: {
        ss: function () {
          qi || Vo("scrollStart"), (qi = Fi());
        },
        ref: function () {
          return yi;
        },
      },
    }),
    Qi() && ai.registerPlugin(ds);
  class ms {
    constructor(t, e, n = () => !0) {
      (this.speed = e / 10 || 0.06),
        (this.elmt = t),
        (this.isWheeling = null),
        (this.deltaY = 0),
        (this.update = n),
        (this.isFirefox =
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1),
        (this.isSafari = void 0 !== window.safari);
    }
    init() {
      (this.current = this.scrollTop = 0),
        (this.height = document.body.clientHeight - window.innerHeight),
        (this.addTicker = () => {
          this.playTicker();
        }),
        kr.ticker.add(this.addTicker);
    }
    wheel() {
      window.addEventListener(
        "wheel",
        (this.ref = (t) => {
          this.isFirefox || this.isSafari
            ? (this.deltaY = 1.6 * t.deltaY)
            : (this.deltaY = t.deltaY),
            window.clearTimeout(this.isWheeling),
            (this.isWheeling = setTimeout(() => {
              this.deltaY = 0;
            }, 66));
        })
      );
    }
    unwheel() {
      window.removeEventListener("wheel", this.ref);
    }
    resize() {
      this.height = document.body.clientHeight - window.innerHeight;
    }
    scrollTo(t, e) {
      const n = e || 1;
      kr.to(this, {
        scrollTop:
          document.querySelector(t).getBoundingClientRect().top - this.current,
        duration: n,
        ease: "power3.inOut",
      });
    }
    playTicker() {
      const t = 1 - Math.pow(1 - this.speed, kr.ticker.deltaRatio());
      this.scrollTop + this.deltaY > this.height
        ? (this.scrollTop = this.height)
        : this.scrollTop + this.deltaY < 0
        ? (this.scrollTop = 0)
        : 0 !== this.deltaY && (this.scrollTop += this.deltaY);
      const e = -this.scrollTop - this.current;
      Math.round(100 * e) / 100 != 0 &&
        ((this.current += e * t), window.scrollTo(0, -1 * this.current)),
        this.update();
    }
    destroy() {
      window.removeEventListener("wheel", this.ref),
        kr.ticker.remove(this.addTicker);
    }
  }
  class _s {
    constructor() {
      (this.deltaY = this.inten = 0),
        (this.speed = 0.1),
        (this.elmt = document.querySelector(".innerNuage1")),
        (this.posX = -0.3 * window.innerWidth),
        (this.elmt2 = document.querySelector(".innerNuage2")),
        (this.posX2 = -0.7 * window.innerWidth),
        (this.elmt3 = document.querySelector(".innerNuage3")),
        (this.posX3 = -0.5 * window.innerWidth);
    }
    init() {
      (this.xSet = kr.quickSetter(this.elmt, "x", "px")),
        (this.xSet2 = kr.quickSetter(this.elmt2, "x", "px")),
        (this.xSet3 = kr.quickSetter(this.elmt3, "x", "px")),
        (this.height = this.elmt.clientWidth),
        (this.addTicker = () => {
          this.playTicker();
        }),
        this.on();
    }
    on() {
      kr.ticker.add(this.addTicker);
    }
    playTicker() {
      const t = kr.ticker.deltaRatio(),
        e = 1 - Math.pow(1 - this.speed, t);
      this.xSet(this.posX),
        this.xSet2(this.posX2),
        this.xSet3(this.posX3),
        (this.inten += (this.deltaY / 4 - this.inten) * e),
        (this.posX -= (t + this.inten) / 1.3),
        (this.posX2 -= 1.3 * (t + this.inten)),
        (this.posX3 -= t + this.inten),
        this.posX > 0 && (this.posX = -this.height),
        this.posX < -this.height && (this.posX = this.posX + this.height),
        this.posX2 > 0 && (this.posX2 = -this.height),
        this.posX2 < -this.height && (this.posX2 = this.posX2 + this.height),
        this.posX3 > 0 && (this.posX3 = -this.height),
        this.posX3 < -this.height && (this.posX3 = this.posX3 + this.height);
    }
    destroy() {
      window.removeEventListener("wheel", this.ref);
    }
  }
  let vs;
  function ys() {
    vs = setInterval(() => {
      const t = document.querySelector(".personnage img.current");
      t.classList.remove("current"),
        t.nextElementSibling
          ? t.nextElementSibling.classList.add("current")
          : document
              .querySelectorAll(".personnage img")[0]
              .classList.add("current");
    }, 150);
  }
  function ws() {
    clearInterval(vs);
  }
  kr.registerPlugin(ds),
    window.addEventListener("DOMContentLoaded", () => {
      const t = new _s();
      let e;
      "ontouchstart" in window ||
        navigator.msMaxTouchPoints ||
        ((e = new ms("body", 0.4)), window.scrollTo(0, 0)),
        (window.pageYOffset = 0);
      let n = !1,
        r = !1,
        i = kr.timeline({ paused: !0 }),
        o = kr.timeline({ paused: !0 });
      kr.delayedCall(1, () => {
        document.getElementById("main").classList.add("on"),
          kr.delayedCall(0.3, () => {
            kr.fromTo(
              ".logo",
              { rotation: "4deg", scale: 0.8 },
              { rotation: "0deg", scale: 1, duration: 2, ease: "power4.out" }
            ),
              window.innerWidth > 767
                ? (kr.fromTo(
                    ".stag",
                    { y: "-80%", scaleY: 0.5 },
                    {
                      y: "0%",
                      scaleY: 1,
                      ease: "elastic.out(1.4, 1.)",
                      stagger: -0.11,
                      duration: 1.2,
                    }
                  ),
                  kr.fromTo(
                    ".stag2",
                    { y: "80%", scaleY: 0.5 },
                    {
                      y: "0%",
                      scaleY: 1,
                      ease: "elastic.out(1.4, 1.)",
                      stagger: 0.11,
                      duration: 1.2,
                    }
                  ))
                : (kr.fromTo(
                    ".stag",
                    { autoAlpha: 0, y: "-80%", scaleY: 0.5 },
                    {
                      autoAlpha: 1,
                      y: "0%",
                      scaleY: 1,
                      ease: "elastic.out(1.4, 1.)",
                      stagger: -0.11,
                      duration: 1.2,
                    }
                  ),
                  kr.fromTo(
                    ".stag2",
                    { autoAlpha: 0, y: "80%", scaleY: 0.5 },
                    {
                      autoAlpha: 1,
                      y: "0%",
                      scaleY: 1,
                      ease: "elastic.out(1.4, 1.)",
                      stagger: 0.11,
                      duration: 1.2,
                    }
                  )),
              kr.to(".motHaut, .motBas", {
                y: 0,
                ease: "power4.out",
                duration: 1.9,
                onComplete: () => {
                  (r = !0), null != e && (e.init(), e.wheel());
                },
              }),
              window.innerWidth <= 767 &&
                (kr.delayedCall(1.3, () => {
                  document.getElementById("parchemin").classList.add("on");
                }),
                kr.fromTo(
                  ".personnage",
                  { autoAlpha: 0 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    ease: "power3.out",
                    delay: 1.3,
                    duration: 0.6,
                  }
                ));
          }),
          kr.delayedCall(1.1, () => {
            kr.to(".innerNuage", {
              y: "0px",
              ease: "elastic.out(1.4, 1.)",
              stagger: 0.1,
              duration: 2,
            }),
              t.init();
          }),
          window.innerWidth > 767
            ? (ds.create({
                trigger: "#main",
                start:
                  "top+=" +
                  (document.querySelector(".logo").getBoundingClientRect()
                    .left +
                    document.querySelector(".logo").clientWidth) +
                  "px",
                onEnter: () => {
                  document
                    .querySelector(".innerNuage2")
                    .classList.add("derriere");
                },
                onLeaveBack: () => {
                  document
                    .querySelector(".innerNuage2")
                    .classList.remove("derriere");
                },
              }),
              kr.to(".skew", {
                skewX: "-80deg",
                ease: "none",
                scrollTrigger: {
                  trigger: "#main",
                  start: "top top",
                  end: "+=" + window.innerWidth,
                  scrub: !0,
                },
              }),
              ds.create({
                trigger: "#main",
                start: "top top",
                onEnter: () => {
                  kr.to("#scrollV, #scrollMot", {
                    scale: 0,
                    rotation: 90,
                    duration: 0.5,
                    ease: "power2.inOut",
                  }),
                    document.querySelector(".step1").classList.add("off"),
                    document.querySelector(".step2").classList.add("on"),
                    document.getElementById("parchemin").classList.add("on");
                },
                onLeaveBack: () => {
                  n &&
                    kr.fromTo(
                      "#scrollV, #scrollMot",
                      { rotation: -90 },
                      {
                        scale: 1,
                        rotation: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                      }
                    ),
                    document.querySelector(".step1").classList.remove("off"),
                    document.querySelector(".step2").classList.remove("on"),
                    document.getElementById("parchemin").classList.remove("on"),
                    document.getElementById("onSecrit").classList.remove("on");
                },
              }),
              kr.to("#scroll", {
                x:
                  -1 * document.querySelector("#scroll").clientWidth +
                  window.innerWidth +
                  "px",
                ease: "none",
                scrollTrigger: {
                  trigger: "#scroll",
                  start: "top top",
                  end:
                    "+=" +
                    (document.querySelector("#scroll").clientWidth -
                      window.innerWidth) +
                    "px",
                  scrub: !0,
                  pin: !0,
                },
              }),
              ds.create({
                trigger: "#main",
                start:
                  "top+=" +
                  (document.querySelector(".personnage").getBoundingClientRect()
                    .left -
                    window.innerWidth) +
                  "px",
                end:
                  "+=" +
                  (window.innerWidth +
                    document.querySelector(".personnage").offsetWidth) +
                  "px",
                onEnter: () => {
                  ys();
                },
                onEnterBack: () => {
                  ys();
                },
                onLeave: () => {
                  ws();
                },
                onLeaveBack: () => {
                  ws();
                },
              }),
              kr.to("#lampe, .bibli", {
                x: window.innerWidth + "px",
                ease: "none",
                scrollTrigger: {
                  trigger: "#lampe",
                  start:
                    "top+=" +
                    (document.getElementById("lampe").getBoundingClientRect()
                      .left -
                      0.5 * window.innerWidth +
                      document.getElementById("lampe").offsetWidth / 2) +
                    "px",
                  end: "+=" + window.innerWidth + "px",
                  scrub: !0,
                },
              }),
              kr.to(".escalier, .rocher1", {
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: "#lampe",
                  start:
                    "top+=" +
                    (document.getElementById("lampe").getBoundingClientRect()
                      .left -
                      0.5 * window.innerWidth +
                      document.getElementById("lampe").offsetWidth / 2) +
                    "px",
                  end: "+=" + window.innerWidth + "px",
                  scrub: !0,
                },
              }),
              kr.to(".lumiere", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "none",
                scrollTrigger: {
                  trigger: "#lampe",
                  start:
                    "top+=" +
                    (document.getElementById("lampe").getBoundingClientRect()
                      .left -
                      0.5 * window.innerWidth +
                      document.getElementById("lampe").offsetWidth / 2) +
                    "px",
                  end: "+=" + window.innerWidth + "px",
                  scrub: !0,
                },
              }),
              ds.create({
                trigger: "#main",
                start:
                  "top+=" +
                  document.querySelector(".s-frise").getBoundingClientRect()
                    .left +
                  "px",
                onEnter: () => {
                  t.destroy();
                },
                onLeaveBack: () => {
                  t.on();
                },
              }),
              document.querySelectorAll(".s-frise img").forEach((t) => {
                kr.from(t, {
                  immediateRender: !1,
                  rotation: 40 * (Math.random() - 0.5),
                  y: 100 * (Math.random() - 0.5) + "px",
                  x: 0.1 * window.innerWidth + "px",
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: "#main",
                    start:
                      "top+=" +
                      (t.getBoundingClientRect().left - window.innerWidth) +
                      "px",
                    end: "+=" + 0.25 * window.innerWidth + "px",
                    scrub: !0,
                  },
                }),
                  kr.to(t, {
                    immediateRender: !1,
                    rotation: 40 * (Math.random() - 0.5),
                    y: 100 * (Math.random() - 0.5) + "px",
                    x: -0.1 * window.innerWidth + "px",
                    ease: "power2.in",
                    scrollTrigger: {
                      trigger: "#main",
                      start:
                        "top+=" +
                        (t.getBoundingClientRect().left +
                          t.clientWidth -
                          0.25 * window.innerWidth) +
                        "px",
                      end: "+=" + 0.25 * window.innerWidth + "px",
                      scrub: !0,
                    },
                  });
              }),
              kr.to(".forme", {
                x: "100%",
                ease: "none",
                scrollTrigger: {
                  trigger: "#main",
                  start:
                    "top+=" +
                    (document.querySelector(".s-footer").getBoundingClientRect()
                      .left -
                      0.5 * window.innerWidth) +
                    "px",
                  end: "+=" + 0.5 * window.innerWidth + "px",
                  scrub: !0,
                  onEnter: () => {
                    document.body.classList.add("noir");
                  },
                  onLeaveBack: () => {
                    document.body.classList.remove("noir");
                  },
                },
              }),
              ds.create({
                trigger: "#main",
                start:
                  "top+=" +
                  (document.querySelector("footer").getBoundingClientRect()
                    .left -
                    0.1 * window.innerWidth) +
                  "px",
                onEnter: () => {
                  i.play();
                },
                onLeaveBack: () => {
                  i.reverse();
                },
              }),
              ds.create({
                trigger: "#main",
                start:
                  "top+=" +
                  (document.querySelector("footer").getBoundingClientRect()
                    .left -
                    50) +
                  "px",
                onEnter: () => {
                  document.querySelector(".credits").classList.add("on");
                },
                onLeaveBack: () => {
                  document.querySelector(".credits").classList.remove("on");
                },
              }),
              ds.create({
                trigger: "#main",
                start:
                  "top+=" +
                  (document.querySelector("footer").getBoundingClientRect()
                    .left -
                    window.innerWidth) +
                  "px",
                onEnter: () => {
                  document.getElementById("parchemin").classList.remove("on"),
                    document.getElementById("onSecrit").classList.remove("on");
                },
                onLeaveBack: () => {
                  document.getElementById("parchemin").classList.add("on");
                },
              }))
            : (ds.create({
                trigger: "#main",
                start:
                  "top+=" +
                  (document
                    .querySelector(".s-personnage")
                    .getBoundingClientRect().top -
                    window.innerHeight) +
                  "px",
                end:
                  "+=" +
                  (window.innerHeight +
                    document.querySelector(".personnage").offsetHeight) +
                  "px",
                onEnter: () => {
                  ys();
                },
                onEnterBack: () => {
                  ys();
                },
                onLeave: () => {
                  ws();
                },
                onLeaveBack: () => {
                  ws();
                },
              }),
              ds.create({
                trigger: "#main",
                start:
                  "top+=" +
                  (document.querySelector("footer").getBoundingClientRect()
                    .top -
                    window.innerHeight) +
                  "px",
                onEnter: () => {
                  document.getElementById("parchemin").classList.remove("on");
                },
                onLeaveBack: () => {
                  document.getElementById("parchemin").classList.add("on");
                },
              })),
          kr.set("#scrollV", {
            xPercent: -50,
            yPercent: -50,
            x: "50vw",
            y: "50vh",
          });
        let s = kr.quickTo("#scrollV", "x", { duration: 0.5, ease: "power4" }),
          a = kr.quickTo("#scrollV", "y", { duration: 0.5, ease: "power4" });
        kr.set("#scrollMot", {
          xPercent: -50,
          yPercent: -50,
          x: "50vw",
          y: "50vh",
        });
        let u = kr.quickTo("#scrollMot", "x", {
            duration: 0.6,
            ease: "power4",
          }),
          l = kr.quickTo("#scrollMot", "y", { duration: 0.6, ease: "power4" });
        window.addEventListener("mousemove", (t) => {
          s(t.clientX),
            a(t.clientY - 40),
            u(t.clientX),
            l(t.clientY - 40),
            !n &&
              0 ==
                document.getElementById("main").getBoundingClientRect().top &&
              r &&
              ((n = !0),
              kr.fromTo(
                "#scrollV, #scrollMot",
                { rotation: -90 },
                { scale: 1, rotation: 0, duration: 0.5, ease: "power2.inOut" }
              ));
        }),
          document.addEventListener(
            "scroll",
            () => {
              n = !0;
            },
            { once: !0 }
          ),
          window.innerWidth > 767 &&
            (kr.set(".corps", { y: "54%" }),
            kr.set(".bras", { y: "76%", x: "-1%" }),
            kr.set(".main", { scaleY: 0 }),
            i.to(".corps, .bras", {
              y: "0%",
              ease: "power4.out",
              duration: 0.5,
            }),
            i.to(
              ".main",
              { scaleY: 1, duration: 0.2, ease: "power4.out" },
              "-=0.4"
            ),
            document
              .getElementById("grenouille")
              .addEventListener("mouseenter", () => {
                i.reverse();
              }),
            document
              .getElementById("grenouille")
              .addEventListener("mouseleave", () => {
                i.play();
              }),
            document
              .getElementById("parchemin")
              .addEventListener("mouseenter", () => {
                document.getElementById("onSecrit").classList.add("on");
              }),
            document
              .getElementById("parchemin")
              .addEventListener("mouseleave", () => {
                document.getElementById("onSecrit").classList.remove("on");
              })),
          window.innerWidth > 767 &&
            (kr.set("#oeilGauche, #oeilDroit", {
              scaleY: 0,
              transformOrigin: "0 70%",
            }),
            o.set("#yeuxFermes", { autoAlpha: 0 }),
            o.set("#oeilGauche, #oeilDroit", { autoAlpha: 1 }),
            o.to(
              "#oeilGauche, #oeilDroit",
              { scaleY: 1, duration: 0.2, ease: "power4.out" },
              "+=0.2"
            ),
            document
              .getElementById("hibou")
              .addEventListener("mouseenter", () => {
                o.play();
              }),
            document
              .getElementById("hibou")
              .addEventListener("mouseleave", () => {
                o.reverse();
              })),
          document.getElementById("parchemin").addEventListener("click", () => {
            window.innerWidth > 767 &&
              (document.getElementById("parchemin").classList.remove("on"),
              document.getElementById("onSecrit").classList.remove("on"));
            let t =
              (-100 *
                document.getElementById("main").getBoundingClientRect().top) /
              (document.getElementById("main").offsetHeight -
                window.innerHeight) /
              100;
            t > 0.8 && (t = 0.8);
            const n = {
              dist:
                -1 *
                document.getElementById("main").getBoundingClientRect().top,
            };
            let r =
              document.getElementById("main").offsetHeight - window.innerHeight;
            window.innerWidth <= 767 &&
              (r =
                document.getElementById("main").offsetHeight -
                document.querySelector("footer").offsetHeight),
              kr.to(n, {
                dist: r,
                duration: 4 * (1 - t),
                ease: "power2.inOut",
                onUpdate: () => {
                  window.scrollTo(0, n.dist),
                    null != e &&
                      ((e.scrollTop = n.dist), (e.current = -n.dist));
                },
              });
          });
      }),
        window.addEventListener("resize", () => {
          null != e && location.reload();
        });
    });
})();
