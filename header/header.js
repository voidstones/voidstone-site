const DISTANCE = 80;

var style = getComputedStyle(document.body);

$(window).scroll(function() {

    if (document.body.scrollTop > DISTANCE || document.documentElement.scrollTop > DISTANCE) {

        document.getElementById("nav").style.padding = "5px 10px";
        document.getElementById("nav").style.backgroundColor = style.getPropertyValue('--header-background-dark');
        document.getElementById("title").style.fontSize = style.getPropertyValue('--header-fontsize-mid');
        document.getElementById("title").style.color = style.getPropertyValue('--header-foreground-light');

        var eles = document.getElementsByClassName('page');

        for (var i = 0; i < eles.length; i++){

            eles[i].style.color = style.getPropertyValue('--header-foreground-light');

        }

        document.body.style.setProperty('--header-current', style.getPropertyValue('--header-foreground-light'))

    } else {

        document.getElementById("nav").style.padding = "50px 10px";
        document.getElementById("nav").style.backgroundColor = style.getPropertyValue('--header-background-light');
        document.getElementById("title").style.fontSize = style.getPropertyValue('--header-fontsize-big');
        document.getElementById("title").style.color = style.getPropertyValue('--header-foreground-dark');

        var eles = document.getElementsByClassName('page');

        for (var i = 0; i < eles.length; i++){

            eles[i].style.color = style.getPropertyValue('--header-foreground-dark');

        }

        document.body.style.setProperty('--header-current', style.getPropertyValue('--header-foreground-dark'))

    }

    var pos = $(this).scrollTop();

    $('.anchorsection').each(function() {

        var target = $(this).offset().top;
        var id = $(this).attr('id');
        if (pos + 200 >= target) {
            $('#nav > div > a').removeClass('active');
            if (id == null) return;
            $('#nav > div > a[href=\'#' + id + '\']').addClass('active');
        }

    });

});
