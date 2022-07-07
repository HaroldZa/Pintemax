function modal(id) {
    id = id.replace('_before', '');
    var modal = document.getElementById("myModal");

    var img = document.getElementById(id);
    var img1 = document.getElementById(id+'_before');

    var modalImg = document.getElementById("after");
    var modalImg1 = document.getElementById("before");

    var title = document.getElementById("modal_title");
    
        modal.style.display = "block";
        modalImg.src = img.src;
        modalImg1.src = img1.src;
        title.innerHTML = img.nextElementSibling.innerHTML


    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}