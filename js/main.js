const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 33,
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    on: {
        init: function() {
            const videos = document.querySelectorAll('video');
            const activeIndex = this.realIndex;
            const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
            const activeVideo = activeSlide.getElementsByTagName('video')[0];
            activeVideo.muted = true;
            Array.prototype.forEach.call(videos, function(video) {
                video.pause();
                video.currentTime = 0;
            })
            activeVideo.play();
        },

        slideChange: function() {
            const videos = document.querySelectorAll('video');
            const activeIndex = this.realIndex;
            const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
            const activeVideo = activeSlide.getElementsByTagName('video')[0];
            activeVideo.muted = true;
            Array.prototype.forEach.call(videos, function(video) {
                video.pause();
                video.currentTime = 0;
            })
            activeVideo.play();
        }
    }
});