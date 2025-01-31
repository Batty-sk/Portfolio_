"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{2545:function(t,e,i){i.d(e,{ko:function(){return d}});var s=i(7437);i(2265);var a=i(1104);let r={"aria-busy":!0,role:"progressbar"};(0,a.ZP).div`
  display: ${t=>t.$visible?"flex":"none"};
`;let o=(0,a.F4)`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;(0,a.ZP).path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${o} ${1.6}s linear infinite;
`;let n=(0,a.F4)`
to {
   transform: rotate(360deg);
 }
`;(0,a.ZP).svg`
  animation: ${n} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,(0,a.ZP).polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;let h=(0,a.F4)`
to {
   stroke-dashoffset: 136;
 }
`;(0,a.ZP).polygon`
  stroke-dasharray: 17;
  animation: ${h} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,(0,a.ZP).svg`
  transform-origin: 50% 65%;
`;let d=({visible:t=!0,height:e="80",width:i="80",wrapperClass:a="",wrapperStyle:o={},ariaLabel:n="progress-bar-loading",borderColor:h="#F4442E",barColor:d="#51E5FF"})=>t?(0,s.jsxs)("svg",{width:i,height:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:a,style:o,"aria-label":n,"data-testid":"progress-bar-svg",...r,children:[(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{x:"0",y:"0",width:"100",height:"100",id:"lds-progress-cpid-5009611b8a418",children:(0,s.jsxs)("rect",{x:"0",y:"0",width:"66.6667",height:"100",children:[(0,s.jsx)("animate",{attributeName:"width",calcMode:"linear",values:"0;100;100",keyTimes:"0;0.5;1",dur:"1",begin:"0s",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"x",calcMode:"linear",values:"0;0;100",keyTimes:"0;0.5;1",dur:"1",begin:"0s",repeatCount:"indefinite"})]})})}),(0,s.jsx)("path",{fill:"none",strokeWidth:"2.7928",d:"M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z",stroke:h}),(0,s.jsx)("path",{d:"M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z",fill:d,clipPath:"url(#lds-progress-cpid-5009611b8a418)"})]}):null}}]);