!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Pj3g:function(e,t,i){"use strict";i.d(t,"a",function(){return p});var c=i("fXoL"),s=i("oaey"),u=i("nYR2"),l=i("1G5W"),f=i("lJxs"),d=i("2Vo4"),b=i("EY2u"),p=function(e){r(i,e);var t=a(i);function i(){var e;return n(this,i),(e=t.call(this)).isLoading$=new d.a(!0),e.pageIndex$=new c.n,e.params=null,e}return o(i,[{key:"stopLoading",value:function(){return this.isLoading$.next(!1),b.a}},{key:"goToPrevPage",value:function(){return this.pageIndex$.emit(),b.a}},{key:"getItems",value:function(e){var t=this;return this.isLoading$.next(!0),e.pipe(Object(u.a)(function(){return t.isLoading$.next(!1)}),Object(l.a)(this.destroyed),Object(f.a)(function(e){return t.items=e.items,t.totalCount=e.total_count,e}))}}]),i}(s.a)},Rr9H:function(t,i,c){"use strict";c.r(i),c.d(i,"DoctorListModule",function(){return ke});var s,u=c("PCNd"),l=c("S9na"),f=c("fXoL"),d=((s=function e(){n(this,e)}).\u0275mod=f.Mb({type:s}),s.\u0275inj=f.Lb({factory:function(e){return new(e||s)}}),s),b=c("tyNb"),p=c("Pj3g"),m=c("UXun"),h=c("1G5W"),v=c("eIep"),g=c("nYR2"),z=c("2Vo4"),y=c("mCNh"),O=c("+K6+"),C=c("dEAy"),T=c("ILvI"),k=c("o5fV"),S=c("3Pt+"),w=function(e){r(i,e);var t=a(i);function i(){return n(this,i),t.call(this)}return o(i,[{key:"edit",value:function(e,t){return this.editItemRequest(e,"Doctor updated successfully",Object(T.j)(t))}},{key:"create",value:function(e){return this.createItemRequest(e,"Doctor created successfully",T.i)}},{key:"getGroupOptions",value:function(e){return this.getOptions(e,T.k)}},{key:"getPracticeOptions",value:function(e){return this.getOptions(e,T.C)}}]),i}(c("vxZU").a),A=c("pfyX"),I=c("TwVa"),U=c("Yn1n"),L=c("ocnv"),_=c("HZS1"),P=c("B+r4"),j=c("bb81"),$=c("5vDB"),E=c("PTRe"),x=c("VdD3"),M=c("ofXK");function F(e,t){if(1&e){var n=f.Vb();f.Ub(0,"nz-form-item"),f.Ub(1,"nz-form-label",6),f.Hc(2,"Practice"),f.Tb(),f.Ub(3,"nz-form-control",3),f.Ub(4,"app-select",19),f.bc("valueChangedEvt",function(e){return f.vc(n),f.ec().practiceValueChanged(e)}),f.Tb(),f.Tb(),f.Tb()}if(2&e){var i=f.ec(),o=f.uc(43);f.Ab(1),f.mc("nzSpan",5),f.Ab(2),f.mc("nzErrorTip",o),f.Ab(1),f.mc("control",i.f.practice)("url",i.practiceUrl)}}function D(e,t){1&e&&(f.Sb(0),f.Hc(1," This field is required "),f.Rb())}function R(e,t){if(1&e&&(f.Sb(0),f.Hc(1),f.Rb()),2&e){var n=f.ec().$implicit;f.Ab(1),f.Jc(" ",n.errors.validationError," ")}}function V(e,t){if(1&e&&(f.Fc(0,D,2,0,"ng-container",20),f.Fc(1,R,2,1,"ng-container",20)),2&e){var n=t.$implicit;f.mc("ngIf",n.hasError("required")),f.Ab(1),f.mc("ngIf",n.hasError("validationError"))}}var H,N,K,G,q=function(){return["admin"]},X=((G=function(t){r(c,t);var i=a(c);function c(e,t,o){var r;return n(this,c),(r=i.call(this,e)).crudService=t,r.currentUserService=o,r.practiceUrl=T.C,r.groupsUrl=T.k,r.form=new S.h({npi:new S.e("",[S.s.required]),practice:new S.e("",[S.s.required]),first_name:new S.e("",[S.s.required]),last_name:new S.e("",[S.s.required]),middle_name:new S.e(""),email:new S.e("",[S.s.required,S.s.email]),phone:new S.e(""),specialization:new S.e(""),groups:new S.e(null)}),r}return o(c,[{key:"onSaveClick",value:function(t){var n,i=null===(n=this.doctor)||void 0===n?void 0:n.id,o=this.form.value;o.groups=o.groups?e(o.groups):[];var r=i?this.crudService.edit(o,i):this.crudService.create(o);this.saveItem(t,r)}},{key:"practiceValueChanged",value:function(e){this.loadOptions$.next([{key:"practice",value:e.name}])}},{key:"ngOnInit",value:function(){var e=this.currentUserService.currentUser;if(e.role===U.a.manager&&(this.form.removeControl("practice"),this.loadOptions$.next([{key:"practice",value:e.practice.name}])),this.doctor){for(var t in this.doctor)if(this.doctor[t]&&Object.prototype.hasOwnProperty.call(this.f,t)){if("groups"===t){this.doctor[t]=this.doctor[t].map(function(e){return Object.assign(new I.e,e)}),this.doctor[t].length&&this.f[t].patchValue(this.doctor[t][0].id,{emitEvent:!1});continue}if("object"==typeof this.doctor[t]&&this.f[t]){this.f[t].patchValue(this.doctor[t].id,{emitEvent:!1});continue}this.f[t].patchValue(this.doctor[t],{emitEvent:!1})}this.loadOptions$.next([{key:"practice",value:this.doctor.practice.name}])}this.formInitValue=this.form.getRawValue()}}]),c}(A.a)).\u0275fac=function(e){return new(e||G)(f.Ob(C.c),f.Ob(w),f.Ob(O.a))},G.\u0275cmp=f.Ib({type:G,selectors:[["ng-component"]],features:[f.zb([w]),f.xb],decls:44,vars:26,consts:[["nz-form","",1,"form",3,"formGroup"],[4,"appRolesAccess"],[3,"nzSpan"],[3,"nzErrorTip"],["placeholder","Search and select group",3,"control","url","disabled","loadOptions$","canLoad"],[1,"form__item","form__item--multiple-fields"],["nzRequired","",3,"nzSpan"],[1,"form__row"],[1,"form__column"],["nz-input","","formControlName","first_name","autocomplete","","placeholder","First name *"],["nzExtra","optional",3,"nzErrorTip"],["nz-input","","formControlName","middle_name","autocomplete","","placeholder","Middle name"],["nz-input","","formControlName","last_name","autocomplete","","placeholder","Last name *"],["nz-input","","formControlName","npi","autocomplete",""],["nz-input","","formControlName","email","type","email"],["nz-input","","formControlName","specialization","autocomplete",""],["nz-input","","formControlName","phone"],[3,"processing","processingClose","isEditing","formValid","saveEvent","closeEvent"],["errorTpl",""],["placeholder","Search and select practice",3,"control","url","valueChangedEvt"],[4,"ngIf"]],template:function(e,t){if(1&e&&(f.Ub(0,"form",0),f.Fc(1,F,5,4,"nz-form-item",1),f.Ub(2,"nz-form-item"),f.Ub(3,"nz-form-label",2),f.Hc(4,"Group"),f.Tb(),f.Ub(5,"nz-form-control",3),f.Pb(6,"app-select",4),f.Tb(),f.Tb(),f.Pb(7,"nz-divider"),f.Ub(8,"nz-form-item",5),f.Ub(9,"nz-form-label",6),f.Hc(10,"Name"),f.Tb(),f.Ub(11,"div",7),f.Ub(12,"nz-form-item",8),f.Ub(13,"nz-form-control",3),f.Pb(14,"input",9),f.Tb(),f.Tb(),f.Ub(15,"nz-form-item",8),f.Ub(16,"nz-form-control",10),f.Pb(17,"input",11),f.Tb(),f.Tb(),f.Ub(18,"nz-form-item",8),f.Ub(19,"nz-form-control",3),f.Pb(20,"input",12),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(21,"nz-form-item"),f.Ub(22,"nz-form-label",6),f.Hc(23,"NPI"),f.Tb(),f.Ub(24,"nz-form-control",3),f.Pb(25,"input",13),f.Tb(),f.Tb(),f.Ub(26,"nz-form-item"),f.Ub(27,"nz-form-label",6),f.Hc(28,"Email"),f.Tb(),f.Ub(29,"nz-form-control",3),f.Pb(30,"input",14),f.Tb(),f.Tb(),f.Ub(31,"nz-form-item"),f.Ub(32,"nz-form-label",2),f.Hc(33,"Specialization"),f.Tb(),f.Ub(34,"nz-form-control",3),f.Pb(35,"input",15),f.Tb(),f.Tb(),f.Ub(36,"nz-form-item"),f.Ub(37,"nz-form-label",2),f.Hc(38,"Phone"),f.Tb(),f.Ub(39,"nz-form-control",3),f.Pb(40,"input",16),f.Tb(),f.Tb(),f.Tb(),f.Ub(41,"app-modal-footer",17),f.bc("saveEvent",function(e){return t.onSaveClick(e)})("closeEvent",function(){return t.closeModal()}),f.Tb(),f.Fc(42,V,2,2,"ng-template",null,18,f.Gc)),2&e){var n=f.uc(43);f.mc("formGroup",t.form),f.Ab(1),f.mc("appRolesAccess",f.oc(25,q)),f.Ab(2),f.mc("nzSpan",5),f.Ab(2),f.mc("nzErrorTip",n),f.Ab(1),f.mc("control",t.f.groups)("url",t.groupsUrl)("disabled",!(null!=t.f.practice&&t.f.practice.valid))("loadOptions$",t.loadOptions$.asObservable())("canLoad",!1),f.Ab(3),f.mc("nzSpan",5),f.Ab(4),f.mc("nzErrorTip",n),f.Ab(3),f.mc("nzErrorTip",n),f.Ab(3),f.mc("nzErrorTip",n),f.Ab(3),f.mc("nzSpan",5),f.Ab(2),f.mc("nzErrorTip",n),f.Ab(3),f.mc("nzSpan",5),f.Ab(2),f.mc("nzErrorTip",n),f.Ab(3),f.mc("nzSpan",5),f.Ab(2),f.mc("nzErrorTip",n),f.Ab(3),f.mc("nzSpan",5),f.Ab(2),f.mc("nzErrorTip",n),f.Ab(2),f.mc("processing",t.processing)("processingClose",t.processingClose)("isEditing",!(null==t.doctor||!t.doctor.id))("formValid",t.form.valid)}},directives:[S.t,S.o,L.b,S.i,_.a,P.c,L.c,P.a,L.d,L.a,j.a,$.a,E.b,S.d,S.n,S.g,x.a,M.o],encapsulation:2}),G),Y=((K=function(e){r(i,e);var t=a(i);function i(){return n(this,i),t.call(this)}return o(i,[{key:"getDoctorList",value:function(e){return this.getItems(e,T.i)}},{key:"addDoctor",value:function(){return this.openModal("Add new doctor",void 0,X)}},{key:"editDoctor",value:function(e){return this.openModal("Edit doctor ".concat(e.first_name," ").concat(e.last_name),{doctor:e},X)}},{key:"deleteDoctor",value:function(e){return this.deleteItem("Are you sure you want to delete doctor ".concat(e.first_name," ").concat(e.last_name,"?"),Object(T.j)(e.id))}},{key:"resendActivationEmail",value:function(e){return this.http.post(Object(T.E)(e),{})}}]),i}(k.a)).\u0275fac=function(e){return new(e||K)},K.\u0275prov=f.Kb({token:K,factory:K.\u0275fac,providedIn:d}),K),Z=((N=function(e){r(i,e);var t=a(i);function i(){var e;return n(this,i),(e=t.call(this)).displayColumns=[{name:"NPI",filterKey:"npi",customFilter:"search",sort:!0,filter:!0,visible:!1},{name:"Name",filterKey:"name",customFilter:"search",sort:!0,filter:!0,visible:!1},{name:"Specialization"},{name:"Practice",filterKey:"practice",customFilter:"search",filter:!0,visible:!1},{name:"Group"},{name:"Email",filterKey:"email",customFilter:"search",filter:!0,visible:!1},{name:"Phone"},{name:"State",filterMultiple:!1,filterKey:"active",listOfFilter:[{text:"Active",value:"true"},{text:"Inactive",value:"false"}],filter:!0,visible:!1,pipe:"state"},{name:""}],e}return i}(Y)).\u0275fac=function(e){return new(e||N)},N.\u0275prov=f.Kb({token:N,factory:N.\u0275fac,providedIn:d}),N),B=((H=function(e){r(i,e);var t=a(i);function i(){var e;return n(this,i),(e=t.call(this)).displayColumns=[{name:"NPI",filterKey:"npi",customFilter:"search",sort:!0,filter:!0,visible:!1},{name:"Name",filterKey:"name",customFilter:"search",sort:!0,filter:!0,visible:!1},{name:"Specialization"},{name:"Group"},{name:"Email",filterKey:"email",customFilter:"search",filter:!0,visible:!1},{name:"Phone"},{name:"State",filterMultiple:!1,filterKey:"active",listOfFilter:[{text:"Active",value:"true"},{text:"Inactive",value:"false"}],filter:!0,visible:!1,pipe:"state"},{name:""}],e}return i}(Y)).\u0275fac=function(e){return new(e||H)},H.\u0275prov=f.Kb({token:H,factory:H.\u0275fac,providedIn:d}),H),J=new f.q("DoctorListService"),W={provide:J,useFactory:function(e){switch(e.currentRole){case"admin":return new Z;case"manager":return new B}},deps:[O.a,C.d]},Q=c("bNXi"),ee=c("jPNr"),te=c("OzZK"),ne=c("RwU8"),ie=c("C2AL"),oe=c("1ReC"),re=c("rMZv"),ce=c("Nqz0"),ae=c("FwiY"),se=c("Q8cG"),ue=c("ZyQt"),le=function(){return["/import-data/doctors"]};function fe(e,t){1&e&&(f.Ub(0,"button",6),f.Hc(1,"Import doctors"),f.Tb()),2&e&&f.mc("routerLink",f.oc(1,le))}function de(e,t){if(1&e&&(f.Ub(0,"td"),f.Hc(1),f.Tb()),2&e){var n=f.ec().$implicit;f.Ab(1),f.Ic(null==n.practice?null:n.practice.name)}}function be(e,t){1&e&&(f.Ub(0,"nz-tag",22),f.Hc(1,"active"),f.Tb())}function pe(e,t){1&e&&(f.Ub(0,"nz-tag",23),f.Hc(1,"inactive"),f.Tb())}var me=function(e){return{"ant-btn-link--disabled":e}};function he(e,t){if(1&e){var n=f.Vb();f.Ub(0,"button",24),f.bc("click",function(){f.vc(n);var e=f.ec().$implicit;return f.ec().onResendActivationEmailClick(e)}),f.fc(1,"async"),f.fc(2,"async"),f.Ub(3,"div",25),f.fc(4,"async"),f.Pb(5,"i",26),f.fc(6,"async"),f.Ub(7,"span"),f.Hc(8,"Resend activation email"),f.Tb(),f.Tb(),f.Tb()}if(2&e){var i=f.ec(2);f.mc("nzDisabled",f.gc(1,4,i.emailIsSendingAsObs$))("disabled",f.gc(2,6,i.emailIsSendingAsObs$)),f.Ab(3),f.mc("ngClass",f.pc(12,me,f.gc(4,8,i.emailIsSendingAsObs$))),f.Ab(2),f.mc("nzType",f.gc(6,10,i.emailIsSendingAsObs$)?"loading":"mail")}}var ve=function(){return["admin"]};function ge(e,t){if(1&e){var n=f.Vb();f.Ub(0,"tr"),f.Ub(1,"td"),f.Hc(2),f.Tb(),f.Ub(3,"td"),f.Hc(4),f.Tb(),f.Ub(5,"td"),f.Hc(6),f.Tb(),f.Fc(7,de,2,1,"td",7),f.Ub(8,"td"),f.Hc(9),f.Tb(),f.Ub(10,"td"),f.Hc(11),f.Tb(),f.Ub(12,"td"),f.Hc(13),f.Tb(),f.Ub(14,"td",8),f.Fc(15,be,2,0,"nz-tag",9),f.Fc(16,pe,2,0,"nz-tag",10),f.Tb(),f.Ub(17,"td",11),f.Ub(18,"div"),f.Ub(19,"button",12),f.Pb(20,"i",13),f.Tb(),f.Ub(21,"nz-dropdown-menu",null,14),f.Ub(23,"div",15),f.Fc(24,he,9,14,"button",16),f.Ub(25,"button",17),f.bc("click",function(){f.vc(n);var e=t.$implicit;return f.ec().onEditClick(e)}),f.Ub(26,"div",18),f.Pb(27,"i",19),f.Ub(28,"span"),f.Hc(29,"Edit"),f.Tb(),f.Tb(),f.Tb(),f.Ub(30,"button",17),f.bc("click",function(){f.vc(n);var e=t.$implicit;return f.ec().onDeleteClick(e)}),f.Ub(31,"div",20),f.Pb(32,"i",21),f.Ub(33,"span"),f.Hc(34,"Delete"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb()}if(2&e){var i=t.$implicit,o=f.uc(22);f.Ab(2),f.Ic(i.npi),f.Ab(2),f.Lc("",i.first_name," ",i.middle_name," ",i.last_name,""),f.Ab(2),f.Ic(i.specialization),f.Ab(1),f.mc("appRolesAccess",f.oc(13,ve)),f.Ab(2),f.Ic(null==i.groups[0]?null:i.groups[0].name),f.Ab(2),f.Ic(i.email),f.Ab(2),f.Ic(i.phone),f.Ab(2),f.mc("ngIf",i.active),f.Ab(1),f.mc("ngIf",!i.active),f.Ab(3),f.mc("nzDropdownMenu",o),f.Ab(5),f.mc("ngIf",!i.active)}}var ze,ye,Oe,Ce=[{path:"",component:(ze=function(e){r(i,e);var t=a(i);function i(e,o){var r;return n(this,i),(r=t.call(this)).doctorListService=e,r.notifService=o,r.emailIsSending$=new z.a(!1),r.displayColumns=r.doctorListService.displayColumns,r}return o(i,[{key:"getDoctors",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params;return this.getItems(this.doctorListService.getDoctorList(e)).pipe(Object(h.a)(this.destroyed))}},{key:"onAddClick",value:function(){this.doctorListService.addDoctor().pipe(this.doctorsPipe).subscribe()}},{key:"onEditClick",value:function(e){this.doctorListService.editDoctor(e).pipe(this.doctorsPipe).subscribe()}},{key:"onResendActivationEmailClick",value:function(e){var t=this;this.emailIsSending$.next(!0),this.doctorListService.resendActivationEmail(e.id).pipe(Object(h.a)(this.destroyed),Object(g.a)(function(){return t.emailIsSending$.next(!1)})).subscribe(function(){return t.notifService.success("Email has been sent to "+e.email,"")})}},{key:"onDeleteClick",value:function(e){var t=this;this.doctorListService.deleteDoctor(e).pipe(Object(v.a)(function(){return 1===t.items.length?t.goToPrevPage():t.getDoctors()})).subscribe()}},{key:"onQueryParamsChange",value:function(e){this.params=e,this.getDoctors().subscribe()}},{key:"emailIsSendingAsObs$",get:function(){return this.emailIsSending$.pipe(Object(m.a)(1))}},{key:"doctorsPipe",get:function(){var e=this;return Object(y.a)(Object(v.a)(function(){return e.getDoctors()}))}}]),i}(p.a),ze.\u0275fac=function(e){return new(e||ze)(f.Ob(J),f.Ob(Q.b))},ze.\u0275cmp=f.Ib({type:ze,selectors:[["ng-component"]],features:[f.zb([W]),f.xb],decls:8,vars:8,consts:[[1,"panel"],["nzTitle","Doctor list",1,"page-header"],["nz-button","","nzType","link",3,"routerLink",4,"appRolesAccess"],["nz-button","","nzType","primary",3,"click"],[3,"data","totalCount","isLoading$","pageIndex$","displayColumns","queryParamsChange"],[4,"ngFor","ngForOf"],["nz-button","","nzType","link",3,"routerLink"],[4,"appRolesAccess"],[1,"table-cell__state"],["nzColor","green",4,"ngIf"],["nzColor","red",4,"ngIf"],[1,"table-cell__actions"],["nz-button","","nzType","link","nzTrigger","click","nz-dropdown","",3,"nzDropdownMenu"],["nz-icon","","nzType","icon:more","nzTheme","outline"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","","class","btn--menu-item",3,"nzDisabled","disabled","click",4,"ngIf"],["nz-menu-item","",1,"btn--menu-item",3,"click"],[1,"ant-btn-sm","ant-btn-link","ant-btn"],["nz-icon","","nzType","edit","nzTheme","outline"],[1,"ant-btn-sm","ant-btn-link","ant-btn","ant-btn-dangerous"],["nz-icon","","nzType","delete","nzTheme","outline"],["nzColor","green"],["nzColor","red"],["nz-menu-item","",1,"btn--menu-item",3,"nzDisabled","disabled","click"],[1,"ant-btn-sm","ant-btn-link","ant-btn",3,"ngClass"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,t){1&e&&(f.Ub(0,"div",0),f.Ub(1,"nz-page-header",1),f.Ub(2,"nz-page-header-extra"),f.Fc(3,fe,2,2,"button",2),f.Ub(4,"button",3),f.bc("click",function(){return t.onAddClick()}),f.Hc(5,"Add doctor"),f.Tb(),f.Tb(),f.Tb(),f.Ub(6,"app-table-wrapper",4),f.bc("queryParamsChange",function(e){return t.onQueryParamsChange(e)}),f.Fc(7,ge,35,14,"tr",5),f.Tb(),f.Tb()),2&e&&(f.Ab(3),f.mc("appRolesAccess",f.oc(7,ve)),f.Ab(3),f.mc("data",t.items)("totalCount",t.totalCount)("isLoading$",t.isLoading$.asObservable())("pageIndex$",t.pageIndex$)("displayColumns",t.displayColumns),f.Ab(1),f.mc("ngForOf",t.items))},directives:[ee.a,ee.c,_.a,te.a,ne.a,ie.a,oe.a,M.n,b.f,re.i,re.b,M.o,ce.d,ce.b,ae.a,ce.e,se.c,se.d,ue.a,M.m],pipes:[M.b],styles:[".ant-btn-link--disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.25);background:transparent;border-color:transparent;text-shadow:none;box-shadow:none;cursor:not-allowed}"]}),ze)}],Te=((Oe=function e(){n(this,e)}).\u0275mod=f.Mb({type:Oe}),Oe.\u0275inj=f.Lb({factory:function(e){return new(e||Oe)},imports:[[b.h.forChild(Ce)],b.h]}),Oe),ke=((ye=function e(){n(this,e)}).\u0275mod=f.Mb({type:ye}),ye.\u0275inj=f.Lb({factory:function(e){return new(e||ye)},imports:[[u.a,Te,d,l.a]]}),ye)},TwVa:function(e,t,i){"use strict";i.d(t,"a",function(){return c}),i.d(t,"g",function(){return s}),i.d(t,"b",function(){return u}),i.d(t,"f",function(){return f}),i.d(t,"c",function(){return d}),i.d(t,"e",function(){return b}),i.d(t,"d",function(){return p}),i.d(t,"h",function(){return m});var c=function(){function e(){n(this,e)}return o(e,[{key:"label",get:function(){return this.device_id}}]),e}(),s=function(){function e(){n(this,e)}return o(e,[{key:"label",get:function(){return"".concat(this.first_name," ").concat(this.middle_name||""," ").concat(this.last_name," - ").concat(this.patient_id)}}]),e}(),u=function(e){r(i,e);var t=a(i);function i(){return n(this,i),t.apply(this,arguments)}return o(i,[{key:"label",get:function(){return"".concat(this.first_name," ").concat(this.last_name," - ").concat(this.npi)}}]),i}(function(){return function e(){n(this,e)}}()),l=i("2Vo4"),f=function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,e),this.totalCount=0,this.items$=new l.a(new Array),this.searchChange$=new l.a(null),this.getRequestFuncName=t,this.type=i},d=function e(){n(this,e)},b=function(){function e(){n(this,e)}return o(e,[{key:"label",get:function(){return this.name}}]),e}(),p=function e(t){n(this,e),Object.assign(this,t)},m=function(){function e(){n(this,e)}return o(e,[{key:"label",get:function(){return this.name}}]),e}()},VdD3:function(e,t,i){"use strict";i.d(t,"a",function(){return p});var r=i("fXoL"),c=i("dEAy"),a=i("OzZK"),s=i("RwU8"),u=i("C2AL"),l=i("ofXK");function f(e,t){if(1&e){var n=r.Vb();r.Ub(0,"button",5),r.bc("click",function(){return r.vc(n),r.ec(2).onSaveClick(!1)}),r.Hc(1,"Save & Add another"),r.Tb()}if(2&e){var i=r.ec(2);r.mc("disabled",!i.formValid)("nzLoading",i.processing&&!i.processingClose)}}function d(e,t){1&e&&(r.Ub(0,"span"),r.Hc(1,"\xa0& Close"),r.Tb())}function b(e,t){if(1&e){var n=r.Vb();r.Sb(0),r.Ub(1,"button",1),r.bc("click",function(){return r.vc(n),r.ec().closeModal()}),r.Hc(2,"Cancel"),r.Tb(),r.Fc(3,f,2,2,"button",2),r.Ub(4,"button",3),r.bc("click",function(){return r.vc(n),r.ec().onSaveClick(!0)}),r.Hc(5,"Save"),r.Fc(6,d,2,0,"span",4),r.Tb(),r.Rb()}if(2&e){var i=r.ec();r.Ab(3),r.mc("ngIf",!i.isEditing),r.Ab(1),r.mc("disabled",!i.formValid)("nzLoading",i.processing&&i.processingClose),r.Ab(2),r.mc("ngIf",!i.isEditing)}}var p=function(){var e=function(){function e(){n(this,e),this.saveEvent=new r.n,this.closeEvent=new r.n,this.formValid=!0}return o(e,[{key:"closeModal",value:function(){this.closeEvent.emit()}},{key:"onSaveClick",value:function(e){this.saveEvent.emit(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["app-modal-footer"]],inputs:{processing:"processing",processingClose:"processingClose",formValid:"formValid",isEditing:"isEditing"},outputs:{saveEvent:"saveEvent",closeEvent:"closeEvent"},decls:1,vars:0,consts:[[4,"nzModalFooter"],["nz-button","",3,"click"],["nz-button","","nzType","default",3,"disabled","nzLoading","click",4,"ngIf"],["nz-button","","nzType","primary",3,"disabled","nzLoading","click"],[4,"ngIf"],["nz-button","","nzType","default",3,"disabled","nzLoading","click"]],template:function(e,t){1&e&&r.Fc(0,b,7,4,"ng-container",0)},directives:[c.a,a.a,s.a,u.a,l.o],encapsulation:2}),e}()},bb81:function(t,i,c){"use strict";c.d(i,"a",function(){return H});var s,u=c("fXoL"),l=c("EY2u"),f=c("HDdC"),d=c("2Vo4"),b=c("1G5W"),p=c("vkgz"),m=c("/uUt"),h=c("Kj3r"),v=c("eIep"),g=c("nYR2"),z=c("JIr8"),y=c("pLZG"),O=c("oaey"),C=c("CvgI"),T=c("UXun"),k=c("lJxs"),S=c("ovFC"),w=c("tk/3"),A=((s=function(){function t(e){n(this,t),this.http=e,this.options$=new d.a([]),this.totalCount$=new d.a(0),this.isLoadingMore$=new d.a(!1),this.isLoading$=new d.a(!0),this.filters={}}return o(t,[{key:"loadMoreOptions",value:function(t,n){var i=this;return this.options.length<this.totalCount?(this.isLoadingMore=!0,this.getOptionsRequest(t).pipe(Object(k.a)(function(t){i.totalCount=t.total_count;var o=n?t.items.map(function(e){return n(e)}):t.items;i.options=[].concat(e(i.options),e(o))}),Object(g.a)(function(){return i.isLoadingMore=!1}))):l.a}},{key:"getOptions",value:function(e,t){var n=this;return this.getOptionsRequest(e).pipe(Object(k.a)(function(e){n.totalCount=e.total_count,n.options=t?e.items.map(function(e){return t(e)}):e.items}),Object(g.a)(function(){return n.isLoading=!1}))}},{key:"getOptionsRequest",value:function(e){var t=Object(C.a)(Object.assign({limit:15,offset:this.options.length},this.filters));return this.http.get(e,{params:t})}},{key:"optionsAsObservable$",get:function(){return this.options$.asObservable()}},{key:"options",get:function(){return this.options$.value},set:function(t){this.options$.next(e(t))}},{key:"totalCount",get:function(){return this.totalCount$.value},set:function(e){this.totalCount$.next(e)}},{key:"isLoadingMore",get:function(){return this.isLoadingMore$.value},set:function(e){this.isLoadingMore$.next(e)}},{key:"isLoadingMoreAsObservable$",get:function(){return this.isLoadingMore$.pipe(Object(T.a)(1))}},{key:"isLoadingAsObservable$",get:function(){return this.isLoading$.pipe(Object(T.a)(1))}},{key:"isLoading",get:function(){return this.isLoading$.value},set:function(e){this.isLoading$.next(e)}}]),t}()).\u0275fac=function(e){return new(e||s)(u.Yb(w.c))},s.\u0275prov=u.Kb({token:s,factory:s.\u0275fac,providedIn:S.a}),s),I=c("zAKX"),U=c("3Pt+"),L=c("vxfF"),_=c("ofXK"),P=c("qAZ0"),j=c("QlLE");function $(e,t){if(1&e&&u.Pb(0,"nz-option",7),2&e){var n=t.$implicit,i=u.ec();u.mc("nzValue",n.id)("nzLabel",n[i.labelKey])("nzDisabled",i.optionDisabled(n.id))}}function E(e,t){1&e&&(u.Ub(0,"nz-option",8),u.Ub(1,"div",9),u.Pb(2,"nz-spin"),u.Ub(3,"span",10),u.Hc(4,"Searching..."),u.Tb(),u.Tb(),u.Tb())}function x(e,t){1&e&&(u.Ub(0,"div",14),u.Pb(1,"nz-spin"),u.Ub(2,"span"),u.Hc(3,"Loading data..."),u.Tb(),u.Tb())}function M(e,t){if(1&e&&(u.Ub(0,"div",12),u.Fc(1,x,4,0,"div",13),u.fc(2,"async"),u.Tb()),2&e){var n=u.ec(2),i=u.uc(10);u.Ab(1),u.mc("ngIf",u.gc(2,2,n.isLoadingMore$))("ngIfElse",i)}}function F(e,t){if(1&e&&u.Fc(0,M,3,4,"div",11),2&e){var n=u.ec();u.mc("ngIf",!n.isSearching&&n.totalCount>15&&"tags"!==n.mode)}}function D(e,t){if(1&e&&(u.Ub(0,"div",15),u.Hc(1),u.Tb()),2&e){var n=u.ec();u.Ab(1),u.Kc("",n.options.length," of ",n.totalCount,"")}}function R(e,t){if(1&e&&u.Pb(0,"nz-empty",16),2&e){var n=u.ec();u.mc("nzNotFoundContent",n.noDataText)}}var V,H=((V=function(e){r(i,e);var t=a(i);function i(e){var o;return n(this,i),(o=t.call(this)).selectService=e,o.labelKey="name",o.size="default",o.mode="default",o.filterName="name",o.canLoad=!0,o.loadOptions$=new f.a,o.valueChangedEvt=new u.n,o.searchChange$=new d.a(null),o}return o(i,[{key:"onScrollToBottom",value:function(){this.selectService.loadMoreOptions(this.url,this.transformFunc).pipe(Object(b.a)(this.destroyed)).subscribe()}},{key:"onSearch",value:function(e){(e||this.selectService.filters[this.filterName])&&(this.isSearching=!0,this.searchChange$.next(e))}},{key:"onOpenChange",value:function(e){!e&&this.selectService.filters[this.filterName]&&(this.selectService.filters[this.filterName]=null,this.selectService.options=[],this.getOptions())}},{key:"selectionValueChanged",value:function(e){e&&this.valueChangedEvt.emit(this.selectService.options.find(function(t){return t.id===e}))}},{key:"searchOptions",value:function(){var e=this;return this.searchChange$.asObservable().pipe(Object(p.a)(function(t){e.selectService.options=[],e.selectService.filters[e.filterName]=t}),Object(m.a)(),Object(h.a)(500),Object(v.a)(function(){return e.selectService.getOptions(e.url,e.transformFunc).pipe(Object(g.a)(function(){e.isSearching=!1,e.disabled=!1}),Object(z.a)(function(){return l.a}))}),Object(b.a)(this.destroyed))}},{key:"getOptions",value:function(){this.selectService.getOptions(this.url,this.transformFunc).pipe(Object(b.a)(this.destroyed)).subscribe()}},{key:"optionDisabled",value:function(e){return!(!this.disabledOptions||!this.disabledOptions.length)&&this.disabledOptions.map(function(e){return e.id}).includes(e)}},{key:"ngOnInit",value:function(){var e=this,t=this.control.value;t&&(this.selectService.filters.include=t),this.isLoading$=this.selectService.isLoadingAsObservable$,this.isLoadingMore$=this.selectService.isLoadingMoreAsObservable$,this.options$=this.selectService.optionsAsObservable$,this.canLoad&&this.searchOptions().subscribe(),this.loadOptions$.pipe(Object(p.a)(function(){e.disabled=!0,e.selectService.isLoading=!0}),Object(b.a)(this.destroyed),Object(y.a)(function(e){return!!e}),Object(v.a)(function(t){return t.forEach(function(t){return e.selectService.filters[t.key]=t.value}),e.canLoad=!0,e.searchOptions()})).subscribe()}},{key:"totalCount",get:function(){return this.selectService.totalCount}},{key:"options",get:function(){return this.selectService.options}}]),i}(O.a)).\u0275fac=function(e){return new(e||V)(u.Ob(A))},V.\u0275cmp=u.Ib({type:V,selectors:[["app-select"]],inputs:{control:"control",url:"url",labelKey:"labelKey",size:"size",disabled:"disabled",placeholder:"placeholder",mode:"mode",maxTagCount:"maxTagCount",filterName:"filterName",canLoad:"canLoad",disabledOptions:"disabledOptions",noDataText:"noDataText",transformFunc:"transformFunc",loadOptions$:"loadOptions$"},outputs:{valueChangedEvt:"valueChangedEvt"},features:[u.zb([A]),u.xb],decls:13,vars:20,consts:[["nzAllowClear","","nzServerSearch","","nzShowSearch","",3,"nzSize","nzPlaceHolder","formControl","nzLoading","nzDisabled","nzMode","nzMaxTagCount","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch","nzOpenChange","ngModelChange","nzScrollToBottom"],[3,"itemSize","maxBufferPx"],[3,"nzValue","nzLabel","nzDisabled",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["loadingMoreOptionsTpl",""],["totalCountTpl",""],["noDataTpl",""],[3,"nzValue","nzLabel","nzDisabled"],["nzDisabled","","nzCustomContent",""],[1,"searching-option"],[1,"searching-option__text"],["class","dropdown-footer",4,"ngIf"],[1,"dropdown-footer"],["class","dropdown-footer__spinner",4,"ngIf","ngIfElse"],[1,"dropdown-footer__spinner"],[1,"dropdown-footer__total"],["nzNotFoundImage","simple",3,"nzNotFoundContent"]],template:function(e,t){if(1&e&&(u.Ub(0,"nz-select",0),u.bc("nzOnSearch",function(e){return t.onSearch(e)})("nzOpenChange",function(e){return t.onOpenChange(e)})("ngModelChange",function(e){return t.selectionValueChanged(e)})("nzScrollToBottom",function(){return t.onScrollToBottom()}),u.fc(1,"async"),u.fc(2,"async"),u.Ub(3,"cdk-virtual-scroll-viewport",1),u.Fc(4,$,1,3,"nz-option",2),u.fc(5,"async"),u.Tb(),u.Fc(6,E,5,0,"nz-option",3),u.Fc(7,F,1,1,"ng-template",null,4,u.Gc),u.Tb(),u.Fc(9,D,2,2,"ng-template",null,5,u.Gc),u.Fc(11,R,1,1,"ng-template",null,6,u.Gc)),2&e){var n=u.uc(8),i=u.uc(12);u.mc("nzSize",t.size)("nzPlaceHolder",t.placeholder)("formControl",t.control)("nzLoading",t.canLoad&&u.gc(1,14,t.isLoading$))("nzDisabled",t.disabled||u.gc(2,16,t.isLoading$))("nzMode",t.mode)("nzMaxTagCount",t.maxTagCount)("nzDropdownRender",n)("nzShowArrow",!0)("nzNotFoundContent",i),u.Ab(3),u.mc("itemSize",32)("maxBufferPx",160),u.Ab(1),u.mc("ngForOf",u.gc(5,18,t.options$)),u.Ab(2),u.mc("ngIf",t.isSearching)}},directives:[I.d,U.n,U.f,L.b,L.a,_.n,_.o,I.a,P.a,j.b],pipes:[_.b],styles:["[_nghost-%COMP%], [_nghost-%COMP%]   nz-select[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .ant-select-arrow{top:48%}.dropdown-footer[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center;justify-items:start;padding:4px 14px;color:#1890ff;border-top:1px solid #f0f0f0}.dropdown-footer__total[_ngcontent-%COMP%]{width:100%;grid-column:2/3;display:flex;justify-content:flex-end}.dropdown-footer__spinner[_ngcontent-%COMP%]{display:flex;align-items:center}.dropdown-footer__spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:18px}.dropdown-footer[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:12px}.option[_ngcontent-%COMP%]{display:flex}.option[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:.9em}.option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1890ff;margin-left:1.1em}.searching-option[_ngcontent-%COMP%]{display:flex;align-items:center}.searching-option[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:.8em}.searching-option__text[_ngcontent-%COMP%]{margin-left:1.2em}"],changeDetection:0}),V)},o5fV:function(e,t,i){"use strict";i.d(t,"a",function(){return m});var r,c=i("mrSG"),a=i("sbGu"),s=i("dEAy"),u=i("CvgI"),l=i("tk/3"),f=i("lJxs"),d=i("pLZG"),b=i("fXoL"),p=((r=function e(t){n(this,e),this.modal=t,this.modal.updateConfig({nzWrapClassName:"vertical-center-modal",nzMaskClosable:!0,nzAutofocus:null,nzOkType:"danger",nzOkText:"Delete",nzClosable:!1})}).\u0275fac=function(e){return new(e||r)(b.Ob(s.c))},r.\u0275cmp=b.Ib({type:r,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,t){},encapsulation:2,changeDetection:0}),r),m=function(){function e(){n(this,e);var t=a.a.getInjector;this.http=t.get(l.c),this.modalService=t.get(s.d)}return o(e,[{key:"getItems",value:function(e,t,n){var i=Object(u.a)(e),o=Object.assign({params:i},n);return this.http.get(t,Object.assign({},o)).pipe(Object(f.a)(function(e){return e}))}},{key:"openModal",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600;return this.modalService.create(Object.assign(Object.assign({},i&&{nzWrapClassName:"vertical-center-modal"}),{nzTitle:e,nzWidth:o+"px",nzContent:n,nzComponentParams:Object.assign({},t)})).afterClose.pipe(Object(d.a)(function(e){return e}))}},{key:"openActionConfirmationModal",value:function(e,t){return this.modalService.confirm({nzContent:t,nzTitle:e,nzOnOk:function(){return!0}}).afterClose.pipe(Object(d.a)(function(e){return e}))}},{key:"deleteItem",value:function(e,t){var n=this;return this.modalService.confirm({nzContent:p,nzTitle:e,nzOnOk:function(e){return Object(c.a)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.modal.config.nzOkLoading=!0,n.next=3,this.deleteItemRequest(t);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},n,this)}))}}).afterClose.pipe(Object(d.a)(function(e){return e}))}},{key:"deleteItemRequest",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.delete(e).toPromise().then(function(e){return"success"===e.status});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}))}}]),e}()},pfyX:function(e,t,i){"use strict";i.d(t,"a",function(){return m});var c=i("oaey"),s=i("sbGu"),u=i("lhsU"),l=i("3Pt+"),f=i("1G5W"),d=i("nYR2"),b=i("2Vo4"),p=i("bNXi"),m=function(e){r(i,e);var t=a(i);function i(e){var o;n(this,i),(o=t.call(this)).modal=e,o.loadOptions$=new b.a(null),o.updateAfterClosing=!1;var r=s.a.getInjector;return o.errorService=r.get(u.a),o.notifService=r.get(p.b),o}return o(i,[{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.updateAfterClosing;this.modal.destroy(e)}},{key:"saveItem",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.processing=!0,this.processingClose=e,this.form&&(this.markFormGroupTouched(this.form),this.errorService.form=this.form),t.pipe(Object(f.a)(this.destroyed),Object(d.a)(function(){return n.processing=!1})).subscribe(function(){i&&n.notifService.success(i,""),e?n.closeModal(!0):(n.form&&n.form.reset(n.formInitialValue),n.updateAfterClosing=!0)})}},{key:"onItemSelected",value:function(e,t,n){n.push(e),t.patchValue(null,{emitEvent:!1})}},{key:"onDeleteItemClick",value:function(e,t){this[t]=this[t].filter(function(t){return t.id!==e})}},{key:"markFormGroupTouched",value:function(e){var t=this;Object.values(e.controls).forEach(function(e){e.markAsTouched(),e instanceof l.h&&t.markFormGroupTouched(e)})}},{key:"f",get:function(){return this.form.controls}},{key:"formInitValue",set:function(e){this.formInitialValue=Object.assign({},e)}}]),i}(c.a)}}])}();