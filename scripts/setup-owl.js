var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    center:true,
    loop:true,
    margin:10,
    autoHeight:true,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            autoWidth:false
        },
        600:{
            items:2,
        },
        1000:{
            items:4
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})