var animations = {};
animations.solAyak = document.querySelector('.ayak.sol').animate([
{ transform: 'scale(1)' },
{ transform: 'scale(0.5)' }],
{
  duration: 1000,
  iterations: Infinity,
  direction: 'alternate',
  delay: 0 
});
animations.sagAyak = document.querySelector('.ayak.sag').animate([
{ transform: 'scale(0.5)' },
{ transform: 'scale(1)' }],
{
  duration: 1000,
  iterations: Infinity,
  direction: 'alternate',
  delay: 0 });

animations.sagEl = document.querySelector('.el.sag').animate([
{ transform: 'scale(1)' },
{ transform: 'scale(0.5)' }],
{
  duration: 1000,
  iterations: Infinity,
  direction: 'alternate',
  delay: 0 
});
animations.solEl = document.querySelector('.el.sol').animate([
{ transform: 'scale(0.5)' },
{ transform: 'scale(1)' }],
{
  duration: 1000,
  iterations: Infinity,
  direction: 'alternate',
  delay: 0 });

animations.govde = document.querySelector('.govde').animate([
{ transform: 'translateY(0)' },
{ transform: 'translateY(16px)' }],
{
  duration: 500,
  iterations: Infinity,
  direction: 'alternate',
  delay: 15 });

animations.kafa = document.querySelector('.kafa').animate([
{ transform: 'translateY(0)' },
{ transform: 'translateY(16px)' }],
{
  duration: 350,
  iterations: Infinity,
  direction: 'alternate',
  easing: 'linear',
  delay: 105 });
  //const ite=document.getElementById("ite").value;
  var olimpiyatAnim = {};
  olimpiyatAnim.mavi = document.querySelector('.mavi').animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(250px)' },
    { transform: 'translateY(0px)' }],
    {
      duration: 5000,
      iterations: returnIte(),
      direction: 'alternate',
      easing: 'linear',
      delay: 0 
    });
  olimpiyatAnim.sari = document.querySelector('.sari').animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-250px)' },
    { transform: 'translateY(0px)' }],
    {
        duration: 5000,
        iterations: returnIte(),
        direction: 'alternate',
        easing: 'linear',
        delay: 0 
      });
  olimpiyatAnim.siyah = document.querySelector('.siyah').animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-250px)' },
    { transform: 'translateX(0px)' }],
    {
      duration: 5000,
      iterations: returnIte(),
      direction: 'alternate',
      easing: 'linear',
      delay: 0 
        });
  olimpiyatAnim.yesil = document.querySelector('.yesil').animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(250px)' },
    { transform: 'translateX(0px)' }],
    {
      duration: 5000,
      iterations: returnIte(),
      direction: 'alternate',
      easing: 'linear',
      delay: 0 
          });
  olimpiyatAnim.kirmizi = document.querySelector('.kirmizi').animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(250px)' },
    { transform: 'translateY(0px)' }],
    {
      duration: 5000,
      iterations: returnIte(),
      direction: 'alternate',
      easing: 'linear',
      delay: 0 
            });
          
function faster() {
  olimpiyatAnim.kirmizi.playbackRate *= 1.2;
  olimpiyatAnim.yesil.playbackRate *= 1.2;
  olimpiyatAnim.siyah.playbackRate *= 1.2;
  olimpiyatAnim.sari.playbackRate *= 1.2;
  olimpiyatAnim.mavi.playbackRate *= 1.2;
            }
 function normalHiz() {
  olimpiyatAnim.kirmizi.playbackRate = 1;
  olimpiyatAnim.yesil.playbackRate = 1;
  olimpiyatAnim.siyah.playbackRate= 1;
  olimpiyatAnim.sari.playbackRate = 1;
  olimpiyatAnim.mavi.playbackRate = 1;  
 
            }
 function slowDown() {
              olimpiyatAnim.kirmizi.playbackRate *= 0.8;
              olimpiyatAnim.yesil.playbackRate *= 0.8;
              olimpiyatAnim.siyah.playbackRate *= 0.8;
              olimpiyatAnim.sari.playbackRate *= 0.8;
              olimpiyatAnim.mavi.playbackRate *= 0.8; 
                        }
  
function playOly(){
  olimpiyatAnim.kirmizi.play();
   olimpiyatAnim.yesil.play();
    olimpiyatAnim.sari.play();
     olimpiyatAnim.siyah.play();
      olimpiyatAnim.mavi.play();
}
function pauseOly(){
  olimpiyatAnim.kirmizi.pause();
   olimpiyatAnim.yesil.pause();
    olimpiyatAnim.sari.pause();
     olimpiyatAnim.siyah.pause();
      olimpiyatAnim.mavi.pause();
}
function reverseOly(){
  olimpiyatAnim.kirmizi.reverse();
  olimpiyatAnim.yesil.reverse();
   olimpiyatAnim.sari.reverse();
    olimpiyatAnim.siyah.reverse();
     olimpiyatAnim.mavi.reverse();
}
function returnIte(){
  var ite=document.getElementById("ite").value;
  return ite
}
function withIte(){
  var ite=document.getElementById("ite").value;
  playOly();
}
                        //olimpiyatAnim.finish();

  //player.finish();
  //olimpiyatAnim.kirmizi.pause();
  //olimpiyatAnim.yesil.pause();
  //olimpiyatAnim.siyah.pause();
            
          
        
      
    