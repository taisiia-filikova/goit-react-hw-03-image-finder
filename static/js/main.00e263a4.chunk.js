(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={item:"ImageGalleryItem_item__ZI17d",image:"ImageGalleryItem_image__PMr9s"}},14:function(e,t,a){e.exports={backdrop:"Modal_backdrop__2wTBR",modal:"Modal_modal__3WEMh"}},15:function(e,t,a){e.exports={wrapper:"ErrorImg_wrapper__3Edal",text:"ErrorImg_text__Pps5k"}},27:function(e,t,a){e.exports={container:"Container_container__3KNu8"}},28:function(e,t,a){e.exports={list:"ImageGallery_list__nYukD"}},29:function(e,t,a){e.exports={overlay:"Loader_overlay__1h4Kd"}},31:function(e,t,a){e.exports={button:"Button_button__3iUzS"}},37:function(e,t,a){},6:function(e,t,a){e.exports={header:"Searchbar_header__1hfDj",form:"Searchbar_form__2z2D-",button:"Searchbar_button__19uuq",label:"Searchbar_label__qd2Qt",input:"Searchbar_input__1WSK8"}},80:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(4),i=a.n(c),s=(a(37),a(5)),l=a.n(s),u=a(17),d=a(7),g=a(8),h=a(9),m=a(11),p=a(10),b=a(26),f=a.n(b),j=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"19086607-f63ea5bac9dbca697b9469f63",e.next=3,f.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("19086607-f63ea5bac9dbca697b9469f63","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=a(27),x=a.n(v);var O=function(e){var t=e.children;return Object(n.jsx)("div",{className:x.a.container,children:t})},_=a(6),y=a.n(_);var w=function(e){var t=e.onHandleSubmit,a=e.onSearchQueryChange,r=e.value;return Object(n.jsx)("header",{className:y.a.header,children:Object(n.jsxs)("form",{className:y.a.form,onSubmit:t,children:[Object(n.jsx)("button",{type:"submit",className:y.a.button,children:Object(n.jsx)("span",{className:y.a.label,children:"Search"})}),Object(n.jsx)("input",{className:y.a.input,type:"text",value:r,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:a})]})})},S=a(13),k=a.n(S);var L=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,o=e.onOpenModal;return Object(n.jsx)("li",{className:k.a.item,children:Object(n.jsx)("img",{src:t,alt:r,"data-source":a,className:k.a.image,onClick:o})})},M=a(28),I=a.n(M);var N=function(e){var t=e.images,a=e.onOpenModal;return Object(n.jsx)("ul",{className:I.a.list,children:t.map((function(e){var t=e.id,r=e.webformatURL,o=e.largeImageURL,c=e.tags;return Object(n.jsx)(L,{webformatURL:r,largeImageURL:o,tags:c,onOpenModal:a},t)}))})},C=a(29),U=a.n(C),R=a(30),q=a.n(R);a(77);var D=function(){return Object(n.jsx)("div",{className:U.a.overlay,children:Object(n.jsx)(q.a,{type:"TailSpin",color:"#3f51b5",height:80,width:80,timeout:0})})},E=a(31),T=a.n(E);var B=function(e){var t=e.onLoadMore;return Object(n.jsx)("button",{type:"button",className:T.a.button,onClick:t,children:"Load more"})},K=a(14),P=a.n(K),z=document.querySelector("#modal-root"),G=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(c.createPortal)(Object(n.jsx)("div",{className:P.a.backdrop,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:P.a.modal,children:Object(n.jsx)("img",{src:e,alt:""})})}),z)}}]),a}(r.Component),H=a(15),Q=a.n(H),W=a.p+"static/media/nothing-found.38a59716.png";var A=function(e){var t=e.texterror;return Object(n.jsxs)("div",{role:"alert",className:Q.a.wrapper,children:[Object(n.jsx)("img",{src:W,width:"400",alt:"no-results"}),Object(n.jsx)("p",{text:t,className:Q.a.text,children:t})]})},J=a(16),F=(a(78),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],largeImageURL:"",page:1,error:null,isLoading:!1,showModal:!1},e.searchImages=Object(d.a)(l.a.mark((function t(){var a,n,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.query,r=a.page,""!==n.trim()){t.next=3;break}return t.abrupt("return",J.b.info("Please, enter a something for search images!"));case 3:return e.toggleLoader(),t.prev=4,t.next=7,j(n,r);case 7:o=t.sent,e.setState((function(e){var t=e.images,a=e.page;return{images:[].concat(Object(u.a)(t),Object(u.a)(o)),page:a+1}})),0===o.length&&e.setState({error:"Nothing were found for ".concat(n,"!")}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),e.setState({error:"Something went wrong. Please, try again."});case 15:return t.prev=15,e.toggleLoader(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,12,15,18]])}))),e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.searchImages()},e.onLoadMore=function(){e.searchImages(),e.scrolling()},e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.source}),e.toggleModal()},e.toggleLoader=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.scrolling=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight,behavior:"smooth"})}),1e3)},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.setState({images:[],page:1,error:null})}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.images,r=e.largeImageURL,o=e.isLoading,c=e.showModal,i=e.error;return Object(n.jsxs)(O,{children:[Object(n.jsx)(w,{onHandleSubmit:this.handleSubmit,onSearchQueryChange:this.handleChange,value:t}),i&&Object(n.jsx)(A,{texterror:i}),a.length>0&&Object(n.jsx)(N,{images:a,onOpenModal:this.onOpenModal}),o&&Object(n.jsx)(D,{}),!o&&a.length>0&&Object(n.jsx)(B,{onLoadMore:this.onLoadMore}),c&&Object(n.jsx)(G,{onToggleModal:this.toggleModal,largeImageURL:r}),Object(n.jsx)(J.a,{autoClose:3700})]})}}]),a}(r.Component));a(79);i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.00e263a4.chunk.js.map