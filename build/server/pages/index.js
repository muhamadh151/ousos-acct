(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": [
		748,
		748
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 539;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(503);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./components/navbar5.js





const Navbar5 = (props)=>{
    const translate = (0,external_next_intl_.useTranslations)();
    const { 0: link5AccordionOpen , 1: setLink5AccordionOpen  } = (0,external_react_.useState)(false);
    const { 0: link5DropdownVisible , 1: setLink5DropdownVisible  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                        "data-thq": "thq-navbar",
                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-navbar-interactive",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/logo-2%20(1)-1500h.png",
                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-image1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container11",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        "data-thq": "thq-dropdown",
                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-language-switcher list-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                "data-thq": "thq-dropdown-toggle",
                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-language-switcher-toggle",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "data-thq": "thq-dropdown-arrow",
                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-dropdown-arrow",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        viewBox: "0 0 1024 1024",
                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon10",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M426 726v-428l214 214z",
                                                            className: "jsx-3bc1a7087c0fa415"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                "data-thq": "thq-dropdown-list",
                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-language-switcher-list",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "jsx-3bc1a7087c0fa415",
                                                    children: [].map((all_languages, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-language-switcher-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: props.languageLinkUrl,
                                                                    className: "jsx-3bc1a7087c0fa415",
                                                                    children: all_languages?.name
                                                                })
                                                            })
                                                        }, index))
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        "data-thq": "thq-navbar-nav",
                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-desktop-menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-links1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: props.link1Url,
                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-link11 thq-body-small thq-link",
                                                    children: props.link1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: translate.raw("text_aCg3tt")
                                                                },
                                                                className: "jsx-3bc1a7087c0fa415"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: props.link2Url,
                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-link21 thq-body-small thq-link",
                                                    children: props.link2 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: translate.raw("text_Ale8H7")
                                                                },
                                                                className: "jsx-3bc1a7087c0fa415"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container13",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            onClick: ()=>setLink5DropdownVisible(!link5DropdownVisible),
                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-link4-dropdown-trigger",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-link41 thq-body-small thq-link",
                                                                    children: props.link4 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                dangerouslySetInnerHTML: {
                                                                                    __html: translate.raw("text_GS_E9J")
                                                                                },
                                                                                className: "jsx-3bc1a7087c0fa415"
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon-container1",
                                                                    children: [
                                                                        link5DropdownVisible && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container14",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                                viewBox: "0 0 1024 1024",
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon12",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    d: "M298 426h428l-214 214z",
                                                                                    className: "jsx-3bc1a7087c0fa415"
                                                                                })
                                                                            })
                                                                        }),
                                                                        !link5DropdownVisible && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container15",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                                viewBox: "0 0 1024 1024",
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon14",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    d: "M426 726v-428l214 214z",
                                                                                    className: "jsx-3bc1a7087c0fa415"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        link5DropdownVisible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container16 thq-box-shadow",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-menu-item1",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-content1",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: props.linkUrlPage1,
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-page11 thq-body-large",
                                                                            children: props.page1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text7",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_jTDmJd")
                                                                                        },
                                                                                        className: "jsx-3bc1a7087c0fa415"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-menu-item2",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-content2",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: props.linkUrlPage2,
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-page21 thq-body-large",
                                                                            children: props.page2 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text5",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_zcoLmM")
                                                                                        },
                                                                                        className: "jsx-3bc1a7087c0fa415"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-menu-item3",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-content3",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: props.linkUrlPage3,
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-page31 thq-body-large",
                                                                            children: props.page3 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text6",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_0m8-74")
                                                                                        },
                                                                                        className: "jsx-3bc1a7087c0fa415"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-menu-item4",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-content4",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: props.linkUrlPage4,
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-page41 thq-body-large",
                                                                            children: props.page4 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text2",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_fPSJ1f")
                                                                                        },
                                                                                        className: "jsx-3bc1a7087c0fa415"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                "data-thq": "thq-burger-menu",
                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-burger-menu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    viewBox: "0 0 1024 1024",
                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z",
                                        className: "jsx-3bc1a7087c0fa415"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-thq": "thq-mobile-menu",
                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-mobile-menu",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-nav",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-top",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: props.logoAlt,
                                                        src: props.logoSrc,
                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-logo"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        "data-thq": "thq-close-menu",
                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-close-menu",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            viewBox: "0 0 1024 1024",
                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon18",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z",
                                                                className: "jsx-3bc1a7087c0fa415"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-links2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: props.link1Url,
                                                        className: "jsx-3bc1a7087c0fa415" + " " + "thq-body-small thq-link",
                                                        children: props.link1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: translate.raw("text_aCg3tt")
                                                                    },
                                                                    className: "jsx-3bc1a7087c0fa415"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: props.link2Url,
                                                        className: "jsx-3bc1a7087c0fa415" + " " + "thq-body-small thq-link",
                                                        children: props.link2 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text4",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: translate.raw("text_Ale8H7")
                                                                    },
                                                                    className: "jsx-3bc1a7087c0fa415"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-link4-accordion",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                onClick: ()=>setLink5AccordionOpen(!link5AccordionOpen),
                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-trigger",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "thq-body-small thq-link",
                                                                        children: props.link4 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text3",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    dangerouslySetInnerHTML: {
                                                                                        __html: translate.raw("text_GS_E9J")
                                                                                    },
                                                                                    className: "jsx-3bc1a7087c0fa415"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon-container2",
                                                                        children: [
                                                                            link5AccordionOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container17",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                                    viewBox: "0 0 1024 1024",
                                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon20",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                        d: "M298 426h428l-214 214z",
                                                                                        className: "jsx-3bc1a7087c0fa415"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            !link5AccordionOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container18",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                                    viewBox: "0 0 1024 1024",
                                                                                    className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon22",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                        d: "M426 726v-428l214 214z",
                                                                                        className: "jsx-3bc1a7087c0fa415"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            link5AccordionOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container19",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-menu-item5",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-content5",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: props.linkUrlPage1,
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-page12 thq-body-large",
                                                                                children: props.page1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text7",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            dangerouslySetInnerHTML: {
                                                                                                __html: translate.raw("text_jTDmJd")
                                                                                            },
                                                                                            className: "jsx-3bc1a7087c0fa415"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-menu-item6",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-content6",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: props.linkUrlPage2,
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-page22 thq-body-large",
                                                                                children: props.page2 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text5",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            dangerouslySetInnerHTML: {
                                                                                                __html: translate.raw("text_zcoLmM")
                                                                                            },
                                                                                            className: "jsx-3bc1a7087c0fa415"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-menu-item7",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-content7",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: props.linkUrlPage3,
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-page32 thq-body-large",
                                                                                children: props.page3 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text6",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            dangerouslySetInnerHTML: {
                                                                                                __html: translate.raw("text_0m8-74")
                                                                                            },
                                                                                            className: "jsx-3bc1a7087c0fa415"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-menu-item8",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-content8",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: props.linkUrlPage4,
                                                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-page42 thq-body-large",
                                                                                children: props.page4 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-text2",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            dangerouslySetInnerHTML: {
                                                                                                __html: translate.raw("text_fPSJ1f")
                                                                                            },
                                                                                            className: "jsx-3bc1a7087c0fa415"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon-group",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                viewBox: "0 0 950.8571428571428 1024",
                                                className: "jsx-3bc1a7087c0fa415" + " " + "thq-icon-x-small",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z",
                                                    className: "jsx-3bc1a7087c0fa415"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                viewBox: "0 0 877.7142857142857 1024",
                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon26 thq-icon-x-small",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z",
                                                    className: "jsx-3bc1a7087c0fa415"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                viewBox: "0 0 602.2582857142856 1024",
                                                className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-icon28 thq-icon-x-small",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z",
                                                    className: "jsx-3bc1a7087c0fa415"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    link5DropdownVisible && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>setLink5DropdownVisible(false),
                        className: "jsx-3bc1a7087c0fa415" + " " + "navbar5-container20"
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "3bc1a7087c0fa415",
                children: ".navbar5-container10.jsx-3bc1a7087c0fa415{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:100;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--dl-color-theme-neutral-light)}.navbar5-navbar-interactive.jsx-3bc1a7087c0fa415{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:100;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:var(--dl-layout-space-twounits);padding-left:var(--dl-layout-space-unit);padding-right:var(--dl-layout-space-threeunits);padding-bottom:var(--dl-layout-space-twounits);-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:#1b1b34}.navbar5-image1.jsx-3bc1a7087c0fa415{height:3rem}.navbar5-container11.jsx-3bc1a7087c0fa415{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:space-between;-webkit-align-items:space-between;-moz-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-language-switcher.jsx-3bc1a7087c0fa415{cursor:pointer;display:inline-block;position:relative;-webkit-border-radius:var(--dl-layout-radius-radius2);-moz-border-radius:var(--dl-layout-radius-radius2);border-radius:var(--dl-layout-radius-radius2)}.navbar5-language-switcher-toggle.jsx-3bc1a7087c0fa415{fill:#595959;color:#595959;width:auto;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:var(--dl-layout-space-halfunit);padding-left:var(--dl-layout-space-unit);-webkit-border-radius:var(--dl-layout-radius-radius2);-moz-border-radius:var(--dl-layout-radius-radius2);border-radius:var(--dl-layout-radius-radius2);padding-right:var(--dl-layout-space-unit);padding-bottom:var(--dl-layout-space-halfunit)}.navbar5-dropdown-arrow.jsx-3bc1a7087c0fa415{-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.navbar5-icon10.jsx-3bc1a7087c0fa415{width:18px;height:18px;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.navbar5-language-switcher-list.jsx-3bc1a7087c0fa415{left:0%;width:-webkit-max-content;width:-moz-max-content;width:max-content;display:none;z-index:100;position:absolute;min-width:100%;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-color:#d9d9d9;border-width:1px;-webkit-border-radius:var(--dl-layout-radius-radius4);-moz-border-radius:var(--dl-layout-radius-radius4);border-radius:var(--dl-layout-radius-radius4);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;list-style-type:none;list-style-position:inside}.navbar5-language-switcher-item.jsx-3bc1a7087c0fa415{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-top:var(--dl-layout-space-halfunit);padding-left:var(--dl-layout-space-unit);padding-right:var(--dl-layout-space-unit);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:var(--dl-layout-space-halfunit);background-color:#fff}.navbar5-desktop-menu.jsx-3bc1a7087c0fa415{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar5-links1.jsx-3bc1a7087c0fa415{gap:var(--dl-layout-space-twounits);-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:872px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-link11.jsx-3bc1a7087c0fa415{color:#fff}.navbar5-link21.jsx-3bc1a7087c0fa415{color:#fff}.navbar5-container13.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-link4-dropdown-trigger.jsx-3bc1a7087c0fa415{gap:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-link41.jsx-3bc1a7087c0fa415{fill:var(--dl-color-theme-secondary1);color:var(--dl-color-theme-secondary1)}.navbar5-icon-container1.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-container14.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-icon12.jsx-3bc1a7087c0fa415{width:24px;height:24px}.navbar5-container15.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-icon14.jsx-3bc1a7087c0fa415{width:24px;height:24px}.navbar5-container16.jsx-3bc1a7087c0fa415{top:30px;right:0px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-oneandhalfunits);z-index:100;position:absolute;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-animation-name:fadeInDown;-moz-animation-name:fadeInDown;-o-animation-name:fadeInDown;animation-name:fadeInDown;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;background-color:var(--dl-color-theme-neutral-light);-webkit-animation-duration:300ms;-moz-animation-duration:300ms;-o-animation-duration:300ms;animation-duration:300ms;-webkit-animation-direction:normal;-moz-animation-direction:normal;-o-animation-direction:normal;animation-direction:normal;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease}.navbar5-menu-item1.jsx-3bc1a7087c0fa415{gap:12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px 0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.navbar5-content1.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-page11.jsx-3bc1a7087c0fa415{white-space:nowrap}.navbar5-menu-item2.jsx-3bc1a7087c0fa415{gap:12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px 0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.navbar5-content2.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-page21.jsx-3bc1a7087c0fa415{white-space:nowrap}.navbar5-menu-item3.jsx-3bc1a7087c0fa415{gap:12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px 0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.navbar5-content3.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-page31.jsx-3bc1a7087c0fa415{white-space:nowrap}.navbar5-menu-item4.jsx-3bc1a7087c0fa415{gap:12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px 0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.navbar5-content4.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-page41.jsx-3bc1a7087c0fa415{white-space:nowrap}.navbar5-burger-menu.jsx-3bc1a7087c0fa415{display:none}.navbar5-icon16.jsx-3bc1a7087c0fa415{width:var(--dl-layout-size-xsmall);height:var(--dl-layout-size-xsmall)}.navbar5-mobile-menu.jsx-3bc1a7087c0fa415{top:0px;left:0px;width:100%;height:100vh;display:none;padding:var(--dl-layout-space-twounits);z-index:100;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--dl-color-theme-neutral-light)}.navbar5-nav.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-top.jsx-3bc1a7087c0fa415{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:var(--dl-layout-space-threeunits);-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar5-logo.jsx-3bc1a7087c0fa415{height:2rem}.navbar5-close-menu.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.navbar5-icon18.jsx-3bc1a7087c0fa415{width:var(--dl-layout-size-xsmall);height:var(--dl-layout-size-xsmall)}.navbar5-links2.jsx-3bc1a7087c0fa415{gap:var(--dl-layout-space-unit);width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-link4-accordion.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-trigger.jsx-3bc1a7087c0fa415{width:100%;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar5-icon-container2.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-container17.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-icon20.jsx-3bc1a7087c0fa415{width:24px;height:24px}.navbar5-container18.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.navbar5-icon22.jsx-3bc1a7087c0fa415{width:24px;height:24px}.navbar5-container19.jsx-3bc1a7087c0fa415{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-top:var(--dl-layout-space-unit);padding-left:var(--dl-layout-space-oneandhalfunits);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-menu-item5.jsx-3bc1a7087c0fa415{gap:12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px 0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-content5.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-page12.jsx-3bc1a7087c0fa415{white-space:nowrap}.navbar5-menu-item6.jsx-3bc1a7087c0fa415{gap:12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px 0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-content6.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-page22.jsx-3bc1a7087c0fa415{white-space:nowrap}.navbar5-menu-item7.jsx-3bc1a7087c0fa415{gap:12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px 0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-content7.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-page32.jsx-3bc1a7087c0fa415{white-space:nowrap}.navbar5-menu-item8.jsx-3bc1a7087c0fa415{gap:12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px 0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-content8.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-page42.jsx-3bc1a7087c0fa415{white-space:nowrap}.navbar5-icon-group.jsx-3bc1a7087c0fa415{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.navbar5-icon26.jsx-3bc1a7087c0fa415{height:var(--dl-layout-size-xsmall)}.navbar5-icon28.jsx-3bc1a7087c0fa415{height:var(--dl-layout-size-xsmall)}.navbar5-container20.jsx-3bc1a7087c0fa415{top:0px;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.navbar5-text1.jsx-3bc1a7087c0fa415{display:inline-block}.navbar5-text2.jsx-3bc1a7087c0fa415{display:inline-block}.navbar5-text3.jsx-3bc1a7087c0fa415{display:inline-block}.navbar5-text4.jsx-3bc1a7087c0fa415{display:inline-block}.navbar5-text5.jsx-3bc1a7087c0fa415{display:inline-block}.navbar5-text6.jsx-3bc1a7087c0fa415{display:inline-block}.navbar5-text7.jsx-3bc1a7087c0fa415{display:inline-block}@media(max-width:767px){.navbar5-navbar-interactive.jsx-3bc1a7087c0fa415{padding-left:var(--dl-layout-space-twounits);padding-right:var(--dl-layout-space-twounits)}.navbar5-desktop-menu.jsx-3bc1a7087c0fa415{display:none}.navbar5-burger-menu.jsx-3bc1a7087c0fa415{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}@media(max-width:479px){.navbar5-navbar-interactive.jsx-3bc1a7087c0fa415{padding:var(--dl-layout-space-unit)}.navbar5-mobile-menu.jsx-3bc1a7087c0fa415{padding:var(--dl-layout-space-unit)}}"
            })
        ]
    });
};
Navbar5.defaultProps = {
    link1: undefined,
    link2Url: "https://www.teleporthq.io",
    linkUrlPage2: "https://www.teleporthq.io",
    link1Url: "https://www.teleporthq.io",
    linkUrlPage4: "https://www.teleporthq.io",
    linkUrlPage1: "https://www.teleporthq.io",
    page4: undefined,
    logoAlt: "teleportHQ Logo",
    link4: undefined,
    linkUrlPage3: "https://www.teleporthq.io",
    link2: undefined,
    logoSrc: "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original",
    languageLinkUrl: "https://www.teleporthq.io",
    page2: undefined,
    page3: undefined,
    page1: undefined
};
Navbar5.propTypes = {
    link1: (external_prop_types_default()).element,
    link2Url: (external_prop_types_default()).string,
    linkUrlPage2: (external_prop_types_default()).string,
    link1Url: (external_prop_types_default()).string,
    linkUrlPage4: (external_prop_types_default()).string,
    linkUrlPage1: (external_prop_types_default()).string,
    page4: (external_prop_types_default()).element,
    logoAlt: (external_prop_types_default()).string,
    link4: (external_prop_types_default()).element,
    linkUrlPage3: (external_prop_types_default()).string,
    link2: (external_prop_types_default()).element,
    logoSrc: (external_prop_types_default()).string,
    languageLinkUrl: (external_prop_types_default()).string,
    page2: (external_prop_types_default()).element,
    page3: (external_prop_types_default()).element,
    page1: (external_prop_types_default()).element
};
/* harmony default export */ const navbar5 = (Navbar5);

;// CONCATENATED MODULE: ./components/hero15.js





const Hero15 = (props)=>{
    const translate = (0,external_next_intl_.useTranslations)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: props.hero15Id,
                className: "jsx-ff4e744ba0d46eba" + " " + "hero15-container1 thq-section-padding",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-ff4e744ba0d46eba" + " " + "hero15-column",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-ff4e744ba0d46eba" + " " + "hero15-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "jsx-ff4e744ba0d46eba" + " " + "thq-heading-1 hero15-text1",
                                    children: props.heading1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ff4e744ba0d46eba" + " " + "hero15-text6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: translate.raw("text_V9PJW_")
                                                },
                                                className: "jsx-ff4e744ba0d46eba"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "jsx-ff4e744ba0d46eba" + " " + "thq-body-large hero15-text2",
                                    children: props.content1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ff4e744ba0d46eba" + " " + "hero15-text5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: translate.raw("text_751zrn")
                                                },
                                                className: "jsx-ff4e744ba0d46eba"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ff4e744ba0d46eba" + " " + "hero15-container2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            placeholder: props.textinputPlaceholder,
                                            className: "jsx-ff4e744ba0d46eba" + " " + "hero15-textinput thq-input"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "jsx-ff4e744ba0d46eba" + " " + "hero15-container3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "jsx-ff4e744ba0d46eba" + " " + "hero15-button thq-button-filled",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ff4e744ba0d46eba" + " " + "thq-body-small",
                                                    children: props.action3 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-ff4e744ba0d46eba" + " " + "hero15-text4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: translate.raw("text_C7YvOg")
                                                                },
                                                                className: "jsx-ff4e744ba0d46eba"
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/112121-2700h.jpg",
                        className: "jsx-ff4e744ba0d46eba" + " " + "hero15-image"
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ff4e744ba0d46eba",
                children: ".hero15-container1.jsx-ff4e744ba0d46eba{width:100%;height:1015px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.hero15-column.jsx-ff4e744ba0d46eba{gap:24px;width:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:1;max-width:560px;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hero15-content.jsx-ff4e744ba0d46eba{gap:var(--dl-layout-space-oneandhalfunits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-animation-name:fadeInLeft;-moz-animation-name:fadeInLeft;-o-animation-name:fadeInLeft;animation-name:fadeInLeft;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:500ms;-moz-animation-duration:500ms;-o-animation-duration:500ms;animation-duration:500ms;-webkit-animation-direction:normal;-moz-animation-direction:normal;-o-animation-direction:normal;animation-direction:normal;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease}.hero15-container2.jsx-ff4e744ba0d46eba{gap:var(--dl-layout-space-oneandhalfunits);-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.hero15-textinput.jsx-ff4e744ba0d46eba{width:70%;background-color:transparent}.hero15-container3.jsx-ff4e744ba0d46eba{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.hero15-button.jsx-ff4e744ba0d46eba{gap:var(--dl-layout-space-halfunit);-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#c69760}.hero15-image.jsx-ff4e744ba0d46eba{top:-7px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;left:0px;right:0px;width:100%;height:100%;margin:auto;position:absolute;-o-object-fit:cover;object-fit:cover;margin-right:auto;padding-left:4px;margin-bottom:auto}.hero15-text4.jsx-ff4e744ba0d46eba{display:inline-block}.hero15-text5.jsx-ff4e744ba0d46eba{display:inline-block}.hero15-text6.jsx-ff4e744ba0d46eba{display:inline-block}@media(max-width:1600px){.hero15-image.jsx-ff4e744ba0d46eba{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%}}@media(max-width:1200px){.hero15-image.jsx-ff4e744ba0d46eba{width:1199px;height:908px}}@media(max-width:991px){.hero15-column.jsx-ff4e744ba0d46eba{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.hero15-image.jsx-ff4e744ba0d46eba{width:100%;height:100%;padding-top:175px}}@media(max-width:767px){.hero15-column.jsx-ff4e744ba0d46eba{width:100%}.hero15-text1.jsx-ff4e744ba0d46eba{text-align:center}.hero15-text2.jsx-ff4e744ba0d46eba{text-align:center}.hero15-container2.jsx-ff4e744ba0d46eba{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hero15-textinput.jsx-ff4e744ba0d46eba{width:100%}.hero15-container3.jsx-ff4e744ba0d46eba{width:100%}.hero15-button.jsx-ff4e744ba0d46eba{width:100%}}@media(max-width:479px){.hero15-container3.jsx-ff4e744ba0d46eba{width:100%}.hero15-button.jsx-ff4e744ba0d46eba{width:100%}.hero15-image.jsx-ff4e744ba0d46eba{top:-189px;right:-8px;width:478px;height:2604px}}"
            })
        ]
    });
};
Hero15.defaultProps = {
    action3: undefined,
    content1: undefined,
    heading1: undefined,
    textinputPlaceholder: "Enter your email address",
    hero15Id: ""
};
Hero15.propTypes = {
    action3: (external_prop_types_default()).element,
    content1: (external_prop_types_default()).element,
    heading1: (external_prop_types_default()).element,
    textinputPlaceholder: (external_prop_types_default()).string,
    hero15Id: (external_prop_types_default()).string
};
/* harmony default export */ const hero15 = (Hero15);

;// CONCATENATED MODULE: ./components/stats6.js





const Stats6 = (props)=>{
    const translate = (0,external_next_intl_.useTranslations)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-fbe305742413c34a" + " " + `stats6-container1 thq-section-padding ${props.rootClassName} `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-fbe305742413c34a" + " " + "stats6-max-width thq-section-max-width",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-fbe305742413c34a" + " " + "stats6-container2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "jsx-fbe305742413c34a" + " " + "thq-heading-2 stats6-title",
                                    children: props.heading1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-fbe305742413c34a" + " " + "stats6-text19",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: translate.raw("text_n5-B30")
                                                },
                                                className: "jsx-fbe305742413c34a"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-fbe305742413c34a" + " " + "thq-body-small",
                                    children: props.content1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-fbe305742413c34a" + " " + "stats6-text23",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: translate.raw("text_2CQRCT")
                                                },
                                                className: "jsx-fbe305742413c34a"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-fbe305742413c34a" + " " + "stats6-container3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-fbe305742413c34a" + " " + "stats6-container4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "jsx-fbe305742413c34a" + " " + "thq-heading-2 stats6-text10",
                                            children: props.stat1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-fbe305742413c34a" + " " + "stats6-text21",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_F8ElUx")
                                                        },
                                                        className: "jsx-fbe305742413c34a"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-fbe305742413c34a" + " " + "stats6-text11 thq-body-small",
                                            children: props.stat1Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-fbe305742413c34a" + " " + "stats6-text20",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_7XXBSP")
                                                        },
                                                        className: "jsx-fbe305742413c34a"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-fbe305742413c34a" + " " + "stats6-container5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "jsx-fbe305742413c34a" + " " + "thq-heading-2 stats6-text12",
                                            children: props.stat2 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-fbe305742413c34a" + " " + "stats6-text18",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_Fdtpr2")
                                                        },
                                                        className: "jsx-fbe305742413c34a"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-fbe305742413c34a" + " " + "stats6-text13 thq-body-small",
                                            children: props.stat2Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-fbe305742413c34a" + " " + "stats6-text22",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_ljJjBq")
                                                        },
                                                        className: "jsx-fbe305742413c34a"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-fbe305742413c34a" + " " + "stats6-container6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "jsx-fbe305742413c34a" + " " + "thq-heading-2 stats6-text14",
                                            children: props.stat3 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-fbe305742413c34a" + " " + "stats6-text16",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_tsq7sH")
                                                        },
                                                        className: "jsx-fbe305742413c34a"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-fbe305742413c34a" + " " + "stats6-text15 thq-body-small",
                                            children: props.stat3Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-fbe305742413c34a" + " " + "stats6-text17",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_y8SOc5")
                                                        },
                                                        className: "jsx-fbe305742413c34a"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "fbe305742413c34a",
                children: ".stats6-container1.jsx-fbe305742413c34a{height:366px}.stats6-max-width.jsx-fbe305742413c34a{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.stats6-container2.jsx-fbe305742413c34a{gap:var(--dl-layout-space-twounits);-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.stats6-container3.jsx-fbe305742413c34a{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.stats6-container4.jsx-fbe305742413c34a{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-twounits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.stats6-text11.jsx-fbe305742413c34a{text-align:center}.stats6-container5.jsx-fbe305742413c34a{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-twounits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.stats6-text13.jsx-fbe305742413c34a{text-align:center}.stats6-container6.jsx-fbe305742413c34a{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-twounits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.stats6-text15.jsx-fbe305742413c34a{text-align:center}.stats6-text16.jsx-fbe305742413c34a{display:inline-block}.stats6-text17.jsx-fbe305742413c34a{display:inline-block}.stats6-text18.jsx-fbe305742413c34a{display:inline-block}.stats6-text19.jsx-fbe305742413c34a{display:inline-block}.stats6-text20.jsx-fbe305742413c34a{display:inline-block}.stats6-text21.jsx-fbe305742413c34a{display:inline-block}.stats6-text22.jsx-fbe305742413c34a{display:inline-block}.stats6-text23.jsx-fbe305742413c34a{display:inline-block}.stats6root-class-name.jsx-fbe305742413c34a{background-color:#1b1b34}@media(max-width:767px){.stats6-title.jsx-fbe305742413c34a{text-align:center}.stats6-container4.jsx-fbe305742413c34a{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.stats6-text10.jsx-fbe305742413c34a{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.stats6-container5.jsx-fbe305742413c34a{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.stats6-text12.jsx-fbe305742413c34a{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.stats6-container6.jsx-fbe305742413c34a{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.stats6-text14.jsx-fbe305742413c34a{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}}@media(max-width:479px){.stats6-title.jsx-fbe305742413c34a{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center}}"
            })
        ]
    });
};
Stats6.defaultProps = {
    stat3: undefined,
    stat3Description: undefined,
    stat2: undefined,
    heading1: undefined,
    stat1Description: undefined,
    rootClassName: "",
    stat1: undefined,
    stat2Description: undefined,
    content1: undefined
};
Stats6.propTypes = {
    stat3: (external_prop_types_default()).element,
    stat3Description: (external_prop_types_default()).element,
    stat2: (external_prop_types_default()).element,
    heading1: (external_prop_types_default()).element,
    stat1Description: (external_prop_types_default()).element,
    rootClassName: (external_prop_types_default()).string,
    stat1: (external_prop_types_default()).element,
    stat2Description: (external_prop_types_default()).element,
    content1: (external_prop_types_default()).element
};
/* harmony default export */ const stats6 = (Stats6);

;// CONCATENATED MODULE: ./components/features22.js





const Features22 = (props)=>{
    const translate = (0,external_next_intl_.useTranslations)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: props.features22Id,
                className: "jsx-ee9f80433b53bc71" + " " + `features22-layout349 thq-section-padding ${props.rootClassName} `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-ee9f80433b53bc71" + " " + "features22-max-width thq-section-max-width",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-ee9f80433b53bc71" + " " + "features22-container1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                    children: props.heading1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text33",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: translate.raw("text_YnhYD6")
                                                },
                                                className: "jsx-ee9f80433b53bc71"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text11 thq-body-small",
                                    children: props.content1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text31",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: translate.raw("text_Tz_Njb")
                                                },
                                                className: "jsx-ee9f80433b53bc71"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-ee9f80433b53bc71" + " " + "features22-container2 thq-grid-auto-300",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-card1 thq-card thq-flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: "Drag-and-Drop Interface Image",
                                            src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&ixlib=rb-4.0.3&w=1400",
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-image1 thq-img-ratio-1-1 thq-img-round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                            children: props.feature1Title ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text45",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_jKKS9C")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text13 thq-body-small",
                                            children: props.feature1Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text44",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_YnIfPV")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-card2 thq-card thq-flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: props.feature2ImageAlt,
                                            src: "https://images.unsplash.com/photo-1457904375453-3e1fc2fc76f4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&ixlib=rb-4.0.3&w=1400",
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-image2 thq-img-ratio-1-1 thq-img-round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                            children: props.feature2Title ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text30",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_FEPnMw")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text15 thq-body-small",
                                            children: props.feature2Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text34",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_KMcoQG")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-card3 thq-card thq-flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: props.feature3ImageAlt,
                                            src: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&ixlib=rb-4.0.3&w=1400",
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-image3 thq-img-ratio-1-1 thq-img-round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                            children: props.feature3Title ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text28",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_cW8F-t")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text17 thq-body-small",
                                            children: props.feature3Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text35",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_W6vefW")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-card4 thq-card thq-flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: "Collaboration Tools Image",
                                            src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&ixlib=rb-4.0.3&w=1400",
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-image4 thq-img-ratio-1-1 thq-img-round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                            children: props.feature4Title ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text32",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_Rs5pkv")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text19 thq-body-small",
                                            children: props.feature4Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text29",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_mwWz9j")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-card5 thq-card thq-flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: props.feature5ImageAlt,
                                            src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&ixlib=rb-4.0.3&w=1400",
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-image5 thq-img-ratio-1-1 thq-img-round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                            children: props.feature5Title ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text40",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_EtR0-T")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text21 thq-body-small",
                                            children: props.feature5Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text43",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_zsNSkq")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-card6 thq-card thq-flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: props.feature6ImageAlt,
                                            src: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&ixlib=rb-4.0.3&w=1400",
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-image6 thq-img-ratio-1-1 thq-img-round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                            children: props.feature6Title ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text42",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_XUcjJT")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text23 thq-body-small",
                                            children: props.feature6Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text39",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_EVqrXY")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-card7 thq-card thq-flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: props.feature7ImageAlt,
                                            src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGFjY291bnRpbmd8ZW58MHx8fHwxNzQzODk4MTY2fDA&ixlib=rb-4.0.3&w=1400",
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-image7 thq-img-ratio-1-1 thq-img-round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                            children: props.feature7Title ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text36",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_uwRof6")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text25 thq-body-small",
                                            children: props.feature7Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text38",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_wkrEju")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-card8 thq-card thq-flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: props.feature8ImageAlt,
                                            src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&ixlib=rb-4.0.3&w=1400",
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-image8 thq-img-ratio-1-1 thq-img-round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "thq-heading-2",
                                            children: props.feature8Title ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text37",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_Vhz2wn")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-ee9f80433b53bc71" + " " + "features22-text27 thq-body-small",
                                            children: props.feature8Description ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-ee9f80433b53bc71" + " " + "features22-text41",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_JYWiS9")
                                                        },
                                                        className: "jsx-ee9f80433b53bc71"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ee9f80433b53bc71",
                children: ".features22-layout349.jsx-ee9f80433b53bc71{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.features22-max-width.jsx-ee9f80433b53bc71{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.features22-container1.jsx-ee9f80433b53bc71{gap:var(--dl-layout-space-halfunit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;max-width:600px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:var(--dl-layout-space-fourunits);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.features22-text11.jsx-ee9f80433b53bc71{text-align:center}.features22-container2.jsx-ee9f80433b53bc71{width:100%}.features22-card1.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-light);height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-color:var(--dl-color-theme-neutral-dark);border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.features22-image1.jsx-ee9f80433b53bc71{width:var(--dl-layout-size-medium);height:var(--dl-layout-size-medium);-o-object-fit:cover;object-fit:cover}.features22-text13.jsx-ee9f80433b53bc71{text-align:center}.features22-card2.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-light);height:385px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-color:var(--dl-color-theme-neutral-dark);border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.features22-image2.jsx-ee9f80433b53bc71{width:var(--dl-layout-size-medium);height:var(--dl-layout-size-medium);-o-object-fit:cover;object-fit:cover}.features22-text15.jsx-ee9f80433b53bc71{text-align:center}.features22-card3.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-light);height:388px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-color:var(--dl-color-theme-neutral-dark);border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.features22-image3.jsx-ee9f80433b53bc71{width:var(--dl-layout-size-medium);height:var(--dl-layout-size-medium);-o-object-fit:cover;object-fit:cover}.features22-text17.jsx-ee9f80433b53bc71{text-align:center}.features22-card4.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-light);height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-color:var(--dl-color-theme-neutral-dark);border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.features22-image4.jsx-ee9f80433b53bc71{width:var(--dl-layout-size-medium);height:var(--dl-layout-size-medium);-o-object-fit:cover;object-fit:cover}.features22-text19.jsx-ee9f80433b53bc71{text-align:center}.features22-card5.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-light);height:385px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-color:var(--dl-color-theme-neutral-dark);border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.features22-image5.jsx-ee9f80433b53bc71{width:var(--dl-layout-size-medium);height:var(--dl-layout-size-medium);-o-object-fit:cover;object-fit:cover}.features22-text21.jsx-ee9f80433b53bc71{text-align:center}.features22-card6.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-light);height:381px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-color:var(--dl-color-theme-neutral-dark);border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.features22-image6.jsx-ee9f80433b53bc71{width:var(--dl-layout-size-medium);height:var(--dl-layout-size-medium);-o-object-fit:cover;object-fit:cover}.features22-text23.jsx-ee9f80433b53bc71{text-align:center}.features22-card7.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-light);height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-color:var(--dl-color-theme-neutral-dark);border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.features22-image7.jsx-ee9f80433b53bc71{width:var(--dl-layout-size-medium);height:var(--dl-layout-size-medium);-o-object-fit:cover;object-fit:cover}.features22-text25.jsx-ee9f80433b53bc71{text-align:center}.features22-card8.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-light);height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-color:var(--dl-color-theme-neutral-dark);border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.features22-image8.jsx-ee9f80433b53bc71{width:var(--dl-layout-size-medium);height:var(--dl-layout-size-medium);-o-object-fit:cover;object-fit:cover}.features22-text27.jsx-ee9f80433b53bc71{text-align:center}.features22-text28.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block;font-size:25px}.features22-text29.jsx-ee9f80433b53bc71{display:inline-block}.features22-text30.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block;font-size:33px}.features22-text31.jsx-ee9f80433b53bc71{display:inline-block}.features22-text32.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22-text33.jsx-ee9f80433b53bc71{display:inline-block}.features22-text34.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22-text35.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22-text36.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22-text37.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22-text38.jsx-ee9f80433b53bc71{display:inline-block}.features22-text39.jsx-ee9f80433b53bc71{display:inline-block}.features22-text40.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22-text41.jsx-ee9f80433b53bc71{display:inline-block}.features22-text42.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22-text43.jsx-ee9f80433b53bc71{display:inline-block}.features22-text44.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22-text45.jsx-ee9f80433b53bc71{color:var(--dl-color-theme-neutral-dark);display:inline-block}.features22root-class-name.jsx-ee9f80433b53bc71{background-image:-webkit-linear-gradient(bottom,rgb(202,151,98)0%,rgb(27,27,52)79%);background-image:-moz-linear-gradient(bottom,rgb(202,151,98)0%,rgb(27,27,52)79%);background-image:-o-linear-gradient(bottom,rgb(202,151,98)0%,rgb(27,27,52)79%);background-image:linear-gradient(0deg,rgb(202,151,98)0%,rgb(27,27,52)79%)}@media(max-width:991px){.features22-max-width.jsx-ee9f80433b53bc71{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.features22-container1.jsx-ee9f80433b53bc71{margin-bottom:var(--dl-layout-space-threeunits)}}@media(max-width:767px){.features22-container1.jsx-ee9f80433b53bc71{margin-bottom:var(--dl-layout-space-oneandhalfunits)}.features22-card1.jsx-ee9f80433b53bc71{width:100%}.features22-card2.jsx-ee9f80433b53bc71{width:100%}.features22-card3.jsx-ee9f80433b53bc71{width:100%}.features22-card4.jsx-ee9f80433b53bc71{width:100%}.features22-card5.jsx-ee9f80433b53bc71{width:100%}.features22-card6.jsx-ee9f80433b53bc71{width:100%}.features22-card7.jsx-ee9f80433b53bc71{width:100%}.features22-card8.jsx-ee9f80433b53bc71{width:100%}}"
            })
        ]
    });
};
Features22.defaultProps = {
    feature3Title: undefined,
    feature4Description: undefined,
    rootClassName: "",
    feature2Title: undefined,
    content1: undefined,
    feature4Title: undefined,
    heading1: undefined,
    feature2Description: undefined,
    feature2ImageAlt: "Responsive Design Image",
    feature3Description: undefined,
    feature7Title: undefined,
    features22Id: "",
    feature5ImageAlt: "Template Library Image",
    feature8Title: undefined,
    feature7ImageAlt: "Version History Image",
    feature7Description: undefined,
    feature8ImageAlt: "Asset Management Image",
    feature6Description: undefined,
    feature3ImageAlt: "Code Export Image",
    feature5Title: undefined,
    feature8Description: undefined,
    feature6Title: undefined,
    feature5Description: undefined,
    feature1Description: undefined,
    feature6ImageAlt: "Custom Component Image",
    feature1Title: undefined
};
Features22.propTypes = {
    feature3Title: (external_prop_types_default()).element,
    feature4Description: (external_prop_types_default()).element,
    rootClassName: (external_prop_types_default()).string,
    feature2Title: (external_prop_types_default()).element,
    content1: (external_prop_types_default()).element,
    feature4Title: (external_prop_types_default()).element,
    heading1: (external_prop_types_default()).element,
    feature2Description: (external_prop_types_default()).element,
    feature2ImageAlt: (external_prop_types_default()).string,
    feature3Description: (external_prop_types_default()).element,
    feature7Title: (external_prop_types_default()).element,
    features22Id: (external_prop_types_default()).string,
    feature5ImageAlt: (external_prop_types_default()).string,
    feature8Title: (external_prop_types_default()).element,
    feature7ImageAlt: (external_prop_types_default()).string,
    feature7Description: (external_prop_types_default()).element,
    feature8ImageAlt: (external_prop_types_default()).string,
    feature6Description: (external_prop_types_default()).element,
    feature3ImageAlt: (external_prop_types_default()).string,
    feature5Title: (external_prop_types_default()).element,
    feature8Description: (external_prop_types_default()).element,
    feature6Title: (external_prop_types_default()).element,
    feature5Description: (external_prop_types_default()).element,
    feature1Description: (external_prop_types_default()).element,
    feature6ImageAlt: (external_prop_types_default()).string,
    feature1Title: (external_prop_types_default()).element
};
/* harmony default export */ const features22 = (Features22);

;// CONCATENATED MODULE: ./components/testimonial9.js





const Testimonial9 = (props)=>{
    const translate = (0,external_next_intl_.useTranslations)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-testimonial17 thq-section-padding",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-max-width thq-section-padding",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-section-title",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-title thq-heading-2",
                                    children: props.heading1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text43",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: translate.raw("text__V-RNg")
                                                },
                                                className: "jsx-7ddf7bc4ecb6d6d2"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-subtitle thq-body-large",
                                    children: props.content1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text39",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: translate.raw("text_hMt5BX")
                                                },
                                                className: "jsx-7ddf7bc4ecb6d6d2"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-thq": "slider",
                            "data-navigation": "true",
                            "data-pagination": "true",
                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider1 swiper",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    "data-thq": "slider-wrapper",
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            "data-thq": "slider-slide",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider-slide1 swiper-slide",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-column1 thq-card",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-stars1",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text10 thq-body-small",
                                                            children: props.review1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text37",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_c7LYDp")
                                                                        },
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar1",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: props.author1Alt,
                                                                    src: props.author1Src,
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-content1",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text11 thq-body-small",
                                                                            children: props.author1Name ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text44",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_dSUg75")
                                                                                        },
                                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text12 thq-body-small",
                                                                            children: props.author1Position ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text41",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_GURXxj")
                                                                                        },
                                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-column2 thq-card",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-stars2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text13 thq-body-small",
                                                            children: props.review2 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text42",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_jGc3LU")
                                                                        },
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: props.author2Alt,
                                                                    src: props.author2Src,
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-content2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text14 thq-body-small",
                                                                            children: props.author2Name ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text34",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_7QttLK")
                                                                                        },
                                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text15 thq-body-small",
                                                                            children: props.author2Position ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text35",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_BQdADg")
                                                                                        },
                                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            "data-thq": "slider-slide",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider-slide2 swiper-slide",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-column3 thq-card",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-stars3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text16 thq-body-small",
                                                            children: props.review3 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text45",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_KwkhML")
                                                                        },
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: props.author3Alt,
                                                                    src: props.author3Src,
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-content3",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text17 thq-body-small",
                                                                            children: props.author3Name ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text36",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_iLlIQZ")
                                                                                        },
                                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text18 thq-body-small",
                                                                            children: props.author3Position ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text40",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_Fdns4w")
                                                                                        },
                                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-column4 thq-card",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-stars4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    viewBox: "0 0 1024 1024",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text19 thq-body-small",
                                                            children: props.review4 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text38",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_ufynb4")
                                                                        },
                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: props.author4Alt,
                                                                    src: props.author4Src,
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-image4 thq-img-ratio-1-1 thq-img-round"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-content4",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text20 thq-body-small",
                                                                            children: props.author4Name ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text46",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_uUe7FU")
                                                                                        },
                                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text21 thq-body-small",
                                                                            children: props.author4Position ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text47",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        dangerouslySetInnerHTML: {
                                                                                            __html: translate.raw("text_I52QL5")
                                                                                        },
                                                                                        className: "jsx-7ddf7bc4ecb6d6d2"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    "data-thq": "slider-pagination",
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-pagination-bullet",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-pagination-bullet swiper-pagination-bullet-active"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-pagination-bullet",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-pagination-bullet"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    "data-thq": "slider-button-prev",
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-button-prev"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    "data-thq": "slider-button-next",
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-button-next"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-thq": "slider",
                            "data-navigation": "true",
                            "data-pagination": "true",
                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider2 swiper",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    "data-thq": "slider-wrapper",
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-wrapper",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-slide",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider-slide3 swiper-slide",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-column5",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-stars5",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text22 thq-body-small",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: translate.raw("text_XzXYDY")
                                                            },
                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar5",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                alt: props.author1Alt,
                                                                src: props.author1Src,
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-image5 thq-img-ratio-1-1 thq-img-round"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-content5",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text23 thq-body-small",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: translate.raw("text_jVAaoY")
                                                                            },
                                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text24 thq-body-small",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: translate.raw("text_MOJ2wg")
                                                                            },
                                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-slide",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider-slide4 swiper-slide",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-column6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-stars6",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text25 thq-body-small",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: translate.raw("text_Qh2wvU")
                                                            },
                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar6",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                alt: props.author2Alt,
                                                                src: props.author2Src,
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-image6 thq-img-ratio-1-1 thq-img-round"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-content6",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text26 thq-body-small",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: translate.raw("text_2qa09u")
                                                                            },
                                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text27 thq-body-small",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: translate.raw("text_aA7HWY")
                                                                            },
                                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-slide",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider-slide5 swiper-slide",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-column7",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-stars7",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text28 thq-body-small",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: translate.raw("text_mc4oWr")
                                                            },
                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar7",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                alt: props.author3Alt,
                                                                src: props.author3Src,
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-image7 thq-img-ratio-1-1 thq-img-round"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-content7",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text29 thq-body-small",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: translate.raw("text_PV5rNh")
                                                                            },
                                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text30 thq-body-small",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: translate.raw("text_kTP4dk")
                                                                            },
                                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-slide",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider-slide6 swiper-slide",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-column8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-stars8",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                viewBox: "0 0 1024 1024",
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "thq-icon-small",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z",
                                                                    className: "jsx-7ddf7bc4ecb6d6d2"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text31 thq-body-small",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: translate.raw("text_90Je5a")
                                                            },
                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar8",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                alt: props.author4Alt,
                                                                src: props.author4Src,
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-image8 thq-img-ratio-1-1 thq-img-round"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-avatar-content8",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text32 thq-body-small",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: translate.raw("text_SET0GY")
                                                                            },
                                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-text33 thq-body-small",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: translate.raw("text_H0Dbza")
                                                                            },
                                                                            className: "jsx-7ddf7bc4ecb6d6d2"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    "data-thq": "slider-pagination",
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "testimonial9-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-pagination-bullet",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-pagination-bullet swiper-pagination-bullet-active"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-pagination-bullet",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-pagination-bullet"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-pagination-bullet",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-pagination-bullet"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-thq": "slider-pagination-bullet",
                                            className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-pagination-bullet"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    "data-thq": "slider-button-prev",
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-button-prev"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    "data-thq": "slider-button-next",
                                    className: "jsx-7ddf7bc4ecb6d6d2" + " " + "swiper-button-next"
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "7ddf7bc4ecb6d6d2",
                children: ".testimonial9-testimonial17.jsx-7ddf7bc4ecb6d6d2{background-image:-webkit-linear-gradient(bottom,rgb(27,27,52)0%,rgb(202,151,98)100%);background-image:-moz-linear-gradient(bottom,rgb(27,27,52)0%,rgb(202,151,98)100%);background-image:-o-linear-gradient(bottom,rgb(27,27,52)0%,rgb(202,151,98)100%);background-image:linear-gradient(0deg,rgb(27,27,52)0%,rgb(202,151,98)100%)}.testimonial9-max-width.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-section-title.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-oneandhalfunits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.testimonial9-title.jsx-7ddf7bc4ecb6d6d2{width:100%;text-align:center}.testimonial9-subtitle.jsx-7ddf7bc4ecb6d6d2{text-align:center}.testimonial9-slider1.jsx-7ddf7bc4ecb6d6d2{width:100%;height:auto;display:inline-block;position:relative}.testimonial9-slider-slide1.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-fiveunits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.testimonial9-column1.jsx-7ddf7bc4ecb6d6d2{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-color:var(--dl-color-theme-neutral-dark);border-style:solid;border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-stars1.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.testimonial9-text10.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-avatar1.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-avatar-image1.jsx-7ddf7bc4ecb6d6d2{width:56px;height:56px;-o-object-fit:cover;object-fit:cover}.testimonial9-avatar-content1.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text11.jsx-7ddf7bc4ecb6d6d2{font-weight:600}.testimonial9-text12.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-column2.jsx-7ddf7bc4ecb6d6d2{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-color:var(--dl-color-theme-neutral-dark);border-style:solid;border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-stars2.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.testimonial9-text13.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-avatar2.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-avatar-image2.jsx-7ddf7bc4ecb6d6d2{width:56px;height:56px;-o-object-fit:cover;object-fit:cover}.testimonial9-avatar-content2.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text14.jsx-7ddf7bc4ecb6d6d2{font-weight:600}.testimonial9-text15.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-slider-slide2.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-fiveunits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.testimonial9-column3.jsx-7ddf7bc4ecb6d6d2{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-color:var(--dl-color-theme-neutral-dark);border-style:solid;border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-stars3.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.testimonial9-text16.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-avatar3.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-avatar-image3.jsx-7ddf7bc4ecb6d6d2{width:56px;height:56px;-o-object-fit:cover;object-fit:cover}.testimonial9-avatar-content3.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text17.jsx-7ddf7bc4ecb6d6d2{font-weight:600}.testimonial9-text18.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-column4.jsx-7ddf7bc4ecb6d6d2{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-color:var(--dl-color-theme-neutral-dark);border-style:solid;border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-stars4.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.testimonial9-text19.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-avatar4.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-avatar-image4.jsx-7ddf7bc4ecb6d6d2{width:56px;height:56px;-o-object-fit:cover;object-fit:cover}.testimonial9-avatar-content4.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text20.jsx-7ddf7bc4ecb6d6d2{font-weight:600}.testimonial9-text21.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-slider-pagination1.jsx-7ddf7bc4ecb6d6d2{display:block}.testimonial9-slider2.jsx-7ddf7bc4ecb6d6d2{width:100%;height:auto;display:none;position:relative}.testimonial9-slider-slide3.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-fiveunits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.testimonial9-column5.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-twounits);overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-color:var(--dl-color-theme-neutral-dark);border-style:solid;border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-stars5.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-text22.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-avatar5.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-avatar-image5.jsx-7ddf7bc4ecb6d6d2{width:56px;height:56px;-o-object-fit:cover;object-fit:cover}.testimonial9-avatar-content5.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text23.jsx-7ddf7bc4ecb6d6d2{font-weight:600}.testimonial9-text24.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-slider-slide4.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-fiveunits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.testimonial9-column6.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-twounits);overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-color:#000;border-style:solid;border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-stars6.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-text25.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-avatar6.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-avatar-image6.jsx-7ddf7bc4ecb6d6d2{width:56px;height:56px;-o-object-fit:cover;object-fit:cover}.testimonial9-avatar-content6.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text26.jsx-7ddf7bc4ecb6d6d2{font-weight:600}.testimonial9-text27.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-slider-slide5.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-fiveunits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.testimonial9-column7.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-twounits);overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-color:#000;border-style:solid;border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-stars7.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text28.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-avatar7.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-avatar-image7.jsx-7ddf7bc4ecb6d6d2{width:56px;height:56px;-o-object-fit:cover;object-fit:cover}.testimonial9-avatar-content7.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text29.jsx-7ddf7bc4ecb6d6d2{font-weight:600}.testimonial9-text30.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-slider-slide6.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-fiveunits);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.testimonial9-column8.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-twounits);-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-twounits);overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border-color:#000;border-style:solid;border-width:1px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-stars8.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-text31.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-avatar8.jsx-7ddf7bc4ecb6d6d2{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.testimonial9-avatar-image8.jsx-7ddf7bc4ecb6d6d2{width:56px;height:56px;-o-object-fit:cover;object-fit:cover}.testimonial9-avatar-content8.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.testimonial9-text32.jsx-7ddf7bc4ecb6d6d2{font-weight:600}.testimonial9-text33.jsx-7ddf7bc4ecb6d6d2{height:auto}.testimonial9-slider-pagination2.jsx-7ddf7bc4ecb6d6d2{display:block}.testimonial9-text34.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text35.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text36.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text37.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text38.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text39.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text40.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text41.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text42.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text43.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text44.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text45.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text46.jsx-7ddf7bc4ecb6d6d2{display:inline-block}.testimonial9-text47.jsx-7ddf7bc4ecb6d6d2{display:inline-block}@media(max-width:991px){.testimonial9-slider1.jsx-7ddf7bc4ecb6d6d2{display:none}.testimonial9-slider2.jsx-7ddf7bc4ecb6d6d2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.testimonial9-slider-slide3.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-threeunits);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.testimonial9-slider-slide4.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-threeunits);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.testimonial9-slider-slide5.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-threeunits);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.testimonial9-slider-slide6.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-threeunits);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}}@media(max-width:767px){.testimonial9-max-width.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-threeunits)}.testimonial9-section-title.jsx-7ddf7bc4ecb6d6d2{width:100%;max-width:800px}.testimonial9-slider-slide1.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-threeunits)}.testimonial9-slider-slide2.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-threeunits)}.testimonial9-stars7.jsx-7ddf7bc4ecb6d6d2{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}@media(max-width:479px){.testimonial9-max-width.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-oneandhalfunits)}.testimonial9-slider-slide1.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-oneandhalfunits)}.testimonial9-slider-slide2.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-oneandhalfunits)}.testimonial9-slider-slide3.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-oneandhalfunits)}.testimonial9-slider-slide4.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-oneandhalfunits)}.testimonial9-slider-slide5.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-oneandhalfunits)}.testimonial9-slider-slide6.jsx-7ddf7bc4ecb6d6d2{padding:var(--dl-layout-space-oneandhalfunits)}}"
            })
        ]
    });
};
Testimonial9.defaultProps = {
    author2Name: undefined,
    author3Alt: "Michael Brown - Digital Marketer",
    author2Position: undefined,
    author4Src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg5MTI1OHw&ixlib=rb-4.0.3&q=80&w=1080",
    author4Alt: "Sarah Lee - UX/UI Specialist",
    author1Alt: "John Smith - CEO of ABC Inc.",
    author3Src: "https://images.unsplash.com/photo-1639503611585-1054af5dbfab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg5MTI1N3w&ixlib=rb-4.0.3&q=80&w=1080",
    author3Name: undefined,
    review1: undefined,
    author2Alt: "Emily Johnson - Freelance Designer",
    review4: undefined,
    content1: undefined,
    author2Src: "https://images.unsplash.com/photo-1624561254177-28de5f2c36eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg5MTI1N3w&ixlib=rb-4.0.3&q=80&w=1080",
    author3Position: undefined,
    author1Position: undefined,
    review2: undefined,
    heading1: undefined,
    author1Name: undefined,
    review3: undefined,
    author4Name: undefined,
    author4Position: undefined,
    author1Src: "https://images.unsplash.com/photo-1513171920216-2640b288471b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg5MTI1N3w&ixlib=rb-4.0.3&q=80&w=1080"
};
Testimonial9.propTypes = {
    author2Name: (external_prop_types_default()).element,
    author3Alt: (external_prop_types_default()).string,
    author2Position: (external_prop_types_default()).element,
    author4Src: (external_prop_types_default()).string,
    author4Alt: (external_prop_types_default()).string,
    author1Alt: (external_prop_types_default()).string,
    author3Src: (external_prop_types_default()).string,
    author3Name: (external_prop_types_default()).element,
    review1: (external_prop_types_default()).element,
    author2Alt: (external_prop_types_default()).string,
    review4: (external_prop_types_default()).element,
    content1: (external_prop_types_default()).element,
    author2Src: (external_prop_types_default()).string,
    author3Position: (external_prop_types_default()).element,
    author1Position: (external_prop_types_default()).element,
    review2: (external_prop_types_default()).element,
    heading1: (external_prop_types_default()).element,
    author1Name: (external_prop_types_default()).element,
    review3: (external_prop_types_default()).element,
    author4Name: (external_prop_types_default()).element,
    author4Position: (external_prop_types_default()).element,
    author1Src: (external_prop_types_default()).string
};
/* harmony default export */ const testimonial9 = (Testimonial9);

;// CONCATENATED MODULE: ./components/contact11.js





const Contact11 = (props)=>{
    const translate = (0,external_next_intl_.useTranslations)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-a24447e5172ce30d" + " " + "contact11-container thq-section-padding",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-a24447e5172ce30d" + " " + "contact11-max-width thq-section-max-width",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-a24447e5172ce30d" + " " + "contact11-section-title",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-a24447e5172ce30d" + " " + "contact11-content1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "jsx-a24447e5172ce30d" + " " + "thq-heading-2",
                                        children: props.heading1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-a24447e5172ce30d" + " " + "contact11-text23",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: translate.raw("text_cMKcs1")
                                                    },
                                                    className: "jsx-a24447e5172ce30d"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-a24447e5172ce30d" + " " + "thq-body-large",
                                        children: props.content1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-a24447e5172ce30d" + " " + "contact11-text19",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: translate.raw("text_NC0vzz")
                                                    },
                                                    className: "jsx-a24447e5172ce30d"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-a24447e5172ce30d" + " " + "contact11-content2 thq-flex-row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-content3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-a24447e5172ce30d" + " " + "contact11-content4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    viewBox: "0 0 1024 1024",
                                                    className: "jsx-a24447e5172ce30d" + " " + "thq-icon-medium",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z",
                                                        className: "jsx-a24447e5172ce30d"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-contact-info1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "contact11-text12 thq-heading-3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: translate.raw("text_lq7jEN")
                                                                },
                                                                className: "jsx-a24447e5172ce30d"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "thq-body-large",
                                                            children: props.content2 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-text24",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_K42YRb")
                                                                        },
                                                                        className: "jsx-a24447e5172ce30d"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "thq-body-small",
                                                            children: props.email ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-text26",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_21Q9pC")
                                                                        },
                                                                        className: "jsx-a24447e5172ce30d"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-a24447e5172ce30d" + " " + "contact11-content5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    viewBox: "0 0 1024 1024",
                                                    className: "jsx-a24447e5172ce30d" + " " + "thq-icon-medium",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z",
                                                        className: "jsx-a24447e5172ce30d"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-contact-info2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "contact11-text14 thq-heading-3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: translate.raw("text_DMczBy")
                                                                },
                                                                className: "jsx-a24447e5172ce30d"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "thq-body-large",
                                                            children: props.content3 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-text25",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_PyhCHH")
                                                                        },
                                                                        className: "jsx-a24447e5172ce30d"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "thq-body-small",
                                                            children: props.phone1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-text20",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_DxTjhH")
                                                                        },
                                                                        className: "jsx-a24447e5172ce30d"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-a24447e5172ce30d" + " " + "contact11-content6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    viewBox: "0 0 1024 1024",
                                                    className: "jsx-a24447e5172ce30d" + " " + "thq-icon-medium",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z",
                                                        className: "jsx-a24447e5172ce30d"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-contact-info3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "contact11-text17 thq-heading-3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: translate.raw("text_goW63J")
                                                                },
                                                                className: "jsx-a24447e5172ce30d"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "thq-body-large",
                                                            children: props.content5 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-text21",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_7DCuzR")
                                                                        },
                                                                        className: "jsx-a24447e5172ce30d"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "jsx-a24447e5172ce30d" + " " + "thq-body-small",
                                                            children: props.address1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-text22",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: translate.raw("text_Jd2Dss")
                                                                        },
                                                                        className: "jsx-a24447e5172ce30d"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5831519036783!2d55.357393975166474!3d25.284604377654855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae2c51294ad19cef%3A0x7934533f643bd5bb!2sOusos%20Althiqa%20Accounting!5e0!3m2!1sen!2sae!4v1743897169361!5m2!1sen!2sae" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                                    title: "Map",
                                    className: "jsx-a24447e5172ce30d" + " " + "contact11-iframe thq-img-ratio-16-9"
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "a24447e5172ce30d",
                children: ".contact11-container.jsx-a24447e5172ce30d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#1b1b34}.contact11-max-width.jsx-a24447e5172ce30d{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.contact11-section-title.jsx-a24447e5172ce30d{width:100%;margin-bottom:var(--dl-layout-space-threeunits)}.contact11-content1.jsx-a24447e5172ce30d{gap:var(--dl-layout-space-oneandhalfunits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contact11-content2.jsx-a24447e5172ce30d{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.contact11-content3.jsx-a24447e5172ce30d{gap:var(--dl-layout-space-oneandhalfunits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contact11-content4.jsx-a24447e5172ce30d{gap:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contact11-contact-info1.jsx-a24447e5172ce30d{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contact11-text12.jsx-a24447e5172ce30d{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;text-align:center}.contact11-content5.jsx-a24447e5172ce30d{gap:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contact11-contact-info2.jsx-a24447e5172ce30d{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contact11-text14.jsx-a24447e5172ce30d{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;text-align:center}.contact11-content6.jsx-a24447e5172ce30d{gap:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contact11-contact-info3.jsx-a24447e5172ce30d{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contact11-text17.jsx-a24447e5172ce30d{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;text-align:center}.contact11-iframe.jsx-a24447e5172ce30d{height:664px}.contact11-text19.jsx-a24447e5172ce30d{display:inline-block}.contact11-text20.jsx-a24447e5172ce30d{display:inline-block}.contact11-text21.jsx-a24447e5172ce30d{display:inline-block}.contact11-text22.jsx-a24447e5172ce30d{display:inline-block}.contact11-text23.jsx-a24447e5172ce30d{display:inline-block}.contact11-text24.jsx-a24447e5172ce30d{display:inline-block}.contact11-text25.jsx-a24447e5172ce30d{display:inline-block}.contact11-text26.jsx-a24447e5172ce30d{display:inline-block}@media(max-width:991px){.contact11-content2.jsx-a24447e5172ce30d{position:relative;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
            })
        ]
    });
};
Contact11.defaultProps = {
    content1: undefined,
    phone1: undefined,
    content5: undefined,
    address1: undefined,
    heading1: undefined,
    content2: undefined,
    content3: undefined,
    email: undefined
};
Contact11.propTypes = {
    content1: (external_prop_types_default()).element,
    phone1: (external_prop_types_default()).element,
    content5: (external_prop_types_default()).element,
    address1: (external_prop_types_default()).element,
    heading1: (external_prop_types_default()).element,
    content2: (external_prop_types_default()).element,
    content3: (external_prop_types_default()).element,
    email: (external_prop_types_default()).element
};
/* harmony default export */ const contact11 = (Contact11);

;// CONCATENATED MODULE: ./components/footer3.js





const Footer3 = (props)=>{
    const translate = (0,external_next_intl_.useTranslations)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "jsx-d21207b67a190609" + " " + "footer3-footer4 thq-section-padding",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-d21207b67a190609" + " " + "footer3-max-width thq-section-max-width",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-d21207b67a190609" + " " + "footer3-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-d21207b67a190609" + " " + "footer3-logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: props.logoAlt,
                                        src: "/logo-2%20(1)-1500h.png",
                                        className: "jsx-d21207b67a190609" + " " + "footer3-image1"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-d21207b67a190609" + " " + "footer3-links",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://example.com",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                            children: props.link1 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-d21207b67a190609" + " " + "footer3-text2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_szWgGG")
                                                        },
                                                        className: "jsx-d21207b67a190609"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://example.com",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                            children: props.link2 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-d21207b67a190609" + " " + "footer3-text1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_eS7Akx")
                                                        },
                                                        className: "jsx-d21207b67a190609"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://example.com",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                            children: props.link3 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-d21207b67a190609" + " " + "footer3-text8",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_Qw7vcT")
                                                        },
                                                        className: "jsx-d21207b67a190609"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://example.com",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                            children: props.link4 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-d21207b67a190609" + " " + "footer3-text6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_b4lSP5")
                                                        },
                                                        className: "jsx-d21207b67a190609"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://example.com",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                            children: props.link5 ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-d21207b67a190609" + " " + "footer3-text4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: translate.raw("text_AKe26N")
                                                        },
                                                        className: "jsx-d21207b67a190609"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-d21207b67a190609" + " " + "footer3-social-links",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.facebook.com/share/1XmX4DCvw8/",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "jsx-d21207b67a190609" + " " + "footer3-link6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                viewBox: "0 0 877.7142857142857 1024",
                                                className: "jsx-d21207b67a190609" + " " + "footer3-icon1 thq-icon-small",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z",
                                                    className: "jsx-d21207b67a190609"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.instagram.com/ousos.althiqa/",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "jsx-d21207b67a190609" + " " + "footer3-link7",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                viewBox: "0 0 877.7142857142857 1024",
                                                className: "jsx-d21207b67a190609" + " " + "footer3-icon3 thq-icon-small",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z",
                                                    className: "jsx-d21207b67a190609"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.linkedin.com/company/ousos-althiqa-accounting-tax/",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "jsx-d21207b67a190609" + " " + "footer3-link8",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                viewBox: "0 0 877.7142857142857 1024",
                                                className: "jsx-d21207b67a190609" + " " + "footer3-icon5 thq-icon-small",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z",
                                                    className: "jsx-d21207b67a190609"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-d21207b67a190609" + " " + "footer3-credits",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-d21207b67a190609" + " " + "thq-divider-horizontal"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-d21207b67a190609" + " " + "footer3-row",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-d21207b67a190609" + " " + "footer3-footer-links",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: translate.raw("content3_yMVbPE")
                                                    },
                                                    className: "jsx-d21207b67a190609"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                                children: props.privacyLink ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-d21207b67a190609" + " " + "footer3-text3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: translate.raw("text_vy84Cr")
                                                            },
                                                            className: "jsx-d21207b67a190609"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                                children: props.termsLink ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-d21207b67a190609" + " " + "footer3-text5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: translate.raw("text_qdflIF")
                                                            },
                                                            className: "jsx-d21207b67a190609"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-d21207b67a190609" + " " + "thq-body-small",
                                                children: props.cookiesLink ?? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-d21207b67a190609" + " " + "footer3-text7",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: translate.raw("text_Fvqcqt")
                                                            },
                                                            className: "jsx-d21207b67a190609"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "d21207b67a190609",
                children: ".footer3-footer4.jsx-d21207b67a190609{gap:80px;width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:var(--dl-layout-space-fiveunits);overflow:hidden;position:relative;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#1b1b34}.footer3-max-width.jsx-d21207b67a190609{gap:var(--dl-layout-space-threeunits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.footer3-content.jsx-d21207b67a190609{gap:32px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.footer3-logo.jsx-d21207b67a190609{gap:24px;width:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.footer3-image1.jsx-d21207b67a190609{height:2rem}.footer3-links.jsx-d21207b67a190609{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.footer3-social-links.jsx-d21207b67a190609{gap:var(--dl-layout-space-unit);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.footer3-link6.jsx-d21207b67a190609{display:contents}.footer3-icon1.jsx-d21207b67a190609{text-decoration:none}.footer3-link7.jsx-d21207b67a190609{display:contents}.footer3-icon3.jsx-d21207b67a190609{text-decoration:none}.footer3-link8.jsx-d21207b67a190609{display:contents}.footer3-icon5.jsx-d21207b67a190609{text-decoration:none}.footer3-credits.jsx-d21207b67a190609{gap:var(--dl-layout-space-twounits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.footer3-row.jsx-d21207b67a190609{gap:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.footer3-footer-links.jsx-d21207b67a190609{gap:var(--dl-layout-space-oneandhalfunits);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.footer3-text1.jsx-d21207b67a190609{display:inline-block}.footer3-text2.jsx-d21207b67a190609{display:inline-block}.footer3-text3.jsx-d21207b67a190609{display:inline-block}.footer3-text4.jsx-d21207b67a190609{display:inline-block}.footer3-text5.jsx-d21207b67a190609{display:inline-block}.footer3-text6.jsx-d21207b67a190609{display:inline-block}.footer3-text7.jsx-d21207b67a190609{display:inline-block}.footer3-text8.jsx-d21207b67a190609{display:inline-block}@media(max-width:991px){.footer3-logo.jsx-d21207b67a190609{width:auto}}@media(max-width:767px){.footer3-content.jsx-d21207b67a190609{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.footer3-row.jsx-d21207b67a190609{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.footer3-footer-links.jsx-d21207b67a190609{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}@media(max-width:479px){.footer3-max-width.jsx-d21207b67a190609{gap:var(--dl-layout-space-oneandhalfunits)}.footer3-content.jsx-d21207b67a190609{width:100%}.footer3-links.jsx-d21207b67a190609{width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}"
            })
        ]
    });
};
Footer3.defaultProps = {
    link2: undefined,
    link1: undefined,
    logoAlt: "Company Logo",
    privacyLink: undefined,
    link5: undefined,
    termsLink: undefined,
    link4: undefined,
    cookiesLink: undefined,
    link3: undefined
};
Footer3.propTypes = {
    link2: (external_prop_types_default()).element,
    link1: (external_prop_types_default()).element,
    logoAlt: (external_prop_types_default()).string,
    privacyLink: (external_prop_types_default()).element,
    link5: (external_prop_types_default()).element,
    termsLink: (external_prop_types_default()).element,
    link4: (external_prop_types_default()).element,
    cookiesLink: (external_prop_types_default()).element,
    link3: (external_prop_types_default()).element
};
/* harmony default export */ const footer3 = (Footer3);

// EXTERNAL MODULE: ./global-context.js
var global_context = __webpack_require__(688);
;// CONCATENATED MODULE: ./pages/index.js













const Home = (props)=>{
    const translate = (0,external_next_intl_.useTranslations)();
    const { locale , locales  } = (0,global_context/* useGlobalContext */.b)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-16583d0e6d59a4d2" + " " + "home-container1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                className: "jsx-16583d0e6d59a4d2",
                                children: "ousos althiqa"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:title",
                                content: "ousos althiqa",
                                className: "jsx-16583d0e6d59a4d2"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar5, {
                        link1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_T7wk1h")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        link2: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text11",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_VekG4G")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        link4: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_jdbaLz")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        page1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text13",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_kAeuT6")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        page2: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text14",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_fdBNRr")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        page3: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text15",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_4k8ej6")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        page4: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text16",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_-CEGLw")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        link1Url: "#Hero15",
                        link2Url: "#Features22"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(hero15, {
                        action3: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text17",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_V7n1Dw")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        content1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text18",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_gFt5RB")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        heading1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text19",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_MSsx9g")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        hero15Id: "Hero15"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(stats6, {
                        stat1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text20",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_1hG_kp")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        stat2: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text21",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_eUA2nL")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        stat3: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text22",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_I6CpF3")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        content1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text23",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_DhjTfx")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        heading1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text24",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_iT5wBL")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        rootClassName: "stats6root-class-name",
                        stat1Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text25",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_-iA2ns")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        stat2Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text26",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_JegwQF")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        stat3Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text27",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_E3lp9v")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(features22, {
                        content1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text28",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_M_v3uj")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        heading1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text29",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_EqCdUS")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        features22Id: "Features22",
                        feature1Title: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text30",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_Cu8qd6")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature2Title: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text31",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_R10sN0")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature3Title: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text32",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_btWrXR")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature4Title: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text33",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_XO4b80")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature5Title: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text34",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_n-v3hS")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature6Title: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text35",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_a9siFS")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature7Title: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text36",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_JbYmua")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature8Title: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text37",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_b_leHO")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        rootClassName: "features22root-class-name",
                        feature1Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text38",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_moJXMj")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature2Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text39",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_wDDvCq")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature3Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text40",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_4bRe1i")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature4Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text41",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_XsiHlS")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature5Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text42",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_B8eosI")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature6Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text43",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_fLKLmd")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature7Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text44",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_kcoDOV")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        feature8Description: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text45",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_AZu86J")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(testimonial9, {
                        review1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text46",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_JqBYi3")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        review2: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text47",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_E4Q35N")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        review3: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text48",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_A96-GW")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        review4: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text49",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_neD2PH")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        content1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text50",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_59fmyi")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        heading1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text51",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_mEHMYk")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        author1Name: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text52",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_QU7g_L")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        author2Name: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text53",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_uTl-gi")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        author3Name: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text54",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_E-oadL")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        author4Name: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text55",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_nnrLnd")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        author1Position: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text56",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_P2z0_f")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        author2Position: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text57",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_ynh6FL")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        author3Position: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text58",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_aZ9a4u")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        author4Position: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text59",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_BPtUI7")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(contact11, {
                        email: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text60",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_MwNbHI")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        phone1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text61",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_vXrGRi")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        address1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text62",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_Dlj949")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        content1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text63",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_7qnVSe")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        content2: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text64",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_BhXYeR")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        content3: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text65",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_HL2bh9")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        content5: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text66",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_sCSfMk")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        heading1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text67",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_wiByME")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer3, {
                        link1: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text68",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_b5Heqn")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        link2: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text69",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_bCIA9w")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        link3: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text70",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_IAQGfM")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        link4: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text71",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_VC4xcd")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        link5: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text72",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_w-lKIy")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        termsLink: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text73",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_xTJHoR")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        cookiesLink: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text74",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_LbeObx")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        }),
                        privacyLink: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-text75",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: translate.raw("text_rEFWPh")
                                    },
                                    className: "jsx-16583d0e6d59a4d2"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-thq": "thq-dropdown",
                        className: "jsx-16583d0e6d59a4d2" + " " + "home-language-switcher list-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-thq": "thq-dropdown-toggle",
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-language-switcher-toggle",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-16583d0e6d59a4d2" + " " + "home-language-name",
                                        children: locale?.["name"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        "data-thq": "thq-dropdown-arrow",
                                        className: "jsx-16583d0e6d59a4d2" + " " + "home-dropdown-arrow",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            viewBox: "0 0 1024 1024",
                                            className: "jsx-16583d0e6d59a4d2" + " " + "home-icon1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M426 726v-428l214 214z",
                                                className: "jsx-16583d0e6d59a4d2"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                "data-thq": "thq-dropdown-list",
                                className: "jsx-16583d0e6d59a4d2" + " " + "home-language-switcher-list",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-16583d0e6d59a4d2",
                                    children: locales.map((all_languages, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-16583d0e6d59a4d2" + " " + "home-language-switcher-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "jsx-16583d0e6d59a4d2",
                                                    children: all_languages?.name
                                                })
                                            })
                                        }, index))
                                })
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "16583d0e6d59a4d2",
                children: ".home-container1.jsx-16583d0e6d59a4d2{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.home-text10.jsx-16583d0e6d59a4d2{display:inline-block}.home-text11.jsx-16583d0e6d59a4d2{display:inline-block}.home-text12.jsx-16583d0e6d59a4d2{display:inline-block}.home-text13.jsx-16583d0e6d59a4d2{display:inline-block}.home-text14.jsx-16583d0e6d59a4d2{display:inline-block}.home-text15.jsx-16583d0e6d59a4d2{display:inline-block}.home-text16.jsx-16583d0e6d59a4d2{display:inline-block}.home-text17.jsx-16583d0e6d59a4d2{display:inline-block}.home-text18.jsx-16583d0e6d59a4d2{display:inline-block}.home-text19.jsx-16583d0e6d59a4d2{display:inline-block}.home-text20.jsx-16583d0e6d59a4d2{display:inline-block}.home-text21.jsx-16583d0e6d59a4d2{display:inline-block}.home-text22.jsx-16583d0e6d59a4d2{display:inline-block}.home-text23.jsx-16583d0e6d59a4d2{display:inline-block}.home-text24.jsx-16583d0e6d59a4d2{display:inline-block}.home-text25.jsx-16583d0e6d59a4d2{display:inline-block}.home-text26.jsx-16583d0e6d59a4d2{display:inline-block}.home-text27.jsx-16583d0e6d59a4d2{display:inline-block}.home-text28.jsx-16583d0e6d59a4d2{display:inline-block}.home-text29.jsx-16583d0e6d59a4d2{display:inline-block}.home-text30.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text31.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block;font-size:33px}.home-text32.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block;font-size:25px}.home-text33.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text34.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text35.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text36.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text37.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text38.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text39.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text40.jsx-16583d0e6d59a4d2{color:var(--dl-color-theme-neutral-dark);display:inline-block}.home-text41.jsx-16583d0e6d59a4d2{display:inline-block}.home-text42.jsx-16583d0e6d59a4d2{display:inline-block}.home-text43.jsx-16583d0e6d59a4d2{display:inline-block}.home-text44.jsx-16583d0e6d59a4d2{display:inline-block}.home-text45.jsx-16583d0e6d59a4d2{display:inline-block}.home-text46.jsx-16583d0e6d59a4d2{display:inline-block}.home-text47.jsx-16583d0e6d59a4d2{display:inline-block}.home-text48.jsx-16583d0e6d59a4d2{display:inline-block}.home-text49.jsx-16583d0e6d59a4d2{display:inline-block}.home-text50.jsx-16583d0e6d59a4d2{display:inline-block}.home-text51.jsx-16583d0e6d59a4d2{display:inline-block}.home-text52.jsx-16583d0e6d59a4d2{display:inline-block}.home-text53.jsx-16583d0e6d59a4d2{display:inline-block}.home-text54.jsx-16583d0e6d59a4d2{display:inline-block}.home-text55.jsx-16583d0e6d59a4d2{display:inline-block}.home-text56.jsx-16583d0e6d59a4d2{display:inline-block}.home-text57.jsx-16583d0e6d59a4d2{display:inline-block}.home-text58.jsx-16583d0e6d59a4d2{display:inline-block}.home-text59.jsx-16583d0e6d59a4d2{display:inline-block}.home-text60.jsx-16583d0e6d59a4d2{display:inline-block}.home-text61.jsx-16583d0e6d59a4d2{display:inline-block}.home-text62.jsx-16583d0e6d59a4d2{display:inline-block}.home-text63.jsx-16583d0e6d59a4d2{display:inline-block}.home-text64.jsx-16583d0e6d59a4d2{display:inline-block}.home-text65.jsx-16583d0e6d59a4d2{display:inline-block}.home-text66.jsx-16583d0e6d59a4d2{display:inline-block}.home-text67.jsx-16583d0e6d59a4d2{display:inline-block}.home-text68.jsx-16583d0e6d59a4d2{display:inline-block}.home-text69.jsx-16583d0e6d59a4d2{display:inline-block}.home-text70.jsx-16583d0e6d59a4d2{display:inline-block}.home-text71.jsx-16583d0e6d59a4d2{display:inline-block}.home-text72.jsx-16583d0e6d59a4d2{display:inline-block}.home-text73.jsx-16583d0e6d59a4d2{display:inline-block}.home-text74.jsx-16583d0e6d59a4d2{display:inline-block}.home-text75.jsx-16583d0e6d59a4d2{display:inline-block}.home-language-switcher.jsx-16583d0e6d59a4d2{cursor:pointer;display:inline-block;position:relative;-webkit-border-radius:var(--dl-layout-radius-radius2);-moz-border-radius:var(--dl-layout-radius-radius2);border-radius:var(--dl-layout-radius-radius2)}.home-language-switcher-toggle.jsx-16583d0e6d59a4d2{fill:#595959;color:#595959;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:var(--dl-layout-space-halfunit);padding-left:var(--dl-layout-space-unit);-webkit-border-radius:var(--dl-layout-radius-radius2);-moz-border-radius:var(--dl-layout-radius-radius2);border-radius:var(--dl-layout-radius-radius2);padding-right:var(--dl-layout-space-unit);padding-bottom:var(--dl-layout-space-halfunit)}.home-language-name.jsx-16583d0e6d59a4d2{font-size:14px;font-style:normal;text-align:center;font-weight:500;margin-right:4px;vertical-align:middle}.home-dropdown-arrow.jsx-16583d0e6d59a4d2{-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.home-icon1.jsx-16583d0e6d59a4d2{width:18px;height:18px;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.home-language-switcher-list.jsx-16583d0e6d59a4d2{left:0%;width:-webkit-max-content;width:-moz-max-content;width:max-content;display:none;z-index:100;position:absolute;min-width:100%;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-color:#d9d9d9;border-width:1px;-webkit-border-radius:var(--dl-layout-radius-radius4);-moz-border-radius:var(--dl-layout-radius-radius4);border-radius:var(--dl-layout-radius-radius4);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;list-style-type:none;list-style-position:inside}.home-language-switcher-item.jsx-16583d0e6d59a4d2{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-top:var(--dl-layout-space-halfunit);padding-left:var(--dl-layout-space-unit);padding-right:var(--dl-layout-space-unit);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:var(--dl-layout-space-halfunit);background-color:#fff}"
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);
async function getStaticProps(context) {
    const messages = (await __webpack_require__(539)("./" + context.locale + ".json")).default;
    return {
        props: {
            messages,
            ...context
        }
    };
}


/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [688], () => (__webpack_exec__(661)));
module.exports = __webpack_exports__;

})();