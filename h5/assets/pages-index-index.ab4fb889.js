import{m as e,o as t,c as n,r as i,a as s,t as o,n as a,b as r,d as l,w as d,i as u,e as f,f as h,g as c,h as p}from"./index.3d341ebf.js";var w=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n};var S=w({name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created(){this._isH5=null},methods:{isMail(){return this.href.startsWith("mailto:")},isTel(){return this.href.startsWith("tel:")},openURL(){window.open(this.href)},makePhoneCall(t){e({phoneNumber:t})}}},[["render",function(e,f,h,c,p,w){const S=u;return w.isShowA?(t(),n("a",{key:0,class:a(["uni-link",{"uni-link--withline":!0===h.showUnderLine||"true"===h.showUnderLine}]),href:h.href,style:r({color:h.color,fontSize:h.fontSize+"px"}),download:h.download},[i(e.$slots,"default",{},(()=>[s(o(h.text),1)]),!0)],14,["href","download"])):(t(),l(S,{key:1,class:a(["uni-link",{"uni-link--withline":!0===h.showUnderLine||"true"===h.showUnderLine}]),style:r({color:h.color,fontSize:h.fontSize+"px"}),onClick:w.openURL},{default:d((()=>[i(e.$slots,"default",{},(()=>[s(o(h.text),1)]),!0)])),_:3},8,["class","style","onClick"]))}],["__scopeId","data-v-a80ee6d2"]]);var m=w({data:()=>({href:"https://uniapp.dcloud.io/component/README?id=uniui"}),methods:{}},[["render",function(e,n,i,o,a,r){const w=c,m=u,y=(_=p("uni-link"),k=S,f(_)?k:_);var _,k;return t(),l(w,{class:"container"},{default:d((()=>[h(w,{class:"intro"},{default:d((()=>[s("本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。")])),_:1}),h(m,{class:"intro"},{default:d((()=>[s("详见：")])),_:1}),h(y,{href:a.href,text:a.href},null,8,["href","text"])])),_:1})}],["__scopeId","data-v-4aa0f2a0"]]);export{m as default};