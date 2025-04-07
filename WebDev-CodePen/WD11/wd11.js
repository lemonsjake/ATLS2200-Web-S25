$(window).mousemove(function (e) {
  var lft = e.pageX / 35 + 85;
  var tp = e.pageY / 35;
  $(".img").css({ "background-position": "-" + lft + "px -" + tp + "px" });

  var pagewidth = $(window).width();
  var pwcalc = pagewidth / 2;
  var calcX = e.pageX - pwcalc;
  var fclcX = calcX / 45;

  var pageheight = $(window).height();
  var phcalc = pageheight / 2;
  var calcY = e.pageY - phcalc;
  var fclcY = calcY / 60;
  var rtX = (fclcY *= -1);

  var lft2 = e.pageX / 45;
  var tp2 = e.pageY / 35;
  var lft21 = (lft2 *= -1);
  var tp21 = (tp2 *= -1);

  $(".img").css({
    transform:
      "translate(calc(" +
      lft21 +
      "px + 20px)," +
      tp21 +
      "px) rotateY(" +
      fclcX +
      "deg) rotateX(" +
      fclcY +
      "deg)",
  });
});

$(window).mousemove(function (e) {
  var pgwdt = $(window).width();
  var pgwclc = pgwdt / 2;
  var clcX = e.pageX - pgwclc;
  var fclcfX = clcX / 50;
  var fclcfXrev = (fclcfX *= -1);

  var pght = $(window).height();
  var pghclc = pght / 2;
  var clcY = e.pageY - pghclc;
  var fclcfY = clcY / 50 - 12;
  var fclcfYrev = (fclcfY *= -1);

  $(".img").css({
    "box-shadow": +fclcfXrev + "px " + fclcfYrev + "px 40px rgba(0,0,0,0.5)",
  });
});

$("#csmimg").keyup(function () {
  $(".img").css("background-image", "url('" + $("#csmimg").val() + "')");
});

$("#csmimg").on("keyup", function (e) {
  if ($(this).val() == "") {
    $(".img").css(
      "background-image",
      "url(cyberLemons.jpg)"
    );
  }
});
