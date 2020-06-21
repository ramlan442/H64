// deklarasi variabel
const button = document.getElementById('menu');
const menu = document.getElementById('menu-hp');
const close = document.querySelector('.close');
const navbar = document.querySelectorAll('.navClick');
const begin = document.getElementById('begin');
const navbarHead = document.getElementById('navbar');
const subjudul = document.querySelectorAll('.subjudul');

// navbar menu tampilan mobile
button.addEventListener('click', function (event) {
  event.preventDefault();
  menu.style.width = '100%';
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  menu.style.width = '0';
});

for (nav of navbar) {
  nav.addEventListener('click', function (event) {
    menu.style.width = '0';
  });
}

const subscroll = () => {
  for (sub of subjudul) {
    sub.setAttribute('style', 'color:black;');
  }
};
const unsubscroll = () => {
  for (sub of subjudul) {
    sub.setAttribute('style', 'color:white;');
  }
};

window.addEventListener('scroll', function () {
  if (window.scrollY > begin.offsetTop + begin.offsetHeight) {
    navbarHead.classList.add('scroll-nav');
    subscroll();
  } else {
    navbarHead.classList.remove('scroll-nav');
    unsubscroll();
  }
});
