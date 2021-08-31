particlesJS("particles-js",{particles:{number:{value:180,density:{enable:!1,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/pp.jpg",width:100,height:100}},opacity:{value:.8,random:!0,anim:{enable:!1,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:3,direction:"top-left",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.5}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1});

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(document).ready(function () {
    if (window.location.href.indexOf('#contact') != -1) {
        $('#Modal').modal('show');
    }
});

$('img').popover({
    trigger: 'focus'
})

const scriptURL = "https://script.google.com/macros/s/AKfycbwE_oEyjQcLmlDHGvbdM5mgF7KhjAlm0nGTGnQAUNudHBorp7iF33GtAa6mpttcI-2T/exec";
const form = document.forms["contact-form"];

function btnLoading() {
    const a = document.getElementById("btn-sss");
    a.disabled = true
    a.innerHTML = '<i class="fas fa-yin-yang fa-spin"></i>'
}

function resetForm() {
    form.reset()
}

function alertSuccess() {
    const e = document.createElement("div");
    e.innerHTML = '<div class="alert alert-success alert-dismissible fade show my-3" role="alert"><i class="fa fa-check-circle mr-2"></i>Your Message Was Sent Successfully <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',
        document.getElementById("alertbox").appendChild(e)
}

function alertFailed() {
    const e = document.createElement("div");
    e.innerHTML = '<div class="alert alert-danger alert-dismissible fade show my-3" role="alert"><i class="fa fa-times-circle mr-2"></i>Something Happened, Please Try Again Later <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',
        document.getElementById("alertbox").appendChild(e)
}

function btnSend() {
    const a = document.getElementById("btn-sss");
    a.disabled = false
    a.innerHTML = '<i class="fas fa-paper-plane"></i>'
}

form.addEventListener("submit", (e => {
    e.preventDefault(),
        // When Loading
        btnLoading(),
        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        }).then((e => {
            // If Success
            btnSend(),
                alertSuccess(),
                resetForm()
        })).catch((e => {
            // If Error
            btnSend(),
                alertFailed()
        }))
}));

// Typed Placeholder Form
$(document).ready(function () {
    let a = new Typed('.namamu', {
        strings: ['Type Your Name Here^1000\n', 'e.g. Budi Setiawan'],
        typeSpeed: 60,
        backSpeed: 25,
        attr: 'placeholder',
        cursorChar: '',
        loop: false
    });
    let b = new Typed('.emailmu', {
        strings: ['Type Your Email Here^1000\n', 'e.g. budisetiawan@binom.skuy'],
        typeSpeed: 60,
        backSpeed: 25,
        attr: 'placeholder',
        cursorChar: '',
        loop: false
    });
    let c = new Typed('.pesanmu', {
        strings: ['Type Your Message Here^700\n', 'e.g. Jutaan orang tidak menyadari bahwa mereka bisa menghasilkan $1000 USD perhari tanpa meninggalkan rumah. Dan Anda adalah salah satu dari mereka.'],
        typeSpeed: 60,
        backSpeed: 25,
        attr: 'placeholder',
        cursorChar: '',
        loop: false
    });
    $('.contact').click(function () {
        a.reset(), b.reset(), c.reset();
    });
});