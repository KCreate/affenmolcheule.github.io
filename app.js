$(window).ready(function() {

    /* Menu event handler */
    $("nav.mobilenav").on("click", {
        event:event
    }, function(){
        $(".navwrapper").toggleClass("mobilevisible");
    });
    $(".navwrapper ul li ").on("click", {
        event:event
    }, function(){
        if ($(".navwrapper.mobilevisible").length!==0) {
            $(".navwrapper").toggleClass("mobilevisible");
        }
    });

    /* Auto-growing textarea */
    $("textarea").on("onkeyup ", {
        event: event
    }, function() {
        console.log("type")
    });

    /* Google AdSense Layout fix */
    $(".content>ins").css("display", "inline-table");
});
