(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,n,i){"use strict";i.r(n),i.d(n,"AuthModule",(function(){return M}));var a=i("ofXK"),e=i("3Pt+"),s=i("B+Mi"),o=i("tyNb"),c=i("fXoL"),r=i("qXBG"),b=i("Wp6s"),u=i("Xa2L"),m=i("kmnG"),d=i("qFsG"),l=i("bTqV");function f(t,n){1&t&&c.Lb(0,"mat-spinner")}function p(t,n){1&t&&(c.Pb(0,"mat-error"),c.tc(1,"Please enter a valid email"),c.Ob())}function g(t,n){1&t&&(c.Pb(0,"mat-error"),c.tc(1,"Please enter a valid password"),c.Ob())}function h(t,n){if(1&t&&(c.Pb(0,"button",10),c.tc(1," Login "),c.Ob()),2&t){c.ac();const t=c.ic(1);c.fc("disabled",t.invalid)}}function P(t,n){if(1&t){const t=c.Qb();c.Pb(0,"form",2,3),c.Wb("submit",(function(){c.kc(t);const n=c.ic(1);return c.ac().onLogin(n)})),c.Pb(2,"mat-form-field",4),c.Pb(3,"mat-label"),c.tc(4,"Email"),c.Ob(),c.Lb(5,"input",5,6),c.sc(7,p,2,0,"mat-error",0),c.Ob(),c.Pb(8,"mat-form-field",4),c.Pb(9,"mat-label"),c.tc(10,"Password"),c.Ob(),c.Lb(11,"input",7,8),c.sc(13,g,2,0,"mat-error",0),c.Ob(),c.sc(14,h,2,1,"button",9),c.Ob()}if(2&t){const t=c.ic(6),n=c.ic(12),i=c.ac();c.zb(7),c.fc("ngIf",t.invalid),c.zb(6),c.fc("ngIf",n.invalid),c.zb(1),c.fc("ngIf",!i.isLoading)}}function I(t,n){1&t&&c.Lb(0,"mat-spinner")}function v(t,n){1&t&&(c.Pb(0,"mat-error"),c.tc(1,"Please enter a valid email"),c.Ob())}function O(t,n){1&t&&(c.Pb(0,"mat-error"),c.tc(1,"Please enter a valid password"),c.Ob())}function L(t,n){if(1&t&&(c.Pb(0,"button",10),c.tc(1," Signup "),c.Ob()),2&t){c.ac();const t=c.ic(1);c.fc("disabled",t.invalid)}}function w(t,n){if(1&t){const t=c.Qb();c.Pb(0,"form",2,3),c.Wb("submit",(function(){c.kc(t);const n=c.ic(1);return c.ac().onSignup(n)})),c.Pb(2,"mat-form-field",4),c.Pb(3,"mat-label"),c.tc(4,"Email"),c.Ob(),c.Lb(5,"input",5,6),c.sc(7,v,2,0,"mat-error",0),c.Ob(),c.Pb(8,"mat-form-field",4),c.Pb(9,"mat-label"),c.tc(10,"Password"),c.Ob(),c.Lb(11,"input",7,8),c.sc(13,O,2,0,"mat-error",0),c.Ob(),c.sc(14,L,2,1,"button",9),c.Ob()}if(2&t){const t=c.ic(6),n=c.ic(12),i=c.ac();c.zb(7),c.fc("ngIf",t.invalid),c.zb(6),c.fc("ngIf",n.invalid),c.zb(1),c.fc("ngIf",!i.isLoading)}}const y=[{path:"login",component:(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSubscription=this.authService.getAuthStatusListener().subscribe(t=>{t||(this.isLoading=!1)})}onLogin(t){t.invalid||(this.isLoading=!0,this.authService.login(t.value.email,t.value.password))}ngOnDestroy(){this.authStatusSubscription.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(r.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["appearance","standard"],["matInput","","type","email","name","email","ngModel","","required","","email",""],["emailInput","ngModel"],["matInput","","type","password","name","password","ngModel","","required",""],["passwordInput","ngModel"],["type","submit","mat-raised-button","","color","accent",3,"disabled",4,"ngIf"],["type","submit","mat-raised-button","","color","accent",3,"disabled"]],template:function(t,n){1&t&&(c.Pb(0,"mat-card"),c.sc(1,f,1,0,"mat-spinner",0),c.sc(2,P,15,3,"form",1),c.Ob()),2&t&&(c.zb(1),c.fc("ngIf",n.isLoading),c.zb(1),c.fc("ngIf",!n.isLoading))},directives:[b.a,a.k,u.b,e.p,e.j,e.k,m.c,m.f,d.a,e.a,e.i,e.l,e.n,e.b,m.b,l.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()},{path:"signup",component:(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSubscription=this.authService.getAuthStatusListener().subscribe(t=>{t||(this.isLoading=!1)})}onSignup(t){t.invalid||(this.isLoading=!0,this.authService.createUser(t.value.email,t.value.password))}ngOnDestroy(){this.authStatusSubscription.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(r.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["appearance","standard"],["matInput","","type","email","name","email","ngModel","","required","","email",""],["emailInput","ngModel"],["matInput","","type","password","name","password","ngModel","","required",""],["passwordInput","ngModel"],["type","submit","mat-raised-button","","color","accent",3,"disabled",4,"ngIf"],["type","submit","mat-raised-button","","color","accent",3,"disabled"]],template:function(t,n){1&t&&(c.Pb(0,"mat-card"),c.sc(1,I,1,0,"mat-spinner",0),c.sc(2,w,15,3,"form",1),c.Ob()),2&t&&(c.zb(1),c.fc("ngIf",n.isLoading),c.zb(1),c.fc("ngIf",!n.isLoading))},directives:[b.a,a.k,u.b,e.p,e.j,e.k,m.c,m.f,d.a,e.a,e.i,e.l,e.n,e.b,m.b,l.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()}];let S=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[o.e.forChild(y)]]}),t})(),M=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[a.c,e.g,s.a,S]]}),t})()}}]);