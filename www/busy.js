setInterval(function(){
if ($('html').attr('class')=='shiny-busy') {
setTimeout(function() {
if ($('html').attr('class')=='shiny-busy') {
$('div.busy').show()
}
}, 100)
} else {
$('div.busy').hide()
}
}, 100)