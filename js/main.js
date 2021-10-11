document.addEventListener('DOMContentLoaded', function() {
    // инициализация слайдера
    new SimpleAdaptiveSlider('.slider', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,

    });
});