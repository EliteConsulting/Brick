(function(J){function ba(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function ra(a,b){var c={};a/=V;b/=V;c[Ka]=0>=b?90:1<=b?-90:sa*(2*La(Ma(B*(1-2*b)))-K);c[Na]=360*(1===a?1:(a%1+1)%1)-180;return c}function ta(a,b){return a.replace(/\{([\w_]+)\}/g,function(a,d){return b[d]||a})}function Oa(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(4===c.readyState&&c.status&&!(200>c.status||299<c.status)&&b&&c.responseText){var a;try{a=JSON.parse(c.responseText)}catch(e){}b(a)}};c.open("GET",
a);c.send(null);return c}function W(a){for(var b=y+q,c=x+m,d=0,e=a.length-3;d<e;d+=2)if(a[d]>q&&a[d]<b&&a[d+1]>m&&a[d+1]<c)return!0;return!1}function fa(a){M=X+a.x;N=x+a.y;v.render(!0)}function ua(a){y=a.w;x=a.h;X=y/2<<0;ga=x/2<<0;M=X;N=x;v.setSize(y,x);ha=s-50}function va(a){u=a;V=Pa<<u;a=ra(q+X,m+ga);wa=Math.abs(40075040*xa(a.latitude)/ia(2,u+8));z=ia(0.95,u-F);ja=""+G.alpha(z);ca=""+da.alpha(z);Y=""+O.alpha(z)}var n=Math,Ma=n.exp,Qa=n.log,Ra=n.sin,xa=n.cos,ya=n.tan,La=n.atan,P=n.atan2,Z=n.min,
Q=n.max,za=n.sqrt,Aa=n.ceil,ia=n.pow,ka=document,Ba=Ba||Array,Ca=Ca||Array;J.console||(J.console={});var n=/iP(ad|hone|od)/g.test(navigator.userAgent),p=!!~navigator.userAgent.indexOf("Trident"),Sa=J.requestAnimationFrame&&!n&&!p?J.requestAnimationFrame:function(a){a()},D,la=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},Ta={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",
black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",
darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",
lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",
mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",
peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",
wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},R=function(a,b,c,d){this.H=a;this.S=b;this.L=c;this.A=d},n=R.prototype;n.toString=function(){var a=Math.min(360,Math.max(0,this.H)),b=Math.min(1,Math.max(0,this.S)),c=Math.min(1,Math.max(0,this.L)),d=Math.min(1,Math.max(0,this.A)),e;if(0===b)a=e=b=c;else{var f=0.5>c?c*(1+b):c+b-c*b,c=2*c-f,a=a/360,b=la(c,f,a+1/3);e=la(c,f,a);a=la(c,f,a-1/3)}b*=255;e*=255;a*=255;return 1===d?"#"+(16777216+(b<<16)+(e<<8)+a).toString(16).slice(1,
7):"rgba("+[Math.round(b),Math.round(e),Math.round(a),d.toFixed(2)].join()+")"};n.hue=function(a){return new R(this.H*a,this.S,this.L,this.A)};n.saturation=function(a){return new R(this.H,this.S*a,this.L,this.A)};n.lightness=function(a){return new R(this.H,this.S,this.L*a,this.A)};n.alpha=function(a){return new R(this.H,this.S,this.L,this.A*a)};D=function(a){var b=0,c=0,d=0,e=1,f;a=(""+a).toLowerCase().replace("grey","gray");a=Ta[a]||a;if(f=a.match(/^#(\w{2})(\w{2})(\w{2})$/))b=parseInt(f[1],16),
c=parseInt(f[2],16),d=parseInt(f[3],16);if(f=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))b=parseInt(f[1],10),c=parseInt(f[2],10),d=parseInt(f[3],10),e=f[4]?parseFloat(f[5]):1;b/=255;c/=255;d/=255;a=Math.max(b,c,d);var h=Math.min(b,c,d),g;f=(a+h)/2;var j=a-h;if(j){h=0.5<f?j/(2-a-h):j/(a+h);switch(a){case b:g=(c-d)/j+(c<d?6:0);break;case c:g=(d-b)/j+2;break;case d:g=(b-c)/j+4}g*=60}else g=h=0;return new R(g,h,f,e)};var Da,n=Math,ma=n.PI,A=n.sin,E=n.cos,Ea=n.tan,Fa=n.asin,Ga=n.atan2,H=ma/
180,ea=23.4397*H;Da=function(a,b,c){c=H*-c;b*=H;a=a.valueOf()/864E5-0.5+2440588-2451545;var d=H*(357.5291+0.98560028*a),e=H*(1.9148*A(d)+0.02*A(2*d)+3E-4*A(3*d)),e=d+e+102.9372*H+ma,d=Fa(A(0)*E(ea)+E(0)*A(ea)*A(e)),e=Ga(A(e)*E(ea)-Ea(0)*A(ea),E(e));c=H*(280.16+360.9856235*a)-c-e;return{altitude:Fa(A(b)*A(d)+E(b)*E(d)*E(c)),azimuth:Ga(A(c),E(c)*A(b)-Ea(d)*E(b))-ma/2}};var Ha={METERS_PER_LEVEL:3,getRadius:function(a){for(var b=90,c=-90,d=0,e=a.length;d<e;d+=2)b=Z(b,a[d]),c=Q(c,a[d]);return 6378137*
((c-b)/sa)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",
paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||a]||null},alignProperties:function(a){var b={};a=a||{};b.height=a.height||(a.levels?a.levels*this.METERS_PER_LEVEL:
Ua);b.minHeight=a.minHeight||(a.minLevel?a.minLevel*this.METERS_PER_LEVEL:0);var c=a.material?this.getMaterialColor(a.material):a.wallColor||a.color;c&&(b.wallColor=c);if(c=a.roofMaterial?this.getMaterialColor(a.roofMaterial):a.roofColor)b.roofColor=c;switch(a.shape){case "cone":case "cylinder":case "dome":case "pyramid":b.shape=a.shape;break;case "sphere":b.shape="cylinder"}switch(a.roofShape){case "cone":case "dome":b.roofShape=a.roofShape;b.shape="cylinder";break;case "pyramid":b.roofShape=a.roofShape}b.roofShape&&
a.roofHeight?(b.roofHeight=a.roofHeight,b.height=Q(0,b.height-b.roofHeight)):b.roofHeight=0;return b}},na,oa=function(a){var b,c,d=[],e;switch(a.type){case "GeometryCollection":d=[];b=0;for(c=a.geometries.length;b<c;b++)(e=oa(a.geometries[b]))&&d.push.apply(d,e);return d;case "MultiPolygon":d=[];b=0;for(c=a.coordinates.length;b<c;b++)(e=oa({type:"Polygon",coordinates:a.coordinates[b]}))&&d.push.apply(d,e);return d;case "Polygon":a=a.coordinates;break;default:return[]}var f,h=[],g=[];f=a[0];b=0;for(c=
f.length;b<c;b++)h.push(f[b][1],f[b][0]);b=0;for(c=a.length-1;b<c;b++){f=a[b+1];g[b]=[];d=0;for(e=f.length;d<e;d++)g[b].push(f[d][1],f[d][0])}return[{outer:h,inner:g.length?g:null}]};na={read:function(a){if(!a||"FeatureCollection"!==a.type)return[];a=a.features;var b,c,d,e,f=[],h,g,j,k;b=0;for(c=a.length;b<c;b++)if(h=a[b],!("Feature"!==h.type||!1===Ia(h))){j=Ha.alignProperties(h.properties);g=oa(h.geometry);d=0;for(e=g.length;d<e;d++){k=j;var l={},I=void 0;for(I in k)k.hasOwnProperty(I)&&(l[I]=k[I]);
k=l;k.footprint=g[d].outer;if("cone"===k.shape||"cylinder"===k.shape)k.radius=Ha.getRadius(k.footprint);g[d].inner&&(k.holes=g[d].inner);if(h.id||h.properties.id)k.id=h.id||h.properties.id;h.properties.relationId&&(k.relationId=h.properties.relationId);f.push(k)}}return f}};var B=Math.PI,K=B/2,Va=B/4,sa=180/B,Pa=256,u,V,F=15,Ka="latitude",Na="longitude",y=0,x=0,X=0,ga=0,q=0,m=0,G=D("rgba(200, 190, 180)"),da=G.lightness(0.8),O=G.lightness(1.2),ja=""+G,ca=""+da,Y=""+O,wa=1,z=1,ha,Ua=5,M,N,s=450,S,pa=
{time:new Date,data:{},add:function(a,b){this.data[b]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},C={loadedItems:{},items:[],getPixelFootprint:function(a){for(var b,c,d=new Ba(a.length),e=0,f=a.length-1;e<f;e+=2)b=a[e+1],c=Z(1,Q(0,0.5-Qa(ya(Va+K*a[e]/180))/B/2)),b=(b/360+0.5)*V<<0,c=c*V<<0,d[e]=b,d[e+1]=c;a=d;d=a.length/2;e=
new Ca(d);f=0;b=d-1;var h,g,j,k=[],l=[],I=[];for(e[f]=e[b]=1;b;){h=0;for(c=f+1;c<b;c++){g=a[2*c];var q=a[2*c+1],m=a[2*f],n=a[2*f+1],s=a[2*b],p=a[2*b+1],r=s-m,t=p-n,u=void 0;if(0!==r||0!==t)u=((g-m)*r+(q-n)*t)/(r*r+t*t),1<u?(m=s,n=p):0<u&&(m+=r*u,n+=t*u);r=g-m;t=q-n;g=r*r+t*t;g>h&&(j=c,h=g)}2<h&&(e[j]=1,k.push(f),l.push(j),k.push(j),l.push(b));f=k.pop();b=l.pop()}for(c=0;c<d;c++)e[c]&&I.push(a[2*c],a[2*c+1]);d=I;if(!(8>d.length))return d},createClosure:function(a){var b=this;return function(c){c=na.read(c);
pa.add(c,a);b.addRenderItems(c,!0)}},resetItems:function(){this.items=[];this.loadedItems={};$.reset()},addRenderItems:function(a,b){for(var c,d,e,f=0,h=a.length;f<h;f++)if(c=a[f],e=c.id||[c.footprint[0],c.footprint[1],c.height,c.minHeight].join(),!this.loadedItems[e]&&(d=this.scale(c)))d.scale=b?0:1,this.items.push(d),this.loadedItems[e]=1;T||(T=setInterval(function(){for(var a=C.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);v.render();b||(clearInterval(T),
T=null)},33))},scale:function(a){var b={},c=6/ia(2,u-F);a.id&&(b.id=a.id);b.height=Z(a.height/c,ha);b.minHeight=isNaN(a.minHeight)?0:a.minHeight/c;if(!(b.minHeight>ha)&&(b.footprint=this.getPixelFootprint(a.footprint),b.footprint)){for(var d=b.footprint,e=Infinity,f=-Infinity,h=Infinity,g=-Infinity,j=0,k=d.length-3;j<k;j+=2)e=Z(e,d[j]),f=Q(f,d[j]),h=Z(h,d[j+1]),g=Q(g,d[j+1]);b.center={x:e+(f-e)/2<<0,y:h+(g-h)/2<<0};a.shape&&(b.shape=a.shape,a.radius&&(b.radius=a.radius/wa));if(a.holes){b.holes=[];
for(var l,d=0,e=a.holes.length;d<e;d++)(l=this.getPixelFootprint(a.holes[d]))&&b.holes.push(l)}var m;if(a.wallColor&&(m=D(a.wallColor)))m=m.alpha(z),b.altColor=""+m.lightness(0.8),b.wallColor=""+m;if(a.roofColor&&(m=D(a.roofColor)))b.roofColor=""+m.alpha(z);a.roofColor&&(b.relationId=a.relationId);b.hitColor=$.idToColor(a.relationId||a.id);b.roofHeight=isNaN(a.minHeight)?0:a.roofHeight/c;if(!(b.height+b.roofHeight<=b.minHeight))return a.roofShape&&(b.roofShape=a.roofShape),b}},set:function(a){this.isStatic=
!0;this.resetItems();this._staticData=na.read(a);this.addRenderItems(this._staticData,!0)},load:function(a){this.url=ta(a||"http://data.osmbuildings.org/0.2/{k}/tile/{z}/{x}/{y}.json",{k:"3hxnp33t"});this.update()},update:function(){this.resetItems();if(!(u<F))if(this.isStatic&&this._staticData)this.addRenderItems(this._staticData);else if(this.url){var a=16<u?256<<u-16:256>>16-u,b=q/a<<0,c=m/a<<0,d=Aa((q+y)/a),a=Aa((m+x)/a),e,f,h,g;for(e=c;e<=a;e++)for(c=b;c<=d;c++)f={x:c,y:e,z:16},h=c+","+e,(g=
pa.get(h))?this.addRenderItems(g):Oa(ta(this.url,f),this.createClosure(h));pa.purge()}}},aa={draw:function(a,b,c,d,e,f,h,g){var j,k=this._extrude(a,b,d,e,f,h),l=[];if(c){b=0;for(j=c.length;b<j;b++)l[b]=this._extrude(a,c[b],d,e,f,h)}a.fillStyle=g;a.beginPath();this._ring(a,k);if(c){b=0;for(j=l.length;b<j;b++)this._ring(a,l[b])}a.closePath();a.stroke();a.fill()},_extrude:function(a,b,c,d,e,f){c=s/(s-c);for(var h=s/(s-d),g={x:0,y:0},j={x:0,y:0},k,l,n=[],p=0,t=b.length-3;p<t;p+=2)g.x=b[p]-q,g.y=b[p+1]-
m,j.x=b[p+2]-q,j.y=b[p+3]-m,k=r.project(g,c),l=r.project(j,c),d&&(g=r.project(g,h),j=r.project(j,h)),(j.x-g.x)*(k.y-g.y)>(k.x-g.x)*(j.y-g.y)&&(a.fillStyle=g.x<j.x&&g.y<j.y||g.x>j.x&&g.y>j.y?f:e,a.beginPath(),this._ring(a,[j.x,j.y,g.x,g.y,k.x,k.y,l.x,l.y]),a.closePath(),a.fill()),n[p]=k.x,n[p+1]=k.y;return n},_ring:function(a,b){a.moveTo(b[0],b[1]);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c],b[c+1])},simplified:function(a,b,c){a.beginPath();this._ringAbs(a,b);if(c){b=0;for(var d=c.length;b<d;b++)this._ringAbs(a,
c[b])}a.closePath();a.stroke();a.fill()},_ringAbs:function(a,b){a.moveTo(b[0]-q,b[1]-m);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c]-q,b[c+1]-m)},shadow:function(a,b,c,d,e){for(var f=null,h={x:0,y:0},g={x:0,y:0},j,k,l=0,n=b.length-3;l<n;l+=2)h.x=b[l]-q,h.y=b[l+1]-m,g.x=b[l+2]-q,g.y=b[l+3]-m,j=w.project(h,d),k=w.project(g,d),e&&(h=w.project(h,e),g=w.project(g,e)),(g.x-h.x)*(j.y-h.y)>(j.x-h.x)*(g.y-h.y)?(1===f&&a.lineTo(h.x,h.y),f=0,l||a.moveTo(h.x,h.y),a.lineTo(g.x,g.y)):(0===f&&a.lineTo(j.x,j.y),
f=1,l||a.moveTo(j.x,j.y),a.lineTo(k.x,k.y));if(c){l=0;for(n=c.length;l<n;l++)this._ringAbs(a,c[l])}},shadowMask:function(a,b,c){this._ringAbs(a,b);if(c){b=0;for(var d=c.length;b<d;b++)this._ringAbs(a,c[b])}},hitArea:function(a,b,c,d,e,f){c=null;var h={x:0,y:0},g={x:0,y:0};d=s/(s-d);var j=s/(s-e),k;a.fillStyle=f;a.beginPath();for(var l=0,n=b.length-3;l<n;l+=2)h.x=b[l]-q,h.y=b[l+1]-m,g.x=b[l+2]-q,g.y=b[l+3]-m,f=r.project(h,d),k=r.project(g,d),e&&(h=r.project(h,j),g=r.project(g,j)),(g.x-h.x)*(f.y-h.y)>
(f.x-h.x)*(g.y-h.y)?(1===c&&a.lineTo(h.x,h.y),c=0,l||a.moveTo(h.x,h.y),a.lineTo(g.x,g.y)):(0===c&&a.lineTo(f.x,f.y),c=1,l||a.moveTo(f.x,f.y),a.lineTo(k.x,k.y));a.closePath();a.fill()}},t={draw:function(a,b,c,d,e,f,h,g,j){b={x:b.x-q,y:b.y-m};var k=s/(s-e),l=s/(s-f);e=r.project(b,k);d*=k;f&&(b=r.project(b,l),c*=k);(k=this._tangents(b,c,e,d))?(f=P(k[0].y1-b.y,k[0].x1-b.x),k=P(k[1].y1-b.y,k[1].x1-b.x)):(f=1.5*B,k=1.5*B);a.fillStyle=h;a.beginPath();a.arc(e.x,e.y,d,K,f,!0);a.arc(b.x,b.y,c,f,K);a.closePath();
a.fill();a.fillStyle=g;a.beginPath();a.arc(e.x,e.y,d,k,K,!0);a.arc(b.x,b.y,c,K,k);a.closePath();a.fill();a.fillStyle=j;this._circle(a,e,d)},simplified:function(a,b,c){this._circle(a,{x:b.x-q,y:b.y-m},c)},shadow:function(a,b,c,d,e,f){b={x:b.x-q,y:b.y-m};e=w.project(b,e);var h;f&&(b=w.project(b,f));var g=this._tangents(b,c,e,d);g?(f=P(g[0].y1-b.y,g[0].x1-b.x),h=P(g[1].y1-b.y,g[1].x1-b.x),a.moveTo(g[1].x2,g[1].y2),a.arc(e.x,e.y,d,h,f),a.arc(b.x,b.y,c,f,h)):(a.moveTo(b.x+c,b.y),a.arc(b.x,b.y,c,0,2*B))},
shadowMask:function(a,b,c){var d=b.x-q;b=b.y-m;a.moveTo(d+c,b);a.arc(d,b,c,0,2*B)},hitArea:function(a,b,c,d,e,f,h){b={x:b.x-q,y:b.y-m};var g=s/(s-e),j=s/(s-f);e=r.project(b,g);d*=g;f&&(b=r.project(b,j),c*=g);f=this._tangents(b,c,e,d);a.fillStyle=h;a.beginPath();f?(h=P(f[0].y1-b.y,f[0].x1-b.x),g=P(f[1].y1-b.y,f[1].x1-b.x),a.moveTo(f[1].x2,f[1].y2),a.arc(e.x,e.y,d,g,h),a.arc(b.x,b.y,c,h,g)):(a.moveTo(b.x+c,b.y),a.arc(b.x,b.y,c,0,2*B));a.closePath();a.fill()},_circle:function(a,b,c){a.beginPath();a.arc(b.x,
b.y,c,0,2*B);a.stroke();a.fill()},_tangents:function(a,b,c,d){var e=a.x-c.x,f=a.y-c.y,h=b-d,g=e*e+f*f;if(!(g<=h*h)){var g=za(g),e=-e/g,f=-f/g,h=h/g,g=[],j,k,l;j=za(Q(0,1-h*h));for(var m=1;-1<=m;m-=2)k=e*h-m*j*f,l=f*h+m*j*e,g.push({x1:a.x+b*k<<0,y1:a.y+b*l<<0,x2:c.x+d*k<<0,y2:c.y+d*l<<0});return g}}},U={draw:function(a,b,c,d,e,f,h){var g=s/(s-e);c=r.project({x:c.x-q,y:c.y-m},s/(s-d));d={x:0,y:0};for(var j={x:0,y:0},k=0,l=b.length-3;k<l;k+=2)d.x=b[k]-q,d.y=b[k+1]-m,j.x=b[k+2]-q,j.y=b[k+3]-m,e&&(d=r.project(d,
g),j=r.project(j,g)),(j.x-d.x)*(c.y-d.y)>(c.x-d.x)*(j.y-d.y)&&(a.fillStyle=d.x<j.x&&d.y<j.y||d.x>j.x&&d.y>j.y?h:f,a.beginPath(),this._triangle(a,d,j,c),a.closePath(),a.fill())},_triangle:function(a,b,c,d){a.moveTo(b.x,b.y);a.lineTo(c.x,c.y);a.lineTo(d.x,d.y)},_ring:function(a,b){a.moveTo(b[0]-q,b[1]-m);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c]-q,b[c+1]-m)},shadow:function(a,b,c,d,e){var f={x:0,y:0},h={x:0,y:0};c=w.project({x:c.x-q,y:c.y-m},d);d=0;for(var g=b.length-3;d<g;d+=2)f.x=b[d]-q,f.y=
b[d+1]-m,h.x=b[d+2]-q,h.y=b[d+3]-m,e&&(f=w.project(f,e),h=w.project(h,e)),(h.x-f.x)*(c.y-f.y)>(c.x-f.x)*(h.y-f.y)&&this._triangle(a,f,h,c)},shadowMask:function(a,b){this._ring(a,b)},hitArea:function(a,b,c,d,e,f){var h=s/(s-e);c=r.project({x:c.x-q,y:c.y-m},s/(s-d));d={x:0,y:0};var g={x:0,y:0};a.fillStyle=f;a.beginPath();f=0;for(var j=b.length-3;f<j;f+=2)d.x=b[f]-q,d.y=b[f+1]-m,g.x=b[f+2]-q,g.y=b[f+3]-m,e&&(d=r.project(d,h),g=r.project(g,h)),(g.x-d.x)*(c.y-d.y)>(c.x-d.x)*(g.y-d.y)&&this._triangle(a,
d,g,c);a.closePath();a.fill()}},r={project:function(a,b){return{x:(a.x-M)*b+M<<0,y:(a.y-N)*b+N<<0}},render:function(){var a=this.context;a.clearRect(0,0,y,x);if(!(u<F||S)){var b,c,d,e={x:M+q,y:N+m},f,h,g,j,k=C.items,l;k.sort(function(a,b){return a.minHeight-b.minHeight||ba(b.center,e)-ba(a.center,e)||b.height-a.height});for(var n=0,p=k.length;n<p;n++)if(b=k[n],!qa.isSimple(b)&&(f=b.footprint,W(f)))switch(c=1>b.scale?b.height*b.scale:b.height,d=0,b.minHeight&&(d=1>b.scale?b.minHeight*b.scale:b.minHeight),
h=b.wallColor||ja,g=b.altColor||ca,j=b.roofColor||Y,a.strokeStyle=g,b.shape){case "cylinder":f=b.center;l=b.radius;t.draw(a,f,l,l,c,d,h,g,j);"cone"===b.roofShape&&t.draw(a,f,l,0,c+b.roofHeight,c,j,""+D(j).lightness(0.9));"dome"===b.roofShape&&t.draw(a,f,l,l/2,c+b.roofHeight,c,j,""+D(j).lightness(0.9));break;case "cone":t.draw(a,b.center,b.radius,0,c,d,h,g);break;case "pyramid":U.draw(a,f,b.center,c,d,h,g);break;case "dome":t.draw(a,b.center,b.radius,b.radius/2,c,d,h,g);break;default:aa.draw(a,f,b.holes,
c,d,h,g,j),"pyramid"===b.roofShape&&U.draw(a,f,b.center,c+b.roofHeight,c,j,D(j).lightness(0.9))}}}},qa={maxZoom:F+2,maxHeight:5,isSimple:function(a){return u<=this.maxZoom&&a.height+a.roofHeight<this.maxHeight},render:function(){var a=this.context;a.clearRect(0,0,y,x);if(!(u<F||S||u>this.maxZoom))for(var b,c,d=C.items,e=0,f=d.length;e<f;e++)b=d[e],b.height>=this.maxHeight||(c=b.footprint,W(c)&&(a.strokeStyle=b.altColor||ca,a.fillStyle=b.roofColor||Y,"cylinder"===b.shape||"cone"===b.shape||"dome"===
b.shape?t.simplified(a,b.center,b.radius):aa.simplified(a,c,b.holes)))}},w={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(a,b){return{x:a.x+this.direction.x*b,y:a.y+this.direction.y*b}},render:function(){var a=this.context,b,c,d;a.clearRect(0,0,y,x);if(this.enabled&&!(u<F||S))if(b=ra(X+q,ga+m),b=Da(this.date,b.latitude,b.longitude),!(0>=b.altitude)){c=1/ya(b.altitude);d=5>c?0.75:5*(1/c);this.direction.x=xa(b.azimuth)*c;this.direction.y=
Ra(b.azimuth)*c;var e,f,h,g;b=C.items;var j;a.canvas.style.opacity=d/(2*z);a.shadowColor=this.blurColor;a.shadowBlur=this.blurSize*(z/2);a.fillStyle=this.color;a.beginPath();d=0;for(c=b.length;d<c;d++)if(e=b[d],g=e.footprint,W(g))switch(f=1>e.scale?e.height*e.scale:e.height,h=0,e.minHeight&&(h=1>e.scale?e.minHeight*e.scale:e.minHeight),e.shape){case "cylinder":g=e.center;j=e.radius;t.shadow(a,g,j,j,f,h);"cone"===e.roofShape&&t.shadow(a,g,j,0,f+e.roofHeight,f);"dome"===e.roofShape&&t.shadow(a,g,j,
j/2,f+e.roofHeight,f);break;case "cone":t.shadow(a,e.center,e.radius,0,f,h);break;case "pyramid":U.shadow(a,g,e.center,f,h);break;case "dome":t.shadow(a,e.center,e.radius,e.radius/2,f,h);break;default:aa.shadow(a,g,e.holes,f,h),"pyramid"===e.roofShape&&U.shadow(a,g,e.center,f+e.roofHeight,f)}a.closePath();a.fill();a.shadowBlur=null;a.globalCompositeOperation="destination-out";a.beginPath();d=0;for(c=b.length;d<c;d++)if(e=b[d],g=e.footprint,W(g)&&!e.minHeight)switch(e.shape){case "cylinder":case "cone":case "dome":t.shadowMask(a,
e.center,e.radius);break;default:aa.shadowMask(a,g,e.holes)}a.fillStyle="#00ff00";a.fill();a.globalCompositeOperation="source-over"}}},$={_idMapping:[null],reset:function(){this._idMapping=[null]},render:function(){if(!this._timer){var a=this;this._timer=setTimeout(function(){a._timer=null;a._render()},500)}},_render:function(){var a=this.context;a.clearRect(0,0,y,x);if(!(u<F||S)){var b,c,d,e={x:M+q,y:N+m},f,h,g=C.items,j;g.sort(function(a,b){return a.minHeight-b.minHeight||ba(b.center,e)-ba(a.center,
e)||b.height-a.height});for(var k=0,l=g.length;k<l;k++)if(b=g[k],h=b.hitColor)if(f=b.footprint,W(f))switch(c=b.height,d=0,b.minHeight&&(d=b.minHeight),b.shape){case "cylinder":f=b.center;j=b.radius;t.hitArea(a,f,j,j,c,d,h);"cone"===b.roofShape&&t.hitArea(a,f,j,0,c+b.roofHeight,c,h);"dome"===b.roofShape&&t.hitArea(a,f,j,j/2,c+b.roofHeight,c,h);break;case "cone":t.hitArea(a,b.center,b.radius,0,c,d,h);break;case "pyramid":U.hitArea(a,f,b.center,c,d,h);break;case "dome":t.hitArea(a,b.center,b.radius,
b.radius/2,c,d,h);break;default:aa.hitArea(a,f,b.holes,c,d,h),"dome"===b.roofShape&&U.hitArea(a,f,b.center,c+b.roofHeight,c,h)}this._imageData=this.context.getImageData(0,0,y,x).data}},getIdFromXY:function(a,b){var c=this._imageData;if(c){var d=4*((b|0)*y+(a|0));return this._idMapping[c[d]|c[d+1]<<8|c[d+2]<<16]}},idToColor:function(a){var b=this._idMapping.indexOf(a);-1===b&&(this._idMapping.push(a),b=this._idMapping.length-1);return"rgb("+[b&255,b>>8&255,b>>16&255].join()+")"}},T,v={container:ka.createElement("DIV"),
items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;w.context=this.createContext(this.container);qa.context=this.createContext(this.container);r.context=this.createContext(this.container);$.context=this.createContext()},render:function(a){Sa(function(){a||(w.render(),qa.render(),$.render());r.render()})},createContext:function(a){var b=ka.createElement("CANVAS");b.style.webkitTransform="translate3d(0,0,0)";
b.style.imageRendering="optimizeSpeed";b.style.position="absolute";b.style.left=0;b.style.top=0;var c=b.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;this.items.push(b);a&&a.appendChild(b);return c},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,b){for(var c=0,d=this.items.length;c<d;c++)this.items[c].width=a,this.items[c].height=
b},screenshot:function(){var a=ka.createElement("CANVAS"),b=a.getContext("2d"),c,d,e;a.width=y;a.height=x;clearInterval(T);T=null;e=C.items;c=0;for(d=e.length;c<d;c++)e[c].scale=1;this.render(!0);c=0;for(d=this.items.length;c<d;c++)e=this.items[c],""!==e.style.opacity&&(b.globalAlpha=parseFloat(e.style.opacity)),b.drawImage(e,0,0),b.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,b){this.container.style.left=a+"px";this.container.style.top=b+"px"}};v.init();n=function(a){this.offset=
{x:0,y:0};a.addLayer(this)};p=n.prototype=L.Layer?new L.Layer:{};p.onAdd=function(a){this.map=a;v.appendTo(a._panes.overlayPane);var b=this.getOffset(),c=a.getPixelOrigin();ua({w:a._size.x,h:a._size.y});var d=c.y-b.y;q=c.x-b.x;m=d;va(a._zoom);v.setPosition(-b.x,-b.y);a.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset,click:this.onClick},this);if(a.options.zoomAnimation)a.on("zoomanim",this.onZoom,this);a.attributionControl&&
a.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');C.update()};p.onRemove=function(){var a=this.map;a.attributionControl&&a.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset,click:this.onClick},this);a.options.zoomAnimation&&a.off("zoomanim",this.onZoom,this);
v.remove()};p.onMove=function(){var a=this.getOffset();fa({x:this.offset.x-a.x,y:this.offset.y-a.y})};p.onMoveEnd=function(){if(this.noMoveEnd)this.noMoveEnd=!1;else{var a=this.map,b=this.getOffset(),c=a.getPixelOrigin();this.offset=b;v.setPosition(-b.x,-b.y);fa({x:0,y:0});ua({w:a._size.x,h:a._size.y});a=c.y-b.y;q=c.x-b.x;m=a;v.render();C.update()}};p.onZoomStart=function(){S=!0;v.render()};p.onZoom=function(){};p.onZoomEnd=function(){var a=this.map,b=this.getOffset(),c=a.getPixelOrigin(),d=c.y-b.y;
q=c.x-b.x;m=d;a=a._zoom;S=!1;va(a);C.update();v.render();this.noMoveEnd=!0};p.onResize=function(){};p.onViewReset=function(){var a=this.getOffset();this.offset=a;v.setPosition(-a.x,-a.y);fa({x:0,y:0})};p.onClick=function(a){var b=$.getIdFromXY(a.containerPoint.x,a.containerPoint.y);b&&Ja({feature:b,lat:a.latlng.lat,lon:a.latlng.lng})};p.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};p.setStyle=function(a){console.warn("OSM Buildings: .setStyle() will be deprecated soon. Use .style() instead.");
return this.style(a)};p.style=function(a){a=a||{};var b;if(b=a.color||a.wallColor)G=D(b),ja=""+G.alpha(z),da=G.lightness(0.8),ca=""+da.alpha(z),O=G.lightness(1.2),Y=""+O.alpha(z);a.roofColor&&(O=D(a.roofColor),Y=""+O.alpha(z));void 0!==a.shadows&&(w.enabled=!!a.shadows);v.render();return this};p.setDate=function(a){console.warn("OSM Buildings: .setDate() will be deprecated soon. Use .date() instead.");return this.date(a)};p.date=function(a){w.date=a;w.render();return this};p.loadData=function(a){console.warn("OSM Buildings: .loadData() will be deprecated soon. Use .load() instead.");
return this.load(a)};p.load=function(a){C.load(a);return this};p.setData=function(a){console.warn("OSM Buildings: .setData() will be deprecated soon. Use .data() instead.");return this.set(a)};p.set=function(a){C.set(a);return this};p.screenshot=function(a){var b=v.screenshot();a&&(J.location.href=b.replace("image/png","image/octet-stream"));return b};var Ia=function(){};p.each=function(a,b){Ia=function(c){return a.call(b,c)};return this};var Ja=function(){};p.click=function(a,b){Ja=function(c){return a.call(b,
c)};return this};n.VERSION="0.2.1b";n.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';J.OSMBuildings=n})(this);