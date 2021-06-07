(this.webpackJsonpformulario=this.webpackJsonpformulario||[]).push([[0],{185:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(65),c=t.n(r),o=t(3),i=t(76),s=t(0),d=function(e){var a=e.setPantalla,t=Object(n.useState)(0),l=Object(o.a)(t,2),r=l[0],c=l[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(r+1),console.log("interval")}),1e3);return function(){window.clearInterval(e)}}),[r]),r>10&&a(1),Object(s.jsxs)("div",{className:"bg-white w-full sm:w-96 m-auto mt-20 p-4 rounded shadow",children:[Object(s.jsx)("p",{className:"font-bold mb-8 text-center text-xl",children:"Completa el catpcha"}),Object(s.jsx)("p",{className:"text-2xl",children:r}),Object(s.jsx)(i.a,{sitekey:"6LdzUBgbAAAAABwk_lzcuqd9NMswwbMNZUIIX_aP",onChange:function(){return a(4)}}),Object(s.jsx)("button",{className:"bg-red-500 hover:bg-red-600 cursor-pointer text-white p-2 mr-0 mt-4",onClick:function(){return a(1)},children:"Cancelar"})]})},u=t(29),b=t(5),m=["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila de Zaragoza","Colima","Chiapas","Chihuahua","Distrito Federal","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","M\xe9xico","Michoac\xe1n de Ocampo","Morelos","Nayarit","Nuevo Le\xf3n","Oaxaca","Puebla","Quer\xe9taro","Quintana Roo","San Luis Potos\xed","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz de Ignacio de la Llave","Yucat\xe1n","Zacatecas"],j=function(e){var a=e.setPantalla,t=Object(n.useState)(null),l=Object(o.a)(t,2),r=l[0],c=l[1],i=Object(u.a)({initialValues:{nombre:"",apellido1:"",apellido2:"",sexo:"M",nacimiento:"",localidad:"",email:"",email2:""},validationSchema:b.b({nombre:b.c().matches(/^[a-zA-Z\xf1\xd1\xfc\xdc\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa ]+$/gi,"\xa1Dato Incorrecto...!").required("El nombre no puede ir vacio"),apellido1:b.c().matches(/^[a-zA-Z\xf1\xd1\xfc\xdc\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa ]+$/gi,"\xa1Dato Incorrecto...!").required("El apellido no puede ir vacio"),apellido2:b.c().matches(/^[a-zA-Z\xf1\xd1\xfc\xdc\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa ]+$/gi,"\xa1Dato Incorrecto...!").required("El apellido no puede ir vacio"),localidad:b.c().matches(/^[a-zA-Z\xf1\xd1\xfc\xdc\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa. ]+$/gi,"\xa1Dato Incorrecto...!").required("El apellido no puede ir vacio"),email:b.c().email("el email no es valido").required("El email no puede ir vacio"),email2:b.c().email("el email no es valido").required("El email no puede ir vacio")}),onSubmit:function(e){if(e.email!==e.email2)return c("los correos no coinciden"),setTimeout((function(){return c(null)}),3e3);var t=function(e){var a=new Date,t=new Date(e),n=a.getFullYear()-t.getFullYear(),l=a.getMonth()-t.getMonth();return(l<0||0===l&&a.getDate()<t.getDate())&&n--,n}(e.nacimiento);return"number"===typeof t&&e.nacimiento?t<18?(c("Usted no puede realizar este tipo de tr\xe1mite"),setTimeout((function(){return c(null)}),3e3)):void a(3):(c("Introduce una fecha valida"),setTimeout((function(){return c(null)}),3e3))}}),d=function(e){return i.touched[e]&&i.errors[e]?Object(s.jsxs)("div",{className:"my-1 bg-red-100 border-l-4 border-red-500 text-red-700 px-2",children:[Object(s.jsx)("p",{className:"font-bold",children:"Error"}),Object(s.jsx)("p",{children:i.errors[e]})]}):null};return Object(s.jsxs)("div",{className:"bg-white w-full sm:w-96 m-auto mt-20 p-4 rounded shadow",children:[Object(s.jsx)("h1",{className:"font-bold mb-8 text-center text-xl",children:"Cobros/Dep\xf3sitos de Pagos \xc1ntrax S.A. de C.V."}),Object(s.jsxs)("form",{onSubmit:i.handleSubmit,children:[r&&Object(s.jsx)("p",{className:"my-1 bg-red-100 border-l-4 border-red-500 text-red-700 px-2",children:r}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"nombre",children:"nombre"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"text",name:"nombre",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("nombre"),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"apellido1",children:"primer apellido"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"text",name:"apellido1",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("apellido1"),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"apellido2",children:"segundo apellido"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"text",name:"apellido2",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("apellido2"),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"sexo",children:"sexo"}),Object(s.jsxs)("select",{className:"shadow-xl border-2 rounded ml-2",name:"sexo",onChange:i.handleChange,onBlur:i.handleBlur,children:[Object(s.jsx)("option",{value:"M",children:"Masculino"}),Object(s.jsx)("option",{value:"F",children:"Femenino"})]})]}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"nacimiento",children:"fecha de nacimiento"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"date",name:"nacimiento",onChange:i.handleChange,onBlur:i.handleBlur})]}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"estado",children:"estado"}),Object(s.jsx)("select",{className:"shadow-xl border-2 rounded ml-2",name:"estado",onChange:i.handleChange,onBlur:i.handleBlur,children:m.map((function(e,a){return Object(s.jsx)("option",{value:e,children:e},a)}))})]}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"localidad",children:"localidad"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"text",name:"localidad",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("localidad"),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"pais",children:"pais"}),Object(s.jsx)("select",{className:"shadow-xl border-2 rounded ml-2",name:"pais",children:Object(s.jsx)("option",{value:"mexico",children:"M\xe9xico"})})]}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"email",children:"email"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"text",name:"email",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("email"),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"email2",children:"confirma email"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"text",name:"email2",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("email2"),Object(s.jsx)("input",{className:"bg-green-500 hover:bg-green-600 cursor-pointer text-white p-2 ".concat(r&&"bg-green-400"),type:"submit",value:"Aceptar",disabled:r}),Object(s.jsx)("input",{className:"bg-red-500 hover:bg-red-600 cursor-pointer text-white p-2 ml-2",type:"button",value:"Cancelar",onClick:function(){return a(1)}})]})]})},h=["BBVA Bancomer","Banorte","Banamex","Santander","Scotiabank","HSBC","Inbursa","Banco del Baj\xedo","Afirme","Banco Azteca","American Express","Scotiabank"],x=function(e){var a=e.setPantalla,t=Object(n.useState)(null),l=Object(o.a)(t,2),r=l[0],c=l[1],i=Object(u.a)({initialValues:{cuenta:"",banco:"",mes:"12",anio:"2021",cvu:"",cantidad:"",cantidad2:""},validationSchema:b.b({cuenta:b.c().matches(/^[0-9]+$/gi,"\xa1Dato Incorrecto...!").required("El numero de cuenta no puede ir vacio").length(16,"deben ser 16 digitos"),cvu:b.c().matches(/^[0-9]+$/gi,"\xa1Dato Incorrecto...!").required("El cvu no puede ir vacio").length(3,"deben ser 3 digitos"),cantidad:b.a().min(1,"debe ser mayor a 0").max(9999.99,"cantidad maxima superada!").required("El numero de cuenta no puede ir vacio"),cantidad2:b.a().min(1,"debe ser mayor a 0").max(9999.99,"cantidad maxima superada!").required("El numero de cuenta no puede ir vacio")}),onSubmit:function(e){if(e.cantidad!==e.cantidad2)return c("la cantidad no coincide"),setTimeout((function(){return c(null)}),3e3);a(5)}}),d=function(e){return i.touched[e]&&i.errors[e]?Object(s.jsxs)("div",{className:"my-1 bg-red-100 border-l-4 border-red-500 text-red-700 px-2",children:[Object(s.jsx)("p",{className:"font-bold",children:"Error"}),Object(s.jsx)("p",{children:i.errors[e]})]}):null};return Object(s.jsx)("div",{className:"bg-white w-full sm:w-96 m-auto mt-20 p-4 rounded shadow",children:Object(s.jsxs)("form",{onSubmit:i.handleSubmit,children:[r&&Object(s.jsx)("p",{className:"my-1 bg-red-100 border-l-4 border-red-500 text-red-700 px-2",children:r}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"cuenta",children:"cuenta"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"number",name:"cuenta",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("cuenta"),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"banco",children:"banco"}),Object(s.jsx)("select",{className:"shadow-xl border-2 rounded ml-2",name:"banco",onChange:i.handleChange,onBlur:i.handleBlur,children:h.map((function(e,a){return Object(s.jsx)("option",{value:e,children:e},a)}))})]}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"expiracion",children:"fecha de expiraci\xf3n"}),Object(s.jsx)("label",{htmlFor:"mes",children:"mes"}),Object(s.jsxs)("select",{className:"shadow-xl border-2 rounded",name:"mes",id:"mes",children:[Object(s.jsx)("option",{value:"01",children:"01"}),Object(s.jsx)("option",{value:"02",children:"02"}),Object(s.jsx)("option",{value:"03",children:"03"}),Object(s.jsx)("option",{value:"04",children:"04"}),Object(s.jsx)("option",{value:"05",children:"05"}),Object(s.jsx)("option",{value:"06",children:"06"}),Object(s.jsx)("option",{value:"07",children:"07"}),Object(s.jsx)("option",{value:"08",children:"08"}),Object(s.jsx)("option",{value:"09",children:"09"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"11",children:"11"}),Object(s.jsx)("option",{value:"12",children:"12"})]}),Object(s.jsx)("label",{htmlFor:"anio",children:"a\xf1o"}),Object(s.jsxs)("select",{className:"shadow-xl border-2 rounded ml-2",name:"anio",id:"anio",children:[Object(s.jsx)("option",{value:"2020",children:"2020"}),Object(s.jsx)("option",{value:"2021",children:"2021"}),Object(s.jsx)("option",{value:"2022",children:"2022"}),Object(s.jsx)("option",{value:"2023",children:"2023"}),Object(s.jsx)("option",{value:"2024",children:"2024"}),Object(s.jsx)("option",{value:"2025",children:"2025"})]})]}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"cvu",children:"cvu"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"number",name:"cvu",max:"999",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("cvu"),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"cantidad",children:"cantidad a transferir"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"number",name:"cantidad",step:"0.01",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("cantidad"),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("label",{htmlFor:"cantidad2",children:"confirmar cantidad"}),Object(s.jsx)("input",{className:"shadow-xl border-2 rounded ml-2",type:"number",name:"cantidad2",step:"0.01",onChange:i.handleChange,onBlur:i.handleBlur})]}),d("cantidad2"),Object(s.jsx)("input",{className:"bg-green-500 hover:bg-green-600 cursor-pointer text-white p-2 ".concat(!!r&&"bg-green-200"),type:"submit",value:"Aceptar",disabled:!!r}),Object(s.jsx)("input",{className:"bg-red-500 hover:bg-red-600 cursor-pointer text-white p-2 ml-2",type:"button",value:"Cancelar",onClick:function(){return a(1)}})]})})},p=t(77),O=function(e){var a=e.setPantalla,t=Object(n.useState)(null),l=Object(o.a)(t,2),r=l[0],c=l[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),u=d[0],b=d[1],m=Object(n.useState)(null),j=Object(o.a)(m,2),h=j[0],x=j[1];return Object(s.jsxs)("div",{className:"bg-white w-full sm:w-96 m-auto mt-20 p-4 rounded shadow",children:[Object(s.jsx)("p",{className:"font-bold mb-8 text-center text-xl",children:"Completa el catpcha"}),h&&Object(s.jsx)("p",{className:"my-1 bg-red-100 border-l-4 border-red-500 text-red-700 px-2",children:h}),Object(s.jsxs)("div",{children:["click en la imagen para cambiar",Object(s.jsx)(p.a,{width:200,charNum:4,onChange:function(e){c(e)}}),Object(s.jsx)("span",{className:"relative bottom-14 text-xl cursor-pointer z--1",children:"\u27f3"}),Object(s.jsx)("input",{type:"text",placeholder:"escribe aqui",className:"shadow-xl border-2 rounded my-2",value:u,onChange:function(e){var a=e.target;return b(a.value)}})]}),Object(s.jsx)("button",{className:"bg-blue-500 hover:bg-blue-600 cursor-pointer text-white p-2 mr-2",onClick:function(){if(u!==r)return x("esta mal, vuelve a intentar"),setTimeout((function(){return x(null)}),3e3);a(6)},children:"Aceptar"}),Object(s.jsx)("button",{className:"bg-red-500 hover:bg-red-600 cursor-pointer text-white p-2 mr-0 mt-4",onClick:function(){return a(1)},children:"Cancelar"})]})},v=function(e){var a=e.setPantalla;return Object(s.jsxs)("div",{className:"bg-white w-full sm:w-96 m-auto mt-20 p-4 rounded shadow flex flex-col",children:[Object(s.jsx)("p",{className:"font-bold mb-8 text-center text-xl",children:"Programa 2"}),Object(s.jsx)("button",{className:"bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-white p-2 mr-0 mt-4 block",onClick:function(){return a(2)},children:"Iniciar"})]})},f=function(e){var a=e.setPantalla;return setTimeout((function(){return a(1)}),3e3),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"bg-black w-full sm:w-96 m-auto mt-20 p-4 rounded shadow flex flex-col",children:Object(s.jsx)("h3",{className:"text-white text-2xl text-center",children:"Envi\xf3 realizado correctamente"})})})};var g=function(){var e=Object(n.useState)(4),a=Object(o.a)(e,2),t=a[0],l=a[1];switch(t){case 1:return Object(s.jsx)(v,{setPantalla:l});case 2:return Object(s.jsx)(j,{setPantalla:l});case 3:return Object(s.jsx)(d,{setPantalla:l});case 4:return Object(s.jsx)(x,{setPantalla:l});case 5:return Object(s.jsx)(O,{setPantalla:l});case 6:return Object(s.jsx)(f,{setPantalla:l});default:return null}};c.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.59be7dd2.chunk.js.map