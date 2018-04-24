$('#btn-pause').click(function(){
          tl.pause();            
});

$('#btn-resume').click(function(){
          tl.play();            
});

$('#btn-reverse').click(function(){
          tl.reverse();            
});

/* 
tl.fromTo(DesignTxt, 1, {
y: '100xpercent',
opacity: 0
},{
 y: '0xpercent',
 opacity: 1
}); */

var tl = new TimelineMax( {repeat : -1}),
DesignTxt = document.getElementById('Design'),
DevelopTxt = document.getElementById('Develop'),
InteractiveTxt = document.getElementById('Interactive'),
EngagingTxt = document.getElementById('Engaging'),
WebsitesTxt = document.getElementById('Websites');


/* tl
  .from(DesignTxt, 1, { scale: 1, rotationX: 90, rotationY: 0, transformOrigin: '0% 0%', autoAlpha:0, top: '0px', ease: Power2.easeInOut})
 
  .from(DevelopTxt, 1, { scale: 0, rotationX: 360, rotationY: 180, transformOrigin: '0% 0%', autoAlpha:0, top: '120px', ease: Power2.easeInOut}, '-=.7')
  .from(InteractiveTxt, 1, { scale: 0, rotationX: 90, rotationY: 90, transformOrigin: '0% 0%', autoAlpha:0, top: '120px', ease: Power2.easeInOut}, '-=.7')
.from(EngagingTxt, 1, { scale: 0, rotationX: 180, rotationY: 180, transformOrigin: '50% 50%', autoAlpha:0, top: '120px', ease: Power2.easeInOut}, '-=.7')
.from(WebsitesTxt, 1, { scale: 0, rotationX: 180, rotationY: 180, transformOrigin: '50% 50%', autoAlpha:0, top: '120px', ease: Power2.easeInOut}, '-=.7')
; */

tl
  .from(DesignTxt, 1, { scale: 1, rotationX: 180, rotationY: 180, transformOrigin: '0% 0%', autoAlpha:0, top: '0px', ease: Power2.easeInOut})
 
  .from(DevelopTxt, 1, { scale: 1, rotationX: 180, rotationY: 180, transformOrigin: '50% 50%', autoAlpha:0, top: '0px', ease: Power2.easeInOut}, '-=.7')
  .from(InteractiveTxt, 1, { scale: 1, rotationX: 180, rotationY: 180, transformOrigin: '0% 0%', autoAlpha:0, top: '0px', ease: Power2.easeInOut}, '-=.7')
.from(EngagingTxt, 1, { scale: 0, rotationX: 180, rotationY: 180, transformOrigin: '50% 50%', autoAlpha:0, top: '0px', ease: Power2.easeInOut}, '-=.7')
.from(WebsitesTxt, 1, { scale: 0, rotationX: 180, rotationY: 180, transformOrigin: '50% 50%', autoAlpha:0, top: '0px', ease: Power2.easeInOut}, '-=.7')
;

/* var tl = new TimelineLite(),
    headings = $('#hero h3').toArray(); */


/* tl.staggerFromTo(headings, .7,
    {autoAlpha:0,ease:Power2.easeIn, y:'50px'}, 
    {autoAlpha:1,ease:Power4.easeIn, y: '0px'}        
 , .7)
  .to(headings[0], .3, {autoAlpha:0,ease:Power1.easeOut},'-=2.2')
  .to(headings[1], .3, {autoAlpha:0,ease:Power1.easeOut},'-=1.6')
  .to(headings[2], .3, {autoAlpha:0,ease:Power1.easeOut},'-=0.9')
  .to(headings[3], .3, {autoAlpha:0,ease:Power1.easeOut},'.6')
  .to(headings[4], .3, {autoAlpha:0,ease:Power1.easeOut},'.3')
;
 */