(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){},190:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(41),a=n.n(o),c=(n(80),n(81),n(2)),s="MOVE_DISK",d="JUDGE_WINNER",l="RECORD_STEP",u="RESET_GAME";var p=n(9),f="disk",g={canDrag:function(e){return!(e.id>1)||function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value;if(c.position===e)return!1}}catch(s){r=!0,i=s}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}(e.state.disks.filter(function(t){return t.id===e.id})[0].position-3,e.state.disks)},beginDrag:function(e){return{diskId:e.id}}};var v=Object(p.DragSource)(f,g,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(function(e){var t,n=e.id,r=e.onMoveClick,o=e.connectDragSource,a=e.isDragging;switch(e.state,n){case 1:t={width:"40%",height:"55px",backgroundImage:"linear-gradient( -45deg, #5d5d5d 0%, #3f3f3f 27%, #1c1c1c 87% )",margin:"auto",borderRadius:"3px",zIndex:1,boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"};break;case 2:t={width:"53%",height:"55px",backgroundImage:"linear-gradient( -45deg, #5d5d5d 0%, #3f3f3f 27%, #1c1c1c 87% )",margin:"auto",borderRadius:"3px",zIndex:1,boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"};break;case 3:t={width:"65%",height:"55px",backgroundImage:"linear-gradient( -45deg, #5d5d5d 0%, #3f3f3f 27%, #1c1c1c 87% )",margin:"auto",borderRadius:"3px",zIndex:1,boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"}}return t.opacity=a?.5:1,o(i.a.createElement("div",{style:t,onClick:function(){return r(n)}}))}),b=Object(c.b)(function(e){return{state:e}},function(e,t){return{onMoveClick:function(e){}}})(v),h=(n(189),{canDrop:function(e,t){var n=t.getItem(),r=!0,i=!1,o=void 0;try{for(var a,c=e.state.disks[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){if(a.value.position===e.position)return!1}}catch(b){i=!0,o=b}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}for(var s=[],d=0;d<9;d++)s.push(d);var l=!0,u=!1,p=void 0;try{for(var f,g=e.state.disks[Symbol.iterator]();!(l=(f=g.next()).done);l=!0){var v=f.value;s.indexOf(v.position)>=0&&s.splice(s.indexOf(v.position),1)}}catch(b){u=!0,p=b}finally{try{l||null==g.return||g.return()}finally{if(u)throw p}}return console.log(s),(s=s.filter(function(t){return!(t<6)||!m(t+3,e.state.disks)&&function(e,t,n){if(!m(e+3,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value;if(c.position===e)return c.id}}catch(b){r=!0,i=b}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}(e+3,t)<n.diskId)return!1;return!0}(t,e.state.disks,n)&&function(e,t,n){return!(function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value;if(c.id===e)return c.position}}catch(b){r=!0,i=b}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}(n.diskId,t)-3===e)}(t,e.state.disks,n)})).indexOf(e.position)>=0},drop:function(e,t){var n,r=t.getItem();e.dispatch((n={id:r.diskId,position:e.position},{type:s,disk:n})),e.dispatch({type:d}),e.dispatch({type:l})}});function m(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){if(o.value.position===e)return!1}}catch(c){r=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}var x=Object(p.DropTarget)(f,h,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})(function(e){var t=e.children,n=e.connectDropTarget,r=(e.isOver,e.canDrop);return e.position,n(i.a.createElement("div",{className:"holder"},i.a.createElement("div",null,t),r&&i.a.createElement("div",{style:{position:"absolute",top:5,left:0,height:0,width:0,zIndex:2,opacity:.5,borderTop:"30px solid transparent",borderBottom:"30px solid transparent",borderLeft:"30px solid",borderLeftColor:"linear-gradient( -45deg, #5d5d5d 0%, #3f3f3f 27%, #1c1c1c 87% )"}})))}),k=Object(c.b)(function(e,t){return{state:e,position:t.position}})(x);n(190);function y(e,t){var n=t.disks;console.log(n);var r=n.filter(function(t){return t.position===e}),o=r[0]?i.a.createElement(b,{id:r[0].id}):null;return i.a.createElement(k,{key:e,position:e},o)}var w=Object(c.b)(function(e){return{state:e}})(function(e){for(var t=e.state,n=[],r=0;r<9;r++)n.push(y(r,t));return i.a.createElement("div",{className:"disk-container"},n)}),E=n(74),D=n.n(E);var I=Object(p.DragDropContext)(D.a)(function(e){var t=e.state,n=e.handleClick;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"spacing"}),i.a.createElement("div",{className:"banner-spacing"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col s6"},t.winner?i.a.createElement("div",{className:"ribbon-banner"},i.a.createElement("span",null,"You are the winner!")):i.a.createElement("div",null)),i.a.createElement("div",{class:"col s4"},"You Took ",i.a.createElement("strong",null,t.step)," Steps already"),i.a.createElement("div",{class:"col s2"},i.a.createElement("a",{class:"waves-effect waves-light btn grey darken-4 ",onClick:function(){return n()}},"Reset"))))),[{position:"absolute",bottom:"3%",left:"12.5%",width:"3%",height:"210px",backgroundColor:"#e5453d",zIndex:0},{position:"absolute",bottom:"3%",left:"40.5%",width:"3%",height:"210px",backgroundColor:"#e5453d",zIndex:0},{position:"absolute",bottom:"3%",left:"68.5%",width:"3%",height:"210px",backgroundColor:"#e5453d",zIndex:0}].map(function(e,t){return i.a.createElement("div",{key:t,style:e})}),i.a.createElement(w,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(15),S=n(28),C={disks:[{id:1,position:0},{id:2,position:3},{id:3,position:6}],winner:!1,step:0};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(S.a)({},e,{disks:e.disks.map(function(e){return console.log(e),e.id===t.disk.id?(console.log(t.disk.id),console.log(t.disk.position),{id:t.disk.id,position:t.disk.position}):e})});case d:var n=2===e.disks[0].position&&5===e.disks[1].position&&8===e.disks[2].position;return Object(S.a)({},e,{winner:n});case l:return Object(S.a)({},e,{step:e.step+1});case u:return C;default:return e}},N=Object(c.b)(function(e){return{state:e}},function(e,t){return{handleClick:function(){e({type:u})}}})(I),R=Object(O.createStore)(j);a.a.render(i.a.createElement(c.a,{store:R},i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,n){e.exports=n(214)},80:function(e,t,n){},81:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.200d0ef8.chunk.js.map