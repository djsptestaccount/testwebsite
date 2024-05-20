const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




// magical note

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


// curse codes

// declares variables for big circle and small circle in curcer
var curserBig = document.querySelector('.big');
var curserSmall = document.querySelector('.small');
var a = document.querySelectorAll('a');

// position the two circles in a desired placement
document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  curserBig.style.transform =  `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  curserSmall.style.left = x + 'px';
  curserSmall.style.top = y + 'px';
});

//adds class when curser clicks
document.addEventListener('mousedown', function(){
  curserBig.classList.add('click');
  curserSmall.classList.add('hover__small');
});

//remove class when curser stops clicking
document.addEventListener('mouseup', function(){
  curserBig.classList.remove('click');
  curserSmall.classList.remove('hover__small');
});

// adds and remove class when mouse hovers and stops hovering
a.forEach(item =>{
  item.addEventListener('mouseover', () => {
    curserBig.classList.add('hover__big');
    curserSmall.classList.add('hover__small');
  });
  item.addEventListener('mouseleave', () => {
    curserBig.classList.remove('hover__big');
    curserSmall.classList.remove('hover__small');
  });
})


// ---------------------

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}