function modal(id) {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
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

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("images_slide");
    var title = document.getElementById("modal_title");
    modalImg.innerHTML = '';
    modalImg.innerHTML = id.firstElementChild.innerHTML;
    modal.style.display = "block";
    title.innerHTML = id.lastElementChild.innerHTML;

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

}