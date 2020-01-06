(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(e,t,a){e.exports={item:"ImageGalleryItem_item__26F25",image:"ImageGalleryItem_image__32_jr"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},14:function(e,t,a){e.exports={app:"App_app__1IksY",loader:"App_loader__36Wa_"}},27:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__gboaM"}},28:function(e,t,a){e.exports={btn:"Button_btn__3xaJM"}},29:function(e,t,a){e.exports={img:"ImageItem_img__1q2qL"}},30:function(e,t,a){e.exports=a(74)},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(15),s=a(3),i=a(4),m=a(6),u=a(5),h=a(7),p=a(25),d=a.n(p),f=a(26),g=a.n(f),b=function(e,t){var a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("14816782-eacb98039d192ea6b6a9f6855","&image_type=photo&orientation=horizontal&per_page=12");return g.a.get(a).then((function(e){return e.data.hits}))},v=a(10),_=a(11),y=a(8),E=a.n(y),j={search:""},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Object(_.a)({},j),a.handleChange=function(e){var t=e.currentTarget,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.submitForm=function(e){e.preventDefault();var t=a.state.search;(0,a.props.onSubmit)(t),a.reset()},a.reset=function(){a.setState(Object(_.a)({},j))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.search;return r.a.createElement("header",{className:E.a.searchbar},r.a.createElement("form",{className:E.a.form,onSubmit:this.submitForm},r.a.createElement("button",{type:"submit",className:E.a.button},r.a.createElement("span",{className:E.a.label},"Search")),r.a.createElement("input",{className:E.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"search",value:e,onChange:this.handleChange})))}}]),t}(n.Component),w=a(12),S=a.n(w),M=function(e){var t=e.webformatURL,a=e.alt,n=e.openModal;return r.a.createElement("li",{className:S.a.item},r.a.createElement("img",{src:t,alt:a,className:S.a.image,role:"presentation",onClick:n}))};M.defaultProps={alt:"gallery photo"};var k=M,I=a(27),N=a.n(I),L=function(e){var t=e.items,a=e.openModal;return r.a.createElement("ul",{className:N.a.gallery},t.map((function(e){var t=e.id,n=e.webformatURL;return r.a.createElement(k,{key:t,webformatURL:n,openModal:function(){return a(t)}})})))},C=a(28),U=a.n(C),x=function(e){var t=e.addNewPage;return r.a.createElement("button",{className:U.a.btn,type:"button",onClick:t},"Load more")},R=a(29),P=a.n(R),F=function(e){var t=e.imageUrl,a=e.alt;return r.a.createElement("img",{className:P.a.img,src:t,alt:a})};F.defaultProps={alt:"gallery photo"};var A=F,q=a(13),B=a.n(q),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).overlayRef=Object(n.createRef)(),a.nandleKeyPress=function(e){var t=a.props.closeModal;"Escape"===e.code&&t()},a.handleOverlayClick=function(e){var t=e.target,n=a.overlayRef.current,r=a.props.closeModal;n&&t===n&&r()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.nandleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.nandleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:B.a.overlay,onClick:this.handleOverlayClick,ref:this.overlayRef,role:"presentation"},r.a.createElement("div",{className:B.a.modal},e))}}]),t}(n.Component),G=a(14),K=a.n(G),J=document.querySelector("#modal-root"),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],search:"",pages:1,error:null,isLoader:!1,isModal:!1,imageUrl:""},a.getItems=function(){var e=a.state,t=e.search,n=e.pages;a.setState({isLoader:!0}),b(t,n).then((function(e){return a.setState((function(t){return{items:[].concat(Object(l.a)(t.items),Object(l.a)(e)),pages:t.pages+1}}))})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoader:!1})}))},a.getSearchInput=function(e){e!==a.state.search&&a.setState({items:[],search:e,pages:1})},a.showsLargeImage=function(e){a.state.items.find((function(t){return t.id===e?a.setState({imageUrl:t.largeImageURL}):null}))},a.openModal=function(e){a.showsLargeImage(e),a.setState({isModal:!0})},a.closeModal=function(){a.setState({isModal:!1})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.search,r=a.items;t.search!==n&&this.getItems(),t.items.length!==r.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.error,n=e.isLoader,c=e.isModal,l=e.imageUrl;return r.a.createElement("div",{className:K.a.app},r.a.createElement(O,{onSubmit:this.getSearchInput}),a&&r.a.createElement("h1",null,"ERROR"),t.length>0&&r.a.createElement(L,{items:t,openModal:this.openModal}),n&&r.a.createElement("div",{className:K.a.loader},r.a.createElement(d.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})),t.length>0&&r.a.createElement(x,{addNewPage:this.getItems}),c&&Object(o.createPortal)(r.a.createElement(D,{closeModal:this.closeModal},r.a.createElement(A,{imageUrl:l})),J))}}]),t}(n.Component);a(73);c.a.render(r.a.createElement(T,null),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__jo466",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU",label:"Searchbar_label__1BV3w",input:"Searchbar_input__2C4aO"}}},[[30,1,2]]]);
//# sourceMappingURL=main.1837220d.chunk.js.map