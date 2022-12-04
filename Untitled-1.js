window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = " -100px";
  }
};

function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

     
//window.onscroll = function haed() {myFunction()};не запуск

////var header = document.getElementById("myHeader");
//var sticky = header.offsetTop;

/*function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
$(() => {
  $(".main-myButton").click(() => {
      $(".cont").slideToggle();
  });
});
*/
