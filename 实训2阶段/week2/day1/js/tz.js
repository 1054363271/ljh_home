$(document).ready(function(){
  $('div').mousedown(function(event){
    deltax = event.clientX - $(this).offset().left
    deltay = event.clientY - $(this).offset().top
    $(document).bind('mousemove',start)
    $(document).bind('mouseup',end)
    return false
})
function start(event){
        x = event.clientX - deltax
        y = event.clientY - deltay
        $('div').css({'left':x+'px','top':y+'px'})
        return false
}
function end(event){
    $(this).unbind('mousemove')
    $(this).unbind('mouseup')
}
});