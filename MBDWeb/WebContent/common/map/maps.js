(function(config) {
    var ca = navigator.userAgent.toLowerCase(),
    e = window,
    z = document;
    function C(a) {
        return - 1 !== ca.indexOf(a)
    }
    var da = C("ucbrowser"),
    ea = C("micromessenger"),
    fa = C("mqqbrowser"),
    E = "ActiveXObject" in e,
    ga = E && !e.XMLHttpRequest,
    ha = E && !z.querySelector,
    ia = E && !z.addEventListener,
    ja = E && C("ie 9"),
    ma = E && C("rv:11"),
    pa = e.navigator && e.navigator.msPointerEnabled && !!e.navigator.msMaxTouchPoints,
    qa = pa || C("touch") || "ontouchstart" in z,
    ra = C("webkit"),
    chrome = C("chrome"),
    sa = C("firefox"),
    ta = C("android"),
    ua = -1 !== ca.search(/android [123]/),
    va = ta && !ua;
    va && ca.search(/android 4.[0-3]./);
    var wa = C("windows phone"),
    xa = "devicePixelRatio" in e && 1 < e.devicePixelRatio || E && "matchMedia" in e && e.matchMedia("(min-resolution:144dpi)") && e.matchMedia("(min-resolution:144dpi)").matches,
    ya = C("ipad;"),
    za = ya && xa,
    Aa = C("ipod touch;"),
    Ca = C("iphone;"),
    Da = Ca || ya || Aa,
    Ea = C("safari") && C("version/"),
    Fa = Da && -1 === ca.search(/ os [456]_/),
    Ga = Da && C("os 8"),
    Ha = ta || Da || wa || C("mobile") || "undefined" !== typeof orientation,
    Ia = z.documentElement,
    Ja = E && "transition" in Ia.style,
    Ka = !!z.createElementNS && !!z.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
    La = z.createElement("canvas"),
    Ma = !!La.getContext,
    La = z.createElement("canvas"),
    Na = Ma && !(!La.getContext("webgl") && !La.getContext("experimental-webgl")),
    Oa = "WebKitCSSMatrix" in e && "m11" in new window.WebKitCSSMatrix,
    Pa = "MozPerspective" in Ia.style,
    Sa = "OTransition" in Ia.style,
    Ta = Ja || Oa || Pa || Sa,
    Ua = C("windows nt"),
    Va = -1 !== ca.search(/windows nt [1-5]\./),
    Wa = ja || Va || Ua && C("version"),
    Xa = ta && (!va || !!(C("gt-n710") || -1 !== ca.search(/ucbrowser\/((10\.)|(1\.))/) && -1 !== ca.search(/huawei( p6|h30)/))),
    Ya;
    if (Ya = Ca) {
        var Za = screen.width;
        Ya = !(Fa && (Ga && (da || ea) ? !(414 <= Za) : 1))
    }
    var $a = Ya || Aa || za,
    ab = C("baidubrowser"),
    bb = C("macintosh"),
    cb = !Ma || Wa || Xa || $a || wa || Ha && sa,
    db = !1;
    try {
        db = "undefined" !== typeof e.localStorage
    } catch(eb) {}
    config.h = {
        size: 400,
        mq: bb,
        hU: Ua,
        hu: ab,
        kX: fa,
        SS: Ea,
        fU: ea,
        tl: E,
        Ed: ga,
        vn: ha,
        Pc: ia,
        rQ: E && !ma,
        dU: ra,
        lq: db,
        ke: ta,
        mV: ua,
        hr: da,
        chrome: chrome,
        PC: sa,
        zW: Ja,
        eU: Oa,
        WV: Pa,
        cX: Sa,
        AN: Ta,
        Z: Ha,
        $W: Ha && ra,
        bR: Ha && Oa,
        ZW: Ha && e.opera,
        sv: Da,
        zc: qa,
        hE: pa,
        AW: ja,
        ha: xa,
        xh: Ka,
        ul: Ma,
        HQ: Na,
        IW: !!e.JU,
        EE: cb,
        yg: (void 0 !== config[8] ? config[8] : !0) && !cb,
        xv: (void 0 !== config[9] ? config[9] : !0) && !!e.WebSocket && !ab && !sa,
        DE: !Ka && Ha && Ma
    };
    config.h.iw = config.h.ke ? "android": config.h.sv ? "ios": config.h.hU ? "windows": config.h.mq ? "mac": "other";
    var e = window,
    F = "http map anip layers overlay0 brender mrender".split(" ");
    config.Hd = "main";
    config.h.zc && (F += ",touch", config.Hd += "t");
    config.h.Z || (F += ",mouse", config.Hd += "m");
    config.Hd += "c";
    config.h.yg && (config.Hd += "v", F += ",vectorlayer,overlay", F += ",vp", config.Hd += "p");
    config[7] && (F += "," + config[7], config.Hd += config[7].replace(",", "").replace(eval("/AMap./gi"), ""));
    F += ",sync";
    config.oG = F.split(",");
    window.AMap = window.AMap || {};
    window.AMap.Rg = "1.3.16.1";
    var fb = window.AMap.bx = {},
    gb = config[2].split(",")[0],
    hb = gb + "/theme/v" + config[4] + "/style1.3.16.1.css",
    ib = document.head || document.getElementsByTagName("head")[0];
    if (ib) {
        var jb = document.createElement("link");
        jb.setAttribute("rel", "stylesheet");
        jb.setAttribute("type", "text/css");
        jb.setAttribute("href", hb);
        ib.insertBefore(jb, ib.firstChild)
    } else document.write("<link rel='stylesheet' href='" + hb + "'/>");
    function kb() {
        var a = lb,
        b = document,
        c = b.createElement("script");
        c.charset = "utf-8";
        c.src = a; (a = b.body || ib) && a.appendChild(c)
    }
    var mb = (new Date).getTime();
    fb.__load__ = function(a) {
        a(config, mb);
        fb.__load__ = null
    };
    try {
        if (window.localStorage) {
            var nb = window.localStorage["_AMap_" + config.Hd],
            ob = !1;
            nb ? (nb = JSON.parse(nb), nb.version === window.AMap.Rg ? (eval(nb.script), fb.loaded = !0) : ob = !0) : ob = !0;
            if (ob) for (var H in window.localStorage) window.localStorage.hasOwnProperty(H) && 0 === H.indexOf("_AMap_") && window.localStorage.removeItem(H)
        }
    } catch(pb) {}
    if (!fb.loaded) {
        for (var lb = gb + "/maps/main?v=" + config[4] + "&key=" + config[0] + "&m=" + config.oG.join(",") + "&vrs=1.3.16.1", qb = document.getElementsByTagName("script"), rb, sb = 0; sb < qb.length; sb += 1) if (0 === qb[sb].src.indexOf(gb.split(":")[1] + "/maps?")) {
            rb = qb[sb];
            break
        }
        config[5] || rb && rb.async ? kb() : (document.write('<script id="amap_main_js" src=\'' + lb + "' type='text/javascript'>\x3c/script>"), document.getElementById("amap_main_js") || kb());
        config.oG = void 0
    };
})(["8c5888f3c5814675873fe39b0c689136", [120.856805, 30.675593, 122.247149, 31.872716, 121.472644, 31.231706], "http://webapi.amap.com", 1, "1.3", null, "310000", "", true, true])