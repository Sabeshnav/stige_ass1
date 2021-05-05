$(function() {
    var header = $(".navIclass");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 350) {
          console.log("hshus");
            header.removeClass('navIclass').addClass("navBclass");
        } else {
            header.removeClass("navBclass").addClass('navIclass');
        }
    });
});
$(function() {
    var header = $(".bill");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 350) {
          console.log("hshus");
            header.removeClass('bill').addClass("trans");
        } else {
            header.removeClass("trans").addClass('bill');
        }
    });
});
document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move){
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 200;
        let y = (e.clientY * moving_value) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    document.querySelectorAll(".services_object").forEach(function(move){
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 200;
        let y = (e.clientY * moving_value) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });

}
