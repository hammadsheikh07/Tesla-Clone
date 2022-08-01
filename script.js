$(document).ready(function () {
  $(document).scroll(function () {
    $(".innercontainer").show();
    if ($(this).scrollTop() < 700) {
        if ($(this).scrollTop() > 470 && $(this).scrollTop() < 570) {
            $(".innercontainer").fadeOut("slow")
        }
        $("#model").html("Model 3");
    } else if ($(this).scrollTop() < 1700) {
        if ($(this).scrollTop() > 1100 && $(this).scrollTop() < 1200) {
            $(".innercontainer").fadeOut("slow")
        }
        $("#model").html("Model Y");
    } else if ($(this).scrollTop() < 2500) {
        if ($(this).scrollTop() > 1800 && $(this).scrollTop() < 1900) {
            $(".innercontainer").fadeOut("slow")
        }
        $("#model").html("Model S");
    } else if ($(this).scrollTop() < 3300) {
        if ($(this).scrollTop() > 2750 && $(this).scrollTop() < 2850) {
            $(".innercontainer").fadeOut("slow")
        }
        $("#model").html("Model X");
    } else if ($(this).scrollTop() < 4100) {
        if ($(this).scrollTop() > 3550 && $(this).scrollTop() < 3650) {
            $(".innercontainer").fadeOut("slow")
        }
        $("#model").html("Solar Panels");
        $("#des").html("Lowest Cost Solar Panels In America");
        $("#btn1").html("Order Now");
        $("#btn2").html("Learn More");
    } else if ($(this).scrollTop() < 4800) {
        if ($(this).scrollTop() > 4350 && $(this).scrollTop() < 4450) {
            $(".innercontainer").fadeOut("slow")
        }
        $("#model").html("Solar Roof");
        $("#des").html("Produce Clean Energy From Your Roof");
        $("#btn1").html("Order Now");
        $("#btn2").html("Learn More");
    } else if ($(this).scrollTop() < 5300) {
        if ($(this).scrollTop() > 5050 && $(this).scrollTop() < 5150) {
            $(".innercontainer").fadeOut("slow")
        }
        $("#model").html("Accessories");
        $("#des").hide();
        $("btn1").html("Shop Now");
        $("#btn2").hide();
    }
  });
});
