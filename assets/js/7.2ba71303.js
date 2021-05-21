(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{306:function(e,t,i){"use strict";t.a={data:function(){return{tokenDetails:[{name:"SimpleERC20",version:"4.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!1,supplyType:"Fixed",accessType:"None",mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!1,price:0},{name:"StandardERC20",version:"4.0.1",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"None",mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!0,price:.15},{name:"BurnableERC20",version:"4.2.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"None",mintable:!1,burnable:!0,erc1363:!1,tokenRecover:!1,removeCopyright:!0,price:.25},{name:"MintableERC20",version:"4.1.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Ownable",mintable:!0,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!0,price:.35},{name:"CommonERC20",version:"4.0.1",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",mintable:!0,burnable:!0,erc1363:!1,tokenRecover:!1,removeCopyright:!0,price:.55},{name:"PowerfulERC20",version:"4.3.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Role Based",mintable:!0,burnable:!0,erc1363:!0,tokenRecover:!0,removeCopyright:!0,price:.95}]}}}},337:function(e,t,i){"use strict";i.r(t);var a={name:"PricingTable",mixins:[i(306).a]},s=i(40),n=Object(s.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pricing-table"},[i("b-row",e._l(e.tokenDetails,(function(t,a){return i("b-col",{attrs:{sm:"6",md:"4"}},[i("b-card",{staticClass:"mb-3",attrs:{"no-body":""}},[i("b-card-title",{staticClass:"pt-5 font-weight-light text-center"},[e._v("\n                    "+e._s(t.name)+"\n                ")]),e._v(" "),i("p",{staticClass:"card-price text-center"},[e._v("\n                    "+e._s(t.price)+" "),i("small",{staticClass:"term"},[e._v("ETH")])]),e._v(" "),i("b-list-group",{attrs:{flush:""}},[i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        ERC20 Compliant "),i("ui--checkmark",{attrs:{value:t.standard}})],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Verified Source Code "),i("ui--checkmark",{attrs:{value:t.verified}})],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Detailed "),i("ui--checkmark",{attrs:{value:t.detailed}})],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Customizable Decimals "),i("ui--checkmark",{attrs:{value:t.customizeDecimals}})],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Remove Copyright "),i("ui--checkmark",{attrs:{value:t.removeCopyright}})],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Supply Type "),i("b-badge",{attrs:{variant:"info"}},[e._v(e._s(t.supplyType))])],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Access Type "),i("b-badge",{attrs:{variant:"dark"}},[e._v(e._s(t.accessType))])],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Burnable "),i("ui--checkmark",{attrs:{value:t.burnable}})],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Mintable "),i("ui--checkmark",{attrs:{value:t.mintable}})],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        ERC1363 "),i("ui--checkmark",{attrs:{value:t.erc1363}})],1),e._v(" "),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Token Recover "),i("ui--checkmark",{attrs:{value:t.tokenRecover}})],1),e._v(" "),i("b-list-group-item",{staticClass:"justify-content-between align-items-center text-center py-3",attrs:{variant:"warning",to:{path:"/create-token/",query:{tokenType:t.name}}}},[e._v("\n                        Create\n                    ")])],1)],1)],1)})),1),e._v(" "),i("b-row",[i("b-col",{staticClass:"mt-4",attrs:{lg:"6","offset-lg":"3"}},[i("p",{staticClass:"text-center text-light"},[e._v("\n                * GAS fee will be added to final amount\n            ")])])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);
