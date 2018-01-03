function searchToggle() {
    var searchBar = $('.search-bar');

    $('#openSearch').click(function (e) {
        e.preventDefault();

        searchBar.addClass('active');
    });

    $('#closeSearch').click(function (e) {
        e.preventDefault();

        searchBar.removeClass('active');
    });
}

function navToggle() {
    var nav = $('#mainNav');

    $('#navToggler').click(function (e) {
        e.preventDefault();

        nav.addClass('active');
    });

    $('#closeNav').click(function (e) {
        e.preventDefault();

        nav.removeClass('active');
    });
}

function masonryInit() {
    if(window.Masonry) {
        $('.posts-grid').masonry({
            itemSelector: '.grid-item',
        });
    }
}


$(document).ready(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    searchToggle();

    navToggle();

    var heroSlider = new Swiper('.hero-slider .swiper-container', {
        pagination: '.hero-pagination',
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '"></span>';
        },
        paginationClickable: true,
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        nextButton: '.button-next',
        prevButton: '.button-prev',
    });

    //initGrid
    masonryInit();

});