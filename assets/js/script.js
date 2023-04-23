document.writeln('<script src="assets/js/tweenMax.min.js" type="text/javascript"></script>');


  $(document).ready(function () {
    $("#servie-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true, // enable navigation buttons
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  });

  $(document).ready(function () {
    $("#news-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true, // enable navigation buttons
      navText: ["<img src='assets/images/news/arrow.png'>","<img src='assets/images/news/arrow.png'>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    });
  });


  // ANIMATION

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.target.getAttribute("data-animation"));

      const animation = entry.target.getAttribute("data-animation");

      if (entry.isIntersecting) {
        entry.target.classList.add("animated", `${animation}`);
      } else {
        entry.target.classList.remove("animated", `${animation}`);
      }
    });
  });

  const animatedEls = document.querySelectorAll("[data-animation]");
  animatedEls.forEach((el) => observer.observe(el));