$(document).ready(function () {
    // Get Year
    document.getElementsByName('jsThisYear').forEach(e => e.innerHTML = new Date().getFullYear());

    // RND Carousel
    new Splide('#RNDCarousel', {
        type: 'loop',
        perPage: 1,
        padding: '10vw',
        autoplay: true,
        pagination: false,
        gap: '1em',
        interval: 2500,
        updateOnMove: true,
        arrows: false,
        heightRatio: 0.7,
        cover: true,
        easing: 'ease',
        mediaQuery: 'min',
        breakpoints: {
            /* Small devices (landscape phones, 576px and up) */
            576: {},
            /* Medium devices (tablets, 768px and up) */
            768: {
                gap: '1em',
                padding: '25vw',
            },
            /* Large devices (desktops, 992px and up) */
            992: {},
            /* X-Large devices (large desktops, 1200px and up) */
            1200: {},
            /* XX-Large devices (larger desktops, 1400px and up) */
            1400: {}
        },
    }).mount();

    // Get Latest Article
    $.ajax({
        type: "GET",
        url: atob('aHR0cHM6Ly9hcGkucm5kaW8ubXkuaWQvYmxvZy8='),
        data: "data",
        dataType: "JSON",
        success: function (resp) {
            function getElementArticle(articleArr) {
                function getRandomColor(){
                    let color = ['#0d6efd','#198754','#dc3545','#ffc107','#0dcaf0'];
                    return color[Math.floor(Math.random() * color.length)];
                }

                return articleArr.map(e => `<div class="col-md-4">
                <article class="card p-3 mb-2">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <div class="icon"> <img class='rounded-circle' src='${e.author[0].gd$image.src}'> </div>
                            <div class="ms-2 c-details">
                                <h6 class="mb-0">${e.author[0].name.$t}</h6><span>${moment(e['published']['$t']).fromNow()}</span>
                            </div>
                        </div>
                        <div class="badge"><span style='color:${getRandomColor()};'>${e.category[0].term}</span></div>
                    </div>
                    <div class="mt-5">
                        <a href='${e.link[4].href}' class="heading" title='${e.title.$t}'>${e.title.$t}</a>
                    </div>
                </article>
            </div>`).join('');
            }

            $('#RNDLatestPost div.row').html(getElementArticle(resp.feed.entry));
            $('#RNDLatestPost').show();
        }
    });

    // Navbar Background
    $(window).on("scroll", function () {
        const scrollPos = $(window).scrollTop(),
        navBar = document.querySelector('.navbar-container'),
        navLink = document.querySelectorAll('nav.navbar ul li .nav-link');
        if (scrollPos > 80) {
            navBar.classList.add('active');
            navLink.forEach(e => {
                e.classList.add('text-light')
            });
        }else{
            navBar.classList.remove('active');
            navLink.forEach(e => {
                e.classList.remove('text-light')
            });
        }
    });

})