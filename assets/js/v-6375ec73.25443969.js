"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59726],{40912:(e,t,i)=>{i.r(t),i.d(t,{data:()=>d});const d={key:"v-6375ec73",path:"/devices/3450-L.html",title:"Iris 3450-L control via MQTT",lang:"en-US",frontmatter:{title:"Iris 3450-L control via MQTT",description:"Integrate your Iris 3450-L via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-02-28T13:58:01.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Presence (binary)",slug:"presence-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/3450-L.md",git:{updatedTime:1635800594e3}}},41566:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var d=i(66252);const o=(0,d.uE)('<h1 id="iris-3450-l" tabindex="-1"><a class="header-anchor" href="#iris-3450-l" aria-hidden="true">#</a> Iris 3450-L</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>3450-L</td></tr><tr><td>Vendor</td><td>Iris</td></tr><tr><td>Description</td><td>Smart fob</td></tr><tr><td>Exposes</td><td>action, battery, presence, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/3450-L.jpg" alt="Iris 3450-L"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),a=(0,d.Uk)("How to use device type specific configuration"),c=(0,d.uE)('<ul><li><code>presence_timeout</code>: Timeout (in seconds) after which <code>presence: false</code> will be send when the device has not checked-in. By default 100 seconds, don&#39;t go lower then 30 seconds.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_1</code>, <code>off_1</code>, <code>on_2</code>, <code>off_2</code>, <code>on_3</code>, <code>off_3</code>, <code>on_4</code>, <code>off_4</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),r={},n=(0,i(83744).Z)(r,[["render",function(e,t){const i=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[o,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[a])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,d]of t)e[i]=d;return e}}}]);