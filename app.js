(function(){
var PHONE="+27611883868",WA="https://wa.me/27611883868",$=function(i){return document.getElementById(i)};
var enc=encodeURIComponent,still=matchMedia("(prefers-reduced-motion:reduce)").matches;

/* dispatch desk */
var log=$("log"),opts=$("opts");
if(log){
var call='<a class="btn btn-hi" href="tel:'+PHONE+'">📞 CALL NOW FOR EMERGENCY DISPATCH</a>';
var wa=function(t){return '<a class="btn btn-tide" target="_blank" rel="noopener" href="'+WA+'?text='+enc(t)+'">💬 TAP TO WHATSAPP PHOTOS &amp; CHAT LIVE</a>'};
var R={
emergency:{u:"Leak or flooding",b:"Let's get this sorted immediately.<ul><li><b>1.</b> Turn off your main water isolation valve.</li><li><b>2.</b> Tap call. You'll reach our on-call plumber.</li></ul>We dispatch straight away."+call+wa("Emergency: leak/flooding. Photo attached.")},
nowater:{u:"No water",b:"Check if neighbours have water too. Then call. Our on-call plumber will trace it fast."+call},
quote:{u:"I need a price",b:"We give transparent, upfront pricing. Fastest route: send a quick photo or video of the issue. Our team reviews it instantly."+wa("Hi Watershed, I need a quote. Photo/video attached.")},
routine:{u:"Book a repair",b:'Easy. Name, phone, postcode and the issue. One go.<a class="btn btn-hi" href="services.html#book">Open booking form</a>'},
commercial:{u:"Commercial job",b:"We handle shops, offices and sites. Send the scope and photos, and we'll respond with a clear price."+wa("Commercial plumbing enquiry. Details:")}};
var add=function(c,h){var d=document.createElement("div");d.className="msg "+c;d.innerHTML=h;log.appendChild(d);log.scrollTop=log.scrollHeight};
opts.addEventListener("click",function(e){var k=e.target.dataset.k;if(!k)return;add("me",R[k].u);setTimeout(function(){add("",R[k].b)},350)});
}

/* booking */
var f=$("bookf");
if(f)f.addEventListener("submit",function(e){e.preventDefault();
window.open(WA+"?text="+enc("Booking request\nName: "+f.n.value+"\nPhone: "+f.p.value+"\nPostcode: "+f.z.value+"\nIssue: "+f.i.value),"_blank","noopener")});

/* liquid orbs */
document.querySelectorAll(".orb").forEach(function(o,i){
var w="M0 70q25-14 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0V140H0z";
o.innerHTML='<svg viewBox="0 0 140 140"><defs><clipPath id="c'+i+'"><circle cx="70" cy="70" r="66"/></clipPath></defs><circle cx="70" cy="70" r="66" fill="#0B3340"/><g clip-path="url(#c'+i+')"><g transform="translate(0 '+(i*6-6)+')"><path class="wv" d="'+w+'" fill="#12808A"/><path class="wv" style="animation-duration:6s" d="'+w+'" fill="#7FD1CF" opacity=".45" transform="translate(-30 8)"/></g></g><circle cx="70" cy="70" r="66" fill="none" stroke="#FFC21A" stroke-width="5"/><text x="70" y="82">'+o.dataset.v+'</text></svg>'+o.dataset.l});

/* click ripples */
if(!still)addEventListener("pointerdown",function(e){var r=document.createElement("i");r.className="rip";r.style.left=e.clientX+"px";r.style.top=e.clientY+"px";document.body.appendChild(r);setTimeout(function(){r.remove()},800)});

/* bubbles + light caustics */
var cv=$("bub");
if(cv&&!still){var x=cv.getContext("2d"),W,H,B=[],t=0;
var fit=function(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;B=[];for(var i=0;i<Math.min(46,W/24|0);i++)B.push({x:Math.random()*W,y:Math.random()*H,r:3+Math.random()*13,s:.2+Math.random()*.7,p:Math.random()*6})};
fit();addEventListener("resize",fit);
(function draw(){t+=.008;x.clearRect(0,0,W,H);
for(var k=0;k<4;k++){var cx=W*(.2+.2*k)+Math.sin(t*(1+k*.4)+k)*90,cy=H*(.3+.12*k)+Math.cos(t*1.2+k)*60,g=x.createRadialGradient(cx,cy,0,cx,cy,260);g.addColorStop(0,"rgba(127,209,207,.16)");g.addColorStop(1,"rgba(127,209,207,0)");x.fillStyle=g;x.fillRect(0,0,W,H)}
B.forEach(function(b){b.y-=b.s;b.x+=Math.sin(t*3+b.p)*.4;if(b.y<-20){b.y=H+20;b.x=Math.random()*W}
x.beginPath();x.arc(b.x,b.y,b.r,0,7);x.strokeStyle="rgba(200,240,238,.5)";x.lineWidth=1.5;x.stroke();x.fillStyle="rgba(200,240,238,.07)";x.fill();
x.beginPath();x.arc(b.x-b.r*.35,b.y-b.r*.35,b.r*.22,0,7);x.fillStyle="rgba(255,255,255,.55)";x.fill()});
requestAnimationFrame(draw)})()}
})();
