$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:4,
        autoplay:false,
        margin: 30,
        loop:true,
        nav:true,
        navText:["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
    })

})
$(document).ready(function(){
    $('.client-testominal-carousel').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        dots:true,
        nav:true,
        autoplay:false
    })
})