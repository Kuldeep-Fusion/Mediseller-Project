
setInterval(function() {
    var whatsappIcon = document.getElementById('whatsappIcon');
    whatsappIcon.classList.add('shake'); // Add shake class
    setTimeout(function() {
      whatsappIcon.classList.remove('shake'); // Remove shake class after 0.5s
    }, 500);
  }, 2000); // Repeat every 10 seconds



  // window.addEventListener('scroll', function() {
//     var navbar = document.getElementById('navbar');
//     var scrollPosition = window.scrollY;
//     var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//     var scrollPercentage = (scrollPosition / maxScroll) * 100;
//     var redValue = Math.min(255, Math.floor(scrollPercentage * 2.55));
//     navbar.style.backgroundColor = 'rgb(255,' + (255 - redValue) + ',' + (255 - redValue) + ')';
//   });
  
