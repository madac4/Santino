const video = document.querySelectorAll('.video');
for(let i = 0; i<video.length; i++){
    video[i].addEventListener('mouseenter', 
    function(e){
        video[i].play()
    })
    video[i].addEventListener('mouseout', 
    function(e){
        video[i].pause()
    })
} 