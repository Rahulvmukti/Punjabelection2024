! function() {
    var C = 4,
        A = {
            pro: 1,
            premium: 2,
            ads: 3,
            invalid: C,
            enterprise: 6,
            trial: 7,
            platinum: 8,
            starter: 9,
            business: 10,
            developer: 11
        },
        x = {
            viewable: 2
        },
        e = "DATA_EVENT_PLAY",
        a = "DATA_EVENT_META",
        t = "DATA_EVENT_LEVELS",
        n = "DATA_EVENT_FIRST_FRAME",
        y = 128,
        r = ["auto", "initial choice"],
        o = ["playlistItem", "playAttempt", "time", "adBreakEnd"],
        j = 0,
        b = 20;
    var B = Object.assign || function(e) {
        for (var a = arguments.length, t = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) t[n - 1] = arguments[n];
        return t.reduce(function(e, a) {
            return t = e, (n = a) && Object.keys(n).forEach(function(e) {
                t[e] = n[e]
            }), t;
            var t, n
        }, e)
    };

    function i() {
        try {
            var e = window.crypto || window.msCrypto;
            if (e && e.getRandomValues) return e.getRandomValues(new Uint32Array(1))[0].toString(36)
        } catch (e) {}
        return Math.random().toString(36).slice(2, 9)
    }

    function R(e) {
        for (var a = ""; a.length < e;) a += i();
        return a.slice(0, e)
    }

    function M(e) {
        if (e) {
            if (/vast/.test(e)) return 0;
            if (/googima/.test(e)) return 1;
            if (/freewheel/.test(e)) return 2;
            if (/dai/.test(e)) return 3
        }
        return -1
    }

    function d(e) {
        return /^[a-zA-Z0-9]{8}$/.test(e)
    }

    function l(e, a) {
        if ("number" != typeof e) return null;
        var t = e / 1e3;
        return !(1 < arguments.length && void 0 !== a) || a ? Math.round(t) : t
    }

    function u(e, a) {
        return e + "-" + a
    }

    function c(e, a) {
        return a.split(".").reduce(function(e, a) {
            return e ? e[a] : void 0
        }, e)
    }

    function s(e) {
        var a = {};
        for (var t in e)
            if ("object" == typeof e[t]) {
                var n = s(e[t]);
                for (var r in n) n.hasOwnProperty(r) && (a[t + "." + r] = n[r])
            } else a[t] = e[t];
        return a
    }
    var p = a;

    function h(e) {
        var a = e.getContainer().querySelector("video");
        return a && a.currentTime ? a.currentTime : e.getPosition()
    }

    function f(a) {
        try {
            return a.getPlaylistItem()
        } catch (e) {
            var t = a.getPlaylistIndex();
            return a.getConfig().playlist[t] || null
        }
    }

    function m(e) {
        if ("function" != typeof e.getProvider) return "";
        var a = e.getProvider();
        return a ? a.name : ""
    }
    var k = void 0;

    function V(e, a) {
        var t = 1 < arguments.length && void 0 !== a && a,
            n = e.getVisualQuality(),
            r = void 0;
        if (n && n.level) {
            var i = "string" == typeof n.mode ? "auto" === n.mode : null;
            r = {
                width: n.level.width,
                height: n.level.height,
                bitrate: l(n.level.bitrate),
                reason: n.reason,
                adaptiveBitrateMode: i
            }
        } else r = {
            width: null,
            height: null,
            bitrate: null,
            reason: null,
            adaptiveBitrateMode: null
        };
        return k && !t || (k = r), r
    }

    function w(e) {
        var a = e.external.playerAPI,
            t = e.meta.playbackEvents,
            n = a.getDuration();
        if (n <= 0) {
            var r = t[p];
            r && (n = r.duration)
        }
        return 0 | n
    }

    function g(e, a) {
        var t = e.playerData.startup;
        null === t.startupTime && null !== t.initialTime && (t.startupTime = 10 * Math.round((Date.now() - t.initialTime) / 10), t.dispatchEvent = a)
    }

    function L(e) {
        var a = e.getConfig().setupConfig;
        if (a) {
            var i, o, d, l, t = window.jwplayer.defaults,
                n = B({}, t, a);
            return delete n.advertising, JSON.stringify(n, (i = n, o = [], d = [], l = 0, function(e, a) {
                if ("object" != typeof a) return "function" == typeof a ? "__FUNCTION__" : a;
                if (null === a || a instanceof Date || a instanceof RegExp) return a;
                if (Uint8Array && a instanceof Uint8Array) {
                    var t = "" + a;
                    return t = 40 < t.length ? t.substr(0, 40) : t, "Uint8Array(" + a.length + ") [" + t + "]"
                }
                if (Array.isArray(a) && 100 < a.length) return "Array(" + a.length + ")";
                if (a === i && 0 < l) return "<parent object>";
                var n = o.indexOf(a);
                if (-1 !== n) {
                    var r = d[n];
                    if (r) return r;
                    try {
                        JSON.stringify(a)
                    } catch (e) {
                        return d[n] = "__CIRCULAR__"
                    }
                    d[n] = a
                }
                return 1e4 < l++ ? "<complexity exceeded>" : (o.push(a), a)
            }))
        }
    }
    var v = {
            UNKNOWN: 999,
            IAB: 0
        },
        D = {
            noBid: 0,
            bid: 1,
            timeout: 2,
            invalid: 3,
            abort: 4,
            error: 5
        },
        G = {
            numCompanions: -1,
            podCount: 0,
            podIndex: 0,
            linear: -1,
            vastVersion: -1,
            adSystem: null,
            adCreativeType: null,
            adposition: -1,
            tagdomain: null,
            position: void 0,
            previousQuartile: 0,
            duration: void 0,
            witem: 1,
            wcount: 1,
            preload: void 0,
            adMediaFileURL: void 0,
            description: null,
            creativeAdId: null,
            creativeId: null,
            adTitle: null,
            adVastId: null,
            jwpseg: void 0,
            placement: void 0,
            timeForVPBCache: null,
            advertiser: null,
            advertiserId: null
        },
        S = {
            consecutiveVisibleSeconds: 0,
            maxConsecutiveVisibleSeconds: 0,
            totalVisibleSeconds: 0
        },
        I = /^IAB(\d+(?:-\d+)?)$/,
        T = {
            adRequest: "ar",
            adImpression: "i",
            adSkipped: "s",
            adError: "ae",
            adBidResponse: "abr",
            adClick: "c",
            adLoaded: "al",
            adViewableImpression: "vi",
            adBidRequest: "abq"
        },
        P = ["adStarted", "adMeta"],
        E = ["adTime", "adClick"],
        O = ["adBreakStart", "adMeta", "adImpression", "adViewableImpression", "adPlay", "adPause", "adTime", "adCompanions", "adClick", "adSkipped", "adComplete", "adError"],
        F = {
            dfp: 0,
            jwp: 1,
            jwpdfp: 2,
            jwpspotx: 3
        },
        N = ["id", "type", "pubid", "result", "code", "winner", "priceInCents", "grossPriceInCents", "timeForBidResponse", "requestId", "cacheKey", "dealId"],
        q = /[?&]iu=([^&]+)/,
        U = "error",
        Q = "s",
        _ = "ana",
        z = "t",
        K = "prp",
        W = "vsh",
        H = "paf",
        $ = "bs",
        J = "fs",
        X = "fc",
        Y = "aa",
        Z = "gab",
        ee = "xapi",
        ae = "cpt",
        te = "ph",
        ne = "n",
        re = "e",
        ie = "sa",
        oe = "i",
        de = "as",
        le = "ar",
        ue = "avp",
        ce = "avg",
        se = "ers",
        pe = "err",
        fe = {
            events: {
                "aa-jwplayer6": {
                    code: "aa",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fct", "fed", "fid", "fin", "fns", "fsid", "fsr", "ft", "mu", "os", "ovta", "psd"],
                    filters: ["missingFeedID"],
                    pingDestination: "main"
                },
                "abr-clienta": {
                    code: "abr",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["apr", "tfvc"],
                    pingDestination: "main"
                },
                "abq-clienta": {
                    code: "abq",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["apr", "ipv", "rtp", "tpi"],
                    pingDestination: "main"
                },
                "ae-clienta": {
                    code: "ae",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["ad", "add", "adid", "adt", "adv", "advi", "aec", "aem", "amu", "apr", "apt", "ato", "atu", "caid", "cid", "ct", "did", "du", "ec", "iu", "mfc", "tal", "tpi", "uav"],
                    pingDestination: "main"
                },
                "al-clienta": {
                    code: "al",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["apr", "tal"],
                    filters: ["missingAdScheduleID"],
                    pingDestination: "main"
                },
                "ana-jwplayer6": {
                    code: "ana",
                    bucket: "jwplayer6",
                    parameterGroups: ["sessionParamsOnly"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "ar-clienta": {
                    code: "ar",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["apr", "apt", "ipv", "rtp", "tpi"],
                    pingDestination: "main"
                },
                "avg-clienta": {
                    code: "avg",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingDestination: "main"
                },
                "avp-clienta": {
                    code: "avp",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingDestination: "main"
                },
                "bi-clienta": {
                    code: "bi",
                    bucket: "clienta",
                    parameterGroups: [],
                    pingSpecificParameters: ["aid"],
                    pingDestination: "main"
                },
                "bs-jwplayer6": {
                    code: "bs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fed", "fid", "ft", "mu", "os"],
                    filters: ["missingFeedID"],
                    pingDestination: "main"
                },
                "c-clienta": {
                    code: "c",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["ad", "adc", "al", "ct", "du", "qt", "srf", "tw", "vv", "uav"],
                    pingDestination: "main"
                },
                "cpe-jwplayer6": {
                    code: "cpe",
                    bucket: "jwplayer6",
                    parameterGroups: [],
                    pingSpecificParameters: ["aid", "id", "fed", "mu", "pss"],
                    pingDestination: "external"
                },
                "cpt-jwplayer6": {
                    code: "cpt",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingDestination: "main"
                },
                "e-jwplayer6": {
                    code: "e",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["ab", "cae", "cb", "cdid", "cme", "dd", "dnt", "dpl", "flc", "fv", "ga", "ipv", "lng", "mk", "mu", "opu", "pad", "pbc", "pd", "pdr", "plng", "plt", "pni", "po", "pogt", "ptid", "pvt", "rf", "sn", "sp", "srf", "ss", "st", "vrt"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "err-error": {
                    code: "err",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cme", "erc", "pogt", "strt"],
                    pingDestination: "main"
                },
                "ers-error": {
                    code: "ers",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cme", "erc", "flc", "pogt"],
                    pingDestination: "main"
                },
                "fc-jwplayer6": {
                    code: "fc",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fct", "fed", "fid", "fin", "fns", "fpg", "fsid", "fsr", "ft", "mu", "oc", "os", "ovta", "psd", "srf", "stid"],
                    filters: ["missingFeedID"],
                    pingDestination: "main"
                },
                "fs-jwplayer6": {
                    code: "fs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fed", "fid", "fin", "fis", "fns", "fpc", "fpg", "fsid", "fsr", "ft", "mu", "os", "ovt", "rat", "srf", "tis", "vfi"],
                    filters: ["missingFeedID"],
                    pingDestination: "main"
                },
                "gab-jwplayer6": {
                    code: "gab",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abid", "abpr", "apid", "ati", "erc", "fls", "lae", "ovta", "pbs", "pcp", "prs", "prsd", "pvta", "srf", "strt", "ti", "tps", "ubc", "vti"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "i-clienta": {
                    code: "i",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["ad", "adc", "add", "adid", "adv", "advi", "apr", "apt", "adt", "al", "amu", "atu", "caid", "cid", "ct", "did", "du", "fed", "fid", "fsm", "iu", "mfc", "psd", "strt", "tal", "vv", "uav"],
                    pingDestination: "main"
                },
                "pa-jwplayer6": {
                    code: "pa",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["ab", "abid", "abm", "apid", "bwe", "cme", "dnt", "dpl", "fed", "fid", "flc", "lng", "mu", "opu", "pd", "pdr", "plng", "pni", "pogt", "pr", "psd", "pvta", "sbr", "ss", "tb", "vd", "vh", "vw"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "paf-error": {
                    code: "paf",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abm", "bwe", "erc", "fed", "fid", "mu", "pd", "pr", "psd", "sbr", "tb", "vd", "vh", "vw"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "prp-jwplayer6": {
                    code: "prp",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["tc"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "pru-jwplayer6": {
                    code: "pru",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["ppr"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "ret-jwplayer6": {
                    code: "ret",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abm", "ati", "avc", "bwe", "etw", "fed", "fid", "fls", "fsm", "mu", "pbs", "pr", "q", "sbr", "srf", "ubc", "vh", "vr", "vti", "vw"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "s-jwplayer6": {
                    code: "s",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abid", "abm", "apid", "bwe", "cae", "cct", "cdid", "dnt", "dpl", "drm", "fed", "ff", "fid", "fsm", "l", "lng", "mk", "mu", "opu", "pd", "pdr", "plng", "pni", "pr", "psd", "q", "qcr", "sbr", "sp", "srf", "ss", "strt", "tb", "tt", "vd", "vh", "vs", "vrt", "vr", "vw"],
                    pingDestination: "main"
                },
                "s-clienta": {
                    code: "s",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["ad", "adc", "al", "atps", "ct", "du", "qt", "tw", "vv", "uav"],
                    pingDestination: "main"
                },
                "t-jwplayer6": {
                    code: "t",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abm", "ati", "avc", "bwe", "dle", "fed", "fid", "fls", "fsm", "ltc", "mu", "pbs", "pcp", "pw", "q", "sbr", "ti", "ubi", "vh", "vr", "vti", "vw"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "v-clienta": {
                    code: "v",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["ad", "adc", "adti", "adati", "advti", "al", "ct", "du", "fsm", "qt", "vv", "uav"],
                    pingDestination: "main"
                },
                "vcae-clienta": {
                    code: "vcae",
                    bucket: "clienta",
                    parameterGroups: ["adSessionParamsOnly", "sessionParamsOnly"],
                    pingSpecificParameters: ["abt", "aml", "ask", "c", "ed", "flpc", "ph", "pu", "sdk", "vcb", "vck", "vpb"],
                    pingDestination: "main"
                },
                "vci-clienta": {
                    code: "vci",
                    bucket: "clienta",
                    parameterGroups: ["adSessionParamsOnly", "sessionParamsOnly"],
                    pingSpecificParameters: ["abt", "aml", "ask", "c", "ed", "flpc", "ph", "pu", "sdk", "vcb", "vck", "vpb"],
                    pingDestination: "main"
                },
                "vi-clienta": {
                    code: "vi",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingDestination: "main"
                },
                "vqc-jwplayer6": {
                    code: "vqc",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abm", "avc", "bwe", "qcr", "sbr", "tb", "vw", "vh"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "vs-jwplayer6": {
                    code: "vs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cvl", "sdt", "tvl", "vso"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "vsh-jwplayer6": {
                    code: "vsh",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["pcp", "srf", "stg"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "xapi-jwplayer6": {
                    code: "xapi",
                    bucket: "jwplayer6",
                    parameterGroups: ["sessionParamsOnly"],
                    pingSpecificParameters: ["ed", "prs", "pid", "ph", "sdk", "sv", "xam", "xfmp"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "meta"
                }
            },
            paramGroups: {
                global: {
                    members: ["abc", "abt", "aid", "amp", "ask", "at", "bun", "c", "ccp", "cp", "d", "eb", "ed", "emi", "i", "id", "jwac", "lid", "lsa", "mt", "om", "pbd", "pbr", "pgi", "ph", "pid", "pii", "pl", "plc", "pli", "pp", "ppm", "prc", "ps", "pss", "pt", "pu", "pv", "pyc", "s", "sdk", "stc", "stpe", "sv", "t", "tul", "tv", "vb", "vi", "vl", "wd", "xav", "xid"],
                    groupName: "global"
                },
                adGlobal: {
                    members: ["ab", "abid", "abo", "adi", "apid", "awi", "awc", "p", "pc", "pi", "pr", "sko", "tmid", "vu"],
                    groupName: "adGlobal"
                },
                adSessionParamsOnly: {
                    members: ["abid", "apid"],
                    groupName: "adSessionParamsOnly"
                },
                sessionParamsOnly: {
                    members: ["aid", "emi", "id", "pli", "pv", "tv", "xav", "xid"],
                    groupName: "sessionParamsOnly"
                },
                headerBidding: {
                    members: ["afbb", "afbi", "afbp", "afbt", "afbw", "aml", "asxb", "asxi", "asxp", "asxt", "asxw", "flpc", "flpy", "frid", "hbec", "vpb", "vto"],
                    groupName: "headerBidding"
                }
            }
        },
        me = {
            sgB1CN8sEeW9HgpVuA4vVw: !1,
            "QHh6WglVEeWjwQp+lcGdIw": !0,
            "4lTGrhE9EeWepAp+lcGdIw": !0,
            "98DmWsGzEeSdAQ4AfQhyIQ": !0,
            "xNaEVFs+Eea6EAY3v_uBow": !0,
            KvvTdq_lEeSqTw4AfQhyIQ: !1
        },
        ge = 1;

    function ve(e, a) {
        var t, n, r, i, o, d, l, u;
        for (t = 3 & e.length, n = e.length - t, r = a, o = 3432918353, d = 461845907, u = 0; u < n;) l = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, ++u, r = 27492 + (65535 & (i = 5 * (65535 & (r = (r ^= l = (65535 & (l = (l = (65535 & l) * o + (((l >>> 16) * o & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * d + (((l >>> 16) * d & 65535) << 16) & 4294967295) << 13 | r >>> 19)) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (i >>> 16) & 65535) << 16);
        switch (l = 0, t) {
            case 3:
                l ^= (255 & e.charCodeAt(u + 2)) << 16;
            case 2:
                l ^= (255 & e.charCodeAt(u + 1)) << 8;
            case 1:
                r ^= l = (65535 & (l = (l = (65535 & (l ^= 255 & e.charCodeAt(u))) * o + (((l >>> 16) * o & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * d + (((l >>> 16) * d & 65535) << 16) & 4294967295
        }
        return r ^= e.length, r = 2246822507 * (65535 & (r ^= r >>> 16)) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r = 3266489909 * (65535 & (r ^= r >>> 13)) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^= r >>> 16) >>> 0
    }

    function ye(e) {
        return ke(e, "feedid")
    }

    function be(e) {
        return ke(e, "feed_instance_id")
    }

    function he(e) {
        return e ? e.pin_set_id : null
    }

    function ke(e, a) {
        return e ? (e.feedData || {})[a] || e[a] : null
    }

    function we(e) {
        if (!e) return null;
        var a, t, n = e.mediaid;
        return d(n) ? n : (a = e.file, d(n = (t = /.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/.exec(a)) && 2 === t.length ? t[1] : null) ? n : null)
    }

    function De(e) {
        return e ? e.title : null
    }

    function Se(e) {
        return e ? !(!e.images || !e.images.length) && !!e.images.filter(function(e) {
            return e.type && e.type.match(/video/)
        }).length : null
    }

    function Ie(e, a) {
        var t = void 0;
        me[e.accountData.analyticsID] && (t = function(e, a) {
            var t = De(a);
            if (t) return function(e, a) {
                e.meta.xidAlgorithmVersion = 1;
                var t = ve(a, ge),
                    n = ve(a + a, ge);
                return "01_" + t + n
            }(e, t)
        }(e, a));
        var n = t || a.externalId;
        (e.playlistItemData.externalId = n) && !e.meta.xidAlgorithmVersion && (e.meta.xidAlgorithmVersion = 0)
    }
    var Te = "hidden" in document ? function() {
        return !document.hidden
    } : "webkitHidden" in document ? function() {
        return !document.webkitHidden
    } : function() {
        return !0
    };

    function Pe(e, a) {
        var t = " " + a + " ";
        return 1 === e.nodeType && 0 <= (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(t)
    }
    var Ee = 1,
        Ce = 2,
        Ae = 3,
        xe = 4,
        je = 5,
        Be = 0;
    var Re = [$, Z];

    function Me(e, a, t) {
        var n = e.external.playerAPI,
            r = n.getConfig();
        e.playerData.playerConfig = {
            visibility: r.visibility,
            bandwidthEstimate: r.bandwidthEstimate,
            floatingState: !!r.isFloating
        };
        var i, o, d, l = f(n) || {};
        e.playlistItemData.item = l, e.playlistItemData.mediaId = we(l), e.playerData.playerSize = function(e) {
            var a = e.getConfig(),
                t = a.containerWidth || e.getWidth(),
                n = a.containerHeight || e.getHeight();
            if (/\d+%/.test(t)) {
                var r = e.utils.bounds(e.getContainer());
                t = r.width, n = r.height
            }
            return t = 0 | Math.round(t), n = 0 | Math.round(n), /\d+%/.test(a.width || t) && a.aspectratio ? {
                bucket: xe,
                width: t,
                height: n
            } : Pe(e.getContainer(), "jw-flag-audio-player") ? {
                bucket: je,
                width: t,
                height: n
            } : 0 === t ? {
                bucket: Be,
                width: t,
                height: n
            } : t <= 320 ? {
                bucket: Ee,
                width: t,
                height: n
            } : t <= 640 ? {
                bucket: Ce,
                width: t,
                height: n
            } : {
                bucket: Ae,
                width: t,
                height: n
            }
        }(n), e.playlistItemData.duration = w(e), e.meta.lastEvent = a, e.meta.lastBucket = t, e.playerData.visualQuality = V(n, "s" === a && "jwplayer6" === t), e.playerData.defaultPlaybackRate = r.defaultPlaybackRate, e.playerData.playbackMode = r.streamType, Ie(e, l), i = e, o = a, d = t, -1 === Re.indexOf(o) && (i.meta.eventPreAbandonment = u(o, d))
    }
    var Ve = {
            prs: function(e) {
                return e.meta.playerState
            },
            lae: function(e) {
                return e.meta.eventPreAbandonment
            },
            abpr: function(e) {
                return e.meta.playerRemoved
            },
            prsd: function(e) {
                var a = Date.now() - e.meta.playerStateDuration;
                return a <= 216e5 ? a : -1
            }
        },
        Le = {
            ab: function(e) {
                return e.configData.advertisingBlockType
            },
            abo: function(e) {
                return e.ads.adEventData.offset
            },
            adi: function(e) {
                return e.ads.adEventData.adId
            },
            apid: function(e) {
                return e.ads.adEventData.adPlayId
            },
            abid: function(e) {
                return e.ads.adEventData.adBreakId
            },
            awi: function(e) {
                return e.ads.adEventData.witem
            },
            awc: function(e) {
                return e.ads.adEventData.wcount
            },
            p: function(e) {
                return e.ads.adEventData.adposition
            },
            sko: function(e) {
                return e.ads.adEventData.skipoffset
            },
            vu: function(e) {
                return e.ads.adEventData.tagdomain
            },
            tmid: function(e) {
                return e.ads.adEventData.targetMediaId
            }
        },
        Ge = {
            cae: function(e) {
                return !!e.ads.advertisingConfig.companiondiv
            },
            ad: function(e) {
                return e.ads.adEventData.adSystem
            },
            adc: function(e) {
                var a = e.ads.adEventData,
                    t = null;
                return Array.isArray(a.categories) && (t = a.categories.map(function(e) {
                    var a = e.match(I);
                    return a ? [v.IAB, a[1]].join("-") : v.UNKNOWN
                }).filter(function(e, a, t) {
                    return t.indexOf(e) === a
                }).slice(0, 10).join(",") || null), t
            },
            al: function(e) {
                return e.ads.adEventData.linear
            },
            ct: function(e) {
                return e.ads.adEventData.adCreativeType
            },
            mfc: function(e) {
                return e.ads.adEventData.mediaFileCompliance
            },
            pc: function(e) {
                return e.ads.adEventData.podCount
            },
            pi: function(e) {
                return e.ads.adEventData.podIndex
            },
            tal: function(e) {
                return e.ads.adEventData.timeAdLoading
            },
            vv: function(e) {
                return e.ads.adEventData.vastVersion
            },
            uav: function(e) {
                return e.ads.adEventData.universalAdId
            },
            advti: function(e) {
                return e.ads.adPlaybackTracking.viewablePlayedSeconds
            },
            adati: function(e) {
                return e.ads.adPlaybackTracking.audiblePlayedSeconds
            },
            adti: function(e) {
                return e.ads.adPlaybackTracking.playedSeconds
            },
            atps: function(e) {
                return e.ads.watchedPastSkipPoint
            },
            du: function(e) {
                return e.ads.adEventData.duration
            },
            qt: function(e) {
                var a = e.meta.lastEvent;
                return "s" === a || "c" === a ? e.ads.adEventData.previousQuartile : e.ads.currentQuartile
            },
            tw: function(e) {
                return e.ads.adEventData.position
            },
            aec: function(e) {
                return e.ads.jwAdErrorCode
            },
            aem: function(e) {
                return e.ads.errorMessage
            },
            ato: function(e) {
                return e.ads.timeout
            },
            ec: function(e) {
                return e.playerData.lastErrorCode[e.meta.lastEvent]
            },
            atu: function(e) {
                var a = e.ads.adEventData.tagURL;
                return "string" == typeof a ? a.substr(0, 100) : void 0
            },
            tpi: function(e) {
                var a = e.ads.adEventData.jwpseg;
                return Array.isArray(a) ? a.join(",") : void 0
            },
            cid: function(e) {
                return e.ads.adEventData.creativeId
            },
            adt: function(e) {
                return e.ads.adEventData.adTitle
            },
            apr: function(e) {
                return e.ads.adEventData.preload
            },
            amu: function(e) {
                return e.ads.adEventData.adMediaFileURL
            },
            add: function(e) {
                return e.ads.adEventData.description
            },
            adid: function(e) {
                return e.ads.adEventData.adVastId
            },
            caid: function(e) {
                return e.ads.adEventData.creativeAdId
            },
            apt: function(e) {
                return e.ads.adEventData.placement
            },
            tfvc: function(e) {
                return e.ads.adEventData.timeForVPBCache
            },
            adv: function(e) {
                return e.ads.adEventData.advertiser
            },
            advi: function(e) {
                return e.ads.adEventData.advertiserId
            },
            afbb: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.result")
            },
            afbi: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.id")
            },
            afbp: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.priceInCents")
            },
            afbt: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.timeForBidResponse")
            },
            afbw: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.winner")
            },
            frid: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.requestId")
            },
            asxb: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.result")
            },
            asxi: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.id")
            },
            asxp: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.priceInCents")
            },
            asxt: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.timeForBidResponse")
            },
            asxw: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.winner")
            },
            aml: function(e) {
                return e.ads.headerBiddingData.mediationLayer
            },
            flpc: function(e) {
                return e.ads.headerBiddingData.floorPriceCents
            },
            flpy: function(e) {
                return e.ads.headerBiddingData.floorPriceCurrency
            },
            hbec: function(e) {
                return e.ads.headerBiddingData.errorCode
            },
            vto: function(e) {
                return e.ads.headerBiddingData.bidTimeout
            },
            vpb: function(e) {
                if ("object" == typeof e.ads.headerBiddingData.bidders) return JSON.stringify(s(e.ads.headerBiddingData.bidders))
            },
            vcb: function(e) {
                return e.ads.headerBiddingCacheData.bidder
            },
            vck: function(e) {
                return e.ads.headerBiddingCacheData.cacheKey
            },
            rtp: function(e) {
                if ("object" == typeof e.inference.result) return JSON.stringify(s(e.inference.result))
            },
            did: function(e) {
                return e.ads.adEventData.dealId
            },
            iu: function(e) {
                var a = e.ads.adEventData.tagURL;
                if (a) {
                    var t = a.match(q);
                    if (t) return t[1]
                }
            }
        },
        Oe = {
            dnt: function(e) {
                return e.browser.storage.doNotTrackProperty
            },
            fv: function(e) {
                return e.browser.pageData.flashVersion
            },
            lng: function(e) {
                return e.browser.langAttr
            },
            pdr: function(e) {
                return e.browser.docReferrer
            }
        };
    Oe.plt = function(e) {
        return function() {
            var e = (window.performance || {}).timing;
            if (e) {
                var a = (e.loadEventEnd || (new Date).getTime()) - e.navigationStart;
                if (0 < a) return 50 * Math.round(a / 50) | 0
            }
            return null
        }()
    }, Oe.sp = function(e) {
        return e.browser.isPageStandalone
    };
    var Fe = {
            cb: function(e) {
                return e.configData.castingBlockPresent
            },
            dd: function(e) {
                return e.configData.displayDescription
            },
            ga: function(e) {
                return e.configData.gaBlockPresent
            },
            pad: function(e) {
                return e.configData.abTestConfig
            },
            pbc: function(e) {
                return e.configData.playbackRateControlsSet
            },
            po: function(e) {
                return e.configData.posterImagePresent
            },
            rf: function(e) {
                return e.configData.relatedPluginFeedFile
            },
            sn: function(e) {
                return e.configData.skinName
            }
        },
        Ne = [Y, $, X, J],
        qe = {
            fed: function(e) {
                return -1 !== Ne.indexOf(e.meta.lastEvent) ? e.related.feedId : ye(e.playlistItemData.item)
            },
            fid: function(e) {
                return -1 !== Ne.indexOf(e.meta.lastEvent) ? e.related.feedInstanceId : be(e.playlistItemData.item)
            },
            ft: function(e) {
                return e.related.feedType
            },
            os: function(e) {
                return e.related.onClickSetting
            },
            fin: function(e) {
                return e.related.feedInterface
            },
            fis: function(e) {
                return e.related.idsShown.join(",")
            },
            fns: function(e) {
                return e.related.idsShown.length
            },
            fpc: function(e) {
                return e.related.pinnedCount
            },
            fpg: function(e) {
                return e.related.page
            },
            fsr: function(e) {
                return e.related.shownReason
            },
            rat: function(e) {
                return e.related.autotimerLength
            },
            fct: function(e) {
                return e.related.advanceTarget
            },
            oc: function(e) {
                return e.related.ordinalClicked
            },
            stid: function(e) {
                return e.related.targetThumbID
            },
            tis: function(e) {
                return e.related.thumbnailIdsShown.join(",") || void 0
            },
            fsid: function(e) {
                return e.related.feedShownId
            },
            vfi: function(e) {
                return e.related.feedWasViewable
            },
            ovt: function(e) {
                return e.related.overlayVideoThumbs
            },
            cme: function(e) {
                return e.playerData.contextualEmbed
            },
            pogt: function(e) {
                return e.browser.pageData.pageOGTitle
            }
        },
        Ue = {};
    Ue.abc = function(e) {
        var a = e.ads.adBreakTracking;
        if (a) return a.adBreakCount
    }, Ue.abt = function(e) {
        var a = e.external.playerAPI.getConfig(),
            t = a.ab;
        if (t && t.tests) return Object.keys(t.tests).map(function(e) {
            return t.getSelected(e, a).join(",")
        }).filter(function(e) {
            return e
        }).join(",")
    }, Ue.aid = function(e) {
        return e.accountData.analyticsID
    }, Ue.ask = function(e) {
        return e.ads.adScheduleId
    }, Ue.at = function(e) {
        return Te()
    }, Ue.c = function(e) {
        return e.ads.adClient
    }, Ue.ccp = function(e) {
        return e.casting
    }, Ue.cp = function(e) {
        return !e.external.playerAPI.getControls()
    }, Ue.d = function(e) {
        return e.configData.autostartConfig
    }, Ue.eb = function(e) {
        return (a = e.external.playerAPI).getAdBlock ? a.getAdBlock() : -1;
        var a
    }, Ue.ed = function(e) {
        return e.accountData.edition
    }, Ue.emi = function(e) {
        return e.staticPlayerData.embedID
    }, Ue.i = function(e) {
        return e.browser.pageData.inIframe
    }, Ue.id = function(e) {
        return e.playlistItemData.mediaId
    }, Ue.lid = function(e) {
        return e.meta.doNotPingBackIDs ? void 0 : e.browser.storage.localID
    }, Ue.lsa = function(e) {
        return e.browser.storage.storageAvailable
    }, Ue.mt = function(e) {
        return e.external.playerAPI.getMute()
    }, Ue.mu = function(e) {
        return function(e, a) {
            var t = void 0;
            if (!e) return null;
            var n = e.sources;
            if (n) {
                for (var r = [], i = n.length; i--;) n[i].file && r.push(n[i].file);
                r.sort(), t = r[0]
            } else t = e.file;
            return a.getAbsolutePath(t)
        }(e.playlistItemData.item, e.external.utils)
    }, Ue.pbd = function(e) {
        return e.playerData.defaultPlaybackRate
    }, Ue.pbr = function(e) {
        return (a = e.external.playerAPI).getPlaybackRate ? Math.round(100 * a.getPlaybackRate()) / 100 : 1;
        var a
    }, Ue.pgi = function(e) {
        return e.browser.pageData.pageViewId
    }, Ue[te] = function(e) {
        return e.configData.playerHosting
    }, Ue.pid = function(e) {
        return e.configData.playerConfigKey
    }, Ue.pii = function(e) {
        return e.playlistItemData.index
    }, Ue.pl = function(e) {
        return e.playerData.playerSize.height
    }, Ue.plc = function(e) {
        return e.external.playerAPI.getPlaylist().length
    }, Ue.pli = function(e) {
        return e.playlistItemData.itemId
    }, Ue.pp = function(e) {
        return m(e.external.playerAPI)
    }, Ue.prc = function(e) {
        return function() {
            var e = window.jwplayer,
                a = 0;
            if ("function" == typeof e)
                for (a = 0; a < 1e3; a++)
                    if (!e(a).uniqueId) return a;
            return a
        }()
    }, Ue.ps = function(e) {
        return e.playerData.playerSize.bucket
    }, Ue.pss = function(e) {
        return e.meta.playbackTracking.playSessionSequence
    }, Ue.pt = function(e) {
        return e.browser.pageData.pageTitle
    }, Ue.pu = function(e) {
        return e.browser.pageData.pageURL
    }, Ue.pv = function(e) {
        return e.staticPlayerData.playerVersion
    }, Ue.pyc = function(e) {
        return e.meta.playbackTracking.playItemCount
    }, Ue.s = function(e) {
        return e.configData.sharingEnabled
    }, Ue.sdk = function(e) {
        return e.staticPlayerData.sdkPlatform
    }, Ue.stc = function(e) {
        return e.meta.setupCount
    }, Ue.sv = function(e) {
        return e.staticPlayerData.sdkVersion
    }, Ue.bun = function(e) {
        return e.staticPlayerData.bundleId
    }, Ue.ifa = function(e) {
        return e.meta.doNotPingBackIDs ? void 0 : e.staticPlayerData.advertisingId
    }, Ue.om = function(e) {
        return e.staticPlayerData.deviceModel
    }, Ue.t = function(e) {
        return De(e.playlistItemData.item)
    }, Ue.tul = function(e) {
        return e.playlistItemData.item.thumbnailUrl
    }, Ue.tv = function(e) {
        return "3.31.0"
    }, Ue.vb = function(e) {
        return e.playerData.viewable
    }, Ue.vi = function(e) {
        var a = e.playerData.playerConfig.visibility;
        return void 0 === a ? a : Math.round(100 * a) / 100
    }, Ue.vl = function(e) {
        return e.external.playerAPI.getVolume()
    }, Ue.wd = function(e) {
        return e.playerData.playerSize.width
    }, Ue.xid = function(e) {
        return e.playlistItemData.externalId
    }, Ue.xav = function(e) {
        return e.meta.xidAlgorithmVersion
    }, Ue.stpe = function(e) {
        return !!e.meta.playbackTracking.sendSetTimeEvents
    }, Ue.ppm = function(e) {
        return e.playerData.playbackMode
    }, Ue.strt = function(e) {
        var a = e.playerData.startup;
        return e.meta.lastEvent === a.dispatchEvent ? a.startupTime : void 0
    }, Ue.tstc = function(e) {
        return e.browser.pageData.testCaseId
    }, Ue.fsm = function(e) {
        return e.external.playerAPI.getFullscreen()
    }, Ue.dpl = function(e) {}, Ue.ss = function(e) {
        return e.meta.sessionSampled || void 0
    }, Ue.amp = function(e) {
        return e.browser.pageData.amp
    }, Ue.jwac = function(e) {
        return e.browser.pageData.jwAmpComponent || void 0
    }, Ue.opu = function(e) {
        return e.browser.pageData.origPageURL
    };
    var Qe = {
        aes: 1,
        widevine: 2,
        playready: 3,
        fairplay: 4
    };
    var _e = {
        interaction: 1,
        autostart: 2,
        repeat: 3,
        external: 4,
        "related-interaction": 1,
        "related-auto": 5,
        playlist: 6,
        viewable: 7
    };
    var ze = {
        none: 1,
        metadata: 2,
        auto: 3
    };

    function Ke(e) {
        return e === 1 / 0 ? 1 / 0 : (e |= 0) <= 0 ? 0 : e < 30 ? 1 : e < 60 ? 4 : e < 180 ? 8 : e < 300 ? 16 : 32
    }

    function We(e) {
        try {
            return e.external.playerAPI.qoe().item.sums.stalled || 0
        } catch (e) {
            return 0
        }
    }
    var He = Math.round,
        $e = {};
    $e.st = function(e) {
        return e.playerData.setupTime
    }, $e.bwe = function(e) {
        return l(e.playerData.playerConfig.bandwidthEstimate)
    }, $e.cct = function(e) {
        return a = e.playlistItemData.item, t = e.external.playerAPI, Array.prototype.some.call(a.tracks || 0, function(e) {
            var a = e.kind;
            return "captions" === a || "subtitles" === a
        }) ? 1 : 1 < t.getCaptionsList().length ? 2 : 0;
        var a, t
    }, $e.drm = function(e) {
        return ((a = e.playlistItemData.drm) ? Qe[a] || 999 : 0) || e.meta.playbackTracking.segmentsEncrypted;
        var a
    }, $e.ff = function(e) {
        return "function" == typeof(a = e.external.playerAPI).qoe ? 10 * Math.round(a.qoe().firstFrame / 10) | 0 : -1;
        var a
    }, $e.l = function(e) {
        return a = e.playlistItemData.duration, (a |= 0) <= 0 || a === 1 / 0 ? 0 : a < 15 ? 1 : a <= 300 ? 2 : a <= 1200 ? 3 : 4;
        var a
    }, $e.vr = function(e) {
        return function(e) {
            if (e.getPlugin) {
                var a = e.getPlugin("vr");
                if (a) switch (a.getMode()) {
                    case "magic-window":
                        return 0;
                    case "cardboard":
                        return 1;
                    case "gear-vr":
                        return 2;
                    default:
                        return null
                }
            }
            return null
        }(e.external.playerAPI)
    }, $e.etw = function(e) {
        return e.meta.playbackTracking.retTimeWatched
    }, $e.ubc = function(e) {
        return He(We(e))
    }, $e.ltc = function(e) {
        return He(function(e) {
            try {
                return e.external.playerAPI.qoe().item.sums.loading || 0
            } catch (e) {
                return 0
            }
        }(e))
    }, $e.ubi = function(e) {
        return He(function(e, a) {
            void 0 === a && (a = e.meta.lastEvent);
            var t = We(e),
                n = e.meta.previousBufferTimes[a];
            void 0 === e.meta.previousBufferTimes[a] && (n = e.meta.previousBufferTimes[a] = t);
            var r = Math.round(t - n);
            return e.meta.previousBufferTimes[a] = t, r
        }(e))
    }, $e.pw = function(e) {
        return 0 | e.meta.playbackTracking.normalizedTime
    }, $e.ti = function(e) {
        return e.meta.playbackTracking.elapsedSeconds
    }, $e.vti = function(e) {
        return e.meta.playbackTracking.viewableElapsedSeconds
    }, $e.ati = function(e) {
        return e.meta.playbackTracking.audibleElapsedSeconds
    }, $e.cvl = function(e) {
        return Math.floor(e.meta.seekTracking.videoStartDragTime)
    }, $e.tvl = function(e) {
        return Math.floor(e.meta.seekTracking.lastTargetTime)
    }, $e.sdt = function(e) {
        return 1 === e.meta.seekTracking.numTrackedSeeks ? 0 : Date.now() - e.meta.seekTracking.dragStartTime
    }, $e.vso = function(e) {
        return Math.floor(e.meta.seekTracking.lastTargetTime) - Math.floor(e.meta.seekTracking.videoStartDragTime)
    }, $e.qcr = function(e) {
        return e.playerData.visualQuality.reason
    }, $e.abm = function(e) {
        return e.playerData.visualQuality.adaptiveBitrateMode
    }, $e.avc = function(e) {
        return e.playerData.numAutoVisualQualityChange
    }, $e.ppr = function(e) {
        return e.meta.playbackTracking.prevPlaybackRate
    }, $e.erc = function(e) {
        return e.playerData.lastErrorCode[e.meta.lastEvent]
    }, $e.pcp = function(e) {
        return He(e.meta.playbackTracking.currentPosition)
    }, $e.stg = function(e) {
        return e.sharing.shareMethod
    }, $e.tps = function(e) {
        return He(e.meta.playbackTracking.playedSecondsTotal)
    }, $e.srf = function(e) {
        return e.sharing.shareReferrer
    }, $e.plng = function(e) {
        return e.playerData.localization.language
    }, $e.pni = function(e) {
        return e.playerData.localization.numIntlKeys
    }, $e.pnl = function(e) {
        return e.playerData.localization.numLocalKeys
    }, $e.pbs = function(e) {
        try {
            return e.external.playerAPI.qoe().item.counts.stalled || 0
        } catch (e) {
            return null
        }
    }, $e.tc = function(e) {
        return e.meta.playbackTracking.thresholdCrossed
    }, $e.flc = function(e) {
        return e.playerData.floatingConfigured
    }, $e.fls = function(e) {
        return e.playerData.playerConfig.floatingState
    }, $e.xam = function(e) {
        return e.playerData.apiTracking.methodCalled
    }, $e.xfmp = function(e) {
        return e.playerData.apiTracking.firstMeaningfulParam
    }, $e.dle = function(e) {
        return e.meta.playbackTracking.latency
    }, $e.cdid = function(e) {
        return e.external.playerAPI.id
    }, $e.pcfg = function(e) {
        return e.playerData.stringifiedSetupConfig
    }, $e.pvta = function(e) {
        return e.meta.playbackTracking.posterVideoThumbAnimated
    }, $e.ovta = function(e) {
        return e.meta.playbackTracking.overlayVideoThumbAnimated
    }, $e.pvt = function(e) {
        return e.meta.playbackTracking.posterVideoThumbnail || void 0
    }, $e.ipv = function(e) {
        return e.playerData.inferencePluginVersion
    };
    var Je = t,
        Xe = a,
        Ye = {};
    Ye.mk = function(e) {
        return function(e, a) {
            if (!e) return null;
            var t = e.sources[0],
                n = t.type;
            if (!n) {
                var r = t.file;
                n = a.extension(r)
            }
            return n
        }(e.playlistItemData.item, e.external.utils)
    }, Ye.pd = function(e) {
        return a = e.playlistItemData.item, t = a.preload, ze[t] || 0;
        var a, t
    }, Ye.vrt = function(e) {
        return function(e) {
            if (!e || !e.stereomode) return null;
            switch (e.stereomode) {
                case "monoscopic":
                    return 0;
                case "stereoscopicTopBottom":
                    return 1;
                case "stereoscopicLeftRight":
                    return 2;
                default:
                    return null
            }
        }(e.playlistItemData.item)
    }, Ye.pr = function(e) {
        return a = e.playlistItemData.playReason, _e[a] || 0;
        var a
    }, Ye.psd = function(e) {
        return -1 !== Ne.indexOf(e.meta.lastEvent) ? e.related.pinSetId : he(e.playlistItemData.item)
    }, Ye.vh = function(e) {
        return e.playerData.visualQuality.height
    }, Ye.vw = function(e) {
        return e.playerData.visualQuality.width
    }, Ye.sbr = function(e) {
        return e.playerData.visualQuality.bitrate
    }, Ye.tb = function(e) {
        return function(e) {
            var a = e.getContainer().querySelector("video"),
                t = 0;
            if (a && (t = a.duration, a.buffered && a.buffered.length)) {
                var n = a.buffered.end(a.buffered.length - 1) || 0;
                return Math.round(10 * n) / 10
            }
            return t = t || Math.abs(e.getDuration()), Math.round(t * e.getBuffer() / 10) / 10
        }(e.external.playerAPI)
    }, Ye.vd = function(e) {
        return e.playlistItemData.duration
    }, Ye.q = function(e) {
        return Ke(e.playlistItemData.duration)
    }, Ye.tt = function(e) {
        return a = e.playlistItemData.item, t = a.tracks, Array.prototype.some.call(t || 0, function(e) {
            return "thumbnails" === e.kind
        });
        var a, t
    }, Ye.vs = function(e) {
        var a = e.meta.playbackEvents;
        return function(e, a, t, n) {
            var r = 3 < arguments.length && void 0 !== n ? n : {};
            if (!a) return null;
            if (t && t.levels && t.levels.length) {
                var i = t.levels[0];
                if (i && "auto" === ("" + i.label).toLowerCase()) return 5
            }
            if (Pe(e.getContainer(), "jw-flag-audio-player")) return 6;
            var o = 0 | r.width,
                d = 0 | r.height;
            return 0 != o || 0 != d ? o <= 320 ? 1 : o <= 640 ? 2 : o <= 1280 ? 3 : 4 : "rtmp" === a.sources[0].type ? 6 : 0
        }(e.external.playerAPI, e.playlistItemData.item, a[Je], a[Xe])
    }, Ye.ptid = function(e) {
        return c(e.playlistItemData.item, "variations.selected.images.id")
    };
    var Ze = B({}, Ue, Fe, Oe, Ye, $e, qe, Le, Ge, Ve);

    function ea(e, r) {
        var a = fe.events[e],
            t = a.parameterGroups.reduce(function(e, a) {
                return e.concat(fe.paramGroups[a].members)
            }, []).concat(a.pingSpecificParameters ? a.pingSpecificParameters : []).map(function(e) {
                return t = r, n = Ze[a = e] ? Ze[a] : function() {
                    t.meta.debug && console.log("No parameter generation function for param " + a)
                }, {
                    code: a,
                    value: n(t)
                };
                var a, t, n
            });
        return {
            event: a.code,
            bucket: a.bucket,
            parameters: t,
            pingDestination: a.pingDestination
        }
    }
    var aa = {
        missingMediaOrExternalID: function(e) {
            return !e.meta.sessionSampled && (!e.playlistItemData.mediaId && !e.playlistItemData.externalId)
        },
        missingAdScheduleID: function(e) {
            return !e.meta.sessionSampled && !e.ads.adScheduleId
        },
        missingFeedID: function(e) {
            return !e.related.feedId
        }
    };
    var ta = {
            main: "prd.jwpltx.com/v1",
            meta: "ping-meta-prd.jwpltx.com/v1"
        },
        na = function(e, a, t, n) {
            var r = [{
                    code: re,
                    value: e
                }, {
                    code: ne,
                    value: Math.random().toFixed(16).substr(2, 16)
                }].concat(t),
                i = [];
            r.forEach(function(e) {
                var a = e.value;
                !0 !== a && !1 !== a || (a = a ? 1 : 0), null != a && i.push(e.code + "=" + encodeURIComponent(a))
            });
            var o = "file:" === window.location.protocol ? "https:" : "",
                d = i.join("&"),
                l = "h=" + function(e) {
                    var a = 0;
                    if (!(e = decodeURIComponent(e)).length) return a;
                    for (var t = 0; t < e.length; t++) {
                        a = (a << 5) - a + e.charCodeAt(t), a &= a
                    }
                    return a
                }(d) + "&" + d;
            return true;
        },
        ra = function(e) {
            e.trackingState.pageLoaded = !0;
            for (var a = e.trackingState.queue.length; a--;) da(e, e.trackingState.queue.shift());
            window.removeEventListener("load", e.trackingState.boundFlushQueue)
        };

    function ia(e) {
        var a = e.external.playerAPI,
            t = "complete" === (a.getContainer().ownerDocument || window.document).readyState;
        (e.trackingState.pageLoaded = t) || (e.trackingState.boundFlushQueue = ra.bind(null, e), window.addEventListener && window.addEventListener("load", e.trackingState.boundFlushQueue), setTimeout(e.trackingState.boundFlushQueue, 5e3))
    }

    function oa(e, a) {
        var t = a.event,
            n = a.bucket,
            r = a.parameters,
            i = a.pingDestination,
            o = na(t, n, r, i),
            d = !e.trackingState.pageLoaded;
        if (d && (t === oe || t === le || t === de)) ra(e);
        else if (d) return void e.trackingState.queue.push(o);
        da(e, o)
    }

    function da(e, a) {
        var t = new Image,
            n = void 0;
        try {
            n = Date.now()
        } catch (e) {}
        t.src = a + "&" + ie + "=" + n;
        for (var r = e.trackingState.images, i = r.length; i-- && (r[i].width || r[i].complete);) r.length = i;
        if (r.push(t), e.meta.debug && e.trackingState.onping) try {
            e.trackingState.onping.call(null, a)
        } catch (e) {}
    }
    var la = {
        delaySend: !1,
        returnURL: !1
    };

    function ua(t, e, a, n) {
        var r = 2 < arguments.length && void 0 !== a ? a : "jwplayer6",
            i = 3 < arguments.length && void 0 !== n ? n : {};
        i = B({}, la, i), Me(t, e, r);
        var o = u(e, r),
            d = fe.events[o];
        if (d && !(d.filters || []).map(function(e) {
                return a = t, aa[e](a);
                var a
            }).some(function(e) {
                return !!e
            })) {
            var l = ea(o, t);
            return i.delaySend ? oa.bind(null, t, l) : i.returnURL ? na(l.event, l.bucket, l.parameters, l.pingDestination) : void oa(t, l)
        }
    }

    function ca(e) {
        if (!e.bidders) return {};
        var r = {},
            i = void 0;
        e.bidders.forEach(function(e) {
            var t, n, a = e.name;
            r[a.toLowerCase()] = (t = e, n = {}, N.forEach(function(e) {
                var a;
                "result" === e ? n.result = D[t[e]] : B(n, void 0 !== t[e] ? ((a = {})[e] = t[e], a) : void 0), t.code && -1 !== ["error", "invalid"].indexOf(t.result) && (n.errorCode = t.code)
            }), n), e.errorCode && !i && (i = e.errorCode)
        });
        var a = e.floorPriceCurrency;
        return B({
            mediationLayer: F[e.mediationLayerAdServer],
            floorPriceCents: e.floorPriceCents,
            bidders: r,
            bidTimeout: e.bidTimeout
        }, void 0 !== i ? {
            errorCode: i
        } : void 0, a ? {
            floorPriceCurrency: a
        } : void 0)
    }

    function sa(t, e) {
        var n = t.ads.adEventData; - 1 === t.ads.adClient && e && (t.ads.adClient = M(e.client)), e.sequence !== n.podIndex && (delete n.timeAdLoading, delete n.adCreativeType), pa(n, e, "offset"), pa(n, e, "witem"), pa(n, e, "wcount"), pa(n, e, "skipoffset"), pa(n, e, "linear", function(e, a) {
            return a === e
        }), pa(n, e, "adposition", function(e, a) {
            return {
                pre: 0,
                mid: 1,
                post: 2,
                api: 3
            } [a]
        }), pa(n, e, "creativetype", function(e, a) {
            var t = "";
            switch (a) {
                case "static":
                    t = "image/unknown";
                    break;
                case "video":
                    t = "video/unknown";
                    break;
                case "vpaid":
                case "vpaid-swf":
                    t = "application/x-shockwave-flash";
                    break;
                case "vpaid-js":
                    t = "application/javascript";
                    break;
                default:
                    t = a || t
            }
            return n.adCreativeType = t
        }), pa(n, e, "tag", function(e, a) {
            return n.tagdomain = function(e) {
                if (e) {
                    var a = e.match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/));
                    if (a && 1 < a.length) return a[1]
                }
                return ""
            }(t.external.playerAPI.utils.getAbsolutePath(a)), a
        }), pa(n, e, "description"), pa(n, e, "creativeAdId"), pa(n, e, "placement"), pa(n, e, "advertiser"), pa(n, e, "advertiserId"), e.timeLoading && (n.timeAdLoading = 10 * Math.round(e.timeLoading / 10)), e.universalAdId ? n.universalAdId = e.universalAdId.map(function(e) {
            if ("unknown" !== e.universalAdIdRegistry) return e.universalAdIdRegistry + "." + e.universalAdIdValue
        }).filter(function(e) {
            return !!e
        }).join(",") : delete n.universalAdId, n.mediaFileCompliance = e.mediaFileCompliance, n.categories = e.categories, n.adSystem = e.adsystem || n.adSystem, n.vastVersion = e.vastversion || n.vastVersion, n.podIndex = e.sequence || n.podIndex, n.podCount = e.podcount || n.podCount, n.tagURL = e.tag || n.tagURL || e.vmap, n.preload = "boolean" == typeof e.preloadAds ? e.preloadAds : n.preload, n.adPlayId = e.adPlayId || n.adPlayId, n.adBreakId = e.adBreakId || n.adBreakId, n.adVastId = e.adId || n.adVastId, n.duration = e.duration || n.duration, n.adTitle = e.adtitle || n.adTitle, n.jwpseg = e.jwpseg, n.timeForVPBCache = e.timeForVPBCache || n.timeForVPBCache, n.dealId = e.dealId || n.dealId;
        var a = void 0;
        if (a = "googima" === e.client ? (n.creativeId = c(e, "ima.ad.g.creativeId"), c(e, "ima.ad.g.mediaUrl")) : (n.creativeId = c(e, "creativeId"), c(e, "mediafile.file")), n.adMediaFileURL = "string" == typeof a ? a.substring(0, 2500) : a, e.item) {
            var r = we(e.item);
            n.targetMediaId = r !== t.playlistItemData.mediaId ? r : null
        }
        t.ads.headerBiddingData = ca(e)
    }

    function pa(e, a, t, n) {
        var r = 3 < arguments.length && void 0 !== n ? n : fa;
        if (a.hasOwnProperty(t)) {
            var i = r;
            e[t] = i(t, a[t])
        }
    }

    function fa(e, a) {
        return a
    }

    function ma(e, a) {
        e.meta.playerState !== a && (e.meta.playerStateDuration = Date.now()), e.meta.playerState = a
    }

    function ga(e, a) {
        null === e.previousTime && (e.previousTime = a);
        var t = a - e.previousTime;
        return e.previousTime = a, t = Math.min(Math.max(0, t), 4), e.playedSeconds = e.playedSeconds + t, t
    }

    function va(e, a) {
        var t = e.ads.adEventData,
            n = e.ads.currentQuartile;
        n > t.previousQuartile && (sa(e, a), ua(e, "v", "clienta"), t.previousQuartile = n)
    }
    var ya = {
        adComplete: function(e, a) {
            e.ads.currentQuartile = 4, va(e, a)
        },
        adError: function(e, a) {
            "object" == typeof a && a && (e.playerData.lastErrorCode.ae = a.code || 1, e.ads.jwAdErrorCode = a.adErrorCode, 51901 === a.adErrorCode ? e.ads.errorMessage = "string" == typeof a.message ? a.message.substring(0, 100) : void 0 : e.ads.errorMessage = void 0, e.ads.timeout = a.timeout), ua(e, "ae", "clienta")
        },
        adTime: function(e, a) {
            var t = e.ads.adEventData,
                n = t.position = a.position;
            t.duration = t.duration || a.duration;
            var r = e.ads.adPlaybackTracking,
                i = e.ads.pingLimiters;
            !n || t.position > t.duration || (function(e, a, t) {
                var n = ga(a, t),
                    r = e.ads.pingLimiters.visibleEvent.canSendPing(ce) || e.ads.pingLimiters.visibleEvent.canSendPing(ue);
                if (e.playerData.viewable) {
                    if (r) 1 === e.external.playerAPI.getConfig().visibility ? (a.consecutiveVisibleSeconds += n, a.totalVisibleSeconds += n, a.maxConsecutiveVisibleSeconds = Math.max(a.maxConsecutiveVisibleSeconds, a.consecutiveVisibleSeconds)) : (a.maxConsecutiveVisibleSeconds = Math.max(a.maxConsecutiveVisibleSeconds, a.consecutiveVisibleSeconds), a.consecutiveVisibleSeconds = 0);
                    a.viewablePlayedSeconds = a.viewablePlayedSeconds + n
                }!e.playerData.muted && 0 < e.playerData.volume && (a.audiblePlayedSeconds = a.audiblePlayedSeconds + n)
            }(e, r, n), i.visibleEvent.canSendPing(ce) && r.totalVisibleSeconds >= Math.floor(t.duration / 2) && (ua(e, ce, "clienta"), i.visibleEvent.setPingSent(ce)), i.visibleEvent.canSendPing(ue) && 2 <= r.maxConsecutiveVisibleSeconds && (ua(e, ue, "clienta"), i.visibleEvent.setPingSent(ue)), e.ads.currentQuartile = Math.min(3, Math.floor((4 * t.position + .05) / t.duration)), va(e, a))
        },
        adSkipped: function(e, a) {
            e.ads.watchedPastSkipPoint = a.watchedPastSkipPoint, ua(e, "s", "clienta")
        },
        adImpression: function(e, a) {
            g(e, oe);
            var t = e.ads.adPlaybackTracking;
            t.audiblePlayedSeconds = 0, t.viewablePlayedSeconds = 0, t.playedSeconds = 0, t.previousTime = null, ua(e, oe, "clienta")
        },
        adBreakEnd: function(e, a) {
            e.ads.adEventData = B({}, G)
        }
    };

    function ba(i) {
        var e = i.external.playerAPI;
        e.on(O.join(" "), function() {
            ma(i, "ad-break"), i.ads.adBreakTracking && i.ads.adBreakTracking.shouldTrack && (i.ads.adBreakTracking.shouldTrack = !1, i.ads.adBreakTracking.adBreakCount++)
        }), e.on("adClick adRequest adMeta adImpression adComplete adSkipped adError adTime adBidRequest adBidResponse adStarted adLoaded adViewableImpression adBreakEnd", function(e) {
            var a, t, n, r = i.ads.adEventData;
            a = r, "adClick" === (t = e).type || a && a.adId === t.id && -1 !== t.id || (i.ads.adEventData = B({
                adId: e.id
            }, G), i.ads.pingLimiters.visibleEvent.resetAll(), i.ads.adPlaybackTracking = B({}, S)), n = e, -1 === E.indexOf(n.type) && sa(i, e), e.type in ya ? ya[e.type](i, e) : -1 === P.indexOf(e.type) && ua(i, T[e.type], "clienta")
        })
    }

    function ha(a) {
        function e() {
            g(a, Z);
            var e = ua(a, Z, "jwplayer6", {
                returnURL: !0
            });
            void 0 !== e && navigator.sendBeacon(e)
        }
        window.addEventListener("unload", e), a.external.playerAPI.on("remove", function() {
            g(a, Z), window.removeEventListener("unload", e), a.meta.playerRemoved = !0, ua(a, Z, "jwplayer6")
        })
    }
    var ka = ["predictions", "segments"];
    var wa = 1e3;

    function Da(e) {
        var a = e.meta.seekTracking;
        if (Sa(a)) {
            clearTimeout(a.seekDebounceTimeout);
            var t = ua(e, "vs", "jwplayer6", {
                delaySend: !0
            });
            a.seekDebounceTimeout = setTimeout(function() {
                var e;
                t && t(), (e = a).videoStartDragTime = 0, e.dragStartTime = 0, e.seekDebounceTimeout = null, e.lastTargetTime = 0, e.numTrackedSeeks = 0
            }, wa)
        }
    }

    function Sa(e) {
        return 0 < e.numTrackedSeeks
    }
    var Ia = a,
        Ta = e,
        Pa = n;

    function Ea(e) {
        e.meta.playbackTracking.playItemCount++, ua(e, "s")
    }

    function Ca(d, l) {
        return function(e) {
            var a = d.meta.playbackEvents,
                t = d.playlistItemData,
                n = d.meta.playbackTracking,
                r = d.external.playerAPI,
                i = a[l];
            if (l === Ia) {
                var o = e.segment;
                o && (n.segmentReceived = !0, n.segmentsEncrypted = o.encryption), t.drm = e.drm || ""
            }
            a[l] = e, l === Ta && (i || (n.playedSeconds = 0, n.viewablePlayedSeconds = 0, n.audiblePlayedSeconds = 0, n.playedSecondsTotal = 0), n.previousTime = h(r)), l === Pa && (g(d, Q), "flash_adaptive" === m(r) ? !d.meta.playbackSent && n.segmentReceived && (d.meta.playbackSent = !0, n.segmentReceived = !1, Ea(d)) : d.meta.playbackSent || (d.meta.playbackSent = !0, Ea(d)))
        }
    }

    function Aa(e) {
        var a = e.meta.playbackTracking,
            t = a.playedSeconds,
            n = a.viewablePlayedSeconds,
            r = a.audiblePlayedSeconds;
        a.playedSeconds = 0, a.viewablePlayedSeconds = 0;
        var i = t + .5 | (a.audiblePlayedSeconds = 0);
        a.elapsedSeconds = i;
        var o = n + .5 | 0;
        a.viewableElapsedSeconds = o;
        var d = r + .5 | 0;
        a.audibleElapsedSeconds = d, 0 < i && ua(e, z)
    }

    function xa(e, a, t, n) {
        a < n && n <= a + t && (e.meta.playbackTracking.retTimeWatched = n, ua(e, "ret"))
    }

    function ja(e, a, t) {
        var n, r, i, o = K + "-" + t;
        n = a, r = t, i = o, e.meta.pingLimiters.playlistItem.canSendPing(i) && Math.floor(n) === r && (e.meta.playbackTracking.thresholdCrossed = t, ua(e, K), e.meta.pingLimiters.playlistItem.setPingSent(o))
    }

    function Ba(e, a, t) {
        var n, r;
        2 < arguments.length && void 0 !== t && t ? Da(e) : (n = e.meta.seekTracking, r = a, Sa(n) || (n.videoStartDragTime = r.position, n.dragStartTime = Date.now()), n.numTrackedSeeks++, n.lastTargetTime = r.offset)
    }

    function Ra(e, a, t) {
        var n, r;
        e.playerData.lastErrorCode[a] = t.code, g(e, pe), e.meta.eventPreAbandonment = u(a, "error"), e.errors.numberEventsSent < e.errors.NUM_ERRORS_PER_SESSION && (r = a, "number" == typeof(n = e).playerData.lastErrorCode[r] || Math.random() < n.errors.SAMPLE_RATE) && (e.errors.numberEventsSent += 1, ua(e, a, U))
    }
    var Ma = n,
        Va = t,
        La = a,
        Ga = e;

    function Oa(e) {
        var a = e.meta;
        a.playbackEvents = {}, a.playbackSent = !1, a.playbackTracking.trackingSegment = 0, a.pingLimiters.playlistItem.resetAll(), a.playbackTracking.posterVideoThumbAnimated = void 0, a.playbackTracking.overlayVideoThumbAnimated = void 0, e.playerData.numAutoVisualQualityChange = 0;
        var t = e.playerData.startup;
        t.initialTime = null, t.startupTime = null, t.dispatchEvent = null
    }

    function Fa(g) {
        var e, a, v = g.external.playerAPI,
            i = function(e, a) {
                e.playlistItemData.playReason = a.playReason || "", e.playerData.startup.initialTime = Date.now(), ua(e, "pa")
            }.bind(null, g),
            t = function(e, a) {
                var t = e.playlistItemData.mediaId;
                t && t === we(a.item) && (e.playerData.lastErrorCode[H] = a.code, ua(e, "paf", "error"))
            }.bind(null, g);
        v.on("idle buffer play pause complete error", function(e) {
            ma(g, e.type)
        }), v.on("idle", Oa.bind(null, g)), v.on("ready", function(e) {
            g.playlistItemData.ready = B({}, e), g.playerData.viewable = v.getViewable(), g.playerData.muted = v.getMute(), g.playerData.volume = v.getVolume();
            try {
                var a = v.getPlugin("inference");
                a && a.version && (g.playerData.inferencePluginVersion = a.version)
            } catch (e) {}
        }), v.on("playlistItem", function(e) {
            var a = g.playlistItemData;
            a.drm = "", 0 !== g.meta.playbackTracking.playSessionSequence && (a.itemId = R(12)), g.meta.playbackTracking.playSessionSequence++, a.index = e.index;
            var t, n, r = e.item || f(v);
            r && (a.mediaId = we(r), Ie(g, r)), a.ready && (g.meta.playbackTracking.posterVideoThumbnail = Se(e.item), t = g, n = a.ready, t.playerData.setupTime = -1, n && n.setupTime && (t.playerData.setupTime = 10 * Math.round(n.setupTime / 10) | 0), ua(t, "e"), a.item = null, a.ready = null), v.off("beforePlay", i), v.once("beforePlay", i), Oa(g), g.meta.playbackTracking.segmentReceived = g.meta.playbackTracking.segmentsEncrypted = !1
        }), v.on("playAttemptFailed", t), v.on("meta", Ca(g, La)), v.on("levels", Ca(g, Va)), v.on("play", Ca(g, Ga)), v.on("firstFrame", Ca(g, Ma)), v.on("time", function(e) {
            var a = g.meta.playbackEvents,
                t = g.meta.playbackTracking,
                n = "number" == typeof e.currentTime ? e.currentTime : h(v);
            t.currentPosition = n;
            var r = e.duration;
            if (n)
                if (g.meta.seekTracking.dragStartTime) t.previousTime = n;
                else {
                    1 < n && (a[Va] || Ca(g, Va)({}));
                    var i, o, d, l = Ke(r),
                        u = (i = n, d = l, (o = r) === 1 / 0 ? null : i / (o / d) + 1 | 0);
                    0 === t.trackingSegment && (t.trackingSegment = u);
                    var c, s, p, f = (c = g, p = ga(s = t, n), c.playerData.viewable && (s.viewablePlayedSeconds = s.viewablePlayedSeconds + p), !c.playerData.muted && 0 < c.playerData.volume && (s.audiblePlayedSeconds = s.audiblePlayedSeconds + p), p);
                    if (xa(g, t.playedSecondsTotal, f, 10), xa(g, t.playedSecondsTotal, f, 30), xa(g, t.playedSecondsTotal, f, 60), t.playedSecondsTotal = t.playedSecondsTotal + f, !0 === t.sendSetTimeEvents && (ja(g, n, 3), ja(g, n, 10), ja(g, n, 30)), r <= 0 || r === 1 / 0) t.playedSeconds >= b && (t.latency = e.latency, Aa(g));
                    else if (u === t.trackingSegment + 1) {
                        var m = y * t.trackingSegment / l;
                        if (l < u) return;
                        t.normalizedTime = m, Aa(g), t.trackingSegment = 0
                    }
                }
        }), v.on("seek", function(e) {
            g.meta.playbackTracking.previousTime = h(v), g.meta.playbackTracking.trackingSegment = 0, Ba(g, e)
        }), v.on("seeked", function(e) {
            Ba(g, e, !0)
        }), v.on("complete", function() {
            var e = g.meta.playbackTracking,
                a = w(g);
            if (!(a <= 0 || a === 1 / 0)) {
                Ke(a);
                e.normalizedTime = y, Aa(g), e.playedSecondsTotal = 0
            }
        }), v.on("cast", function(e) {
            g.casting = !!e.active
        }), v.on("playbackRateChanged", function(e) {
            ua(g, "pru"), g.meta.playbackTracking.prevPlaybackRate = e.playbackRate
        }), v.on("visualQuality", function(e) {
            "auto" === e.reason && (g.playerData.numAutoVisualQualityChange += 1);
            var a, t, n = V(v);
            a = n, t = !1, k.width === a.width && k.height === a.height || (t = !0), k = a, t && -1 === r.indexOf(n.reason) && ua(g, "vqc")
        }), v.on(o.join(" "), function() {
            g.ads.adBreakTracking && (g.ads.adBreakTracking.shouldTrack = !0)
        }), v.on("error", Ra.bind(null, g, pe)), v.on("setupError", Ra.bind(null, g, se)), v.on("autostartNotAllowed", function() {
            ua(g, _)
        }), v.on("viewable", function(e) {
            g.playerData.viewable = e.viewable
        }), v.on("mute", function(e) {
            g.playerData.muted = e.mute
        }), v.on("volume", function(e) {
            g.playerData.volume = e.volume
        }), v.on("captionsChanged", function(e) {
            0 !== e.track && 0 === g.playerData.captionsIndex && ua(g, ae), g.playerData.captionsIndex = e.track
        }), v.on("videoThumbFirstFrame", function(e) {
            g.meta.playbackTracking.posterVideoThumbAnimated = !0
        }), v.on("inference", function(e) {
            var a, t, n;
            a = g, t = e, n = ka.reduce(function(e, a) {
                return t[a] && (e[a] = t[a]), e
            }, {}), a.inference.result = n
        }), Oa(g), a = z, (e = g).meta.previousBufferTimes[a] = We(e)
    }

    function Na(e, a) {
        e.related.feedId = ye(a), e.related.feedInstanceId = be(a), e.related.feedType = ke(a, "kind"), e.related.feedShownId = a.feedShownId, e.related.onClickSetting = "onclick" in a ? "play" === a.onclick ? 1 : 0 : void 0, e.related.feedInterface = a.ui;
        var t = a.itemsShown || [],
            n = 0,
            r = [],
            i = [],
            o = [],
            d = !0,
            l = !1;
        t.forEach(function(e) {
            he(e) && n++, r.push(we(e));
            var a = Se(e) ? "1" : "0";
            l || "1" != a || (l = !0), o.push(a);
            var t = c(e, "variations.selected.images.id");
            t && (d = !1), i.push(t || "null")
        }), e.related.thumbnailIdsShown = d ? [] : i, e.related.idsShown = r, e.related.pinnedCount = n, e.related.page = a.page, e.related.autotimerLength = a.autoTimer, e.related.pinSetId = he(a.target), e.related.advanceTarget = we(a.target), e.related.targetThumbID = c(a.target, "variations.selected.images.id"), e.related.overlayVideoThumbs = l ? o.join(",") : void 0, e.related.ordinalClicked = "position" in a ? a.position + 1 : a.index
    }

    function qa(e, a, t) {
        Na(e, a), ua(e, t)
    }

    function Ua(a) {
        var e = a.external.playerAPI.getPlugin("related");
        e && (e.on("playlist", function(e) {
            null !== e.playlist && qa(a, e, $)
        }), e.on("feedShown", function(e) {
            ma(a, "recs-overlay"), a.related.shownReason = e.reason, a.related.feedWasViewable = e.viewable, qa(a, e, J)
        }), e.on("feedClick", function(e) {
            qa(a, e, X)
        }), e.on("feedAutoAdvance", function(e) {
            qa(a, e, Y)
        }), e.on("videoThumbFirstFrame", function(e) {
            a.meta.playbackTracking.overlayVideoThumbAnimated = !0
        }), a.related.relatedSetUp = !0)
    }

    function Qa(t) {
        t.external.playerAPI.getPlugin && (t.external.playerAPI.on("ready", function() {
            var a, e;
            Ua(t), (e = (a = t).external.playerAPI).on("playlistItem", function() {
                a.related.sendHoverPing = !0, a.related.nextShownReason = null, a.related.shownReason = null
            }), e.on("nextShown", function(e) {
                a.related.nextShownReason = e.reason, a.related.shownReason = e.reason, ma(a, "recs-overlay"), "hover" === e.reason && !a.related.sendHoverPing || (a.related.sendHoverPing = !1, qa(a, e, J))
            }), e.on("nextClick", function(e) {
                a.related.nextShownReason && qa(a, e, X)
            }), e.on("nextAutoAdvance", function(e) {
                qa(a, e, Y)
            })
        }), t.external.playerAPI.on("relatedReady", function() {
            t.related.relatedSetUp || Ua(t)
        }))
    }
    var _a = {
        facebook: "fb",
        twitter: "twi",
        email: "em",
        link: "cl",
        embed: "ceb",
        pinterest: "pin",
        tumblr: "tbr",
        googleplus: "gps",
        reddit: "rdt",
        linkedin: "lkn",
        custom: "cus"
    };

    function za(e) {
        e.external.playerAPI.on("ready", function() {
            ! function(a) {
                var e = a.external.playerAPI;
                if (e.getPlugin) {
                    var t = e.getPlugin("sharing");
                    t && t.on("click", function(e) {
                        a.sharing.shareMethod = _a[e.method] || _a.custom, ua(a, W)
                    })
                }
            }(e)
        })
    }

    function Ka(e) {
        var a;
        a = e, "function" == typeof navigator.sendBeacon && ha(a), Fa(e), ba(e), Qa(e), za(e)
    }
    var Wa = .01;
    var Ha, $a = (Ha = function() {
            var e = navigator.plugins;
            if (e && "object" == typeof e["Shockwave Flash"]) {
                var a = e["Shockwave Flash"].description;
                if (a) return a
            }
            if (void 0 !== window.ActiveXObject) try {
                var t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (t) {
                    var n = t.GetVariable("$version");
                    if (n) return n
                }
            } catch (e) {}
            return ""
        }().replace(/\D+(\d+\.?\d*).*/, "$1"), function() {
            return Ha
        }),
        Ja = R(12);

    function Xa(e) {
        if (e) return {
            pageViewId: Ja
        };
        var a, t = window.top !== window.self,
            n = function(e, a, t) {
                var n = "",
                    r = "",
                    i = "",
                    o = !1;
                if (e) {
                    n = function(e) {
                        var a = e.match(/^(https?:\/\/).*\.(?:ampproject\.org|bing-amp\.com)\/(?:.\/)?(?:.\/)?(.*)$/);
                        if (a && 1 < a.length) return "" + a[1] + a[2];
                        var t = e.match(/^(https?:\/\/.*)\.(?:cdn\.ampproject\.org|bing-amp\.com)$/);
                        if (t && 1 < t.length) return ("" + t[1]).replace(/([^-])(\-)([^-])/g, "$1.$3").replace(/\-\-/g, "-");
                        return e
                    }(r = a), o = n !== a;
                    try {
                        i = t.document.title;
                        var d = t.location.href;
                        r = r || d, n = n || d
                    } catch (e) {}
                }
                return {
                    pageURL: n,
                    origPageURL: r,
                    amp: o,
                    pageTitle: i
                }
            }(t, document.referrer, window.top),
            r = document.querySelector('meta[property="og:title"]'),
            i = void 0;
        return r && (i = r.getAttribute("content")), {
            pageURL: n.pageURL || window.location.href,
            origPageURL: n.amp ? n.origPageURL : void 0,
            pageTitle: n.pageTitle || document.title,
            inIframe: t,
            flashVersion: $a(),
            pageViewId: Ja,
            pageOGTitle: i,
            testCaseId: void 0,
            amp: n.amp,
            jwAmpComponent: (a = document.location.search, /isAMP/.test(a))
        }
    }
    var Ya = void 0;
    try {
        Ya = window.localStorage
    } catch (e) {}
    var Za = (et.prototype.canSendPing = function(e) {
        return !this.pingTracker[e]
    }, et.prototype.setPingSent = function(e) {
        this.pingTracker[e] = !0
    }, et.prototype.resetAll = function() {
        this.pingTracker = {}
    }, et.prototype.resetKey = function(e) {
        delete this.pingTracker[e]
    }, et);

    function et() {
        ! function(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }(this, et), this.pingTracker = {}
    }
    var at = ["1", "yes", "true"];
    var tt = 0;

    function nt(e, a, t) {
        var n, r = a.sdkplatform ? parseInt(a.sdkplatform, 10) : j,
            i = e.getConfig(),
            o = (i || {}).advertising || {},
            d = tt += 1,
            l = "doNotTrack" in navigator || "doNotTrack" in window || "msDoNotTrack" in navigator ? navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack : "unsupported",
            u = null == (n = l) || -1 === at.indexOf(n.toString()),
            c = void 0,
            s = void 0;
        if (u) {
            var p = function() {
                if (!Ya) return {
                    localID: null,
                    storageAvailable: "fail"
                };
                var e = Ya.jwplayerLocalId;
                if (e) return {
                    localID: e,
                    storageAvailable: "read"
                };
                try {
                    return Ya.jwplayerLocalId = R(12), {
                        localID: Ya.jwplayerLocalId,
                        storageAvailable: "set"
                    }
                } catch (e) {
                    return {
                        localID: null,
                        storageAvailable: "fail"
                    }
                }
            }();
            c = p.localID, s = p.storageAvailable
        } else Ya && Ya.removeItem("jwplayerLocalId");
        var f, m = (f = document.querySelector("html")) ? f.getAttribute("lang") : null,
            g = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches || !0 === window.navigator.standalone,
            v = function() {
                try {
                    if (window.top !== window.self) return window.top.document.referrer
                } catch (e) {
                    return null
                }
                return document.referrer
            }(),
            y = i.defaultPlaybackRate || 1,
            b = M(o.client);
        e.getPlugin && e.getPlugin("related");
        var h, k, w, D, S, I, T, P, E = Math.random() <= Wa;
        return {
            external: {
                playerAPI: e,
                div: t,
                utils: e.utils
            },
            playerData: {
                setupTime: -1,
                startup: {
                    initialTime: null,
                    startupTime: null,
                    dispatchEvent: null
                },
                visualQuality: V(e),
                numAutoVisualQualityChange: 0,
                lastErrorCode: {},
                defaultPlaybackRate: y,
                playerConfig: {
                    visibility: -1,
                    bandwidthEstimate: -1,
                    floatingState: !1
                },
                floatingConfigured: !(!i.floating || i.floating.disabled),
                playerSize: {
                    width: 0,
                    height: 0,
                    bucket: 0
                },
                localization: {
                    language: i.language,
                    numIntlKeys: "object" == typeof i.intl ? Object.keys(i.intl).length : null,
                    numLocalKeys: "object" == typeof i.localization ? Object.keys(i.localization).length : null
                },
                contextualEmbed: !!i.contextual,
                playbackMode: null,
                stringifiedSetupConfig: L(e),
                captionsIndex: 0
            },
            staticPlayerData: (I = a, T = r, P = {
                playerVersion: e.version.split("+")[0],
                sdkPlatform: I.sdkplatform || j,
                embedID: R(12)
            }, T && (P.sdkVersion = I.iossdkversion, P.bundleId = I.bundleId, P.advertisingId = I.advertisingId, P.deviceModel = I.deviceModel), P),
            casting: !1,
            accountData: function(e, a) {
                var t = 0,
                    n = void 0;
                if (e) {
                    var r = new a(e),
                        i = r.edition();
                    (t = A[i] || 0) !== C && (n = r.token())
                }
                return {
                    analyticsID: n = n || "_",
                    edition: t
                }
            }(i.key, e.utils.key),
            configData: (h = i, w = window.jwplayer && window.jwplayer.defaults || {}, D = h.related, S = {
                playerHosting: h[te] || w[te] || 0,
                playerConfigKey: h.pid,
                abTestConfig: h.pad,
                skinName: h.skin,
                advertisingBlockType: (k = h).advertising ? k.advertising.outstream ? 2 : 1 : 0,
                sharingEnabled: !!h.sharing,
                castingBlockPresent: !!h.cast,
                gaBlockPresent: !!h.ga,
                autostartConfig: !!h.autostart,
                displayDescription: !1 !== h.displaydescription,
                posterImagePresent: !!h.image,
                playbackRateControlsSet: !!h.playbackRateControls
            }, h.autostart in x && (S.autostartConfig = x[h.autostart]), D && (S.relatedPluginFeedFile = D.recommendations || D.file), S),
            browser: {
                langAttr: m,
                isPageStandalone: g,
                docReferrer: v,
                storage: {
                    localID: c,
                    storageAvailable: s,
                    doNotTrackProperty: l
                },
                pageData: Xa(r),
                allowUserTracking: u
            },
            meta: {
                debug: !0 === a.debug,
                doNotPingBackIDs: !0 === i.doNotTrackCookies,
                setupCount: tt,
                nthPlayer: d,
                playbackEvents: {},
                playbackSent: void 0,
                playbackTracking: {
                    trackingSegment: void 0,
                    playedSeconds: 0,
                    viewablePlayedSeconds: 0,
                    audiblePlayedSeconds: 0,
                    playedSecondsTotal: 0,
                    previousTime: null,
                    segmentReceived: !1,
                    segmentsEncrypted: !1,
                    playItemCount: 0,
                    playSessionSequence: 0,
                    prevPlaybackRate: y,
                    retTimeWatched: 0,
                    normalizedTime: -1,
                    elapsedSeconds: 0,
                    viewableElapsedSeconds: 0,
                    audibleElapsedSeconds: 0,
                    currentPosition: 0,
                    thresholdCrossed: 0,
                    sendSetTimeEvents: i.setTimeEvents || !1
                },
                bufferedPings: [],
                seekTracking: {
                    numTrackedSeeks: 0,
                    videoStartDragTime: 0,
                    dragStartTime: 0,
                    seekDebounceTimeout: null,
                    lastTargetTime: 0
                },
                previousBufferTimes: {},
                lastEvent: "",
                lastBucket: "",
                eventPreAbandonment: void 0,
                playerState: "idle",
                playerStateDuration: 0,
                playerRemoved: !1,
                pingLimiters: {
                    playlistItem: new Za
                },
                sessionSampled: E
            },
            playlistItemData: {
                ready: void 0,
                item: {},
                drm: "",
                index: 0,
                itemId: R(12),
                mediaId: "",
                playReason: "",
                duration: 0
            },
            related: {
                shownReason: null,
                nextShownReason: null,
                sendHoverPing: null,
                feedId: null,
                feedInstanceId: null,
                feedType: null,
                onClickSetting: -1,
                feedInterface: null,
                idsShown: [],
                thumbnailIdsShown: [],
                pinnedCount: -1,
                page: -1,
                autotimerLength: -1,
                pinSetId: -1,
                advanceTarget: null,
                ordinalClicked: -1,
                relatedSetUp: !1
            },
            sharing: {
                shareMethod: null,
                shareReferrer: function(e) {
                    if (!e) return null;
                    var a = e.match(/[?&]jwsource=([^&]+)/);
                    return a ? decodeURIComponent(a[1]) : null
                }(window.location.search)
            },
            ads: {
                adEventData: B({}, G),
                advertisingConfig: o,
                adClient: b,
                adScheduleId: o.adscheduleid,
                adBreakTracking: -1 !== b ? {
                    shouldTrack: !1,
                    adBreakCount: 0
                } : null,
                adPlaybackTracking: {
                    consecutiveVisibleSeconds: 0,
                    maxConsecutiveVisibleSeconds: 0,
                    totalVisibleSeconds: 0
                },
                headerBiddingData: {},
                headerBiddingCacheData: {
                    bidder: null,
                    cacheKey: null
                },
                watchedPastSkipPoint: null,
                jwAdErrorCode: null,
                currentQuartile: null,
                pingLimiters: {
                    visibleEvent: new Za
                }
            },
            errors: {
                SAMPLE_RATE: .02,
                NUM_ERRORS_PER_SESSION: 1,
                numberEventsSent: 0
            },
            trackingState: {
                pageLoaded: null,
                queue: [],
                onping: "function" == typeof a.onping ? a.onping : null,
                images: [],
                boundFlushQueue: null
            },
            inference: {
                result: null
            }
        }
    }
    var rt = 0;
    (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("jwpsrv", "7.0", function(e, a, t) {
        var r, i = nt(e, a, t);
        Ka(i), ia(i), this.getTrackingPixelURLs = (r = i, function(e, a) {
            if (e && a) {
                r.ads.headerBiddingCacheData.bidder = e, r.ads.headerBiddingCacheData.cacheKey = a;
                var t = ua(r, "vci", "clienta", {
                        returnURL: !0
                    }),
                    n = ua(r, "vcae", "clienta", {
                        returnURL: !0
                    });
                return r.ads.headerBiddingCacheData.bidder = void 0, r.ads.headerBiddingCacheData.cacheKey = void 0, {
                    impression: t,
                    error: n
                }
            }
        }), this.doNotTrackUser = function(e) {
            return e.meta.doNotPingBackIDs
        }.bind(null, i), this.trackExternalAPIUsage = function(e, a) {
            var t, n, r;
            if (!(25 <= rt || .005 < Math.random())) return rt++, n = e, r = a, (t = i).playerData.apiTracking = {
                methodCalled: n,
                firstMeaningfulParam: r
            }, ua(t, ee, "jwplayer6"), void delete t.playerData.apiTracking
        }
    })
}();