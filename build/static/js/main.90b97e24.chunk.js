(this["webpackJsonppeliculas-react"]=this["webpackJsonppeliculas-react"]||[]).push([[0],{41:function(e,t,a){e.exports=a(58)},46:function(e,t,a){},47:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(46),a(47),a(10)),i=a.n(s),l=a(17),u=a(12),m=a(13),p=a(15),h=a(14);var d=function(e){var t=e.movie;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t.Poster,alt:t.Title,className:"card-img-top",width:"100"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,t.Title,t.Year),r.a.createElement("p",null,"Type: ".concat(t.Type)),r.a.createElement("button",{type:"button",className:"btn btn-outline-success",onClick:function(e){return function(e){e.preventDefault(),console.log("The link was clicked.")}(e)}},"Guardar"))))},f="http://www.omdbapi.com/?apikey=aa3fe5ee",b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={data:[],searchTerm:"",error:"",loading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"&s=batman"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({data:a.Search,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.state.searchTerm){e.next=3;break}return e.abrupt("return",this.setState({error:"Debe escribir un texto valido"}));case 3:return e.next=5,fetch("".concat(f,"&s=").concat(this.state.searchTerm));case 5:return a=e.sent,e.next=8,a.json();case 8:if((n=e.sent).Search){e.next=11;break}return e.abrupt("return",this.setState({error:"No se encontaron resultados"}));case 11:this.setState({data:n.Search,error:"",searchTerm:""});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data;return t.loading?r.a.createElement("h3",{className:"text-light"},"Cargando"):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 offset-md-4 p-4"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Buscar",onChange:function(t){return e.setState({searchTerm:t.target.value})},value:this.state.searchTerm,autoFocus:!0})),r.a.createElement("p",{className:"text-white"},this.state.error?this.state.error:""))),r.a.createElement("div",{className:"row"},a.map((function(e,t){return r.a.createElement(d,{movie:e,key:t})}))))}}]),a}(r.a.Component);var v=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(35),w=a.n(E),g=(a(49),w.a.initializeApp({apiKey:"AIzaSyAFSLOicO0TnKiur12zbfwQ9TPJWjkKlMI",authDomain:"tp3appweb.firebaseapp.com",databaseURL:"https://tp3appweb.firebaseio.com",projectId:"tp3appweb",storageBucket:"tp3appweb.appspot.com",messagingSenderId:"828310208483",appId:"1:828310208483:web:5f805ba7f9b43f860eaad6"}).firestore(),a(53),a(25)),y=a(3),k=a(62),x=a(37),j=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{style:{position:"sticky",top:0},expand:"lg",variant:"light",bg:"light",fixed:"top"},r.a.createElement(x.a,null,r.a.createElement(k.a.Brand,{href:"/"},"Home"),r.a.createElement(k.a.Brand,{href:"/mis_peliculas"},"Peliculas guardadas")))}}]),a}(r.a.Component),S=a(63);var T=function(e){var t=e.movie;return console.log({movie:t}),r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-2 offset-md-2"},r.a.createElement(S.a,{style:{width:"13em"},bg:"warning",text:"white"},r.a.createElement(S.a.Img,{variant:"top",src:t.Poster}),r.a.createElement(S.a.Body,null,r.a.createElement(S.a.Title,null,t.Title),r.a.createElement(S.a.Subtitle,{className:"mb-2 text-muted"},"".concat(t.Type)," | ","A\xf1o: ".concat(t.Year)," "),r.a.createElement(S.a.Text,null),r.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(e){fetch("https://tp3appweb.firebaseio.com/nada.json",{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){alert("borrado")}))}},"Eliminar de mi lista")))))},N=a(61),O="http://www.omdbapi.com/?i=tt3896198&apikey=aa3fe5ee",C=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={data:[],searchTerm:"",error:"",loading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"&s=batman"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({data:a.Search,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.state.searchTerm){e.next=3;break}return e.abrupt("return",this.setState({error:"Debe escribir un texto valido"}));case 3:return e.next=5,fetch("".concat(O,"&s=").concat(this.state.searchTerm));case 5:return a=e.sent,e.next=8,a.json();case 8:if((n=e.sent).Search){e.next=11;break}return e.abrupt("return",this.setState({error:"No se encontaron resultados"}));case 11:this.setState({data:n.Search,error:"",searchTerm:""});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data;return e.loading?r.a.createElement("h3",{className:"text-light"},"Cargando"):r.a.createElement(n.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(N.a,{style:{backgroundColor:"white"}},t.map((function(e,t){return r.a.createElement(T,{movie:e,key:t})})))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(j,null),r.a.createElement("br",null),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:v}),r.a.createElement(y.a,{exact:!0,path:"/mis_peliculas",component:C}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.90b97e24.chunk.js.map