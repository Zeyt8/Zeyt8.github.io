var myCarousel = document.querySelector('#fullscreenCarousel')
var myModalEl = document.getElementById('myModal')

myModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(myCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})