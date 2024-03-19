(function(a) {
    var n = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return (n.Android() || n.BlackBerry() || n.iOS() || n.Opera() || n.Windows())
        }
    };
    var s = function() {
        var y = "desktop";
        a(window).on("load resize", function() {
            var B = "desktop";
            if (matchMedia("only screen and (max-width: 991px)").matches) {
                B = "mobile"
            }
            if (B !== y) {
                y = B;
                if (B === "mobile") {
                    var A = a("#mainnav").attr("id", "mainnav-mobi").hide();
                    var C = a("#mainnav-mobi").find("li:has(ul)");
                    a("#header").after(A);
                    C.children("ul").hide();
                    C.children("a").after('<span class="btn-submenu"></span>');
                    a(".btn-menu").removeClass("active")
                } else {
                    var z = a("#mainnav-mobi").attr("id", "mainnav").removeAttr("style");
                    z.find(".submenu").removeAttr("style");
                    a("#header").find(".nav-wrap").append(z);
                    a(".btn-submenu").remove()
                }
            }
        });
        a(".btn-menu").on("click", function() {
            a("#mainnav-mobi").slideToggle(300);
            a(this).toggleClass("active");
            return false
        });
        a(document).on("click", "#mainnav-mobi li .btn-submenu", function(z) {
            a(this).toggleClass("active").next("ul").slideToggle(300);
            z.stopImmediatePropagation();
            return false
        })
    };
    var m = function() {
        if (a("body").hasClass("header_sticky")) {
            var A = a(".header");
            if (A.size() != 0) {
                var B = a(".header").offset().top
                  , y = a(".header").height()
                  , z = a("<div />", {
                    height: y
                }).insertAfter(A);
                z.hide();
                a(window).on("load scroll", function() {
                    if (a(window).scrollTop() > B + 120) {
                        a(".header").addClass("downscrolled");
                        z.show()
                    } else {
                        a(".header").removeClass("header-small downscrolled");
                        z.hide()
                    }
                    if (a(window).scrollTop() > 500) {
                        a(".header").addClass("header-small upscrolled")
                    } else {
                        a(".header").removeClass("upscrolled")
                    }
                })
            }
        }
    };
    var b = function() {
        a("#contactform").each(function() {
            a(this).validate({
                submitHandler: function(z) {
                    var y = a(z)
                      , B = y.serialize()
                      , A = a("<div />", {
                        "class": "loading"
                    });
                    a.ajax({
                        type: "POST",
                        url: y.attr("action"),
                        data: B,
                        beforeSend: function() {
                            y.find(".form-submit").append(A)
                        },
                        success: function(D) {
                            var E, C;
                            if (D == "Success") {
                                E = "Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )";
                                C = "msg-success"
                            } else {
                                E = "Error sending email.";
                                C = "msg-error"
                            }
                            y.prepend(a("<div />", {
                                "class": "flat-alert " + C,
                                text: E
                            }).append(a('<a class="close" href="#"><i class="fa fa-close"></i></a>')));
                            y.find(":input").not(".submit").val("")
                        },
                        complete: function(E, D, C) {
                            y.find(".loading").remove()
                        }
                    })
                }
            })
        })
    };
    var c = function() {
        a(document).on("click", ".close", function(y) {
            a(this).closest(".flat-alert").remove();
            y.preventDefault();
            return false
        })
    };
    var d = function() {
        if (a().flexslider) {
            a(".flat-blog-slider").each(function() {
                var y = a(this);
                y.find(".flexslider").flexslider({
                    animation: "slide",
                    direction: "horizontal",
                    pauseOnHover: true,
                    useCSS: false,
                    easing: "swing",
                    animationSpeed: 500,
                    slideshowSpeed: 5000,
                    controlNav: false,
                    directionNav: true,
                    slideshow: true,
                    prevText: '<i class="fa fa-angle-left"></i>',
                    nextText: '<i class="fa fa-angle-right"></i>',
                    smoothHeight: true
                })
            })
        }
    };
    var f = function() {
        a('[data-waypoint-active="yes"]').waypoint(function() {
            a(this).trigger("on-appear")
        }, {
            offset: "90%",
            triggerOnce: true
        });
        a(window).on("load", function() {
            setTimeout(function() {
                a.waypoints("refresh")
            }, 100)
        })
    };
    var e = function() {
        a(".blog-carosuel-wrap").each(function() {
            if (a().owlCarousel) {
                a(this).find(".blog-carosuel").owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: false,
                    auto: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 2
                        },
                        767: {
                            items: 2
                        },
                        991: {
                            items: 3
                        },
                        1200: {
                            items: 3
                        }
                    }
                })
            }
        })
    };
    var h = function() {
        a(".flat-row").each(function() {
            if (a().owlCarousel) {
                a(this).find(".flat-client").owlCarousel({
                    loop: true,
                    margin: a(".flat-client").data("margin"),
                    nav: a(".flat-client").data("nav"),
                    dots: a(".flat-client").data("dots"),
                    autoplay: a(".flat-client").data("auto"),
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 2
                        },
                        767: {
                            items: 3
                        },
                        991: {
                            items: 3
                        },
                        1200: {
                            items: a(".flat-client").data("item")
                        }
                    }
                })
            }
        })
    };
    var i = function() {
        a(".wrap-team").each(function() {
            if (a().owlCarousel) {
                a(this).find(".flat-team-olw").owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: a(".flat-team-olw").data("nav"),
                    dots: a(".flat-team-olw").data("dots"),
                    autoplay: a(".flat-team-olw").data("auto"),
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 2
                        },
                        767: {
                            items: 1
                        },
                        991: {
                            items: 1
                        },
                        1200: {
                            items: a(".flat-team-olw").data("item")
                        }
                    }
                })
            }
        })
    };
    var k = function() {
        if (a().gmap3) {
            a("#flat-map").gmap3({
                map: {
                    options: {
                        zoom: 11,
                        mapTypeId: "iseo_style",
                        mapTypeControlOptions: {
                            mapTypeIds: ["iseo_style", google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false
                    }
                },
                getlatlng: {
                    address: "PO Box 97845 Baker st. 567, Los Angeles, California, United States",
                    callback: function(y) {
                        if (!y) {
                            return
                        }
                        a(this).gmap3("get").setCenter(new google.maps.LatLng(y[0].geometry.location.lat(),y[0].geometry.location.lng()));
                        a(this).gmap3({
                            marker: {
                                latLng: y[0].geometry.location,
                                options: {
                                    icon: "http://themesflat.com/html/iseo/images/icon/marker.png"
                                }
                            }
                        })
                    }
                },
                styledmaptype: {
                    id: "iseo_style",
                    options: {
                        name: "Iseo Map"
                    },
                    styles: [{
                        featureType: "landscape",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 65
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "poi",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 51
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road.highway",
                        stylers: [{
                            saturation: -100
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road.arterial",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 30
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.local",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 40
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "transit",
                        stylers: [{
                            saturation: -100
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "administrative.province",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "labels",
                        stylers: [{
                            visibility: "on"
                        }, {
                            lightness: -25
                        }, {
                            saturation: -100
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            hue: "#edf0f4"
                        }, {
                            lightness: 17
                        }, {
                            saturation: -97
                        }]
                    }]
                },
            })
        }
    };
    var j = function() {
        a(".flat-row").each(function() {
            if (a().owlCarousel) {
                a(this).find(".flat-testimonials").owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: a(".flat-testimonials").data("nav"),
                    dots: a(".flat-testimonials").data("dots"),
                    autoplay: a(".flat-testimonials").data("auto"),
                    responsive: {
                        0: {
                            items: 1
                        },
                        767: {
                            items: 1
                        },
                        991: {
                            items: 1
                        },
                        1200: {
                            items: a(".flat-testimonials").data("item")
                        }
                    }
                })
            }
        })
    };
    var q = function() {
        if (a().isotope) {
            var y = a(".portfolio-wrap");
            y.imagesLoaded(function() {
                y.isotope({
                    itemSelector: ".item",
                    transitionDuration: "1s"
                })
            });
            a(".portfolio-filter li").on("click", function() {
                var z = a(this).find("a").attr("data-filter");
                a(".portfolio-filter li").removeClass("active");
                a(this).addClass("active");
                y.isotope({
                    filter: z
                });
                return false
            });
            a(".flat-portfolio .load-more a").on("click", function(z) {
                z.preventDefault();
                return false;
                var A = a(this)
                  , C = A.attr("href")
                  , B = parseInt(A.attr("data-page"), 10);
                A.addClass("loading").text("Loading...");
                a.ajax({
                    type: "GET",
                    url: C,
                    dataType: "html",
                    async: false,
                    data: {
                        page: B
                    }
                }).done(function(D) {
                    if (D != null) {
                        var E = a(D);
                        y.append(E).isotope("appended", E);
                        A.removeClass("loading").text("Load more");
                        B = B + 1;
                        A.attr({
                            "data-page": B,
                            href: "./ajax/p" + B + ".html"
                        })
                    }
                }).fail(function() {
                    A.text("No more portfolio to load.")
                })
            })
        }
    };
    var h = function() {
        a(".flat-row").each(function() {
            if (a().owlCarousel) {
                a(this).find(".flat-client").owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: a(".flat-client").data("nav"),
                    dots: a(".flat-client").data("dots"),
                    autoplay: a(".flat-client").data("auto"),
                    responsive: {
                        0: {
                            items: 2
                        },
                        320: {
                            items: 2
                        },
                        480: {
                            items: 2
                        },
                        767: {
                            items: 3
                        },
                        991: {
                            items: 3
                        },
                        1200: {
                            items: a(".flat-client").data("item")
                        }
                    }
                })
            }
        })
    };
    var g = function() {
        var y = {
            duration: 600
        };
        a(".flat-toggle .toggle-title.active").siblings(".toggle-content").show();
        a(".flat-toggle.enable .toggle-title").on("click", function() {
            a(this).closest(".flat-toggle").find(".toggle-content").slideToggle(y);
            a(this).toggleClass("active");
            return false
        });
        a(".flat-accordion .toggle-title").on("click", function() {
            if (!a(this).is(".active")) {
                a(this).closest(".flat-accordion").find(".toggle-title.active").toggleClass("active").next().slideToggle(y);
                a(this).toggleClass("active");
                a(this).next().slideToggle(y);
                return false
            } else {
                a(this).toggleClass("active");
                a(this).next().slideToggle(y)
            }
        })
    };
    var t = function() {
        if (a().fitVids) {
            a(".container").fitVids()
        }
    };
    var w = function() {
        function y() {
            a(".switcher-container").on("click", "a.sw-light", function() {
                a(this).toggleClass("active");
                a("body").addClass("home-boxed");
                a("body").css({
                    background: "#f6f6f6"
                });
                a(".sw-pattern.pattern").css({
                    top: "100%",
                    opacity: 1,
                    "z-index": "10"
                });
                return false
            }).on("click", "a.sw-dark", function() {
                a(".sw-pattern.pattern").css({
                    top: "98%",
                    opacity: 0,
                    "z-index": "-1"
                });
                a(this).removeClass("active").addClass("active");
                a("body").removeClass("home-boxed");
                a("body").css({
                    background: "#fff"
                });
                return false
            })
        }
        function z() {
            a(".sw-pattern").on("click", function() {
                a(".sw-pattern.pattern a").removeClass("current");
                a(this).addClass("current");
                a("body").css({
                    background: 'url("' + a(this).data("image") + '")',
                    "background-size": "30px 30px",
                    "background-repeat": "repeat"
                });
                return false
            })
        }
        y();
        z()
    };
    var l = function() {
        a(window).scroll(function() {
            if (a(this).scrollTop() > 800) {
                a(".go-top").addClass("show")
            } else {
                a(".go-top").removeClass("show")
            }
        });
        a(".go-top").on("click", function() {
            a("html, body").animate({
                scrollTop: 0
            }, 1000, "easeInOutExpo");
            return false
        })
    };
    var x = function() {
        a(".menu.menu-extra li a").on("click", function() {
            a("body").toggleClass("off-canvas-active");
            return false
        });
        a("#site-off-canvas .close").on("click", function() {
            a("body").removeClass("off-canvas-active");
            return false
        })
    };
    var u = function() {
        var y = window.devicePixelRatio > 1 ? true : false;
        if (y) {
            a(".header .logo").find("img").attr({
                src: "static/image/logo@2x.png",
                width: "370",
                height: "70"
            })
        }
    };
    var o = function() {
        if (a().parallax && n.any() == null) {
            a(".parallax1").parallax("50%", 0.2);
            a(".parallax4").parallax("50%", 0.4);
            a(".parallax2").parallax("50%", 0.4);
            a(".parallax3").parallax("50%", 0.5)
        }
    };
    var p = function() {
        a(".popup-gallery").magnificPopup({
            type: "image",
            tLoading: "Loading image #%curr%...",
            removalDelay: 600,
            mainClass: "my-mfp-slide-bottom",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        })
    };
    var v = function() {
        if (a().YTPlayer) {
            a(".video-section").YTPlayer({
                showControls: false,
                autoPlay: false
            });
            var y = a(".video-section");
            a("#video-controls a").each(function() {
                var z = a(this);
                z.on("click", (function(A) {
                    A.preventDefault();
                    if (z.hasClass("fa-play")) {
                        z.removeClass("fa-play").addClass("fa-pause");
                        y.playYTP();
                        return false
                    }
                    if (z.hasClass("fa-pause")) {
                        z.removeClass("fa-pause").addClass("fa-play");
                        y.pauseYTP();
                        return false
                    }
                }
                ))
            })
        }
    };
    var r = function() {
        a(".loading-overlay").fadeOut("slow", function() {
            a(this).remove()
        })
    };
    a(function() {
        if (matchMedia("only screen and (min-width: 991px)").matches) {
            m()
        }
        s();
        k();
        j();
        e();
        d();
        q();
        h();
        w();
        l();
        x();
        t();
        i();
        u();
        o();
        b();
        // g();
        c();
        f();
        r()
    })
}
)(jQuery);
