(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,a){t.exports={wrapper:"ContactForm_wrapper__2tLG4",title:"ContactForm_title__2HmsN",input:"ContactForm_input__25Bun",button_wrapper:"ContactForm_button_wrapper__3f1wU",button:"ContactForm_button__K8wpo",title_item:"ContactForm_title_item__38MQP"}},,,,,function(t,e,a){t.exports={wrapper:"App_wrapper__354_0",title:"App_title__2Ye0a",item:"App_item__1Ldut"}},function(t,e,a){t.exports={item:"ContactList_item__I7dRo",list:"ContactList_list__3uL_I",button:"ContactList_button__23STW"}},function(t,e,a){t.exports={wrapper:"Filter_wrapper__1Vhxo",title:"Filter_title__VRTeL",input:"Filter_input__2a9Eg"}},,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(11),i=a(2),s=a(3),m=a(5),u=a(4),p=a(6),_=a.n(p),h=a(1),b=a.n(h),d=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={id:"",name:"",number:""},t.handleChangeNumber=function(e){t.setState({number:e.target.value})},t.handleChangeName=function(e){t.setState({name:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact({name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",{className:b.a.title},"Phonebook"),r.a.createElement("label",null,r.a.createElement("div",{className:b.a.wrapper},r.a.createElement("h3",{className:b.a.title_item},"Name"),r.a.createElement("input",{className:b.a.input,type:"text",value:this.state.name,onChange:this.handleChangeName}))),r.a.createElement("label",null,r.a.createElement("div",{className:b.a.wrapper},r.a.createElement("h3",{className:b.a.title_item},"Number"),r.a.createElement("input",{className:b.a.input,type:"tel",placeholder:"000-00-00",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",value:this.state.number,onChange:this.handleChangeNumber})," ")),r.a.createElement("div",{className:b.a.button_wrapper},r.a.createElement("button",{className:b.a.button,type:"submit",disabled:""===this.state.name||""===this.state.number},"Add contact")))}}]),a}(n.Component),f=a(7),v=a.n(f),C=function(t){var e=t.contacts,a=t.onDelete;return r.a.createElement("ul",{className:v.a.item},e.map((function(t){return r.a.createElement("li",{className:v.a.list,key:t.id},t.name," : ",t.number,r.a.createElement("button",{className:v.a.button,id:t.id,onClick:a},"Delete"))})))},E=a(8),N=a.n(E),w=function(t){var e=t.onFilter;return r.a.createElement("div",{className:N.a.wrapper},r.a.createElement("p",{className:N.a.title},"Find contact"),r.a.createElement("input",{className:N.a.input,type:"text",name:"filter",onChange:e}))},g=a(19),y=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e){var a=e.name,n=e.number,r={id:Object(g.a)(),name:a,number:n};t.state.contacts.some((function(t){return t.name===r.name}))?alert("".concat(r.name," is already in contacts!")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[r])}}))},t.handleSearch=function(e){e.preventDefault(),t.setState({filter:e.target.value})},t.contactFilter=function(){var e=t.state,a=e.contacts,n=e.filter;return n?a.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})):a},t.handleDelete=function(e){var a=e.target.id;t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==a}))})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.contactFilter();return r.a.createElement("div",{className:_.a.wrapper},r.a.createElement(d,{onAddContact:this.addContact}),r.a.createElement("h1",{className:_.a.title},"Contact"),0===this.state.contacts.length?r.a.createElement("p",{className:_.a.item},"Contact list is empty!"):r.a.createElement("div",null,r.a.createElement(w,{onFilter:this.handleSearch}),r.a.createElement(C,{contacts:t,onDelete:this.handleDelete})))}}]),a}(n.Component);l.a.render(r.a.createElement(y,null),document.querySelector("#root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.84fbb970.chunk.js.map