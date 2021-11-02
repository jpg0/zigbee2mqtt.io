"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[16106],{80900:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i={key:"v-48db69f8",path:"/devices/ZLGP17_ZLGP18.html",title:"Legrand ZLGP17/ZLGP18 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand ZLGP17/ZLGP18 control via MQTT",description:"Integrate your Legrand ZLGP17/ZLGP18 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-09-02T18:14:38.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Green Power",slug:"green-power",children:[]},{level:3,title:"Pairing ZLGP17",slug:"pairing-zlgp17",children:[]},{level:3,title:"Pairing ZLGP18",slug:"pairing-zlgp18",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZLGP17_ZLGP18.md",git:{updatedTime:1635800594e3}}},80952:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(66252);const a=(0,i.uE)('<h1 id="legrand-zlgp17-zlgp18" tabindex="-1"><a class="header-anchor" href="#legrand-zlgp17-zlgp18" aria-hidden="true">#</a> Legrand ZLGP17/ZLGP18</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZLGP17/ZLGP18</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Wireless and batteryless (double) lighting control</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZLGP17-ZLGP18.jpg" alt="Legrand ZLGP17/ZLGP18"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power" aria-hidden="true">#</a> Green Power</h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing-zlgp17" tabindex="-1"><a class="header-anchor" href="#pairing-zlgp17" aria-hidden="true">#</a> Pairing ZLGP17</h3><p>To pair this device on channel 11, hold the configuration button (on the back of the device) and press the main button (up or down).</p>',8),r=(0,i.Uk)("This device can work on any channel, not only 11. For this, please refer to the "),o={href:"https://www.admin.legrandoc.com/files/documents/S000111963EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},d=(0,i.Uk)("Legrand ZLGP17 manual chapter 6.2"),l=(0,i.Uk)("."),s=(0,i._)("h3",{id:"pairing-zlgp18",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing-zlgp18","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing ZLGP18")],-1),h=(0,i._)("p",null,"To pair this device on channel 11, hold the configuration button (on the back of the device) and press the button (up or down) on the first side, then do the same for the second side.",-1),c=(0,i._)("p",null,"Note: each side of the device is treated as a single ZLGP17.",-1),u=(0,i.Uk)("This device can work on any channel, not only 11. For this, please refer to the "),p={href:"https://www.admin.legrandoc.com/files/documents/S000112516EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("Legrand ZLGP18 manual chapter 6.2"),b=(0,i.Uk)("."),f=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_once</code>, <code>press_twice</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),v={},m=(0,n(83744).Z)(v,[["render",function(e,t){const n=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[r,(0,i._)("a",o,[d,(0,i.Wm)(n)]),l]),s,h,c,(0,i._)("p",null,[u,(0,i._)("a",p,[g,(0,i.Wm)(n)]),b]),f],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[n,i]of t)e[n]=i;return e}}}]);