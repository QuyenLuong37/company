!(function (n, t, i, r) {
    "use strict";
    function o(n) {
        var u = n.currentTarget,
            e = n.data ? n.data.options : {},
            t = n.data ? n.data.items : [],
            f = i(u).attr("data-fancybox") || "",
            r = 0;
        n.preventDefault();
        n.stopPropagation();
        f ? ((t = t.length ? t.filter('[data-fancybox="' + f + '"]') : i('[data-fancybox="' + f + '"]')), (r = t.index(u)), r < 0 && (r = 0)) : (t = [u]);
        i.fancybox.open(t, e, r);
    }
    if (i) {
        if (i.fn.fancybox) return void i.error("fancyBox already initialized");
        var c = {
                loop: !1,
                margin: [44, 0],
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !1,
                toolbar: !0,
                buttons: ["slideShow", "fullScreen", "thumbs", "close"],
                idleTime: 4,
                smallBtn: "auto",
                protect: !1,
                modal: !1,
                image: { preload: "auto" },
                ajax: { settings: { data: { fancybox: !0 } } },
                iframe: {
                    tpl:
                        '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""><\/iframe>',
                    preload: !0,
                    css: {},
                    attr: { scrolling: "auto" },
                },
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl:
                    '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"><\/div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"><\/button><div class="fancybox-infobar__body"><span data-fancybox-index><\/span>&nbsp;/&nbsp;<span data-fancybox-count><\/span><\/div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"><\/button><\/div><div class="fancybox-toolbar">{{BUTTONS}}<\/div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /><\/div><div class="fancybox-stage"><\/div><div class="fancybox-caption-wrap"><div class="fancybox-caption"><\/div><\/div><\/div><\/div>',
                spinnerTpl: '<div class="fancybox-loading"><\/div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p><\/div>',
                btnTpl: {
                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><\/button>',
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><\/button>',
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><\/button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><\/button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><\/button>',
                },
                parentEl: "body",
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: { autoStart: !1 },
                touch: { vertical: !0, momentum: !0 },
                hash: null,
                media: {},
                slideShow: { autoStart: !1, speed: 4e3 },
                thumbs: { autoStart: !1, hideOnClose: !0 },
                onInit: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop,
                onActivate: i.noop,
                onDeactivate: i.noop,
                clickContent: function (n) {
                    return "image" === n.type && "zoom";
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    clickContent: function (n) {
                        return "image" === n.type && "toggleControls";
                    },
                    clickSlide: function (n) {
                        return "image" === n.type ? "toggleControls" : "close";
                    },
                    dblclickContent: function (n) {
                        return "image" === n.type && "zoom";
                    },
                    dblclickSlide: function (n) {
                        return "image" === n.type && "zoom";
                    },
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
                    },
                },
            },
            f = i(n),
            u = i(t),
            a = 0,
            v = function (n) {
                return n && n.hasOwnProperty && n instanceof i;
            },
            l = (function () {
                return (
                    n.requestAnimationFrame ||
                    n.webkitRequestAnimationFrame ||
                    n.mozRequestAnimationFrame ||
                    n.oRequestAnimationFrame ||
                    function (t) {
                        return n.setTimeout(t, 1e3 / 60);
                    }
                );
            })(),
            s = (function () {
                var n,
                    u = t.createElement("fakeelement"),
                    i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                for (n in i) if (u.style[n] !== r) return i[n];
            })(),
            e = function (n) {
                return n && n.length && n[0].offsetHeight;
            },
            h = function (n, r, u) {
                var f = this;
                f.opts = i.extend(!0, { index: u }, c, r || {});
                r && i.isArray(r.buttons) && (f.opts.buttons = r.buttons);
                f.id = f.opts.id || ++a;
                f.group = [];
                f.currIndex = parseInt(f.opts.index, 10) || 0;
                f.prevIndex = null;
                f.prevPos = null;
                f.currPos = 0;
                f.firstRun = null;
                f.createGroup(n);
                f.group.length && ((f.$lastFocus = i(t.activeElement).blur()), (f.slides = {}), f.init(n));
            };
        i.extend(h.prototype, {
            init: function () {
                var r,
                    f,
                    e,
                    n = this,
                    t = n.group[n.currIndex].opts;
                n.scrollTop = u.scrollTop();
                n.scrollLeft = u.scrollLeft();
                i.fancybox.getInstance() ||
                    i.fancybox.isMobile ||
                    "hidden" === i("body").css("overflow") ||
                    ((r = i("body").width()),
                    i("html").addClass("fancybox-enabled"),
                    (r = i("body").width() - r),
                    r > 1 && i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + r + "px; }<\/style>"));
                e = "";
                i.each(t.buttons, function (n, i) {
                    e += t.btnTpl[i] || "";
                });
                f = i(n.translate(n, t.baseTpl.replace("{{BUTTONS}}", e)))
                    .addClass("fancybox-is-hidden")
                    .attr("id", "fancybox-container-" + n.id)
                    .addClass(t.baseClass)
                    .data("FancyBox", n)
                    .prependTo(t.parentEl);
                n.$refs = { container: f };
                ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function (t) {
                    n.$refs[t] = f.find(".fancybox-" + t);
                });
                (!t.arrows || n.group.length < 2) && f.find(".fancybox-navigation").remove();
                t.infobar || n.$refs.infobar.remove();
                t.toolbar || n.$refs.toolbar.remove();
                n.trigger("onInit");
                n.activate();
                n.jumpTo(n.currIndex);
            },
            translate: function (n, t) {
                var i = n.opts.i18n[n.opts.lang];
                return t.replace(/\{\{(\w+)\}\}/g, function (n, t) {
                    var u = i[t];
                    return u === r ? n : u;
                });
            },
            createGroup: function (n) {
                var t = this,
                    u = i.makeArray(n);
                i.each(u, function (n, u) {
                    var c,
                        s,
                        h,
                        l,
                        f = {},
                        o = {},
                        e = [];
                    i.isPlainObject(u)
                        ? ((f = u), (o = u.opts || u))
                        : "object" === i.type(u) && i(u).length
                        ? ((c = i(u)),
                          (e = c.data()),
                          (o = "options" in e ? e.options : {}),
                          (o = "object" === i.type(o) ? o : {}),
                          (f.src = "src" in e ? e.src : o.src || c.attr("href")),
                          ["width", "height", "thumb", "type", "filter"].forEach(function (n) {
                              n in e && (o[n] = e[n]);
                          }),
                          "srcset" in e && (o.image = { srcset: e.srcset }),
                          (o.$orig = c),
                          f.type || f.src || ((f.type = "inline"), (f.src = u)))
                        : (f = { type: "html", src: u + "" });
                    f.opts = i.extend(!0, {}, t.opts, o);
                    i.fancybox.isMobile && (f.opts = i.extend(!0, {}, f.opts, f.opts.mobile));
                    s = f.type || f.opts.type;
                    h = f.src || "";
                    !s && h && (h.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? (s = "image") : h.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "pdf") : "#" === h.charAt(0) && (s = "inline"));
                    f.type = s;
                    f.index = t.group.length;
                    f.opts.$orig && !f.opts.$orig.length && delete f.opts.$orig;
                    !f.opts.$thumb && f.opts.$orig && (f.opts.$thumb = f.opts.$orig.find("img:first"));
                    f.opts.$thumb && !f.opts.$thumb.length && delete f.opts.$thumb;
                    "function" === i.type(f.opts.caption) ? (f.opts.caption = f.opts.caption.apply(u, [t, f])) : "caption" in e && (f.opts.caption = e.caption);
                    f.opts.caption = f.opts.caption === r ? "" : f.opts.caption + "";
                    "ajax" === s && ((l = h.split(/\s+/, 2)), l.length > 1 && ((f.src = l.shift()), (f.opts.filter = l.shift())));
                    "auto" == f.opts.smallBtn && (i.inArray(s, ["html", "inline", "ajax"]) > -1 ? ((f.opts.toolbar = !1), (f.opts.smallBtn = !0)) : (f.opts.smallBtn = !1));
                    "pdf" === s && ((f.type = "iframe"), (f.opts.iframe.preload = !1));
                    f.opts.modal &&
                        (f.opts = i.extend(!0, f.opts, {
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
                            dblclickOutside: !1,
                        }));
                    t.group.push(f);
                });
            },
            addEvents: function () {
                var r = this;
                r.removeEvents();
                r.$refs.container
                    .on("click.fb-close", "[data-fancybox-close]", function (n) {
                        n.stopPropagation();
                        n.preventDefault();
                        r.close(n);
                    })
                    .on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function (n) {
                        n.stopPropagation();
                        n.preventDefault();
                        r.previous();
                    })
                    .on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function (n) {
                        n.stopPropagation();
                        n.preventDefault();
                        r.next();
                    });
                f.on("orientationchange.fb resize.fb", function (n) {
                    n && n.originalEvent && "resize" === n.originalEvent.type
                        ? l(function () {
                              r.update();
                          })
                        : (r.$refs.stage.hide(),
                          setTimeout(function () {
                              r.$refs.stage.show();
                              r.update();
                          }, 500));
                });
                u.on("focusin.fb", function (n) {
                    var u = i.fancybox ? i.fancybox.getInstance() : null;
                    u.isClosing ||
                        !u.current ||
                        !u.current.opts.trapFocus ||
                        i(n.target).hasClass("fancybox-container") ||
                        i(n.target).is(t) ||
                        (u && "fixed" !== i(n.target).css("position") && !u.$refs.container.has(n.target).length && (n.stopPropagation(), u.focus(), f.scrollTop(r.scrollTop).scrollLeft(r.scrollLeft)));
                });
                u.on("keydown.fb", function (n) {
                    var u = r.current,
                        t = n.keyCode || n.which;
                    if (u && u.opts.keyboard && !i(n.target).is("input") && !i(n.target).is("textarea"))
                        return 8 === t || 27 === t
                            ? (n.preventDefault(), void r.close(n))
                            : 37 === t || 38 === t
                            ? (n.preventDefault(), void r.previous())
                            : 39 === t || 40 === t
                            ? (n.preventDefault(), void r.next())
                            : void r.trigger("afterKeydown", n, t);
                });
                r.group[r.currIndex].opts.idleTime &&
                    ((r.idleSecondsCounter = 0),
                    u.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function () {
                        r.idleSecondsCounter = 0;
                        r.isIdle && r.showControls();
                        r.isIdle = !1;
                    }),
                    (r.idleInterval = n.setInterval(function () {
                        r.idleSecondsCounter++;
                        r.idleSecondsCounter >= r.group[r.currIndex].opts.idleTime && ((r.isIdle = !0), (r.idleSecondsCounter = 0), r.hideControls());
                    }, 1e3)));
            },
            removeEvents: function () {
                var t = this;
                f.off("orientationchange.fb resize.fb");
                u.off("focusin.fb keydown.fb .fb-idle");
                this.$refs.container.off(".fb-close .fb-prev .fb-next");
                t.idleInterval && (n.clearInterval(t.idleInterval), (t.idleInterval = null));
            },
            previous: function (n) {
                return this.jumpTo(this.currPos - 1, n);
            },
            next: function (n) {
                return this.jumpTo(this.currPos + 1, n);
            },
            jumpTo: function (n, t) {
                var h,
                    c,
                    f,
                    o,
                    v,
                    a,
                    s,
                    u = this,
                    l = u.group.length;
                if (!(u.isSliding || u.isClosing || (u.isAnimating && u.firstRun))) {
                    if (((n = parseInt(n, 10)), (c = u.current ? u.current.opts.loop : u.opts.loop), !c && (n < 0 || n >= l))) return !1;
                    if (((h = u.firstRun = null === u.firstRun), !(l < 2 && !h && u.isSliding))) {
                        if (
                            ((o = u.current),
                            (u.prevIndex = u.currIndex),
                            (u.prevPos = u.currPos),
                            (f = u.createSlide(n)),
                            l > 1 && ((c || f.index > 0) && u.createSlide(n - 1), (c || f.index < l - 1) && u.createSlide(n + 1)),
                            (u.current = f),
                            (u.currIndex = f.index),
                            (u.currPos = f.pos),
                            u.trigger("beforeShow", h),
                            u.updateControls(),
                            (a = i.fancybox.getTranslate(f.$slide)),
                            (f.isMoved = (0 !== a.left || 0 !== a.top) && !f.$slide.hasClass("fancybox-animated")),
                            (f.forcedDuration = r),
                            i.isNumeric(t) ? (f.forcedDuration = t) : (t = f.opts[h ? "animationDuration" : "transitionDuration"]),
                            (t = parseInt(t, 10)),
                            h)
                        )
                            return (
                                f.opts.animationEffect && t && u.$refs.container.css("transition-duration", t + "ms"),
                                u.$refs.container.removeClass("fancybox-is-hidden"),
                                e(u.$refs.container),
                                u.$refs.container.addClass("fancybox-is-open"),
                                f.$slide.addClass("fancybox-slide--current"),
                                u.loadSlide(f),
                                void u.preload()
                            );
                        i.each(u.slides, function (n, t) {
                            i.fancybox.stop(t.$slide);
                        });
                        f.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current");
                        f.isMoved
                            ? ((v = Math.round(f.$slide.width())),
                              i.each(u.slides, function (n, r) {
                                  var e = r.pos - f.pos;
                                  i.fancybox.animate(r.$slide, { top: 0, left: e * v + e * r.opts.gutter }, t, function () {
                                      r.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous");
                                      r.pos === u.currPos && ((f.isMoved = !1), u.complete());
                                  });
                              }))
                            : u.$refs.stage.children().removeAttr("style");
                        f.isLoaded ? u.revealContent(f) : u.loadSlide(f);
                        u.preload();
                        o.pos !== f.pos &&
                            ((s = "fancybox-slide--" + (o.pos > f.pos ? "next" : "previous")),
                            o.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),
                            (o.isComplete = !1),
                            t &&
                                (f.isMoved || f.opts.transitionEffect) &&
                                (f.isMoved
                                    ? o.$slide.addClass(s)
                                    : ((s = "fancybox-animated " + s + " fancybox-fx-" + f.opts.transitionEffect),
                                      i.fancybox.animate(o.$slide, s, t, function () {
                                          o.$slide.removeClass(s).removeAttr("style");
                                      }))));
                    }
                }
            },
            createSlide: function (n) {
                var u,
                    r,
                    t = this;
                return (
                    (r = n % t.group.length),
                    (r = r < 0 ? t.group.length + r : r),
                    !t.slides[n] && t.group[r] && ((u = i('<div class="fancybox-slide"><\/div>').appendTo(t.$refs.stage)), (t.slides[n] = i.extend(!0, {}, t.group[r], { pos: n, $slide: u, isLoaded: !1 })), t.updateSlide(t.slides[n])),
                    t.slides[n]
                );
            },
            scaleToActual: function (n, t, u) {
                var l,
                    e,
                    o,
                    y,
                    p,
                    f = this,
                    s = f.current,
                    w = s.$content,
                    a = parseInt(s.$slide.width(), 10),
                    v = parseInt(s.$slide.height(), 10),
                    h = s.width,
                    c = s.height;
                "image" != s.type ||
                    s.hasError ||
                    !w ||
                    f.isAnimating ||
                    (i.fancybox.stop(w),
                    (f.isAnimating = !0),
                    (n = n === r ? 0.5 * a : n),
                    (t = t === r ? 0.5 * v : t),
                    (l = i.fancybox.getTranslate(w)),
                    (y = h / l.width),
                    (p = c / l.height),
                    (e = 0.5 * a - 0.5 * h),
                    (o = 0.5 * v - 0.5 * c),
                    h > a && ((e = l.left * y - (n * y - n)), e > 0 && (e = 0), e < a - h && (e = a - h)),
                    c > v && ((o = l.top * p - (t * p - t)), o > 0 && (o = 0), o < v - c && (o = v - c)),
                    f.updateCursor(h, c),
                    i.fancybox.animate(w, { top: o, left: e, scaleX: y, scaleY: p }, u || 330, function () {
                        f.isAnimating = !1;
                    }),
                    f.SlideShow && f.SlideShow.isActive && f.SlideShow.stop());
            },
            scaleToFit: function (n) {
                var t,
                    r = this,
                    f = r.current,
                    u = f.$content;
                "image" != f.type ||
                    f.hasError ||
                    !u ||
                    r.isAnimating ||
                    (i.fancybox.stop(u),
                    (r.isAnimating = !0),
                    (t = r.getFitPos(f)),
                    r.updateCursor(t.width, t.height),
                    i.fancybox.animate(u, { top: t.top, left: t.left, scaleX: t.width / u.width(), scaleY: t.height / u.height() }, n || 330, function () {
                        r.isAnimating = !1;
                    }));
            },
            getFitPos: function (n) {
                var r,
                    u,
                    e,
                    o,
                    s,
                    l = this,
                    a = n.$content,
                    h = n.width,
                    c = n.height,
                    t = n.opts.margin;
                return (
                    !(!a || !a.length || (!h && !c)) &&
                    ("number" === i.type(t) && (t = [t, t]),
                    2 == t.length && (t = [t[0], t[1], t[0], t[1]]),
                    f.width() < 800 && (t = [0, 0, 0, 0]),
                    (r = parseInt(l.$refs.stage.width(), 10) - (t[1] + t[3])),
                    (u = parseInt(l.$refs.stage.height(), 10) - (t[0] + t[2])),
                    (e = Math.min(1, r / h, u / c)),
                    (o = Math.floor(e * h)),
                    (s = Math.floor(e * c)),
                    { top: Math.floor(0.5 * (u - s)) + t[0], left: Math.floor(0.5 * (r - o)) + t[3], width: o, height: s })
                );
            },
            update: function () {
                var n = this;
                i.each(n.slides, function (t, i) {
                    n.updateSlide(i);
                });
            },
            updateSlide: function (n) {
                var t = this,
                    r = n.$content;
                r && (n.width || n.height) && (i.fancybox.stop(r), i.fancybox.setTranslate(r, t.getFitPos(n)), n.pos === t.currPos && t.updateCursor());
                n.$slide.trigger("refresh");
                t.trigger("onUpdate", n);
            },
            updateCursor: function (n, t) {
                var f,
                    i = this,
                    u = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                i.current &&
                    !i.isClosing &&
                    (i.isZoomable()
                        ? (u.addClass("fancybox-is-zoomable"),
                          (f = n !== r && t !== r ? n < i.current.width && t < i.current.height : i.isScaledDown()),
                          f ? u.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? u.addClass("fancybox-can-drag") : u.addClass("fancybox-can-zoomOut"))
                        : i.current.opts.touch && u.addClass("fancybox-can-drag"));
            },
            isZoomable: function () {
                var t,
                    r = this,
                    n = r.current;
                if (n && !r.isClosing)
                    return !!(
                        "image" === n.type &&
                        n.isLoaded &&
                        !n.hasError &&
                        ("zoom" === n.opts.clickContent || (i.isFunction(n.opts.clickContent) && "zoom" === n.opts.clickContent(n))) &&
                        ((t = r.getFitPos(n)), n.width > t.width || n.height > t.height)
                    );
            },
            isScaledDown: function () {
                var u = this,
                    t = u.current,
                    r = t.$content,
                    n = !1;
                return r && ((n = i.fancybox.getTranslate(r)), (n = n.width < t.width || n.height < t.height)), n;
            },
            canPan: function () {
                var i = this,
                    r = i.current,
                    t = r.$content,
                    n = !1;
                return t && ((n = i.getFitPos(r)), (n = Math.abs(t.width() - n.width) > 1 || Math.abs(t.height() - n.height) > 1)), n;
            },
            loadSlide: function (n) {
                var r,
                    u,
                    f,
                    t = this;
                if (!n.isLoading && !n.isLoaded) {
                    switch (
                        ((n.isLoading = !0),
                        t.trigger("beforeLoad", n),
                        (r = n.type),
                        (u = n.$slide),
                        u
                            .off("refresh")
                            .trigger("onReset")
                            .addClass("fancybox-slide--" + (r || "unknown"))
                            .addClass(n.opts.slideClass),
                        r)
                    ) {
                        case "image":
                            t.setImage(n);
                            break;
                        case "iframe":
                            t.setIframe(n);
                            break;
                        case "html":
                            t.setContent(n, n.src || n.content);
                            break;
                        case "inline":
                            i(n.src).length ? t.setContent(n, i(n.src)) : t.setError(n);
                            break;
                        case "ajax":
                            t.showLoading(n);
                            f = i.ajax(
                                i.extend({}, n.opts.ajax.settings, {
                                    url: n.src,
                                    success: function (i, r) {
                                        "success" === r && t.setContent(n, i);
                                    },
                                    error: function (i, r) {
                                        i && "abort" !== r && t.setError(n);
                                    },
                                })
                            );
                            u.one("onReset", function () {
                                f.abort();
                            });
                            break;
                        default:
                            t.setError(n);
                    }
                    return !0;
                }
            },
            setImage: function (t) {
                var r,
                    u,
                    s,
                    h,
                    e = this,
                    c = t.opts.image.srcset,
                    o,
                    f;
                if (c) {
                    for (
                        s = n.devicePixelRatio || 1,
                            h = n.innerWidth * s,
                            u = c.split(",").map(function (n) {
                                var t = {};
                                return (
                                    n
                                        .trim()
                                        .split(/\s+/)
                                        .forEach(function (n, i) {
                                            var r = parseInt(n.substring(0, n.length - 1), 10);
                                            return 0 === i ? (t.url = n) : void (r && ((t.value = r), (t.postfix = n[n.length - 1])));
                                        }),
                                    t
                                );
                            }),
                            u.sort(function (n, t) {
                                return n.value - t.value;
                            }),
                            o = 0;
                        o < u.length;
                        o++
                    )
                        if (((f = u[o]), ("w" === f.postfix && f.value >= h) || ("x" === f.postfix && f.value >= s))) {
                            r = f;
                            break;
                        }
                    !r && u.length && (r = u[u.length - 1]);
                    r && ((t.src = r.url), t.width && t.height && "w" == r.postfix && ((t.height = (t.width / t.height) * r.value), (t.width = r.value)));
                }
                t.$content = i('<div class="fancybox-image-wrap"><\/div>').addClass("fancybox-is-hidden").appendTo(t.$slide);
                t.opts.preload !== !1 && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb)
                    ? ((t.width = t.opts.width),
                      (t.height = t.opts.height),
                      (t.$ghost = i("<img />")
                          .one("error", function () {
                              i(this).remove();
                              t.$ghost = null;
                              e.setBigImage(t);
                          })
                          .one("load", function () {
                              e.afterLoad(t);
                              e.setBigImage(t);
                          })
                          .addClass("fancybox-image")
                          .appendTo(t.$content)
                          .attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))))
                    : e.setBigImage(t);
            },
            setBigImage: function (n) {
                var r = this,
                    t = i("<img />");
                n.$image = t
                    .one("error", function () {
                        r.setError(n);
                    })
                    .one("load", function () {
                        clearTimeout(n.timouts);
                        n.timouts = null;
                        r.isClosing ||
                            ((n.width = this.naturalWidth),
                            (n.height = this.naturalHeight),
                            n.opts.image.srcset && t.attr("sizes", "100vw").attr("srcset", n.opts.image.srcset),
                            r.hideLoading(n),
                            n.$ghost
                                ? (n.timouts = setTimeout(function () {
                                      n.timouts = null;
                                      n.$ghost.hide();
                                  }, Math.min(300, Math.max(1e3, n.height / 1600))))
                                : r.afterLoad(n));
                    })
                    .addClass("fancybox-image")
                    .attr("src", n.src)
                    .appendTo(n.$content);
                t[0].complete
                    ? t.trigger("load")
                    : t[0].error
                    ? t.trigger("error")
                    : (n.timouts = setTimeout(function () {
                          t[0].complete || n.hasError || r.showLoading(n);
                      }, 100));
            },
            setIframe: function (n) {
                var u,
                    f = this,
                    t = n.opts.iframe,
                    e = n.$slide;
                n.$content = i('<div class="fancybox-content' + (t.preload ? " fancybox-is-hidden" : "") + '"><\/div>')
                    .css(t.css)
                    .appendTo(e);
                u = i(t.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                    .attr(t.attr)
                    .appendTo(n.$content);
                t.preload
                    ? (f.showLoading(n),
                      u.on("load.fb error.fb", function () {
                          this.isReady = 1;
                          n.$slide.trigger("refresh");
                          f.afterLoad(n);
                      }),
                      e.on("refresh.fb", function () {
                          var e,
                              f,
                              o,
                              s,
                              h,
                              i = n.$content;
                          if (1 === u[0].isReady) {
                              try {
                                  e = u.contents();
                                  f = e.find("body");
                              } catch (n) {}
                              f &&
                                  f.length &&
                                  (t.css.width === r || t.css.height === r) &&
                                  ((o = u[0].contentWindow.document.documentElement.scrollWidth),
                                  (s = Math.ceil(f.outerWidth(!0) + (i.width() - o))),
                                  (h = Math.ceil(f.outerHeight(!0))),
                                  i.css({ width: t.css.width === r ? s + (i.outerWidth() - i.innerWidth()) : t.css.width, height: t.css.height === r ? h + (i.outerHeight() - i.innerHeight()) : t.css.height }));
                              i.removeClass("fancybox-is-hidden");
                          }
                      }))
                    : this.afterLoad(n);
                u.attr("src", n.src);
                n.opts.smallBtn === !0 && n.$content.prepend(f.translate(n, n.opts.btnTpl.smallBtn));
                e.one("onReset", function () {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank");
                    } catch (n) {}
                    i(this).empty();
                    n.isLoaded = !1;
                });
            },
            setContent: function (n, t) {
                var r = this;
                r.isClosing ||
                    (r.hideLoading(n),
                    n.$slide.empty(),
                    v(t) && t.parent().length
                        ? (t.parent(".fancybox-slide--inline").trigger("onReset"), (n.$placeholder = i("<div><\/div>").hide().insertAfter(t)), t.css("display", "inline-block"))
                        : n.hasError || ("string" === i.type(t) && ((t = i("<div>").append(i.trim(t)).contents()), 3 === t[0].nodeType && (t = i("<div>").html(t))), n.opts.filter && (t = i("<div>").html(t).find(n.opts.filter))),
                    n.$slide.one("onReset", function () {
                        n.$placeholder && (n.$placeholder.after(t.hide()).remove(), (n.$placeholder = null));
                        n.$smallBtn && (n.$smallBtn.remove(), (n.$smallBtn = null));
                        n.hasError || (i(this).empty(), (n.isLoaded = !1));
                    }),
                    (n.$content = i(t).appendTo(n.$slide)),
                    n.opts.smallBtn && !n.$smallBtn && (n.$smallBtn = i(r.translate(n, n.opts.btnTpl.smallBtn)).appendTo(n.$content)),
                    this.afterLoad(n));
            },
            setError: function (n) {
                n.hasError = !0;
                n.$slide.removeClass("fancybox-slide--" + n.type);
                this.setContent(n, this.translate(n, n.opts.errorTpl));
            },
            showLoading: function (n) {
                var t = this;
                n = n || t.current;
                n && !n.$spinner && (n.$spinner = i(t.opts.spinnerTpl).appendTo(n.$slide));
            },
            hideLoading: function (n) {
                var t = this;
                n = n || t.current;
                n && n.$spinner && (n.$spinner.remove(), delete n.$spinner);
            },
            afterLoad: function (n) {
                var t = this;
                t.isClosing ||
                    ((n.isLoading = !1),
                    (n.isLoaded = !0),
                    t.trigger("afterLoad", n),
                    t.hideLoading(n),
                    n.opts.protect &&
                        n.$content &&
                        !n.hasError &&
                        (n.$content.on("contextmenu.fb", function (n) {
                            return 2 == n.button && n.preventDefault(), !0;
                        }),
                        "image" === n.type && i('<div class="fancybox-spaceball"><\/div>').appendTo(n.$content)),
                    t.revealContent(n));
            },
            revealContent: function (n) {
                var f,
                    l,
                    o,
                    c,
                    u,
                    t = this,
                    h = n.$slide,
                    s = !1;
                return (
                    (f = n.opts[t.firstRun ? "animationEffect" : "transitionEffect"]),
                    (o = n.opts[t.firstRun ? "animationDuration" : "transitionDuration"]),
                    (o = parseInt(n.forcedDuration === r ? o : n.forcedDuration, 10)),
                    (!n.isMoved && n.pos === t.currPos && o) || (f = !1),
                    "zoom" !== f || (n.pos === t.currPos && o && "image" === n.type && !n.hasError && (s = t.getThumbPos(n))) || (f = "fade"),
                    "zoom" === f
                        ? ((u = t.getFitPos(n)),
                          (u.scaleX = Math.round((u.width / s.width) * 100) / 100),
                          (u.scaleY = Math.round((u.height / s.height) * 100) / 100),
                          delete u.width,
                          delete u.height,
                          (c = n.opts.zoomOpacity),
                          "auto" == c && (c = Math.abs(n.width / n.height - s.width / s.height) > 0.1),
                          c && ((s.opacity = 0.1), (u.opacity = 1)),
                          i.fancybox.setTranslate(n.$content.removeClass("fancybox-is-hidden"), s),
                          e(n.$content),
                          void i.fancybox.animate(n.$content, u, o, function () {
                              t.complete();
                          }))
                        : (t.updateSlide(n),
                          f
                              ? (i.fancybox.stop(h),
                                (l = "fancybox-animated fancybox-slide--" + (n.pos > t.prevPos ? "next" : "previous") + " fancybox-fx-" + f),
                                h.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(l),
                                n.$content.removeClass("fancybox-is-hidden"),
                                e(h),
                                void i.fancybox.animate(
                                    h,
                                    "fancybox-slide--current",
                                    o,
                                    function () {
                                        h.removeClass(l).removeAttr("style");
                                        n.pos === t.currPos && t.complete();
                                    },
                                    !0
                                ))
                              : (e(h), n.$content.removeClass("fancybox-is-hidden"), void (n.pos === t.currPos && t.complete())))
                );
            },
            getThumbPos: function (r) {
                var f,
                    s = this,
                    o = !1,
                    h = function (t) {
                        for (var f, u = t[0], r = u.getBoundingClientRect(), e = []; null !== u.parentElement; )
                            ("hidden" !== i(u.parentElement).css("overflow") && "auto" !== i(u.parentElement).css("overflow")) || e.push(u.parentElement.getBoundingClientRect()), (u = u.parentElement);
                        return (
                            (f = e.every(function (n) {
                                var t = Math.min(r.right, n.right) - Math.max(r.left, n.left),
                                    i = Math.min(r.bottom, n.bottom) - Math.max(r.top, n.top);
                                return t > 0 && i > 0;
                            })),
                            f && r.bottom > 0 && r.right > 0 && r.left < i(n).width() && r.top < i(n).height()
                        );
                    },
                    u = r.opts.$thumb,
                    e = u ? u.offset() : 0;
                return (
                    e &&
                        u[0].ownerDocument === t &&
                        h(u) &&
                        ((f = s.$refs.stage.offset()),
                        (o = { top: e.top - f.top + parseFloat(u.css("border-top-width") || 0), left: e.left - f.left + parseFloat(u.css("border-left-width") || 0), width: u.width(), height: u.height(), scaleX: 1, scaleY: 1 })),
                    o
                );
            },
            complete: function () {
                var r = this,
                    n = r.current,
                    u = {};
                n.isMoved ||
                    !n.isLoaded ||
                    n.isComplete ||
                    ((n.isComplete = !0),
                    n.$slide.siblings().trigger("onReset"),
                    e(n.$slide),
                    n.$slide.addClass("fancybox-slide--complete"),
                    i.each(r.slides, function (n, t) {
                        t.pos >= r.currPos - 1 && t.pos <= r.currPos + 1 ? (u[t.pos] = t) : t && (i.fancybox.stop(t.$slide), t.$slide.unbind().remove());
                    }),
                    (r.slides = u),
                    r.updateCursor(),
                    r.trigger("afterShow"),
                    (i(t.activeElement).is("[disabled]") || (n.opts.autoFocus && "image" != n.type && "iframe" !== n.type)) && r.focus());
            },
            preload: function () {
                var t,
                    i,
                    n = this;
                n.group.length < 2 || ((t = n.slides[n.currPos + 1]), (i = n.slides[n.currPos - 1]), t && "image" === t.type && n.loadSlide(t), i && "image" === i.type && n.loadSlide(i));
            },
            focus: function () {
                var n,
                    t = this.current;
                this.isClosing || ((n = t && t.isComplete ? t.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null), (n = n && n.length ? n : this.$refs.container), n.focus());
            },
            activate: function () {
                var n = this;
                i(".fancybox-container").each(function () {
                    var t = i(this).data("FancyBox");
                    t && t.uid !== n.uid && !t.isClosing && t.trigger("onDeactivate");
                });
                n.current && (n.$refs.container.index() > 0 && n.$refs.container.prependTo(t.body), n.updateControls());
                n.trigger("onActivate");
                n.addEvents();
            },
            close: function (n, t) {
                var o,
                    h,
                    c,
                    a,
                    u,
                    e,
                    f = this,
                    r = f.current,
                    v = function () {
                        f.cleanUp(n);
                    };
                return (
                    !f.isClosing &&
                    ((f.isClosing = !0),
                    f.trigger("beforeClose", n) === !1
                        ? ((f.isClosing = !1),
                          l(function () {
                              f.update();
                          }),
                          !1)
                        : (f.removeEvents(),
                          r.timouts && clearTimeout(r.timouts),
                          (c = r.$content),
                          (o = r.opts.animationEffect),
                          (h = i.isNumeric(t) ? t : o ? r.opts.animationDuration : 0),
                          r.$slide.off(s).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                          r.$slide.siblings().trigger("onReset").remove(),
                          h && f.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),
                          f.hideLoading(r),
                          f.hideControls(),
                          f.updateCursor(),
                          "zoom" !== o || (n !== !0 && c && h && "image" === r.type && !r.hasError && (e = f.getThumbPos(r))) || (o = "fade"),
                          "zoom" === o
                              ? (i.fancybox.stop(c),
                                (u = i.fancybox.getTranslate(c)),
                                (u.width = u.width * u.scaleX),
                                (u.height = u.height * u.scaleY),
                                (a = r.opts.zoomOpacity),
                                "auto" == a && (a = Math.abs(r.width / r.height - e.width / e.height) > 0.1),
                                a && (e.opacity = 0),
                                (u.scaleX = u.width / e.width),
                                (u.scaleY = u.height / e.height),
                                (u.width = e.width),
                                (u.height = e.height),
                                i.fancybox.setTranslate(r.$content, u),
                                i.fancybox.animate(r.$content, e, h, v),
                                !0)
                              : (o && h ? (n === !0 ? setTimeout(v, h) : i.fancybox.animate(r.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, h, v)) : v(), !0)))
                );
            },
            cleanUp: function (n) {
                var r,
                    t = this;
                t.current.$slide.trigger("onReset");
                t.$refs.container.empty().remove();
                t.trigger("afterClose", n);
                t.$lastFocus && !t.current.focusBack && t.$lastFocus.focus();
                t.current = null;
                r = i.fancybox.getInstance();
                r ? r.activate() : (f.scrollTop(t.scrollTop).scrollLeft(t.scrollLeft), i("html").removeClass("fancybox-enabled"), i("#fancybox-style-noscroll").remove());
            },
            trigger: function (n, t) {
                var o,
                    f = Array.prototype.slice.call(arguments, 1),
                    e = this,
                    r = t && t.opts ? t : e.current;
                return r ? f.unshift(r) : (r = e), f.unshift(e), i.isFunction(r.opts[n]) && (o = r.opts[n].apply(r, f)), o === !1 ? o : void ("afterClose" === n ? u.trigger(n + ".fb", f) : e.$refs.container.trigger(n + ".fb", f));
            },
            updateControls: function () {
                var n = this,
                    t = n.current,
                    r = t.index,
                    u = t.opts,
                    f = u.caption,
                    e = n.$refs.caption;
                t.$slide.trigger("refresh");
                n.$caption = f && f.length ? e.html(f) : null;
                n.isHiddenControls || n.showControls();
                i("[data-fancybox-count]").html(n.group.length);
                i("[data-fancybox-index]").html(r + 1);
                i("[data-fancybox-prev]").prop("disabled", !u.loop && r <= 0);
                i("[data-fancybox-next]").prop("disabled", !u.loop && r >= n.group.length - 1);
            },
            hideControls: function () {
                this.isHiddenControls = !0;
                this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
            },
            showControls: function () {
                var n = this,
                    t = n.current ? n.current.opts : n.opts,
                    i = n.$refs.container;
                n.isHiddenControls = !1;
                n.idleSecondsCounter = 0;
                i.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons))
                    .toggleClass("fancybox-show-infobar", !!(t.infobar && n.group.length > 1))
                    .toggleClass("fancybox-show-nav", !!(t.arrows && n.group.length > 1))
                    .toggleClass("fancybox-is-modal", !!t.modal);
                n.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption");
            },
            toggleControls: function () {
                this.isHiddenControls ? this.showControls() : this.hideControls();
            },
        });
        i.fancybox = {
            version: "3.1.20",
            defaults: c,
            getInstance: function (n) {
                var t = i('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
                    r = Array.prototype.slice.call(arguments, 1);
                return t instanceof h && ("string" === i.type(n) ? t[n].apply(t, r) : "function" === i.type(n) && n.apply(t, r), t);
            },
            open: function (n, t, i) {
                return new h(n, t, i);
            },
            close: function (n) {
                var t = this.getInstance();
                t && (t.close(), n === !0 && this.close());
            },
            destroy: function () {
                this.close(!0);
                u.off("click.fb-start");
            },
            isMobile: t.createTouch !== r && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
            use3d: (function () {
                var i = t.createElement("div");
                return n.getComputedStyle && n.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11);
            })(),
            getTranslate: function (n) {
                var t, r, i;
                return !n || !n.length
                    ? !1
                    : (((t = n.eq(0).css("transform")), t && t.indexOf("matrix") !== -1 ? ((t = t.split("(")[1]), (t = t.split(")")[0]), (t = t.split(","))) : (t = []), t.length)
                          ? ((t = t.length > 10 ? [t[13], t[12], t[0], t[5]] : [t[5], t[4], t[0], t[3]]), (t = t.map(parseFloat)))
                          : ((t = [0, 0, 1, 1]), (r = /\.*translate\((.*)px,(.*)px\)/i), (i = r.exec(n.eq(0).attr("style"))), i && ((t[0] = parseFloat(i[2])), (t[1] = parseFloat(i[1])))),
                      { top: t[0], left: t[1], scaleX: t[2], scaleY: t[3], opacity: parseFloat(n.css("opacity")), width: n.width(), height: n.height() });
            },
            setTranslate: function (n, t) {
                var i = "",
                    u = {};
                if (n && t)
                    return (
                        (t.left === r && t.top === r) ||
                            ((i = (t.left === r ? n.position().left : t.left) + "px, " + (t.top === r ? n.position().top : t.top) + "px"), (i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")")),
                        t.scaleX !== r && t.scaleY !== r && (i = (i.length ? i + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"),
                        i.length && (u.transform = i),
                        t.opacity !== r && (u.opacity = t.opacity),
                        t.width !== r && (u.width = t.width),
                        t.height !== r && (u.height = t.height),
                        n.css(u)
                    );
            },
            animate: function (n, t, u, f, e) {
                var o = s || "transitionend";
                i.isFunction(u) && ((f = u), (u = null));
                i.isPlainObject(t) || n.removeAttr("style");
                n.on(o, function (u) {
                    (u && u.originalEvent && (!n.is(u.originalEvent.target) || "z-index" == u.originalEvent.propertyName)) ||
                        (n.off(o),
                        i.isPlainObject(t)
                            ? t.scaleX !== r && t.scaleY !== r && (n.css("transition-duration", "0ms"), (t.width = n.width() * t.scaleX), (t.height = n.height() * t.scaleY), (t.scaleX = 1), (t.scaleY = 1), i.fancybox.setTranslate(n, t))
                            : e !== !0 && n.removeClass(t),
                        i.isFunction(f) && f(u));
                });
                i.isNumeric(u) && n.css("transition-duration", u + "ms");
                i.isPlainObject(t) ? i.fancybox.setTranslate(n, t) : n.addClass(t);
                n.data(
                    "timer",
                    setTimeout(function () {
                        n.trigger("transitionend");
                    }, u + 16)
                );
            },
            stop: function (n) {
                clearTimeout(n.data("timer"));
                n.off(s);
            },
        };
        i.fn.fancybox = function (n) {
            var t;
            return (
                (n = n || {}),
                (t = n.selector || !1),
                t
                    ? i("body")
                          .off("click.fb-start", t)
                          .on("click.fb-start", t, { items: i(t), options: n }, o)
                    : this.off("click.fb-start").on("click.fb-start", { items: this, options: n }, o),
                this
            );
        };
        u.on("click.fb-start", "[data-fancybox]", o);
    }
})(window, document, window.jQuery),
    (function (n) {
        "use strict";
        var t = function (t, i, r) {
                if (t)
                    return (
                        (r = r || ""),
                        "object" === n.type(r) && (r = n.param(r, !0)),
                        n.each(i, function (n, i) {
                            t = t.replace("$" + n, i || "");
                        }),
                        r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r),
                        t
                    );
            },
            i = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                    paramPlace: 8,
                    type: "iframe",
                    url: "//www.youtube.com/embed/$4",
                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1 },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2",
                },
                metacafe: { matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/, type: "iframe", url: "//www.metacafe.com/embed/$1/?ap=1" },
                dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: "iframe", url: "//www.dailymotion.com/embed/video/$1" },
                vine: { matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/, type: "iframe", url: "//vine.co/v/$1/embed/simple" },
                instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
                google_maps: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (n) {
                        return (
                            "//maps.google." + n[2] + "/?ll=" + (n[9] ? n[9] + "&z=" + Math.floor(n[10]) + (n[12] ? n[12].replace(/^\//, "&") : "") : n[12]) + "&output=" + (n[12] && n[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        );
                    },
                },
            };
        n(document).on("onInit.fb", function (r, u) {
            n.each(u.group, function (r, u) {
                var a,
                    v,
                    f,
                    s,
                    e,
                    l,
                    h,
                    o = u.src || "",
                    c = !1;
                u.type ||
                    ((a = n.extend(!0, {}, i, u.opts.media)),
                    n.each(a, function (i, r) {
                        var a, y;
                        if (((f = o.match(r.matcher)), (l = {}), (h = i), f)) {
                            if (((c = r.type), r.paramPlace && f[r.paramPlace]))
                                for (e = f[r.paramPlace], "?" == e[0] && (e = e.substring(1)), e = e.split("&"), a = 0; a < e.length; ++a)
                                    (y = e[a].split("=", 2)), 2 == y.length && (l[y[0]] = decodeURIComponent(y[1].replace(/\+/g, " ")));
                            return (
                                (s = n.extend(!0, {}, r.params, u.opts[i], l)),
                                (o = "function" === n.type(r.url) ? r.url.call(this, f, s, u) : t(r.url, f, s)),
                                (v = "function" === n.type(r.thumb) ? r.thumb.call(this, f, s, u) : t(r.thumb, f)),
                                "vimeo" === h && (o = o.replace("&%23", "#")),
                                !1
                            );
                        }
                    }),
                    c
                        ? ((u.src = o),
                          (u.type = c),
                          u.opts.thumb || (u.opts.$thumb && u.opts.$thumb.length) || (u.opts.thumb = v),
                          "iframe" === c && (n.extend(!0, u.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } }), (u.contentProvider = h), (u.opts.slideClass += " fancybox-slide--" + ("google_maps" == h ? "map" : "video"))))
                        : (u.type = "image"));
            });
        });
    })(window.jQuery),
    (function (n, t, i) {
        "use strict";
        var s = (function () {
                return (
                    n.requestAnimationFrame ||
                    n.webkitRequestAnimationFrame ||
                    n.mozRequestAnimationFrame ||
                    n.oRequestAnimationFrame ||
                    function (t) {
                        return n.setTimeout(t, 1e3 / 60);
                    }
                );
            })(),
            f = (function () {
                return (
                    n.cancelAnimationFrame ||
                    n.webkitCancelAnimationFrame ||
                    n.mozCancelAnimationFrame ||
                    n.oCancelAnimationFrame ||
                    function (t) {
                        n.clearTimeout(t);
                    }
                );
            })(),
            e = function (t) {
                var r = [],
                    i;
                t = t.originalEvent || t || n.e;
                t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
                for (i in t) t[i].pageX ? r.push({ x: t[i].pageX, y: t[i].pageY }) : t[i].clientX && r.push({ x: t[i].clientX, y: t[i].clientY });
                return r;
            },
            u = function (n, t, i) {
                return t && n ? ("x" === i ? n.x - t.x : "y" === i ? n.y - t.y : Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))) : 0;
            },
            h = function (n) {
                if (n.is("a,button,input,select,textarea") || i.isFunction(n.get(0).onclick)) return !0;
                for (var t = 0, r = n[0].attributes, u = r.length; t < u; t++) if ("data-fancybox-" === r[t].nodeName.substr(0, 14)) return !0;
                return !1;
            },
            c = function (t) {
                var i = n.getComputedStyle(t)["overflow-y"],
                    r = n.getComputedStyle(t)["overflow-x"],
                    u = ("scroll" === i || "auto" === i) && t.scrollHeight > t.clientHeight,
                    f = ("scroll" === r || "auto" === r) && t.scrollWidth > t.clientWidth;
                return u || f;
            },
            o = function (n) {
                for (var t = !1; ; ) {
                    if ((t = c(n.get(0)))) break;
                    if (((n = n.parent()), !n.length || n.hasClass("fancybox-stage") || n.is("body"))) break;
                }
                return t;
            },
            r = function (n) {
                var t = this;
                t.instance = n;
                t.$bg = n.$refs.bg;
                t.$stage = n.$refs.stage;
                t.$container = n.$refs.container;
                t.destroy();
                t.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(t, "ontouchstart"));
            };
        r.prototype.destroy = function () {
            this.$container.off(".fb.touch");
        };
        r.prototype.ontouchstart = function (r) {
            var f = this,
                s = i(r.target),
                l = f.instance,
                c = l.current,
                v = c.$content,
                a = "touchstart" == r.type;
            if ((a && f.$container.off("mousedown.fb.touch"), !c || f.instance.isAnimating || f.instance.isClosing)) return r.stopPropagation(), void r.preventDefault();
            if (
                (!r.originalEvent || 2 != r.originalEvent.button) &&
                s.length &&
                !h(s) &&
                !h(s.parent()) &&
                !(r.originalEvent.clientX > s[0].clientWidth + s.offset().left) &&
                ((f.startPoints = e(r)), f.startPoints && !(f.startPoints.length > 1 && l.isSliding))
            ) {
                if (
                    ((f.$target = s),
                    (f.$content = v),
                    (f.canTap = !0),
                    i(t).off(".fb.touch"),
                    i(t).on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(f, "ontouchend")),
                    i(t).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(f, "ontouchmove")),
                    r.stopPropagation(),
                    (!l.current.opts.touch && !l.canPan()) || (!s.is(f.$stage) && !f.$stage.find(s).length))
                )
                    return void (s.is("img") && r.preventDefault());
                (i.fancybox.isMobile && (o(f.$target) || o(f.$target.parent()))) || r.preventDefault();
                f.canvasWidth = Math.round(c.$slide[0].clientWidth);
                f.canvasHeight = Math.round(c.$slide[0].clientHeight);
                f.startTime = new Date().getTime();
                f.distanceX = f.distanceY = f.distance = 0;
                f.isPanning = !1;
                f.isSwiping = !1;
                f.isZooming = !1;
                f.sliderStartPos = f.sliderLastPos || { top: 0, left: 0 };
                f.contentStartPos = i.fancybox.getTranslate(f.$content);
                f.contentLastPos = null;
                1 !== f.startPoints.length ||
                    f.isZooming ||
                    ((f.canTap = !l.isSliding),
                    "image" === c.type && (f.contentStartPos.width > f.canvasWidth + 1 || f.contentStartPos.height > f.canvasHeight + 1)
                        ? (i.fancybox.stop(f.$content), f.$content.css("transition-duration", "0ms"), (f.isPanning = !0))
                        : (f.isSwiping = !0),
                    f.$container.addClass("fancybox-controls--isGrabbing"));
                2 !== f.startPoints.length ||
                    l.isAnimating ||
                    c.hasError ||
                    "image" !== c.type ||
                    (!c.isLoaded && !c.$ghost) ||
                    ((f.isZooming = !0),
                    (f.isSwiping = !1),
                    (f.isPanning = !1),
                    i.fancybox.stop(f.$content),
                    f.$content.css("transition-duration", "0ms"),
                    (f.centerPointStartX = 0.5 * (f.startPoints[0].x + f.startPoints[1].x) - i(n).scrollLeft()),
                    (f.centerPointStartY = 0.5 * (f.startPoints[0].y + f.startPoints[1].y) - i(n).scrollTop()),
                    (f.percentageOfImageAtPinchPointX = (f.centerPointStartX - f.contentStartPos.left) / f.contentStartPos.width),
                    (f.percentageOfImageAtPinchPointY = (f.centerPointStartY - f.contentStartPos.top) / f.contentStartPos.height),
                    (f.startDistanceBetweenFingers = u(f.startPoints[0], f.startPoints[1])));
            }
        };
        r.prototype.ontouchmove = function (n) {
            var t = this;
            if (((t.newPoints = e(n)), i.fancybox.isMobile && (o(t.$target) || o(t.$target.parent())))) return n.stopPropagation(), void (t.canTap = !1);
            if (
                (t.instance.current.opts.touch || t.instance.canPan()) &&
                t.newPoints &&
                t.newPoints.length &&
                ((t.distanceX = u(t.newPoints[0], t.startPoints[0], "x")), (t.distanceY = u(t.newPoints[0], t.startPoints[0], "y")), (t.distance = u(t.newPoints[0], t.startPoints[0])), t.distance > 0)
            ) {
                if (!t.$target.is(t.$stage) && !t.$stage.find(t.$target).length) return;
                n.stopPropagation();
                n.preventDefault();
                t.isSwiping ? t.onSwipe() : t.isPanning ? t.onPan() : t.isZooming && t.onZoom();
            }
        };
        r.prototype.onSwipe = function () {
            var u,
                t = this,
                e = t.isSwiping,
                r = t.sliderStartPos.left || 0;
            e === !0
                ? Math.abs(t.distance) > 10 &&
                  ((t.canTap = !1),
                  t.instance.group.length < 2 && t.instance.opts.touch.vertical
                      ? (t.isSwiping = "y")
                      : t.instance.isSliding || t.instance.opts.touch.vertical === !1 || ("auto" === t.instance.opts.touch.vertical && i(n).width() > 800)
                      ? (t.isSwiping = "x")
                      : ((u = Math.abs((180 * Math.atan2(t.distanceY, t.distanceX)) / Math.PI)), (t.isSwiping = u > 45 && u < 135 ? "y" : "x")),
                  (t.instance.isSliding = t.isSwiping),
                  (t.startPoints = t.newPoints),
                  i.each(t.instance.slides, function (n, r) {
                      i.fancybox.stop(r.$slide);
                      r.$slide.css("transition-duration", "0ms");
                      r.inTransition = !1;
                      r.pos === t.instance.current.pos && (t.sliderStartPos.left = i.fancybox.getTranslate(r.$slide).left);
                  }),
                  t.instance.SlideShow && t.instance.SlideShow.isActive && t.instance.SlideShow.stop())
                : ("x" == e &&
                      (t.distanceX > 0 && (t.instance.group.length < 2 || (0 === t.instance.current.index && !t.instance.current.opts.loop))
                          ? (r += Math.pow(t.distanceX, 0.8))
                          : t.distanceX < 0 && (t.instance.group.length < 2 || (t.instance.current.index === t.instance.group.length - 1 && !t.instance.current.opts.loop))
                          ? (r -= Math.pow(-t.distanceX, 0.8))
                          : (r += t.distanceX)),
                  (t.sliderLastPos = { top: "x" == e ? 0 : t.sliderStartPos.top + t.distanceY, left: r }),
                  t.requestId && (f(t.requestId), (t.requestId = null)),
                  (t.requestId = s(function () {
                      t.sliderLastPos &&
                          (i.each(t.instance.slides, function (n, r) {
                              var u = r.pos - t.instance.currPos;
                              i.fancybox.setTranslate(r.$slide, { top: t.sliderLastPos.top, left: t.sliderLastPos.left + u * t.canvasWidth + u * r.opts.gutter });
                          }),
                          t.$container.addClass("fancybox-is-sliding"));
                  })));
        };
        r.prototype.onPan = function () {
            var r,
                u,
                t,
                n = this;
            n.canTap = !1;
            r = n.contentStartPos.width > n.canvasWidth ? n.contentStartPos.left + n.distanceX : n.contentStartPos.left;
            u = n.contentStartPos.top + n.distanceY;
            t = n.limitMovement(r, u, n.contentStartPos.width, n.contentStartPos.height);
            t.scaleX = n.contentStartPos.scaleX;
            t.scaleY = n.contentStartPos.scaleY;
            n.contentLastPos = t;
            n.requestId && (f(n.requestId), (n.requestId = null));
            n.requestId = s(function () {
                i.fancybox.setTranslate(n.$content, n.contentLastPos);
            });
        };
        r.prototype.limitMovement = function (n, t, i, r) {
            var f,
                e,
                o,
                s,
                u = this,
                h = u.canvasWidth,
                c = u.canvasHeight,
                v = u.contentStartPos.left,
                y = u.contentStartPos.top,
                l = u.distanceX,
                a = u.distanceY;
            return (
                (f = Math.max(0, 0.5 * h - 0.5 * i)),
                (e = Math.max(0, 0.5 * c - 0.5 * r)),
                (o = Math.min(h - i, 0.5 * h - 0.5 * i)),
                (s = Math.min(c - r, 0.5 * c - 0.5 * r)),
                i > h && (l > 0 && n > f && (n = f - 1 + Math.pow(-f + v + l, 0.8) || 0), l < 0 && n < o && (n = o + 1 - Math.pow(o - v - l, 0.8) || 0)),
                r > c && (a > 0 && t > e && (t = e - 1 + Math.pow(-e + y + a, 0.8) || 0), a < 0 && t < s && (t = s + 1 - Math.pow(s - y - a, 0.8) || 0)),
                { top: t, left: n }
            );
        };
        r.prototype.limitPosition = function (n, t, i, r) {
            var e = this,
                u = e.canvasWidth,
                f = e.canvasHeight;
            return i > u ? ((n = n > 0 ? 0 : n), (n = n < u - i ? u - i : n)) : (n = Math.max(0, u / 2 - i / 2)), r > f ? ((t = t > 0 ? 0 : t), (t = t < f - r ? f - r : t)) : (t = Math.max(0, f / 2 - r / 2)), { top: t, left: n };
        };
        r.prototype.onZoom = function () {
            var t = this,
                e = t.contentStartPos.width,
                o = t.contentStartPos.height,
                l = t.contentStartPos.left,
                a = t.contentStartPos.top,
                v = u(t.newPoints[0], t.newPoints[1]),
                r = v / t.startDistanceBetweenFingers,
                h = Math.floor(e * r),
                c = Math.floor(o * r),
                y = (e - h) * t.percentageOfImageAtPinchPointX,
                p = (o - c) * t.percentageOfImageAtPinchPointY,
                w = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(n).scrollLeft(),
                b = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(n).scrollTop(),
                k = w - t.centerPointStartX,
                d = b - t.centerPointStartY,
                g = l + (y + k),
                nt = a + (p + d),
                tt = { top: nt, left: g, scaleX: t.contentStartPos.scaleX * r, scaleY: t.contentStartPos.scaleY * r };
            t.canTap = !1;
            t.newWidth = h;
            t.newHeight = c;
            t.contentLastPos = tt;
            t.requestId && (f(t.requestId), (t.requestId = null));
            t.requestId = s(function () {
                i.fancybox.setTranslate(t.$content, t.contentLastPos);
            });
        };
        r.prototype.ontouchend = function (n) {
            var r = this,
                u = Math.max(new Date().getTime() - r.startTime, 1),
                o = r.isSwiping,
                s = r.isPanning,
                h = r.isZooming;
            return (
                (r.endPoints = e(n)),
                r.$container.removeClass("fancybox-controls--isGrabbing"),
                i(t).off(".fb.touch"),
                r.requestId && (f(r.requestId), (r.requestId = null)),
                (r.isSwiping = !1),
                (r.isPanning = !1),
                (r.isZooming = !1),
                r.canTap
                    ? r.onTap(n)
                    : ((r.speed = 366),
                      (r.velocityX = (r.distanceX / u) * 0.5),
                      (r.velocityY = (r.distanceY / u) * 0.5),
                      (r.speedX = Math.max(0.5 * r.speed, Math.min(1.5 * r.speed, (1 / Math.abs(r.velocityX)) * r.speed))),
                      void (s ? r.endPanning() : h ? r.endZooming() : r.endSwiping(o)))
            );
        };
        r.prototype.endSwiping = function (n) {
            var t = this,
                r = !1;
            t.instance.isSliding = !1;
            t.sliderLastPos = null;
            "y" == n && Math.abs(t.distanceY) > 50
                ? (i.fancybox.animate(t.instance.current.$slide, { top: t.sliderStartPos.top + t.distanceY + 150 * t.velocityY, opacity: 0 }, 150), (r = t.instance.close(!0, 300)))
                : "x" == n && t.distanceX > 50 && t.instance.group.length > 1
                ? (r = t.instance.previous(t.speedX))
                : "x" == n && t.distanceX < -50 && t.instance.group.length > 1 && (r = t.instance.next(t.speedX));
            r !== !1 || ("x" != n && "y" != n) || t.instance.jumpTo(t.instance.current.index, 150);
            t.$container.removeClass("fancybox-is-sliding");
        };
        r.prototype.endPanning = function () {
            var r,
                u,
                t,
                n = this;
            n.contentLastPos &&
                (n.instance.current.opts.touch.momentum === !1 ? ((r = n.contentLastPos.left), (u = n.contentLastPos.top)) : ((r = n.contentLastPos.left + n.velocityX * n.speed), (u = n.contentLastPos.top + n.velocityY * n.speed)),
                (t = n.limitPosition(r, u, n.contentStartPos.width, n.contentStartPos.height)),
                (t.width = n.contentStartPos.width),
                (t.height = n.contentStartPos.height),
                i.fancybox.animate(n.$content, t, 330));
        };
        r.prototype.endZooming = function () {
            var u,
                f,
                e,
                o,
                n = this,
                s = n.instance.current,
                t = n.newWidth,
                r = n.newHeight;
            n.contentLastPos &&
                ((u = n.contentLastPos.left),
                (f = n.contentLastPos.top),
                (o = { top: f, left: u, width: t, height: r, scaleX: 1, scaleY: 1 }),
                i.fancybox.setTranslate(n.$content, o),
                t < n.canvasWidth && r < n.canvasHeight
                    ? n.instance.scaleToFit(150)
                    : t > s.width || r > s.height
                    ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150)
                    : ((e = n.limitPosition(u, f, t, r)), i.fancybox.setTranslate(n.content, i.fancybox.getTranslate(n.$content)), i.fancybox.animate(n.$content, e, 150)));
        };
        r.prototype.onTap = function (n) {
            var u,
                r = this,
                o = i(n.target),
                t = r.instance,
                f = t.current,
                s = (n && e(n)) || r.startPoints,
                h = s[0] ? s[0].x - r.$stage.offset().left : 0,
                c = s[0] ? s[0].y - r.$stage.offset().top : 0,
                l = function (u) {
                    var e = f.opts[u];
                    if ((i.isFunction(e) && (e = e.apply(t, [f, n])), e))
                        switch (e) {
                            case "close":
                                t.close(r.startEvent);
                                break;
                            case "toggleControls":
                                t.toggleControls(!0);
                                break;
                            case "next":
                                t.next();
                                break;
                            case "nextOrClose":
                                t.group.length > 1 ? t.next() : t.close(r.startEvent);
                                break;
                            case "zoom":
                                "image" == f.type && (f.isLoaded || f.$ghost) && (t.canPan() ? t.scaleToFit() : t.isScaledDown() ? t.scaleToActual(h, c) : t.group.length < 2 && t.close(r.startEvent));
                        }
                };
            if (!((n.originalEvent && 2 == n.originalEvent.button) || t.isSliding || h > o[0].clientWidth + o.offset().left)) {
                if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) u = "Outside";
                else if (o.is(".fancybox-slide")) u = "Slide";
                else {
                    if (!t.current.$content || !t.current.$content.has(n.target).length) return;
                    u = "Content";
                }
                if (r.tapped) {
                    if ((clearTimeout(r.tapped), (r.tapped = null), Math.abs(h - r.tapX) > 50 || Math.abs(c - r.tapY) > 50 || t.isSliding)) return this;
                    l("dblclick" + u);
                } else
                    (r.tapX = h),
                        (r.tapY = c),
                        f.opts["dblclick" + u] && f.opts["dblclick" + u] !== f.opts["click" + u]
                            ? (r.tapped = setTimeout(function () {
                                  r.tapped = null;
                                  l("click" + u);
                              }, 300))
                            : l("click" + u);
                return this;
            }
        };
        i(t).on("onActivate.fb", function (n, t) {
            t && !t.Guestures && (t.Guestures = new r(t));
        });
        i(t).on("beforeClose.fb", function (n, t) {
            t && t.Guestures && t.Guestures.destroy();
        });
    })(window, document, window.jQuery),
    (function (n, t) {
        "use strict";
        var i = function (n) {
            this.instance = n;
            this.init();
        };
        t.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            speed: 3e3,
            init: function () {
                var n = this;
                n.$button = n.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    n.toggle();
                });
                (n.instance.group.length < 2 || !n.instance.group[n.instance.currIndex].opts.slideShow) && n.$button.hide();
            },
            set: function () {
                var n = this;
                n.instance && n.instance.current && (n.instance.current.opts.loop || n.instance.currIndex < n.instance.group.length - 1)
                    ? (n.timer = setTimeout(function () {
                          n.instance.next();
                      }, n.instance.current.opts.slideShow.speed || n.speed))
                    : (n.stop(), (n.instance.idleSecondsCounter = 0), n.instance.showControls());
            },
            clear: function () {
                var n = this;
                clearTimeout(n.timer);
                n.timer = null;
            },
            start: function () {
                var n = this,
                    t = n.instance.current;
                n.instance && t && (t.opts.loop || t.index < n.instance.group.length - 1) && ((n.isActive = !0), n.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), t.isComplete && n.set());
            },
            stop: function () {
                var n = this,
                    t = n.instance.current;
                n.clear();
                n.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause");
                n.isActive = !1;
            },
            toggle: function () {
                var n = this;
                n.isActive ? n.stop() : n.start();
            },
        });
        t(n).on({
            "onInit.fb": function (n, t) {
                t && !t.SlideShow && (t.SlideShow = new i(t));
            },
            "beforeShow.fb": function (n, t, i, r) {
                var u = t && t.SlideShow;
                r ? u && i.opts.slideShow.autoStart && u.start() : u && u.isActive && u.clear();
            },
            "afterShow.fb": function (n, t) {
                var i = t && t.SlideShow;
                i && i.isActive && i.set();
            },
            "afterKeydown.fb": function (i, r, u, f, e) {
                var o = r && r.SlideShow;
                o && u.opts.slideShow && (80 === e || 32 === e) && !t(n.activeElement).is("button,a,input") && (f.preventDefault(), o.toggle());
            },
            "beforeClose.fb onDeactivate.fb": function (n, t) {
                var i = t && t.SlideShow;
                i && i.stop();
            },
        });
        t(n).on("visibilitychange", function () {
            var r = t.fancybox.getInstance(),
                i = r && r.SlideShow;
            i && i.isActive && (n.hidden ? i.clear() : i.set());
        });
    })(document, window.jQuery),
    (function (n, t) {
        "use strict";
        var i = (function () {
                for (
                    var t,
                        i,
                        u = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                        ],
                        f = {},
                        r = 0;
                    r < u.length;
                    r++
                )
                    if (((t = u[r]), t && t[1] in n)) {
                        for (i = 0; i < t.length; i++) f[u[0][i]] = t[i];
                        return f;
                    }
                return !1;
            })(),
            r;
        if (!i) return void (t.fancybox.defaults.btnTpl.fullScreen = !1);
        r = {
            request: function (t) {
                t = t || n.documentElement;
                t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT);
            },
            exit: function () {
                n[i.exitFullscreen]();
            },
            toggle: function (t) {
                t = t || n.documentElement;
                this.isFullscreen() ? this.exit() : this.request(t);
            },
            isFullscreen: function () {
                return Boolean(n[i.fullscreenElement]);
            },
            enabled: function () {
                return Boolean(n[i.fullscreenEnabled]);
            },
        };
        t(n).on({
            "onInit.fb": function (n, t) {
                var i,
                    u = t.$refs.toolbar.find("[data-fancybox-fullscreen]");
                t && !t.FullScreen && t.group[t.currIndex].opts.fullScreen
                    ? ((i = t.$refs.container),
                      i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (n) {
                          n.stopPropagation();
                          n.preventDefault();
                          r.toggle(i[0]);
                      }),
                      t.opts.fullScreen && t.opts.fullScreen.autoStart === !0 && r.request(i[0]),
                      (t.FullScreen = r))
                    : u.hide();
            },
            "afterKeydown.fb": function (n, t, i, r, u) {
                t && t.FullScreen && 70 === u && (r.preventDefault(), t.FullScreen.toggle(t.$refs.container[0]));
            },
            "beforeClose.fb": function (n) {
                n && n.FullScreen && r.exit();
            },
        });
        t(n).on(i.fullscreenchange, function () {
            var n = t.fancybox.getInstance();
            n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), (n.isAnimating = !1), n.update(!0, !0, 0));
        });
    })(document, window.jQuery),
    (function (n, t) {
        "use strict";
        var i = function (n) {
            this.instance = n;
            this.init();
        };
        t.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            init: function () {
                var n = this,
                    t = n.instance.group[0],
                    i = n.instance.group[1];
                n.$button = n.instance.$refs.toolbar.find("[data-fancybox-thumbs]");
                n.instance.group.length > 1 && n.instance.group[n.instance.currIndex].opts.thumbs && ("image" == t.type || t.opts.thumb || t.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb)
                    ? (n.$button.on("click", function () {
                          n.toggle();
                      }),
                      (n.isActive = !0))
                    : (n.$button.hide(), (n.isActive = !1));
            },
            create: function () {
                var i,
                    n,
                    r = this.instance;
                this.$grid = t('<div class="fancybox-thumbs"><\/div>').appendTo(r.$refs.container);
                i = "<ul>";
                t.each(r.group, function (t, r) {
                    n = r.opts.thumb || (r.opts.$thumb ? r.opts.$thumb.attr("src") : null);
                    n || "image" !== r.type || (n = r.src);
                    n && n.length && (i += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /><\/li>');
                });
                i += "<\/ul>";
                this.$list = t(i)
                    .appendTo(this.$grid)
                    .on("click", "li", function () {
                        r.jumpTo(t(this).data("index"));
                    });
                this.$list
                    .find("img")
                    .hide()
                    .one("load", function () {
                        var n,
                            i,
                            r,
                            u,
                            o = t(this).parent().removeClass("fancybox-thumbs-loading"),
                            f = o.outerWidth(),
                            e = o.outerHeight();
                        n = this.naturalWidth || this.width;
                        i = this.naturalHeight || this.height;
                        r = n / f;
                        u = i / e;
                        r >= 1 && u >= 1 && (r > u ? ((n /= u), (i = e)) : ((n = f), (i /= r)));
                        t(this)
                            .css({ width: Math.floor(n), height: Math.floor(i), "margin-top": Math.min(0, Math.floor(0.3 * e - 0.3 * i)), "margin-left": Math.min(0, Math.floor(0.5 * f - 0.5 * n)) })
                            .show();
                    })
                    .each(function () {
                        this.src = t(this).data("src");
                    });
            },
            focus: function () {
                this.instance.current &&
                    this.$list
                        .children()
                        .removeClass("fancybox-thumbs-active")
                        .filter('[data-index="' + this.instance.current.index + '"]')
                        .addClass("fancybox-thumbs-active")
                        .focus();
            },
            close: function () {
                this.$grid.hide();
            },
            update: function () {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
                this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide");
                this.instance.update();
            },
            hide: function () {
                this.isVisible = !1;
                this.update();
            },
            show: function () {
                this.isVisible = !0;
                this.update();
            },
            toggle: function () {
                this.isVisible = !this.isVisible;
                this.update();
            },
        });
        t(n).on({
            "onInit.fb": function (n, t) {
                t && !t.Thumbs && (t.Thumbs = new i(t));
            },
            "beforeShow.fb": function (n, t, i, r) {
                var u = t && t.Thumbs;
                if (u && u.isActive) {
                    if (i.modal) return u.$button.hide(), void u.hide();
                    r && t.opts.thumbs.autoStart === !0 && u.show();
                    u.isVisible && u.focus();
                }
            },
            "afterKeydown.fb": function (n, t, i, r, u) {
                var f = t && t.Thumbs;
                f && f.isActive && 71 === u && (r.preventDefault(), f.toggle());
            },
            "beforeClose.fb": function (n, t) {
                var i = t && t.Thumbs;
                i && i.isVisible && t.opts.thumbs.hideOnClose !== !1 && i.close();
            },
        });
    })(document, window.jQuery),
    (function (n, t, i) {
        "use strict";
        function f() {
            var r = t.location.hash.substr(1),
                n = r.split("-"),
                i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
                u = n.join("-");
            return i < 1 && (i = 1), { hash: r, index: i, gallery: u };
        }
        function o(n) {
            var t;
            "" !== n.gallery && ((t = i("[data-fancybox='" + i.escapeSelector(n.gallery) + "']").eq(n.index - 1)), t.length ? t.trigger("click") : i("#" + i.escapeSelector(n.gallery)).trigger("click"));
        }
        function e(n) {
            var t;
            return !!n && ((t = n.current ? n.current.opts : n.opts), t.$orig ? t.$orig.data("fancybox") : t.hash || "");
        }
        i.escapeSelector ||
            (i.escapeSelector = function (n) {
                var t = function (n, t) {
                    return t ? ("\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " ") : "\\" + n;
                };
                return (n + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, t);
            });
        var r = null,
            u = null;
        i(function () {
            setTimeout(function () {
                i.fancybox.defaults.hash !== !1 &&
                    (i(n).on({
                        "onInit.fb": function (n, t) {
                            var i, r;
                            t.group[t.currIndex].opts.hash !== !1 && ((i = f()), (r = e(t)), r && i.gallery && r == i.gallery && (t.currIndex = i.index - 1));
                        },
                        "beforeShow.fb": function (i, f, o, s) {
                            var h;
                            o.opts.hash !== !1 &&
                                ((h = e(f)),
                                h &&
                                    "" !== h &&
                                    (t.location.hash.indexOf(h) < 0 && (f.opts.origHash = t.location.hash),
                                    (r = h + (f.group.length > 1 ? "-" + (o.index + 1) : "")),
                                    "replaceState" in t.history
                                        ? (u && clearTimeout(u),
                                          (u = setTimeout(function () {
                                              t.history[s ? "pushState" : "replaceState"]({}, n.title, t.location.pathname + t.location.search + "#" + r);
                                              u = null;
                                          }, 300)))
                                        : (t.location.hash = r)));
                        },
                        "beforeClose.fb": function (f, o, s) {
                            var h, c;
                            u && clearTimeout(u);
                            s.opts.hash !== !1 &&
                                ((h = e(o)),
                                (c = o && o.opts.origHash ? o.opts.origHash : ""),
                                h &&
                                    "" !== h &&
                                    ("replaceState" in history ? t.history.replaceState({}, n.title, t.location.pathname + t.location.search + c) : ((t.location.hash = c), i(t).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))),
                                (r = null));
                        },
                    }),
                    i(t).on("hashchange.fb", function () {
                        var n = f();
                        i.fancybox.getInstance() ? !r || r === n.gallery + "-" + n.index || (1 === n.index && r == n.gallery) || ((r = null), i.fancybox.close()) : "" !== n.gallery && o(n);
                    }),
                    i(t).one("unload.fb popstate.fb", function () {
                        i.fancybox.getInstance("close", !0, 0);
                    }),
                    o(f()));
            }, 50);
        });
    })(document, window, window.jQuery);