const block = document.querySelectorAll('.block');
const animation = anime.time({
    targets: block,
    easing: 'easseInOutExpo',
    loop: true,
}) 

animation 
.add({
    scale: 0,
    translateX: function(){ return anime.random (-360, 2100);},
    translateY: function(){ return anime.random (-360, 2100);},
    rotate: function(){ return anime.random (-360, 360);},
    duration: function(){ return anime.randon(500, 3000);}
})

.add({
    scale: 1,
    translateX: 0,
    translateY: 0,
    rotate: 0,
    duration: function(){ return anime.randon(500, 3000);}
})